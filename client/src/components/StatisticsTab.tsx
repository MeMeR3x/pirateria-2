import { FC } from "react";
import TabContent from "./TabContent";

const StatisticsTab: FC = () => {
  return (
    <TabContent
      title="Estadísticas y Datos Actuales"
      imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      imageAlt="Estadísticas sobre piratería digital global"
    >
      <p className="mb-6">La piratería digital sigue siendo un fenómeno global con importantes repercusiones económicas y sociales.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-[#16213e] rounded-lg p-5 shadow-md">
          <h3 className="text-xl font-bold mb-3 text-[#ff416c]">Impacto Económico</h3>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>Las pérdidas anuales globales por piratería de software se estiman en más de <strong>$50 mil millones</strong>.</li>
            <li>La industria cinematográfica pierde aproximadamente <strong>$30 mil millones</strong> al año debido a la piratería.</li>
            <li>El sector musical reporta pérdidas de <strong>$12.5 mil millones</strong> anuales por consumo no autorizado.</li>
            <li>La piratería de videojuegos representa aproximadamente <strong>$8.1 mil millones</strong> en ventas perdidas anualmente.</li>
          </ul>
        </div>
        
        <div className="bg-[#16213e] rounded-lg p-5 shadow-md">
          <h3 className="text-xl font-bold mb-3 text-[#ff416c]">Tendencias Actuales (2024)</h3>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>⬆️ <strong>Aumento del 22%</strong> en el streaming ilegal durante los últimos 12 meses.</li>
            <li>⬇️ <strong>Disminución del 15%</strong> en descargas directas, reemplazadas por servicios de streaming pirata.</li>
            <li>⚠️ <strong>83% de incremento</strong> en malware distribuido a través de sitios de piratería.</li>
            <li>📱 <strong>67% de la piratería</strong> ocurre ahora en dispositivos móviles, superando a computadoras.</li>
          </ul>
        </div>
        
        <div className="bg-[#16213e] rounded-lg p-5 shadow-md">
          <h3 className="text-xl font-bold mb-3 text-[#ff416c]">Distribución Regional</h3>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>Las tasas más altas de piratería de software se encuentran en <strong>Asia-Pacífico (57%)</strong> y <strong>Latinoamérica (52%)</strong>.</li>
            <li>Europa del Este tiene una tasa de piratería de software del <strong>47%</strong>.</li>
            <li>Norteamérica mantiene la tasa más baja con un <strong>19%</strong>.</li>
            <li>El streaming ilegal es más prevalente en <strong>Europa</strong>, mientras que la piratería de software predomina en <strong>Asia</strong>.</li>
          </ul>
        </div>
        
        <div className="bg-[#16213e] rounded-lg p-5 shadow-md">
          <h3 className="text-xl font-bold mb-3 text-[#ff416c]">Datos Sorprendentes</h3>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>🔍 <strong>53% de los usuarios</strong> de contenido pirata también pagan por servicios legítimos.</li>
            <li>💰 <strong>62% de los consumidores</strong> citan los altos precios como razón principal para recurrir a la piratería.</li>
            <li>🌐 <strong>38% de las personas</strong> admiten haber descargado contenido pirata a pesar de conocer su ilegalidad.</li>
            <li>⚙️ <strong>72% de las empresas</strong> no saben que utilizan software sin licencia adecuada.</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] rounded-lg max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2">El símbolo del gusano informático: 🐛</h3>
        <p>Los gusanos informáticos, representados comúnmente con el símbolo 🐛, son un tipo de malware frecuentemente distribuido en software pirata. A diferencia de los virus, pueden propagarse automáticamente sin intervención humana, infectando sistemas a través de redes. En 2023, el 28% del software pirata analizado contenía algún tipo de gusano informático malicioso.</p>
      </div>
    </TabContent>
  );
};

export default StatisticsTab;
