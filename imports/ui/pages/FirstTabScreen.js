import React, { Component } from 'react';
import { StatusBar, View, Text, ListView, TouchableHighlight } from 'react-native';
import { styles as s } from "react-native-style-tachyons";
import { Navigation } from 'react-native-navigation';
import autobind from 'autobind-decorator';

import Button from '../elements/Button';
import { colors } from '../styling/colors';

export default class FirstTabScreen extends Component {
  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

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

    const { list } = this.props;
    return(
      <View style={[s.ph3, s.pv3]}>
      {/* StatusBar should be set in navigatorStyles,
          but this currently doesn't work */}
        <StatusBar
          barStyle='light-content'
        />

        {/*<ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        /> */}


        {list.map(element =>
          <TouchableHighlight underlayColor={colors.primaryHighlightColor} activeOpacity={0.8} onPress={this.handleNavigation}>
            <View style={[s.mv1,]}>
              <Text style={[s.f3]}>{element.title}</Text>
              <Text style={[s.f5]}>{element.label}</Text>
            </View>
          </TouchableHighlight>
          )}
        <Button
          label="Click me!"
          raised
          onPress={this.handleNavigation}
        />

      </View>
    )
  }
}

FirstTabScreen.defaultProps = {
  list: [
    {
      title: 'Hello',
      label: 'this is a label',
    },
    {
      title: 'Hello',
      label: 'this is a label',
    },
  ],
}
