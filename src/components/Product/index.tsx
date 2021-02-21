import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// import { Container } from './styles';
type Product = {
  name: string;
  price: number;
};
type Props = {
  product: Product;
};
const Product = ({ product }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.productNameContainer}>
        <Text style={styles.productName}> {product.name}</Text>
      </View>
      <Text>{product.price} R$</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
  },
  productName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  productNameContainer: {
    padding: 4,
    borderRadius: 10,
    backgroundColor: "#000",
    marginBottom: 3,
  },
});
export default Product;
