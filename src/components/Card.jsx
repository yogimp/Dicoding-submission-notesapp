/* eslint-disable react/prop-types */

const Card = ({note, deleteCard, archiveCard, unarchiveCard}) => {
  const date = new Date(note.createdAt);

  const idDayName = new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(date);
  const day = date.getDate();
  const idMonthName = new Intl.DateTimeFormat("id-ID", { month: "long" }).format(date);
  const year = date.getFullYear();

  return (
    <div className="card-note__container border border-primary rounded-xl px-4 py-2 flex flex-col justify-between w-80 h-72">
      <div className="card-note__detail">
        <h1 className="card-note__title font-medium text-[#006A67]">{note.title}</h1>
        <span className="card-note__date text-sm text-secondary text-gray-500 italic">{`${idDayName}, ${day} ${idMonthName} ${year}`}</span>
        <p className="card-note__body text-sm font-normal mt-5">{note.body}</p>
      </div>
      <div className="card-note__buttons flex gap-x-2">
        <button className="card-note__delete-button rounded-md text-[#006A67] text-sm px-4 py-2 w-1/2" onClick={() => deleteCard(note.id)}>
          Delete
        </button>
        <button className="card-note__archive-button border border-primary rounded-md text-secondary text-sm px-4 py-2 w-1/2 bg-[#006A67] text-white" onClick={() => (note.archieved ? unarchiveCard?.(note.id) : archiveCard?.(note.id))}>
          {note.archieved ? "Unarchive" : "Archive"}
        </button>
      </div>
    </div>
  )
};

export default Card;
