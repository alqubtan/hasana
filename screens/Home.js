import React from "react";
import { View, Button, StyleSheet, ImageBackground } from "react-native";
import { globalStyles } from "../assets/styles/globalStyles";
import FlatButton from '../shared/button'

export default function Home({ navigation }) {
  const handlePress = () => navigation.navigate("Masbaha");
  const handlePressTwo = () => {
    navigation.navigate("Athkar");
  };
  return (
      <ImageBackground source={require('../assets/img/a.jpg')} style={globalStyles.container}>
        <View style={style.wrapper}>
          <FlatButton title="المسبحة اﻷلكترونية" onPress ={handlePress}/>
          <FlatButton title="أذكار الصباح والمساء" onPress={handlePressTwo} />
        </View>
      </ImageBackground>
  );
}

const style = StyleSheet.create({
  wrapper: {
    flex: 0.5,
    justifyContent: "space-around",
    padding: 40,
    marginTop: 200
  },
});
