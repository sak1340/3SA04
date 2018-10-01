import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Forecast extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.main}>{this.props.main}</Text>
        <Text style={styles.description}>{this.props.description}</Text>
        <Text style={styles.temp}>{this.props.temp}<Text style={styles.c}>°C</Text></Text>
        <Text style={styles.name}>Sakkarin Bunsob 5935512017</Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    fontStyle:'italic',
    color: 'red',
    fontSize: 36,
    textAlign: 'center',
    paddingTop: 20,
  },
  description: {
    fontStyle:'italic',
    color: 'red',
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
  },
  temp: {
    color: 'red',
    fontSize: 36,
    textAlign: 'center',
    paddingTop: 20,
  },
  c: {
    fontStyle:'italic',
    color: 'red',
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
  },
  name: {
    fontStyle:'italic',
    color: 'gray',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 20,
  },



});  