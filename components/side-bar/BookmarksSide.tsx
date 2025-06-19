import { FaBookmark } from "react-icons/fa";


export default function BookmarksSide() {
  return (
    <>
      
        <button className="flex items-center w-full">
          <FaBookmark  size={30}/> <span className="text-xl pl-2">Bookmarks</span>
        </button>
      
    </>
  );
  }