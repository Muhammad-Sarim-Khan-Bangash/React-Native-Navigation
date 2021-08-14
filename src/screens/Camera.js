import React from 'react';
import {StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Camera = () => {
  return (
    <RNCamera style={styles.preview} type={RNCamera.Constants.Type.back} />
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Camera;
