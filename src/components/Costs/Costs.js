import CostItem from "./CostItem";
import "./Costs.css";
import Card from "../UI/Card";
import CostFilter from "./CostFilter";
import React, { useState } from "react";

function Costs(props) {
  // Поднять сюда данные из CostFilter
  const [selectedYear, setSelectedYear] = useState("2021");

  const changeYearHundler = (year) => {
    console.log(year);
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="costs">
        <Card className="filter">
          <CostFilter year={selectedYear} onChangeYear={changeYearHundler} />
        </Card>
        {props.costs.map((cost) => {
          return (
            <CostItem
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
/*

          <CostItem
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />;
          */
