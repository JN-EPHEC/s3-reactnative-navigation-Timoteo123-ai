import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>My Profile</Text>
      <Text style={{ marginTop: 10 }}>Name: Jane Doe</Text>
      <Text>Email: jane.doe@example.com</Text>
    </View>
  );
}