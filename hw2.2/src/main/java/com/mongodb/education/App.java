package com.mongodb.education;

import com.mongodb.*;

import java.net.UnknownHostException;

public class App
{
    public static void main( String[] args ) throws UnknownHostException {

        MongoClient mongoClient = new MongoClient();
        DB students = mongoClient.getDB("students");
        DBCollection grades = students.getCollection("grades");

        DBCursor cursor = grades.find(new BasicDBObject("type", "homework")).sort(new BasicDBObject("student_id", 1).append("score", -1));

        DBObject previousDocument = null;

        DBObject currentDocument = null;
        while(cursor.hasNext()) {
            currentDocument = cursor.next();

            if(previousDocument != null && !previousDocument.get("student_id").equals(currentDocument.get("student_id"))) {
                //changing student id -> previous document contains the lower grade

                System.out.println("Found lowest grade: " + previousDocument);
                grades.remove(previousDocument);
            }

            previousDocument = currentDocument;
        }

        System.out.println("Found lowest grade: " + currentDocument);
        grades.remove(currentDocument);
    }
}
