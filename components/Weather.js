import React from 'react';
import Forecast from './Forecast'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
export default class weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: {
        main: '-', description: '-', temp: 0
      }
    }
  }
  fetchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=7280756e2c689a64c9de2d525b9792bf`)
      .then((response) => response.json())
      .then((json) => {
        this.setState(
          {
            Forecast: {
              main: json.weather[0].main,
              description: json.weather[0].description,
              temp: json.main.temp
            }
          })
      })
      .catch((error) => {
        console.warn(error)
      })
  }
  componentDidUpdate = (prevProps) => {
    if (prevProps.zipCode !== this.props.zipCode) {
      this.fetchData()
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./bgg.jpeg')} style={styles.backdrop}>
          <Text style={styles.zipCode}>Zip code is {this.props.zipCode}.</Text>
          <Forecast {...this.state.forecast} />
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { paddingTop: 25 },
  backdrop: { width: '100%', height: '100%' },
  zipCode: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
    paddingTop: 20,
  }
});