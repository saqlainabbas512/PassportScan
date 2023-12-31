import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PassportContent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Шаг 1 з 3</Text>
      <Text style={styles.description}>
        Праскануйце апошнюю старонку вашаго пашпарту
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/images/passport-image.png")}
          resizeMode="stretch"
          style={styles.image1}
        />
      </View>

      <Text style={styles.description2}>
        Дзякуй, мы прасканавалі Дадзеные вашага пашпарту
      </Text>
      <Text style={styles.description2}>
        На наступным кроку мы адскануем ваш твар
      </Text>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("FirstStep")}
      >
        <Text style={styles.submiButtonText}>Далей {">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PassportContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: "#c0c0c0",
    alignItems: "center",
    paddingTop: 30,
  },
  image1: {
    width: 275,
    height: 180,
    backgroundColor: "red",
  },
  imageContainer: {
    width: 290,
    height: 200,
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 5,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 15,
  },
  description: {
    width: 267,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 20,
  },
  description2: {
    width: 267,
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  submitButton: {
    width: 280,
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  submiButtonText: {
    color: "white",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});
