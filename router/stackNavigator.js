import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ProductDetails from '../screens/productDetails';

const screens = {
  Home: {
    screen: Home,
  },
  ProductDetails: {
    screen: ProductDetails,
  },
};

// home stack navigator screens
const StackNavigator = createStackNavigator(screens);

export default createAppContainer(StackNavigator);