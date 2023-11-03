import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from "./components/MainMenu";
import Tables from "./components/Tables";
import DailyLog from './components/DailyLog';
import MonthlyLog from './components/MonthlyLog';
import AnnualLog from './components/AnnualLog';
import TableStats from './components/TableStats';


export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainMenu'>
        <Stack.Screen 
          name="MainMenu"
          component={MainMenu} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Tables"
          component={Tables} 
          options={{headerShown: false}}
        /> 
        <Stack.Screen 
          name="DailyLog"
          component={DailyLog} 
          options={{headerShown: false}}
        /> 
        <Stack.Screen 
          name="MonthlyLog"
          component={MonthlyLog} 
          options={{headerShown: false}}
        /> 
        <Stack.Screen 
          name="AnnualLog"
          component={AnnualLog} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="TableStats"
          component={TableStats} 
          options={{headerShown: false}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}