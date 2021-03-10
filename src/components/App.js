import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import NavbarComponent from './NavBar/Navbar';
import Fallback from './Fallback/Fallback';

const HomePage = lazy(() => import('../pages/Home/Home'));
const PeoplePage = lazy(() => import('../pages/People/PeoplePage'));
const PlanetsPage = lazy(() => import('../pages/Planets/PlanetsPage'));

const queryClient = new QueryClient();

const App = () => (
  <>
    <Router>
      <NavbarComponent />
      <Suspense fallback={<Fallback />}>
        <Switch>
          <QueryClientProvider client={queryClient}>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/planets' component={PlanetsPage} />
            <Route exact path='/people' component={PeoplePage} />
          </QueryClientProvider>
        </Switch>
      </Suspense>
    </Router>
  </>
);

export default App;
