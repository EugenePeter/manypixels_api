"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var graphql_playground_middleware_express_1 = __importDefault(require("graphql-playground-middleware-express"));
var domains_1 = require("./domains");
dotenv_1.default.config();
var app = express_1.default();
app.get("/", graphql_playground_middleware_express_1.default({ endpoint: "/graphql" }));
app.listen(process.env.PORT, function () {
    console.log("appsss is running on PORT: " + process.env.PORT);
    domains_1.initializeApolloServer(app);
});
//# sourceMappingURL=app.js.map