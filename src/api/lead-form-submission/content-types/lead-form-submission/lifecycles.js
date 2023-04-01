module.exports = {
  async afterCreate(event, data) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: result.email,
        template_id: "d-547dcae92cb04ca1a3234fe6b5140bd8",
        dynamic_template_data: {
          email: result.email,
          name: result.name,
          id: result.id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
