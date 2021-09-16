import React, { Suspense } from "react";
import "./Styles/style.css";
import Loading from "./Components/LoadingScreen";
const Content = React.lazy(() => import("./Components/Content"));

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
