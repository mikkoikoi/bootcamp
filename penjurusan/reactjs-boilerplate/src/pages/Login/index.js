import { useNavigate } from "react-router-dom";
import { useState } from "react";
import URLS from "@/src/enums/urls";

const Login = () => {
  const [inputData, setInputData] = useState({
    username: "",
    password: "",
  });
  const datas = {
    username : "mikkoi",
    password : "nayuta"
  }
  const handleInputData = (e) => {
    console.log(e.target.value);
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  // const handle
  const navigate = useNavigate();
  const authLogin = (e) => {
    if (inputData.username === datas.username && inputData.password === datas.password) {
      localStorage.setItem("token", "hehehehehe");
      setTimeout(() => {
        navigate(URLS.PROFILE);
      }, 2000);
    } else {
      alert ("Data yang dimasukkan salah!")
    }
    e.preventDefault(e)
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>LOGIN</h1>
      <form>
        <label htmlFor="uname">
          <b>Username : </b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          required
          value={inputData.username}
          onChange={handleInputData}
        />
        &nbsp;
        <label htmlFor="psw">
          <b>Password :</b>
        </label>
        &nbsp;
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
          value={inputData.password}
          onChange={handleInputData}
        />
        <button onClick={authLogin}>login</button>
      </form>
    </div>
  );
};

export default Login;
