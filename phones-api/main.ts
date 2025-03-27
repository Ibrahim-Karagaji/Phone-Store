import { phones } from "./data.ts";
import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";
import filterPhones from "./lib/filterPhones.ts";
import corsHandler from "./lib/corsHandler.ts";

const router = new Router();

router.get("/phones", async (ctx) => {
  const limit = Number(ctx.request.url.searchParams.get("limit")) || 15;
  const brand = ctx.request.url.searchParams.get("brand");
  const storage = ctx.request.url.searchParams.get("storage");
  const ram = ctx.request.url.searchParams.get("ram");
  const minPrice = Number(ctx.request.url.searchParams.get("minPrice"));
  const maxPrice = Number(ctx.request.url.searchParams.get("maxPrice"));
  const productionDateStart = ctx.request.url.searchParams.get("productionDateStart");
  const productionDateEnd = ctx.request.url.searchParams.get("productionDateEnd");
  const category = ctx.request.url.searchParams.get("category");

  await new Promise((res) => setTimeout(res, 2000))

  ctx.response.body = filterPhones(phones, {
    brand,
    storage,
    ram,
    minPrice,
    maxPrice,
    productionDateStart,
    productionDateEnd,
    category,
  }).slice(0, limit);
});

router.get("/phones/:id", async (ctx) => {
  await new Promise((res) => setTimeout(res, 2000))
  ctx.response.body = phones[Number(ctx.params.id)]
});

const app = new Application();

app.use(router.allowedMethods());
app.use(corsHandler);
app.use(router.routes());

app.listen({ port: 7777 })

console.log("the server is running on http://localhost:7777");

