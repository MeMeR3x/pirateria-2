import { useState } from "react";
import DigitalPiracyHeader from "@/components/DigitalPiracyHeader";
import DigitalPiracyFooter from "@/components/DigitalPiracyFooter";
import TabNavigation from "@/components/TabNavigation";
import HistoryTab from "@/components/HistoryTab";
import TypesTab from "@/components/TypesTab";
import PreventionTab from "@/components/PreventionTab";
import StatisticsTab from "@/components/StatisticsTab";
import { TabType } from "@/lib/tabUtils";

const Home = () => {
  const [activeTab, setActiveTab] = useState<TabType>("historia");

  return (
    <div className="min-h-screen flex flex-col">
      <DigitalPiracyHeader />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === "historia" && <HistoryTab />}
      {activeTab === "tipos" && <TypesTab />}
      {activeTab === "prevencion" && <PreventionTab />}
      {activeTab === "estadisticas" && <StatisticsTab />}
      
      <div className="mt-auto">
        <DigitalPiracyFooter />
      </div>
    </div>
  );
};

export default Home;
