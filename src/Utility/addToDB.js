const getStoredItem = ()=>{
    const storeItemsStr = localStorage.getItem('readList');
    if(storeItemsStr){
        const itemData = JSON.parse(storeItemsStr)
        return itemData
    }  
    else{
        return []
    }
}


const addItemToStore = (id) =>{
    const addItems = getStoredItem()
    if(addItems.includes(id)){
        alert('item already exist')
    }
    else{
        addItems.push(id)
        const data =JSON.stringify(addItems)
        localStorage.setItem('readList',data)
    }
}

export{addItemToStore,getStoredItem }