const API_TOKEN = "6363285774:AAHLUseSICab0QXBcgxCv-oy0c2PndY99QU"
const CHATID = '-922194240'
const URL = `https://api.telegram.org/bot${API_TOKEN}/sendMessage`
const inputs = document.querySelectorAll(".adres-modal")
console.log(inputs)

export default function postProductInfo(info) {
   

    let message = `
        FAMILIYA ${inputs[0].value} \n
        ISMI ${inputs[1].value} \n
        TELFRON-NOMER ${inputs[2].value} \n
        ${inputs[1].value}-ADRES ${inputs[3].value} \n

        products:\n
        ${productMessage}
    `

    var productMessage = info.forEach(element => {
        message +=`
            ${element.name} \n
            ${element.price}
        `
    });
 
    axios.post(URL, {
        chat_id: CHATID,
        text: message + productMessage,
    })
}
