import { BrowserRouter, Switch } from "react-router-dom";
import { mainRouter, adminRouter } from "./configs/router";
import RouterMainTemplate from "./templates/main";
import RouterAdminTemplate from "./templates/admin";
import "react-notifications/lib/notifications.css";

function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }, index) => {
      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={Component}
          key={index}
        ></RouterMainTemplate>
      );
    });
  };
  const renderAdminRouter = () => {
    return adminRouter.map(({ path, exact, Component }, index) => {
      return (
        <RouterAdminTemplate
          path={path}
          exact={exact}
          Component={Component}
          key={index}
        ></RouterAdminTemplate>
      );
    });
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {renderMainRouter()}
          {renderAdminRouter()}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
