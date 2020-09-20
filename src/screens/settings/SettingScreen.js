/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

// Components
import {Appbtn, Apptxt, NavHeader2} from '../../components';
import {Icon} from 'react-native-elements';

export class SettingScreen extends Component {
  state = {
    Switch: '',
    data: [
      {
        service: 'FingerPrint',
        icon: 'finger-print-outline',
        color: 'dodgerblue',
        setting: 'Enable',
      },
      {
        service: 'Notifcation',
        icon: 'notifications-outline',
        color: 'dodgerblue',
        setting: 'Disable',
      },
      {
        service: 'Email',
        icon: 'mail-outline',
        color: 'dodgerblue',
        setting: 'Enable',
      },
      {
        service: 'Password',
        icon: 'lock-closed-outline',
        color: 'dodgerblue',
        setting: '2fa',
      },
      {service: 'FAQ', icon: 'information-outline', color: 'dodgerblue'},
      {
        service: 'Legal Aggrement',
        icon: 'book-outline',
        color: 'dodgerblue',
      },
      {
        service: 'Logout',
        icon: 'log-out-outline',
        color: 'dodgerblue',
      },
    ],
  };
  renderItem = (item) => (
    <TouchableOpacity style={styles.flatlistConainer}>
      <View style={styles.right}>
        <Icon name={item.icon} size={30} type="ionicon" color={item.color} />
      </View>
      <View style={styles.middle}>
        <Text style={styles.Servicetxt}>{item.service}</Text>
      </View>
      <View style={styles.left}>
        <Text style={styles.settings}>{item.setting}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader2
          text={'Settings'}
          leftic={'reorder-three-outline'}
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.gtxt}>General Settings</Text>
        </View>
        <FlatList
          data={this.state.data}
          contentContainerStyle={{marginTop: h('1%')}}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={(item) => item.service}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  flatlistConainer: {
    backgroundColor: 'white',
    width: '100%',
    height: h('11.5%'),
    // margin: h('1%'),
    marginTop: h('0%'),
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    width: '100%',
    height: h('5%'),
    // backgroundColor: 'red',
    justifyContent: 'center',
    marginTop: h('1%'),
  },
  gtxt: {
    color: 'black',
    fontSize: h('2.5%'),
    fontWeight: 'bold',
    marginLeft: h('1%'),
  },
  right: {
    // backgroundColor: 'red',
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    // backgroundColor: 'green',
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: h('1%'),
  },
  left: {
    // backgroundColor: 'yellow',
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Servicetxt: {
    fontWeight: 'bold',
    fontSize: h('2.5%'),
    color: '#0006',
  },
  settings: {
    color: '#0004',
    fontSize: h('2%'),
  },
});
