
import dev from "./config.dev";
import prod from "./config.prod";

const env = process.env.NODE_ENV || "development";
const cfg = env === "production" ? prod : dev;
export default cfg;
