import React, { useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const INITIAL_COSTS = [
  {
    date: new Date(2022, 2, 12),
    description: "Холодильник",
    amount: "999.99",
    id: "c1",
  },
  {
    date: new Date(2021, 11, 15),
    description: "MacBook",
    amount: "1254.75",
    id: "c2",
  },
  {
    date: new Date(2022, 1, 1),
    description: "Куртка",
    amount: "49.99",
    id: "c3",
  },
];
function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHundler = (cost) => {
    setCosts((prevCost) => {
      //обновление состояния на основе предыдущего
      let res = [cost, ...prevCost];
      console.log(res);
      return res;
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHundler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
