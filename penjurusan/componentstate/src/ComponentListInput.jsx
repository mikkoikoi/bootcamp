import { useState } from "react";

const ComponentListInput = () => {
  const [listInput, setListInput] = useState([]);
  const [text, setText] = useState("");

  const handleAddInput = () => {
    setListInput((prevState) => {
      return [text, ...prevState];
    });
  };

  const handleDelInput = (index) => {
    setListInput((prevState) => {
      const copyState = [...prevState];
      return copyState.filter((item, i) => i !== index);
    });
  };
  return (
    <>
      {listInput.map((item, index) => {
        return (
          <div key={index}>
            {item};
            <button
              onClick={() => {
                return handleDelInput(index);
              }}
            >
              X
            </button>
          </div>
        );
      })}
      <input
        type="text"
        onChange={(event) => setText(event.target.value)}
        value={text}
      />
      <button onClick={handleAddInput}>Add</button>
    </>
  );
};

export default ComponentListInput;
