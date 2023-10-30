import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from "./MainMenu";
import Tables from "./Tables";

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tables'>
        <Stack.Screen name="MainMenu" component={MainMenu} options={{headerShown: false}}/>
        <Stack.Screen name="Tables" component={Tables} options={{headerShown: false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}