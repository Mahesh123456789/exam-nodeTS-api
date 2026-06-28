
import { Server } from "socket.io";
import { setIO } from "./broadcast";

export const initSocket = (io: Server) => {
  setIO(io);
  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("join", (room) => {
      socket.join(room);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });
};
