import { useState } from "react";
import DigitalPiracyHeader from "@/components/DigitalPiracyHeader";
import DigitalPiracyFooter from "@/components/DigitalPiracyFooter";
import TabNavigation from "@/components/TabNavigation";
import HistoryTab from "@/components/HistoryTab";
import VirusTab from "@/components/VirusTab";
import ParametersTab from "@/components/ParametersTab";
import InformationTab from "@/components/InformationTab";
import { TabType } from "@/lib/tabUtils";

const Home = () => {
  const [activeTab, setActiveTab] = useState<TabType>("historia");

  return (
    <div className="min-h-screen flex flex-col">
      <DigitalPiracyHeader />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === "historia" && <HistoryTab />}
      {activeTab === "virus" && <VirusTab />}
      {activeTab === "parametros" && <ParametersTab />}
      {activeTab === "informacion" && <InformationTab />}
      
      <div className="mt-auto">
        <DigitalPiracyFooter />
      </div>
    </div>
  );
};

export default Home;
