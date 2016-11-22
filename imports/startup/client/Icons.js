// Define all your icons once,
// load them once,
// and use everywhere

import { colors } from '../../ui/styling/colors';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


// define your suffixes by yourself..
// here we use active, big, small, very-big..
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {

  "home": [30, colors.primaryIconColor, MaterialIcons],
  "menu": [30, colors.primaryIconColor, MaterialIcons],
  "local-pizza": [30, colors.primaryIconColor, MaterialIcons],
}

const defaultIconProvider = MaterialIcons;

let iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName => {
      const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
      return Provider.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1]
      )
    })
  ).then(sources => {
    Object.keys(icons)
      .forEach((iconName, idx) => iconsMap[iconName] = sources[idx])

    // Call resolve (and we are done)
    resolve(true);
  })
});

export {
    iconsMap,
    iconsLoaded
};
