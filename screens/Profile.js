import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import { HeaderBar } from "../components";
import { COLORS, dummyData, icons, INTER, SIZES } from "../constants";
import MainLayout from "./MainLayout";

const SectionTitle = ({ title }) => {
  return (
    <View style={{ marginTop: SIZES.padding }}>
      <Text style={{ color: COLORS.lightGray3, ...INTER.titleM }}>{title}</Text>
    </View>
  );
};

const Setting = ({ title, value, type, onPress }) => {
  if (type == "button") {
    return (
      <TouchableOpacity
        style={{ flexDirection: "row", height: 50, alignItems: "center" }}
        onPress={onPress}
      >
        <Text style={{ flex: 1, color: COLORS.white, ...INTER.titleS }}>
          {title}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              marginRight: SIZES.radius,
              color: COLORS.lightGray3,
              ...INTER.titleS,
            }}
          >
            {value}
          </Text>
          <Image
            source={icons.rightArrow}
            style={{ height: 15, width: 15, tintColor: COLORS.white }}
          />
        </View>
      </TouchableOpacity>
    );
  }

  if (type == "switch") {
    return (
      <View style={{ flexDirection: "row", height: 50, alignItems: "center" }}>
        <Text style={{ flex: 1, color: COLORS.white, ...INTER.titleS }}>
          {title}
        </Text>
        <Switch value={value} onValueChange={(value) => onPress(value)} />
      </View>
    );
  }
};

const Profile = () => {
  const [faceId, setFaceId] = useState(true);
  return (
    <MainLayout>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          backgroundColor: COLORS.black,
        }}
      >
        {/* Header */}
        <HeaderBar title="Profile" />

        {/* Details */}
        <ScrollView>
          {/* Email and userID */}
          <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
            {/* Eamail and ID */}
            <View style={{ flex: 1 }}>
              <Text style={{ color: COLORS.white, ...INTER.titleM }}>
                {dummyData.profile.email}
              </Text>
              <Text style={{ color: COLORS.lightGray3, ...INTER.titleS }}>
                ID: {dummyData.profile.id}
              </Text>
            </View>

            {/* Status */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={icons.verified}
                style={{ height: 25, width: 25 }}
              />

              <Text
                style={{
                  marginLeft: SIZES.base,
                  color: COLORS.lightGreen,
                  ...INTER.titleS,
                }}
              >
                Verified
              </Text>
            </View>
          </View>
          {/* APP */}
          <SectionTitle title="APP" />
          <Setting
            title="Launch Screen"
            value="Home"
            type="button"
            onPress={() => console.log("PRESS")}
          />
          <Setting
            title="Appearance"
            value="Dark"
            type="button"
            onPress={() => console.log("PRESS")}
          />

          {/* ACCOUNT */}
          <SectionTitle title="ACCOUNT" />
          <Setting
            title="Payment Currency"
            value="USD"
            type="button"
            onPress={() => console.log("PRESS")}
          />
          <Setting
            title="Language"
            value="English"
            type="button"
            onPress={() => console.log("PRESS")}
          />

          {/* SECURITY */}
          <SectionTitle title="SECURITY" />
          <Setting
            title="FaceID"
            value={faceId}
            type="switch"
            onPress={(value) => setFaceId(value)}
          />
          <Setting
            title="Password Settings"
            value=""
            type="button"
            onPress={() => console.log("PRESS")}
          />
          <Setting
            title="Change Password"
            value=""
            type="button"
            onPress={() => console.log("PRESS")}
          />
          <Setting
            title="2FA Authentication"
            value=""
            type="button"
            onPress={() => console.log("PRESS")}
          />
        </ScrollView>
      </View>
    </MainLayout>
  );
};

export default Profile;
