import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../screens/Home'
import Masbaha from '../screens/Masbaha'
import Athkar from '../screens/Athkar'

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "القائمة الرئيسية",
    },
  },
  Masbaha: {
    screen: Masbaha,
    navigationOptions: {
      title: "المسبحة الألكترونية",
      
    }
  },
  Athkar: {
    screen: Athkar,
    navigationOptions: {
      title: "أذكار الصباح والمساء",
    }
  }
}

const Stack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'gainsboro',
    }
  }
})


export default createAppContainer(Stack)