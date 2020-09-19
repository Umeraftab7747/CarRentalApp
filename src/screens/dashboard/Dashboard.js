/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

// nativebase
import {
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Icon,
} from 'native-base';

// Components
import {Appbtn, Apptxt, Navheader, Appsearch} from '../../components';

export class Dashboard extends Component {
  state = {
    card: [
      {
        text: 'Maserdez',
        name: 'Maserdez v2',
        image: require('../../assets/rent2.jpg'),
      },
      {
        text: 'Yamha',
        name: 'v921',
        image: require('../../assets/bike2.jpg'),
      },
      {
        text: 'Poarchse',
        name: 'Poarchse x9a',
        image: require('../../assets/rent3.jpg'),
      },
      {
        text: 'BMW',
        name: 'Bmw m20',
        image: require('../../assets/bgcover.jpg'),
      },
      {
        text: 'Honda',
        name: 'Vm21',
        image: require('../../assets/bike1.jpg'),
      },
    ],
  };

  renderItemCard = (item) => (
    <Card
      style={{
        elevation: h('4%'),
        height: h('30%'),
        width: w('90%'),
        marginLeft: h('4%'),
        marginTop: h('2%'),
      }}>
      <CardItem>
        <Left>
          <Thumbnail source={item.image} />
          <Body>
            <Text>{item.text}</Text>
            <Text note>NativeBase</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image style={{height: h('30%'), flex: 1}} source={item.image} />
      </CardItem>
      <CardItem>
        <Icon name="heart" style={{color: '#ED4A6A'}} />
        <Text>{item.name}</Text>
      </CardItem>
    </Card>
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
            <Appsearch />
          </View>
        </ImageBackground>
        {/* lower */}
        <View style={styles.lowerContainer}>
          <Text style={styles.txt}>Choose your car</Text>
          <DeckSwiper
            dataSource={this.state.card}
            renderItem={(item) => this.renderItemCard(item)}
          />
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
});
