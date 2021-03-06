import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Platform,
  TouchableOpacity,
  Button,
  StatusBar,
  Animated,
  Alert
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import Axios from "axios";


function Signup({ navigation }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
    checkInput: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        checkInput: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        checkInput: false,
      });
    }
  };

  const handlePassword = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const updateSecure = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const user = (val) => {
    setData({
      ...data,
      username: val,
    });
  };
  const signup = async () => {
    try {
      const res = await Axios.post("http://192.168.1.102:2000/api/signup", {
        username: data.username,
        email: data.email,
        password: data.password
      })
      console.log(res)
      if (res.status === 200) {
        alert('user registered successfully', [{ text: 'Ok' }]);
      } 
    }
    catch (err) {
      alert('user already registered or empty fields');
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={{ fontSize: 30, color: "#fff", marginRight: 200 }}>
          Register
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={{ marginLeft: 5 }}>Username</Text>
        <View style={styles.action}>
          <AntDesign name="user" size={24} color="black" />
          <TextInput
            placeholder="Username"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => user(val)}
          />
        </View>
        <Text style={{ marginLeft: 5, marginTop: 35 }}>Email</Text>
        <View style={styles.action}>
          <AntDesign name="user" size={24} color="black" />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.checkInput ? (
            <Feather name="check-circle" color="green" size={20} />
          ) : null}
        </View>
        <Text style={{ marginTop: 35 }}>Password</Text>
        <View style={styles.action}>
          <AntDesign name="lock" size={24} color="black" />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePassword(val)}
            secureTextEntry={data.secureTextEntry ? true : false}
          />
          <TouchableOpacity onPress={updateSecure}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#009387",
            marginTop: 50,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity onPress={()=>signup()}>
            <Text
              style={{
                color: "#fff",
                padding: 10,
                marginLeft: 130,
                fontSize: 20,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            marginTop: 50,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#009387",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{
                color: "#009387",
                padding: 10,
                marginLeft: 130,
                fontSize: 20,
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },

  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "center",
    marginTop: 70,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
    marginTop: Platform.OS === "ios" ? 0 : -5,
  },
});

export default Signup;
