import React from 'react';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="courses"
        options={{ title: 'All Courses' }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{ title: 'My Wishlist' }}
      />
      <Tabs.Screen
        name="../profile/ProfileScreen"
        options={{ title: 'My Profile' }}
      />
    </Tabs>
  );
}