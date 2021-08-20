getquandl()

    const apple = 'https://www.quandl.com/api/v3/datasets/EOD/AAPL.json?api_key=M2SZbm9Q_n57XtsjCsb3'
    async function getquandl(){
        const response = await fetch(apple)
        const data1 = await response.json()
        
        document.getElementById('livedata').textContent=data1.dataset.data[0][1]
        console.log(data1.dataset.data[0][1])
    }

const walmart = 'https://www.quandl.com/api/v3/datasets/EOD/WMT.json?api_key=M2SZbm9Q_n57XtsjCsb3'
     async function getquandla(){
        const response = await fetch(walmart)
        const data1 = await response.json()

        document.getElementById('livedata1').textContent=data1.dataset.data[0][1]
        console.log(data1.dataset.data[0][1])
    }

    const visa = 'https://www.quandl.com/api/v3/datasets/EOD/V.json?api_key=M2SZbm9Q_n57XtsjCsb3'
    async function getquandlb(){
        const response = await fetch(visa)
        const data1 = await response.json()

        document.getElementById('livedata2').textContent=data1.dataset.data[0][1]
        console.log(data1.dataset.data[0][1])
    }

    const ethereum = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=GBP&api_key=08de92a4bc6a444fe22ee3c2f498429ab322425a1ae8ef5aca8db7190a96de0c'
    async function getcrypto(){
        const response = await fetch(ethereum)
        const data1 = await response.json()

        document.getElementById('bitcoindata').textContent=data1.ETH.GBP
        console.log(data1.ETH.GBP)
    }

    const litecoin = 'https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=GBP&api_key=08de92a4bc6a444fe22ee3c2f498429ab322425a1ae8ef5aca8db7190a96de0c'
    async function getcrypto1(){
        const response = await fetch(litecoin)
        const data1 = await response.json()

        document.getElementById('bitcoindata1').textContent=data1.LTC.GBP
        console.log(data1.LTC.GBP)
    }

    const cardano = 'https://min-api.cryptocompare.com/data/price?fsym=ADA&tsyms=GBP&api_key=08de92a4bc6a444fe22ee3c2f498429ab322425a1ae8ef5aca8db7190a96de0c'
    async function getcrypto2(){
        const response = await fetch(cardano)
        const data1 = await response.json()

        document.getElementById('bitcoindata2').textContent=data1.ADA.GBP
        console.log(data1.ADA.GBP)
    }

  

    getquandl()
    getquandla()
    getquandlb()
    getcrypto()
    getcrypto1()
    getcrypto2()
   