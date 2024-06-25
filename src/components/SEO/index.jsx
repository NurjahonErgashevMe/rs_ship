import { SuperSEO } from "react-super-seo";

export default function SEO({
  title,
  description = "Refine Ship offers reliable and affordable auto shipping and auto carrier services across the USA. Get a free quote today and experience hassle-free vehicle transportation with our expert team.",
}) {
  return (
    <SuperSEO
      title={`${title} - Refine Ship `}
      description={description}
      lang="en"
      openGraph={{
        ogImage: {
          ogImage: "/logo.png",
          ogImageAlt: "Refine Ship - Auto Shipping & Auto Carrier Services in the USA",
          ogImageWidth: 1200,
          ogImageHeight: 630,
          ogImageType: "image/jpeg",
        },
      }}
      twitter={{
        twitterSummaryCard: {
          summaryCardImage: "/logo.png",
          summaryCardImageAlt: "Refine Ship - Auto Shipping & Auto Carrier Services in the USA",
          summaryCardSiteUsername: "refineship",
        },
      }}
    />
  );
}
