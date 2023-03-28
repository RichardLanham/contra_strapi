module.exports = {
  async afterCreate(event) {
    //const { result } = event;
    //console.log(result);
    // strapi.log.info(result);
    try {
      await strapi.plugins["email"].services.email.send({
        to: "richard.lanham@gmail.com",
        cc: "richard.lanham@gmail.com",
        from: "dancers@contranooga.us", // e.g. single sender verification in SendGrid
        replyTo: "dancers@contranooga.us",
        subject: "The Strapi Email plugin worked successfully",
        template_id: "d-547dcae92cb04ca1a3234fe6b5140bd8",
      });
    } catch (err) {
      // console.log(err);
      // strapi.log.info(err);
    }
  },
};
