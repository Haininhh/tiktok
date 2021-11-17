import {
  collection,
  onSnapshot,
  query,
  where,
  WhereFilterOp,
} from "firebase/firestore";
import React, { useEffect, useMemo } from "react";
import { Room } from "../../assign";
import { db } from "../../config/FirebaseConfig";
import { setRoomList } from "../../store/roomListSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { selectUser } from "../../store/userSlice";

interface Condition {
  fieldName: string;
  opStr: WhereFilterOp;
  value: string | null;
}

const ListRoomChat = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const { uid } = user;

  const conditionRef: Condition | null = useMemo(() => {
    return {
      fieldName: "members",
      opStr: "array-contains",
      value: uid,
    };
  }, [uid]);

  useEffect(() => {
    if (!conditionRef) return;
    const getRooms = async (condition: Condition) => {
      const collectionRef = query(
        collection(db, "rooms"),
        where(condition.fieldName, condition.opStr, condition.value)
      );
      const q = query(collectionRef);
      const unsubcribe = onSnapshot(q, (querySnapshot) => {
        // const items: any[] = [];
        querySnapshot.forEach((doc) => {
          //   const document: Room = doc.data();
          //   document.id = doc.id;
          //   items.push(document);
          const { name, description, members } = doc.data() as Room;
          const id = doc.id;

          dispatch(setRoomList({ name, description, members, id }));
        });
      });
      return () => {
        unsubcribe();
      };
    };
    getRooms(conditionRef);
  }, [conditionRef, dispatch]);

  return <div>ListRoom:</div>;
};

export default ListRoomChat;
