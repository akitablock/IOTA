# IOTA x AKITA
![alt text](https://raw.githubusercontent.com/akitablock/IOTA/master/AKITA%20banner.png)
This Repository includes step by step instrcuctions for setting up IOTA requirements on your machine (Javascript).<br>
For now it will cover:
- creating seeds
- generating addresses
- connecting to the MainNet/ DevNet
- saving messages in JSON format with 0 value tx 

# Prerequisites
Before you start with any IOTA project you need to have the follwing components on your machine:
- Node.js
- npm
- IOTA library (Javascript)
- connect to IRI (IOTA Reference Implementation)

Check if you have Node.js and npm installed and if yes which version you have installed.
Type into terminal:
```
node -v
```
```
npm -v
```
If you dont have node.js install from the here for example (npm comes with Node.js):<br>
https://nodejs.org/en/download

# IOTA library
Install the IOTA JavaScript client library with npm:
```
npm install @iota/core
```
connect to a local IRI node:


```
import { composeAPI } from '@iota/core'

const iota = composeAPI({
    provider: 'http://localhost:14265'
})

iota.getNodeInfo()
    .then(info => console.log(info))
    .catch(error => {
        console.log(`Request error: ${error.message}`)
    })
```
    
Now you should be good to go and run the following programs: 

# iotaSeed
First of all you need a seed (your private password that you should never share!)
Run this in terminal to create your seed:
```
cat /dev/urandom |LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1
```

# iotaAddress.js
generate one or more addresses for your seed

# iotaMessageJSON.js
send public 0 value transactions and save data in JSON Format in the Message field on the Tangle

# Explorer
Find and verify your messages on the respective explorer<br>
DevNet:
https://nodes.devnet.thetangle.org:443
<br>
MainNet:
https://nodes.thetangle.org:443

# Example Messages
These are 2 example messages with the same seed and address but different tx hashes on the DevNet and MainNet each.

DevNet sample tx:<br>
https://devnet.thetangle.org/transaction/TUATAPZ9NXDCQCWWRLTIDQMFYVICDUWRFMOIPGPORDB9YBTJTUUBTCGUADXZYLEUZAE9LJ9VSVSQZ9999
![alt text](https://raw.githubusercontent.com/akitablock/IOTA/master/IOTA%20sample%20JSON%20message%20DevNet%20.png)

MainNet sample tx:<br>
https://thetangle.org/transaction/UPYHPKFILLCQQUSPRLRDUNNEGGNGPTTFGSKYJBTWTTNPTZCHQXQFOZIQPZGIAGN9TPHILDZZASKI99999
![alt text](https://raw.githubusercontent.com/akitablock/IOTA/master/IOTA%20sample%20JSON%20message%20MainNet.png)
