import React from "react";
import Api from "./Components/Api";

const user = ["name", "email", "phone","kunal"];

const App = () => {
  return (
    <div className="flex flex-wrap">
      {user.map(function (value) {
        return <Api value={value} />;
      })}
    </div>
  );
};

export default App;
