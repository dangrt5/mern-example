import React, {Component} from "react";
import axios from "axios";

class Test extends Component {
  async componentDidMount() {
    const user = {
      email: "test@mail.com",
      password: "asdffjsdaklqw1"
    }

    const resp = await axios.post("/api/login", user);

    console.log("Login response", resp);

    // const resp = await axios.get("/api/test");
    // console.log("Test Response", resp);
    //
    // const user = await axios.get("/api/user");
    // console.log("User Data:", user);
  }

  render() {
    return <h1>API Testing Component</h1>
  };
};

export default Test;
