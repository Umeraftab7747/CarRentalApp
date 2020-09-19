/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';

// Components
import {Appbtn, Apptxt, Navheader, Appsearch} from '../../components';

export class DrawerScreen extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <ImageBackground
          style={styles.bgimg}
          source={require('../../assets/bgimg.jpg')}>
          <View style={styles.UpperView}>
            <View style={styles.img}></View>
            <Text style={styles.name}>Umer aftab</Text>
            <Text style={styles.email}>Umeraftab22@gmail.com</Text>
          </View>
        </ImageBackground>
        {/* 1 */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Dashboard');
          }}
          style={styles.btncontainer}>
          <View style={styles.btnright}>
            <Icon
              name={'home-outline'}
              size={30}
              type="ionicon"
              color="#0007"
            />
          </View>
          <View style={styles.btnleft}>
            <Text style={styles.txt}>Home</Text>
          </View>
        </TouchableOpacity>

        {/* 2 */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Myrides');
          }}
          style={styles.btncontainer}>
          <View style={styles.btnright}>
            <Icon
              name={'car-sport-outline'}
              size={30}
              type="ionicon"
              color="#0007"
            />
          </View>
          <View style={styles.btnleft}>
            <Text style={styles.txt}>My Rides</Text>
          </View>
        </TouchableOpacity>
        {/* 3 */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ProfileScreen');
          }}
          style={styles.btncontainer}>
          <View style={styles.btnright}>
            <Icon
              name={'person-outline'}
              size={30}
              type="ionicon"
              color="#0007"
            />
          </View>
          <View style={styles.btnleft}>
            <Text style={styles.txt}>Profile</Text>
          </View>
        </TouchableOpacity>
        {/* 4 */}
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('SettingScreen');
          }}
          style={styles.btncontainer}>
          <View style={styles.btnright}>
            <Icon
              name={'settings-outline'}
              size={30}
              type="ionicon"
              color="#0007"
            />
          </View>
          <View style={styles.btnleft}>
            <Text style={styles.txt}>Settings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btncontainer}>
          <View style={styles.btnright}>
            <Icon
              name={'close-circle-outline'}
              size={30}
              type="ionicon"
              color="#0007"
            />
          </View>
          <View style={styles.btnleft}>
            <Text style={styles.txt}>Logout</Text>
          </View>
        </TouchableOpacity>
        {/* end */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  UpperView: {
    backgroundColor: 'rgba(111, 74, 142, 0.6)',
    width: '100%',
    height: h('30%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    backgroundColor: 'white',
    width: '30%',
    height: '40%',
    borderRadius: h('100%'),
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: h('2.5%'),
    marginTop: h('1%'),
  },
  email: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: h('2%'),
    // marginTop: h('0.6%'),
  },
  bgimg: {
    width: '100%',
    height: h('30%'),
  },
  btncontainer: {
    backgroundColor: '#fff1',
    width: '100%',
    height: h('13%'),

    flexDirection: 'row',
    // borderBottomColor: '#0007',
    // borderBottomWidth: h('0.1%'),
    // borderTopColor: '#0007',
    // borderTopWidth: h('0.1%'),
  },
  btnright: {
    // backgroundColor: 'red',
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnleft: {
    // backgroundColor: 'green',
    width: '75%',
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  txt: {
    fontSize: h('2.5%'),
    fontWeight: 'bold',
    // marginTop: h('0.6%'),
    color: '#0007',
  },
});
