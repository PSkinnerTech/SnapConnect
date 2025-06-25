import { CameraMode } from "expo-camera";
import { Link } from "expo-router";
import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import IconButton from "./IconButton";
import { ThemedText } from "./ThemedText";

interface BottomRowToolsProps {
  cameraMode: CameraMode;
  setCameraMode: React.Dispatch<React.SetStateAction<CameraMode>>;
}
export default function BottomRowTools({
  cameraMode,
  setCameraMode,
}: BottomRowToolsProps) {
  return (
    <View style={[styles.bottomContainer, styles.directionRowItemsCenter]}>
      <Link href={"/media-library"} asChild>
        <IconButton androidName="library" iosName="photo.stack" />
      </Link>
      <View style={styles.directionRowItemsCenter}>
        <TouchableOpacity onPress={() => setCameraMode("picture")}>
          <ThemedText
            style={{
              fontWeight: cameraMode === "picture" ? "bold" : "100",
            }}
          >
            Snap
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCameraMode("video")}>
          <ThemedText
            style={{
              fontWeight: cameraMode === "video" ? "bold" : "100",
            }}
          >
            Video
          </ThemedText>
        </TouchableOpacity>
      </View>
      <Link href={"/media-library"} asChild>
        <IconButton androidName="add" iosName="magnifyingglass" />
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  directionRowItemsCenter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  bottomContainer: {
    width: "100%",
    justifyContent: "space-between",
    position: "absolute",
    alignSelf: "center",
    bottom: 20,
    paddingHorizontal: 60,
  },
});