import React from 'react';
import Forecast from './Forecast';
import background from './sea.jpg';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: 'main',
                description: 'description',
                temp: 0
            }
        }
    }
    componentDidMount = () => this.fetchData()
    componentDidUpdate = (prevProps) => {
        if (prevProps.zipCode !== this.props.zipCode) {
            this.fetchData()
        }
    }
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=7280756e2c689a64c9de2d525b9792bf`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                        forecast: {
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp
                        }
                    });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    render() {
        return (
            <View style={{
            }}>
                <ImageBackground source={background} style={styles.backdrop}>
                    <Text style={styles.white}>Zip code is {this.props.zipCode}.</Text>
                    <Forecast {...this.state.forecast} />
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { paddingTop: 100 },
    backdrop: {
        width: '100%',
        height: '100%'
    },
    white: {
        color: 'red',
        fontSize: 24,
        textAlign: 'center',
        paddingTop: 25,
    },



});
