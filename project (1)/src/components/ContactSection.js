import React from 'react';

const ContactSection = () => {
  const whatsappNumber = '573024779145';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Buenas tardes, quisiera realizar un proceso ")}`;

  return (
    <section id="contacto" className="py-20 bg-emerald-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contáctanos</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Para una atención personalizada y exclusiva, escríbenos directamente.</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-emerald-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-100 transition-colors shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.165c-1.04-.95-1.688-2.277-1.688-3.684C.057 6.938 5.007 2 11.03 2c3.05 0 5.913 1.187 8.058 3.332 2.146 2.145 3.331 5.008 3.331 8.058 0 6.023-4.95 10.973-10.973 10.973-1.756 0-3.45-.402-4.938-1.105L.057 24zm6.597-3.807c.335.335.74.603 1.186.798l.605.353c.11.064.23.096.35.096.12 0 .24-.032.35-.096l.605-.353c.446-.195.851-.463 1.186-.798l.353-.353c.335-.335.603-.74.798-1.186l.353-.605c.064-.11.096-.23.096-.35 0-.12-.032-.24-.096-.35l-.353-.605c-.195-.446-.463-.851-.798-1.186l-.353-.353c-.335-.335-.74-.603-1.186-.798l-.605-.353c-.11-.064-.23-.096-.35-.096-.12 0-.24.032-.35.096l-.605.353c-.446.195-.851.463-1.186.798l-.353.353c-.335.335-.603.74-.798 1.186l-.353.605c-.064.11-.096.23-.096.35 0 .12.032.24.096.35l.353.605c.195.446.463.851.798 1.186l.353.353z"/></svg>
          WhatsApp Exclusivo
        </a>
      </div>
    </section>
  );
};

export default ContactSection;


// DONE