import React from "react";
import { User } from "../../assign";
import { useAppSelector } from "../../store/store";
import { selectUser } from "../../store/userSlice";

const ContentRoomChat = () => {
  const user = useAppSelector(selectUser);
  const { displayName, email, uid, photoURL }: User = user;

  return (
    <div>
      <h1>{displayName}</h1>
      <h2>email: {email}</h2>
      <h3>uid: {uid}</h3>
      <img src={photoURL ? photoURL : undefined} alt="avatar" />
    </div>
  );
};

export default ContentRoomChat;
