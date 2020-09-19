/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
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

          <View style={styles.lowerContainerView}>
            {/* container 1 */}
            <View style={styles.flatContainer}>
              <View style={styles.rightContainer}>
                <Icon
                  name={'call-outline'}
                  size={35}
                  type="ionicon"
                  color="#0009"
                />
              </View>
              <View style={styles.middleContainer}>
                <Text style={styles.mtxt}>Mobile No</Text>
                <Text style={styles.mtxt2}>03030303030</Text>
              </View>
              <TouchableOpacity style={styles.leftContainer}>
                <Icon
                  name={'cog-outline'}
                  size={35}
                  type="ionicon"
                  color="#0009"
                />
              </TouchableOpacity>
            </View>
            {/* container 2 */}
            <View style={styles.flatContainer}>
              <View style={styles.rightContainer}>
                <Icon
                  name={'mail-outline'}
                  size={35}
                  type="ionicon"
                  color="#0009"
                />
              </View>
              <View style={styles.middleContainer}>
                <Text style={styles.mtxt}>Email Address</Text>
                <Text style={styles.mtxt2}>xyz@gmail.com</Text>
              </View>
              <TouchableOpacity style={styles.leftContainer}>
                <Icon
                  name={'cog-outline'}
                  size={35}
                  type="ionicon"
                  color="#0009"
                />
              </TouchableOpacity>
            </View>
            {/* container3 */}
            <View style={styles.flatContainer}>
              <View style={styles.rightContainer}>
                <Icon
                  name={'home-outline'}
                  size={35}
                  type="ionicon"
                  color="#0009"
                />
              </View>
              <View style={styles.middleContainer}>
                <Text style={styles.mtxt}>Home Address</Text>
                <Text style={styles.mtxt2}>Lahore,gulberg House 3/2</Text>
              </View>
              <TouchableOpacity style={styles.leftContainer}>
                <Icon
                  name={'cog-outline'}
                  size={35}
                  type="ionicon"
                  color="#0009"
                />
              </TouchableOpacity>
            </View>
            {/* endcontainers */}
          </View>
          {/* end */}
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
    // backgroundColor: 'gold',
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
  lowerContainerView: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('50%'),
    alignItems: 'center',
    paddingTop: h('4%'),
  },
  flatContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: h('12%'),
    flexDirection: 'row',
  },
  rightContainer: {
    // backgroundColor: 'yellow',
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    // backgroundColor: 'green',
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: h('1%'),
  },
  leftContainer: {
    // backgroundColor: 'dodgerblue',
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mtxt: {
    color: '#0007',
    fontSize: h('2%'),
    fontWeight: 'bold',
  },
  mtxt2: {
    color: 'rgba(111, 74, 142, 0.8)',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
});
