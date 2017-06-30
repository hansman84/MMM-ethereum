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

The API allowes for 2000000000 nanoseconds (2 seconds) of CPU time per hour, and allowance is reset every hour, on the hour.
Each update uses between 2500000 and 5000000 nanoseconds
Based on the maximum 5000000 nanoseconds, the allowance is 400 updates per hour
That means one update every 9 seconds

Default is set to 10 seconds, the values rarely change more frequently than 10 seconds

<a href="https://cryptowat.ch/docs/api#rate-limit">API Documentation</a>