import React, { Fragment } from "react";

import Header from './components/Layouts/Header';
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <div>
      <Fragment>
        <Header />
        <main>
          <Meals />
        </main>
      </Fragment>
      
      
    </div>
  );
}

export default App;
