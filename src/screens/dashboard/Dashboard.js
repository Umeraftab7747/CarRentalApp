/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

// Components
import {Appbtn, Apptxt, Navheader, Appsearch} from '../../components';

export class Dashboard extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <ImageBackground
          source={require('../../assets/bgcover.jpg')}
          style={styles.bgContainer}>
          <View style={styles.bgcoverColor}>
            <Navheader leftic={'reorder-three-outline'} />
            <Appsearch />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  bgContainer: {
    width: '100%',
    height: h('30%'),
    resizeMode: 'cover',
  },
  bgcoverColor: {
    backgroundColor: 'rgba(111, 74, 142, 0.3)',
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
});
