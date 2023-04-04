import * as ENV from "dotenv";
import cron from "node-cron";
import scrap from "./src/scrapper.js";

ENV.config();
// cron.schedule("0,30,39 * * * *", scrap);
scrap()

/**
 * Traer los dias

fetch("https://ais.usvisa-info.com/es-co/niv/schedule/43645477/appointment/days/25.json?appointments[expedite]=false").then(e => e.json()).then(console.log)

Traer las horas

[https://ais.usvisa-info.com/es-co/niv/schedule/43645477/appointment/times/25.json?date=2025-01-28&appointments[expedite]=false](https://ais.usvisa-info.com/es-co/niv/schedule/43645477/appointment/times/25.json?date=2025-01-28&appointments%5Bexpedite%5D=false)

Traer el cas

[https://ais.usvisa-info.com/es-co/niv/schedule/43645477/appointment/days/26.json?&consulate_id=25&consulate_date=2025-01-02&consulate_time=10:00&appointments[expedite]=false](https://ais.usvisa-info.com/es-co/niv/schedule/43645477/appointment/days/26.json?&consulate_id=25&consulate_date=2025-01-02&consulate_time=10:00&appointments%5Bexpedite%5D=false)
 */
