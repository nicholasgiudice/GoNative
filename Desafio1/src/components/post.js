import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

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

const Post = ({ data }) => (
  <View style={style.container}>
    <Text style={style.title}>{data.title}</Text>
    <Text style={style.author}>{data.author}</Text>
    <View style={style.hr} />
    <Text style={style.text}>{data.text}</Text>
  </View>
);

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
