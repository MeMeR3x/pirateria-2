import { FC } from "react";
import TabContent from "./TabContent";

const TypesTab: FC = () => {
  return (
    <TabContent
      title="Tipos de Piratería Digital"
      imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      imageAlt="Representación de diferentes tipos de piratería digital"
    >
      <p className="mb-3">La piratería digital abarca diversas formas de distribución y uso no autorizado de contenido protegido por derechos de autor.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
        <div className="bg-[#16213e] rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-bold mb-2 text-[#ff416c]">Piratería de Software</h3>
          <p>Incluye la copia, distribución o uso no autorizado de programas informáticos. Las modalidades incluyen:</p>
          <ul className="list-disc list-inside text-left mt-2">
            <li>Cracks y keygen para desbloquear software comercial</li>
            <li>Distribución de programas en sitios de descarga</li>
            <li>Uso de licencias empresariales en múltiples equipos</li>
            <li>Software preinstalado ilegal en equipos nuevos</li>
          </ul>
        </div>
        
        <div className="bg-[#16213e] rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-bold mb-2 text-[#ff416c]">Piratería de Contenido Audiovisual</h3>
          <p>Abarca películas, series y videos distribuidos sin autorización:</p>
          <ul className="list-disc list-inside text-left mt-2">
            <li>Sitios de streaming ilegal</li>
            <li>Descargas directas de películas y series</li>
            <li>IPTV ilegal con canales premium</li>
            <li>Grabación y distribución de películas en cines</li>
          </ul>
        </div>
        
        <div className="bg-[#16213e] rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-bold mb-2 text-[#ff416c]">Piratería Musical</h3>
          <p>Reproducción no autorizada de música:</p>
          <ul className="list-disc list-inside text-left mt-2">
            <li>Descargas directas de MP3 y otros formatos</li>
            <li>Rippers de servicios de streaming legales</li>
            <li>Conversión de YouTube a MP3</li>
            <li>Compartición P2P de discografías completas</li>
          </ul>
        </div>
        
        <div className="bg-[#16213e] rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-bold mb-2 text-[#ff416c]">Piratería de Videojuegos</h3>
          <p>Copia y distribución no autorizada de juegos:</p>
          <ul className="list-disc list-inside text-left mt-2">
            <li>ROM de consolas antiguas y emuladores</li>
            <li>Copias crackeadas de juegos modernos</li>
            <li>Servidores privados para juegos online</li>
            <li>Modificación de consolas para juegos piratas</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] rounded-lg max-w-3xl mx-auto">
        <h3 className="text-xl font-bold">¿Sabías que...?</h3>
        <p className="mt-2">La piratería de software, además de implicar problemas legales, puede exponer a los usuarios a malware como el gusano informático, que se propaga automáticamente a través de redes y puede comprometer la seguridad de los datos.</p>
        <p className="font-bold text-2xl mt-1">🐛</p>
      </div>
    </TabContent>
  );
};

export default TypesTab;
