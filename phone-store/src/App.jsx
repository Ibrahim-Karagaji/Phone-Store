import "./App.css";
import Header from "./Header";
import Sidebar from "./SideBar";
export default function App() {
  return (
    <div className="overflow-hidden grid grid-cols-[89%_10%] text-[#eeeeeed4] justify-between !p-[3px]">
      <Header />
      <Sidebar />
    </div>
  );
}
