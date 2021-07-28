import * as React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Navigator from "../Navigator";

export default (props = { children }) => {
  const newProps = { ...props };
  newProps.navigatorComponents = createDrawerNavigator();
  return (
    <Navigator {...newProps} ></Navigator>
  );
}