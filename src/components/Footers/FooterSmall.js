import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-blueGray-800"
            : "relative") + " pb-6"
        }
      >
      <div className="flex flex-wrap items-center md:justify-between justify-center  bg-yellow-500 p-2">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm  text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()} Talimaat e Ahlibayt
                by{" "}
                <a
                  href="https://www.creative-tim.com?ref=nr-footer"
                  className="text-blueGray-200 hover:text-blueGray-300"
                >
                  TechEver Solution's
                </a>
                .
              </div>
            </div>
          </div>
      </footer>
    </>
  );
}
