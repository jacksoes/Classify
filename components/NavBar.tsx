import Logo from "@/ui/Logo";
import Search from "@/ui/Search";
import Profile from "@/ui/Profile";
import Notifications from "@/ui/Notifications";
import AddPost from "@/ui/AddPost";

export function NavBar() {
  return (
    <nav className="dvw-100 bg-white-950 border-2 border-solid">
      <ul className="flex items-center space-x-4">
        <li className="flex-1 flex">
          <Logo src="/classify-logo.jpg" />
          <h1>Classify</h1>
        </li>
        <li className="flex-2 flex justify-center">
          <Search />
        </li>
        <li className="flex-1 flex justify-end">
          <AddPost />
          <h1>ADD</h1>
          <Notifications />
          <Profile />
        </li>
      </ul>
    </nav>
  );
}
