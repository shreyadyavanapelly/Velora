const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const uri= process.env.MONGO_URL;
const {HoldingsModel} = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel");
const bodyParser = require("body-parser");
const {WatchlistModel} = require("./model/WatchlistModel");
const cookieParser = require("cookie-parser");
const userVerification = require("./middleware/AuthMiddleware");
const authRoute = require("./routes/AuthRoute");
const UserModel = require("./model/UserModel");
app.use(cookieParser());
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {createSecretToken} = require("./utils/SecretToken");
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(bodyParser.json());
mongoose.connect(uri).then(()=>{
 console.log("MongoDB connected");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.use("/", authRoute);
app.post("/verify",userVerification,async(req,res)=>{
  res.json({success:true,user:req.user});
});
app.get("/allHoldings", userVerification, async (req, res) => {
  try {
    console.log("Inside /allHoldings");

    const allHoldings = await HoldingsModel.find({userId: req.user.id});
console.log("Retrieved Holdings:", allHoldings);
    res.json(allHoldings);
  } catch (err) {
    console.log("Holdings Error:", err);
    res.status(500).json({ error: err.message });
  }
});
app.get("/allPositions", userVerification, async (req, res) => {
  try {
    console.log("Inside /allPositions");

    const allPositions = await PositionsModel.find({});

  

    res.json(allPositions);
  } catch (err) {
    console.log("Positions Error:", err);
    res.status(500).json({ error: err.message });
  }
});
app.post("/newOrder",userVerification,async(req,res)=>{
  try{
  console.log(req.body);
  const existingHolding = await HoldingsModel.findOne({ name: req.body.name, userId: req.user.id });
  if (existingHolding) {
    const oldQty = existingHolding.qty;
const newQty = oldQty + Number(req.body.qty);

const newAvg =
  ((existingHolding.avg * oldQty) +
    (Number(req.body.price) * Number(req.body.qty))) / newQty;

existingHolding.qty = newQty;
existingHolding.avg = newAvg;
existingHolding.price = Number(req.body.price);

await existingHolding.save();
  }else{
    const newHolding = new HoldingsModel({
      name: req.body.name,
      qty: Number(req.body.qty), 
    avg: Number(req.body.price),
      price: Number(req.body.price),
      net: "0.00%",
      day: "0.00%",
      isLoss: false,
      userId: req.user.id,
    });
    await newHolding.save();
    console.log("New holding created:", newHolding);
  }
  let newOrder= new WatchlistModel({
      name: req.body.name,
      qty: Number(req.body.qty),
      price: Number(req.body.price),
      mode: req.body.mode,
      userId: req.user.id,
  });
  await newOrder.save();
  res.send("Order added successfully");

}catch(err){
  console.log(err);
  res.status(500).send("err",err.message);
}
});
app.get("/addHoldings",userVerification,async(req,res)=>{
  console.log("Adding holdings for user:", req.user.id);
  let tempHoldings=[{
    name: "BHARTIARTL",
    qty: 2,
    avg: 538.05,
    price: 541.15,
    net: "+0.58%",
    day: "+2.99%",
  },
  {
    name: "HDFCBANK",
    qty: 2,
    avg: 1383.4,
    price: 1522.35,
    net: "+10.04%",
    day: "+0.11%",
  },
  {
    name: "HINDUNILVR",
    qty: 1,
    avg: 2335.85,
    price: 2417.4,
    net: "+3.49%",
    day: "+0.21%",
  },
  {
    name: "INFY",
    qty: 1,
    avg: 1350.5,
    price: 1555.45,
    net: "+15.18%",
    day: "-1.60%",
    isLoss: true,
  },
  {
    name: "ITC",
    qty: 5,
    avg: 202.0,
    price: 207.9,
    net: "+2.92%",
    day: "+0.80%",
  },
  {
    name: "KPITTECH",
    qty: 5,
    avg: 250.3,
    price: 266.45,
    net: "+6.45%",
    day: "+3.54%",
  },
  {
    name: "M&M",
    qty: 2,
    avg: 809.9,
    price: 779.8,
    net: "-3.72%",
    day: "-0.01%",
    isLoss: true,
  },
  {
    name: "RELIANCE",
    qty: 1,
    avg: 2193.7,
    price: 2112.4,
    net: "-3.71%",
    day: "+1.44%",
  },
  {
    name: "SBIN",
    qty: 4,
    avg: 324.35,
    price: 430.2,
    net: "+32.63%",
    day: "-0.34%",
    isLoss: true,
  },
  {
    name: "SGBMAY29",
    qty: 2,
    avg: 4727.0,
    price: 4719.0,
    net: "-0.17%",
    day: "+0.15%",
  },
  {
    name: "TATAPOWER",
    qty: 5,
    avg: 104.2,
    price: 124.15,
    net: "+19.15%",
    day: "-0.24%",
    isLoss: true,
  },
  {
    name: "TCS",
    qty: 1,
    avg: 3041.7,
    price: 3194.8,
    net: "+5.03%",
    day: "-0.25%",
    isLoss: true,
  },
  {
    name: "WIPRO",
    qty: 4,
    avg: 489.3,
    price: 577.75,
    net: "+18.08%",
    day: "+0.32%",
  }];
 for (const holding of tempHoldings) {
  try {
    const newHolding = new HoldingsModel({
      name: holding.name,
      qty: holding.qty,
      avg: holding.avg,
      price: holding.price,
      net: holding.net,
      day: holding.day,
      isLoss: holding.isLoss,
      userId: '6a4e357efd964d362567cfdc',
    });

    await newHolding.save();
    const count=await HoldingsModel.countDocuments();
    console.log(`Total holdings in the database: ${count}`);
    console.log(`Holding ${holding.name} added`);
  } catch (err) {
    console.log("Error adding holding:", err);
  }
}
res.send("Holdings added successfully");
});
app.get("/addPositions",userVerification,async(req,res)=>{
  let tempPositions=[{
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  }
  ];
  for (const position of tempPositions) {
    try {
      const newPosition = new PositionsModel({
        product: position.product,
        name: position.name,
        qty: position.qty,
        avg: position.avg,
        price: position.price,
        net: position.net,
        day: position.day,
        isLoss: position.isLoss,
        userId: '6a4e357efd964d362567cfdc'
      });
      await newPosition.save();
      const count=await PositionsModel.countDocuments();
      console.log(`Total positions in the database: ${count}`);
    } catch (err) {
      console.log("Error adding position:", err);
    }
  }
  res.send("Positions added successfully");
});
app.get("/allOrders", userVerification, async (req, res) => {
  try {
    const allOrders = await WatchlistModel.find({ userId: req.user.id });
    res.json(allOrders);
  } catch (err) {
    console.log("Orders Error:", err);
    res.status(500).json({ error: err.message });
  }
});
app.get("/logout",(req,res)=>{
  res.clearCookie("token",{
    httpOnly: true,
    sameSite:"lax",
    secure:false,
  });
  res.json({
    succes:true,
    message:"Logged out successfully",
  });
});