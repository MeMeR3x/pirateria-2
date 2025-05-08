import { FC, ReactNode } from "react";

interface TabContentProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
}

const TabContent: FC<TabContentProps> = ({ title, imageSrc, imageAlt, children }) => {
  return (
    <div className="p-8 text-center min-h-[400px] animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className="max-w-full md:max-w-[80%] mx-auto my-4 rounded-xl shadow-lg"
      />
      {children}
    </div>
  );
};

export default TabContent;
