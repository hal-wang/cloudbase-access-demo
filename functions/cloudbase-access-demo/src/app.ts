import tcb = require("@cloudbase/node-sdk");

export const app = tcb.init({
    env: "env-caafniqh",
});

export const db = function () {
    return app.database();
};
