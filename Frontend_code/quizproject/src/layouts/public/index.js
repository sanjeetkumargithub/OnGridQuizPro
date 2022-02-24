import React from "react";
import { CustomHeader, CustomFooter } from "../../shared";
import { Route, Switch } from "react-router-dom";
import { publicRoutes } from "../../navigation/routes";
const PublicLayout = () => {
  return (
    <>
      <CustomHeader />
      <Switch>
        {publicRoutes &&
          publicRoutes.map((item, index) => (
            <Route
              key={index}
              exact
              path={item.path}
              component={item.component}
            />
          ))}
      </Switch>
      <CustomFooter />
    </>
  );
};
export default PublicLayout;
