/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from '@codler/react-native-keyboard-aware-scroll-view';
// Components
import {Appbtn, Apptxt, Navheader} from '../../components';

export class Signin extends Component {
  state = {
    modalVisible: false,
  };
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
                <Text style={styles.welcometxt}>Sign in to</Text>
                <Text style={styles.logo}>RENT & GO</Text>
              </View>

              {/* bottom */}
              <View style={styles.bottomcontainers}>
                {/* singin */}
                <View style={styles.cover}>
                  <View style={styles.txtinputContainer}>
                    <Apptxt
                      iconname={'person-circle-outline'}
                      placeholder={'EMAIL'}
                    />
                    <Apptxt
                      iconname={'lock-closed-outline'}
                      placeholder={'Password'}
                    />
                  </View>
                  <View style={styles.lowerContainer}>
                    <Appbtn
                      txt={'Singin'}
                      onPress={() => {
                        this.props.navigation.replace('DrawerNavigator');
                      }}
                    />
                    <View style={styles.TxtContainers}>
                      {/* Create account */}
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate('SignupApp');
                        }}
                        style={styles.txtbtn}>
                        <Text style={styles.txt}>Create Account</Text>
                      </TouchableOpacity>
                      {/* Forgot Password */}
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({modalVisible: true});
                        }}
                        style={styles.txtbtn}>
                        <Text style={styles.txt}>Forgot Password</Text>
                      </TouchableOpacity>
                      {/* end */}
                    </View>
                  </View>
                </View>
                {/* Continue */}
                <TouchableOpacity style={styles.txtContainer}>
                  <Text style={styles.txtColor}>Continue without! Sign in</Text>
                </TouchableOpacity>
              </View>
              {/* modal */}

              <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  this.setState({
                    modalVisible: false,
                  });
                }}>
                <View style={styles.modalview}>
                  <View style={styles.forgotPass}>
                    <View style={styles.modalTextinput}>
                      <Text style={styles.modaltxt}>Password Rest</Text>
                      <Apptxt iconname={'mail-outline'} placeholder={'EMAIL'} />
                      <View style={styles.modalbtn}>
                        <Appbtn txt={'Reset Password'} />
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>

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
    height: h('20%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomcontainers: {
    // backgroundColor: 'green',
    width: '100%',
    height: h('70%'),
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
    height: h('40%'),
    marginTop: h('5%'),

    alignItems: 'center',
  },
  txtContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: '50%',
    height: h('6%'),
    marginTop: h('14%'),
  },
  txtColor: {
    color: 'white',
    // fontWeight: 'bold',
    fontSize: h('2%'),
  },
  txtinputContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer: {
    // backgroundColor: 'green',
    width: '100%',
    height: '40%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  TxtContainers: {
    // backgroundColor: 'red',
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  txtbtn: {
    // backgroundColor: 'green',
    width: '30%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'rgba(111, 74, 142, 1)',
  },
  modalview: {
    backgroundColor: '#0008',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPass: {
    backgroundColor: 'white',
    width: '100%',
    height: h('30%'),
    borderRadius: h('2%'),
  },
  modalTextinput: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: h('2%'),
  },
  modaltxt: {
    color: 'rgba(111, 74, 142, 1)',
    fontSize: h('4%'),
    fontWeight: 'bold',
  },
  modalbtn: {
    marginTop: h('3%'),
  },
});
