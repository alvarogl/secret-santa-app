import React, { FC, useState } from 'react';


interface InvitationLinkProps { }

const InvitationLink: FC<InvitationLinkProps> = () => {
  const [uniqueLink, setUniqueLink] = useState('');

  const generateLink = () => {
    // Aquí puedes generar el enlace único y guardarlo en el estado
    const generatedLink = 'www.mysite.com/santa/unique-link'; // Reemplaza esto con tu lógica real
    setUniqueLink(generatedLink);
  };

  const copyToClipboard = () => {
    // Lógica para copiar el enlace al portapapeles
  };

  return (
    <div>
      <h2>Generar Enlace de Invitación</h2>
      <button onClick={generateLink}>Generar Enlace</button>
      {uniqueLink && (
        <div>
          <p>Enlace único: {uniqueLink}</p>
          <button onClick={copyToClipboard}>Copiar al Portapapeles</button>
        </div>
      )}
    </div>
  );
};

export default InvitationLink;
