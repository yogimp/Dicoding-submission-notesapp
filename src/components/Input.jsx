/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

const Input = ({ addNote }) => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const maxChars = 50;
  const handleTitleChange = (event) => {
    const input = event.target.value;
    if (input.length <= maxChars) {
      setTitle(input);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote({
      id: +new Date(),
      title,
      body,
      archieved: false,
      createdAt: new Date().toISOString(),
    });
  }

  return (
    <div className="note-input__containerflex flex-col gap-y-2 items-center sm:w-96 sm:mx-auto">
      <div className="note-input__info flex flex-col justify-between gap-3">
        <span className="note-input__text text-2xl sm:text-4xl tracking-wide flex gap-2 text-[#003161]">
          <FaPencilAlt />
          Create your notes
        </span>
        <div className="note-input__text text-sm self-end text-end mt-5">
          Characters left : <span className="text-red-600"> {maxChars - title.length} </span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-y-2">
        <input
          className="note-input__title outline-none border-2 border-primary px-4 py-2 text-xs rounded-md bg-[#FFF4B7]"
          type="text"
          name="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title your note..."
        />
        <textarea
          className="note-input__body outline-none border-2 h-40 resize-none border-primary px-4 py-2 text-xs rounded-md bg-[#FFF4B7]"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Start writing your note..."
        />
        <button type="submit" className="note-input__save-button bg-primary text-sm text-white px-4 py-4 bg-[#006A67] rounded-md">
          Save
        </button>
      </form>
    </div>
  )
};

export default Input;
