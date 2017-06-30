# MMM-ethereum
An `ethereum ticker` <a href="https://github.com/MichMich/MagicMirror">MagicMirror</a> module.
Based on the <a href="https://github.com/valmassoi/MMM-bitcoin">valmassoi/MMM-bitcoin</a> module.

## Installing the module
Clone this repository in your `~/MagicMirror/modules/` folder `( $ cd ~MagicMirror/modules/ )`:
````javascript
git clone https://github.com/Deathrid3r747/MMM-ethereum
````

## Using the module
Add `MMM-ethereum` module to the `modules` array in the `config/config.js` file:
````javascript
modules: [
  {
    module: 'MMM-ethereum',
    position: 'top_right',
    config: {
      updateInterval: 10000 //update interval in milliseconds, see Notes
    }
  },
]
````

## Notes
* The API allows for 2000000000 nanoseconds (2 seconds) of CPU time per hour, which is reset every hour, on the hour.
* Each update uses between 2500000 and 5000000 nanoseconds of CPU time
* This allows for one update every 9 seconds on worst conditions of 5000000 nanoseconds

**Default** update interval is set to **10 seconds,** which should be a safe value

<a href="https://cryptowat.ch/docs/api#rate-limit">API Documentation can be found here</a>

## To Do
* 24h high/low values on the ticker
* Last change indicator (Green = price went up, Red = Price went down)
* Current hashrate for mining rig
* Alert when miner goes offline
* Average hashrate for mining rig
* Pending payout for mining
* Mining calculator based on average mining
* Convert USD value to local currency (Configurable - ZAR in my case)
