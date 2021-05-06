import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Share,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import {
  AntDesign,
  MaterialIcons,
  Feather,
    Fontisto,
  Entypo,FontAwesome5
} from "@expo/vector-icons";

const use = [
  {
    name: "Aman",
    message1:
      "Hey wish u very happy and blessed birthday may god bless u and may u acheieve all ur dreams",
    uri: "kk",
  },
  {
    name: "Sidhu",
    message1:
      "Hey wish u very happy and blessed birthday may god bless u and may u acheieve all ur dreams",
  },
  {
    name: "jeet",
    message1:
      "Hey wish u very happy and blessed birthday may god bless u and may u acheieve all ur dreams",
    uri: "kk",
  },

  {
    name: "Ama",
    message1:
      "Hey wish u very happy and blessed birthday may god bless u and may u acheieve all ur dreams",
  },
  {
    name: "Moni",
    message1:
      "Hey wish u very happy and blessed birthday may god bless u and may u acheieve all ur dreams",
  },
  {
    name: "Rini",
    message1:
      "Hey wish u very happy and blessed birthday may god bless u and may u acheieve all ur dreams",
  },
  {
    name: "Faraz",
    message1:
      "Hey wish u very happy and blessed birthday may god bless u and may u acheieve all ur dreams",
  },
  {
    name: "Fara",
    message1:
      "Hey wish u very happy and blessed birthday may god bless u and may u acheieve all ur dreams",
  },
];
function Status() {
  const so = async () => {
    const shareOption = {
      message: "Hi How r you",
    };
    try {
      const shareResponse = await Share.share(shareOption);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ margin: 10 }}>
          {use.map((abd) => (
            <Card
              key={abd.name}
              style={{
                elevation: 6,
                paddingBottom: 30,
                marginTop: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="user"
                  size={35}
                  color="black"
                  style={{ marginTop: 10 }}
                />
                <View style={{ flexDirection: "column" }}>
                  <Card.Content style={{ width: 100 }}>
                    <Title style={{ marginTop: 10 }}>{abd.name}</Title>
                          </Card.Content>
                          <FontAwesome5 name="file-video" size={30} color="#009387" style={{ marginTop: 20, marginLeft: 25 }} />
                          <Text style={{marginLeft:15,marginTop:5}}>Video</Text>
                  <TouchableOpacity onPress={() => so()}>
                    <Fontisto
                      name="share-a"
                      size={20}
                      color="#009387"
                      style={{
                        marginTop: 10,
                        borderWidth: 0.1,
                        paddingLeft: 25,
                        paddingRight: 40,
                        width: 100,
                      }}
                    />
                  </TouchableOpacity>
                  <Text style={{ marginTop:10, fontSize: 15, marginLeft: 15 }}>
                    Share
                  </Text>
                </View>

                <View style={{ flexDirection: "column" }}>
                  <Card.Content>
                    <View
                      style={{
                        margin: 5,
                        paddingRight: 150,
                        justifyContent: "center",
                        paddingLeft: 10,
                      }}
                    >
                      <Paragraph>Requested Date:12/11/20</Paragraph>
                      <Paragraph>Responded Date:12/11/20</Paragraph>

                      <Title style={{ fontSize: 15, marginTop: 10 }}>
                        {abd.message1}
                      </Title>
                    </View>
                  </Card.Content>
                </View>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Status;
