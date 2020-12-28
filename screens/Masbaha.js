import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import { globalStyles } from "../assets/styles/globalStyles";
import { AntDesign } from '@expo/vector-icons'; 
import { set } from "react-native-reanimated";

export default function Masbaha() {
  const [one, setOne] = useState(0);
  const handle1 = () => {
    setOne(one + 1);
  };
  const [two, setTwo] = useState(0);
  const handle2 = () => {
    setTwo(two + 1);
  };

  const [three, setThree] = useState(0);
  const handle3 = () => {
    setThree(three + 1);
  };
  const [four, setFour] = useState(0);
  const handle4 = () => {
    setFour(four + 1);
  };

  const reset = () => {
    setOne(0)
    setTwo(0)
    setThree(0)
    setFour(0)
  }
  return (
    <ImageBackground source={require("../assets/img/a.jpg")} style={globalStyles.container}>
      <Text style={style.title}>
        أَلا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
      </Text>
      <View>
        <AntDesign
         name="reload1"
          size={24}
          color="crimson"
          style={style.reset}
          onPress={reset} />
      </View>
      <View style={style.panel}>
        <Text style={style.counter}>{one}</Text>
        <Button title="سبحان الله" onPress={handle1} />
      </View>
      <View style={style.panel}>
        <Text style={style.counter}>{two}</Text>
        <Button title="الحمد لله" onPress={handle2} />
      </View>
      <View style={style.panel}>
        <Text style={style.counter}>{three}</Text>
        <Button title="لا اله الا الله" onPress={handle3} />
      </View>
      <View style={style.panel}>
        <Text style={style.counter}>{four}</Text>
        <Button title=" الله أكبر" onPress={handle4} />
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  title: {
    textAlign: "center",
    backgroundColor: "#DDD",
    padding: 10,
    fontSize: 20,
    marginBottom: 100,
    fontFamily: 'Amiri'
  },
  counter: {
    backgroundColor: "#a4a4a4",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
  },
  panel: {
    margin: 10
  },
  reset: {
    textAlign: "right",
    padding: 10,
    fontSize: 25
  }
});
