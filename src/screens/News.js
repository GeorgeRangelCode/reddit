import React, { useState, useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { getNewsAPI } from "../api/reddit";

const News = () => {
  useEffect(() => {
    (async () => {
      await loadNews();
    })();
  }, []);

  const loadNews = async () => {
    try {
      const response = await getNewsAPI();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>News</Text>
    </SafeAreaView>
  );
};

export default News;
