import React from "react";
import { Room } from "../../assign";
import { selectRoomList } from "../../store/roomListSlice";
import { useAppSelector } from "../../store/store";
import Members from "../Members";

const TodoList = () => {
  const roomList = useAppSelector(selectRoomList);
  // console.log("room: ", roomList);
  // const roomId = rooms.map(room => room.id);

  const RemoveDuplicates = (array: Room[], key: string) => {
    return array.reduce((arr: Room[], item: any) => {
      const removed = arr.filter((i: any) => i[key] !== item[key]);
      return [...removed, item];
    }, []);
  };
  const rooms = RemoveDuplicates(roomList.rooms, 'id')
  // console.log(rooms);
  
  
  
  return (
    <div>
      <ul>
        {rooms.map((room: Room) => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
      <Members />
    </div>
  );
};

export default TodoList;
