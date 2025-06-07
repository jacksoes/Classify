import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <form className="flex">
      <input className=" border-solid border-2 w-56 p-1" />
      <button className="bg-lime-500 w-8 flex justify-center items-center">
        <CiSearch />
      </button>
    </form>
  );
}
