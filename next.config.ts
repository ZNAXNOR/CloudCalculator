import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

const nextConfig: NextConfig = {
  output: "export", // Set this to enable static export
  async generateStaticProps() {
    const filePath = path.join(process.cwd(), "public", "mockPricing.json");
    if (fs.existsSync(filePath)) {
      const pricingData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      return { props: { pricingData } };
    }
    return { props: { pricingData: {} } };
  },
};

export default nextConfig;
