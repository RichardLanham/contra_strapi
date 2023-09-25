const crypto = require("crypto");
require("dotenv").config();
// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(process.env.SENDGRID);
module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      apolloServer: {
        introspection: true,
      },
    },
  },
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
        template_id: env("SENDGRIDTEMPLATE"),
        apiKey: env("SENDGRID"),
      },
      settings: {
        defaultFrom: "dancers@contranooga.us",
        defaultReplyTo: "dancers@contranooga.us",
      },
    },
  },
});
