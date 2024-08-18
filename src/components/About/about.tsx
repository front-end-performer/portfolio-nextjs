"use client";

// import { Parallax } from "react-scroll-parallax";
import "./about.css";

export default function About({
  title,
  subTitle1,
  subTitle2,
  description,
}: any) {
  return (
    <section
      id="about"
      className="show-onscroll flex items-center w-screen min-h-[650px] h-full bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block border-2 border-red-800 text-black">
          1
        </div>
        <div className="border-2 border-red-800 text-black">
          <div className="flex flex-col w-full justify-start px-8 md:px-16 py-16 border-l-8 border-t-8 border-b-8 border-slate-900">
            <h3 className="text-xl underline underline-offset-4 text-[#FF0F3D] pb-12">
              {title}
            </h3>

            <p className="text-5xl font-black">{subTitle1}</p>
            <p className="text-5xl font-black">{subTitle2}</p>
          </div>

          <p className="max-w-2xl text-normal font-light w-full mt-8 md:w-3/4 pl-4 md:pl-20">
            {description}
          </p>
        </div>
      </div>
      {/* <Parallax translateY={[50, -50]}> */}
      {/* <div className="flex flex-col sm:flex-row justify-center items-center w-full h-full">
          <div className="hidden md:flex w-1/2 grow justify-end">
            <div className="realtive">
              <div className="relative overflow-hidden origin-center rotate-45 bg-[#FF0F3D] w-[400px] h-[400px] z-0">
                <div className="relative top-0 bg-[url('/about/about.jpeg')] bg-[length:110%] bg-contain bg-no-repeat aboutImage w-[400px] h-[400px] z-10" />
              </div>
              <div className="absolute bottom-12 w-28 h-16 px-16 py-12 left-24 border-8 border-[#FF0F3D] z-10" />
            </div>
          </div>

          <div className="flex flex-col w-full md:w-1/2 grow">
            <div className="relative -top-20 flex flex-col w-full justify-start px-20 py-16 border-l-8 border-t-8 border-b-8 border-slate-900">
              <h3 className="text-xl underline underline-offset-4 text-[#FF0F3D] pb-12">
                {title}
              </h3>

              <p className="text-5xl font-black">{subTitle1}</p>
              <p className="text-5xl font-black">{subTitle2}</p>
            </div>

            <p className="max-w-2xl text-normal font-light w-full md:w-3/4 pl-4 md:pl-24">
              {description}
            </p>
          </div>
        </div> */}
      {/* </Parallax> */}
    </section>
  );
}
