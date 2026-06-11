// utils/localDb.js
export const getAllFromLocalDB = (key) => {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
    return [];
}

export const addToLocalDB = (friend, key) => {
    const allFriends = getAllFromLocalDB(key);
    const isAlreadyExist = allFriends.find(fnd => fnd.id === friend.id);
    if (!isAlreadyExist) {
        allFriends.push(friend);
        localStorage.setItem(key, JSON.stringify(allFriends));
        return true;
    }
    return false;
}

export const removeFromLocalDB = (friendId, key) => {
    const allFriends = getAllFromLocalDB(key);
    const filtered = allFriends.filter(fnd => fnd.id !== friendId);
    localStorage.setItem(key, JSON.stringify(filtered));
}