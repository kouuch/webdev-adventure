import { useState } from "react";

const Form = ({ addTask }) => {
  //1. Buat state untuk menampung data form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //2. Buat fungsi untuk handle perubahan pada input form
  const handleSubmit = (e) => {
    e.preventDefault();
    //3.Buat validasi input form
    if (title && description) {
      addTask({ title, description, isComplate: false });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-full mx-auto rounded-lg p-4 text-left text-gray-500 text-sm border border-gray-300/60"
    >
      <label htmlFor="content" className="font-medium">
        Title
      </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mt-2 mb-4 border border-gray-500/30 outline-none rounded py-2 px-3"
        placeholder="Masukkan title"
        required
      />
      <label htmlFor="content" className="font-medium">
        Detail
      </label>
      <textarea
        name=""
        id="description"
        cols="30"
        rows="10"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Masukkan detail"
        className="w-full mt-2 border border-gray-500/30 outline-none rounded resize-none py-2 px-3"
      ></textarea>
      <div className="flex justify-center mt-3 mb-2">
        <button
          type="submit"
          className="border-2 py-2 px-4 border-blue-600 bg-blue-500 text-white rounded-lg font-semibold cursor-pointer hover:bg-blue-500 hover:border-green-300"
        >
          Tambah
        </button>
      </div>
    </form>
  );
};

export default Form;
