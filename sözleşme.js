import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CarRentalPage = () => {
  const [contractAccepted, setContractAccepted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Yerel dosyadan resimleri al
  const carImages = [
    require('./tesla.png'),
    require('./tesla.png'),
    require('./tesla.png')
  ];

  const handleAcceptContract = () => {
    setContractAccepted(!contractAccepted);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 1000); // Her 1 saniyede bir kaydır

    return () => clearInterval(interval); // Komponentten çıkışta zamanlayıcıyı temizle
  }, []);

  const contractText = `
    1. Kiralama süresi boyunca aracı hasara uğratmamayı kabul ediyorum.
    2. Araçla ilgili herhangi bir teknik sorun yaşarsam, derhal kiralama şirketini bilgilendireceğim.
    3. Kiralama süresi sonunda aracı belirlenen süre içinde teslim edeceğim.
  `;

  return (
    <View style={styles.container}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} 
        onScroll={({ nativeEvent }) => {
          const currentIndex = Math.round(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
          );
          setCurrentIndex(currentIndex);
        }}
        ref={(scrollView) => { this.scrollView = scrollView; }}
      >
        {carImages.map((image, index) => (
          <Image key={index} source={image} style={styles.carImage} />
        ))}
      </ScrollView>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Tesla Model</Text>
        <Text style={styles.infoText}>
          - Elektrikli otomobil segmentinde öncü bir modeldir.
        </Text>
        <Text style={styles.infoText}>
          - Yüksek performans ve uzun menzil sunar.
        </Text>
        <Text style={styles.infoText}>
          - Şık ve modern tasarımıyla dikkat çeker.
        </Text>
        <Text style={styles.infoText}>
          - Yenilikçi teknolojilere sahiptir, örneğin otonom sürüş özelliği bulunur.
        </Text>
      </View>
      <ScrollView style={styles.contractScrollContainer}>
        <View style={styles.contractContainer}>
          <Text style={styles.contractTitle}>Kiralama Sözleşmesi</Text>
          <Text style={styles.contractText}>{contractText}</Text>
        </View>
      </ScrollView>
      <View style={styles.acceptContractContainer}>
        <TouchableOpacity onPress={handleAcceptContract}>
          <Text style={styles.acceptText}>{contractAccepted ? 'Sözleşme kabul edildi' : 'Sözleşmeyi kabul ediyorum'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity disabled={!contractAccepted} style={[styles.button, { backgroundColor: contractAccepted ? 'green' : 'gray' }]}>
        <Text style={styles.buttonText}>Satın Al</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  carImage: {
    width: 300,
    height: 200,
    resizeMode: 'cover'
  },
  infoContainer: {
    marginVertical: 20
  },
  infoText: {
    fontSize: 16,
    textAlign: 'justify'
  },
  contractScrollContainer: {
    maxHeight: 150,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10
  },
  contractContainer: {
    paddingVertical: 10
  },
  contractTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  contractText: {
    fontSize: 16,
    textAlign: 'justify'
  },
  acceptContractContainer: {
    marginBottom: 20,
    alignItems: 'center'
  },
  acceptText: {
    fontSize: 16,
    color: 'blue'
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  }
});

export default CarRentalPage;
