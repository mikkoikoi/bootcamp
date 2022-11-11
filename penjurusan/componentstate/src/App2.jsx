import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

const App2 = () => {
  const headerPerpus = [
    "No",
    "Judul Buku",
    "Penulis",
    "Tahun",
    "Jumlah Halaman",
    "Rak",
    "Aksi",
  ];

  const [daftarBuku, setDaftarBuku] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("daftarBuku"));
    console.log("halo");
    if (items) {
      setDaftarBuku(items);
    }
  }, []);

  useEffect(() => {
    console.log("hehe");
    localStorage.setItem("daftarBuku", JSON.stringify(daftarBuku));
  }, [daftarBuku]);

  const [dataInput, setDataInput] = useState({
    judulBuku: "",
    penulis: "",
    tahun: "",
    jumlahHal: "",
    rak: "",
  });

  const alphabet = ["A", "B", "C", "D"];
  const number = [1, 2, 3, 4, 5];


  const [editIndex, setEditIndex] = useState(undefined);

  const handleDataInput = (e) => {
   console.log(e.target.value)
    setDataInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    if (editIndex !== undefined) {
      setDaftarBuku((prev) => {
        let editData = prev;
        editData[editIndex] = dataInput;
        localStorage.setItem("daftarBuku", JSON.stringify(editData));
        return editData;
      });
    } else {
      setDaftarBuku((prev) => {
        return [...prev, dataInput];
      });
    }
    setDataInput({
      judulBuku: "",
      penulis: "",
      tahun: "",
      jumlahHal: "",
      rak: "",
    });
    setEditIndex(undefined);
    e.preventDefault();
  };

  const handleDel = (e) => {
    setDaftarBuku((prev) => prev.filter((item, i) => i !== e));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="judulBuku">Judul Buku :</label>
        <input
          type="text"
          name="judulBuku"
          value={dataInput.judulBuku}
          onChange={handleDataInput}
        />
        <br />
        <label htmlFor="penulis">Penulis :</label>
        <input
          type="text"
          name="penulis"
          value={dataInput.penulis}
          onChange={handleDataInput}
        />
        <br />
        <label htmlFor="tahun">Tahun :</label>
        <input
          type="text"
          name="tahun"
          value={dataInput.tahun}
          onChange={handleDataInput}
        />
        <br />
        <label htmlFor="jumlahHal">Jumlah Halaman :</label>
        <input
          type="text"
          name="jumlahHal"
          value={dataInput.jumlahHal}
          onChange={handleDataInput}
        />
        <br />
        <label htmlFor="rak">Rak :</label>
        <select name="rak" value={dataInput.rak} onChange={handleDataInput}>
         
        <option  value="" disabled>
                  Pilih Rak
                </option>
          {alphabet
            .reduce((a, b) => {
      

              return [...a, ...number.map((num, i) => `${b}-${num}`)];
            }, [])
            .map((item, i) => {
              return (
                <option key={`buat-drop-${i}`} value={item}>
                  {item}
                </option>
              );
            })}
          {/* <option value="Ke-satu">1</option>
          <option value="Ke-dua">2</option>
          <option value="Ke-tiga">3</option>
          <option value="Ke-empat">4</option>
          <option value="Ke-lima">5</option>
          <option value="Ke-enam">6</option>
          <option value="Ke-tujuh">7</option>
          <option value="Ke-delapan">8</option> */}
        </select>
        <input type="submit" value="Submit" />
      </form>
      <table>
        <thead>
          <tr>
            {headerPerpus.map((item, i) => {
              return <th key={`baris-header-${i}`}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {daftarBuku.map((item, i) => {
            console.log(item);
            return (
              <tr key={`daftar-buku-${i}`}>
                <td>{i + 1}</td>
                <td>{item.judulBuku}</td>
                <td>{item.penulis}</td>
                <td>{item.tahun}</td>
                <td>{item.jumlahHal}</td>
                <td>{item.rak}</td>
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
};

export default App2;
