export const market = {
  name: "Cogon Public Market",
  shortName: "Cogon",
  address: {
    streetAddress: "Cogon Public Market",
    addressLocality: "Cagayan de Oro City",
    addressRegion: "Misamis Oriental",
    postalCode: "9000",
    addressCountry: "PH"
  },
  coordinates: {
    latitude: 8.4773674,
    longitude: 124.6514096
  },
  rating: "3.9",
  reviewCount: 6360,
  businessHours: "04:30–18:30",
  openingHoursSpecification: {
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    opens: "04:30",
    closes: "18:30"
  },
  feedbackEmail: "claritleonelmnicol@gmail.com",
  mapUrl: "https://www.google.com/maps/place/Cogon+Public+Market/data=!4m7!3m6!1s0x32fff2d03e021631:0xbb1fd9c6cf6f9de!8m2!3d8.4773674!4d124.6514096!16s%2Fg%2F1tdw5l54!19sChIJMRYCPtDy_zIR3vn2bJz9sQs",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6818.544584177149!2d124.6514096!3d8.4773674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2d03e021631%3A0xbb1fd9c6cf6f9de!2sCogon%20Public%20Market!5e1!3m2!1sceb!2sPH!4v1786947978557!5m2!1sceb!2sPH"
} as const;

// SEO site name follows the convention: 景点名称 + 城市 + 旅游指南
// (Attraction Name + City + Travel Guide)
export const siteName = "Cogon Public Market Cagayan de Oro — Travel Guide";

export const metaDescription = "Giya sa Cogon Public Market sa Cagayan de Oro: lokasyon, Maps hours, pamalit ug kalainan sa night market sa Osmeña ug Justo Ramonal nga giapil sa city advisory.";

export const nightMarketAdvisory = "https://www.cagayandeoro.gov.ph/index.php/item/4029-night-market-sa-osmena-justo-ramonal-streets-suspendido.html";

export const faqs = [
  { q: "Asa ang Cogon Public Market?", a: "Naa kini sa Cagayan de Oro City, Misamis Oriental, Philippines. Ang map pin kay 8.4773674, 124.6514096; gamita ang eksaktong Cogon Public Market listing para sa direksyon." },
  { q: "Unsa ang oras sa public market?", a: "Sa pag-check niadtong 19 Oktubre 2026, Google Maps naglista ug 04:30–18:30 sa tanang pito ka adlaw. Kini alang sa public-market listing, dili garantiya sa oras sa matag tindahan o sa mga night-market street. Kumpirmaha ang live listing ug imong tuyo nga tindahan sa dili pa mobiyahe." },
  { q: "Pareho ba ang public market ug ang night market?", a: "Dili pareho ang adlaw nga public-market listing ug ang mga night-market street sa palibot. Ang city advisory sa 16 Hunyo 2026 nag-ingon nga temporaryong suspindido ang night market sa Osmeña ug Justo Ramonal Streets sugod 22 Hunyo hangtod sa bag-ong pahibalo. Dili kini pagsira sa tibuok adlaw nga public market. Wala pay reopening notice nga beripikado sa giya sa 19 Oktubre 2026; tan-awa ang pinakabag-ong city announcements." },
  { q: "Naa bay current stall directory ug price list?", a: "Walay kompleto ug kasamtangang stall directory o price list nga beripikado dinhi. Pangutan-a ang tindera sa produkto, timbang, quantity ug total nga presyo sa dili pa mobayad; i-check ang availability ug oras sa mismong tindahan." },
  { q: "Naa bay parking?", a: "Ang street ug market access mahimong busy. Tan-awa ang live traffic ug parking instructions sa adlaw nga mobisita, o pili ug taxi/drop-off kung mas sayon. Dili garantiya ang parking availability o presyo." },
  { q: "Unsaon paghatag ug correction?", a: "Gamita ang feedback block sa ubos ug ipadala ang sayop nga impormasyon, asa kini makita, ug ang imong source kung naa. Dili opisyal nga market contact ang correction email sa giya." }
];

// Outbound authority / E-E-A-T references (official and verifiable sources).
export const authorityLinks = [
  {
    label: "Cagayan de Oro City Government",
    href: "https://www.cagayandeoro.gov.ph/"
  }
] as const;

export const assets = {
  logo: "/favicon.svg",
  stamp: "/favicon.svg",
  historic: "https://farm5.staticflickr.com/4504/37519896460_96ebac29c0_k.jpg",
  produce: "https://farm5.staticflickr.com/4444/37508117430_cbf4613059_o.jpg",
  produceDisplay: "https://farm5.staticflickr.com/4505/37519089090_d20544602b_k.jpg"
} as const;
