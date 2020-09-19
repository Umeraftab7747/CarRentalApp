/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

// animation libary
import {AnimatedFlatList, AnimationType} from 'flatlist-intro-animations';

// nativebase
import {DeckSwiper, Card, CardItem} from 'native-base';

// Components
import {Appbtn, Apptxt, Navheader, Appsearch} from '../../components';

export class Dashboard extends Component {
  state = {
    card: [
      {
        text: '12.5$',
        name: 'Maserdez v2',
        image: require('../../assets/rent2.jpg'),
      },
      {
        text: '12.5$',
        name: 'Yahmaha v921',
        image: require('../../assets/bike2.jpg'),
      },
      {
        text: '12.5$',
        name: 'Poarchse x9a',
        image: require('../../assets/rent3.jpg'),
      },
      {
        text: '12.5$',
        name: 'Bmw m20',
        image: require('../../assets/bgcover.jpg'),
      },
      {
        text: '12.5$',
        name: 'Honda Vm21',
        image: require('../../assets/bike1.jpg'),
      },
    ],
    search: '',
  };

  renderItemCard = (item) => (
    <Card
      style={{
        elevation: h('4%'),
        height: h('50%'),
        width: w('90%'),
        marginLeft: h('4%'),
        marginTop: h('2%'),
        backgroundColor: 'red',
      }}>
      <CardItem cardBody>
        <Image style={{height: h('35%'), flex: 1}} source={item.image} />
      </CardItem>
      <CardItem
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: h('5%'),
        }}>
        <Text style={{color: '#000', fontSize: h('3%'), fontWeight: 'bold'}}>
          {item.name}
        </Text>
      </CardItem>
      <CardItem
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: h('3%'),
        }}>
        <Text style={{color: '#0007', fontSize: h('2.5%')}}>
          Rent:{item.text}/hour
        </Text>
      </CardItem>
      <CardItem
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: h('3%'),
        }}>
        <Text style={{color: '#0007', fontSize: h('2.5%')}}>Stars</Text>
      </CardItem>
      <CardItem
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: h('9%'),
        }}>
        <Appbtn txt={'BOOK'} />
      </CardItem>
    </Card>
  );

  // flatlist
  Flatitem = (item) => (
    <View style={styles.FlatlistContianer}>
      <View style={styles.itemlistView}>
        <View style={styles.left}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.text}>{item.text}</Text>
          <Text style={styles.Star}>Stars {item.Star}</Text>
        </View>

        <View style={styles.right}>
          <Image source={item.image} style={styles.FlatlistimgContainers} />
        </View>
      </View>
      <View
        style={{
          // marginTop: h('1%'),
          // backgroundColor: 'red',
          width: '100%',
          height: h('1.5%'),
        }}
      />
    </View>
  );

  render() {
    return (
      <View style={styles.Container}>
        {/* upper */}
        <ImageBackground
          source={require('../../assets/bgcover.jpg')}
          style={styles.bgContainer}>
          <View style={styles.bgcoverColor}>
            <Navheader leftic={'reorder-three-outline'} />
            <Appsearch
              onChangeText={(search) => {
                this.setState({search});
              }}
            />
          </View>
        </ImageBackground>
        {/* lower */}
        <View style={styles.lowerContainer}>
          {/* decker */}

          {this.state.search === '' ? (
            <>
              <Text style={styles.txt}>Choose your car</Text>
              <DeckSwiper
                dataSource={this.state.card}
                renderItem={(item) => this.renderItemCard(item)}
              />
            </>
          ) : (
            <AnimatedFlatList
              data={this.state.card}
              renderItem={({item}) => this.Flatitem(item)}
              animationType={AnimationType.Dive}
              animationDuration={1000}
            />
          )}

          {/* end */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#e2e2e2',
  },
  bgContainer: {
    width: '100%',
    height: h('30%'),
    resizeMode: 'cover',
  },
  bgcoverColor: {
    backgroundColor: 'rgba(111, 74, 142, 0.5)',
    width: '100%',
    height: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('68%'),
    // alignItems: 'center',
  },
  txt: {
    fontWeight: 'bold',
    fontSize: h('3%'),
    marginLeft: h('20%'),
    marginTop: h('1%'),
  },
  itemlistView: {
    backgroundColor: 'white',
    width: '90%',
    height: h('15%'),
    margin: h('1%'),
    flexDirection: 'row',
    elevation: h('1%'),
  },
  FlatlistContianer: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    // backgroundColor: 'tomato',
    width: '70%',
    height: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: h('3%'),
  },
  right: {
    // backgroundColor: 'red',
    width: '30%',
  },
  name: {
    color: 'black',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  text: {
    color: '#0006',
    fontSize: h('2%'),
  },
  FlatlistimgContainers: {
    width: '100%',
    height: '100%',
  },
});
