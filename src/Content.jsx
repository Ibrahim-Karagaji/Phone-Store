import SideBar from "./SideBar";
import PhoneCards from "./PhoneCards";
export default function Content() {
  return (
    <div className="flex !p-[3px] text-[18px] text-[#eeeeeed1] gap-[20px] min-w-[480px]">
      <SideBar />
      <PhoneCards />
    </div>
  );
}
