import React from 'react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="relative py-20 bg-gray-900 text-white">
      {/* Fondo semitransparente para mejor legibilidad */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h2>
          <p className="text-lg mb-8">
            En Trámites y Servicios Aquitania nos especializamos en simplificar tu vida. 
            Con años de experiencia, ofrecemos soluciones rápidas, confiables y personalizadas.
          </p>
          <div className="bg-emerald-600 h-1 w-24 mx-auto mb-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-emerald-400 mb-2">+5</div>
              <div>Años de experiencia</div>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-emerald-400 mb-2">+10k</div>
              <div>Trámites realizados</div>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-emerald-400 mb-2">100%</div>
              <div>Satisfacción garantizada</div>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
              <div className="text-2xl font-bold text-emerald-400 mb-2">24/7</div>
              <div>Soporte al cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;