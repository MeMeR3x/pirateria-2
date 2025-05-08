import { FC } from "react";
import TabContent from "./TabContent";

const InformationTab: FC = () => {
  return (
    <TabContent
      title="Información Relevante"
    >
      <p className="mb-4">Últimos datos y noticias sobre ciberseguridad:</p>
      
      <ul className="list-none text-left space-y-3 max-w-3xl mx-auto">
        <li className="mb-2">⚠ <strong>Aumento del Ransomware:</strong> En 2024, los ataques de ransomware han incrementado un 35%.</li>
        <li className="mb-2">💻 <strong>Brechas de Seguridad:</strong> Empresas como Microsoft y Google han sido blanco de hackers.</li>
        <li className="mb-2">🔐 <strong>Nuevas Medidas de Protección:</strong> El uso de inteligencia artificial en ciberseguridad está en auge.</li>
      </ul>
      
      <div className="mt-6 bg-[#16213e] p-5 rounded-lg max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-3">Tendencias en gusanos informáticos (2024)</h3>
        <p className="mb-3">Los gusanos informáticos (🐛) siguen evolucionando con nuevas técnicas:</p>
        <ul className="list-disc list-inside text-left space-y-2">
          <li>Los gusanos modernos utilizan técnicas de evasión avanzadas para no ser detectados</li>
          <li>Muchos incorporan capacidades de extracción de datos antes de la propagación</li>
          <li>Se ha detectado un aumento del 42% en gusanos que atacan dispositivos IoT</li>
          <li>Los ataques más sofisticados combinan gusanos con otras formas de malware</li>
          <li>El tiempo medio de detección de un gusano informático ha aumentado a 7 días</li>
        </ul>
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] rounded-lg max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Alerta de Seguridad</h3>
        <p>La mejor protección contra amenazas informáticas sigue siendo mantener el software actualizado, utilizar contraseñas seguras y realizar copias de seguridad regulares de la información importante. Manténgase informado sobre las últimas amenazas y tendencias en seguridad.</p>
      </div>
    </TabContent>
  );
};

export default InformationTab;