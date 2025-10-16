import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const courses = [
  { id: '1', title: 'Intro to React Native', description: 'Learn to build native apps.' },
  { id: '2', title: 'Advanced JavaScript', description: 'Deep dive into modern JS.' },
  { id: '3', title: 'UI/UX for Developers', description: 'Design better interfaces.' },
];

export default function CourseListScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>All Courses</Text>
      {courses.map((course) => (
        <View key={course.id} style={{ marginVertical: 8 }}>
          <Button
            title={course.title}
            onPress={() =>
              router.push({
                pathname: './CourseDetailScreen',
                params: { title: course.title, description: course.description },
              })
            }
          />
        </View>
      ))}
    </View>
  );
}