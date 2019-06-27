import React, {useRef} from 'react';

const Form = ({onSubmit}) => {

  const itemRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemRef.current.value !== "") {
      const newItem = {
        name: itemRef.current.value,
        type: 'all',
        quantity: 1,
      };
      onSubmit(newItem)
    };
    itemRef.current.value = "";
  };

  return (
    <form id="newItem" className="newitem" auto-complete="off" onSubmit={handleSubmit}>
      <label htmlFor="itemName" className="line-label">New Item</label>
      <div className="addnew">
        <input ref={itemRef} type="text" name="item" id="itemName" className="form-component inpt" placeholder="What do you need?" />
        <input type="submit" value="Add" className="form-component btn" />
      </div>
    </form>
  );
};

export default Form;
