import React from "react";
import { View, Text, Pressable } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center", gap: 12 }}>
      <Text style={{ fontSize: 28, fontWeight: "700" }}>Home</Text>
      <Text>Depois aqui vai entrar Marvel API + carrosséis.</Text>

      <Pressable
        onPress={() => navigation.navigate("Details")}
        style={{ padding: 14, borderRadius: 10, alignItems: "center", borderWidth: 1 }}
      >
        <Text style={{ fontWeight: "700" }}>Ir para Details</Text>
      </Pressable>
    </View>
  );
}
