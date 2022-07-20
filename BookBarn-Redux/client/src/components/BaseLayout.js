import { NavLink } from "react-router-dom";
import BookCart from "./BookCart";
import { connect } from "react-redux";

function Menu() {
  const newLocal = "background-color: #e3f2fd;";
  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div>
          <NavLink className="text-dark" to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/add-book">Add Book</NavLink>
        </div>
        <div>
          <BookCart />
        </div>
      </nav>
    </div>
  );
}

function BaseLayout(props) {
  return (
    <div>
      {props.isAuthenticated ? <Menu /> : null}
      {props.children}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(BaseLayout);
