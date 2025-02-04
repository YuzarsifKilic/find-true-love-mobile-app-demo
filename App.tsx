import React from 'react';
import {SafeAreaView} from 'react-native';
import Match from './screens/Match/Match';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: '#E5E7EB'}}>
      <Match />
    </SafeAreaView>
  );
}

export default App;
