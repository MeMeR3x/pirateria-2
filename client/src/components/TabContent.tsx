import { FC, ReactNode } from "react";

interface TabContentProps {
  title: string;
  children: ReactNode;
}

const TabContent: FC<TabContentProps> = ({ title, children }) => {
  return (
    <div className="p-8 text-center min-h-[400px] animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default TabContent;
