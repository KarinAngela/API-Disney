import * as React from 'react';
import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import '../style.css';

export default function Modal({ open, setOpen, selecionado }) {
  const [apparitions, setApparitions] = useState<Array<string> | null>(null);

  function handleClose() {
    setOpen(false);
  }

  function parseApparitions() {
    if (selecionado !== null) {
      setApparitions([
        ...selecionado.films,
        ...selecionado.shortFilms,
        ...selecionado.tvShows,
        ...selecionado.videoGames,
        ...selecionado.parkAttractions,
      ]);
    }
  }

  function generateApparitionsText() {
    if (apparitions !== null) {
      return apparitions.map((item, index) => <span key={index}>{item}</span>);
    }
  }

  useEffect(() => parseApparitions(), [selecionado]);

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {selecionado?.name}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className="modal-content">
            <img src={selecionado?.imageUrl} />
            <div className="list">
              <span className="list-title">Aparições</span>
              <hr />
              <div className="list-items">{generateApparitionsText()}</div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
