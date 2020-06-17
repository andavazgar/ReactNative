import React, { useState } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";

import Screen from "../components/Screen";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import icons from "../config/icons";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/andavazgar.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/andavazgar.jpg"),
  },
];

function MessagesList(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const [id, setId] = useState(3);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("tapped")}
            rightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            RightIndicatorIcon={icons.chevronRight}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            ...messages,
            {
              id,
              title: `T${id}`,
              description: `D${id}`,
              image: require("../assets/andavazgar.jpg"),
            },
          ]);
          setId(id + 1);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default MessagesList;
