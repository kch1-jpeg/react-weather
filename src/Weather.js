import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`weather in berlin is ${response.data.temperature.current}`);
  }
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=berlin&key=b89oa74t3f2022fff569a253b5f033b0";
  axios.get(apiUrl).then(handleResponse);
  return <h2>hello</h2>;
}
