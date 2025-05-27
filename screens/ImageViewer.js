import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { useNavigation } from "@react-navigation/native";
import { CATEGORIES } from "../assets/constants/data";

const ImageViewerScreen = ({ route }) => {
  const { productId, categoryId } = route.params;
  const [imageUrls, setImageUrls] = useState([]);
  const [initialIndex, setInitialIndex] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const category = CATEGORIES.find((cat) => cat.id === categoryId);
    if (!category) return;

    const images = category.products.map((product) => ({
      url: "",
      props: {
        source: product.ficheImg, // supports require(...) or remote uri
      },
    }));

    const index = category.products.findIndex((p) => p.id === productId);
    setImageUrls(images);
    setInitialIndex(index >= 0 ? index : 0);
  }, [productId, categoryId]);

  if (imageUrls.length === 0) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={styles.flex}>
      {/* Back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <ImageViewer
        imageUrls={imageUrls}
        index={initialIndex}
        backgroundColor="black"
        enableSwipeDown
        onSwipeDown={() => navigation.goBack()}
        loadingRender={() => <ActivityIndicator size="large" color="#fff" />}
        saveToLocalByLongPress={false}
        enablePreload
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1 },
  loading: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
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
