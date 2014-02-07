use zipcode
db.zips.aggregate([{"$group" : {"_id" : "$city", "postal_codes" : {"$addToSet" : "$_id"}}}])