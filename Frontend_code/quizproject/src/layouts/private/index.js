import React from "react";
import { CustomHeader, CustomFooter } from "../../shared";
import { Route,Switch } from "react-router-dom";
import { privateRoutes } from "../../navigation/routes";
const PrivateLayout = () => {
  return (
    <>
      <div>
        <CustomHeader />
      </div>

      <div>
        <Switch>
          {privateRoutes &&
            privateRoutes.map((item, index) => (
              <Route
                key={index}
                exact
                path={item.path}
                component={item.component}
              />
            ))}
        </Switch>
      </div>

      <div>
        {" "}
        <CustomFooter />



    
      </div>
    </>
  );
};

export default PrivateLayout;
