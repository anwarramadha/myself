import fs from "fs";

// moving public/uploads to dist/uploads
fs.renameSync("public/uploads", "dist/uploads");