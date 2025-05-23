import React from 'react';

const HeroSection = () => {
  // URL de tu logo editado y subido
  const logoUrl = "https://i.imgur.com/TU-LOGO-EDITADO.png"; // Reemplazar con la URL real de tu logo subido

  return (
    <section className="relative bg-emerald-700 text-white py-32">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSI+CiAgPHBhdGgG='M0 0H40V40H0z'/><path d='M0 0L40 40M40 0L0 40'/></svg>')]"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <img 
            src={logoUrl}
            alt="Logo principal"
            className="h-32 mx-auto mb-8 object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 80'><style>.txt{font:bold 14px Arial;fill:%2315803D}</style><rect width='100%25' height='100%25' fill='white'/><text x='50%25' y='55%25' class='txt' text-anchor='middle'>TRÁMITES AQUITANIA</text></svg>";
              e.target.onerror = () => {
                e.target.src = "https://via.placeholder.com/200x80.png?text=LOGO+AQUITANIA&bg=ffffff&color=15803D";
              };
            }}
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Tus Trámites, Nuestra Prioridad</h2>
          <p className="text-xl mb-8">Soluciones rápidas, seguras y con trato personalizado</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#servicios" 
              className="bg-white text-emerald-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-100 transition-colors shadow-lg"
            >
              Ver Servicios
            </a>
            <a 
              href="https://wa.me/573024779145?text=Buenas%20tardes%2C%20quisiera%20realizar%20un%20proceso%20" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-800 transition-colors"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


Nota: He usado una URL de ejemplo (`https://i.imgur.com/TU-LOGO-EDITADO.png`) en el código. Debes reemplazarla con la URL real de tu logo una vez que lo hayas subido a un servicio como Imgur o ImgBB.

Próximos pasos:

1.  Sube tu logo editado a un servicio de hosting de imágenes (Imgur, ImgBB, etc.).
2.  Copia la URL directa de la imagen.
3.  Reemplaza la URL de ejemplo en los archivos `LayoutHeader.js` y `HeroSection.js` con la URL de tu logo.

¡Con esto, tu logo se mostrará correctamente en la página! Si necesitas ayuda para subir el logo o tienes alguna otra duda, no dudes en preguntar.