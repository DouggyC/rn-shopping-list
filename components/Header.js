import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

Header.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#ffffff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
