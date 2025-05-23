import React from 'react';

const LayoutHeader = () => {
  // URL de tu logo editado y subido
  const logoUrl = "https://i.imgur.com/TU-LOGO-EDITADO.png"; // Reemplazar con la URL real de tu logo subido

  return (
    <header className="bg-emerald-800 text-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center min-w-[180px] h-16">
          <img 
            src={logoUrl}
            alt="Logo Trámites y Servicios Aquitania"
            className="h-full w-auto object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'><style>.txt{font:bold 14px Arial;fill:%2315803D}</style><rect width='100%25' height='100%25' fill='white'/><text x='50%25' y='55%25' class='txt' text-anchor='middle'>TRÁMITES AQUITANIA</text></svg>";
              e.target.onerror = () => {
                e.target.src = "https://via.placeholder.com/200x80.png?text=LOGO+AQUITANIA&bg=ffffff&color=15803D";
              };
            }}
          />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#servicios" className="hover:text-emerald-200 transition-colors font-medium">Servicios</a></li>
            <li><a href="#nosotros" className="hover:text-emerald-200 transition-colors font-medium">Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-emerald-200 transition-colors font-medium">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default LayoutHeader;