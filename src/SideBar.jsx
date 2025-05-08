import { filtersStateContext } from "./FiltersState";
import { useContext, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function SideBar() {
  const filters = useContext(filtersStateContext);
  const option = useRef(null);
  const [descriptionOptions, setDescriptionOptions] = useState("");

  return (
    <div className=" relative SideBar min-w-[155px] basis-[12%] shadow-[0px_0px_5px_0px_black] rounded-[5px] duration-300 ">
      {window.localStorage.getItem("user") == null ? (
        <i className="fa-solid fa-circle-user profileIcon !p-[3px] hover:text-[#063447] hover:bg-[#eeeeeed1] duration-300 rounded-[4px] !flex w-[fit-content] !ml-[auto] text-[30px]"></i>
      ) : (
        <img
          src="images-folder/avatar.png"
          className="w-[35px] !ml-[auto] profileImage"
        />
      )}

      {window.localStorage.getItem("user") == null ? (
        <div className="logInFirstParent opacity-0 absolute text-[13px] font-normal right-[-175px] flex gap-3 text-[#063447] bg-[#eee] items-center !p-[3px] rounded-[5px] border-[#063447] border-[2px] top-[0px] duration-300">
          <p>You have to log in first</p>
          <i class="fa-solid fa-arrow-right-from-bracket logInFirst"></i>
        </div>
      ) : (
        <p className="absolute opacity-0 profile z-20 text-[#063447] bg-[#eee] border-[#063447] border-[2px] text-[15px] font-medium right-[-100px] top-[0px] !p-[3px] rounded-[5px] duration-300">
          Your Profile
        </p>
      )}
      <div className="content grid gap-[3px] text-[#eeeeeed1] !m-[10px_0px_0px]">
        <Link to="/List-Phones">
          <div
            onMouseEnter={() => {
              setDescriptionOptions("Best Selaing");
              option.current.style.opacity = "100%";
              option.current.style.top = "45px";
              option.current.style.right = "-100px";
            }}
            onMouseLeave={() => {
              option.current.style.opacity = "0%";
              setDescriptionOptions("");
            }}
            className="flex justify-end gap-[8px] relative items-center rounded-[2px] !pr-[10px] !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-300"
          >
            <p>Best Selaing</p>
            <i className="fa-solid fa-fire"></i>
          </div>
        </Link>
        <Link to="/List-Phones">
          <div
            onMouseEnter={() => {
              setDescriptionOptions("phones List");
              option.current.style.opacity = "100%";
              option.current.style.top = "88px";
              option.current.style.right = "-95px";
            }}
            onMouseLeave={() => {
              option.current.style.opacity = "0%";
              setDescriptionOptions("");
            }}
            className="flex justify-end gap-[8px] items-center rounded-[2px] !pr-[10px] !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-300"
          >
            <p>Phone List</p>
            <i className="fa-solid fa-list"></i>
          </div>
        </Link>
        <Link
          onMouseEnter={() => {
            setDescriptionOptions("Flagship");
            option.current.style.opacity = "100%";
            option.current.style.top = "132px";
            option.current.style.right = "-75px";
          }}
          onMouseLeave={() => {
            option.current.style.opacity = "0%";
            setDescriptionOptions("");
          }}
          onClick={() => filters.handleAddCategoryState("Flagship")}
          to="/List-Phones"
        >
          <div className="flex justify-end gap-[8px] items-center rounded-[2px] !pr-[10px] !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-300">
            <p>Flagship</p>
            <i className="fa-solid fa-rocket"></i>
          </div>
        </Link>
        <Link to="/List-Phones">
          <div
            onMouseEnter={() => {
              setDescriptionOptions("Mid-range");
              option.current.style.opacity = "100%";
              option.current.style.top = "173px";
              option.current.style.right = "-90px";
            }}
            onMouseLeave={() => {
              option.current.style.opacity = "0%";
              setDescriptionOptions("");
            }}
            onClick={() => filters.handleAddCategoryState("Mid-range")}
            className="flex justify-end gap-[8px] items-center rounded-[2px] !pr-[10px] !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-300"
          >
            <p>Mid-range</p>
            <i className="fa-solid fa-star"></i>
          </div>
        </Link>
        <Link to="/List-Phones">
          <div
            onMouseEnter={() => {
              setDescriptionOptions("Budget");
              option.current.style.opacity = "100%";
              option.current.style.top = "215px";
              option.current.style.right = "-65px";
            }}
            onMouseLeave={() => {
              option.current.style.opacity = "0%";
              setDescriptionOptions("");
            }}
            onClick={() => filters.handleAddCategoryState("Budget")}
            className="flex justify-end gap-[8px] items-center rounded-[2px] !pr-[10px] !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-300"
          >
            <p>Budget</p>
            <i className="fa-solid fa-lines-leaning"></i>
          </div>
        </Link>
      </div>
      <h1
        className="descriptionSideBarOptionsi"
        ref={option}
        style={{
          position: "absolute",
          right: "-100px",
          top: "45px",
          fontSize: "15px",
          zIndex: "100",
          backgroundColor: "#eeeeeed1",
          color: "#063447",
          borderRadius: "5px",
          border: "#063447 solid 2px",
          padding: "3px",
          fontWeight: "500",
          opacity: "0%",
          transition: ".3s",
        }}
      >
        {descriptionOptions}
      </h1>
    </div>
  );
}
