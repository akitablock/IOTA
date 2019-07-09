// Send a public 0 vlaue tx to the Tangle and save your data in the "Message" field in JSON format

const iotaLibrary = require('@iota/core')
const Converter = require('@iota/converter')

const iota = iotaLibrary.composeAPI({
    // Choose either DevNet or MainNet to save our data on respective network and remove comment (//) for it
    // DevNet 
    provider: 'https://nodes.devnet.thetangle.org:443'
    // MainNet
    // provider: 'https://nodes.thetangle.org:443'
})

const seed =
    // insert your seed here  
    'AKITASEEDAKITASEEDAKITASEEDAKITASEEDAKITASEEDAKITASEEDAKITASEEDAKITASEEDAKITASEED'

const address =
    // insert your address here
    'OWMWSDTPWVIVRUEJKPDDDNH9HQQUYWSVJ9VSJNCKDTVIHDAL9BBHJFEGBYV9FHDRDPAVXDMWQDEDLMPZX'

const object = {
  text: 'this is a demo on how to save data on a distributed ledger',
  dlt: 'IOTA',
  network: 'Tangle',
  function: 'save data',
  field: 'Message',
  format: 'JSON',
  author: 'AKITA'
}
// bug fix if you have "invalid message length" - odd number of '9's
let string = "AHS" + "9"

// JSON objcet needs be converted to String and then to Trytes! 
const message = Converter.asciiToTrytes(JSON.stringify(object))

const transfers = [
  {
    value: 0,
    // Tag can be customized to max. 27 characters (A-Z9)
    tag: 'AKITA999JSON999MESSAGE',
    address: address,   // your data will be send to this address, but create a new tx for each message 
    message: message    // The message/ JSON converted into Trytes
  }
]

iota
  .prepareTransfers(seed, transfers)
  // Trytes "Height" needs to be = 14 for the MainNet and can be = 9 for DevNet (9 is too low and does not work for the MainNet!) 
  .then(trytes => iota.sendTrytes(trytes, 3, 14))
  .then(bundle => {
    console.log('your JSON message has been saved on the Tangle')
    bundle.map(tx => console.log(tx))
  })
  .catch(err => {
    console.log(err)
  })
