import { useState } from "react";
import Form from "./Form";

const Card = () => {
  const [open, setOpen] = useState(null);
  const todoList = [
    { title: "Belajar React", description: "Mempelajari dasar-dasar React.js" },
    {
      title: "Mengerjakan tugas",
      description: "Menyelesaikan tugas-tugas kuliah",
    },
    {
      title: "Berolahraga",
      description:
        "Melakukan aktivitas fisik untuk kesehatan lorem ipsum  Melakukan aktivitas fisik untuk kesehatan lorem ipsum Melakukan aktivitas fisik untuk kesehatan lorem ipsum",
    },
    {
      title: "Membaca buku",
      description: "Membaca buku-buku pengembangan diri",
    },
  ];
  return (
    <>
      <h1 className="text-3xl text-center text-gray-700 font-semibold">
        Todo List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-20 mt-4">
        <form className="bg-white w-full mx-auto rounded-lg p-4 text-left text-gray-500 text-sm border border-gray-300/60">
          <label htmlFor="content" className="font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full mt-2 mb-4 border border-gray-500/30 outline-none rounded py-2 px-3"
          />
          <label htmlFor="content" className="font-medium">
            Detail
          </label>
          <textarea
            name=""
            id="description"
            cols="30"
            rows="10"
            className="w-full mt-2 border border-gray-500/30 outline-none rounded resize-none"
          ></textarea>
          <div className="flex justify-center mt-3 mb-2">
            <button className="border-2 py-2 px-4 border-blue-600 bg-blue-500 text-white rounded-lg font-semibold cursor-pointer hover:bg-blue-500 hover:border-green-300">
              Tambah
            </button>
          </div>
        </form>
        <div className="w-full mx-auto flex flex-col items-center  px-4  md:px-0">
          <h3>Daftar Tugas</h3>
          {todoList.map((item, index) => (
            <div
              key={index}
              className="border-b border-slate-200 cursor-pointer w-full"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className="flex justify-between items-center py-2">
                <h3 className="text-base font-medium">{item.title}</h3>
                <div className=" flex gap-2">
                  <button className="border rounded-lg py-1.2 px-2 font-medium bg-green-500 text-white border-none hover:bg-green-700 cursor-pointer">
                    Selesai
                  </button>
                  <button className="border rounded-lg py-1.2 px-2 font-medium bg-red-500 text-white border-none hover:bg-red-700 cursor-pointer">
                    Hapus
                  </button>

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      open === index ? "rotate-180" : ""
                    } transition-all ease-in-out duration-300 `}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#1D293D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p
                className={`text-sm text-gray-500 max-w-md transition-all ease-in-out duration-500 ${
                  open === index
                    ? "opacity-100 max-h-[300px] -translate-y-0 pt-4"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
          <h3 className=" mt-4">Tugas Selesai</h3>
          {todoList.map((item, index) => (
            <div
              key={index}
              className="border-b border-slate-200 cursor-pointer w-full"
              onClick={() => setOpen(open === index ? null : index)}
            >
              <div className="flex justify-between items-center py-2">
                <h3 className="text-base font-medium">{item.title}</h3>
                <div className="flex gap-2">
                  <button className="border rounded-lg py-1.2 px-2 font-medium bg-red-500 text-white border-none hover:bg-red-700 cursor-pointer">
                    Hapus
                  </button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      open === index ? "rotate-180" : ""
                    } transition-all ease-in-out duration-300 `}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#1D293D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p
                className={`text-sm text-gray-500 max-w-md transition-all ease-in-out duration-500 ${
                  open === index
                    ? "opacity-100 max-h-[300px] -translate-y-0 pt-4"
                    : "opacity-0 max-h-0 -translate-y-2"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
