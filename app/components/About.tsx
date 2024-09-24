import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          At <span className="font-semibold">[Your Company Name]</span>, we're passionate about <span className="font-semibold">[what you do]</span>. 
          Since our founding in <span className="font-semibold">[year]</span>, we've been committed to delivering 
          <span className="font-semibold">[products/services]</span> that <span className="font-semibold">[benefit your target audience]</span>.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-600 mb-8">
          Our mission is to <span className="font-semibold">[state your mission]</span>. We believe in <span className="font-semibold">[core values]</span>, 
          and these principles guide everything we do.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Us?</h3>
        <p className="text-lg text-gray-600">
          What sets us apart is <span className="font-semibold">[unique qualities]</span> that drive us to exceed expectations and 
          continuously innovate in our field.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
