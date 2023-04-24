import React from "react";

import "./resultado.scss";
import { Button } from "react-bootstrap";


export const Resultado = ({ result, setResult, setListaOpciones, setListaMails }) => {
    
  return (
    <>
      <div className="resultado">
        <img src="./images/logoSorteo.png" alt="" />
        <h3>Ganador del sorteo:</h3>
        <h1>{result}</h1>
        <Button className="butStAg" onClick={()=>{setResult(""); setListaMails([]); setListaOpciones([])}}>OTRO SORTEO</Button>    
      </div>
    </>
  );
};
