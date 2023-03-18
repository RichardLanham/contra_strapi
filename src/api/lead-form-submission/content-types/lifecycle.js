module.exports = {
  async afterCreate(event, data) {
    // Connected to "Save" button in admin panel
    const { result } = event;
    console.log("AFTER CREATE DID SOMETHING");
    if (!data.uuid) {
      data.uuid = uuid();
    }
    try {
      await strapi.plugins["email"].services.email.send({
        to: "dancers@contranooga.us",
        from: "dancers@contranooga.us", // e.g. single sender verification in SendGrid
        cc: "richard.lanham@gmail.com",
        replyTo: "dancers@contranooga.us",
        subject: "The Strapi Email plugin worked successfully",
        template_id: "d-547dcae92cb04ca1a3234fe6b5140bd8",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
