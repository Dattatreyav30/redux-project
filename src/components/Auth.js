import classes from "./Auth.module.css";
import { sliceActions } from "../store/index";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import { Fragment } from "react";

const Auth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(sliceActions.login());
  };
  return (
    <Fragment>
      {isAuthenticated && <UserProfile />}
      {!isAuthenticated && (
        <main className={classes.auth}>
          <section>
            <form>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <button onClick={loginHandler}>Login</button>
            </form>
          </section>
        </main>
      )}
    </Fragment>
  );
};

export default Auth;
