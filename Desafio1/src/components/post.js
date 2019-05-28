import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: 300,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    fontFamily: 'Helvetica, sans-serif',
    marginTop: 10,
  },
  hr: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#777',
    height: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Helvetica, sans-serif',
  },
  author: {
    fontSize: 12,
    color: '#777',
    fontFamily: 'Helvetica, sans-serif',
  },
  text: {
    fontSize: 12,
    color: '#777',
    fontFamily: 'Helvetica, sans-serif',
  },
});

const Post = props => (
  <View style={style.container}>
    <Text style={style.title}>{props.title}</Text>
    <Text style={style.author}>{props.author}</Text>
    <View style={style.hr} />
    <Text style={style.text}>{props.text}</Text>
  </View>
);

export default Post;
