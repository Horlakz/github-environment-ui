import Client from "../client";

const client = new Client("https://api.github.com/repos/hndwok/hndwok-fe-web");

export default class Contact {
  getEnvironments() {
    return client.send_request({
      method: "GET",
      url: "/deployments",
      headers: {
        Authorization: "token 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",
      },
    });
  }

  changeStatus(environmentId, state) {
    return client.send_request({
      method: "POST",
      url: `/deployments/${environmentId}/statuses`,
      headers: {
        Authorization: "token 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",
      },
      data: state,
    });
  }
  deleteEnvironment(environmentId) {
    return client.send_request({
      method: "DELETE",
      url: `/deployments/${environmentId}/`,
      headers: {
        Authorization: "token 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",
      },
    });
  }

  getEnvironmentsStatus(environmentId) {
    return client.send_request({
      method: "GET",
      url: `/deployments/${environmentId}/statuses`,
      headers: {
        Authorization: "token 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",
      },
    });
  }
}
