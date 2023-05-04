import React from "react";

import "./resultado.scss";
import { Button } from "react-bootstrap";


export const Resultado = ({ show, setShow, result, setResult, setListaOpciones, setListaMails, setNameSorteo }) => {
    
  return (
    <>
      <div className="resultado">
        <img src="./images/logoSorteo.png" alt="" />
        <h3>Ganador del sorteo:</h3>
        {show && result.map((elem, index)=>{
          return <h1 key={index}>{elem}</h1>
        }) }
        <Button className="butStAg" onClick={()=>{setResult([]); setListaMails([]); setListaOpciones([]); setShow(!show); setNameSorteo("")}}>OTRO SORTEO</Button>    
      </div>
    </>
  );
};
