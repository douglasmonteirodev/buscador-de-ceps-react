import React from "react";

export default function Result(props) {
  return (
    <>
      {Object.keys(props.cep).length > 0 && (
        <main className='main'>
          <h2>CEP: {props.cep.cep}</h2>
          <span>{props.cep.logradouro}</span>
          <span>Complemento: {props.cep.complemento}</span>
          <span>{props.cep.bairro}</span>
          <span>
            {props.cep.localidade}- {props.cep.uf}
          </span>
        </main>
      )}
    </>
  );
}
