import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import "./index.css";

const App = () => {
  return (
    <div id="root" style={{ display: "flex", width: "100%" }}>
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
