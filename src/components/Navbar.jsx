import { FaBookBookmark } from "react-icons/fa6";
/* eslint-disable react/prop-types */

const Navbar = ({filterNotes}) => {
  return (
    <div className="navbar__container bg-[#006A67] flex justify-between items-center px-10 py-4">
      <span className="navbar__title font-medium text-lg text-white flex items-center gap-2">
        <FaBookBookmark />
        NotesApp
      </span>
      <input
        type="search"
        placeholder="Search notes..."
        className="navbar__input px-4 py-2 w-60 border-2 border-primary bg-white rounded-md text-xs text-secondary outline-none placeholder:text-xs placeholder:text-secondary"
        onChange={(event) => filterNotes(event.target.value)}
      />
    </div>
  );
};

export default Navbar;
