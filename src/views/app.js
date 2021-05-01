import { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'

import { ConnectedRouter } from 'connected-react-router/immutable'
import { Route, Switch } from 'react-router-dom'

import RouteEnum from '../constants/RouteEnum'
import SocketProvider from 'providers/socket-provider'
import UserProvider from '@providers/user-provider'

const Page1 = lazy(() => import('./home/home'))
const SignIn = lazy(() => import('./sign-in/sign-in'))

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <SocketProvider>
        <UserProvider>
          <Suspense fallback={() => <h1>carregando</h1>}>
            <Switch>
              <Route exact path={RouteEnum.Home} component={Page1} />
              <Route exact path={RouteEnum.SignIn} component={SignIn} />
              <Route component={() => <h1>Página não encontrada</h1>} />
            </Switch>
          </Suspense>
        </UserProvider>
      </SocketProvider>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object.isRequired,
}

export default App
