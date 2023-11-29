import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import de pages
import { Home } from './src/pages/home';
import { Calculadora } from './src/pages/calculadora';
import { RegressaoLinear } from './src/pages/regressaolinear';



const Tab = createBottomTabNavigator();


export function Routes() {
    return (
        <Tab.Navigator>


            <Tab.Screen
                name='Calculadora' component={Calculadora} options={{headerShown: false,}}
            />

            <Tab.Screen
                name='Home ' component={Home} options={{headerShown: false,}}
            />

            <Tab.Screen
                name='Regressão Linear' component={RegressaoLinear} options={{headerShown: false,}}
            />


        </Tab.Navigator>
    )
}