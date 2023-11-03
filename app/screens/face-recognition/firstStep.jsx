import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FirstStep = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Шаг 1 з 3</Text>
      <Text style={styles.description}>Праскануйце ваш твар</Text>
      <View style={styles.imageContainer} />

      <Text style={styles.description2}>
        Мы папросім вас павярнуць галаву ў розныя бакі для Верыфікацыі
      </Text>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("FaceDirectionRight")}
      >
        <Text style={styles.submiButtonText}>Далей {">"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstStep;

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
    marginBottom: 35,
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
