import React from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import { authenticateUser } from "../actions/auth";
import {
  umeedimg,
  independenceimg,
  Repulicimg,
  Christmasimg,
} from "../Imageapi/Gallayapi";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import {
  Home,
  Login,
  About,
  Studenterp,
  Acedemics,
  Educator,
  Admin,
  Umeedday,
  Contact,
  Donation,
} from "./";
import {
  Adminsidebar,
  Ragistratonf,
  AddTeacher,
  StudentRagistraton,
  PostNotification,
  StudentweeklyMaterial,
} from "./";
const PrivateRoute = (privateRouteProps) => {
  const { isLoggedin } = privateRouteProps;
  return isLoggedin ? <Outlet /> : <Navigate to="/login" />;
};

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      const user = jwt_decode(token);

      console.log("user", user);
      this.props.dispatch(
        authenticateUser({
          userId: user.userId,
          _id: user._id,
          name: user.name,
        })
      );
    }
  }
  render() {
    const { auth } = this.props;

    return (
      <div>
        <Router>
          {/* <Switch>
            <Route
              exact={true}
              path="/"
              render={() => {
                return <Home auth={auth} />;
              }}
            />
            <Route exact={true} path="/login" component={Login} />
            <Route path="/admin" component={Admin} />
            <Route exact={true} path="/educator/umeed" component={Educator} />
            <Route
              exact={true}
              path="/academics/class9"
              component={Acedemics}
            />
            <Route exact={true} path="/about" component={About} />
            {/* <Route exact={true} path="/student-info" component={Studenterp} /> */}
          {/* <PrivateRoute
              path="/student-info"
              component={Studenterp}
              isLoggedin={auth.isLoggedin}
              auth={auth}
            />
          </Switch> */}
          <Routes>
            <Route path="/" element={<Home auth={auth} />}></Route>
            <Route path="login" element={<Login />} />
            <Route exact={true} path="/educator/umeed" element={<Educator />} />
            <Route
              exact={true}
              path="/academics/class9"
              element={<Acedemics />}
            />
            <Route
              exact={true}
              path="/academics/class10"
              element={<Acedemics />}
            />
            <Route
              exact={true}
              path="/academics/class11"
              element={<Acedemics />}
            />
            <Route
              exact={true}
              path="/academics/class12"
              element={<Acedemics />}
            />
            <Route exact={true} path="/academics/JNV" element={<Acedemics />} />
            <Route exact={true} path="/academics/CHS" element={<Acedemics />} />
            <Route
              exact={true}
              path="/academics/jeemain"
              element={<Acedemics />}
            />
            <Route
              exact={true}
              path="/academics/polytechnic"
              element={<Acedemics />}
            />
            <Route exact={true} path="/about" element={<About />} />
            <Route exact={true} path="/contact" element={<Contact />} />
            <Route exact={true} path="/umeed/donation" element={<Donation />} />

            <Route
              path="/student-info"
              element={<PrivateRoute isLoggedin={auth.isLoggedin} />}
            >
              <Route
                path=""
                element={
                  <Studenterp isLoggedin={auth.isLoggedin} auth={auth} />
                }
              />
            </Route>
            <Route
              path="/admin/Ragister"
              element={<Admin myComponent={Ragistratonf} />}
            />
            <Route
              path="/admin/addteacher"
              element={<Admin myComponent={AddTeacher} />}
            />
            <Route
              path="/admin/addstudent"
              element={<Admin myComponent={StudentRagistraton} />}
            />
            <Route
              path="/admin/postnotification"
              element={<Admin myComponent={PostNotification} />}
            />
            <Route
              path="/admin/studentcontent"
              element={<Admin myComponent={StudentweeklyMaterial} />}
            />
            <Route
              path="/umeedday"
              element={<Umeedday images={umeedimg} title="Umeedday" />}
            />
            <Route
              path="/independenceday"
              element={
                <Umeedday images={independenceimg} title="Independence Day" />
              }
            />
            <Route
              path="/republicday"
              element={<Umeedday images={Repulicimg} title="Republic Day" />}
            />
            <Route
              path="/christmasday"
              element={<Umeedday images={Christmasimg} title="Chrismas Day" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    Navbar: state.Navbar,
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(App);
