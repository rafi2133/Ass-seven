import  { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addToLocalDB, getAllFromLocalDB } from '../../utils/localDb';


export const FriendContext = createContext();


const FriendProvider = ({children}) => {
     // ✅ Initialize state with data from localStorage
const [contacted, setContacted] = useState(() => getAllFromLocalDB('voiceCalls'));
const [texted, setTexted] = useState(() => getAllFromLocalDB('texts'));
const [called, setCalled] = useState(() => getAllFromLocalDB('videoCalls'));


    //   useEffect(()=>{
    //     const getAllFriendFromLocalDB= ;
    //     console.log(getAllFriendFromLocalDB,'getAllFriendFromLocalDB'
            
    //     );
        
    //   },[])

    const handleCall = (currentFriend) =>{
        const isExistFriend = contacted.find(friend=> friend.id === currentFriend.id)
        if (!isExistFriend) {
            const friendWithDate = { ...currentFriend, date: new Date().toLocaleString() };
            setContacted([...contacted, friendWithDate]);
            addToLocalDB(friendWithDate, 'voiceCalls');
            toast.success(`Called ${currentFriend.name}`);
        } else {
            toast.info(`Already called ${currentFriend.name} before`);
        }
    }


    const handlText = (currentFriend) =>{
        const isExistFriend = texted.find(friend=>friend.id === currentFriend.id)
        if(!isExistFriend){
            const friendWithDate = { ...currentFriend, date: new Date().toLocaleString() };
            setTexted([...texted,friendWithDate]);
             addToLocalDB(friendWithDate, 'texts');
            toast.success(`Text Send ${currentFriend.name}`)
        }else{
            toast.info(`Already texted ${currentFriend.name} before`)
        }
    }

    const handleVideoCall = (currentFriend) =>{
        const isExistFriend =called.find(friend=>friend.id === currentFriend.id)
        if(!isExistFriend){
            const friendWithDate ={...currentFriend, date: new Date().toLocaleString()}
            setCalled([...called,friendWithDate]);
             addToLocalDB(friendWithDate, 'videoCalls');
            toast.success(` Already Video Called ${currentFriend.name}`)
        } else{
             toast.info(`Already Video Called ${currentFriend.name} before`)
        }
    }


    const data = {
        contacted,
        setContacted,
        handleCall,
        handlText,
        texted, 
        setTexted,
        handleVideoCall,
        called, 
        setCalled
    }

    return <FriendContext.Provider value={data}>
        {children}
    </FriendContext.Provider>
};

export default FriendProvider ;