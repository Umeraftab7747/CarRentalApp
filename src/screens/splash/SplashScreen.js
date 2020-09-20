/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ActivityIndicator,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
// Components
import {Appbtn, Apptxt, Navheader} from '../../components';

export class SplashScreen extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.replace('WelcomeScreen');
    }, 3000);
  };

  render() {
    return (
      <ImageBackground
        source={require('../../assets/rent.jpg')}
        style={styles.bgcontainer}>
        <View style={styles.bgimg}>
          {/* top */}
          <View style={styles.containers}>
            <Text style={styles.welcometxt}>Welcome to</Text>
            <Text style={styles.logo}>RENT & GO</Text>
            <View style={{marginTop: h('50%')}}>
              <ActivityIndicator size="large" color="white" />
            </View>
          </View>

          {/* bottom */}
          <View style={styles.bottomcontainers}>
            {/* WithoutSignup */}
            <View style={styles.ContineContainer}>
              {/* <TouchableOpacity style={styles.txtContainer}>
                <Text style={styles.txtColor}>Continue without! Sign in</Text>
              </TouchableOpacity> */}
            </View>
          </View>
          {/* end */}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bgcontainer: {
    flex: 1,
  },
  bgimg: {
    backgroundColor: 'rgba(111, 74, 142, 0.6)',
    width: '100%',
    height: '100%',
  },
  containers: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomcontainers: {
    // backgroundColor: 'green',
    width: '100%',
    height: h('70%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: h('6%'),
    fontWeight: 'bold',
  },
  ContineContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('20%'),
    marginBottom: -h('25%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  txtContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
    width: '50%',
    height: h('6%'),
  },
  txtColor: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: h('2%'),
  },
  welcometxt: {
    color: 'white',
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
});
