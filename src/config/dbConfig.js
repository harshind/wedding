const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://harshind60:0zwnWP19HUF7O7Ss@cluster007.wfg20r1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster007";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    deprecationErrors: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
