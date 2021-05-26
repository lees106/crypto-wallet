import React, { useCallback, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { getHoldings, getCoinMarket } from "../stores/market/marketActions";
import { COLORS, dummyData, icons, INTER, POPPINS, SIZES } from "../constants";
import { BalanceInfo, Chart } from "../components";
import MainLayout from "./MainLayout";

const Portfolio = ({ getHoldings, myHoldings }) => {
  const [selectedCoin, setSelectedCoin] = useState(null);

  useFocusEffect(
    useCallback(() => {
      getHoldings((holdings = dummyData.holdings));
    }, [])
  );

  let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);
  let valueChange = myHoldings.reduce(
    (a, b) => a + (b.holding_value_change_7d || 0),
    0
  );
  let percChange = (valueChange / (totalWallet - valueChange)) * 100;

  function renderCurrentBalanceSection() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: COLORS.gray,
        }}
      >
        <Text style={{ marginTop: 50, color: COLORS.white, ...POPPINS.h3 }}>
          Portfolio
        </Text>
        <BalanceInfo
          title="Current Balance"
          displayAmount={totalWallet}
          changePct={percChange}
          containerStyle={{
            marginTop: SIZES.radius,
            marginBottom: SIZES.padding,
          }}
        />
      </View>
    );
  }

  function renderChart() {
    return (
      <Chart
        containerStyle={{ marginTop: SIZES.padding }}
        chartPrice={
          selectedCoin
            ? selectedCoin?.sparkline_in_7d?.value
            : myHoldings[0]?.sparkline_in_7d?.value
        }
      />
    );
  }

  function renderAssets() {
    return (
      <FlatList
        data={myHoldings}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
        ListHeaderComponent={
          <View>
            {/* Section Title */}
            <Text style={{ ...POPPINS.title, color: COLORS.white }}>
              Your Assets
            </Text>

            {/* Header Label */}
            <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
              <Text style={{ flex: 1, color: COLORS.lightGray3 }}>Assets</Text>
              <Text
                style={{
                  flex: 1,
                  color: COLORS.lightGray3,
                  textAlign: "right",
                }}
              >
                Price
              </Text>

              <Text
                style={{
                  flex: 1,
                  color: COLORS.lightGray3,
                  textAlign: "right",
                }}
              >
                Holdings
              </Text>
            </View>
          </View>
        }
        renderItem={({ item }) => {
          let priceColor =
            item.price_change_percentage_7d_in_currency == 0
              ? COLORS.lightGray3
              : item.price_change_percentage_7d_in_currency > 0
              ? COLORS.lightGreen
              : COLORS.red;

          return (
            <TouchableOpacity
              style={{ flexDirection: "row", height: 55 }}
              onPress={() => setSelectedCoin(item)}
            >
              {/* Assets */}
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 20, height: 20 }}
                />
                <Text
                  style={{
                    marginLeft: SIZES.radius,
                    color: COLORS.white,
                    ...INTER.titleM,
                  }}
                >
                  {item.name}
                </Text>
              </View>

              {/* Price */}
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text
                  style={{
                    textAlign: "right",
                    color: COLORS.white,
                    ...INTER.titleS,
                    lineHeight: 15,
                  }}
                >
                  $ {item.current_price.toLocaleString()}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  {item.price_change_percentage_7d_in_currency != 0 && (
                    <Image
                      source={icons.upArrow}
                      style={{
                        height: 10,
                        width: 10,
                        tintColor: priceColor,
                        transform:
                          item.price_change_percentage_7d_in_currency > 0
                            ? [{ rotate: "45deg" }]
                            : [{ rotate: "125deg" }],
                      }}
                    />
                  )}

                  <Text
                    style={{
                      marginLeft: 5,
                      color: priceColor,
                      ...INTER.captionS,
                      lineHeight: 15,
                    }}
                  >
                    {item.price_change_percentage_7d_in_currency.toFixed(2)}%
                  </Text>
                </View>
              </View>

              {/* Holdings */}
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text
                  style={{
                    textAlign: "right",
                    color: COLORS.white,
                    ...INTER.titleS,
                    lineHeight: 15,
                  }}
                >
                  ${item.total.toLocaleString()}
                </Text>
                <Text
                  style={{
                    textAlign: "right",
                    color: COLORS.lightGray3,
                    ...INTER.captionS,
                    lineHeight: 15,
                  }}
                >
                  {item.qty} {item.symbol.toUpperCase()}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  }

  return (
    <MainLayout>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
        }}
      >
        {/* Header - current balance */}
        {renderCurrentBalanceSection()}
        {/* Chart */}
        {renderChart()}
        {/* Your Assets */}
        {renderAssets()}
      </View>
    </MainLayout>
  );
};

function mapStateToProps(state) {
  return {
    myHoldings: state.marketReducer.myHoldings,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHoldings: (
      holdings,
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) => {
      dispatch(
        getHoldings(
          holdings,
          currency,
          coinList,
          orderBy,
          sparkline,
          priceChangePerc,
          perPage,
          page
        )
      );
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
