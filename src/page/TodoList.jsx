import { useState } from "react";
import Card from "../components/Card";

const TodoList = () => {
  const title = "Todo List";  
  const description = [
    "Belajar React",
    "Mengerjakan tugas",
    "Berolahraga",
    "Membaca buku",
  ];

  return (
    <div className="w-full mt-80 h-screen">
      <Card title={title} description={description}/>
    </div>
  );
};

export default TodoList;
