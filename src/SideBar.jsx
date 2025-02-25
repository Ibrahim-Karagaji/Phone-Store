export default function SideBar() {
  return (
    <div className="flex !p-[3px] text-[18px] text-[#eeeeeed1] gap-[20px] min-w-[480px]">
      <div className="basis-[11%] shadow-[0px_0px_10px_0px_black] border-[#eeeeeed1 solid] border-[2px] rounded-[5px]">
        <i className="fa-solid fa-circle-user !p-[5px] hover:text-[#063447] hover:bg-[#eeeeeed1] duration-500 rounded-[3px] !flex w-[fit-content] !ml-[auto] text-[35px]"></i>
        <div className="content grid gap-[3px] text-[#eeeeeed1] !m-[10px_0px_0px]">
          <div className="flex justify-center gap-[10px] items-center rounded-[2px] !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-500">
            <p>Best Selaing</p>
            <p>K</p>
          </div>
          <div className="flex justify-center gap-[10px] items-center rounded-[2px] !p-[3px] bg-[#063447] hover:bg-[#eeeeeed1] hover:text-[#063447] duration-500">
            <p>Best Selaing</p>
            <p>K</p>
          </div>
        </div>
      </div>
      <div className="basis-[89%] shadow-md border-[#eeeeeed1] border-[solid] border-[2px] rounded-[5px]"></div>
    </div>
  );
}
