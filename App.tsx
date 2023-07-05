import { StyleSheet } from 'react-native';

import Splash from './src/pages/Splash';
import Todo from './src/pages/Todo';
import Done from './src/pages/Done';

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
          tabBarIcon: () => <FontAwesomeIcon icon={faList} />
        }} 
      />
      <Tabs.Screen 
        name='Done' 
        component={Done}
        options={{
          tabBarIcon: () => <FontAwesomeIcon icon={faCheck} />
        }} 
      />
    </Tabs.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
        <Stack.Screen name="Tasks" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
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