import { ReactNode, useState } from "react";

interface Props{
  text: string,
  children: ReactNode
}
export default function Tooltip({ text, children }:Props){
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute w-12 p-2 text-sm text-center bottom-full left-1/2 transform -translate-x-1/2 mb-1 text-myred">
          {text}
        </div>
      )}
    </div>
  );
};