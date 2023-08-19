const FilesRouter = require("express").Router();
const fs = require("fs/promises");

async function createFile(data = null) {
  try {
    const content = Date().toString().replace(/[:.]/g, "-");
    // const content = new Date().toString();
    await fs.writeFile(`./files/${content}.txt`, data ? data : content);
  } catch (err) {
    console.log(err);
  }
}

// HTTP METHODS = GET, POST
FilesRouter.get("/createDefaultFile", (request, response, next) => {
  console.log("REQUEST HIT");
  createFile();
  return response.status(200).json({
    message: "Request hit",
  });
});

FilesRouter.get("/createCustomFile/:content", (request, response, next) => {
  const { content } = request.params;
  createFile(content);
  return response.status(200).json({
    message: "Request hit",
  });
});

FilesRouter.post("/createCustomFile", async (request, response, next) => {
  const { content } = request.body;
  await createFile(content);
  console.log(request.body);
  return response.status(200).json({
    message: "File created",
  });
});

module.exports = FilesRouter;
