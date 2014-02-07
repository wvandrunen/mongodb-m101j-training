use blog
db.posts.aggregate([
	{
		$unwind : "$comments"
	}, 
	{
		$group : 
		{ 
			"_id" : "$comments.author",
			"posts" : { "$sum" : 1 } 
		}
	}, 
	{
		$sort :
		{
			posts : -1
		}
	},
	{
		$limit : 10
	}
])