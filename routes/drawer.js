import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import SelectionStack from './selectionStack';
import ProfileStack from './profileStack';
import ProvidersStack from './providersStack';
import RegionStack from './regionStack';
import LoginStack from './loginStack';
import ProductsStack from './productsStack';
import WinesStack from './winesStack';
import CheesesStack from './cheesesStack';
import SmokesStack from './smokesStack';
import CartStack from './cartStack';
import SideMenu from './sideMenu';

const RootDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeStack
        },
        Selection: {
            screen: SelectionStack
        },
        Products: {
            screen: ProductsStack        
        },
        Providers: {
            screen: ProvidersStack,        
        },
        Region: {
            screen: RegionStack
        },
        Profile: {
            screen: ProfileStack
        },
        Login: {
            screen: LoginStack
        },
        Wines: {
            screen: WinesStack
        },
        Cheeses: {
            screen: CheesesStack
        },
        Smokes: {
            screen: SmokesStack
        },
        Cart: {
            screen: CartStack
        },
        About: {
            screen: AboutStack
        }
    },
    {
        contentComponent: SideMenu
    }
)

export default createAppContainer(RootDrawerNavigator);