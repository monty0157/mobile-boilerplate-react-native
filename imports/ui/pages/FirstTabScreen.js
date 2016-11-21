import React, { Component } from 'react';
import { StatusBar, View, Text } from 'react-native';
import { styles as s } from "react-native-style-tachyons";
import { Navigation } from 'react-native-navigation';
import autobind from 'autobind-decorator';

import Button from '../elements/Button';

export default class FirstTabScreen extends Component {

  @autobind
  handleNavigation() {
    this.props.navigator.push({
      screen: 'SecondTabScreen',
      navigatorStyle: {
        navBarTranslucent: true,
      }
    })
  }

  render() {
    return(
      <View style={[s.ph3, s.pv3]}>
      {/* StatusBar should be set in the navigatorStyles,
          but this currently doesn't work */}
        <StatusBar
          barStyle='light-content'
        />
        <Text style={[s.f2]}>Hello</Text>
        <Button
          label="Click me!"
          raised
          onPress={this.handleNavigation}
        />

      </View>
    )
  }
}
