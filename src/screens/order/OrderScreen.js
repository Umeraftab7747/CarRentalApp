/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
// Components
import {Appbtn, NavHeader2} from '../../components';

export class OrderScreen extends Component {
  state = {
    data: [],
  };

  componentDidMount = () => {
    // this.setState({data:})
  };

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader2 text={'BOOK NOW'} leftic={'reorder-three-outline'} />
        <View style={styles.containersView}>
          <View style={styles.dataContainer}>
            {/* rightContainer */}
            <View style={styles.right}>
              <View style={styles.upperRight}>
                <Text style={styles.name}>Maserdiez</Text>
                <Text style={styles.text}>22.9$</Text>
                <Text style={styles.Star}>stars: 5</Text>
              </View>
              <View style={styles.lowerRight}>
                {/* line 1 */}
                <View style={styles.cardata}>
                  <Icon
                    name={'radio-button-on'}
                    size={25}
                    type="ionicon"
                    color="rgba(111, 74, 142, 1)"
                  />

                  <Text style={styles.txtline}>Free cancelation</Text>
                </View>
                {/* line2 */}
                <View style={styles.cardata}>
                  <Icon
                    name={'radio-button-on'}
                    size={25}
                    type="ionicon"
                    color="rgba(111, 74, 142, 1)"
                  />

                  <Text style={styles.txtline}>Unlimited Milage</Text>
                </View>
                {/* line3 */}
                <View style={styles.cardata}>
                  <Icon
                    name={'radio-button-on'}
                    size={25}
                    type="ionicon"
                    color="rgba(111, 74, 142, 1)"
                  />

                  <Text style={styles.txtline}>No charge until pickup</Text>
                </View>
                {/* line4 */}
                <View style={styles.cardata}>
                  <Icon
                    name={'radio-button-on'}
                    size={25}
                    type="ionicon"
                    color="rgba(111, 74, 142, 1)"
                  />

                  <Text style={styles.txtline}>50% off discount</Text>
                </View>
                {/* line5 */}
                <View style={styles.cardata}>
                  <Icon
                    name={'radio-button-on'}
                    size={25}
                    type="ionicon"
                    color="rgba(111, 74, 142, 1)"
                  />

                  <Text style={styles.txtline}>Service availble 24/7</Text>
                </View>
                {/* end */}
              </View>
            </View>
            {/* leftContainer */}
            <View style={styles.left}>
              <Text style={styles.name}>
                <Image source={this.state.data.Image} />
              </Text>
            </View>
          </View>
          {/* lower half */}
          <View style={styles.lowerContainer}>
            <View style={styles.chargebox}>
              <View style={styles.box}>
                <Text style={styles.txt1}>TOTAL CHARGES ARE</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.txt2}>22.4$</Text>
              </View>
            </View>
            {/* btn */}
            <View style={{marginTop: h('5%')}}>
              <Appbtn txt={'ORDER NOW'} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  containersView: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('90%'),
    alignItems: 'center',
  },
  dataContainer: {
    backgroundColor: 'white',
    width: w('95%'),
    height: h('40%'),
    marginTop: h('2%'),
    flexDirection: 'row',
    elevation: h('2%'),
  },
  name: {
    color: 'rgba(111, 74, 142, 1)',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  right: {
    // backgroundColor: 'red',
    width: '50%',
    height: '100%',
  },
  left: {
    backgroundColor: 'dodgerblue',
    width: '50%',
    height: '60%',
  },
  text: {
    color: '#0006',
    fontSize: h('2%'),
  },
  star: {},
  upperRight: {
    // backgroundColor: 'red',
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    paddingLeft: h('5%'),
  },
  lowerRight: {
    // backgroundColor: 'green',
    width: '100%',
    height: '70%',
    // paddingLeft: -h('1%'),
    // justifyContent: 'center',
    paddingTop: h('3%'),
  },
  cardata: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    marginLeft: h('1%'),
  },
  txtline: {
    fontSize: h('2%'),
    color: 'rgba(111, 74, 142, 1)',
  },
  lowerContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: '50%',
    marginTop: h('1%'),
    // justifyContent: 'center',
    alignItems: 'center',
  },
  chargebox: {
    backgroundColor: 'white',
    width: '80%',
    height: '30%',
    marginTop: h('2.5%'),
    flexDirection: 'row',
    borderRadius: h('1%'),
    elevation: 5,
  },
  box: {
    backgroundColor: 'white',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt1: {
    color: 'black',
    fontSize: h('2.2%'),
  },
  txt2: {
    color: 'rgba(111, 74, 142, 1)',
    fontSize: h('3%'),
  },
});
