"use strict";

module.exports = {
  async findAll(ctx, next) {
    try {
      const data = await strapi
        .service("api::pages-report.pages-report")
        .pagesReport();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Page report controller error", { moreDetails: err });
    }
  },
};
