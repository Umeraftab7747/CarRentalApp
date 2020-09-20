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
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';

// Components
import {Appbtn, Apptxt, Navheader} from '../../components';

export class SignupApp extends Component {
  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={require('../../assets/rent.jpg')}
            style={styles.bgcontainer}>
            <View style={styles.bgimg}>
              {/* top */}
              <Navheader
                leftic={'chevron-back-circle-outline'}
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              />
              <View style={styles.containers}>
                <Text style={styles.welcometxt}>Signup to</Text>
                <Text style={styles.logo}>RENT & GO</Text>
              </View>

              {/* bottom */}
              <View style={styles.bottomcontainers}>
                {/* singin */}
                <View style={styles.cover}>
                  <View style={styles.txtinputContainer}>
                    <Apptxt
                      iconname={'person-circle-outline'}
                      placeholder={'Name'}
                    />
                    <Apptxt iconname={'mail-outline'} placeholder={'Email'} />
                    <Apptxt
                      iconname={'phone-potrait-outline'}
                      placeholder={'Phone'}
                    />
                    <Apptxt
                      iconname={'lock-closed-outline'}
                      placeholder={'Password'}
                    />
                    <Apptxt
                      iconname={'lock-closed-outline'}
                      placeholder={'ConfirmPassword'}
                    />
                  </View>
                  <View style={styles.lowerContainer}>
                    <Appbtn txt={'Signup'} />
                  </View>
                </View>
                {/* Continue */}
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Signin');
                  }}
                  style={styles.txtContainer}>
                  <Text style={styles.txtColor}>Already a member! Sign-in</Text>
                </TouchableOpacity>
              </View>
              {/* end */}
            </View>
          </ImageBackground>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  bgcontainer: {
    height: '100%',
    width: '100%',
  },
  bgimg: {
    backgroundColor: 'rgba(111, 74, 142, 0.6)',
    width: '100%',
    height: '100%',
  },
  containers: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomcontainers: {
    // backgroundColor: 'green',
    width: '100%',
    height: h('90%'),
    // justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: h('6%'),
    fontWeight: 'bold',
  },

  welcometxt: {
    color: 'white',
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
  cover: {
    backgroundColor: 'white',
    width: '95%',
    height: h('65%'),
    marginTop: h('5%'),

    alignItems: 'center',
  },
  txtContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: '50%',
    height: h('6%'),
    marginTop: h('1%'),
  },
  txtColor: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: h('2%'),
  },
  txtinputContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: '75%',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: h('2%'),
  },
  lowerContainer: {
    // backgroundColor: 'green',
    width: '100%',
    height: '40%',
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: h('1%'),
  },

  txt: {
    color: 'rgba(111, 74, 142, 1)',
  },
});
