import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import de pages
import { Home } from './src/pages/home';
import { Calculadora } from './src/pages/calculadora';
import { Regressaolinear } from './src/pages/regressaolinear';



const Tab = createBottomTabNavigator();


export function Routes() {
    return (
        <Tab.Navigator>


            <Tab.Screen
                name='Calculadora' component={Calculadora}
            />

            <Tab.Screen
                name='Home ' component={Home}
            />

            <Tab.Screen
                name='Regressão Linear' component={Regressaolinear}
            />


        </Tab.Navigator>
    )
}