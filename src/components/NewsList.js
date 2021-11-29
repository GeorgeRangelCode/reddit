import React from "react";
import { FlatList } from "react-native";
import NewItem from "./NewItem";

const NewsList = ({ news }) => {
  const data = news?.data?.children;

  return (
    <FlatList keyExtractor={item => `${item.data.id}`} data={data} renderItem={({ item }) => <NewItem item={item} />} />
  );
};

export default NewsList;
