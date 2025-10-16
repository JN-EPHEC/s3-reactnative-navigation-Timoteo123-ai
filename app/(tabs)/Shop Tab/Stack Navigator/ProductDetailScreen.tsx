import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type Product = { name: string; description: string };
type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};

type Props = {
  route: RouteProp<ShopStackParamList, 'ProductDetail'>;
};

export default function ProductDetailScreen({ route }: Props) {
  const { product } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{product.name}</Text>
      <Text style={{ marginTop: 10, fontSize: 16 }}>{product.description}</Text>
    </View>
  );
}