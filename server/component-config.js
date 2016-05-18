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

if (process.env.HOST) {
  config['loopback-component-jsonapi'].host = process.env.HOST;
}

module.exports = config;
