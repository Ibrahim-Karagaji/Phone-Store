export default function Footer() {
  return (
    <div className="rounded-[5px] !m-[10px] !p-[20px] shadow-[0px_0px_3px_0px_black] bg-[#002737]">
      <div className="flex flex-wrap justify-center items-center gap-5 text-[#eeeeeed1] ">
        <div className="grid gap-3 basis-[60%] justify-center text-center">
          <img
            src="images-folder\site-Logo.png"
            className="w-[180px] h-[120px] rounded-[5px] !m-[auto]"
          />
          <span className="font-medium">
            Your go-to destination for the latest smartphones, accessories, and
            expert reviews. We’re passionate about keeping you connected with
            the best mobile technology at unbeatable prices. Shop smart, stay
            connected.
          </span>
        </div>
        <div className="flex items-center gap-3 justify-between basis-[40%]">
          <div className="grid gap-1 text-[22px] text-center">
            <h1 className="font-bold">Categories</h1>
            <p className="font-normal">Flagship</p>
            <p className="font-normal">Flagship Killer</p>
            <p className="font-normal">Medium</p>
            <p className="font-normal">Economy</p>
          </div>
          <div className="grid gap-3 justify-center text-center">
            <h1 className="font-bold text-[22px]">Contact Me</h1>
            <div className="flex gap-4 text-[25px]">
              <a href="https://github.com/Ibrahim-Karagaji">
                <i className="fa-brands fa-github !p-[5px] duration-500 hover:bg-[#ffffff4d] rounded-[100px]"></i>
              </a>
              <i className="fa-brands fa-linkedin text-[#007bff] !p-[5px] duration-500 rounded-[100px] hover:bg-[#ffffff4d]"></i>
              <i className="fa-brands fa-x-twitter text-[black] !p-[5px] duration-500 rounded-[100px] hover:bg-[#ffffff4d]"></i>
              <i className="fa-brands fa-youtube text-[red] !p-[5px] duration-500 rounded-[100px] hover:bg-[#ffffff4d]"></i>
            </div>
            <div className="flex gap-1 items-center">
              <i className="fa-solid fa-envelope text-[#3d5afe]"></i>
              <h1 className="underline">Ibrahimkaragaji@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[15px] flex justify-between border-t-[#eeeeee7a] border-t-[soldi] border-t-[1px] !mt-[15px] text-[#eeeeeed1]">
        <p className="flex gap-1">
          ©2025 <span className="text-[#00b2ff]">Mobile Phone Store</span>
        </p>
        <div className="flex gap-3">
          <p className="hover:underline hover:text-[#00b2ff]">Terms of Use</p>
          <p className="hover:underline hover:text-[#00b2ff]">Privacy Policy</p>
          <p className="hover:underline hover:text-[#00b2ff]">Cookies Policy</p>
        </div>
      </div>
    </div>
  );
}
