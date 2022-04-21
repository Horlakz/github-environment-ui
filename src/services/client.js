import axios from "axios";

export default class Client {
  constructor(baseURL) {
    axios.defaults.baseURL = baseURL;
    axios.defaults.xsrfHeaderName = "X-CSRFToken";
    axios.defaults.responseEncoding = "utf8";

    this.api = axios.create({});
  }

  send_request(...props) {
    return this.api(...props);
  }
}
