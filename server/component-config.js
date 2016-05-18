var config = {
  "loopback-component-jsonapi": {
    "exclude": [
      {
        "model": "end-user",
        "methods": [
          "login"
        ]
      }
    ]
  },
  "loopback-component-explorer": {
    "mountPath": "/explorer"
  }
};

if (process.env.API_URL) {
  config['loopback-component-jsonapi'].host = process.env.API_URL;
}

module.exports = config;
