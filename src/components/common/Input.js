/* @flow */

import * as React from "react";
import { TextInput, View, Text } from "react-native";

type Props = {
  label: String,
  value: String,
  onChangeText: () => void,
  placeholder: String,
  secureTextEntry: boolean
};

const Input = ({
  label,
  onChangeText,
  value,
  placeholder,
  secureTextEntry
}: Props) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    lineHeight: 23,
    fontSize: 18,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};

export { Input };
