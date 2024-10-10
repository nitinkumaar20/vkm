import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1200px] 2xl:max-w-[1440px] md:mx-auto">
      <div className="flex lg:p-10 p-5 md:flex-row flex-col">
        <div>
          <h1 className="font-bold text-xl text-center py-5">
            Contact Head Branch
          </h1>

          <div className="flex gap-3">
            <div>
              <svg
                className="h-14 w-14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7.005 9C7.005 8.45 7.45 8 8 8H16C16.55 8 17 8.45 17 9V15C17 15.55 16.55 16 16 16H8C7.45 16 7 15.55 7 15L7.005 9ZM12 12.5L8.00001 9.99997V15H16V9.99997L12 12.5ZM12 11.5L8.00001 9.00001H16L12 11.5Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>{" "}
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold">Email Address</h1>
              <p className="text-lg ">
                {" "}
                info@ankurnarula.org prayer@ankurnarula.org
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div >
              <svg
 className="h-12 w-12 relative left-1"
                version="1.1"
                id="_x32_"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#000"
              >
                <g id="SVGRepo_iconCarrier">
                  <style></style>
                  <path d="M337.168 289.578c-5.129-5.133-13.457-5.133-18.598 0l-16.031 16.038c-4.68 4.68-12.122 5.149-17.352 1.102 0 0-15.332-10.109-40.402-35.179s-35.175-40.414-35.175-40.414c-4.055-5.226-3.578-12.656 1.102-17.343l16.031-16.031c5.141-5.134 5.141-13.462 0-18.594l-35.34-35.343c-5.133-5.133-13.453-5.133-18.594 0-.122.125-1.906 1.906-21.309 21.32-22.602 22.594 7.293 91.82 57.574 142.118 50.289 50.281 119.527 80.164 142.121 57.578 19.394-19.406 21.184-21.203 21.305-21.32 5.141-5.133 5.141-13.461 0-18.586l-35.332-35.346z" />
                  <path d="M256 0C114.614 0 0 114.617 0 256s114.614 256 256 256 256-114.617 256-256S397.386 0 256 0zm0 472c-119.102 0-216-96.898-216-216S136.898 40 256 40s216 96.898 216 216-96.898 216-216 216z" />
                </g>
              </svg>
            </div>

            <div className="flex flex-col px-2">
              <h1 className="font-bold">Call Us</h1>
              <p>Phone: 01815207777</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div>
              <svg
                className="h-14 w-14"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M49 18.92a23.74 23.74 0 0 0-23.73 23.85c0 16.48 17 31.59 22.23 35.59a2.45 2.45 0 0 0 3.12 0c5.24-4.12 22.1-19.11 22.1-35.59A23.74 23.74 0 0 0 49 18.92Zm0 33.71a10 10 0 1 1 10-10 10 10 0 0 1-10 10Z" />
              </svg>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold">Address</h1>
              <p>
                ANKUR NARULA MINISTRIES, Village Khambra, Nakodar Rd, Near T.V
                tower, Jalandhar- Punjab 144026
              </p>
            </div>
          </div>
        </div>

        <div className="py-5 text-center flex justify-center items-center">
          <img
            src="https://drive.google.com/thumbnail?id=10H9p9LwrPmOBh1lLtWh9PaYSy99K67Tr&sz=w500"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
