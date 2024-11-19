import CardList from "./CardList";
import { FaBookBookmark } from "react-icons/fa6";
/* eslint-disable react/prop-types */
const Archive = ({ notes, onDelete, onUnarchive }) => {
  return (
    <div className="active-note__container flex flex-col gap-y-4 text-lg font-medium w-full px-20 m-auto">
      <span className="flex items-center gap-2 text-[#003161]">
        <FaBookBookmark />
        Archive Notes
      </span>
      <CardList notes={notes.filter((note) => note.archieved === true)} onDelete={onDelete} onUnarchive={onUnarchive} />
    </div>
  )
};

export default Archive;
