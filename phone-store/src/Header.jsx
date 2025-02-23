export default function Header() {
  return (
    <div className="header items-center flex !p-[5px] gap-[10px]">
      <img
        src="images-folder\site-Logo.png"
        className="w-[110px] h-[60px] rounded-[10px] shadow-[0px_0px_5px_0px_black] "
      />
      <div className="flex gap-[10px] items-center rounded-[5px] border-[solid] border-[#eeeeeed4] border-[1px] w-[100%]">
        <i className="fa-solid fa-magnifying-glass text-[18px] rounded-[4px] !p-[20px] text-[#063447] bg-[#eeeeeed4]"></i>
        <input
          placeholder="Search for a Phone "
          className="focus:outline-none w-[100%] h-[100%]"
        />
      </div>
      <div className="flex gap-[15px] text-[20px]">
        <i className="!p-[5px] hover:-translate-y-1 hover:text-[#063447] hover:bg-[#eeeeeed4] rounded-[5px] duration-500 fa-solid fa-cart-shopping"></i>
        <i className="!p-[5px] hover:-translate-y-1 hover:text-[#063447] hover:bg-[#eeeeeed4] rounded-[5px] duration-500 fa-solid fa-heart"></i>
        <i className="!p-[5px] hover:-translate-y-1 hover:text-[#063447] hover:bg-[#eeeeeed4] rounded-[5px] duration-500 fa-solid fa-right-to-bracket"></i>
      </div>
    </div>
  );
}
