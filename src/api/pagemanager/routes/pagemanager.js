module.exports = {
  routes: [
    {
      method: "GET",
      path: "/pagemanager",
      handler: "pagemanager.findAll",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/pagemanager/one",
      handler: "pagemanager.findOne",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
