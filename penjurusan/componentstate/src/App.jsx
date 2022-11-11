import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import TableDataWarga from "./components/table/tableDataWarga";
import InputDataWarga from "./components/input/inputDataWarga";

function App() {
  const [dataWarga, setDataWarga] = useState([]);
  const [dataInput, setDataInput] = useState({
    nama: "",
    jenisKelamin: "",
    alamat: "",
  });
  const [editIndex, setEditIndex] = useState(undefined);

  // useEffect(() => {
  //   alert ('App rendered on didMount')
  // })

  // useEffect(()=> {
  //   alert('App rendered on update)
  // })

  useEffect(() => {
    setDataWarga([
      {
        nama: "miko",
        jenisKelamin: "lakik",
        alamat: "bogor",
      },
    ]);
  }, []);

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
      <InputDataWarga
        data={dataWarga}
        handleSubmit={handleSubmit}
        handleInputNama={handleInputNama}
        handleInputKelamin={handleInputKelamin}
        handleInputAlamat={handleInputAlamat}
      />
      <TableDataWarga
        data={dataWarga}
        handleEdit={handleEdit}
        handleDel={handleDel}
      />
    </div>
  );
}

export default App;
