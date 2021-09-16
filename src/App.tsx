import React, { Suspense } from "react";
import "./Styles/style.css";
import Loading from "./Components/LoadingScreen";
const Content = React.lazy(() => import("./Components/Content"));

function App() {
  return (
    <>
      <Loading />
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </>
  );
}

export default App;
