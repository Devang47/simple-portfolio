import React, { Suspense } from "react";
import "./Styles/style.css";
const Loading = React.lazy(() => import("./Components/LoadingScreen"));
const Content = React.lazy(() => import("./Components/Content"));
// import Content from "./Components/Content";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
        <Loading />
      </Suspense>
    </>
  );
}

export default App;
