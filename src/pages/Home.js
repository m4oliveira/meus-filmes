import react from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Filmes Favoritos</Text>
      <Text style={styles.subtitulo}>Olá Maiara, boa noite!</Text>
      <TextInput style={styles.campo} placeholder="Nome do filme" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#30478C",
    paddingVertical: 70,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FFD700",
  },
  subtitulo: {
    color: "#FFF",
    fontSize: 15,
  },
  campo: {
    backgroundColor: "#1F1E25",
    color: "#FFF",
    fontSize: 18,
    marginTop: 30,
    borderRadius: 7,
    padding: 15,
  },
  greetings: {
    color: "#FFF",
  },
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
