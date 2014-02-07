use zipcode
db.zips.aggregate([{"$group" : {"_id" : "$state", "pop" : {"$max" : "$pop"}}}])