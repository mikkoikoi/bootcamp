import React from "react";
import "./App.css";
import { useState } from "react";

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

  const [daftarBuku, setDaftarBuku] = useState([
    {
      judulBuku: "Hujan",
      penulis: "Tere Liye",
      tahun: 2016,
      jumlahHal: 514,
      rak: "76 A",
    },
    {
      judulBuku: "Hello Salma!",
      penulis: "Farhan Kebab",
      tahun: 2022,
      jumlahHal: 234,
      rak: "9 C",
    },
  ]);
  const [dataInput, setDataInput] = useState({
    judulBuku: "",
    penulis: "",
    tahun: "",
    jumlahHal: "",
    rak: "",
  });

  const [editIndex, setEditIndex] = useState(undefined);

  const handleDataInput = (e) => {
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
    e.preventDefault()
  };
  const handleEdit = (e) => {
    console.log("editing");
    setEditIndex(e);
    setDataInput(daftarBuku[e]);
  };

  const handleDel = (e) => {
    setDaftarBuku((prev) => prev.filter((item, i) => i !== e));
  };

  // const daftarBuku = [
  //   {
  //     judulBuku: "Hujan",
  //     penulis: "Tere Liye",
  //     tahun: 2016,
  //     jumlahHal: 514,
  //     rak: "76 A",
  //   },
  //   {
  //     judulBuku: "Hello Salma!",
  //     penulis: "Farhan Kebab",
  //     tahun: 2022,
  //     jumlahHal: 234,
  //     rak: "9 C",
  //   },
  // ];
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="judulBuku">Judul Buku</label>
        <input
          type="text"
          name="judulBuku"
          value={dataInput.judulBuku}
          onChange={handleDataInput}
        />
        <br />
        <label htmlFor="penulis">Penulis</label>
        <input
          type="text"
          name="penulis"
          value={dataInput.penulis}
          onChange={handleDataInput}
        />
        <br />
        <label htmlFor="tahun">Tahun</label>
        <input
          type="text"
          name="tahun"
          value={dataInput.tahun}
          onChange={handleDataInput}
        />
        <br />
        <label htmlFor="jumlahHal">Jumlah Halaman</label>
        <input
          type="text"
          name="jumlahHal"
          value={dataInput.jumlahHal}
          onChange={handleDataInput}
        />
        <br />
        <label htmlFor="rak">Rak</label>
        <input
          type="text"
          name="rak"
          value={dataInput.rak}
          onChange={handleDataInput}
        />
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
