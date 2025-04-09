import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, message } = await req.json();

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email configuration:', {
        hasEmailUser: !!process.env.EMAIL_USER,
        hasEmailPass: !!process.env.EMAIL_PASS,
        environment: process.env.NODE_ENV
      });
      return NextResponse.json(
        { error: 'Email configuration is missing' },
        { status: 500 }
      );
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: "TLSv1.2"
      },
      pool: true,
      maxConnections: 5,
      maxMessages: 100,
      rateDelta: 1000,
      rateLimit: 5,
      debug: process.env.NODE_ENV === 'development'
    });

    // Verify transporter configuration with detailed error logging
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', {
        error: verifyError instanceof Error ? verifyError.message : 'Unknown error',
        code: (verifyError as any).code,
        command: (verifyError as any).command,
        environment: process.env.NODE_ENV,
        hasEmailUser: !!process.env.EMAIL_USER,
        hasEmailPass: !!process.env.EMAIL_PASS,
        deploymentUrl: process.env.VERCEL_URL
      });
      return NextResponse.json(
        { 
          error: 'Failed to verify email configuration',
          details: process.env.NODE_ENV === 'development' ? verifyError : undefined
        },
        { status: 500 }
      );
    }

    // Email content with domain verification
    const mailOptions = {
      from: {
        name: "Techspire",
        address: process.env.EMAIL_USER
      },
      to: 'rakulck31@gmail.com', // Send to your Gmail address
      subject: `New Demo Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `
        New Demo Request
        Name: ${firstName} ${lastName}
        Email: ${email}
        Message: ${message}
      `,
      replyTo: email,
      headers: {
        'X-Entity-Ref-ID': new Date().getTime().toString(),
        'List-Unsubscribe': `<mailto:rakulck31@gmail.com>`,
        'X-Origin': 'https://nexuswave.vercel.app'
      }
    };

    // Send email with retry logic
    let retries = 3;
    let lastError = null;

    while (retries > 0) {
      try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json(
          { message: 'Email sent successfully' },
          { status: 200 }
        );
      } catch (sendError) {
        lastError = sendError;
        console.error(`Email send attempt ${4 - retries} failed:`, {
          error: sendError,
          environment: process.env.NODE_ENV
        });
        retries--;
        if (retries > 0) {
          // Wait for 1 second before retrying
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
    }

    // If all retries failed
    throw lastError;

  } catch (error) {
    console.error('Final error sending email:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      environment: process.env.NODE_ENV
    });
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
} 