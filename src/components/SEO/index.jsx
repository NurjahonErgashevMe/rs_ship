import { SuperSEO } from "react-super-seo";

export default function SEO({
  title,
  description = "RS Logistics  offers reliable and affordable auto shipping and auto carrier services across the USA. Get a free quote today and experience hassle-free vehicle transportation with our expert team.",
}) {
  return (
    <SuperSEO
      title={`${title} - RS Logistics `}
      description={description}
      lang="en"
      openGraph={{
        ogImage: {
          ogImage: "/favicon.ico",
          ogImageAlt: "RS Logistics - Auto Shipping & Auto Carrier Services in the USA",
          ogImageWidth: 1200,
          ogImageHeight: 630,
          ogImageType: "image/jpeg",
        },
      }}
      twitter={{
        twitterSummaryCard: {
          summaryCardImage: "/favicon.ico",
          summaryCardImageAlt: "RS Logistics  - Auto Shipping & Auto Carrier Services in the USA",
          summaryCardSiteUsername: "refineship",
        },
      }}
    />
  );
}
