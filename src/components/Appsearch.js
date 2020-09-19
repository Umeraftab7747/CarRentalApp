/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';

export class Appsearch extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.icon}>
          <Icon
            name={'search-outline'}
            size={30}
            type="ionicon"
            color="#0009"
          />
        </TouchableOpacity>
        <TextInput
          {...this.props}
          style={styles.txtinput}
          placeholder={'Cars, Bike , Bus'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '80%',
    height: h('6%'),
    flexDirection: 'row',
    marginTop: h('4%'),
    elevation: h('3%'),
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: h('2%'),
  },
  txtinput: {
    // backgroundColor: 'red',
    width: '88%',
    height: h('6%'),
    // paddingLeft: h('1%'),
  },
  icon: {
    height: h('6%'),
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
