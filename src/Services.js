function setLocalStorage(key,value){
    localStorage.setItem("userToken",value);
}

function getLocalStorage(key){
    localStorage.getItem(key);
}

export {setLocalStorage, getLocalStorage};


