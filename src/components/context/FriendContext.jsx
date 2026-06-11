import  { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addToLocalDB, getAllFromLocalDB } from '../../utils/localDb';


export const FriendContext = createContext();


const FriendProvider = ({children}) => {
      const [contacted, setContacted] = useState(()=>getAllFromLocalDB());
      const [texted, setTexted] = useState(()=>getAllFromLocalDB());
      const [called, setCalled] = useState(()=>getAllFromLocalDB());


    //   useEffect(()=>{
    //     const getAllFriendFromLocalDB= ;
    //     console.log(getAllFriendFromLocalDB,'getAllFriendFromLocalDB'
            
    //     );
        
    //   },[])

    const handleCall = (currentFriend) =>{

        addToLocalDB(currentFriend);

        const isExistFriend = contacted.find(friend=> friend.id === currentFriend.id)
        if (!isExistFriend) {
            const friendWithDate = { ...currentFriend, date: new Date().toLocaleString() };
            setContacted([...contacted, friendWithDate]);
            toast.success(`Called ${currentFriend.name}`);
        } else {
            toast.info(`Already called ${currentFriend.name} before`);
        }
    }


    const handlText = (currentFriend) =>{
        addToLocalDB(currentFriend);
        const isExistFriend = texted.find(friend=>friend.id === currentFriend.id)
        if(!isExistFriend){
            const friendWithDate = { ...currentFriend, date: new Date().toLocaleString() };
            setTexted([...texted,friendWithDate]);
            toast.success(`Text Send ${currentFriend.name}`)
        }else{
            toast.info(`Already texted ${currentFriend.name} before`)
        }
    }

    const handleVideoCall = (currentFriend) =>{
        addToLocalDB(currentFriend);
        const isExistFriend =called.find(friend=>friend.id === currentFriend.id)
        if(!isExistFriend){
            const friendWithDate ={...currentFriend, date: new Date().toLocaleString()}
            setCalled([...called,friendWithDate])
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