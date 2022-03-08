import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
  const saveCostDateHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.floor(Math.random() * 10),
    };
    // передача данных в компонент выше
    props.onAddCost(costData);
  };
  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostDateHandler} />
    </div>
  );
};

export default NewCost;
