import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { COLORS, INTER, SIZES } from "../constants";

export default function iconTextButton({
  label,
  icon,
  containerStyle,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 20, height: 20 }}
      />
      <Text
        style={{
          marginLeft: SIZES.base,
          ...INTER.buttonL,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
