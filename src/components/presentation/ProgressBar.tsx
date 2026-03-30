import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setWidth((winScroll / height) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[60] bg-gradient-to-r from-contractor via-gold to-hennart"
      style={{ width: `${width}%` }}
    />
  );
};

export default ProgressBar;
