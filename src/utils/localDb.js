const getAllFromLocalDB= () =>{
     const allFriends = localStorage.getItem("timeLine")
     if(allFriends) return JSON.parse(allFriends);
      return [];
}

const addToLocalDB = (friend) =>{
const allFriends = getAllFromLocalDB();
const isAlreadyExist = allFriends.find(fnd => fnd.id === friend.id);
if(!isAlreadyExist){
    allFriends.push(friend);
    localStorage.setItem("timeLine" , JSON.stringify(allFriends))
}
}

export{getAllFromLocalDB, addToLocalDB}