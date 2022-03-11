import React, { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDateHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.floor(Math.random() * 10),
    };
    // передача данных в компонент выше
    props.onAddCost(costData);
  };

  const inputCostDataHundler = () => {
    isFormVisible ? setIsFormVisible(false) : setIsFormVisible(true);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={inputCostDataHundler}>Добавить новый расход</button>
      )}

      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDateHandler}
          onCancelCostData={inputCostDataHundler}
        />
      )}
    </div>
  );
};

export default NewCost;
