import React, { useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/slices/apiSlice';
import { RootState, AppDispatch } from '../redux/store'; 
const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch<AppDispatch>(); 
  
 
  const { posts, loading, error } = useSelector((state: RootState) => state.api);

  useEffect(() => {
    dispatch(fetchPosts());  
  }, [dispatch]);

  return (
    <View style={{ flex: 1, padding: 20,backgroundColor: 'black' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Posts</Text>
      {loading ? (
        <ActivityIndicator size="large" color="skyblue" />
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      )}

      <Button title="Go to Other Screen" onPress={() => navigation.navigate('Other')} />
    </View>
  );
};

export default HomeScreen;
