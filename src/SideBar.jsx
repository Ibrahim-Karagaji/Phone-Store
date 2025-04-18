import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="SideBar min-w-[155px] basis-[12%] shadow-[0px_0px_5px_0px_black] rounded-[5px] duration-300 ">
      <i className="fa-solid fa-circle-user !p-[5px] hover:text-[#063447] hover:bg-[#eeeeeed1] duration-500 rounded-[3px] !flex w-[fit-content] !ml-[auto] text-[25px]"></i>
      <div className="content grid gap-[3px] text-[#eeeeeed1] !m-[10px_0px_0px]">
        <div className="flex justify-end gap-[10px] items-center rounded-[2px] !pr-[10px] !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-500">
          <p>Best Selaing</p>
          <i className="fa-solid fa-fire"></i>
        </div>
        <Link to="/List-Phones">
          <div className="flex justify-end gap-[10px] items-center rounded-[2px] !pr-[10px]  !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-500">
            <p>Phone List</p>
            <i className="fa-solid fa-list"></i>
          </div>
        </Link>
        <div className="flex justify-end gap-[10px] items-center rounded-[2px] !pr-[10px]  !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-500">
          <p>Flagship</p>
          <i className="fa-solid fa-rocket"></i>
        </div>
        <div className="flex justify-end gap-[10px] items-center rounded-[2px] !pr-[10px]  !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-500">
          <p>Flagship Killer</p>
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="flex justify-end gap-[10px] items-center rounded-[2px] !pr-[10px]  !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-500">
          <p>Medium</p>
          <i className="fa-solid fa-star-half"></i>
        </div>
        <div className="flex justify-end gap-[10px] items-center rounded-[2px] !pr-[10px]  !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-500">
          <p>Economy</p>
          <i className="fa-solid fa-lines-leaning"></i>
        </div>
        <div className="flex justify-end gap-[10px] items-center rounded-[2px] !pr-[10px]  !mb-2 !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-500">
          <p>Settings</p>
          <i className="fa-solid fa-gear"></i>
        </div>
      </div>
    </div>
  );
}
