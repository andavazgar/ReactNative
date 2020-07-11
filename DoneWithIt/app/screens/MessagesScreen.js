import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import { ListItem, ListItemDeleteAction, ListItemSeparator } from "../components/lists";
import icons from "../config/icons";
import useApi from "../hooks/useApi";
import messagesApi from "../api/messages";
import AppText from "../components/AppText";

function MessagesList(props) {
  const [messages, setMessages] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [id, setId] = useState(3);
  const getMessagesApi = useApi(messagesApi.get);
  const deleteMessagesApi = useApi(messagesApi.delete);

  useEffect(() => {
    const response = getMessagesApi.request();
  }, []);

  const handleDelete = (message) => {
    deleteMessagesApi.request(message.id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={!getMessagesApi.error ? getMessagesApi.data : []}
        keyExtractor={(message) => message.id.toString()}
        ListEmptyComponent={
          <AppText>
            {getMessagesApi.error ? "An unexpected error occurred" : "No messages!"}
          </AppText>
        }
        renderItem={({ item }) => (
          <ListItem
            style={styles.listItem}
            title={item.fromUser.name}
            subTitle={item.content}
            // image={item.image}
            // rightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
            RightIndicatorIcon={icons.chevronRight}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={getMessagesApi.loading}
        onRefresh={() => getMessagesApi.request()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  listItem: {
    paddingVertical: 10,
  },
});

export default MessagesList;
