import React from "react";
const InputDataWarga = ({
  data,
  handleSubmit,
  handleInputNama,
  handleInputKelamin,
  handleInputAlamat,
  ...props
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nama">Nama :</label>
      <input
        type="text"
        id="nama"
        name="nama"
        value={data.nama}
        onChange={handleInputNama}
      />
      <br />
      <label htmlFor="jenisKelamin">Jenis Kelamin :</label>
      <input
        type="text"
        id="jenisKelamin"
        name="jenisKelamin"
        value={data.jenisKelamin}
        onChange={handleInputKelamin}
      />
      <br />
      <label htmlFor="alamat">Alamat :</label>
      <input
        type="text"
        id="alamat"
        name="alamat"
        value={data.alamat}
        onChange={handleInputAlamat}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default InputDataWarga;
