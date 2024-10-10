import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className="max-w-[1200px] 2xl:max-w-[1440px] md:mx-auto ">
      <footer className="px-5 lg:px-24 py-10">
        <div className="grid gap-10 grid-cols-2 lg:grid-cols-3 ">
          <div className=" col-span-2 lg:col-span-1">
            <h4 className="font-bold text-xl">Vkm healing ministry</h4>
            <h6 className="text-base font-medium">
              VKM Healing Ministry, led by Prophet Vishal Karanwal, is dedicated
              to offering healing and restoration through prayer and spiritual
              guidance. The ministry focuses on bringing hope, transformation,
              and wellness to individuals through prophetic teachings and
              healing services.
            </h6>
          </div>

          <div className=" flex  flex-col items-center">
            <h4 className="text-black font-bold text-xl pb-2">Social Links</h4>
            <div className="flex gap-5">
              <a href="https://www.instagram.com" target="_new">
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

              <a href="https://www.linkedin.com" target="_new">
                <img
                  className="w-[2rem] h-[2rem]"
                  src="https://drive.google.com/thumbnail?id=1yliVlKIY9U5xLCLgf-XfECBV-q1ByAMk&sz=w1000"
                  alt="error"
                />
              </a>
            </div>
          </div>

          <div className=" ">
            <h4 className="text-black font-bold text-xl pb-2">Quick Links</h4>
            <div className=" flex-col  pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block text-black hover:text-yellow-500  py-2 rounded-md font-bold"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block text-black hover:text-yellow-500  py-2 rounded-md font-bold"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block text-black hover:text-yellow-500  py-2 rounded-md font-bold"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
