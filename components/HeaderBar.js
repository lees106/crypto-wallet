import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS, INTER, POPPINS, SIZES } from "../constants";

export default function HeaderBar({ title }) {
  return (
    <View
      style={{
        height: 100,
        paddingHorizontal: SIZES.radius,
        justifyContent: "flex-end",
      }}
    >
      <Text style={{ color: COLORS.white, ...POPPINS.h4 }}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
