import { FC } from "react";
import TabContent from "./TabContent";

const PreventionTab: FC = () => {
  return (
    <TabContent
      title="Prevención de la Piratería Digital"
      imageSrc="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      imageAlt="Medidas de protección contra la piratería digital"
    >
      <p className="mb-6">Existen diversas estrategias para combatir la piratería digital, tanto desde el punto de vista de los creadores como de las autoridades y los consumidores.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-[#16213e] rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-bold mb-3 text-[#ff416c]">Medidas Tecnológicas</h3>
          <ul className="list-decimal list-inside text-left space-y-2">
            <li><strong>DRM (Digital Rights Management):</strong> Tecnologías que controlan el acceso y uso del contenido digital.</li>
            <li><strong>Verificación en línea:</strong> Requiere conexión a internet para validar licencias de software.</li>
            <li><strong>Marcas de agua digitales:</strong> Códigos ocultos que identifican al comprador original.</li>
            <li><strong>Cifrado de contenido:</strong> Protege transmisiones de streaming y descargas autorizadas.</li>
            <li><strong>Autenticación biométrica:</strong> Vincula el contenido a características físicas del usuario.</li>
          </ul>
        </div>
        
        <div className="bg-[#16213e] rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-bold mb-3 text-[#ff416c]">Medidas Legales</h3>
          <ul className="list-decimal list-inside text-left space-y-2">
            <li><strong>Legislación específica:</strong> Leyes como DMCA en EE.UU. o directivas de la UE sobre derechos de autor.</li>
            <li><strong>Notificaciones de retirada:</strong> Mecanismos para eliminar contenido ilegal de plataformas y buscadores.</li>
            <li><strong>Bloqueo de sitios:</strong> Medidas judiciales para impedir el acceso a sitios de piratería.</li>
            <li><strong>Acuerdos internacionales:</strong> Tratados como ACTA para combatir la piratería a nivel global.</li>
            <li><strong>Litigios estratégicos:</strong> Acciones legales contra grandes infractores o facilitadores.</li>
          </ul>
        </div>
        
        <div className="bg-[#16213e] rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-bold mb-3 text-[#ff416c]">Medidas Educativas</h3>
          <ul className="list-decimal list-inside text-left space-y-2">
            <li><strong>Campañas de concienciación:</strong> Informar sobre el impacto negativo de la piratería en creadores.</li>
            <li><strong>Educación escolar:</strong> Integrar el respeto a la propiedad intelectual en currículos educativos.</li>
            <li><strong>Alternativas accesibles:</strong> Promover servicios legales asequibles como Spotify o Netflix.</li>
            <li><strong>Transparencia sobre costos:</strong> Explicar cómo se distribuyen los ingresos entre creadores.</li>
            <li><strong>Información sobre riesgos:</strong> Alertar sobre malware y otros peligros asociados a la piratería.</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 bg-[#16213e] p-5 rounded-lg max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Para empresas y creadores de contenido</h3>
        <p className="mb-3">Las estrategias más efectivas combinan protección técnica, vigilancia constante y modelos de negocio adaptados:</p>
        <ol className="list-decimal list-inside text-left space-y-1">
          <li>Implementar sistemas de monitoreo para detectar usos no autorizados</li>
          <li>Adaptar precios según mercados y capacidad adquisitiva regional</li>
          <li>Ofrecer valor añadido que no pueda piratearse (soporte, actualizaciones, comunidad)</li>
          <li>Utilizar licencias flexibles como freemium para atraer usuarios a versiones legales</li>
          <li>Facilitar mecanismos sencillos para reportar infracciones</li>
        </ol>
      </div>
    </TabContent>
  );
};

export default PreventionTab;
