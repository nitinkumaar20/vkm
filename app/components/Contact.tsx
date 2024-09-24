import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex p-10">
        <div>
          <h1 className="font-semibold text-xl text-center">
            Contact Head Branch
          </h1>

          <div className="flex">
            <div>
              <svg
                className="h-14 w-14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 2.75c-1.615 0-3.075.404-4.135 1.388C1.795 5.132 1.25 6.607 1.25 8.5v7c0 1.893.545 3.369 1.615 4.362 1.06.984 2.52 1.388 4.135 1.388h10c1.615 0 3.075-.404 4.135-1.388 1.07-.993 1.615-2.469 1.615-4.362v-7c0-1.893-.545-3.368-1.615-4.362-1.06-.984-2.52-1.388-4.135-1.388H7Zm12.229 5.612a.75.75 0 0 0-.918-1.187l-5.547 4.287a1.25 1.25 0 0 1-1.528 0L5.689 7.175a.75.75 0 1 0-.918 1.187l5.548 4.287a2.75 2.75 0 0 0 3.362 0l5.548-4.287Z"
                  fill="#000"
                />
              </svg>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold">Email Address</h1>
              <p className="text-lg font-medium">
                {" "}
                info@ankurnarula.org prayer@ankurnarula.org
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <svg
                className="h-14 w-14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#1C274C">
                  <path
                    opacity=".5"
                    d="m14.556 15.548-.455.48s-1.083 1.139-4.038-1.972c-2.955-3.111-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L7.374 4.91C6.61 3.83 5.135 3.688 4.26 4.609L2.691 6.26c-.433.457-.723 1.048-.688 1.705.09 1.68.808 5.293 4.812 9.51 4.247 4.47 8.232 4.648 9.861 4.487.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336Z"
                  />
                  <path d="M17 12a5 5 0 1 0-4.478-2.774.817.817 0 0 1 .067.574l-.298 1.113a.65.65 0 0 0 .796.796l1.113-.298a.817.817 0 0 1 .574.067A4.98 4.98 0 0 0 17 12Z" />
                </g>
              </svg>
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold">Call Us</h1>
              <p>Phone: 01815207777</p>
            </div>
          </div>

          <div className="flex">
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

        <div className="">
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
