import puppeteer from "puppeteer";
import {
  APPOINTMENT_DAYS_URL,
  USER_CREDENTIALS,
  US_VISA_URL,
} from "./constants.js";

const browser = await puppeteer.launch({ headless: false });
const page = await browser.newPage();

async function scrap() {
  try {
    console.info("initiating browser...");
    await page.goto(US_VISA_URL);
    await login(USER_CREDENTIALS);
    console.info(await getAvailableDays(23));
    console.info(await getAvailableDays(24));
    console.info(await getAvailableDays(25));
  } catch (error) {
    console.error(error);
  } finally {
    await browser.close();
  }
}

async function login({ email, password }) {
  console.info("login...");
  await page.type("#user_email", email);
  await page.type("#user_password", password);
  await page.click("#policy_confirmed");
  await page.click("input[type=submit]");
  await page.waitForSelector(".consular-appt");
  console.info("logged successfully");
}

async function getAvailableDays(year) {
  console.info("getting days available for " + year);
  const paramsForClient = { year };

  const clientFn = async (clientProps) => {
    try {
      const res = await fetch(
        `${APPOINTMENT_DAYS_URL}${clientProps.year}.json?appointments[expedite]=false`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  };

  const response = await page.evaluate(clientFn, paramsForClient);
  return response;
}

export default scrap;
