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
import {Appbtn, Apptxt, NavHeader2} from '../../components';
import {AnimatedFlatList, AnimationType} from 'flatlist-intro-animations';

export class Myrides extends Component {
  state = {
    data: [
      {
        name: 'Maserdez v2',
        Price: '12.5$',
        star: '5',
        city: 'lahore',
        tavel: '40.9km',
        date: '17-Sep-2019',
      },
      {
        name: 'Honda mx2',
        Price: '32.5$',
        star: '2',
        city: 'Karchi',
        tavel: '19.3km',
        date: '11-Aug-2019',
      },
      {
        name: 'Yahama 125',
        Price: '11.5$',
        star: '4.5',
        city: 'Sargodha',
        tavel: '492.3km',
        date: '20-Aug-2019',
      },
      {
        name: 'BMW z192',
        Price: '41.5$',
        star: '4',
        city: 'Sargodha',
        tavel: '912.3km',
        date: '28-Jan-2020',
      },
    ],
  };

  Flatitem = (item) => (
    <View style={styles.FlatContainer}>
      <View style={styles.FlatContainerView}>
        <View style={styles.left}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.city}>{item.city}</Text>
          <Text style={styles.travel}>{item.tavel}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.city}>{item.Price}</Text>
          <Text style={styles.travel}>Star:{item.star}</Text>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.Container}>
        <NavHeader2
          text={'My Rides'}
          leftic={'reorder-three-outline'}
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <AnimatedFlatList
          data={this.state.data}
          renderItem={({item}) => this.Flatitem(item)}
          animationType={AnimationType.Dive}
          animationDuration={1000}
          keyExtractor={(item) => {
            item.name;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  FlatContainerView: {
    backgroundColor: 'white',
    width: '90%',
    height: h('15%'),
    marginTop: h('1%'),
    flexDirection: 'row',
  },
  FlatContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: h('2%'),
  },
  left: {
    // backgroundColor: 'red',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: h('4%'),
  },
  right: {
    // backgroundColor: 'green',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: h('4%'),
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: h('2.5%'),
  },
  city: {
    color: '#0007',
    fontSize: h('2.2%'),
  },
  travel: {
    color: '#0007',
    fontSize: h('2.2%'),
  },
  date: {
    color: '#0007',
    fontSize: h('2.2%'),
  },
});
