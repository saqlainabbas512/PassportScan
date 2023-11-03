import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FaceAndPassport = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Шаг 1 з 3</Text>
      <Text style={styles.description1}>Дзякуй!</Text>
      <Text style={styles.description2}>Мы захавалі вашыя дадзеные!</Text>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submiButtonText}>Пачаць зноў</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FaceAndPassport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    backgroundColor: "#c0c0c0",
    alignItems: "center",
    paddingTop: 30,
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 230,
  },
  description1: {
    width: 290,
    fontSize: 21,
    fontWeight: "500",
    textAlign: "center",
  },
  description2: {
    width: 350,
    fontSize: 21,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 200,
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
