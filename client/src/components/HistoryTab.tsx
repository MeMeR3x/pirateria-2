import { FC } from "react";
import TabContent from "./TabContent";

const HistoryTab: FC = () => {
  return (
    <TabContent
      title="Historia de la Ciberseguridad"
      imageSrc="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      imageAlt="Cronología de la evolución de la ciberseguridad con código binario de fondo"
      imageAttribution="Markus Spiske. (2019). Binary code on computer screen [Photograph]. Unsplash. https://unsplash.com/photos/hvSr_CVecVI"
    >
      <p className="mb-3">Desde la aparición de los primeros virus en los años 70 hasta los sofisticados ataques actuales, la ciberseguridad ha evolucionado constantemente.</p>
      <p className="mb-3">El primer virus informático, llamado <strong>Creeper</strong>, apareció en 1971. Con el tiempo, los ataques han ido aumentando en complejidad, dando lugar a grandes brechas de seguridad en empresas y gobiernos.</p>
      
      <div className="mt-6 bg-[#16213e] rounded-lg p-4 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Hitos importantes en la historia de la ciberseguridad:</h3>
        <ul className="list-disc list-inside text-left space-y-2">
          <li><strong>1971:</strong> Creeper, el primer virus informático, aparece en la red ARPANET.</li>
          <li><strong>1986:</strong> Se documenta el primer gusano informático que afectó a múltiples computadoras.</li>
          <li><strong>1988:</strong> El gusano Morris se convierte en el primer malware de distribución masiva.</li>
          <li><strong>1995:</strong> Aparece el primer antivirus comercial ampliamente distribuido.</li>
          <li><strong>2000:</strong> El gusano ILOVEYOU infecta millones de computadoras en todo el mundo.</li>
          <li><strong>2010:</strong> Stuxnet demuestra el potencial de los gusanos como armas cibernéticas.</li>
          <li><strong>2017:</strong> WannaCry, un ransomware con propiedades de gusano, afecta a organizaciones globalmente.</li>
          <li><strong>2023:</strong> Avances en IA aplicados a la detección y mitigación de gusanos informáticos.</li>
        </ul>
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] rounded-lg max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Evolución del gusano informático (🐛)</h3>
        <p>Los gusanos informáticos han evolucionado desde simples programas de autorreplicación hasta sofisticadas amenazas con capacidades de persistencia, ocultación y propagación automatizada. Su capacidad para moverse a través de redes sin intervención humana los convierte en una de las amenazas más peligrosas del panorama actual.</p>
      </div>
    </TabContent>
  );
};

export default HistoryTab;
