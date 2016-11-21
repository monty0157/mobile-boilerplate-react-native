import { Navigation } from 'react-native-navigation';

import FirstTabScreen from '../../ui/pages/FirstTabScreen';
import SecondTabScreen from '../../ui/pages/SecondTabScreen';
import ThirdTabScreen from '../../ui/pages/ThirdTabScreen';

export function registerScreens() {
  Navigation.registerComponent('FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('ThirdTabScreen', () => ThirdTabScreen);
}
