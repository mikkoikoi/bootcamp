import { useState } from "react";
const ComponentInput = () => {
  const [text, setText] = useState("");
  return (
    <div>
     <div>{text}</div>
      <input
        type="text"
        onChange={(event) => setText((_prev) => event.target.value)}
        value={text}
      />
    </div>
  );
};


export default ComponentInput