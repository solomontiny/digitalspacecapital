import { Helmet } from "react-helmet-async";

const SITE_URL = "https://digitalspacecapital.com";
const SITE_NAME = "Digital Space Capital Group";
const LOGO = `${SITE_URL}/og-image.jpg`;

/**
 * Site-wide JSON-LD: Organization (with subsidiaries) + WebSite (with SearchAction).
 * Mounted once globally in App.tsx so every page inherits these entities.
 */
const StructuredData = () => {
  const organization = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "DSC Group",
    url: SITE_URL,
    logo: LOGO,
    image: LOGO,
    description:
      "Digital Space Capital Group is a Nigerian financial services holding company offering investment, asset management, microfinance, insurance, real estate, and digital payments.",
    telephone: "+234-906-913-7909",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
      addressRegion: "Abuja",
    },
    areaServed: ["NG", "Sub-Saharan Africa"],
    sameAs: [
      "https://www.linkedin.com/company/digital-space-capital",
      "https://twitter.com/dscgroup",
      "https://www.facebook.com/digitalspacecapital",
      "https://www.instagram.com/digitalspacecapital",
    ],
    subOrganization: [
      { "@type": "Organization", name: "Digital Space Capital Limited", url: `${SITE_URL}/subsidiaries/digital-space-capital` },
      { "@type": "Organization", name: "DSC Asset Management", url: `${SITE_URL}/subsidiaries/dsc-asset-management` },
      { "@type": "Organization", name: "DSC Microfinance Bank", url: `${SITE_URL}/subsidiaries/dsc-microfinance-bank` },
      { "@type": "Organization", name: "Naingate Insurance", url: `${SITE_URL}/subsidiaries/naingate-insurance` },
      { "@type": "Organization", name: "Emison Real Estate", url: `${SITE_URL}/subsidiaries/emison-real-estate` },
      { "@type": "Organization", name: "EasyPay", url: `${SITE_URL}/subsidiaries/easy-pay` },
      { "@type": "Organization", name: "Digikolo", url: `${SITE_URL}/subsidiaries/digikolo` },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+234-906-913-7909",
        contactType: "customer service",
        areaServed: "NG",
        availableLanguage: ["English"],
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-NG",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify([organization, website])}
      </script>
    </Helmet>
  );
};

export default StructuredData;
