import React from "react";
import { SafeAreaView, View } from "react-native";
import NewsList from "../components/NewsList";
import { useGetNews } from "../hooks/useGetNews";

const News = () => {
  const { news } = useGetNews();

  return <View>{news && <NewsList news={news} />}</View>;
};

export default News;
