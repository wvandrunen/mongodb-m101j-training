use zipcode
db.zips.aggregate([{"$group" : {"_id" : "$state", "population" : {"$sum" : "$pop"}}}])