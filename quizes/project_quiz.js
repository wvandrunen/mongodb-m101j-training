use zipcode
db.zips.aggregate([{"$project" : {
	"city" : {$toLower : "$city"}, 
	"pop" : 1, 
	"state" : 1,
	"zip" : "$_id",
	"_id" : 0
	}
}])