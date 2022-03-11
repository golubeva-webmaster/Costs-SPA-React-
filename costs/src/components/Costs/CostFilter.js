import "./CostFilter.css";

const CostFilter = (props) => {
  const yearChangeHundler = (event) => {
    props.onChangeYear(event.target.value);
  };
  return (
    <div className="filter__container">
      <div>Выбор по году</div>
      <div>
        <select value={props.year} onChange={yearChangeHundler}>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};

export default CostFilter;
