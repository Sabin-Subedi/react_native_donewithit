import React, { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem/ListItem";
import ListItemDeleteAction from "../components/ListItem/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItem/ListItemSeparator";

import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Mosh",
    body: "Hey! Is this item still Available?",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Hello",
    body: "I am interested in this item. Can you please contact me?",
    image: require("../assets/mosh.jpg"),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete message
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        key={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subTitle={item.body}
            onPress={() => console.log(item.body)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([initialMessages[0]]);
        }}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

export default MessagesScreen;
