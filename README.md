# IOTA
This Repository includes step by step instrcuctions for setting up IOTA on your machine (Javascript).
For now it will cover creating seeds, generating addresses, connecting to the MainNet/ DevNet, saving messages in JSON format with 0 value tx. 

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
If you dont have node.js install from the here for example (npm comes with Node.js):
https://nodejs.org/en/download/

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

# iotaSeed.js
First of all you need a seed (your private password that you should never share!)
Run the program and create your seed for the following program

# iotaAdress.js
generate an address

# iotaMessageJSON.js
send public 0 value transactions to the Tangle and save data in JSON Format in the Message field
