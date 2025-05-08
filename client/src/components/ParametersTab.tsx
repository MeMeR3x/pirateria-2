import { FC } from "react";
import TabContent from "./TabContent";

const ParametersTab: FC = () => {
  return (
    <TabContent
      title="Protección y Demos"
      imageSrc="https://images.unsplash.com/photo-1614064642639-e398c241c532?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      imageAlt="Representación visual de escudo de protección para la seguridad informática"
      imageAttribution="FLY:D. (2021). Digital security shield concept [Photograph]. Unsplash. https://unsplash.com/photos/mT7lXZPjk7U"
    >
      <p className="mb-4">Algunas medidas esenciales para protegerse de ataques informáticos incluyen:</p>
      
      <ol className="list-decimal list-inside text-left space-y-2 max-w-3xl mx-auto">
        <li className="mb-2"><strong>Antivirus y Anti-malware:</strong> Herramientas que detectan y eliminan amenazas.</li>
        <li className="mb-2"><strong>Firewalls:</strong> Filtran el tráfico entrante y saliente en la red.</li>
        <li className="mb-2"><strong>Autenticación de Dos Factores:</strong> Añade una capa extra de seguridad.</li>
        <li className="mb-2"><strong>Actualizaciones Periódicas:</strong> Mantener el software al día previene vulnerabilidades.</li>
        <li className="mb-2"><strong>Buenas Prácticas:</strong> Evitar correos sospechosos y sitios web no confiables.</li>
      </ol>
      
      <div className="mt-6 bg-[#16213e] p-5 rounded-lg max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-3">Protección contra gusanos informáticos</h3>
        <p className="mb-3">Los gusanos informáticos (🐛) requieren medidas específicas de protección:</p>
        <ul className="list-disc list-inside text-left space-y-1">
          <li>Mantener sistemas operativos y software actualizados con los últimos parches de seguridad</li>
          <li>Usar firewalls configurados para detectar tráfico sospechoso</li>
          <li>Implementar sistemas de detección de intrusiones (IDS)</li>
          <li>Segmentar redes para evitar propagación en caso de infección</li>
          <li>Realizar copias de seguridad regulares de datos importantes</li>
        </ul>
      </div>
    </TabContent>
  );
};

export default ParametersTab;