# About this project #
This is a small js file that adds extra information to the [Pi Awere](https://nl.flightaware.com/adsb/piaware/) software. It is now mostly proof of concept. It adds info from their website in the infobox on the mainscreen such as arrival and departure time, photos of the plane etc.

**This project is not affiliated with Pi Aware or FLight Aware and not endorsed by them**

# How to install #
1. Connect with your pi with putty or an other terminal
2. Execute `sudo apt-get -y install php5-common php5-cgi php5`, `sudo lighty-enable-mod fastcgi-php` and `sudo service lighttpd force-reload`
3. Execute `cd /usr/share/dump1090-fa/html/`
4. Execute `sudo wget https://raw.githubusercontent.com/stevenbraham/pi-aware-extra-info/master/install.sh`
5. Execute `sudo sh install.sh`

The javascript file is now included in the interface. To update, run `sudo ./update.sh`