import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Skeleton from "./components/Skeleton";
import { data } from "./data/mockdata.js";
import styled, { createGlobalStyle } from "styled-components";

const Content = styled.div`
  padding-top: 100px;
`;

const GlobalStyles = createGlobalStyle`
:root {
  --blue-background: #c2e9f6;
  --blue-border: #108dad;
  --blue-color: #96dcee;
  --yellow-background: #fffaa8;
  --yellow-border: #f5eb71;
  /** dark side **/
  --indigo-background: #808fc7;
  --indigo-border: #808bbc;
  --indigo-color: #6b7abb;
  --gray-border: #e8e8ea;
  --gray-dots: #e8e8ea;

  --navbar-color: #242d35;
  --focus-color: #da7f42;
  --text-color: white;
  --bg-color: #242424;
  --card-focus-color: darkgrey;
  --success-color-btn: darkcyan;
  --tag-color: rgb(280, 140, 255);

  --navbar-text-color: rgb(280, 140, 255);

  color: white;
}

#root:has(> div.theme-light) {
  --navbar-color: #da7f42;
  --focus-color: #422d35;
  --text-color: black;
  --bg-color: #f2f2f2 !important;
  --card-focus-color: #dfae8c;
  --success-color-btn: green;
  --navbar-text-color: white;
  --tag-color: #da7f42;

  background-color: #f2f2f2;
  color: black;
}
`;

function App() {
  const [className, setClassName] = useState("theme-dark");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className={`body-root ${className}`}>
        <Navbar setClassName={setClassName} />
        <Content id="home">
          <Skeleton loading={isLoading} data={data} />
        </Content>
      </div>
    </>
  );
}

export default App;
