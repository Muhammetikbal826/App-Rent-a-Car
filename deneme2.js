import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
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
            style={{width: windowWidth * 1, height: windowWidth * 0.5}}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: windowHeight * 0.02,
              marginLeft: windowWidth * 0.01,
              marginRight: windowWidth * 0.01,
              position: 'absolute',
              justifyContent: 'space-between',
            }}>
            
            
           
            
          </View>
        </View>
  
        <View
          style={{
            width: windowWidth * 1,
            backgroundColor: 'white',
          }}>
          <ScrollView style={{height: windowHeight * 0.54}}>
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
              </View>
            </ScrollView>
          </ScrollView>
        </View>
        <View>
          <View
            style={{
              backgroundColor: 'white',
              height: windowWidth * 0.1,
              width: windowWidth * 4,
              marginTop: windowHeight * 0.1,
            }}>
            <View
              style={{
                width: windowWidth * 0.1,
                alignItems: 'flex-start',
                flexDirection: 'row',
                marginLeft: windowWidth * 0.04,
                marginRight: windowWidth * 0.04,
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('./tesla.png')}
                style={{
                  height: windowWidth * 0.06,
                  width: windowWidth * 0.06,
                  marginLeft: windowHeight * 0.03,
                  marginTop: windowHeight * 0.03,
                }}
              />
  
              <Image
                source={require('./tesla.png')}
                style={{
                  height: windowWidth * 0.06,
                  width: windowWidth * 0.06,
                  marginLeft: windowHeight * 0.04,
                  marginTop: windowHeight * 0.03,
                }}
              />
  
              <Image
                source={require('./tesla.png')}
                style={{
                  height: windowWidth * 0.06,
                  width: windowWidth * 0.06,
                  marginLeft: windowHeight * 0.2,
                  marginTop: windowHeight * 0.03,
                }}
              />
              <Image
                source={require('./tesla.png')}
                style={{
                  height: windowWidth * 0.06,
                  width: windowWidth * 0.06,
                  marginLeft: windowHeight * 0.04,
                  marginTop: windowHeight * 0.03,
                }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'grey',
              height: windowWidth * 0.1,
              width: windowWidth * 0.2,
              alignItems: 'center',
              marginBottom: windowHeight * 0.02,
              borderBottomLeftRadius: windowHeight * 0.035,
              borderBottomRightRadius: windowHeight * 0.035,
              marginLeft: windowHeight * 0.2,
              position: 'absolute',
            }}>
            <View>
              <View
                style={{
                  backgroundColor: 'black',
                  height: windowWidth * 0.13,
                  width: windowWidth * 0.13,
                  borderRadius: windowHeight * 1,
                }}>
                <Image
                  source={require('./tesla.png')}
                  style={{
                    height: windowWidth * 0.1,
                    width: windowWidth * 0.1,
                    marginLeft: windowHeight * 0.009,
                    marginTop: windowWidth * 0.015,
                  }}></Image>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default yeni;
  
  const styles = StyleSheet.create({});