import { FC } from "react";
import TabContent from "./TabContent";

const VirusTab: FC = () => {
  return (
    <TabContent
      title="Virus Informáticos Más Comunes"
      imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      imageAlt="Representación de código malicioso con matriz de caracteres verdes sobre fondo negro"
      imageAttribution="Markus Spiske. (2018). Computer code matrix [Photograph]. Unsplash. https://unsplash.com/photos/iar-afB0QQw"
    >
      <p className="mb-3">Existen diferentes tipos de malware que afectan a los sistemas:</p>
      <ul className="list-disc list-inside text-left space-y-2 max-w-3xl mx-auto mt-4">
        <li className="mb-2"><strong>Virus:</strong> Se adhieren a archivos ejecutables y se propagan.</li>
        <li className="mb-2"><strong>Gusanos:</strong> Se replican sin necesidad de archivos huésped.</li>
        <li className="mb-2"><strong>Troyanos:</strong> Se disfrazan de software legítimo.</li>
        <li className="mb-2"><strong>Ransomware:</strong> Secuestra archivos y pide un rescate.</li>
        <li className="mb-2"><strong>Spyware:</strong> Roba información sin que el usuario lo note.</li>
      </ul>
      
      <div className="mt-6 bg-[#16213e] rounded-lg p-4 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Características del gusano informático:</h3>
        <p className="mb-2">A diferencia de otros virus, el gusano informático (🐛) tiene la capacidad de propagarse automáticamente a través de redes sin requerir interacción humana, lo que lo hace particularmente peligroso.</p>
        <p className="mb-2">Los gusanos consumen recursos de red, causando denegación de servicio y daños a sistemas completos de forma rápida.</p>
        <p>Algunos ejemplos famosos incluyen Stuxnet, Conficker y ILOVEYOU, que causaron daños millonarios a nivel mundial.</p>
      </div>
    </TabContent>
  );
};

export default VirusTab;