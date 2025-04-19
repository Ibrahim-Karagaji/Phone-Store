export default function ListPhones() {
  return (
    <div className="text-[#eeeeeed1] grid gap-2 !m-[5px]">
      <h1 className="bg-[#eeeeeed1] text-[#063447] font-bold text-[22px] w-[fit-content] !m-[auto] !pl-[10px] !pr-[10px] !pt-[5px] !pb-[5px] rounded-[3px]">
        Filters
      </h1>
      <div className="phones-list grid grid-cols-2 gap-2 shadow !p-[5px]">
        <div className="grid gap-6">
          <p className="bg-[#eeeeeed1] !m-[auto] text-[#063447] font-bold text-[22px] w-[fit-content] !pl-[10px] !pr-[10px] !pt-[5px] !pb-[5px] rounded-[3px]">
            By Brand
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="grid gap-2 justify-center !-p[3px] duration-300 hover:-translate-y-1">
              <img
                src="images-folder\brands-img\apple.avif"
                className="w-[50px] h-[50px]"
              />
              <p className="text-center">Apple</p>
            </div>
            <div className="grid gap-2 justify-center !-p[3px] duration-300 hover:-translate-y-1">
              <img
                src="images-folder\brands-img\honor.jpeg"
                className="w-[130px] h-[50px]"
              />
              <p className="text-center">Honor</p>
            </div>
            <div className="grid gap-2 justify-center !-p[3px] duration-300 hover:-translate-y-1">
              <img
                src="images-folder\brands-img\realme.avif"
                className="h-[100px]"
              />
              <p className="text-center">Realme</p>
            </div>
            <div className="grid gap-2 justify-center !-p[3px] duration-300 hover:-translate-y-1">
              <img
                src="images-folder\brands-img\samsung.avif"
                className="w-[120px] h-[90px]"
              />
              <p className="text-center">Samsung</p>
            </div>
            <div className="grid gap-2 justify-center !-p[3px] duration-300 hover:-translate-y-1">
              <img
                src="images-folder\brands-img\vivo.jpeg"
                className="w-[80px] h-[80px]"
              />
              <p className="text-center">Vivo</p>
            </div>
            <div className="grid gap-2 justify-center !-p[3px] duration-300 hover:-translate-y-1">
              <img
                src="images-folder\brands-img\xiaomi.avif"
                className="w-[60px] h-[60px]"
              />
              <p className="text-center">Xiaomi</p>
            </div>
          </div>
        </div>
        <div className="storg-ram grid gap-5">
          <div className="grid gap-3 justify-center">
            <p className="bg-[#eeeeeed1] !m-[auto] text-[#063447] font-bold text-[22px] w-[fit-content] !pl-[10px] !pr-[10px] !pt-[5px] !pb-[5px] rounded-[3px]">
              By Storage
            </p>
            <div className="grid grid-cols-2 gap-8 font-bold">
              <p className="!p-[4px] rounded-[5px] duration-300 hover:bg-[#eeeeeed1] hover:text-[#063447] w-[fit-content] h-[fit-content]">
                64
              </p>
              <p className="!p-[4px] rounded-[5px] duration-300 hover:bg-[#eeeeeed1] hover:text-[#063447] w-[fit-content] h-[fit-content]">
                128
              </p>
              <p className="!p-[4px] rounded-[5px] duration-300 hover:bg-[#eeeeeed1] hover:text-[#063447] w-[fit-content] h-[fit-content]">
                256
              </p>
              <p className="!p-[4px] rounded-[5px] duration-300 hover:bg-[#eeeeeed1] hover:text-[#063447] w-[fit-content] h-[fit-content]">
                512
              </p>
            </div>
          </div>
          <div className="grid gap-3 justify-center">
            <p className="bg-[#eeeeeed1] !m-[auto] text-[#063447] font-bold text-[22px] w-[fit-content] !pl-[10px] !pr-[10px] !pt-[5px] !pb-[5px] rounded-[3px]">
              By Ram
            </p>
            <div className="grid grid-cols-2 gap-8 font-bold ">
              <p className="!p-[4px] rounded-[5px] duration-300 hover:bg-[#eeeeeed1] hover:text-[#063447] w-[fit-content] h-[fit-content]">
                4
              </p>
              <p className="!p-[4px] rounded-[5px] duration-300 hover:bg-[#eeeeeed1] hover:text-[#063447] w-[fit-content] h-[fit-content]">
                8
              </p>
              <p className="!p-[4px] rounded-[5px] duration-300 hover:bg-[#eeeeeed1] hover:text-[#063447] w-[fit-content] h-[fit-content]">
                12
              </p>
              <p className="!p-[4px] rounded-[5px] duration-300 hover:bg-[#eeeeeed1] hover:text-[#063447] w-[fit-content] h-[fit-content]">
                16
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
