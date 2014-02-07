use zipcode
db.zips.aggregate([ 
	{ 
	 	$project : {
			pop : 1,
			city : 1,
			state : 1,		
			first_char: {$substr : ["$city",0,1]}
		}
	},
	{
		$sort : {
			first_char : -1
		}
	},
	{
		$match : {
			first_char : /^[0-9]/
		}
	},
	{
		$group : {
			_id : null,
			"sum" : {$sum : "$pop"}
		}
	}
])