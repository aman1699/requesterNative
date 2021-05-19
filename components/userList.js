import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Dimensions,
  Platform,
  TouchableOpacity,
  Button,
  StatusBar,
  Animated,
  Alert,
} from "react-native";
import {
  AntDesign,
  MaterialIcons,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { Appbar, Card, Title, Paragraph } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { apisAreAvailable } from "expo";
import axios from "axios";

/*const use = [
  {
    name: "Aman",
    address: "Bangalore,India",
  },
  {
    name: "Sidhu",
    address: "Champasari,Vidya Nagar",
  },
  {
    name: "jeet",
    address: "Milan More",
  },
  {
    name: "Ama",
    address: "Bangalore,India",
  },
  {
    name: "Moni",
    address: "Mysore,India",
  },
  {
    name: "Rini",
    address: "Bangalore,India",
  },
  {
    name: "Faraz",
    address: "Bangalore,India",
  },
  {
    name: "Fara",
    address: "Bangalore,India",
  },
];*/
let newstate = [];
function Home(props) {
  const [search, setSearch] = useState("");
  const [use, setuser] = useState([]);

  useEffect(() => {
    users();
    
  }, []);

  const users = async () => {
    const res = await axios.get("http://192.168.1.100:2000/api/users");
    console.log(res.data);
    let newstate = [];
    for (var i = 0; i < res.data.length; i++) {
      newstate.push({
        username: res.data[i].username,
        address: res.data[i].address,
      });
    }
    setuser(newstate);
  };

  const filtereduser = use.filter((user) => {
    return user.username.toLowerCase().includes(search);
  });

  const handleChange = (val) => {
    setSearch(val);
  };
  const aa = (abd) => {
    console.log(props.route.params.id);
    props.navigation.navigate("Message", {
      p1: abd.username,
      p2: abd.address,
      p3: props.route.params.id,
    });
    //  console.log(abd)
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <Appbar.Header style={{ backgroundColor: "#009387" }}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              marginLeft: 300,
              width: 110,
              height: 30,
              paddingLeft: 10,
            }}
          >
            <MaterialIcons
              name="logout"
              size={22}
              color="black"
              style={{ marginTop: 4 }}
            />
            <Text style={{ fontSize: 18, marginTop: 3, marginLeft: 2 }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </Appbar.Header>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#E2E5DE",
          borderRadius: 20,
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 6,
          marginVertical: 10,
          alignItems: "center",
        }}
      >
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
          placeholder="search"
          placeholderTextColor="black"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={(val) => handleChange(val)}
        />
      </View>
      <ScrollView>
        <View style={{ margin: 10 }}>
          {filtereduser.map((abd) => (
            <Card
              key={abd.username}
              onPress={() => aa(abd)}
              style={{ elevation: 6, paddingBottom: 30, marginTop: 10 }}
            >
              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="user"
                  size={35}
                  color="black"
                  style={{ marginTop: 10 }}
                />
                <Card.Content>
                  <Title>{abd.username}</Title>
                  <Paragraph>{abd.address}</Paragraph>
                </Card.Content>
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
    backgroundColor: "#fff",
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    marginTop: Platform.OS === "ios" ? 0 : -5,
  },
});
export default Home;
