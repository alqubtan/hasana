import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './stacks/homeStack';
export default function App() {
  const getFont = () => {
    return Font.loadAsync({
      Amiri: require('./assets/fonts/Amiri-Regular.ttf'),
    });
  };

  const [fontIsLoad, setFontIsLoad] = useState(false);
  if (fontIsLoad) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontIsLoad(true)} />
    );
  }
}
