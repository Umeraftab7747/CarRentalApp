/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';

export class Apptxt extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          <Icon
            name={this.props.iconname}
            size={35}
            type="ionicon"
            color="#0009"
          />
        </View>

        <TextInput
          style={styles.txtinput}
          placeholder={this.props.placeholder}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#0004',
    borderBottomWidth: 1,
    width: w('85%'),
    marginTop: h('2.5%'),
  },
  txt: {
    color: 'white',
    fontSize: h('2.5%'),
    fontWeight: 'bold',
  },
  txtinput: {
    // backgroundColor: 'red',
    width: w('70%'),
    height: h('6%'),
  },
  icon: {
    // backgroundColor: 'green',
    width: w('10%'),
    height: h('6%'),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
