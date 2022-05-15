import { useEffect } from "react";
import { useEvent } from "./useEvent";
import { io } from "socket.io-client";

function createSocket(url: string) {
  return io(url);
}

export const useRoom = (room: string, events: {}) => {
  const onConnected = useEvent(events.onConnected);
  const onMessage = useEvent(events.onMessage);

  useEffect(() => {
    const socket = createSocket(room);
    socket.on("connected", onConnected);
    socket.on("message", onMessage);
    socket.connect();
    return () => socket.close();
  }, [room]); // 只有当房间号改变时才会销毁socket。重新创建socket并连接
};
