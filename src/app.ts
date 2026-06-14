import express from "express";
import routes from "./api/routes/index.routes";

const app = express();

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
  });
});

app.use("/api/v1", routes);

export default app;
