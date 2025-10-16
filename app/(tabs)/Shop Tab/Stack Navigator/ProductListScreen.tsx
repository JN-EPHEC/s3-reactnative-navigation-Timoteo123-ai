import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type Product = { name: string; description: string };
type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};

type Props = {
  navigation: StackNavigationProp<ShopStackParamList, 'ProductList'>;
};

export default function ProductListScreen({ navigation }: Props) {
  const products: Product[] = [
    { name: 'Laptop', description: 'Powerful and portable computer' },
    { name: 'Mouse', description: 'Wireless ergonomic mouse' },
    { name: 'Keyboard', description: 'Mechanical keyboard with backlight' },
  ];

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Product List</Text>
      {products.map((product) => (
        <Button
          key={product.name}
          title={product.name}
          onPress={() => navigation.navigate('ProductDetail', { product })}
        />
      ))}
    </View>
  );
}