import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
            <TextInput
                style={styles.origin}
                placeholder="Origin"
                onChangeText={(text) => this.setState({text})}
            />
            <MapView style={styles.map}
                region={{
                    latitude: 40.730610,
                    longitude: -73.935242,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
            >
            </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      justifyContent: 'flex-end',
      alignItems: 'center'
  },
  origin: {
      position: 'absolute',
      width: '90%',
      height: 50,
      backgroundColor: '#EEEEEE',
      zIndex: 10,
      top: 30,
      paddingLeft: 20,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#000',
  },
  map: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 1
  }
});
