import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailsPage';

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: PeoplePage,
    },
    PeopleDetail: {
      screen: PeopleDetailPage,
      navigationOptions: ({ navigation }) => {
        const peopleName =
          navigation.state.params.pessoa.name.title +
          ' ' +
          navigation.state.params.pessoa.name.first +
          ' ' +
          navigation.state.params.pessoa.name.last;
        return {
          title: peopleName,
          headerTitleStyle: {
            color: 'white',
            fontSize: 30,
            flexGrow: 1,
          },
        };
      },
    },
  },
  {
    defaultNavigationOptions: {
      title: 'Pessoas!',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: 'c5c5c5',
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
        flexGrow: 1,
        textAlign: 'center',
      },
    },
  },
);

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
