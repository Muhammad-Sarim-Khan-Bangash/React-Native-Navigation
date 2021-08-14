import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Login = () => {
  return (
    <View style={styles.view}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: '700',
          color: '#fff',
          marginBottom: 10,
        }}>
        Login Screen
      </Text>
      <TextInput style={styles.input} placeholder="Enter Username" />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
      />
      <Text style={styles.forgetPassword}>Forgot Password?</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => alert('User Login Successfully!')}>
        <Text style={{color: '#000'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#192a56',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '62%',
    borderRadius: 2,
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: '60%',
    color: '#fff',
    fontSize: 16,
  },
  forgetPassword: {
    color: '#ccc',
    marginTop: 10,
    marginLeft: 110,
  },
});

export default Login;
