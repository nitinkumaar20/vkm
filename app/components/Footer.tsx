import React from "react";

const Footer = () => {
  return (
    <section>
      <footer className="px-5 lg:px-24 py-10">
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="w-1/3">
            <h4 className="font-bold text-xl">Vkm healing ministry</h4>
            <h6 className="text-base font-medium">
              VKM Healing Ministry, led by Prophet Vishal Karanwal, is dedicated
              to offering healing and restoration through prayer and spiritual
              guidance. The ministry focuses on bringing hope, transformation,
              and wellness to individuals through prophetic teachings and
              healing services.
            </h6>
          </div>

          <div className="w-1/3 flex  flex-col items-center">
            <h4 className="text-black font-bold text-xl pb-2">Social Links</h4>
            <div className="flex gap-5">
              <a href="https://www.instagram.com/nitinkumaar20/" target="_new">
                <img
                  className="w-[2rem] h-[2rem]"
                  src="https://drive.google.com/thumbnail?id=11frbUW4tMzluvv-Oov9CeDlM6ucBRTRP&sz=w1000"
                  alt="error"
                />
              </a>

              <a href="https://wa.me/" target="_new">
                <img
                  className="w-[2rem] h-[2rem]"
                  src="https://drive.google.com/thumbnail?id=1a4VQwKu67oZOJz3L3MNXV-TLVkjv_kIp&sz=w1000"
                  alt="error"
                />
              </a>

              <a href="https://www.linkedin.com/in/nitink4800/" target="_new">
                <img
                  className="w-[2rem] h-[2rem]"
                  src="https://drive.google.com/thumbnail?id=1yliVlKIY9U5xLCLgf-XfECBV-q1ByAMk&sz=w1000"
                  alt="error"
                />
              </a>
            </div>
          </div>

          <div className="w-1/3 ">
            <h4 className="text-black font-bold text-xl pb-2">Quick Links</h4>
            <div className=" flex-col  pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block text-gray-700 hover:text-gray-900  py-2 rounded-md font-bold"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-gray-900  py-2 rounded-md font-bold"
              >
                About
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-gray-900  py-2 rounded-md font-bold"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
