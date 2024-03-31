import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const yeni = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require('./tesla.png')}
          style={{ width: windowWidth * 1, height: windowWidth * 0.5 }}
        />
        <View
          style={{
          }}>
        </View>
      </View>

      <View
        style={{
          width: windowWidth * 1,
          backgroundColor: 'white',
        }}>
        <ScrollView style={{ height: windowHeight * 0.7 }}>
          <Text
            style={{
              marginLeft: windowWidth * 0.03,
              fontSize: windowWidth * 0.06,
              color: 'black',
              marginTop: windowHeight * 0.02,
            }}>
            Tesla Modelleri
          </Text>
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: windowWidth * 0.05,
              }}>
              <View
                style={{
                  width: windowWidth * 0.5,
                  height: windowWidth * 0.7,
                  backgroundColor: '#f0f2f0',
                  marginLeft: windowWidth * 0.04,
                  borderRadius: windowWidth * 0.07,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('./tesla.png')}
                    style={{
                      width: windowWidth * 0.15,
                      height: windowWidth * 0.15,
                      borderRadius: windowWidth * 0.15,
                      marginLeft: windowWidth * 0.03,
                      marginTop: windowHeight * 0.02,
                    }}
                  />
                  <View
                    style={{
                      marginTop: windowHeight * 0.02,
                      marginLeft: windowWidth * 0.03,
                    }}>
                    <Text
                      style={{
                        fontSize: windowWidth * 0.045,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      tesla model1
                    </Text>
                    <Text>1500tl</Text>
                  </View>
                </View>
                <Image
                  source={require('./tesla.png')}
                  style={{
                    width: windowWidth * 0.4,
                    height: windowWidth * 0.4,
                    marginTop: windowWidth * 0.25,
                    marginLeft: windowWidth * 0.04,
                    position: 'absolute',
                  }}
                />
              </View>
              <View
                style={{
                  width: windowWidth * 0.5,
                  height: windowWidth * 0.7,
                  backgroundColor: '#f0f2f0',
                  marginLeft: windowWidth * 0.04,
                  borderRadius: windowWidth * 0.07,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('./tesla.png')}
                    style={{
                      width: windowWidth * 0.15,
                      height: windowWidth * 0.15,
                      borderRadius: windowWidth * 0.15,
                      marginLeft: windowWidth * 0.03,
                      marginTop: windowHeight * 0.02,
                    }}
                  />
                  <View
                    style={{
                      marginTop: windowHeight * 0.02,
                      marginLeft: windowWidth * 0.03,
                    }}>
                    <Text
                      style={{
                        fontSize: windowWidth * 0.045,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      tesla model2
                    </Text>
                    <Text>2000tl</Text>
                  </View>
                </View>

                <Image
                  source={require('./tesla.png')}
                  style={{
                    width: windowWidth * 0.4,
                    height: windowWidth * 0.4,
                    marginTop: windowWidth * 0.25,
                    marginLeft: windowWidth * 0.04,
                    position: 'absolute',
                  }}
                />
              </View>
              <View
                style={{
                  width: windowWidth * 0.5,
                  height: windowWidth * 0.7,
                  backgroundColor: '#f0f2f0',
                  marginLeft: windowWidth * 0.04,
                  borderRadius: windowWidth * 0.07,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('./tesla.png')}
                    style={{
                      width: windowWidth * 0.15,
                      height: windowWidth * 0.15,
                      borderRadius: windowWidth * 0.15,
                      marginLeft: windowWidth * 0.03,
                      marginTop: windowHeight * 0.02,
                    }}
                  />
                  <View
                    style={{
                      marginTop: windowHeight * 0.02,
                      marginLeft: windowWidth * 0.03,
                    }}>
                    <Text
                      style={{
                        fontSize: windowWidth * 0.045,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      tesla model3
                    </Text>
                    <Text>2500tl</Text>
                  </View>
                </View>
                <Image
                  source={require('./tesla.png')}
                  style={{
                    width: windowWidth * 0.4,
                    height: windowWidth * 0.4,
                    marginTop: windowWidth * 0.25,
                    marginLeft: windowWidth * 0.04,
                    position: 'absolute',
                  }}
                />
              </View>
            </View>
          </ScrollView>
          <Text
            style={{
              marginLeft: windowWidth * 0.03,
              fontSize: windowWidth * 0.06,
              color: 'black',
              marginTop: windowHeight * 0.02,
            }}>
            Bunlara da göz atabilirsiniz
          </Text>
          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: windowWidth * 0.05,
              }}>
              <View
                style={{
                  width: windowWidth * 0.5,
                  height: windowWidth * 0.7,
                  backgroundColor: '#f0f2f0',
                  marginLeft: windowWidth * 0.04,
                  borderRadius: windowWidth * 0.07,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('./tesla.png')}
                    style={{
                      width: windowWidth * 0.15,
                      height: windowWidth * 0.15,
                      borderRadius: windowWidth * 0.15,
                      marginLeft: windowWidth * 0.03,
                      marginTop: windowHeight * 0.02,
                    }}
                  />
                  <View
                    style={{
                      marginTop: windowHeight * 0.02,
                      marginLeft: windowWidth * 0.03,
                    }}>
                    <Text
                      style={{
                        fontSize: windowWidth * 0.045,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      tesla
                    </Text>
                    <Text>0000</Text>
                  </View>
                </View>
                <Image
                  source={require('./tesla.png')}
                  style={{
                    width: windowWidth * 0.4,
                    height: windowWidth * 0.4,
                    marginTop: windowWidth * 0.25,
                    marginLeft: windowWidth * 0.04,
                    position: 'absolute',
                  }}
                />
              </View>
              <View
                style={{
                  width: windowWidth * 0.5,
                  height: windowWidth * 0.7,
                  backgroundColor: '#f0f2f0',
                  marginLeft: windowWidth * 0.04,
                  borderRadius: windowWidth * 0.07,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('./tesla.png')}
                    style={{
                      width: windowWidth * 0.15,
                      height: windowWidth * 0.15,
                      borderRadius: windowWidth * 0.15,
                      marginLeft: windowWidth * 0.03,
                      marginTop: windowHeight * 0.02,
                    }}
                  />
                  <View
                    style={{
                      marginTop: windowHeight * 0.02,
                      marginLeft: windowWidth * 0.03,
                    }}>
                    <Text
                      style={{
                        fontSize: windowWidth * 0.045,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      tesla
                    </Text>
                    <Text>0</Text>
                  </View>
                </View>
                <Image
                  source={require('./tesla.png')}
                  style={{
                    width: windowWidth * 0.4,
                    height: windowWidth * 0.4,
                    marginTop: windowWidth * 0.25,
                    marginLeft: windowWidth * 0.04,
                    position: 'absolute',
                  }}
                />
              </View>
              <View
                style={{
                  width: windowWidth * 0.5,
                  height: windowWidth * 0.7,
                  backgroundColor: 'red',
                  marginLeft: windowWidth * 0.04,
                  borderRadius: windowWidth * 0.07,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={require('./tesla.png')}
                    style={{
                      width: windowWidth * 0.15,
                      height: windowWidth * 0.15,
                      borderRadius: windowWidth * 0.15,
                      marginLeft: windowWidth * 0.03,
                      marginTop: windowHeight * 0.02,
                    }}
                  />
                  <View
                    style={{
                      marginTop: windowHeight * 0.02,
                      marginLeft: windowWidth * 0.03,
                    }}>
                    <Text
                      style={{
                        fontSize: windowWidth * 0.045,
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      tesla
                    </Text>
                    <Text>0</Text>
                  </View>
                </View>
                <Image
                  source={require('./tesla.png')}
                  style={{
                    width: windowWidth * 0.4,
                    height: windowWidth * 0.4,
                    marginTop: windowWidth * 0.25,
                    marginLeft: windowWidth * 0.04,
                    position: 'absolute',
                  }}
                />
                <Image
                  source={require('./tesla.png')}
                  style={{
                    width: windowWidth * 0.4,
                    height: windowWidth * 0.4,
                    marginTop: windowWidth * 0.25,
                    marginLeft: windowWidth * 0.04,
                    position: 'absolute',
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </ScrollView>

        {/* Navigasyon paneli */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
          <TouchableOpacity onPress={() => console.log('Home tuşuna basıldı')}>
            <Image
              source={require('./home.png')}
              style={{ width: 30, height: 30, margin: 25,marginTop:-15  }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('İkinci tuşa basıldı')}>
            <Image
              source={require('./favori.png')}
              style={{ width: 30, height: 30, margin: 25,marginTop:-15 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Üçüncü tuşa basıldı')}>
            <Image
              source={require('./profil.png')}
              style={{ width: 30, height: 30, margin: 25,marginTop:-15  }}
            />
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  );
};

export default yeni;

const styles = StyleSheet.create({});
