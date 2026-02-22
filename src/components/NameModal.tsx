import { useState } from "react";
import { useAppContext } from "../context/useAppContext";

const NameModal = () => {
  const { setName } = useAppContext(); 
  const [localName, setLocalName] = useState("");
  const [err, setErr] = useState("");

  const handleAddName = () => {
    if (localName.trim() === "") {
      setErr("Name can't be null");
      return;
    }

    if (localName.length > 7) {
      setErr("Name can't be long");
      return;
    }

    if (localName.length < 4) {
      setErr("At least 4 characters required");
      return;
    }

    setName(localName);
  };

  return (
    <div className="lobby-container absolute">
      <h1>Enter your name!</h1>

      <input
        placeholder="Enter Name..."   
        value={localName}
        onChange={(e) => setLocalName(e.target.value)}
      />

      <button onClick={handleAddName}>Join Game</button>

      {err && <p>{err}</p>}
    </div>
  );
};

export default NameModal;