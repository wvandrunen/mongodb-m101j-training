db.grades.aggregate([
	{
		$unwind : "$scores"		
	},
	{
		$match : { "scores.type" : "exam", "scores.type" : "homework"}
	},
	{
		$project : {
			class_id : "$class_id",
			student_id : "$student_id",
			score : "$scores.score"
		}
	},
	{
		$group : { _id : { student_id : "$student_id", class_id : "$class_id"}, score : {$avg : "$score"}}
	},
	{
		$group : {_id : "$_id.class_id", score : {$avg : "$score"}}
	},
	{
		$sort : { score : 1 }
	}
])