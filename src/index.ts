import { Hono } from "hono";
import { handle } from "hono/genezio";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export const handler = handle(app);
