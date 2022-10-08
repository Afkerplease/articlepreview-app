import "./App.css";
import picture from "./images/drawers.jpg";
import michelle from "./images/avatar-michelle.jpg";
import share from "./images/icon-share.svg";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(true);
  return (
    <div>
      <main className="bg-grayishBlue h-[100vh] flex flex-col items-center justify-center  ">
        <div className="container  w-[375px] mx-auto rounded-[20px] overflow-hidden md:w-[1024px]   ">
          <div className="md:flex ">
            <img className="md:w-[50%] " src={picture} alt="" />

            <div className="flex flex-col">
              <div className="bg-[white] p-8  ">
                <h2 className="text-darkGray text-[1.2rem] font-ManRope font-[700] mb-4 md:text-[1.4rem] ">
                  Shift the overall look and feel by adding these wonderful
                  touches to furniture in your home
                </h2>{" "}
                <p className=" text-[13px] md:text-[18px] md:mb-20  text-grayishBlue font-ManRope leading-[1.5rem] font-[400]  ">
                  Ever been in a room and felt like something was missing?
                  Perhaps it felt slightly bare and uninviting. I’ve got some
                  simple tips to help you make any room feel complete.
                </p>{" "}
              </div>
              {clicked ? (
                <div className="flex justify-between items-center   bg-[white] pl-4 pr-4 pb-4   ">
                  <div className="flex">
                    <img
                      className="w-[50px] rounded-full mr-3 "
                      src={michelle}
                      alt=""
                    />
                    <div className="grid">
                      <h3 className=" font-ManRope text-darkGray  font-bold">
                        Michelle Appleton{" "}
                      </h3>
                      <p className="text-[13px] text-grayishBlue font-ManRope ">
                        28 Jun 2020{" "}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setClicked(!clicked);
                    }}
                    className=" bg-lightBlue p-3 rounded-full justify-center flex items-center "
                  >
                    <img className="text-center" src={share} alt="" />{" "}
                  </button>
                </div>
              ) : (
                <Footer setClicked={setClicked} />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
