import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import * as React from "react";
import { obj } from "../db";

const Beranda = ({ navigation }) => {
  let nameData = obj;

  const windowWidth = Dimensions.get("window").width;
  const buttonWidth = windowWidth - 40;

  return (
    <View
      className="flex-1 pt-4 pb-3"
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "#FFEAEA",
      }}
    >
      <Text style={styles.title}>
        <Text style={styles.titleHead}>ShowTheLogo</Text> Menampilkan logo
        secara HD dari perusahaan terbesar
      </Text>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, marginTop: 5 }}
        keyboardShouldPersistTaps="handled"
      >
        {nameData.map((data, index) => {
          return (
            <View className="items-center py-3" key={index}>
              <View style={styles.buttonContainer}>
                {nameData[index] && (
                  <TouchableOpacity
                    style={[styles.button, { width: buttonWidth }]}
                    onPress={() => {
                      console.log(nameData[index].name);
                      navigation.navigate("Hasil", {
                        name: nameData[index].name,
                      });
                    }}
                  >
                    <Text style={styles.buttonText}>
                      {nameData[index].name}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 5,
    color: "#40513B",
  },
  titleHead: {
    color: "#E11299",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#E11299",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Beranda;
