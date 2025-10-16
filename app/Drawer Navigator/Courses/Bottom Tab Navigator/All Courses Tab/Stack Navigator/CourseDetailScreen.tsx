import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function CourseDetailScreen() {
  const { title, description } = useLocalSearchParams<{ title: string; description: string }>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>{description}</Text>
    </View>
  );
}