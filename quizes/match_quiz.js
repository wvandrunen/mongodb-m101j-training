use zipcode
db.zips.aggregate([{"$match" : {
	"pop" : {$gt : 100000}
	}
}])