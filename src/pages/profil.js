import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function Profil() {
  return (
    <View style={styles.container}>
      <Text>Fadhilah Fauza Hamda</Text>
      <Text>120140153</Text>
      <Text>PAM RB</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEAEA",
    alignItems: "center",
    justifyContent: "center",
  },
});
