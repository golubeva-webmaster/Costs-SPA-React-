import "./Costs.css";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

function Costs(props) {
  // Поднять сюда данные из CostFilter
  const [selectedYear, setSelectedYear] = useState("2021");

  const changeYearHundler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  filteredCosts.sort((a, b) => a.date.getMonth() - b.date.getMonth());

  return (
    <div>
      <Card className="costs">
        <Card className="filter">
          <CostFilter year={selectedYear} onChangeYear={changeYearHundler} />
        </Card>
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default Costs;
