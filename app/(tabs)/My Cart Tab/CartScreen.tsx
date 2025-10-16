import { createStackNavigator } from '@react-navigation/stack';

type Product = { name: string; description: string };
export type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: { product: Product };
};

const Stack = createStackNavigator<ShopStackParamList>();