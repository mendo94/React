import { NavLink } from "react-router-dom";
import BookCart from "./BookCart";
import { connect } from "react-redux";
import Logout from "./Logout";

function Menu(props) {
  const newLocal = "background-color: #e3f2fd;";
  return (
    <div>
      <nav className="navbar navbar-light" style={{ backgroundColor: "#333" }}>
        <div>
          <NavLink className="text-light nav-link" to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink className="text-light nav-link" to="/add-book">
            Add Book
          </NavLink>
        </div>
        <div>
          <NavLink className="text-light nav-link" to="/login">
            <Logout />
          </NavLink>
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
    isAuthenticated: state.userReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps)(BaseLayout);
