import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { CATEGORIES } from "../assets/constants/data";
import { useNavigation } from "@react-navigation/native";

const ImageViewerScreen = ({ route }) => {
  const { productId, categoryId } = route.params;
  const [imgUrl, setImgUrl] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const category = CATEGORIES.find((cat) => cat.id === categoryId);
    const product = category?.products.find((p) => p.id === productId);
    if (product) {
      setImgUrl(product.ficheImg);
    }
  }, [productId, categoryId]);

  const scale = useSharedValue(1);
  const offsetScale = useSharedValue(1);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  // Pinch gesture for zooming
  const pinchGesture = Gesture.Pinch()
    .onBegin(() => {
      offsetScale.value = scale.value;
    })
    .onUpdate((e) => {
      scale.value = offsetScale.value * e.scale;

      const dx = e.focalX - e.centerX;
      const dy = e.focalY - e.centerY;

      translateX.value = offsetX.value + dx * (scale.value - 1);
      translateY.value = offsetY.value + dy * (scale.value - 1);
    })
    .onEnd(() => {
      offsetX.value = translateX.value;
      offsetY.value = translateY.value;
      offsetScale.value = scale.value;
    });

  // Pan gesture for dragging
  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = offsetX.value + e.translationX;
      translateY.value = offsetY.value + e.translationY;
    })
    .onEnd(() => {
      offsetX.value = translateX.value;
      offsetY.value = translateY.value;
    });

  // Combine gestures to support both simultaneously
  const composedGesture = Gesture.Simultaneous(pinchGesture, panGesture);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });

  if (!imgUrl) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        {/* Back button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <GestureDetector gesture={composedGesture}>
          <Animated.Image
            source={imgUrl}
            style={[styles.image, animatedStyle]}
            resizeMode="contain"
          />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "90%",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 8,
    borderRadius: 8,
  },
  backText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default ImageViewerScreen;
