import '../style.css';
import * as React from 'react';

export default function Card({ data, setSelecionado, setOpen }) {
  function handleClick() {
    setSelecionado(data);
    setOpen(true);
  }

  return (
    <div className="Card" onClick={() => handleClick()}>
      <img className="imagem" src={data?.imageUrl} />
      <div className="Nome">
        <span className="GravityFalls">{data?.name}</span>
      </div>
    </div>
  );
}
