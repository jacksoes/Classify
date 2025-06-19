import SideBar from "@/components/SideBar";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div className="flex w-dvw justify-center">
      <div className="flex w-3/4">
        <div className="w-1/6 flex  p-4">
          <SideBar />
        </div>
        <div className="bg-green-900 w-2/4">yo</div>
        <div className="w-1/4  flex p-4 ">
          <Trending />
        </div>
      </div>
    </div>
  );
}
