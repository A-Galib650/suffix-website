import React, { lazy, Suspense } from "react";
import "./assets/css/app.css"
import PageLoader from "./loader/PageLoader";
// import StartupScreen  from "./StartupScreen" ;
const StartupScreen = lazy(() => import(`./StartupScreen`));
// test Comment

const App = () => {
  return (
    <Suspense fallback={<PageLoader />}>
    <StartupScreen />
    </Suspense>


  );
};

export default App;
