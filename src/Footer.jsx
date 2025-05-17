export default function Footer() {
  return (
    <div className="rounded-[5px] !mt-[20px] !mr-[10px] !ml-[10px] !p-[10px] shadow-[0px_0px_3px_0px_black] bg-[#002737]">
      <div className="text-[#eeeeeed1]">
        <div className="grid gap-3 justify-center text-center">
          <img
            src="images-folder\site-Logo.png"
            className="w-[120px] h-[83px] rounded-[5px] !m-[auto]"
          />
          <span className="font-normal text-[15px] leading-[1.7] w-[90%] !m-[auto]">
            Your go-to destination for the latest smartphones, accessories, and
            expert reviews. We're passionate about keeping you connected with
            the best mobile technology at unbeatable prices. Shop smart, stay
            connected.
          </span>
        </div>
        <div className="footer !mt-[10px] !mb-[10px] flex items-center gap-3 justify-center">
          <div className="grid text-[16px] text-center">
            <h1 className="font-bold">Categories</h1>
            <p className="font-normal">Flagship</p>
            <p className="font-normal">Med-Range</p>
            <p className="font-normal">Budget</p>
          </div>
          <div className="grid gap-1 justify-center text-center">
            <h1 className="font-bold text-[17px] text-center">Contact Me</h1>
            <div className="flex gap-3 text-[17px] !m-[auto]">
              <a href="https://github.com/Ibrahim-Karagaji" target="_blank">
                <i className="fa-brands fa-github !p-[5px] duration-500 hover:bg-[#ffffff4d] rounded-[100px]"></i>
              </a>
              <i className="fa-brands fa-linkedin text-[#007bff] !p-[5px] duration-500 rounded-[100px] hover:bg-sky-300"></i>
              <i className="fa-brands fa-x-twitter text-[black] !p-[5px] duration-500 rounded-[100px] hover:bg-gray-700"></i>
              <i className="fa-brands fa-youtube text-[red] !p-[5px] duration-500 rounded-[100px] hover:bg-red-400"></i>
            </div>
            <div className="flex gap-1 items-center">
              <i className="fa-solid fa-envelope text-[#3d5afe]"></i>
              <a
                href="https://mail.google.com/mail/?view=cm&to=Ibrahimkaragaji@gmail.com"
                target="_blank"
                className="underline"
              >
                Ibrahimkaragaji@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[14px] leading-[2] flex justify-between border-t-[#eeeeee7a] border-t-[1px] text-[#eeeeeed1]">
        <p className="flex gap-1 warning-text">
          ©2025 <span className="text-[#00b2ff]">Mobile Phone Store</span>
        </p>
        <div className="flex gap-2">
          <p className="hover:underline hover:text-[#00b2ff] warning-text">
            Terms of Use
          </p>
          <p className="hover:underline hover:text-[#00b2ff] warning-text">
            Privacy Policy
          </p>
          <p className="hover:underline hover:text-[#00b2ff] warning-text">
            Cookies Policy
          </p>
        </div>
      </div>
    </div>
  );
}
