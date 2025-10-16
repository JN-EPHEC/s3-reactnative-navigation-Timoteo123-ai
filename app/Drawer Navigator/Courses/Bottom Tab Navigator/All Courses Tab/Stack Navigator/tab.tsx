import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="CourseListScreen"
        options={{ title: 'Courses' }}
      />
      <Stack.Screen
        name="CourseDetailScreen"
        options={{ title: 'Course Details' }}
      />
    </Stack>
  );
}