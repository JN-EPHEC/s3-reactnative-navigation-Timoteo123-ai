import "react-native-reanimated";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostListScreen from "./screens/PostListScreen";
import PostDetailScreen from "./screens/PostDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Shop, MyCart } from "./(tabs)/Home";

export type RootStackParamList = {
  PostList: undefined;
  PostDetail: { postId: string; title: string; content: string };
};

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (<>
    {/* <Stack.Navigator>
      <Stack.Screen name="PostList" component={PostListScreen} />
    <Stack.Screen name="PostDetail" component={PostDetailScreen} />
    
    </Stack.Navigator> */}
       <Tab.Navigator>
                <Tab.Screen name="Shop" component={Shop} />
                <Tab.Screen name="My Cart" component={MyCart} />
            </Tab.Navigator>
    </>);
    
}



