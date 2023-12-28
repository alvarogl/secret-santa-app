import React, { FC, useState } from 'react';


interface OrganizerFormProps {}

const OrganizerForm: FC<OrganizerFormProps> = () => {
  const [organizer, setOrganizer] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar la información del organizador y el mensaje
  };

  return (
    <div>
      <h2>Información del Organizador</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Organizador:
          <input type="text" value={organizer} onChange={(e) => setOrganizer(e.target.value)} />
        </label>
        <br />
        <label>
          Título:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar Invitaciones</button>
      </form>
    </div>
  );
};

export default OrganizerForm;
