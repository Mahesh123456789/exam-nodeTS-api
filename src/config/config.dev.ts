
export default {
  PORT: 5000,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/questionbank_dev",
  JWT_SECRET: process.env.JWT_SECRET || "dev_secret",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1h",
  SOCKET_PATH: "/socket.io"
};
