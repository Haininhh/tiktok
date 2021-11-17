import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useMemo } from 'react';
import { db } from '../../config/FirebaseConfig';
import memberSlice, { selectMember, setMember } from "../../store/memberSlice";
import { selectRoomList } from '../../store/roomListSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';

const Members = () => {
    const roomList = useAppSelector(selectRoomList);
    // const members = useAppSelector(selectMember);
    // const dispatch = useAppDispatch()
    const { rooms } = roomList;
    // const roomName = rooms.map((room) => room.name)
    // console.log(members);
    

    // const selectedRoom: any = useMemo(
    //     () => rooms.find((room) => room.name === "Hà Nội"),
    //     [rooms]
    //   );
    //   console.log(selectedRoom);
        
    //   useEffect(() => {
    //     const getRooms = async () => {
    //       const q = query(
    //         collection(db, "users"),
    //         where("uid", "in", selectedRoom.members)
    //       );
    //       const unsubscribe = await onSnapshot(q, (querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             const {displayName,email,photoURL,providerId,uid} = doc.data()
    //         //   console.log(doc.data());
    //           dispatch(setMember({displayName,email,photoURL,providerId,uid}))
    //         });
    //       });
    //       return () => {
    //         unsubscribe();
    //       };
    //     };
    //     getRooms();
    //   }, [ dispatch]);
    


    return (
        <div>
            
        </div>
    )
}

export default Members
