"use strict";

module.exports = {
  async findAll(ctx, next) {
    try {
      const data = await strapi
        .service("api::pagemanager.pagemanager")
        .pagesReport();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Page report controller error", { moreDetails: err });
    }
  },
  async findOne(ctx, next) {
    console.log("hey");
    try {
      const data = await strapi
        .service("api::pagemanager.pagemanager")
        .oneReport();
      ctx.body = data;
    } catch (err) {
      ctx.badRequest("Page report controller error", { moreDetails: err });
    }
  },
};
