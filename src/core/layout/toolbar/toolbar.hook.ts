import { useEffect, useState } from "react";
import img1 from "@assets/img-1.svg";
import img2 from "@assets/img-2.svg";
import img3 from "@assets/img-3.svg";

type Figure = {
  id: number;
  href: string;
  title: string;
};

const useToolbarHook = () => {
  const [figures, setFigures] = useState<Figure[]>([]);

  useEffect(() => {
    setFigures([
      { id: 1, href: img1, title: "Scoot" },
      { id: 2, href: img2, title: "Cat" },
      { id: 3, href: img3, title: "Lady" },
    ]);
  }, []);

  return { figures };
};

export { useToolbarHook };
