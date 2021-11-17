import {
  collection,
  onSnapshot,
  query,
  where
} from "firebase/firestore";
import React, { useEffect } from "react";
import { Room } from "../../assign";
import { db } from "../../config/FirebaseConfig";
import { setRoomList } from "../../store/roomListSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { selectUser } from "../../store/userSlice";

const ListRoomChat = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const { uid } = user;

  useEffect(() => {
    const getRooms = async () => {
      const collectionRef = query(
        collection(db, "rooms"),
        where("members", "array-contains", uid)
      );
      const q = query(collectionRef);
      const unsubcribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { name, description, members } = doc.data() as Room;
          const id = doc.id;
          dispatch(setRoomList({ name, description, members, id }));
        });
      });
      return () => {
        unsubcribe();
      };
    };
    getRooms();
  }, [uid, dispatch]);

  return <div>ListRoom:</div>;
};

export default ListRoomChat;
