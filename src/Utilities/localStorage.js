import swal from 'sweetalert';

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
    if (exist) {
        swal("Double Donation!", "Great heart!❤️", "success");
        datas.push(id)
        localStorage.setItem('donations', JSON.stringify(datas))
    }
    else {
        swal("Good Job!", "You save a life!", "success");
        datas.push(id)
        localStorage.setItem('donations', JSON.stringify(datas))
    }
}

export { getStoredData, saveToLS }