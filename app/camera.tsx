import { CameraMode, CameraView, FlashMode, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import BottomRowTools from "@/components/BottomRowTools";
import CameraTools from "@/components/CameraTools";
import MainRowActions from "@/components/MainRowActions";
import PictureView from "@/components/PicturePreview";
import QRCodeButton from "@/components/QrCodeButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import VideoViewComponent from "@/components/VideoView";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraMode, setCameraMode] = useState<CameraMode>("picture");
  const [cameraFacing, setCameraFacing] = useState<"front" | "back">("back");
  const [cameraFlash, setCameraFlash] = useState<FlashMode>("off");
  const [cameraTorch, setCameraTorch] = useState(false);
  const [cameraZoom, setCameraZoom] = useState(0);
  const [picture, setPicture] = useState("");
  const [video, setVideo] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef<CameraView>(null);

  async function takePicture() {
    if (cameraMode === "picture" && cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.8,
          base64: false,
        });
        if (photo) {
          setPicture(photo.uri);
        }
      } catch (error) {
        Alert.alert("Error", "Failed to take picture");
        console.error("Camera error:", error);
      }
    } else {
      // Video recording logic would go here
      if (isRecording) {
        setIsRecording(false);
        Alert.alert("🎥", "Video recording stopped!");
      } else {
        setIsRecording(true);
        Alert.alert("🎥", "Video recording started!");
      }
    }
  }

  if (!permission) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Loading camera permissions...</ThemedText>
      </ThemedView>
    );
  }

  if (!permission.granted) {
    return (
      <ThemedView style={styles.container}>
        <ThemedView style={styles.permissionContainer}>
          <ThemedText style={styles.message}>
            📸 Camera access is needed to take photos and videos
          </ThemedText>
          <ThemedText 
            style={styles.button} 
            onPress={requestPermission}
          >
            Grant Permission
          </ThemedText>
        </ThemedView>
      </ThemedView>
    );
  }

  if (picture) {
    return <PictureView picture={picture} setPicture={setPicture} />;
  }

  if (video) {
    return <VideoViewComponent video={video} setVideo={setVideo} />;
  }

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing={cameraFacing}
        flash={cameraFlash}
        zoom={cameraZoom}
        mode={cameraMode}
        enableTorch={cameraTorch}
      >
        <CameraTools
          cameraZoom={cameraZoom}
          cameraFlash={cameraFlash}
          cameraTorch={cameraTorch}
          setCameraZoom={setCameraZoom}
          setCameraFacing={setCameraFacing}
          setCameraTorch={setCameraTorch}
          setCameraFlash={setCameraFlash}
        />
        
        <MainRowActions
          handleTakePicture={takePicture}
          cameraMode={cameraMode}
          isRecording={isRecording}
        />
        
        <BottomRowTools 
          cameraMode={cameraMode} 
          setCameraMode={setCameraMode} 
        />
        
        <QRCodeButton handleOpenQRCode={() => Alert.alert("QR", "QR Code scanner coming soon!")} />
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    padding: 15,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
    textAlign: 'center',
    minWidth: 150,
  },
}); 