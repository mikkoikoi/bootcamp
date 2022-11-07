import { useState, useTransition } from "react";

const ComponentState = () => {
  const [counter, setCounter] = useState(0);
  const [warna, setWarna] = useState("black");
  const [warnaBg, setWarnaBg] = useState("white");
  const [tema, setTema] = useState({
    backgroundColor: "red",
    color: "White",
  });
  const [listTombol, setListTombol] = useState([
    {
      label: "Warna Biru",
      warna: "blue",
    },
    {
      label: "Warna Kuning",
      warna: "yellow",
    },
    {
      label: "Warna Hitam",
      warna: "black",
    },
  ]);

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleWarnaMerah = () => {
    setWarna((prevState) => {
      return "red";
    });
  };
  const handleWarnaBlack = () => {
    setWarna((prevState) => {
      return "black";
    });
  };

  const handleTema = () => {
    setTema((prevState) => ({ ...prevState, backgroundColor: "black" })
    );
  };
  return (
    <div style={{ ...tema, backgroundColor: warna }}>
      <div
        style={{
          fontSize: "50px",
          // color: 'red'
        }}
      >
        {counter}
      </div>
      <div>
        <button onClick={handleIncrement}>Increments</button>
      </div>
      <div>
        <button onClick={handleWarnaMerah}>Merah</button>
      </div>
      <div>
        <button onClick={handleWarnaBlack}>Hitam</button>
      </div>
      <div>
        <button
          style={{
            backgroundColor: "magenta",
          }}
          onClick={() => {
            setWarna("magenta");
          }}
        >
          Magenta
        </button>
      </div>
      {listTombol.map((item, index) => {
        return (
          <div key={index}>
            <button
              style={{ backgroundColor: item.warna }}
              onClick={() => {
                setWarna(item.warna);
              }}
            >
              {item.label}
            </button>
          </div>
        );
      })}
      <div>
        <button onClick={handleTema}>Tema 1</button>
      </div>
      {JSON.stringify(tema)}
    </div>
  );
};

export default ComponentState;
