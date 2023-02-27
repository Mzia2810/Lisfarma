import React, { useState, useEffect } from "react";
import { View, Text, KeyboardAvoidingView, ToastAndroid, ScrollView, Alert,Modal, TouchableOpacity, Platform, PermissionsAndroid, Image, } from "react-native";
import { useSelector } from "react-redux";
import colors from "../../../config/colors";
import styles from "../../../config/styles";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { getDownloadURL } from "firebase/storage";

const UploadImage = ({ navigation, route }) => {
    const { phaseName } = route.params

    const ExperimentName = useSelector((state) => state.reducer.experimentName)
    // const[experimentName,setExperimentName]=useState(ExperimentName)
    const [image, setImage] = useState('')
    const uploadFormPhotograph = (downloadUrl) => {
        const userId = auth().currentUser.uid;
        const docName = phaseName + "PhotoGraph"
        
        firestore().collection(userId).doc(ExperimentName).collection('ExperimentPhotos').doc(docName).set({
            phaseName,
            image: downloadUrl,
        }).then(() => {
            ToastAndroid.show("Data Saved", ToastAndroid.SHORT)
        }).catch((err) => { console.log('error' + err) })
    }
    const uploadViaCamera = async () => {

        if (Platform.OS == 'android') {
            const hasPermissions = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
                title: 'Camera Access Required',
                message: 'GoGreen Needs To Access Your Camera'
            });
            if (hasPermissions === PermissionsAndroid.RESULTS.GRANTED) {
                launchCamera({ maxHeight: 300, maxWidth: 300, quality: 0.5, cameraType: 'back', mediaType: 'photo' },
                    (fileobj) => {
                        if (fileobj.didCancel || fileobj.errorCode) { return ToastAndroid.show('Image Upload Cancelled', ToastAndroid.SHORT) }
                        const img = fileobj.assets[0]
                        const uploadTask = storage().ref().child(`/items/${Date.now()}`).putFile(img.uri)
                        uploadTask.on('state_changed',
                            (snapshot) => {
                                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                if (progress == 100) { console.log('Image uploaded') }
                            },
                            (error) => { Alert.alert(error.message) },
                            () => {
                                uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
                                    setImage(downloadUrl);
                                    uploadFormPhotograph(downloadUrl)
                                })
                            }
                        )

                    }
                )

            }
        }
    }
    const uploadViaGallery = async () => {

        if (Platform.OS == 'android') {
            const hasPermissions = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
                title: 'Camera Access Required',
                message: 'GoGreen Needs To Access Your Camera'
            });
            if (hasPermissions === PermissionsAndroid.RESULTS.GRANTED) {
                launchImageLibrary({
                    quality: 0.5, mediaType: 'photo'
                },
                    (fileobj) => {
                        if (fileobj.didCancel || fileobj.errorCode) { return ToastAndroid.show('Image Upload Cancelled', ToastAndroid.SHORT) }
                        const img = fileobj.assets[0]
                        const uploadTask = storage().ref().child(`/items/${Date.now()}`).putFile(img.uri)
                        uploadTask.on('state_changed',
                            (snapshot) => {
                                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                if (progress == 100) { console.log('image uploaded via gallery') }
                            },
                            (error) => { Alert.alert(error.message) },
                            () => {
                                uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
                                    setImage(downloadUrl);
                                    uploadFormPhotograph(downloadUrl)
                                })
                            }
                        )

                    }
                )


            }
        }

    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.formTopView}>
            <TouchableOpacity
                    style={[styles.ModelCameraButtons,{alignSelf:'center'}]}
                    onPress={() => {navigation.navigate('Photographs') }}
                >
                    <Text style={styles.modalButtonText}>View Saved PhotoGraphs</Text>
                </TouchableOpacity>
                <Text style={styles.formTitle}>Upload A PhotoGraph</Text>
            </View>
            <View style={{ height: 200, justifyContent: 'flex-start' }}>
                <Text style={styles.boldLabel}>Instructions:</Text>


                <Text style={styles.instructionsText}>1.Upload Only One PhotoGraph Per Phase</Text>
                <Text style={styles.instructionsText}>2.Upload Only A Final PhotoGraph</Text>
                <Text style={styles.instructionsText}>3.Once Uploaded You Can't Change or Modify Photograph</Text>



            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', margin: 5, alignSelf: 'center' }}>
                <TouchableOpacity
                    style={styles.ModelCameraButtons}
                    onPress={() => { uploadViaGallery() }}
                >
                    <Text style={styles.modalButtonText}>Upload An Image From Gallery</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.ModelCameraButtons}
                    onPress={() => { uploadViaCamera() }}
                >
                    <Text style={styles.modalButtonText}>Upload An Image From Camera</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity
                    style={styles.ImageCancelButtons}
                    onPress={() => { navigation.navigate('PlantStages') }}>
                    <Text style={styles.modalButtonText}>Not Now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.ImageCancelButtons}
                    onPress={() => { navigation.goBack() }}>
                    <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
            
            <Text style={styles.boldLabel}>Press Not Now If You Are Not Sure </Text>
        </View>
    )
}
export default UploadImage