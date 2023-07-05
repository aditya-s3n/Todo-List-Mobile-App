import { StyleSheet } from 'react-native';

import Splash from './src/pages/Splash';
import Todo from './src/pages/Todo';
import Done from './src/pages/Done';
import NewTask from './src/pages/NewTask';

import { Provider } from 'react-redux';
import store from './redux/store';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faList, faCheck } from '@fortawesome/free-solid-svg-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createNativeStackNavigator()
const Tabs = createMaterialBottomTabNavigator()

function HomeTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen 
        name='Todo' 
        component={Todo}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faList} style={{ marginTop: 5 }} />
        }} 
      />
      <Tabs.Screen 
        name='Done' 
        component={Done}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faCheck} style={{ marginTop: 5 }} />
        }} 
      />
    </Tabs.Navigator>
  )
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
          <Stack.Screen name="Tasks" component={HomeTabs} />
          <Stack.Screen name="NewTask" component={NewTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App