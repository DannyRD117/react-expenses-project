import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {


    const filterChangeHandler = (event) => {
        props.onSaveFilter(event.target.value);
    }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
