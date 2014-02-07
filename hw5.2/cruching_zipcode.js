use zipcode
db.zips.aggregate([
	{
		$match : { state : "CA", state : "NY", pop : {$gt : 25000} }
	},
	{
		$group : { _id : null, "average" : { "$avg" : "$pop" } }
	}	
])