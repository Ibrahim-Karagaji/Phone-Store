import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="text-[#eeeeeed1] !p-[3px] min-w-[640px] min-h-[100vh]">
      <Link to="/">
        <i className="fa-solid fa-arrow-left text-[25px] !m-[30px] hover:text-[#b5b5b5d1]"></i>
      </Link>
      <div className="flex justify-center !m-[100px] text-[#063447]">
        <div className="!p-[10px] bg-[#eeeeeed1] rounded-[5px] shadow w-[fit-content]">
          <div className="flex justify-center gap-2 text-[25px]">
            <h1 className="font-bold">Log in</h1>
            <i className="fa-solid fa-arrow-right-to-bracket !mt-[10px]"></i>
          </div>
          <form className="grid gap-4 !mt-[15px]">
            <input
              type="Email"
              name="Email"
              required
              className="rounded-[5px] bg-[#063447] text-[#eeeeeed1] !p-[8px] w-[350px]"
              placeholder="example@gmail.com"
            />
            <input
              type="text"
              name="password"
              required
              className="rounded-[5px] bg-[#063447] text-[#eeeeeed1] !p-[8px] w-[350px]"
              placeholder="Password"
            />
            <button
              disabled={true}
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
