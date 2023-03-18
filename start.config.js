module.exports = {
  apps : [{
    name   : "app",
    script : "npm",
    args : "run develop",
    env_production: {
       NODE_TLS_REJECT_UNAUTHORIZED: "0",
       NODE_ENV: "production"
    },
    env_development: {
       NODE_TLS_REJECT_UNAUTHORIZED: "0",
       NODE_ENV: "development"
    }
  }]
}
