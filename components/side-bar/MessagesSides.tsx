import { IoIosMail } from "react-icons/io";


export default function MessagesSide() {
  return (
    <>
      
        <button className="flex items-center w-full">
          <IoIosMail  size={30}/> <span className="text-xl pl-2">Messages</span>
        </button>
      
    </>
  );
  }