import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const LoginScreen = () => {
  return (
    <ImageBackground
      source={require('./araba.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Image source={require('./logo.png')} style={styles.logo} />
          <Text style={styles.title}>RentACar</Text>
          <TextInput
            style={styles.input}
            placeholder="E-posta"
            placeholderTextColor="#fff"
          />
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton}>
              <Text style={styles.buttonText}>Kayıt Ol</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  
  },
  title: {
    fontSize: 35,
    color: '#f5f5f5',
    marginBottom: 30,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 20,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  button: {
    width: 140,
    height: 50,
    backgroundColor: '#2980b9',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    width: 140,
    height: 50,
    backgroundColor: '#16a085',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
