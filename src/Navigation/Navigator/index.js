import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

/*
  A Navigator may have all the props listed for navigators in React Navigation.
  The children of a Navigator (called Screens) may have all the props listed for screens in React Navigation.
  However, Screens must be written as an inline element, even if they have children defined elsewhere.
*/
export default (
  props = {
    children,
    initialRoute,
    screenOptions,
    headerShown,
    navigatorComponents,
  }
) => {
  const { Navigator, Screen } = props.navigatorComponents;

  const navigatorProps = { ...props };
  navigatorProps.initialRouteName =
    props.initialRoute &&
    (typeof props.initialRoute === "string"
      ? props.initialRoute
      : props.initialRoute.name);
  navigatorProps.screenOptions = {
    headerShown: props.headerShown,
    ...props.screenOptions,
  };

  let children;
  if (props.children === undefined) {
    children = [<View name="default"></View>];
  } else if (props.children.length === undefined) {
    children = [props.children];
  } else {
    children = props.children;
  }

  console.log(props.children);

  return (
    <NavigationContainer>
      <Navigator {...navigatorProps}>
        {children.map((child) => {
          const newProps = { ...child.props };
          newProps.key = child.props.title || child.type.name;
          newProps.name = child.props.name || child.type.name;
          newProps.component = child.type;
          return <Screen {...newProps} />;
        })}
      </Navigator>
    </NavigationContainer>
  );
};
