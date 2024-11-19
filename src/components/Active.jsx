import CardList from "./CardList";
import { FaBookReader } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Active = ({ notes, onDelete, onArchive }) => {
  return (
    <div className="active-note__container flex flex-col gap-y-4 text-lg font-medium w-full px-20 m-auto">
      <span className="flex items-center gap-2 text-[#003161]">
        <FaBookReader />
        Active Notes
      </span>
      <CardList notes={notes.filter((note) => !note.archieved)} onDelete={onDelete} onArchive={onArchive} />
    </div>
  )
};

export default Active;
