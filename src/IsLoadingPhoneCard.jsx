export default function IsLoadingPhoneCard() {
  return (
    <div className=" rounded-[5px] shadow-[0px_0px_10px_0px_black] grid gap-[3px] w-[fit-content]">
      <div className="w-[190px] h-[150px] bg-[#031c27]"></div>
      <div className="grid gap-[5px] !p-[5px]">
        <h1 className="bg-[#031c27] rounded-[5px] text-[#031c27]">? </h1>
        <p className="bg-[#031c27] rounded-[5px] text-[#031c27]">?</p>
      </div>
      <div className="flex justify-between !p-[5px] text-[#031c27] bg-[#031c27] items-center">
        <i className="fa-solid heart fa-heart"></i>
        <button className="flex items-center gap-[8px]">
          <p>Add To Cart</p>
        </button>
      </div>
    </div>
  );
}
