#Install file
rm patch.py
rm pi-aware-extra-info.js
touch patch.py
touch pi-aware-extra-info.js
chmod 777 patch.py
chmod 777 pi-aware-extra-info.js
python patch.py
rm patch.py