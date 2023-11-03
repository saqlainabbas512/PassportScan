import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FaceDirectionRight = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Шаг 1 з 3</Text>
      <Text style={styles.description}>Праскануйце ваш твар</Text>
      <View style={styles.imageAndArrowaContainer}>
        <View style={styles.imageContainer} />
        <View style={styles.triangle} />
      </View>

      <Text style={styles.description2}>
        Павярнице галаву ў бок які адзначаны жоўтым колерам
      </Text>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("FaceDirectionLeft")}
      >
        <Text style={styles.submiButtonText}>{"<"} Назад</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FaceDirectionRight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: "#c0c0c0",
    alignItems: "center",
    paddingTop: 30,
  },
  imageAndArrowaContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 55,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 65,
    borderLeftColor: "transparent",
    borderRightWidth: 65,
    borderRightColor: "transparent",
    borderBottomWidth: 20,
    borderBottomColor: "#BDF516",
    transform: [{ rotate: "128deg" }],
    marginTop: 200,
    marginLeft: -70,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 30,
  },
  imageContainer: {
    width: 190,
    height: 225,
    backgroundColor: "white",
    borderRadius: 100,
    alignItems: "center",
    marginBottom: 15,
    marginTop: 5,
    marginLeft: 10,
  },
  description: {
    width: 267,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 40,
  },
  description2: {
    width: 290,
    fontSize: 21,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 60,
  },
  submitButton: {
    width: 280,
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    marginBottom: 25,
  },
  submiButtonText: {
    color: "white",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});
