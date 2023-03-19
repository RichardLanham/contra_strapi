const crypto = require("crypto");

module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret:
        env("ADMIN_JWT_SECRET") || crypto.randomBytes(16).toString("base64"),
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
        template_id: env("SENDGRIDTEMPLATEID"),
        apiKey: env("SENDGRID"),
      },
      settings: {
        defaultFrom: "dancers@contranooga.us",
        defaultReplyTo: "dancers@contranooga.us",
      },
    },
  },
});
