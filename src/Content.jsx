import SideBar from "./SideBar";
import PhoneCards from "./PhoneCards";
export default function Content() {
  return (
    <div className="flex !p-[3px] text-[17px] text-[#eeeeeed1] gap-[10px]">
      <SideBar />
      <PhoneCards />
    </div>
  );
}
