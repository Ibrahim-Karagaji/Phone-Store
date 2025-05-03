import { useState } from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleCheckdata = () => {
    if (data.password.length >= 8)
      if (data.name.length >= 3)
        if (data.email.length >= 3 && data.email.includes("@")) return true;
        else return false;
      else return false;
    else return false;
  };

  return (
    <div className="text-[#eeeeeed1] !p-[3px] min-h-[100vh]">
      <Link to="/">
        <i className="fa-solid fa-arrow-left text-[25px] !m-[30px] hover:text-[#b5b5b5d1]"></i>
      </Link>
      <div className="flex justify-center !mt-[60px] text-[#063447]">
        <div className="!p-[10px] bg-[#eeeeeed1] rounded-[5px] shadow w-[fit-content]">
          <div className="flex justify-center gap-2 text-[25px]">
            <h1 className="font-bold">Log in</h1>
            <i className="fa-solid fa-arrow-right-to-bracket !mt-[10px]"></i>
          </div>
          <form className="grid gap-2 !mt-[15px]">
            <input
              onInput={(e) =>
                setData((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="rounded-[5px] bg-[#063447] text-[#eeeeeed1] !p-[8px] "
            />
            <input
              onInput={(e) =>
                setData((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
              type="Email"
              name="Email"
              required
              placeholder="example@gmail.com"
              min="5"
              className="rounded-[5px] bg-[#063447] text-[#eeeeeed1] !p-[8px] "
            />
            <input
              onInput={(e) =>
                setData((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
              type="password"
              name="password"
              required
              minLength="8"
              maxLength="8"
              className="rounded-[5px] bg-[#063447] text-[#eeeeeed1] !p-[8px] "
              placeholder="Password"
            />
            {handleCheckdata() ? (
              <Link
                to="/"
                onClick={() => {
                  window.localStorage.setItem(
                    "user",
                    JSON.stringify({
                      userName: data.name,
                      email: data.email,
                      password: data.password,
                    })
                  );
                }}
              >
                <button
                  type="submit"
                  className="w-[100%] !p-[5px] text-center bg-[#063447] rounded-[5px] text-[#eeeeeed1] text-[20px] hover:bg-[#042431] duration-500"
                >
                  Log in
                </button>
              </Link>
            ) : (
              <button
                onClick={(e) => {}}
                type="submit"
                className="w-[100%] !p-[5px] text-center bg-[#063447] rounded-[5px] text-[#eeeeeed1] text-[20px] hover:bg-[#042431] duration-500"
              >
                Log in
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
