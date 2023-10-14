module.exports = {
  async afterCreate(event, data) {
    const { result } = event;
    console.log("after EMAIL HISTORy");
    console.log(result.template);
    // "d-2bee3b96bc8b42ada98622afe70fb820",
    try {
      await strapi.plugins["email"].services.email
        .send({
          to: result.email,
          template_id: result.template,
          dynamic_template_data: {
            email: result.email,
            name: result.name,
            id: result.leadFormId,
            info: result.info,
            day: result.day,
          },
        })
        .then((res) => {
          const entry = strapi.entityService.update(
            "api::lead-form-submission.lead-form-submission",
            result.leadFormId,
            {
              data: {
                last_email_date: new Date().toISOString(),
              },
            }
          );
        });
    } catch (err) {
      console.log(err);
    }
  },
};
