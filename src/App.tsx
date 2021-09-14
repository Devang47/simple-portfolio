import React, { Suspense } from "react";
import Loading from "./Components/LoadingScreen";
import "./Styles/style.css";
const Content = React.lazy(() => import("./Components/Content"));
// import Content from "./Components/Content";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
      <Loading />
    </>
  );
}

export default App;
