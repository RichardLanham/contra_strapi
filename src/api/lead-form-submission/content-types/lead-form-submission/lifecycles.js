module.exports = {
  async afterCreate(event, data) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: result.email,
        template_id: "d-547dcae92cb04ca1a3234fe6b5140bd8",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
