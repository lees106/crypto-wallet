import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, icons, INTER, POPPINS, SIZES } from "../constants";

export default function BalanceInfo({
  title,
  displayAmount,
  changePct,
  containerStyle,
}) {
  return (
    <View style={{ ...containerStyle }}>
      {/* Title */}
      <Text style={{ ...INTER.buttonS, color: COLORS.lightGray3 }}>
        {title}
      </Text>
      {/* Figures */}
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        <Text style={{ ...INTER.buttonS, color: COLORS.lightGray3 }}>$</Text>
        <Text
          style={{
            marginLeft: SIZES.base,
            ...INTER.buttonS,
            color: COLORS.white,
          }}
        >
          {displayAmount.toLocaleString()}
        </Text>
        <Text
          style={{
            marginLeft: SIZES.base,
            ...INTER.buttonS,
            color: COLORS.lightGray3,
          }}
        >
          USD
        </Text>
      </View>

      {/* Change Percentage */}
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
        {changePct != 0 && (
          <Image
            source={icons.upArrow}
            style={{
              width: 10,
              height: 10,
              alignSelf: "center",
              tintColor: changePct > 0 ? COLORS.lightGreen : COLORS.red,
              transform:
                changePct > 0 ? [{ rotate: "45deg" }] : [{ rotate: "125deg" }],
            }}
          />
        )}

        <Text
          style={{
            marginLeft: SIZES.base,
            alignSelf: "flex-end",
            color:
              changePct == 0
                ? COLORS.lightGray3
                : changePct > 0
                ? COLORS.lightGreen
                : COLORS.red,
            ...INTER.buttonS,
          }}
        >
          {changePct.toFixed(2)}%
        </Text>
        <Text
          style={{
            marginLeft: SIZES.radius,
            alignSelf: "flex-end",
            color: COLORS.lightGray3,
            ...INTER.buttonS,
          }}
        >
          7d Change
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
