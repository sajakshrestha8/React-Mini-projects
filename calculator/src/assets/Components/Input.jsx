/* eslint-disable react/prop-types */
function Input(props) {
  return (
    <>
      <div className="input">
        <label>{props.value}</label>
      </div>
    </>
  );
}

export default Input;
