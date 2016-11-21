import { startApp } from './imports/startup/client/navigation';
import NativeTachyons from 'react-native-style-tachyons';
import { StyleSheet } from 'react-native';

import { colors } from './imports/ui/styling/colors'

NativeTachyons.build({
   rem: 16,
   colors: {
     palette: {
       primaryTextColor: colors.primaryTextColor,
       primaryIconColor: colors.primaryIconColor,
       primaryBackgroundColor: colors.primaryBackgroundColor,
       secondaryBackgroundColor: colors.secondaryBackgroundColor,
       secondaryTextColor: colors.secondaryTextColor,
     }
   }
}, StyleSheet);
