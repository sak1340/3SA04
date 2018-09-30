import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class Forecast extends React.Component {
    render() {
        return (
        <View>
            <Text style={styles.main}>{this.props.main}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
            <Text style={styles.temp}>{this.props.temp}<Text style={styles.c}>°C</Text></Text> 
            
        </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        color: 'white',
        fontSize: 36,
        textAlign:'center',
        paddingTop: 20,
      },
    description: {
        color: 'white',
        fontSize: 24,
        textAlign:'center',
        paddingTop: 20,
      },
    temp: {
        color: 'white',
        fontSize: 36,
        textAlign:'center',
        paddingTop: 20,
      },
      c: {
        color: 'white',
        fontSize: 20,
        textAlign:'center',
        paddingTop: 20,
        paddingBottom :200,
      },
 });