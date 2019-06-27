import React, {useRef} from 'react';

const FilterItem = ({ filter, id, onClick }) => {
  const { name, value } = filter;

  const filterRef = useRef();

  const handleClick = () => {
    filterRef.current.checked = true;
    const selectedFilter = filterRef.current.value

    onClick(selectedFilter);
  }

  return (
    <li onClick={handleClick}>
      <input ref={filterRef} type="radio" name="category" value={ value } id={ id } defaultChecked />
      <label htmlFor="filter0">{ name }</label>
    </li>
  );
};

export default FilterItem;
