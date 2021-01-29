/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.msg}>
      <Text style={{fontSize: 18}}>
        {' '}
        don't dare to write any code here just put your own custom component in app.js
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  msg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
