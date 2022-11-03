import "./App.css";
import { useState } from "react";

function App() {
  const [dataWarga, setDataWarga] = useState([]);
  const [dataInput, setDataInput] = useState({
    nama: "",
    jenisKelamin: "",
    alamat: "",
  });
  const [editIndex, setEditIndex] = useState(undefined);

  const handleInputNama = (e) => {
    setDataInput((prev) => ({
      ...prev,
      nama: e.target.value,
    }));
  };
  const handleInputKelamin = (e) => {
    setDataInput((prev) => ({
      ...prev,
      jenisKelamin: e.target.value,
    }));
  };

  const handleInputAlamat = (e) => {
    setDataInput((prev) => ({
      ...prev,
      alamat: e.target.value,
    }));
  };
  const handleInput = (e) => {
    setDataInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    console.log("submit clicked!");
    if (editIndex !== undefined) {
      setDataWarga((prev) => {
        let editData = prev;
        
        editData[editIndex] = dataInput;
        return editData;
      });
    } else {
      setDataWarga((prev) => [...prev, dataInput]);
    }
    setDataInput({ nama: "", jenisKelamin: "", alamat: "" });
    setEditIndex(undefined);
    e.preventDefault();
  };
  
  const handleEdit = (e) => {
    console.log("editing");
    setEditIndex(e);
    setDataInput(dataWarga[e]);
  };
  const handleDel = (e) => {
    console.log("deleted!");
    setDataWarga((prev) => prev.filter((item, i) => i !== e));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nama">Nama :</label>
        <input
          type="text"
          id="nama"
          name="nama"
          value={dataInput.nama}
          onChange={handleInputNama}
        />
        <br />
        <label htmlFor="jenisKelamin">Jenis Kelamin :</label>
        <input
          type="text"
          id="jenisKelamin"
          name="jenisKelamin"
          value={dataInput.jenisKelamin}
          onChange={handleInputKelamin}
        />
        <br />
        <label htmlFor="alamat">Alamat :</label>
        <input
          type="text"
          id="alamat"
          name="alamat"
          value={dataInput.alamat}
          onChange={handleInputAlamat}
        />
        <input type="submit" value="Submit" />
      </form>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <td>No</td>
            <td>Nama</td>
            <td>Jenis Kelamin</td>
            <td>Alamat</td>
            <td>Aksi</td>
          </tr>
        </thead>
        <tbody>
          {dataWarga.map((item, i) => {
            return (
              <tr key={`${i}`}>
                <td>{`${i + 1}`}</td>
                <td>{item.nama}</td>
                <td>{item.jenisKelamin}</td>
                <td>{item.alamat}</td>
                <td>
                  <button onClick={() => handleEdit(i)}>Edit</button>
                  <button onClick={() => handleDel(i)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
