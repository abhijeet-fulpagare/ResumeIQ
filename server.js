import app from "./src/app.js"
import config from "./src/config/config.js"
import connectDB from "./src/config/database.js";

const PORT = config.PORT;

//connectDB();

app.listen(PORT, () => {
    console.log("Server Running on port:", PORT);
})