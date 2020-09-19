/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

import {Icon} from 'react-native-elements';

export class NavHeader2 extends Component {
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
        <View style={styles.middle}>
          <Text style={styles.txt}>{this.props.text}</Text>
        </View>
        <View style={styles.right}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    width: w('100%'),
    height: h('9%'),
    backgroundColor: 'dodgerblue',
    flexDirection: 'row',
    elevation: h('2%'),
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    // backgroundColor: 'red',
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: h('3%'),
  },
});
