import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen.js'
import InformationScreen from '../screens/InformationScreen.js'
import ReminderScreen from '../screens/ReminderScreen.js'

const screens = {
    Home: {
        screen: HomeScreen
    },
    Information: {
        screen: InformationScreen
    },
    Reminder: {
        screen: ReminderScreen
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)