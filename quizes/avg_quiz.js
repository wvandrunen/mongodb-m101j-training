use zipcode
db.zips.aggregate([{"$group" : {"_id" : "$state", "average_pop" : {"$avg" : "$pop"}}}])