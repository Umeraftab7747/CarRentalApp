/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class Appbtn extends Component {
  render() {
    return (
      <TouchableOpacity {...this.props} style={styles.Container}>
        <Text style={styles.txt}>{this.props.txt}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    width: w('55%'),
    height: h('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7f78d2',
    borderRadius: h('3%'),
    marginTop: h('1.5%'),
  },
  txt: {
    color: 'white',
    fontSize: h('2.5%'),
    fontWeight: 'bold',
  },
});
