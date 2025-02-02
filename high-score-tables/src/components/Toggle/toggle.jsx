const ToggleButton = ({ onClick, isDescending }) => (
  <button className="toggle-butt" onClick={onClick}>
    Toggle: {isDescending ? "Ascending 🔽" : "Descending 🔼"}
  </button>
);

export default ToggleButton;
