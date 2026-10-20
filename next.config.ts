import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/Saira_Bibi.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: "attachment; filename=Saira_Bibi.pdf",
          },
          {
            key: "Content-Type",
            value: "application/pdf",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
