import React from "react";
import Logo from "../../Logo/Logo.js";
import NavigationItems from "../NavigationItems/NavigationItems.js";
import classes from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop.js";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary.js";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.open)
    attachedClasses = [classes.SideDrawer, classes.Close, classes.Open];

  return (
    <Auxiliary>
      <Backdrop clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default sideDrawer;
