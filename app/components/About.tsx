import React from 'react';
const AboutSection: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-fixed bg-center bg-cover mt-5"
      id='about'
      style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2023/04/25/15/08/church-7950418_1280.jpg")' }}
    >
      <div className="absolute inset-0 grid lg:grid-cols-2 items-center justify-center lg:px-24 px-10">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-start">ABOUT</h1>
          <p className="text-start mt-4 "> VKM Healing Ministry, led by Prophet Vishal Karanwal, is dedicated
              to offering healing and restoration through prayer and spiritual
              guidance. The ministry focuses on bringing hope, transformation,
              and wellness to individuals through prophetic teachings and
              healing services.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
