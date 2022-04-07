/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';

function App() {
  return (
    <SafeAreaView>
      <View >
        
        <FlatList 
        data={news_data} 
        renderItem={({item}) => <NewsCard news={item} />}
        />        
      </View>
    </SafeAreaView>
  );
}



export default App;