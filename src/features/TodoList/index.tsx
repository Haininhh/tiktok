import React from "react";
import { selectRoomList } from "../../store/roomListSlice";
import { useAppSelector } from "../../store/store";

const TodoList = () => {
  const roomList = useAppSelector(selectRoomList);
  const { rooms } = roomList;
  console.log("room: ", roomList);

  return (
    <div>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
