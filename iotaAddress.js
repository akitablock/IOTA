// Create one or more new addresses on the IOTA Tangle network with your seed

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  // Choose either DevNet or MainNet to generate you address and remove comment (//) for it
  // DevNet 
  provider: 'https://nodes.devnet.thetangle.org:443'
  // MainNet
  // provider: 'https://nodes.thetangle.org:443'
})

const seed =
  // paste your previously created seed here
  'AKITASEEDAKITASEEDAKITASEEDAKITASEEDAKITASEEDAKITASEEDAKITASEEDAKITASEEDAKITASEED'

// if you need to create more addresses set "total" to the number of addresses you require
iota
  .getNewAddress(seed, { index: 0, total: 10 })
  .then(address => {
    console.log('Your IOTA address(es) on the Tangle: ' + address)
  })
  .catch(err => {
    console.log(err)
  })
