// import { PrismaPg } from "@prisma/adapter-pg";

import app from "./app";

// async function main () {
//     try {
//         await PrismaPg.$connect();
//     } catch (error) {
        
//     }
// }

const PORT = process.env.PORT || 5000;

try {
    app.listen(PORT, ()=> {
        console.log(`Server is running on http://localhost: ${PORT}`);
    })
} catch (error) {
    console.error("error")
}