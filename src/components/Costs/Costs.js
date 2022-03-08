import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import React, { useState } from "react";

function Costs(props) {
  // Поднять сюда данные из CostFilter
  const [selectedYear, setSelectedYear] = useState("2021");

  const changeYearHundler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <Card className="filter">
          <CostFilter year={selectedYear} onChangeYear={changeYearHundler} />
        </Card>
        {filteredCosts.map((cost) => {
          return (
            <CostItem
              key={cost.id}
              date={cost.date}
              description={cost.description}
              amount={cost.amount}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Costs;
