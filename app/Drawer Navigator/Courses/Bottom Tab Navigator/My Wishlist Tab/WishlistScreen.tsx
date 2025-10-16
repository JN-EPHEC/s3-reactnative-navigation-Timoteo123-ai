import React from 'react';
import { View, Text } from 'react-native';

export default function WishlistScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18 }}>Your wishlist is empty.</Text>
    </View>
  );
}