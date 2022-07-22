import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use('/posts', /*Router*/);

// const CONNECTION_URL = "mongodb+srv://mahmoud_developer_1:mahmoud.dev.1@cluster0.jkpqs.mongodb.net/?retryWrites=true&w=majority";


// mongoose
//   .connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() =>
//     app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))
//   )
//   .catch((error) => console.log(error.message));

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`))