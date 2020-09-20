/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Modal} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {Icon} from 'react-native-elements';
// Components
import {Appbtn, NavHeader2} from '../../components';
import {set} from 'react-native-reanimated';

export class OrderScreen extends Component {
  state = {
    data: [],
    model: false,
  };

  componentDidMount = () => {
    const values = this.props.route.params.value;
    this.setState({data: values});
  };

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader2
          text={'BOOK NOW'}
          leftic={'chevron-back-outline'}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={styles.containersView}>
          <View style={styles.dataContainer}>
            {/* rightContainer */}
            <View style={styles.right}>
              <View style={styles.upperRight}>
                <Text style={styles.name}>{this.state.data.name}</Text>
                <Text style={styles.text}>{this.state.data.text}</Text>
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
              <Image
                source={this.state.data.image}
                style={styles.images}
                // resizeMethod={'center'}
              />
            </View>
          </View>
          {/* lower half */}
          <View style={styles.lowerContainer}>
            <View style={styles.chargebox}>
              <View style={styles.box}>
                <Text style={styles.txt1}>TOTAL CHARGES ARE</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.txt2}>{this.state.data.text}</Text>
              </View>
            </View>
            {/* btn */}
            <View style={{marginTop: h('5%')}}>
              <Appbtn
                txt={'ORDER NOW'}
                onPress={() => {
                  this.setState({model: true});
                }}
              />
            </View>
          </View>
        </View>

        {/* modal */}

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.model}
          onRequestClose={() => {
            this.setState({modal: false});
          }}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContainerView}>
              <Image
                source={require('../../assets/tick.png')}
                style={styles.ModalimgContainer}
              />
              <Text style={styles.modaltxt}>Your Order has Been Placed!</Text>
              <View style={styles.modalbtn}>
                <Appbtn
                  txt={'Ok'}
                  onPress={() => {
                    this.setState({modal: false});
                    this.props.navigation.navigate('DrawerNavigator');
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
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
    backgroundColor: '#0009',
    width: '50%',
    height: '100%',
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
    paddingLeft: h('2%'),
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
  images: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    backgroundColor: '#0008',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainerView: {
    backgroundColor: 'white',
    width: '100%',
    height: h('40%'),
    alignItems: 'center',
    borderRadius: h('5%'),
  },
  ModalimgContainer: {
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    marginTop: h('3%'),
  },
  modaltxt: {
    color: 'rgba(111, 74, 142, 1)',
    fontSize: h('3%'),
    fontWeight: 'bold',
    marginTop: h('3%'),
  },
  modalbtn: {
    // marginTop: h('1%'),
  },
});
