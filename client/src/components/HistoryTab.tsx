import { FC } from "react";
import TabContent from "./TabContent";

const HistoryTab: FC = () => {
  return (
    <TabContent
      title="Historia de la Piratería Digital"
      imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      imageAlt="Representación simbólica de la piratería digital"
    >
      <p className="mb-3">La piratería digital surge con el nacimiento de la tecnología informática, tomando impulso en los años 70 y 80 con las primeras copias no autorizadas de software.</p>
      <p className="mb-3">En los años 90, con la popularización de Internet, la piratería evolucionó hacia la distribución masiva de software, música y películas a través de BBS (Bulletin Board Systems) y luego mediante servicios P2P como Napster (1999).</p>
      <p className="mb-3">El siglo XXI vio la transformación de la piratería con BitTorrent (2001), permitiendo compartir archivos de gran tamaño. La era digital trajo consigo The Pirate Bay (2003), uno de los sitios de torrents más famosos, y servicios de streaming ilegal que continúan adaptándose a nuevas tecnologías.</p>
      
      <div className="mt-6 bg-[#16213e] rounded-lg p-4 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Hitos importantes en la historia de la piratería digital:</h3>
        <ul className="list-disc list-inside text-left space-y-2">
          <li><strong>1975:</strong> Bill Gates escribe carta abierta criticando la copia no autorizada de software.</li>
          <li><strong>1984:</strong> Se introducen medidas de protección contra copia en disquetes.</li>
          <li><strong>1998:</strong> Se aprueba la Digital Millennium Copyright Act (DMCA) en EE.UU.</li>
          <li><strong>2009:</strong> El juicio contra The Pirate Bay marca un precedente legal.</li>
          <li><strong>2012:</strong> La controversia SOPA/PIPA genera protestas masivas en internet.</li>
          <li><strong>2020:</strong> El streaming ilegal supera a la descarga directa como forma predominante de piratería.</li>
        </ul>
      </div>
    </TabContent>
  );
};

export default HistoryTab;
