import "./styles.css";
import { useState } from "react";

export function Form({ listTransactions, setListTransactions }) {
  const [valueInput, setValueInput] = useState();
  const [descInput, setDescInput] = useState("");
  const [valueType, setValueType] = useState("entrada");

  const handleInfos = (descInput, valueInput, valueType) =>
    setListTransactions([...listTransactions, {
      description: descInput,
      type: valueType,
      value: valueInput,
    }]);

  return (
    <form>
      <span>Descrição</span>
      <input
        type="text"
        value={descInput}
        onChange={(event) => setDescInput(event.target.value)}
        placeholder="Digite aqui sua descrição"
      />
      <span className="ex">Ex: Compra de roupas</span>
      <div>
        <span className="sub1">Valor</span>
        <span>Tipo de valor</span>
      </div>
      <div className="inputs">
        <input
          type="text"
          value={valueInput}
          onChange={(event) => setValueInput(event.target.value)}
          placeholder="1            R$"
        />
        <select
          name="valueType"
          value={valueType}
          onChange={(event) => setValueType(event.target.value)}
        >
          <option value="entrada">entrada</option>
          <option value="saída">saída</option>
        </select>
      </div>
      <button type="submit" onClick={(evt) => {evt.preventDefault()
        if(descInput !== ""){handleInfos(descInput, valueInput, valueType)}
         }}>Inserir valor</button>
    </form>
  );
}


/* <button type="submit">Inserir valor</button> */

// const handleInfos = (evt, descInput, valueInput, valueType) =>
//     evt.preventDefault()
//     setListTransactions(...listTransactions, {
//       description: descInput,
//       type: valueType,
//       value: valueInput,
//     });

/* <form onSubmit={handleInfos}></form> */