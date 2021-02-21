import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Product from "../components/Product";
import { wp, hp } from "../utils/responsive";
import api from "../services/axios";
const Home: React.FC = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([
    { name: "iPhone 11", price: 10000 },
    { name: "iPhone 12 XL", price: 17000 },
    { name: "iPhone 13 XL", price: 17000 },
    { name: "iPhone sas XL", price: 17000 },
    { name: "iPhone Bananas", price: 17000 },
  ]);

  const handleSearch = async () => {
    try {
      const results = await api.get("phones", {
        params: { price: term },
      });
      results.data && setResults(results.data);
    } catch (err) {
      console.log("deu ruim amigao", err);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quanto você quer pagar? </Text>
      <TextInput
        style={styles.textInput}
        value={term}
        onChangeText={(newText) => setTerm(newText)}
        keyboardType="numeric"
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.whiteText}>PROCURAR</Text>
      </TouchableOpacity>
      <ScrollView style={{ maxHeight: hp(32) }}>
        {results &&
          results.map((result, index) => (
            <Product key={index} product={result} />
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 40,
    padding: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textInput: {
    height: 60,
    borderWidth: 1,
    borderColor: "gray",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
    fontSize: 24,
    minWidth: 190,
    textAlign: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
    color: "#000",
  },
  button: {
    padding: 15,
    backgroundColor: "#000",
    margin: 10,
    borderRadius: 10,
  },
  whiteText: {
    color: "#fff",
  },
});

export default Home;
