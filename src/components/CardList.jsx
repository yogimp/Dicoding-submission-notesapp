import Card from "./Card";

/* eslint-disable react/prop-types */
const CardList = ({ notes, onDelete, onArchive, onUnarchive }) => {
  return (
    <div className={`card-list w-auto flex flex-col sm:flex-row flex-wrap gap-y-2 gap-x-2 ${notes.length === 0 && "justify-center"}`}>
      {notes.length === 0 && <span className=" text-secondary font-normal">No notes found</span>}
      {notes.map((note) => (
        <Card key={note.title} note={note} deleteCard={onDelete} archiveCard={onArchive} unarchiveCard={onUnarchive} />
      ))}
    </div>
  )
};

export default CardList;
