/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {Icon} from 'react-native-elements';

export class Navheader extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <TouchableOpacity style={styles.left} {...this.props}>
          <Icon
            name={this.props.leftic}
            size={40}
            type="ionicon"
            color="#fff"
          />
        </TouchableOpacity>
        <View style={styles.middle}></View>
        <View style={styles.right}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    width: w('100%'),
    height: h('9%'),
    // backgroundColor: 'white',
    flexDirection: 'row',
  },
  left: {
    // backgroundColor: 'red',
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    // backgroundColor: 'green',
    width: '70%',
    height: '100%',
  },
  right: {
    // backgroundColor: 'red',
    width: '15%',
    height: '100%',
  },
});
