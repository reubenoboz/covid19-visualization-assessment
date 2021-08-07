import { Fragment, Suspense } from "react";
import routes from "./routes";
import { Loader, NotFound, ErrorFallBack } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './Redux/store/store'
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <ErrorBoundary FallbackComponent={ErrorFallBack}>
          <Suspense fallback={<Loader fullscreen />}>
            <Switch>
              {routes.map((route, i) => {
                return <Route key={i} {...route} />;
              })}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
          </ErrorBoundary>
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
