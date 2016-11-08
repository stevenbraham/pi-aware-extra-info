#Install file
wget https://raw.githubusercontent.com/stevenbraham/pi-aware-extra-info/master/patch.py
wget https://raw.githubusercontent.com/stevenbraham/pi-aware-extra-info/master/pi-aware-extra-info.js
wget https://raw.githubusercontent.com/stevenbraham/pi-aware-extra-info/master/update.sh
chmod 777 patch.py
chmod 777 update.sh
chmod 777 pi-aware-extra-info.js
python patch.py
#rm patch.py
