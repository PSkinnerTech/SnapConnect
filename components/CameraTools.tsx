import { FlashMode } from "expo-camera";
import { View } from "react-native";
import IconButton from "./IconButton";

interface CameraToolsProps {
  cameraZoom: number;
  cameraFlash: FlashMode;
  cameraTorch: boolean;
  setCameraZoom: React.Dispatch<React.SetStateAction<number>>;
  setCameraFacing: React.Dispatch<React.SetStateAction<"front" | "back">>;
  setCameraTorch: React.Dispatch<React.SetStateAction<boolean>>;
  setCameraFlash: React.Dispatch<React.SetStateAction<FlashMode>>;
}
export default function CameraTools({
  cameraZoom,
  cameraFlash,
  cameraTorch,
  setCameraZoom,
  setCameraFacing,
  setCameraTorch,
  setCameraFlash,
}: CameraToolsProps) {
  return (
    <View
      style={{
        position: "absolute",
        right: 6,
        zIndex: 1,
        gap: 16,
        paddingTop: 70,
        paddingBottom: 20,
      }}
    >
      <IconButton
        onPress={() => setCameraTorch((prevValue) => !prevValue)}
        iosName={
          cameraTorch ? "flashlight.off.circle" : "flashlight.slash.circle"
        }
        androidName={cameraTorch ? "flash" : "flash-off"}
      />
      <IconButton
        onPress={() =>
          setCameraFacing((prevValue) =>
            prevValue === "back" ? "front" : "back"
          )
        }
        iosName={"arrow.triangle.2.circlepath.camera"}
        androidName="close"
        width={25}
        height={21}
      />
      <IconButton
        onPress={() =>
          setCameraFlash((prevValue) => (prevValue === "off" ? "on" : "off"))
        }
        iosName={cameraFlash === "on" ? "bolt.circle" : "bolt.slash.circle"}
        androidName={cameraFlash === "on" ? "flash" : "flash-off"}
      />
      <IconButton
        onPress={() => {}}
        iosName={"speaker"}
        // iosName={"speaker.slash"}
        androidName="volume-high"
      />
      <IconButton
        onPress={() => {
          // increment by .01
          if (cameraZoom < 1) {
            setCameraZoom((prevValue) => prevValue + 0.01);
          }
        }}
        iosName={"plus.magnifyingglass"}
        androidName="close"
      />
      <IconButton
        onPress={() => {
          // decrement by .01
          if (cameraZoom > 0) {
            setCameraZoom((prevValue) => prevValue - 0.01);
          }
        }}
        iosName={"minus.magnifyingglass"}
        androidName="close"
      />
    </View>
  );
}