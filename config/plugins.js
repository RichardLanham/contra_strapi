const crypto = require("crypto");
require("dotenv").config();
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID);
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
        template_id: "547dcae92cb04ca1a3234fe6b5140bd8",
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
