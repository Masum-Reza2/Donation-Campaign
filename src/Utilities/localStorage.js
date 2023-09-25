const getStoredData = () => {
    const data = localStorage.getItem('donations');
    if (data) {
        return JSON.parse(data)
    }
    else {
        return []
    }
}

const saveToLS = (id) => {
    const datas = getStoredData();
    let exist = datas.find(dataId => dataId === id)
    if (!exist) {
        datas.push(id)
        localStorage.setItem('donations', JSON.stringify(datas))
    }
}

export { getStoredData, saveToLS }