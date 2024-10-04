import React from 'react';
import { View, Text, Button } from 'react-native';

const OtherScreen = ({ navigation }:any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'black' }}>
      <Text>This is the Other Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default OtherScreen;
