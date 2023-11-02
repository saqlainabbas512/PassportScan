import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PassportImage = () => {
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
          resizeMode="contain"
          style={styles.image1}
        />
      </View>
      <Text style={styles.description1}>
        Звярніце ўвагу, каб ваша фота і інфармацыя ў ніжняй частцы былі добра
        бачнымі
      </Text>
      <View>
        <Image
          source={require("../../../assets/images/passport-image.png")}
          resizeMode="contain"
          style={styles.image2}
        />
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("PassportContent")}
      >
        <Text style={styles.submiButtonText}>Сканаваць {">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PassportImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: "#c0c0c0",
    alignItems: "center",
    paddingTop: 30,
  },
  image1: {
    width: 250,
    height: 200,
    marginTop: -20,
  },
  imageContainer: {
    width: 290,
    height: 200,
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 5,
  },
  image2: {
    width: 270,
    height: 250,
    marginBottom: -10,
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
    marginBottom: 10,
  },
  description1: {
    width: 300,
    textAlign: "center",
    fontWeight: "400",
    marginBottom: -20,
  },
  submitButton: {
    width: 280,
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  submiButtonText: {
    color: "white",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});
