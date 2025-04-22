import { useRef } from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
  const passwordInput = useRef(null);
  const repitPasswordInput = useRef(null);

  function handleThePasswords(f, s) {
    if (s != f) {
      passwordInput.current.style.border = "solid 1px red";
      repitPasswordInput.current.style.border = "solid 1px red";
    } else {
      passwordInput.current.style.border = "solid 1px green";
      repitPasswordInput.current.style.border = "solid 1px green";
    }
  }

  return (
    <div className="text-[#eeeeeed1] !p-[3px] min-h-[100vh]">
      <Link to="/">
        <i className="fa-solid fa-arrow-left text-[25px] !m-[30px] hover:text-[#b5b5b5d1]"></i>
      </Link>
      <div className="flex justify-center !m-[100px] text-[#063447]">
        <div className="!p-[10px] bg-[#eeeeeed1] rounded-[5px] shadow w-[fit-content]">
          <div className="flex justify-center gap-2 text-[25px]">
            <h1 className="font-bold">Log in</h1>
            <i className="fa-solid fa-arrow-right-to-bracket !mt-[10px]"></i>
          </div>
          <form
            onSubmit={(e) => {
              const formData = new FormData(e.target);
              const fPassword = formData.get("password");
              const sPassword = formData.get("repitPassword");
              if (fPassword != sPassword) {
                handleThePasswords(fPassword, sPassword);
                e.preventDefault();
              } else handleThePasswords(fPassword, sPassword);
            }}
            className="grid gap-4 !mt-[15px]"
          >
            <input
              type="Email"
              name="Email"
              required
              placeholder="example@gmail.com"
              min="5"
              className="rounded-[5px] bg-[#063447] text-[#eeeeeed1] !p-[8px] w-[350px]"
            />
            <input
              ref={passwordInput}
              type="password"
              name="password"
              required
              minLength="8"
              maxLength="8"
              className="rounded-[5px] bg-[#063447] text-[#eeeeeed1] !p-[8px] w-[350px]"
              placeholder="Password"
            />
            <input
              ref={repitPasswordInput}
              type="Password"
              name="repitPassword"
              required
              minLength="8"
              maxLength="8"
              className="rounded-[5px] bg-[#063447] text-[#eeeeeed1] !p-[8px] w-[350px]"
              placeholder="repit Your Password"
            />
            <button
              onClick={() => handleThePasswords}
              disabled={false}
              className="!p-[5px] bg-[#063447] rounded-[5px] text-[#eeeeeed1] text-[20px] hover:bg-[#042431] duration-500"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
