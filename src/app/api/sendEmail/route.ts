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
        rejectUnauthorized: false
      },
      pool: true, // Use pooled connections
      maxConnections: 5,
      maxMessages: 100,
      rateDelta: 1000, // 1 second
      rateLimit: 5 // 5 messages per second
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP verification failed:', {
        error: verifyError,
        environment: process.env.NODE_ENV,
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT
      });
      return NextResponse.json(
        { error: 'Failed to verify email configuration' },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: `"NexusWave" <${process.env.EMAIL_USER}>`,
      to: 'rakulck31@gmail.com',
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
      replyTo: email // Allow replying directly to the sender
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