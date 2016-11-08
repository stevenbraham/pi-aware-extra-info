data = [line.strip() for line in open("index.html", 'r')]
data.insert((len(data) - 2),'<script src="./pi-aware-extra-info.js"></script>')
f=open('index.html','w')
for line in data:
    f.write(line+'\n')
f.close()