const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://<db_username>:onIDfdh0E4L2y06G@manan-cluster.gwo6w4x.mongodb.net/?appName=manan-cluster')

const db=mongoose.connection;
db.on("connected",()=>{
    console.log("MongoDB connected successfully");
});
db.on("disconnected",()=>{
    console.log("MongoDB disconnected ");
});
db.on("erroe",()=>{
    console.log("MongoDB connection error:",error);
});


modeule.exports=db;

