import app from "./src/app.js"
import config from "./config/config.js"

const PORT = config.PORT;


app.listen(PORT, () => {
    console.log("Server Running on port:", PORT);
})