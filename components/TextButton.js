import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, INTER } from "../constants";

export default function TextButton({ containerStyle, onPress, label }) {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 3,
        paddingHorizontal: 18,
        borderRadius: 15,
        backgroundColor: COLORS.gray1,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text style={{ color: COLORS.white, ...INTER.buttonS }}>{label}</Text>
    </TouchableOpacity>
  );
}
