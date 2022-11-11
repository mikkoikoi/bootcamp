import React, { useEffect, useState } from "react";
import ApiService from "@/src/services/client";
import Spinner from "@/src/components/loader3";

const DataPenduduk = () => {
  const [dataPenduduk, setDataPenduduk] = useState([]);
  const [dataInput, setDataInput] = useState({
    nik: "",
    nama: "",
    alamat: "",
  });
  const [editId, setEditId] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const fetchDataPenduduk = () => {
    ApiService.request({
      method: "get",
      url: "/person",
    }).then((res) => {
      setDataPenduduk(res.data.data);
      setTimeout(() => {
        setLoading(false);
      }, 1700);
    });
  };

  const postDataPenduduk = () => {
    setLoading(true);
    ApiService.request({
      method: "post",
      url: "/person",
      data: {
        nik: dataInput.nik,
        nama: dataInput.nama,
        alamat: dataInput.alamat,
      },
    }).then((res) => {
      fetchDataPenduduk(res.data.data);
    });
  };

  const putDataPenduduk = (id) => {
    setLoading(true);

    ApiService.request({
      method: "put",
      url: `/person/${id}`,
      data: {
        nik: dataInput.nik,
        nama: dataInput.nama,
        alamat: dataInput.alamat,
      },
    }).then((res) => {
      fetchDataPenduduk(res.data.data);
    });
  };
  const delDataPenduduk = (id) => {
    setLoading(true);
    ApiService.request({
      method: "delete",
      url: `/person/${id}`,
    }).then((res) => {
      fetchDataPenduduk(res.data.data);
    });
  };

  const handleDataInput = (e) => {
    console.log(e.target.value);
    setDataInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    if (editId !== undefined) {
      putDataPenduduk(editId);
    } else {
      postDataPenduduk();
      // return [...id, dataInput]
    }
    setDataInput({
      nik: "",
      nama: "",
      alamat: "",
    });
    setEditId(undefined);
    e.preventDefault();
  };

  const handleDel = (id) => {
    const onOke = window.confirm("Hapus data ini?");
    if (onOke) {
      delDataPenduduk(id);
    }
  };

  const handleEdit = (id) => {
    setEditId(id);
    setDataInput(dataPenduduk.find((item) => item.id === id));
  };

  useEffect(() => {
    fetchDataPenduduk();
  }, []);

  return !loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column"
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "3rem"
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <label>NIK :</label>
          <input
            style={{
              width: "10rem",
            }}
            type="text"
            name="nik"
            value={dataInput.nik}
            placeholder="Masukkan Nik"
            onChange={handleDataInput}
          />
        </div>
        <div>
          <label>NAMA :</label>
          <input
            style={{
              width: "10rem",
            }}
            type="text"
            name="nama"
            value={dataInput.nama}
            placeholder="Masukkan Nama"
            onChange={handleDataInput}
          />
          <div>
            <label>ALAMAT :</label>
            <input
              style={{
                width: "10rem",
              }}
              type="text"
              name="alamat"
              value={dataInput.alamat}
              placeholder="Masukkan Alamat"
              onChange={handleDataInput}
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <table>
        <thead>
          <tr>
            <th>NIK</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataPenduduk.map((item, i) => {
            return (
              <tr key={`${item.id}-${i}`}>
                <td>{item.nik}</td>
                <td>{item.nama}</td>
                <td>{item.alamat}</td>
                <td>
                  <button onClick={() => handleEdit(item.id)}>Edit</button>
                  <button onClick={() => handleDel(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner />
    </div>
  );
};
export default DataPenduduk;
