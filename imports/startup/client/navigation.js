import { Navigation } from 'react-native-navigation';

import { colors } from '../../ui/styling/colors';
import { registerScreens } from './screens';
registerScreens();

import { iconsMap, iconsLoaded } from './Icons';
iconsLoaded.then(() => {
  startApp();
});

export function startApp() {

  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'FirstTabScreen',
        title: 'Screen 1',
        label: 'One',
        icon: iconsMap['home'],
        disableIconTint: true,
        navigatorButtons: {
          leftButtons: [
            {
              icon: iconsMap['menu'],
              disableIconTint: true,
            },
          ],
        },
        navigatorStyle: {
          navBarBackgroundColor: colors.primaryBackgroundColor,
          navBarTextColor: colors.primaryTextColor,
          navBarTranslucent: true,
          statusBarTextColorScheme: 'light', //not working at the moment #bug
          navBarButtonColor: colors.secondaryIconColor,
        }
      },
      {
        screen: 'SecondTabScreen',
        title: 'Screen 2',
        label: 'Two',
        icon: iconsMap['menu'],
        navigatorButtons: {
          leftButtons: [
            {
              icon: iconsMap['menu'],
              disableIconTint: true,
            },
          ],
        },
        navigatorStyle: {
          navBarBackgroundColor: colors.primaryBackgroundColor,
          navBarTextColor: colors.primaryTextColor,
          navBarTranslucent: true,
          statusBarTextColorScheme: 'light', //not working at the moment #bug
          navBarButtonColor: colors.secondaryIconColor,
        }
      },
      {
        screen: 'ThirdTabScreen',
        title: 'Screen 3',
        label: 'Three',
        icon: iconsMap['local-pizza'],
        navigatorStyle: {
          navBarBackgroundColor: colors.primaryBackgroundColor,
          navBarTextColor: colors.primaryTextColor,
          navBarTranslucent: true,
          statusBarTextColorScheme: 'light', //not working at the moment #bug
          navBarButtonColor: colors.secondaryIconColor,
        }
      }
    ],
    tabsStyle: {
      tabBarButtonColor: colors.primaryIconColor,
      tabBarBackgroundColor: colors.primaryBackgroundColor,
    },

  });
}
