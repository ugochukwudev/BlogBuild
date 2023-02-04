//import * as fs from "fs";
import mongoose from "mongoose";

import { client } from "./components/Home/BlogData";

const bringData = async () => {
  try {
    const response = await client.getEntries({
      content_type: "blog",
    });
    const responseData = await response.items;
    if (responseData) {
      console.log(responseData);
      return responseData;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

const generateSitemap = async () => {
  const data = bringData();
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.yourWebsiteHere.com/</loc>
    </url>
    <url>
        <loc>https://www.yourWebsiteHere.com/about</loc>
    </url>
    <url>
        <loc>https://www.yourWebsiteHere.com/contact</loc>
    </url>
    <url>
        <loc>https://www.yourWebsiteHere.com/search</loc>
    </url>
    <url>
        <loc>https://www.yourWebsiteHere.com/rules/privacy</loc>
    </url>
    <url>
        <loc>https://www.yourWebsiteHere.com/rules/terms-of-use</loc>
    </url>
    <url>
        <loc>https://www.yourWebsiteHere.com/rules/shipping-and-returns</loc>
    </url>
        ${data
          ?.map((page) => {
            return `
              <url>
                  <loc>${`https://www.yourWebsiteHere.com/product/${page.slug}`}</loc>
              </url>
            `;
          })
          .join("")}
    </urlset>
    `;
  console.log(bringData());
  //writeFileSync("./frontend/public/sitemap.xml", sitemap);
  console.log("genarated Sitemap successfully");
  return;
};

export default generateSitemap;
