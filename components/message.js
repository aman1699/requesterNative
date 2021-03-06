import React,{useState} from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
function Message(props) {
  const [message, setMessage] = useState("");
  const messageChange = (val) => {
    setMessage(val)
  }
  const send = async () => {
    try {
      const res = await axios.post("http://192.168.1.100:2000/api/message", {
        requestedBy: props.route.params.p3,
        requestedTo: props.route.params.p1,
        Message: message
      })
      if (res.status === 200) {
        props.navigation.navigate('Status', {
          p4:props.route.params.p3
        })
      }
    } catch (err) {
      console.log(err);
    }
 }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", margin: 70 }}>
        <AntDesign name="user" size={60} color="black" />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 30, marginLeft: 10 }}>
            {props.route.params.p1}
          </Text>
          <Text style={{ fontSize: 20, marginLeft: 10 }}>
            {props.route.params.p2}
          </Text>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 0.8,
          borderBottomColor: "#009387",
          marginBottom: 19,
          marginLeft: 20,
          marginRight: 20,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#E2E5DE",
          borderRadius: 20,
          justifyContent: "space-between",
          height: 200,
          paddingLeft: 20,
          marginLeft: 20,
          marginRight: 20,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Type your Message here"
          placeholderTextColor="black"
          style={styles.textInput}
          multiline={true}
          autoCapitalize="none"
          onChangeText={(val) => messageChange(val)}
        />
      </View>
      <View
        style={{
          backgroundColor: "#009387",
          borderRadius: 10,
          margin: 40,
        }}
      >
        <TouchableOpacity onPress={()=>send()}>
          <Text
            style={{
              color: "#fff",
              padding: 10,
              marginLeft: 130,
              fontSize: 20,
            }}
          >
            SEND
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 10,
    marginRight: 15,

    color: "#05375a",
    marginTop: Platform.OS === "ios" ? 0 : -5,
  },
});

export default Message;
