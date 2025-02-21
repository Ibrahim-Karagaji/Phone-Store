export default function Header() {
  return (
    <div className="justify-center items-center flex gap-[10px] shadow-[0px_0px_8px_0px_black] !p-[10px] rounded-[5px]">
      <img
        className="w-[130px] h-[65px] border-[solid] border-[1px] border-[#eeeeeed4] rounded-[10px]"
        src="images-folder/site-Logo.png"
      />
      <div className="w-[100%] transition duration-300 ease-in-out rounded-[5px] flex gap-[10px] items-center border-[solid] border-[1px] border-[#eeeeeed4] !p-[15px]">
        <i className="text-[20px] fa-solid fa-magnifying-glass"></i>
        <input
          className="focus:outline-none w-[100%]"
          placeholder="Search For Phone"
        />
      </div>
      <div className="text-[20px] flex gap-[15px] items-center">
        <i className="duration-500 hover:-translate-y-2 fa-solid fa-basket-shopping !p-[5px]"></i>
        <i className="duration-500 fa-solid hover:-translate-y-2 fa-heart !p-[5px]"></i>
        <i className="duration-500 fa-solid hover:-translate-y-2 fa-right-to-bracket !p-[5px]"></i>
      </div>
    </div>
  );
}
