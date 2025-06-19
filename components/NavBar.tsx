import Logo from "@/ui/Logo";
import Search from "@/ui/Search";
import Profile from "@/ui/Profile";
import AddPost from "@/ui/AddPost";
import LoginButton from "@/ui/LoginButton";


const isLoggedin = true;

export function NavBar() {
  return (
    <nav className="dvw-100 bg-white-950 border-2 border-solid">
      <ul className="flex items-center space-x-4">
        <li className="flex-1 flex text-align">
          <Logo src="/classify-logo.jpg" />
          <h1 className="text-4xl">Classify</h1>
        </li>
        <li className="flex-2 flex justify-center">
          <Search />
        </li>
        <li className="flex-1 flex justify-end">
          {
            isLoggedin ?
              <>
                <AddPost />
                <Profile />
              </>
              :
              <LoginButton />
          }
        </li>
      </ul>
    </nav>
  );
}
