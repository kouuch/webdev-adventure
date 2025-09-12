import { useState } from "react";

const TodoList = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full mt-100">
      <p>Number Now : {count} </p>
      <div>
        {typeof count === "number" ? (
          count % 2 === 0 ? (
            <p>Genap</p>
          ) : (
            <p>Ganjil</p>
          )
        ) : (
          <p>Bukan Angka</p>
        )}
      </div>
      <div className="border shadow flex gap-4">
        <button onClick={() => setCount(count + 1)}>Tambah +1</button>
        <button onClick={() => setCount(count - 1)}>Kurang -1</button>
        <button onClick={() =>  setCount("string bre")}>String</button>
      </div>
    </div>
  );
};

export default TodoList;
