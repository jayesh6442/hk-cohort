import Inside from "./Inside";

/* eslint-disable react/prop-types */
function Header({ title }) {
  return (
    <div>
      {title}
      <Inside />
    </div>
  );
}

export default Header;
