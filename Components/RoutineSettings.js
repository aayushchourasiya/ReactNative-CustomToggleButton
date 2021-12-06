import React, {useState} from 'react';
import { View , Text } from 'react-native';
import {Switch} from './Switch';

const RoutineSettings = props => {
  const [isOn, setIsOn] = useState(false);
  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);
  const [isOn3, setIsOn3] = useState(false);
  const [isOn4, setIsOn4] = useState(false);
  const [isOn5, setIsOn5] = useState(false);

  const valueChanged = index => {
    switch (index) {
      case 0:
        return setIsOn(!isOn);
      case 1:
        return setIsOn1(!isOn1);
      case 2:
        return setIsOn2(!isOn2);
      case 3:
        return setIsOn3(!isOn3);
      case 4:
        return setIsOn4(!isOn4);
      case 5:
        return setIsOn5(!isOn5);
    }
  };

  const getValues = index => {
    switch (index) {
      case 0:
        return isOn;
      case 1:
        return isOn1;
      case 2:
        return isOn2;
      case 3:
        return isOn3;
      case 4:
        return isOn4;
      case 5:
        return isOn5;
    }
  };
  
  var arr = [
    {name: 'One Alarm No Snooze'},
    {name: 'Drink 600 ml Water'},
    {name: 'Cold Shower'},
    {name: 'Meditation'},
    {name: 'Pray/Gratitude'},
    {name: 'Morning Journal'},
  ];
  return (
    <View style={{flex:1 , margin:20}}>
      {arr.map((item, index) => {
        return (
          <View key={index} style={{flexDirection:"row" , justifyContent:'space-between'}}>
            <Text style={{color:'black' , fontSize:25 , fontWeight:"600"}}>{item.name}</Text>
            <Switch
              value={getValues(index)}
              onValueChange={() => valueChanged(index)}
              backgroundInactive="#E0E0E0"
              backgroundActive="#1C592B"
              circleActiveColor="#04250C"
              circleInActiveColor="#04250C"
              activeText="ON"
              inActiveText="OFF"
              switchWidthMultiplier={2.5}
              barHeight={25}
            />
          </View>
        );
      })}
    </View>
  );
};

export default RoutineSettings;
