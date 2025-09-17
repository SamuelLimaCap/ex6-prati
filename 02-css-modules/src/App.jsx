import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Skeleton from "./components/Skeleton";
import { data } from "./data/mockdata.js";

function App() {
  const [className, setClassName] = useState("theme-dark");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    // No arquivo APP foi preciso importar um CSS por conta que module CSS não trabalha muito bem com alguns combinators do CSS na classe root (:has, :is, ...)
    <div className={`body-root ${className}`}>
      <Navbar setClassName={setClassName} />
      <div className="content" id="home">
        <Skeleton loading={isLoading} data={data} />
      </div>
    </div>
  );
}

export default App;
