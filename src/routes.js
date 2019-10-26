import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login,
      User,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      //   /** Configuração default para todas as páginas */
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#25C86F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
    }
  )
);

export default Routes;
