/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
// Components
import {Appbtn, Navheader} from '../../components';

export class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <ImageBackground
          style={styles.bgimg}
          source={require('../../assets/bgimg.jpg')}>
          <View style={styles.ContainerView}>
            <Navheader
              leftic={'reorder-three-outline'}
              onPress={() => {
                this.props.navigation.openDrawer();
              }}
            />
            {/* profile */}
            <View style={styles.profileContainer}>
              <View style={styles.profile}></View>
              <Text style={styles.nametxt}>Umer aftab</Text>
              <Text style={styles.emailtxt}>umeraftab7747@gmail.com</Text>
            </View>
            {/* end */}
          </View>
        </ImageBackground>

        {/* lower */}
        <View style={styles.lowerContainer}>
          <View style={styles.DetailContainer}>
            <View style={styles.right}>
              <Text style={styles.rideText}>RIDES</Text>
              <Text style={styles.numberText}>24</Text>
            </View>
            <View style={styles.left}>
              <Text style={styles.rideText}>Distance</Text>
              <Text style={styles.numberText}>2250 km</Text>
            </View>
          </View>
          {/* containerEnd */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  bgimg: {
    width: '100%',
    height: h('40%'),
  },
  ContainerView: {
    backgroundColor: 'rgba(111, 74, 142, 0.8)',
    width: '100%',
    height: '100%',
  },
  profile: {
    backgroundColor: 'white',
    width: '23%',
    height: '43%',
    borderRadius: h('100%'),
  },
  profileContainer: {
    // backgroundColor: '#0006',
    width: '100%',
    height: h('31%'),
    alignItems: 'center',
  },
  nametxt: {
    color: 'white',
    fontSize: h('2.5%'),
    fontWeight: 'bold',
    marginTop: h('1%'),
  },
  emailtxt: {
    color: 'white',
    fontSize: h('2%'),
    // fontWeight: 'bold',
  },
  lowerContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('60%'),
    alignItems: 'center',
  },
  DetailContainer: {
    backgroundColor: 'white',
    width: '80%',
    height: h('20%'),
    marginTop: -h('6%'),
    borderRadius: h('1%'),
    elevation: h('2%'),
    flexDirection: 'row',
  },
  right: {
    // backgroundColor: 'red',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    // backgroundColor: 'green',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rideText: {
    color: '#0007',
    // fontWeight: 'bold',
    fontSize: h('2%'),
  },
  numberText: {
    color: 'rgba(111, 74, 142, 0.8)',
    fontWeight: 'bold',
    fontSize: h('4%'),
  },
});
