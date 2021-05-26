import moment from "moment";
import React from "react";

import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartXLabel,
  ChartYLabel,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";

import { StyleSheet, Text, View } from "react-native";
import { COLORS, INTER, SIZES } from "../constants";

export default function Chart({ containerStyle, chartPrice }) {
  //Points

  let startUnixTimestamp = moment().subtract(7, "day").unix();
  let data = chartPrice
    ? chartPrice?.map((item, index) => {
        return {
          x: startUnixTimestamp + (index + 1) * 3600,
          y: item,
        };
      })
    : [];

  let points = monotoneCubicInterpolation({ data, range: 40 });

  const formatUSD = (value) => {
    "worklet";

    if (value === "") {
      return "";
    }

    return `$${Number(value).toFixed(2)}`;
  };
  const formatDateTime = (value) => {
    "worklet";

    if (value === "") {
      return "";
    }

    var selectedDate = new Date(value * 1000);
    let date = `0${selectedDate.getDate()}`.slice(-2);
    let month = `0${selectedDate.getMonth() + 1}`.slice(-2);

    return `${month} / ${date}`;
  };
  const formatNumber = (value, roundingPoint) => {
    if (value > 1e9) {
      return `${(value / 1e9).toFixed(roundingPoint)}B`;
    } else if (value > 1e6) {
      return `${(value / 1e6).toFixed(roundingPoint)}M`;
    } else if (value > 1e3) {
      return `${(value / 1e3).toFixed(roundingPoint)}K`;
    } else {
      return value.toFixed(roundingPoint);
    }
  };
  const getYAxisLabel = () => {
    if (chartPrice != undefined) {
      let minValue = Math.min(...chartPrice);
      let maxValue = Math.max(...chartPrice);

      let midValue = (minValue + maxValue) / 2;

      let higherMidValue = (maxValue + midValue) / 2;
      let lowerMidValue = (minValue + midValue) / 2;

      let roundingPoint = 2;

      return [
        formatNumber(maxValue, roundingPoint),
        formatNumber(higherMidValue, roundingPoint),
        formatNumber(lowerMidValue, roundingPoint),
        formatNumber(minValue, roundingPoint),
      ];
    } else {
      return [];
    }
  };
  return (
    <View style={{ ...containerStyle }}>
      {/* Y Axis label */}
      <View
        style={{
          position: "absolute",
          left: SIZES.base,
          top: 0,
          bottom: 0,
          justifyContent: "space-between",
        }}
      >
        {/* GET Y AXIS LABEL */}
        {getYAxisLabel().map((item, index) => {
          return (
            <Text
              key={index}
              style={{
                color: COLORS.lightGray3,
                ...INTER.captionS,
              }}
            >
              {item}
            </Text>
          );
        })}
      </View>
      {/* Charts */}
      {data.length > 0 && (
        <ChartPathProvider
          data={{
            points,
            smoothingStrategy: "bezier",
          }}
        >
          <ChartPath
            height={150}
            width={SIZES.width}
            stroke={COLORS.lightGreen}
            strokeWidth={2}
          />

          <ChartDot>
            <View
              style={{
                position: "absolute",
                left: -35,
                width: 80,
                alignItems: "center",
                // backgroundColor: COLORS.transparentBlack1,
              }}
            >
              {/* DOT */}
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: 25,
                  height: 25,
                  borderRadius: 15,
                  backgroundColor: COLORS.white,
                }}
              >
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGreen,
                  }}
                />
              </View>

              {/* Y LABEL */}
              <ChartYLabel
                format={formatUSD}
                style={{
                  color: COLORS.white,
                  ...INTER.chip,
                }}
              />

              {/* X LABEL */}
              <ChartXLabel
                format={formatDateTime}
                style={{
                  marginTop: 3,
                  color: COLORS.lightGray3,
                  ...INTER.chip,
                  lineHeight: 15,
                }}
              />
            </View>
          </ChartDot>
        </ChartPathProvider>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
