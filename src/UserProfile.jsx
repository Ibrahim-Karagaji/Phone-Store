import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
export default function UserProfile() {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const [userInfo, setUserInfo] = useState({
    name: user.userName,
    email: user.email,
    password: user.password,
    changeNameState: false,
    newName: "",
  });
  const changeNameInput = useRef(null);
  const successfullMassage = useRef(null);
  useEffect(() => {
    window.localStorage.setItem(
      "user",
      JSON.stringify({
        userName: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
      })
    );
  }, [userInfo]);
  return (
    <div className=" text-[#eeeeeed1] !p-[4px]">
      <p
        ref={successfullMassage}
        className="bg-[green] !p-[5px] fixed rounded-[3px] top-[90%] font-semibold left-[-300px] duration-200"
      >
        Your name has changed successfully
      </p>
      <div className="flex justify-between items-center shadow bg-[#eeeeeed1] text-[#063447] rounded-[5px] !p-[3px]">
        <h1 className="text-[25px] !p-[3px] font-semibold">Your Profile</h1>
        <Link to="/">
          <i className="fa-solid fa-house-user text-[20px] duration-200 hover:-translate-y-1 !p-[3px]"></i>
        </Link>
      </div>
      <div className="!mt-[15px] !p-[10px] rounded-[5px] !ml-[auto] !mr-[auto] max-w-[900px] bg-[#002737] shadow">
        <div className="bg-[#063447] !p-[5px] grid gap-3 text-[17px]">
          <h1 className="font-semibold text-[22px] !p-[5px]">General Info</h1>
          <div className="userprofile flex gap-3 items-center overflow-hidden">
            <img src="images-folder/avatar.png" className=" max-h-35" />
            <div className="grid gap-7 w-full ">
              <div className="relative flex items-center gap-1 w-full ">
                <p className="absolute top-[-20px] left-[20px] text-[12px]">
                  User Name
                </p>
                <i className="fa-solid fa-user-tie"></i>
                <p className="!p-[1px] border-b-1 border-b-[#eeeeeed1] w-full">
                  {userInfo.name}
                </p>
              </div>
              <div className="relative flex items-center gap-1 w-full">
                <p className="absolute top-[-16px] left-[24px] text-[12px]">
                  User Email
                </p>
                <i className="fa-solid fa-envelope"></i>
                <p className="!p-[1px] border-b-1 border-b-[#eeeeeed1] w-full">
                  {userInfo.email}
                </p>
              </div>
            </div>
          </div>
          {!userInfo.changeNameState ? (
            <button
              onClick={() => {
                setUserInfo((prev) => {
                  return { ...prev, changeNameState: true };
                });
              }}
              className="flex items-center gap-2 font-semibold !p-[5px] rounded-[3px] bg-[#00b2ff] hover:bg-[#00b3ff8f] justify-center duration-200 "
            >
              <i className="fa-solid fa-pen"></i>
              <p>CHANGE YOUR NAME</p>
            </button>
          ) : (
            <div className="grid gap-6">
              <div
                ref={changeNameInput}
                className="relative flex items-center gap-1 "
              >
                <i className="fa-solid fa-pen"></i>
                <input
                  onInput={(e) => {
                    setUserInfo((prev) => {
                      return { ...prev, newName: e.target.value };
                    });
                  }}
                  placeholder="Your New Name"
                  className="border-b-2 border-b-[#eeeeeed1] w-full"
                />
                <p className="absolute text-[13px] text-[red] bottom-[-18px] left-[19px] opacity-0 z-0 duration-100">
                  Your Name Should Be More Than 3 Letters
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    if (userInfo.newName.length <= 3) {
                      changeNameInput.current.children[1].style.borderBottomColor =
                        "red";
                      changeNameInput.current.children[1].style.color = "red";
                      changeNameInput.current.children[0].style.color = "red";
                      changeNameInput.current.children[0].style.color = "red";
                      changeNameInput.current.children[2].style.opacity =
                        "100%";
                    } else {
                      changeNameInput.current.children[1].style.borderBottomColor =
                        "transparent";
                      changeNameInput.current.children[1].style.color =
                        "transparent";
                      changeNameInput.current.children[0].style.color =
                        "transparent";
                      changeNameInput.current.children[0].style.color =
                        "transparent";
                      changeNameInput.current.children[2].style.opacity = "0%";
                      setUserInfo((prev) => {
                        return {
                          ...prev,
                          changeNameState: false,
                          name: userInfo.newName,
                        };
                      });
                      successfullMassage.current.style.left = "10px";
                      setTimeout(() => {
                        successfullMassage.current.style.left = "-300px";
                      }, 3000);
                    }
                  }}
                  className="font-semibold !p-[3px] rounded-[3px] bg-[#00b2ff] hover:bg-[#00b3ff8f] duration-200"
                >
                  CHANGE
                </button>
                <button
                  onClick={() => {
                    setUserInfo((prev) => {
                      return { ...prev, changeNameState: false };
                    });
                  }}
                  className="font-semibold !p-[3px] rounded-[3px] bg-[#00b2ff] hover:bg-[#00b3ff8f] duration-200"
                >
                  BACK
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="grid gap-3 justify-items-center !mb-[15px]">
        <h1 className="font-semibold text-[21px]">Your Orders</h1>
        <div className="flex flex-wrap gap-3 justify-center">
          <div className="grid justify-items-center !p-[5px] rounded-[3px] bg-amber-300 min-w-[250px] min-h-[200px] text-[23px] font-semibold">
            <p>PENDING</p> <span className="text-[30px]">0</span>
          </div>
          <div className="grid justify-items-center !p-[5px] rounded-[3px] bg-green-500 min-w-[250px] min-h-[200px] text-[23px] font-semibold">
            <p>COMPLETED</p>
            <span className="text-[30px]">
              {window.localStorage.getItem("orderComplete") == null
                ? 0
                : JSON.parse(window.localStorage.getItem("orderComplete"))
                    .length}
            </span>
          </div>
          <div className="grid justify-items-center !p-[5px] rounded-[3px] bg-red-600 min-w-[250px] min-h-[200px] text-[23px] font-semibold">
            <p>CANCLED</p> <span className="text-[30px]">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
