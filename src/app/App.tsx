import { onAuthStateChanged } from '@firebase/auth';
import React, { useEffect } from 'react';
import { User } from '../assign';
import { auth } from '../config/FirebaseConfig';
import ContentRoomChat from '../features/ContentRoomChat';
// import { selectMember } from '../store/memberSlice';
// import { selectRoomList } from '../store/roomListSlice';
import { useAppDispatch } from '../store/store';
import { getUser } from '../store/userSlice';

function App() {
  const dispatch = useAppDispatch();
  // const roomList = useAppSelector(selectRoomList)
  // const member = useAppSelector(selectMember)
  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(auth, async (user) => {
      if(!user) return;
      const { displayName, email, uid, photoURL }: User = user;
      await dispatch(getUser({ displayName, email, uid, photoURL }));
    });
    return () => unregisterAuthObserver();
  }, [dispatch])
  
  return (
    <div style={{ margin: 20 }}>
      <ContentRoomChat />
    </div>
  );
}

export default App;
