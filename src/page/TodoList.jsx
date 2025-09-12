import { useState } from "react";

const TodoList = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full mt-100">
      <p>Number Now : {count} </p>
      
      <div>
        {count % 2 === 0 ? (
          <p className="text-green-500">Genap</p>
        ) : (
          <p className="text-red-500">Ganjil</p>
        )}
      </div>
      <div>
        {count < 0 && <p className="text-red-500">Negatif</p>}
        {count === 0 && <p className="text-yellow-500">Nol</p>}
        {count > 0 && <p className="text-green-500">Positif</p>}
      </div>
      <div>
        {count >= 10 && <p className="text-blue-500">Angka sudah diatas 10</p>}
        {count <= -10 && (
          <p className="text-blue-500">Angka sudah dibawah -10</p>
        )}
      </div>
      <div>
        {count > 0 && count < 10 && (
          <p className="text-purple-500">Angka diantara 0 sampai 10</p>
        )}
        {count < 0 && count > -10 && (
          <p className="text-purple-500">Angka diantara -10 sampai 0</p>
        )}
      </div>
      <div>
        {count === 7 && <p className="text-pink-500">Angka Tujuh</p>}
        {count === -7 && <p className="text-pink-500">Angka Minus Tujuh</p>}
      </div>
      <button onClick={() => setCount(count + 1)}>Tambah +1</button>
      <button onClick={() => setCount(count - 1)}>Kurang -1</button>
    </div>
  );
};

export default TodoList;
