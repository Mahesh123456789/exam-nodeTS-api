
import http from "http";
import dotenv from "dotenv";
import app from "./app";
import { Server as IOServer } from "socket.io";
import { initSocket } from "./sockets/init.socket";
import config from "./config";

dotenv.config();

const PORT = config.PORT || process.env.PORT || 5000;
const httpServer = http.createServer(app);

const io = new IOServer(httpServer, {
  cors: { origin: "*" },
  path: config.SOCKET_PATH || "/socket.io"
});

initSocket(io);

httpServer.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
