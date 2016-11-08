# About this project #
This is a small js file that adds extra information to the [Pi Awere](https://nl.flightaware.com/adsb/piaware/) software. It adds info from their website in the infobox on the mainscreen such as arrival and departure time, photos of the plane etc.

**This project is not affiliated with Pi Aware or FLight Aware and not endorsed by them**

# How to install #
1. Connect with your pi with putty or an other terminal
2. Execute `cd /var/www/html`
3. Execute `sudo wget https://github.com/stevenbraham/pi-aware-extra-info/blob/master/install.sh`
4. Execute `sudo install.sh`

The javascript file is now included in the interface. To update run this process again.