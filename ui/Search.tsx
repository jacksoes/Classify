import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <form className="flex">
      <input className="bg-blue-900 w-56 p-1" />
      <button className="bg-red-900 w-8 flex justify-center items-center">
        <CiSearch />
      </button>
    </form>
  );
}
