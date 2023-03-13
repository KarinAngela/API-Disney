import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import Modal from './components/Modal';
import './style.css';

export default function App() {
  const [dados, setDados] = useState<Array<Object> | null>(null);
  const [selecionado, setSelecionado] = useState<Object | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const urlApi = 'https://api.disneyapi.dev/characters';

    fetch(urlApi)
      .then((res) => res.json())
      .then((json) => {
        setDados(json.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function generateCards() {
    if (dados !== null) {
      return dados.map((item, index) => (
        <Card data={item} setSelecionado={setSelecionado} setOpen={setOpen} />
      ));
    }
  }

  return (
    <>
      <Modal open={open} setOpen={setOpen} selecionado={selecionado} />
      <div className="Barra">
        <img
          className="LogoDisney"
          src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
        />
      </div>
      <div className="card-list">{generateCards()}</div>
    </>
  );
}
