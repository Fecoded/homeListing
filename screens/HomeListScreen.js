import React, { useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Card from "../components/Card";
import { FloatingAction } from "react-native-floating-action";

import { useDispatch, useSelector } from "react-redux";
import * as houseAction from "../redux/action/houseAction";

const HomeListScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { houses } = useSelector((state) => state.house);

  useEffect(() => {
    dispatch(houseAction.fetchHouses());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={houses}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Card navigation={navigation} item={item} />}
      />

      <FloatingAction
        position="right"
        animated={false}
        showBackground={false}
        onPressMain={() => navigation.navigate("AddHome")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeListScreen;
