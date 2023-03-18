const crypto = require("crypto");

module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_3233") || crypto.randomBytes(16).toString("base64"),
    },
  },
  sitemap: {
    enabled: true,
    config: {
      autoGenerate: true,
      allowedFields: ["id", "uid", "slug"],
      excludedTypes: [],
    },
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey:
          "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",
      },
      settings: {
        defaultFrom: "dancers@contranooga.us",
        defaultReplyTo: "dancers@contranooga.us",
      },
    },
  },
});
