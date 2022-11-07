import React from "react";
const TableDataWarga = ({ data, handleEdit, handleDel, ...props }) => {
  return (
    <table style={{ border: "1px solid black" }}>
      <thead>
        <tr
          style={{
            backgroundColor: "#DBDBDB",
          }}
        >
          <td>No</td>
          <td>Nama</td>
          <td>Jenis Kelamin</td>
          <td>Alamat</td>
          <td>Aksi</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => {
          return (
            <tr
              style={{
                backgroundColor: i % 2 === 0 ? "white" : "#DBDBDB",
              }}
              key={`${i}`}
            >
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
  );
};
export default TableDataWarga;
