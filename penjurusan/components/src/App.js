import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import InputDataCuy from "./components/input/inputText";
import InputNumber from "./components/input/inputNumber";
import InputEmail from "./components/input/inputEmail";
import InputPassword from "./components/input/inputPassword";
import InputOption from "./components/input/inputOption";
import InputRadio from "./components/input/inputRadio";
import InputKeahlian from "./components/input/inputKeahlian";
import InputDate from "./components/input/inputDate";
import InputTime from "./components/input/inputTime";
import InputRange from "./components/input/inputRange";
import PressButton from "./components/button/button";

function App() {
  const [dataCuy, setDataCuy] = useState([]);

  const [disabled, setDisabled] = useState(false);

  const [readOnly, setReadOnly] = useState(false);

  const bahasa = [
    { label: "Inggris", value: "inggris" },
    { label: "Indonesia", value: "indonesia" },
    { label: "Jawa", value: "jawa" },
    { label: "Sunda", value: "sunda" },
  ];
  const kelamin = [
    { label: "Laki-Laki", value: "laki-laki" },
    { label: "Perempuan", value: "perempuan" },
  ];

  const keahlian = [
    { label: "Menggambar", value: "menggambar" },
    { label: "SepakBool", value: "sepakbool" },
  ];
  const [dataInput, setDataInput] = useState({
    nama: "",
    nik: "",
    email: "",
    password: "",
    bahasa: "",
    kelamin: "",
    keahlian: "",
    tanggal: "",
    waktu: "",
    suhu: "",
  });

  const [editIndex, setEditIndex] = useState(undefined);

  // const handleSelect = (e) => {
  //   console.log(e.target.name)
  //   console.log(e.target.value)
  //   setDataInput((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const handleKeahlian = (e) => {
  //   setDataInput((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.value,
  //   }));
  // };

  const handleDataInput = (e) => {
   
    console.log(e.target.value)
    setDataInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    if (editIndex !== undefined) {
      setDataCuy((prev) => {
        let editData = prev;
        editData[editIndex] = dataInput;
        localStorage.setItem("dataCuy", JSON.stringify(editData));
        return editData;
      });
    } else {
      setDataCuy((prev) => {
        return [...prev, dataInput];
      });
    }
    setDataInput({
      nama: "",
      nik: "",
      email: "",
      password: "",
      bahasa: "",
      kelamin: "",
      policy: "",
      tanggal: "",
      waktu: "",
      suhu: "",
    });
    setEditIndex(undefined);
    e.preventDefault();
  };

  const handleClick = () => {
     alert("clicked");
  };


  const handleEdit = (e) => {
    console.log("editing");
    setEditIndex(e);
    setDataInput(dataCuy[e]);
  };

  const handleDel = (e) => {
    setDataCuy((prev) => prev.filter((item, i) => i !== e));
  };
  const handleDisableToggle = () => {
    setDisabled((prev) => {
      return !prev;
    });
  };

  const handleReadOnlyToggle = () => {
    setReadOnly((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputDataCuy
          label="Nama"
          name="nama"
          value={dataInput.nama}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleDataInput}
          placeholder="Nama"
        />
        <InputNumber
          label="Nik"
          name="nik"
          value={dataInput.nik}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleDataInput}
          placeholder="Input Nik"
          min={6}
          max={10}
        />
        <InputEmail
          label="Email"
          name="email"
          value={dataInput.email}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleDataInput}
          placeholder="Input Email"
        />
        <InputPassword
          label="Password"
          name="password"
          value={dataInput.password}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleDataInput}
          placeholder="Input password"
          minLength={6}
        />
        <InputOption
          optionData={bahasa}
          label="Bahasa"
          name="bahasa"
          value={dataInput.bahasa}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleDataInput}
          placeholder="Pilih Bahasa"
        />
        <InputRadio
          optionData={kelamin}
          label="Kelamin"
          name="kelamin"
          value={dataInput.kelamin}
          onChange={handleDataInput}
        />
        <InputKeahlian
          optionData={keahlian}
          label="Keahlian"
          name="keahlian"
          value={dataInput.keahlian}
          onChange={handleDataInput}
        />
        <InputDate
          label="Tanggal"
          name="tanggal"
          value={dataInput.tanggal}
          onChange={handleDataInput}
          format="DDDD MM, YYYY"
        />
        <InputTime
          label="Waktu"
          name="waktu"
          value={dataInput.waktu}
          onChange={handleDataInput}
        />
        <InputRange
          label="Suhu"
          name="suhu"
          value={dataInput.suhu}
          onChange={handleDataInput}
          step={5}
          min={5}
          max={100}
        />

        <PressButton
          label="Button"
          name="button"
          disabled={disabled}
          onClick={handleClick}
        />

        <button onClick={handleDisableToggle}>disable input</button>
        <button onClick={handleReadOnlyToggle}>readOnly input</button>
      </form>
    </div>
  );
}

export default App;
