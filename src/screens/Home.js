import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Home = props => {
  return (
    <View style={styles.view}>
      <Text style={{fontSize: 24}}>Home Screen</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate('Login')}>
        <Text style={{color: '#fff'}}>Go To Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate('Camera')}>
        <Text style={{color: '#fff'}}>Open Camera</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '40%',
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: '#333',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
