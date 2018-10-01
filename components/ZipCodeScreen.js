import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight,ImageBackground } from 'react-native';

const availableZipItems = [
  { place: 'Hatyai', code: '90110' },
  { place: 'Trang', code: '92000' },
  { place: 'Chiangmai', code: '50000' },
  { place: 'Khonkaen', code: '40000' },
  { place: 'Chonburi', code: '20000' }
]

const ZipItem = ({ place, code, navigate }) => (
  <TouchableHighlight onPress={() => navigate('Weather', { zipCode: code })}>

    <View style={styles.zipItem}>
      <Text style={styles.zipPlace}>{place}</Text>
      <Text style={styles.zipCode}>{code}</Text>
    </View>



  </TouchableHighlight>)



const _keyExtractor = item => item.code

export default class WeatherScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (<Text style={styles.zipHead}>Choose a zip code</Text>),
    }
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{
      }}><ImageBackground source={require('./sea.jpg')} style={styles.backdrop}>
        <FlatList
          data={availableZipItems}
          keyExtractor={_keyExtractor}
          renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
        /> </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backdrop: { width: '100%', height: '100%'},
  zipHead: {
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    fontWeight: 'bold',

  },
  zipItem: {

    flexDirection: 'row',
    margin: 20,

  },
  zipPlace: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'normal',
  },
  zipCode: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'normal',
  }
  
}); 