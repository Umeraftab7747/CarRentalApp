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
import {Appbtn} from '../../components';

export class WelcomeScreen extends Component {
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
          </View>

          {/* bottom */}
          <View style={styles.bottomcontainers}>
            <Appbtn
              txt={'Signin'}
              onPress={() => {
                this.props.navigation.navigate('Signin');
              }}
            />

            <Appbtn
              txt={'Signup'}
              onPress={() => {
                this.props.navigation.navigate('SignupApp');
              }}
            />
            {/* WithoutSignup */}
            <View style={styles.ContineContainer}>
              <TouchableOpacity style={styles.txtContainer}>
                <Text style={styles.txtColor}>Continue without! Sign in</Text>
              </TouchableOpacity>
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
    height: h('30%'),
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
