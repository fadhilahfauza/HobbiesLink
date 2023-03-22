import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import * as React from "react";

export const Hasil = ({ route }) => {
  const name = route.params?.name || "";
  const URL = "https://api.api-ninjas.com/v1/logo?name=" + name;
  const api = "2JAP8E2NZbuJbFF1HuWJiQ==blrJQ7ZR1AMXMVaM";
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);

    fetch(URL, {
      method: "GET",
      headers: { "X-Api-Key": api },
    })
      .then((response) => {
        if (response.status === 502) {
          alert("Internal Server Error, Tolong Pilih Nama Yang Lain");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        alert("Error: " + error.message);
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, [name]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Tunggu Sebentar</Text>
      </View>
    );
  }

  return (
    <View style={styles.container} className="flex-1 pt-4 pb-3">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, marginTop: 5 }}
        keyboardShouldPersistTaps="handled"
      >
        <FlatList
          contentContainerStyle={styles.flatListContent}
          horizontal={true}
          data={data}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <ScrollView
                contentContainerStyle={{ flexGrow: 1, marginTop: 5 }}
                keyboardShouldPersistTaps="handled"
              >
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.ticker}>{item.ticker}</Text>
                <TouchableOpacity onPress={() => Linking.openURL(item.image)}>
                  <Text
                    style={{ color: "blue", textDecorationLine: "underline" }}
                  >
                    {item.image}
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
          keyExtractor={(item) => item.name}
          showsHorizontalScrollIndicator={false}
        />
        <StatusBar style="dark" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEAEA",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#E11299",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#fff",
    marginBottom: 10,
  },
  ticker: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    color: "#fff",
  },
  flatListContent: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
