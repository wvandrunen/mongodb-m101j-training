mkdir C:\project\mongodb-m101j-course\6.5\data\rs1
mkdir C:\project\mongodb-m101j-course\6.5\data\rs2
mkdir C:\project\mongodb-m101j-course\6.5\data\rs3

start mongod --replSet m101 --logpath "1.log" --dbpath C:\project\mongodb-m101j-course\6.5\data\rs1 --port 27017 --smallfiles --oplogSize 64
start mongod --replSet m101 --logpath "2.log" --dbpath C:\project\mongodb-m101j-course\6.5\data\rs2 --port 27018 --smallfiles --oplogSize 64
start mongod --replSet m101 --logpath "3.log" --dbpath C:\project\mongodb-m101j-course\6.5\data\rs3 --port 27019 --smallfiles --oplogSize 64