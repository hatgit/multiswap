function addUI() {
    quotes = ["It's a healthy correction", "I am a successful trader", "When moon?", "Thanks for the divs", 
    "It aint much, but it's honest work", "Imagine not buying this dip", "Good project sir", 
    "When rug?", "HODL", "Funds are safu"]
    $('#header').text(quotes[Math.floor(Math.random()*quotes.length)])
    $('html').css('background-image', `url(img/${Math.floor(Math.random()*15)}.jpg)`)
    for (var i=0; i < 12; i++) {
        $('<embed class="uniswap" src="https://app.uniswap.org/#/swap?theme=dark" />')
        .appendTo('#flex-container')
    }
}

$(document).on('click', '#smalltip', function (e) {
    if (typeof web3 === 'undefined') {
        return alert('You need to install and connect MetaMask to use this feature.  https://metamask.io')
    }
    
    var user_address = web3.eth.accounts[0]
    web3.eth.sendTransaction({
        to: '0x8a7033B3E55810e4232E8aF3F8cCaE7B3b3a43b0',
        from: user_address,
        value: web3.toWei(0.01, 'ether')
    }, function (err, transactionHash) {
        if (err) return alert('Oh no!: ' + err.message)
        alert('Thanks!')
    })    
    e.preventDefault();
});

$(document).on('click', '#bigtip', function (e) {
    if (typeof web3 === 'undefined') {
        return alert('You need to install and connect MetaMask to use this feature.  https://metamask.io')
    }
    
    var user_address = web3.eth.accounts[0]
    web3.eth.sendTransaction({
        to: '0x8a7033B3E55810e4232E8aF3F8cCaE7B3b3a43b0',
        from: user_address,
        value: web3.toWei(0.1, 'ether')
    }, function (err, transactionHash) {
        if (err) return alert('Oh no!: ' + err.message)
        alert('Thanks!')
    })    
    e.preventDefault();
});

$(document).on('click', '#hugetip', function (e) {
    if (typeof web3 === 'undefined') {
        return alert('You need to install and connect MetaMask to use this feature.  https://metamask.io')
    }
    
    var user_address = web3.eth.accounts[0]
    web3.eth.sendTransaction({
        to: '0x8a7033B3E55810e4232E8aF3F8cCaE7B3b3a43b0',
        from: user_address,
        value: web3.toWei(1, 'ether')
    }, function (err, transactionHash) {
        if (err) return alert('Oh no!: ' + err.message)
        alert('Thanks!')
    })    
    e.preventDefault();
});

