import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity, Image, ToastAndroid, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { app } from '../../firebaseConfig';
import { Formik } from 'formik';
import {Picker} from '@react-native-picker/picker'
import * as ImagePicker from 'expo-image-picker';
import { getFirestore, getDocs ,collection, addDoc} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useUser } from '@clerk/clerk-expo';
export default function AddPostScreen() {
  const [image, setImage] = useState(null);
  const db = getFirestore(app);
  const storage = getStorage();
  const [loading,setLoading]=useState(false);
  const {user}=useUser();
  const[categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
    getCategoryList();
  },[])
  /**
   * Used to get Category List
   */
  const getCategoryList=async()=>{
    setCategoryList([]);
    const querySnapshot=await getDocs(collection(db, 'Category'));
    querySnapshot.forEach((doc)=>{
      console.log("Docs:",doc.data());
      setCategoryList(categoryList=>[...categoryList,doc.data()])
    })
  }
  /**
   * Used to Pick Image from Gallery
   */
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const onSubmitMethod=async(value)=>{
    
    setLoading(true)
    //Convert Uri to Blob File
    const resp=await fetch(image);
    const blob=await resp.blob();
    const storageRef = ref(storage, 'communityPost/'+Date.now()+".jpg");

    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    }).then((resp)=>{
      getDownloadURL(storageRef).then(async(downloadUrl)=>{
        console.log(downloadUrl);
        value.image=downloadUrl;
        value.userName=user.fullName;
        value.userEmail=user.primaryEmailAddress.emailAddress;
        value.userImage=user.imageUrl;
        const docRef=await addDoc(collection(db,"UserPost"),value)
        if(docRef.id)
        {
          setLoading(false);
          Alert.alert('Başarılı!!!','Gönderi Başarıyla Eklendi.')
        }
      })
    });
  }
  return (
    <View className="p-10">
      <Text className="text-[27px] font-bold">Yeni Gönderi Ekle</Text>
      <Text className="text-[16px] text-gray-500 mb-7">Yeni Gönderi Oluştur ve Satışa Başla</Text>
      <Formik
        initialValues={{title:'',desc:'',category:'',address:'',price:'',image:'',userName:'',userEmail:'',userImage:''}}
        onSubmit={value=>onSubmitMethod(value)}
        validate={(values)=>{
          const errors={}
          if(!values.title)
          {
            console.log("Başlık Mevcut Değil");
            ToastAndroid.show('Başlık Gerekli',ToastAndroid.SHORT)
            errors.name="Başlık Gerekli"
          }
          return errors
        }}
      >
        {({handleChange,handleBlur,handleSubmit,values, setFieldValue,errors})=>(
         <View>

          <TouchableOpacity onPress={pickImage}>
          {image?
          <Image source={{uri:image}} style={{width:100,height:100,borderRadius:15}}  />
          :
          <Image source={require('./../../assets/images/placeholder.jpg')}
          style={{width:100,height:100,borderRadius:15}}
          />}

            </TouchableOpacity> 
            <TextInput
              style={styles.input}
              placeholder='Başlık'
              value={values?.title}
              onChangeText={handleChange('title')}
            />
            <TextInput
              style={styles.input}
              placeholder='Açıklama'
              value={values?.desc}
              numberOfLines={5}
              onChangeText={handleChange('desc')}
            />
            <TextInput
              style={styles.input}
              placeholder='Fiyat'
              value={values?.price}
              keyboardType='number-pad'
              onChangeText={handleChange('price')}
            />
            <TextInput
              style={styles.input}
              placeholder='Adres'
              value={values?.address}
              onChangeText={handleChange('address')}
            />

            {/* Category List Dropdown */}
            <View style={{borderWidth:1,borderRadius:10,marginTop:15}}>
        <Picker
          selectedValue={values?.category}
          className="border-2"
          onValueChange={itemValue=>setFieldValue('category',itemValue)}
        >
          {categoryList&&categoryList.map((item,index)=>(
               <Picker.Item key={index}
                label={item?.name} value={item?.name} />
          ))}
        </Picker>
        </View>

        <TouchableOpacity onPress={handleSubmit}
        style={{
          backgroundColor:loading?'#ccc':'#007BFF',
          
        }}
        disabled={loading}
         className="p-4 bg-blue-500 rounded-full mt-10">
         {loading?
          <ActivityIndicator color='#fff'/>
          :
          <Text className="text-white text-center text-[16px]">Submit</Text>
        }
        </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  )
}
const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderRadius:10,
        padding:10,
        paddingTop:15,
        marginTop:10,marginBottom:5,
        paddingHorizontal:17,
        textAlignVertical:'top',
        fontSize:17
    }
})