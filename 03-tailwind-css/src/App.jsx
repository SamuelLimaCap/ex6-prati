import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
    <div className={`body-root ${className}`}>
      <Navbar setClassName={setClassName} />
      <div className="content" id="home">
        <Skeleton loading={isLoading} data={data} />
      </div>
    </div>
  );
}

export default App;
