import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [res, setRes] = useState("");
  const clickHandler = () => {
    typeof Number(res) === Number || (res <= 1000000 && res > 0)
      ? alert(
          `x = ${fermaFactors(Number(res))[0]}\ny = ${
            fermaFactors(Number(res))[1]
          }`
        )
      : alert("Некорректные данные");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Лабораторная 3.1</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Введите число"
        keyboardType="number-pad"
        onChangeText={text => setRes(text)}
        value={res}
      />
      <Button title="Посчитать" onPress={clickHandler} style={styles.btn} />
    </View>
  );
}

const fermaFactors = function(num) {
  if (num <= 0) return num;
  if (num & (1 === 0)) return [num / 2, 2];
  let a = Math.ceil(Math.sqrt(num));
  if (a * a === num) return [a, a];
  let b;
  while (true) {
    let b1 = a * a - num;
    b = Math.floor(Math.sqrt(b1));
    if (b * b === b1) break;
    else ++a;
  }
  return [a - b, a + b];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 20
  },
  header: {
    marginTop: 50,
    marginBottom: 50,
    alignItems: "center"
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginTop: 10,
    marginBottom: 50,
    width: 200
  },
  btn: {
    backgroundColor: "green"
  }
});
