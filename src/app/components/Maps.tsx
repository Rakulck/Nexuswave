import React from 'react';

const Maps = () => {
  return (
    <div className="w-full h-[400px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.4034447494483!2d-77.39791492346945!3d38.94664994649726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b647f1a8f7b02f%3A0x1c8c538b3796d4d0!2s13800%20Coppermine%20Rd%2C%20Herndon%2C%20VA%2020171!5e0!3m2!1sen!2sus!4v1709697844045!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      />
    </div>
  );
};

export default Maps; 