import { useContext, useEffect, useState, createContext } from "react";
import { io } from "socket.io-client";
import { useEvent } from "./hooks/useEvent";
import { useRoom } from "./hooks/useRoom";

interface ChatProps {
  selectedRoom: string;
}

const ThemeContext = createContext({});

function createSocket(url: string) {
  return io(url);
}

async function checkedConnection(selectedRoom: string) {}

function playSound() {}

export const Chat = ({ selectedRoom }: ChatProps) => {
  const [muted, setMuted] = useState();
  const theme = useContext(ThemeContext);

  useEffect(() => {
    const socket = createSocket("/chat/" + selectedRoom);
    socket.on("connected", async () => {
      await checkedConnection(selectedRoom);
      console.log(theme, "Connected to" + selectedRoom);
    });
    socket.on("message", (message) => {
      console.log(theme, "New message" + message);
      if (!muted) {
        playSound();
      }
    });
    socket.connect();
    return () => socket.close();
  }, [selectedRoom, theme, muted]);
};

export const Chat1 = ({ selectedRoom }: ChatProps) => {
  const [muted, setMuted] = useState();
  const theme = useContext(ThemeContext);

  const onConnected = useEvent(async (connectedRoom) => {
    await checkedConnection(selectedRoom);
    console.log(theme, "Connected to" + selectedRoom);
  });

  const onMessage = useEvent((message: string) => {
    console.log(theme, "New message" + message);
    if (!muted) {
      playSound();
    }
  });

  useEffect(() => {
    const socket = createSocket("/chat/" + selectedRoom);
    socket.on("connected", onConnected);
    socket.on("message", onMessage);
    socket.connect();
    return () => socket.close();
  }, [selectedRoom]); // 只有当房间号改变时才会销毁socket。重新创建socket并连接
};

export const Chat2 = ({ selectedRoom }: ChatProps) => {
  const [muted, setMuted] = useState();
  const theme = useContext(ThemeContext);
  const onConnected = useEvent(async (connectedRoom) => {
    await checkedConnection(selectedRoom);
    console.log(theme, "Connected to" + selectedRoom);
  });

  const onMessage = useEvent((message: string) => {
    console.log(theme, "New message" + message);
    if (!muted) {
      playSound();
    }
  });

  useRoom(selectedRoom, { onConnected, onMessage });
};
