import React from 'react';

import Header from "./components/Header";
import TierTable from "./components/TierTable";
import TierForm from "./components/TierForm";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-7 col-12">
          <TierTable />
        </div>
        <div className="col-md-5 col-12">
          <TierForm />
        </div>
      </div>
    </div>
  );
}

export default App;
