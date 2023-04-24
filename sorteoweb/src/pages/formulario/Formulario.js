import React, { useState } from "react";
import { mandarMails } from "../../helper/mailer";
import { seleccionarAleatorio } from "../../helper/resAleatorio";
import { Button } from "react-bootstrap";
import "./formulario.scss";
import { Resultado } from "../../components/resultado/Resultado";


export const Formulario = () => {
  const [listaOpciones, setListaOpciones] = useState([]);
  const [listaMails, setListaMails] = useState([]);
  const [superSort, setSuperSort] = useState(false);
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [message2, setMessage2] = useState("");
  const [nameSorteo, setNameSorteo] = useState("");
 

  const handleChange = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setMail(email);
  };

  const handleNameSorteo = (e) => {
    const sortName = e.target.value;
    setNameSorteo(sortName);
  };

  const addEmail = () => {
    if (
      mail !== "" &&
      mail.includes("@") &&
      mail.length > 4 &&
      !listaMails.includes(mail) &&
      mail.lastIndexOf(".") > mail.indexOf("@")
    ) {
      setListaMails([...listaMails, mail]);
      setMail("");
      setMessage("");
    } else if (listaMails.includes(mail)) {
      setMessage("El email introducido ya existe en la lista");
    } else {
      setMessage("Mail incorrecto, intentalo de nuevo");
    }
  };

  const addOption = () => {
    if (name !== "" && !listaOpciones.includes(name)) {
      setListaOpciones([...listaOpciones, name]);
      setName("");
      setMessage2("");
    } else if (listaOpciones.includes(name)) {
      setMessage2("El valor introducido ya existe");
    } else {
      setMessage2("No has introducido ningun valor");
    }
  };

  const sortear = () => {
    if (!superSort) {
      if (listaOpciones.length > 1) {
        let resultado = seleccionarAleatorio(listaOpciones);
        setResult(resultado);
        setMessage2("");
      } else {
        setMessage2("Introduce mínimo dos opciones");
      }
    } else {
      if (listaOpciones.length > 1 && listaMails.length > 0) {
        let resultado = seleccionarAleatorio(listaOpciones);
        mandarMails(listaMails, resultado, nameSorteo);
        setResult(resultado);
        setMessage("");
        setMessage2("");
      } else {
        listaOpciones.length < 2 &&
          setMessage2("Introduce mínimo dos opciones");
        listaMails.length < 1 && setMessage("Debes introducir algun email");
      }
    }
  };

  const deleteOneDest = (index) => {
    let destAux = listaMails.filter((elem, index2) => {
      return index2 !== index;
    });
    setListaMails(destAux);
  };

  const deleteOneOption = (index) => {
    let optAux = listaOpciones.filter((elem, index2) => {
      return index2 !== index;
    });
    setListaOpciones(optAux);
  };

  return (
    <div className="principal">
      <div>
        <div>
          <img className="logoBig" src="./images/SorteoWeb.png" alt="" />
        </div>
        {result !== "" && <Resultado result={result} setResult={setResult} setListaMails={setListaMails} setListaOpciones={setListaOpciones} />}
        {superSort ? (
          <>
         
          <Button className="butStart" onClick={() => setSuperSort(!superSort)}>
            Cambiar a modo sencillo
          </Button>
          <br />
          <h3>Nombre del sorteo</h3>
          <input className="inputName" type="text" placeholder="Nombre del sorteo" onChange={handleNameSorteo} value={nameSorteo}/>
          </>
        ) : (
           <Button className="butStart" onClick={() => setSuperSort(!superSort)}>
            Cambiar a modo avanzado
          </Button>
        )}
       
     
      </div>
      <div className="disflexListas">
        <div>
          <div>
            <h3>Opciones</h3>

            <input
              type="text"
              onChange={handleChange}
              value={name}
              placeholder="Introduce nueva opción"
            />

            <Button onClick={addOption} className="buttonAdd">
              Añadir
            </Button>
          </div>
          <div className="titles">
            <h3>Lista de opciones</h3>
          </div>
          <div className="listas">
            <p className="error">{message2}</p>
            {listaOpciones.map((opt, index) => {
              return (
                <>
                  <div className="options">
                    <p className="key" key={index}>
                      {opt}
                    </p>
                    <p
                      className="borrado"
                      onClick={() => deleteOneOption(index)}
                    >
                      ✖
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {superSort && (
          <div>
            <div>
              <h3>Destinatarios</h3>

              <input
                type="email"
                onChange={handleEmail}
                value={mail}
                placeholder="Introduce destinatario"
              />
              <Button onClick={addEmail} className="buttonAdd">
                Añadir
              </Button>
            </div>
            <div className="titles">
              <h3>Lista de destinatarios</h3>
            </div>
            <div className="listas">
              <p className="error">{message}</p>
              {listaMails.map((mail, index) => {
                return (
                  <>
                    <div className="options">
                      <p className="key" key={index}>
                        {mail}
                      </p>
                      <p
                        onClick={() => {
                          deleteOneDest(index);
                        }}
                        className="borrado"
                      >
                        ✖
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <Button className="butStartBottom" onClick={sortear}>
        EMPEZAR SORTEO
      </Button>
      <p className="madeFor">Programado por Prachett ✌</p>
    </div>
  );
};