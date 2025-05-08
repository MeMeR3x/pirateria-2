import { FC } from "react";
import { TabType } from "@/lib/tabUtils";

interface TabNavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const TabNavigation: FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs: { id: TabType; label: string }[] = [
    { id: "historia", label: "Historia" },
    { id: "tipos", label: "Tipos de Piratería" },
    { id: "prevencion", label: "Prevención" },
    { id: "estadisticas", label: "Estadísticas" }
  ];

  return (
    <nav className="flex justify-center gap-4 p-4 bg-[#16213e] flex-wrap">
      {tabs.map(tab => (
        <a
          key={tab.id}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(tab.id);
          }}
          className={`${
            activeTab === tab.id ? "bg-[#ff4b2b] scale-110" : "bg-[#ff416c]"
          } text-white no-underline py-2 px-6 rounded transition-transform duration-300 hover:bg-[#ff4b2b] hover:scale-110 font-bold`}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  );
};

export default TabNavigation;
