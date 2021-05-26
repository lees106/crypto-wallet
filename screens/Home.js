import React, { useCallback, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import MainLayout from "./MainLayout";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { getHoldings, getCoinMarket } from "../stores/market/marketActions";
import { COLORS, dummyData, icons, INTER, POPPINS, SIZES } from "../constants";
import { BalanceInfo, IconTextButton, Chart } from "../components";

const Home = ({ getHoldings, getCoinMarket, myHoldings, coins }) => {
  const [selectedCoin, setSelectedCoin] = useState(null);
  useFocusEffect(
    useCallback(() => {
      getHoldings((holdings = dummyData.holdings));
      getCoinMarket();
    }, [])
  );

  let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);
  let valueChange = myHoldings.reduce(
    (a, b) => a + (b.holding_value_change_7d || 0),
    0
  );
  let percChange = (valueChange / (totalWallet - valueChange)) * 100;

  function renderWalletInfoSection() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          backgroundColor: COLORS.gray,
        }}
      >
        <BalanceInfo
          title="Your Wallet"
          displayAmount={totalWallet}
          changePct={percChange}
          containerStyle={{ marginTop: 50 }}
        />

        {/* BUTTONS */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,

            marginBottom: -15,
            paddingHorizontal: SIZES.radius,
          }}
        >
          <IconTextButton
            label="Transfer"
            icon={icons.send}
            containerStyle={{
              flex: 1,
              height: 40,
              marginRight: SIZES.radius,
            }}
            onPress={() => console.log("transfer")}
          />
          <IconTextButton
            label="Widthdraw"
            icon={icons.withdraw}
            containerStyle={{
              flex: 1,
              height: 40,
            }}
            onPress={() => console.log("widthdraw")}
          />
        </View>
      </View>
    );
  }
  function renderChart() {
    return (
      <Chart
        containerStyle={{ marginTop: SIZES.padding * 2 }}
        chartPrice={
          selectedCoin
            ? selectedCoin?.sparkline_in_7d?.price
            : coins[0]?.sparkline_in_7d?.price
        }
      />
    );
  }
  function renderTopCryptocurrency() {
    return (
      <FlatList
        data={coins}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          marginTop: 30,
          paddingHorizontal: SIZES.padding,
        }}
        ListHeaderComponent={
          <View style={{ marginBottom: SIZES.radius }}>
            <Text style={{ color: COLORS.white, ...POPPINS.title }}>
              Top Crypto
            </Text>
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
              style={{
                height: 55,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => setSelectedCoin(item)}
            >
              {/* LOGO */}
              <View style={{ width: 35 }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 20, height: 20 }}
                />
              </View>

              {/* NAME */}
              <View style={{ flex: 1 }}>
                <Text style={{ color: COLORS.white, ...INTER.titleM }}>
                  {item.name}
                </Text>
              </View>

              {/* FIGURES */}
              <View>
                <Text
                  style={{
                    textAlign: "right",
                    color: COLORS.white,
                    ...INTER.titleM,
                  }}
                >
                  $ {item.current_price}
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
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={<View style={{ marginBottom: 50 }} />}
      />
    );
  }

  return (
    <MainLayout>
      <View style={{ flex: 1, backgroundColor: COLORS.black }}>
        {renderWalletInfoSection()}
        {renderChart()}
        {renderTopCryptocurrency()}
      </View>
    </MainLayout>
  );
};

function mapStateToProps(state) {
  return {
    myHoldings: state.marketReducer.myHoldings,
    coins: state.marketReducer.coins,
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
    getCoinMarket: (
      currency,
      coinList,
      orderBy,
      sparkline,
      priceChangePerc,
      perPage,
      page
    ) => {
      dispatch(
        getCoinMarket(
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
