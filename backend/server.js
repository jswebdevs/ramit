const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri =
  `mongodb+srv://${process.env.dbUser}:${process.env.dbPass}@cluster0.fcornmz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect to MongoDB (Keep connection open)
async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB! Start Coding");

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const courseDB = client.db("ramitweb");
    const coursesData = courseDB.collection("courses");

    app.get("/courses", async (req, res) => {
    try {
    const courses = await coursesData.find().toArray();
    res.json(courses);
    } catch (error) {
    res.status(500).json({ error: "Failed to fetch courses" });
    }

    app.post("/addcourses", async (req, res) => {
      const course = req.body;
      console.log("Received user:", course);
      
      const result = await basicData.insertOne(course);
      
      // Return the newly added user with the inserted ID
      res.json({ id: result.insertedId, ...course });
    });

});

    
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is Running!");
});

app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));
