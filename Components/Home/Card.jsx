import React from "react";

export default function Card() {
  return (
    <>
      <div className="Pricing grid w-full justify-items-start p-4 max-w-5xl m-auto sm:grid-cols-1  sm:justify-items-center text-amber-50">
        <h1 className="text-3xl font-bold"> Pricing</h1>
        <hr className="text-[#F50D32] w-14  mb-6 " />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        veritatis, officiis  <br />{" "}
        <span>
          magni assumenda dolores. Ullam corporis rem temporibus labore?
        </span>
      </div>

      <div className="grid justify-items-center gap-4 max-w-5xl m-auto my-4 sm:grid-cols-1 sm:justify-items-center lg:grid-cols-3 lg:justify-items-center lg:py-10">
        <div className="card grid grid-cols-1 gap-2 text-amber-50 border-2 border-amber-50 w-80 h-full py-10 px10 rounded-2xl justify-items-center">
          <h1 className="text-xl">Silver</h1>
          <div className="bg-[#F50D32] rounded-3xl grid grid-cols-1 w-10 h-full ">
            <span className="p-2 ">
              <img src="/icons/Vector.svg" alt="" />
            </span>
          </div>
          <p className=" font-bold p-2 text-4xl">$49</p>
          <div className=" grid grid-cols-1  ">
            <li className="list-image-[url(/icons/Group14.svg)] ">
              <span className="px-4 relative -top-2">
                Lorem, ipsum dolor
                <span className="grid grid-cols-1 justify-items-end">
                  it amet consecteturs
                </span>{" "}
              </span>
            </li>
            <li className="list-image-[url(/icons/Group14.svg)] ">
              <span className="px-4 relative -top-2">
                Lorem, ipsum dolor
                <span className="grid grid-cols-1 justify-items-end">
                  it amet consecteturs
                </span>
              </span>
            </li>
            <li className="list-image-[url(/icons/Group14.svg)] ">
              <span className="px-4 relative -top-2">
                Lorem, ipsum dolor{" "}
                <span className="grid grid-cols-1 justify-items-end">
                  it amet consecteturs
                </span>{" "}
              </span>
            </li>
          </div>
          <button className=' grid grid-rows-1 justify-items-start border-2 border-amber-50 py-2 px-4 rounded-xl'  >Select Plan  ➡</button>
        </div>
        <div className="card grid grid-cols-1 gap-2 text-amber-50 border-2 border-amber-50 w-80 h-full py-10 px10 rounded-2xl justify-items-center">
          <h1 className="text-xl">Gold</h1>
          <div className="bg-[#F50D32] rounded-3xl grid grid-cols-1 w-10 h-full ">
            <span className="p-2 ">
              <img src="/icons/Vector.svg" alt="" />
            </span>
          </div>
          <p className=" font-bold p-2 text-4xl">$99</p>
          <div className=" grid grid-cols-1  ">
            <li className="list-image-[url(/icons/Group14.svg)] ">
              <span className="px-4 relative -top-2">
                Lorem, ipsum dolor
                <span className="grid grid-cols-1 justify-items-end">
                  it amet consecteturs
                </span>{" "}
              </span>
            </li>
            <li className="list-image-[url(/icons/Group14.svg)] ">
              <span className="px-4 relative -top-2">
                Lorem, ipsum dolor
                <span className="grid grid-cols-1 justify-items-end">
                  it amet consecteturs
                </span>
              </span>
            </li>
            <li className="list-image-[url(/icons/Group14.svg)] ">
              <span className="px-4 relative -top-2">
                Lorem, ipsum dolor
                <span className="grid grid-cols-1 justify-items-end">
                  it amet consecteturs
                </span>
              </span>
            </li>
          </div>
          <button className=' grid grid-rows-1 justify-items-start bg-[#F50D32]  py-2 px-4 rounded-xl'  >Select Plan  ➡</button>
        </div>
        <div className="card grid grid-cols-1 gap-2 text-amber-50 border-2 border-amber-50 w-80 h-full py-10 px10 rounded-2xl justify-items-center">
          <h1 className="text-xl">Platinum</h1>
          <div className="bg-[#F50D32] rounded-3xl grid grid-cols-1 w-10 h-full ">
            <span className="p-2 ">
              <img src="/icons/trophy.svg" alt="" />
            </span>
          </div>
          <p className=" font-bold p-2 text-4xl">$149</p>
          <div className=" grid grid-cols-1  ">
            <li className="list-image-[url(/icons/Group14.svg)] ">
              <span className="px-4 relative -top-2">
                Lorem, ipsum dolor
                <span className="grid grid-cols-1 justify-items-end">
                  it amet consecteturs
                </span>{" "}
              </span>
            </li>
            <li className="list-image-[url(/icons/Group14.svg)] ">
              <span className="px-4 relative -top-2">
                Lorem, ipsum dolor
                <span className="grid grid-cols-1 justify-items-end">
                  it amet consecteturs
                </span>
              </span>
            </li>
            <li className="list-image-[url(/icons/Group14.svg)] ">
              <span className="px-4 relative -top-2">
                Lorem, ipsum dolor{" "}
                <span className="grid grid-cols-1 justify-items-end">
                  it amet consecteturs
                </span>{" "}
              </span>
            </li>
          </div>
          <button className=' grid grid-rows-1 justify-items-start border-2 border-amber-50 py-2 px-4 rounded-xl'  >Select Plan  ➡</button>
        </div>
      </div>
    </>
  );
}
