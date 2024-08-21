/* eslint-disable react/prop-types */
function Input(props) {
  return (
    <div>
      <input
        type="text"
        name={props.name}
        id="one"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
