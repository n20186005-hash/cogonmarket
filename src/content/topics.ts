/**
 * Programmatic SEO content registry for Cogon Public Market guide.
 * 41 long-tail topic pages grouped into 4 pillars. Content is Cebuano to
 * match the existing homepage (lang="ceb"). All unverified facts carry a
 * "i-check sa live listing" disclaimer; the night-market page states the
 * 2026-06-22 suspension. No aggregateRating is asserted anywhere.
 */

export type Pillar = "core" | "eat" | "play" | "plan";

export const PILLAR_LABEL: Record<Pillar, string> = {
  core: "Giya sa Merkado",
  eat: "Kaon ug Irom",
  play: "Libot ug Palit",
  plan: "Ruta ug Sakyanan"
};

export interface TopicFact {
  label: string;
  value: string;
}

export interface TopicBlock {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}

export interface TopicFaq {
  q: string;
  a: string;
}

export interface TopicContent {
  id: string;
  slug: string;
  pillar: Pillar;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  updated: string;
  facts?: TopicFact[];
  blocks: TopicBlock[];
  faqs: TopicFaq[];
  related: string[];
}

export const TOPICS: TopicContent[] = [
  // ---------------- PILLAR: core ----------------
  {
    id: "guide",
    slug: "cogon-market-guide",
    pillar: "core",
    metaTitle: "Cogon Public Market Cagayan de Oro — Kompletong Giya sa Pagbisita",
    metaDescription: "Kompletong giya sa Cogon Public Market: lokasyon, oras, parkiran, transport ug kalinaw. Third-party nga impormasyon; i-check ang live listing sa dili pa mobisita.",
    h1: "Kompletong Giya sa Cogon Public Market",
    lead: "Ang Cogon Public Market mao ang adlaw-adlaw nga merkado sa Cagayan de Oro — puno sa preskong prutas, isda, pamahaw ug mga pang-adlaw nga kinahanglanon sa balay.",
    updated: "19 Oktubre 2026",
    facts: [
      { label: "Lokasyon", value: "Cagayan de Oro City, Misamis Oriental" },
      { label: "Google Maps rating", value: "3.9 / 5 (6,368 reviews)" },
      { label: "Public-market hours", value: "04:30–18:30 (listing)" }
    ],
    blocks: [
      {
        heading: "Unsa ang Cogon Public Market?",
        paragraphs: [
          "Kini usa ka public market nga adunay wet section, dry section ug mga tindahan sa pagkaon. Popular siya sa mga lokal nga mang grocery ug sa mga bisita nga gusto makasinati sa ordinaryong adlaw sa siyudad."
        ]
      },
      {
        heading: "Planoha ang imong bisita",
        bullets: [
          "Moadto sayo sa buntag (05:00–09:00) para sa pinakapreskong paliton.",
          "Dad-a ang gagmay nga kuwarta ug reusable nga bag.",
          "I-check ang live Google Maps listing ug ang imong gustong tindahan sa dili pa mobiyahe."
        ],
        callout: "Ang oras sa piho nga stall mahimong lahi sa public-market listing. Pangutana sa tindera sa dili pa mobayad."
      }
    ],
    faqs: [
      { q: "Asa makita ang Cogon Public Market?", a: "Naas Cagayan de Oro City, Misamis Oriental. Ang Google Maps pin kay 8.4773674, 124.6514096; gamita ang Cogon Public Market listing para sa eksaktong agianan." },
      { q: "Tagpila ang pagpasulod?", a: "Walay beripikadong admission policy dinhi. Ang gasto depende sa imong paliton ug transport. I-check ang live listing sa dili pa mobisita." }
    ],
    related: ["cogon-market-address", "cogon-market-hours", "cogon-market-parking", "how-to-get-to-cogon-market"]
  },
  {
    id: "address",
    slug: "cogon-market-address",
    pillar: "core",
    metaTitle: "Cogon Market Address ug Map — Cagayan de Oro",
    metaDescription: "Eksakto nga address, Plus Code ug Google Maps sa Cogon Public Market. Plus Code FMG2+WH, Cagayan de Oro City, Misamis Oriental.",
    h1: "Address ug Map sa Cogon Public Market",
    lead: "Kung gusto nimo diretso nga agianan, gamita ang address ug map pin sa ubos.",
    updated: "19 Oktubre 2026",
    facts: [
      { label: "Address", value: "Cogon Public Market, Cagayan de Oro City" },
      { label: "Plus Code", value: "FMG2+WH Cagayan de Oro" },
      { label: "Coordinates", value: "8.4773674, 124.6514096" }
    ],
    blocks: [
      {
        heading: "Eksaktong lokasyon",
        paragraphs: [
          "Ang merkado naas distrito sa Cogon, duol sa downtown Cagayan de Oro. Ang labing sayon nga paagi sa pag-abot kay ang pag-gamit sa Google Maps app gamit ang Cogon Public Market listing."
        ]
      },
      {
        heading: "Paunsa pag-adto",
        bullets: [
          "Sakay ug jeepney o multicab nga moagi sa Cogon / downtown.",
          "Ang taxi o ride-hail mas sayon para sa diretso nga drop-off.",
          "I-check ang live traffic sa oras sa pagbisita."
        ]
      }
    ],
    faqs: [
      { q: "Unsa ang Plus Code sa Cogon Market?", a: "Ang Plus Code kay FMG2+WH, Cagayan de Oro, Misamis Oriental. Pwede nimo i-type sa Google Maps para makita ang eksaktong dapit." },
      { q: "Layo ba kini gikan sa downtown?", a: "Ang Cogon naa sa downtown area sa Cagayan de Oro, lakaw o mubo nga sakay ra gikan sa mga sentro sama sa Divisoria ug Limketkai." }
    ],
    related: ["how-to-get-to-cogon-market", "cogon-market-parking", "cogon-market-hours", "nearby-plaza-divisoria"]
  },
  {
    id: "hours",
    slug: "cogon-market-hours",
    pillar: "core",
    metaTitle: "Cogon Market Opening Hours — Oras sa Pag-abli",
    metaDescription: "Kailasan ang Cogon Public Market: ang public-market listing nagpakita ug 04:30–18:30. Ang oras sa stall mahimong lahi; i-check ang live listing.",
    h1: "Opening Hours sa Cogon Public Market",
    lead: "Ang pinakamaayong oras sa pagbisita depende sa kung unsa ang imong paliton — ang buntag ang labing berto para sa presko.",
    updated: "19 Oktubre 2026",
    facts: [
      { label: "Public-market listing", value: "04:30–18:30 (7 ka adlaw)" },
      { label: "Pinakamaayong oras", value: "05:00–09:00 sa buntag" },
      { label: "Note", value: "Lahi ang oras sa matag stall" }
    ],
    blocks: [
      {
        heading: "Ang listing vs ang tinuod nga stall",
        paragraphs: [
          "Sa pag-check niadtong 19 Oktubre 2026, ang Google Maps naglista ug 04:30–18:30 alang sa public market. Apan kini dili garantiya sa oras sa matag tindahan — ang ubang stall mubuksan ug mosira sa lahi nga takna."
        ],
        callout: "Kumpirmaha sa live listing ug sa imong gustong tindahan sa dili pa mobiyahe aron dili ka mawala sa oras."
      },
      {
        heading: "Pinakamaayong takna sa pagpalit",
        bullets: [
          "Buntag (05:00–09:00): pinakapreskong prutas, gulay ug isda.",
          "Udto hangtod hapon: mas hinay ang dag-om, maayo para sa dry goods.",
          "Domingo: busier, planoha ang parking daan."
        ]
      }
    ],
    faqs: [
      { q: "Unsa ang oras sa Cogon Market?", a: "Ang public-market listing nagpakita ug 04:30–18:30. Apan lahi ang oras sa matag stall; i-check ang live Google Maps listing sa dili pa mobisita." },
      { q: "Abli ba ang Cogon sa Domingo?", a: "Ang public-market listing nagpakita ug oras sa tanang pito ka adlaw, apan i-check sa live listing ang piho nga tindahan nga imong gipangita." }
    ],
    related: ["best-time-to-visit-cogon-market", "cogon-market-address", "cogon-market-guide"]
  },
  {
    id: "parking",
    slug: "cogon-market-parking",
    pillar: "core",
    metaTitle: "Cogon Market Parking Guide — Asay Parking?",
    metaDescription: "Parking duol sa Cogon Public Market: street parking ugbayad nga parking. Walay beripikadong tariff dinhi; i-check sa lugar.",
    h1: "Parking duol sa Cogon Public Market",
    lead: "Ang Cogon area mahimong busy, labi na sa buntag ug Domingo. Planoha ang imong parkiran o drop-off daan.",
    updated: "19 Oktubre 2026",
    facts: [
      { label: "Option", value: "Street parking ug pay parking" },
      { label: "Tariff", value: "Walay beripikado — i-check sa lugar" },
      { label: "Tip", value: "Sayo pag-abot = mas sayon" }
    ],
    blocks: [
      {
        heading: "Asay pwede park",
        paragraphs: [
          "Adunay street parking ug ubangbayad nga parking nga duol sa merkado. Ang availability ug presyo mahimong mag-usab, busa i-check ang mga lokal nga parking instruction sa adlaw nga mobisita."
        ]
      },
      {
        heading: "Tips para dili hassle",
        bullets: [
          "Moadto sa sayo (before 08:00) para mas daghan ang choice.",
          "Kung dad-on ang sakyanan, andam sa traffic sa buntag.",
          "Ang taxi o ride-hail drop-off kasagarang mas sayon kaysa pagpangita ug parking."
        ],
        callout: "Walay beripikadong parking tariff nga gipakita dinhi. Pangutana sa attendant sa dili pa park."
      }
    ],
    faqs: [
      { q: "Naay parking sa Cogon Market?", a: "Ang area adunay street ug pay parking, apan ang availability ug presyo dili garantiya. I-check ang live traffic ug local parking sa adlaw nga mobisita." },
      { q: "Tagpila ang parking?", a: "Walay beripikadong tariff nga gipakita sa giya. Pangutana sa parking attendant o tan-awa ang posted rate sa lugar." }
    ],
    related: ["how-to-get-to-cogon-market", "cogon-market-safety", "cogon-market-guide"]
  },
  {
    id: "how-to-get",
    slug: "how-to-get-to-cogon-market",
    pillar: "core",
    metaTitle: "How to Get to Cogon Market — Paunsa Pag-adto",
    metaDescription: "Paunsa pag-adto sa Cogon Public Market gikan sa airport, bus terminal ug downtown CDO. Jeepney, taxi ug ride-hail options.",
    h1: "Paunsa Pag-adto sa Cogon Public Market",
    lead: "Moadto ka gikan sa airport, bus terminal o downtown? Ani ang mga praktikal nga paagi.",
    updated: "19 Oktubre 2026",
    facts: [
      { label: "Gikan airport", value: "Laguindingan → downtown → Cogon" },
      { label: "Jeepney", value: "Ruta moagi sa Cogon / downtown" },
      { label: "Taxi / ride-hail", value: "Diretso nga drop-off" }
    ],
    blocks: [
      {
        heading: "Gikan sa downtown ug mga mall",
        paragraphs: [
          "Gikan sa Centrio, Limketkai, Gaisano City, SM CDO Downtown o Divisoria, sakay ug jeepney, multicab o motorela nga moagi sa Cogon, o gamita ang taxi / ride-hail para sa diretso nga drop-off."
        ]
      },
      {
        heading: "Gikan sa airport ug terminal",
        bullets: [
          "Laguindingan Airport: sakay paingon downtown hubs, unya ang katapusang sakay pa-Cogon.",
          "Agora Terminal: jeepney / multicab paingon Cogon.",
          "Bulua Terminal: samang pamaagi, depende sa ruta."
        ],
        callout: "Tan-awa ang dedicated pages para sa airport ug terminal sa ubos nga related links."
      }
    ],
    faqs: [
      { q: "Unsa ang pinakasayon nga sakyanan pa-Cogon?", a: "Ang taxi o ride-hail ang labing diretso nga paagi. Kung budget, ang jeepney nga moagi sa Cogon / downtown ang pinakabarato." },
      { q: "Layo ba gikan sa Laguindingan Airport?", a: "Ang Laguindingan Airport layo sa siyudad; kinahanglan nimo ang airport bus padulong downtown, unya ang katapusang sakay pa-Cogon." }
    ],
    related: ["laguindingan-airport-to-cogon-market", "agora-terminal-to-cogon-market", "bulua-terminal-to-cogon-market", "cogon-market-parking"]
  },
  {
    id: "safety",
    slug: "cogon-market-safety",
    pillar: "core",
    metaTitle: "Cogon Market Safety Tips — Kalinaw sa Pagbisita",
    metaDescription: "Tips sa kalinaw sa Cogon Public Market: bantay sa gamit, crowd, ug sa gabiing area. Third-party guide, dili opisyal.",
    h1: "Safety Tips sa Cogon Public Market",
    lead: "Ang merkado lig-on nga lugar sa adlaw, apan sama sa bisan unsang dagkong merkado, andam lang sa imong mga gamit.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Bantay sa imong gamit",
        bullets: [
          "Gapos ang imong bag ug buhion sa atubangan.",
          "Ilibot ang kuwarta sa lain-lain nga pocket.",
          "Likayi ang pagpakitag dagkong cash sa public."
        ]
      },
      {
        heading: "Kalinaw sa gabi",
        paragraphs: [
          "Ang daytime public market lahi sa mga night-market street. Tungod sa city advisory (16 Hunyo 2026), suspended ang night market sa Osmeña ug Justo Ramonal sugod 22 Hunyo hangtod bag-ong pahibalo. Kung mupalit sa gabi, pili ug maayong gilay-on ug dapit nga naay suga."
        ],
        callout: "Dili opisyal nga market contact ang giya; sa emergency, duol sa mga awtoridad sa siyudad."
      }
    ],
    faqs: [
      { q: "Safe ba ang Cogon Market?", a: "Sa adlaw, lig-on nga lugar ang merkado. Bantay lang sa imong gamit tungod sa dagkong tawo. Sa gabi, pag-amuma sa imong pagpalit tungod sa suspended nga night market." },
      { q: "Naay night market karon?", a: "Ang city advisory nag-anunsyo ug temporaryong suspensyon sa night market sa Osmeña ug Justo Ramonal sugod 22 Hunyo 2026. Tan-awa ang dedicated night-market page para sa detalye." }
    ],
    related: ["cogon-night-market", "cogon-market-guide", "cogon-market-night-food"]
  },
  {
    id: "what-to-buy",
    slug: "what-to-buy-at-cogon-market",
    pillar: "core",
    metaTitle: "What to Buy at Cogon Market — Unsay Paliton",
    metaDescription: "Unsay paliton sa Cogon Market: prutas, gulay, isda, dry goods ug pasalubong. Lista sa mga section ug tips sa pagpili.",
    h1: "Unsay Paliton sa Cogon Public Market",
    lead: "Gikan sa preskong ani hangtod sa pasalubong, ani ang mga section nga imong pwedeng bisitahon.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Mga section sa merkado",
        bullets: [
          "Wet section: isda, kabibe, karne ug gulay.",
          "Fruit section: prutas nga naa sa panahon.",
          "Dry goods: spices, rice, household items.",
          "Cooked food: carinderia ug baon."
        ]
      },
      {
        heading: "Tips sa pagpili",
        paragraphs: [
          "Pangitaa ang presko nga display ug pangutana sa tindera kung bag-o karong adlawa. Para sa pasalubong, tan-awa ang dry goods ug fruit preserves."
        ],
        callout: "Walay stall directory nga beripikado; paglibot ug pangutana sa suki kung asa ang labing nindot."
      }
    ],
    faqs: [
      { q: "Unsay pinakamaayong paliton sa Cogon?", a: "Ang prutas nga naa sa panahon, ang preskong isda ug gulay, ug ang cooked food sa buntag. Para sa pasalubong, ang dry goods ug fruit preserves." },
      { q: "Naay ba sila og stall directory?", a: "Walay beripikadong stall directory dinhi. Pangutana sa mga tindera ug sa market attendants sa imong gipangita." }
    ],
    related: ["cogon-market-local-fruits", "cogon-market-wet-market", "cogon-market-pasalubong", "cogon-market-food"]
  },
  {
    id: "vs-other",
    slug: "cogon-market-vs-other-markets",
    pillar: "core",
    metaTitle: "Cogon vs Other CDO Markets — Asay Mas Maayo",
    metaDescription: "Cogon vs Carmen, Divisoria ug Bulua markets sa Cagayan de Oro. Asay specialty sa matag usa para sa imong gusto.",
    h1: "Cogon Market vs Ibang Merkado sa CDO",
    lead: "Ang Cagayan de Oro adunay daghang merkado. Ani ang pagka-lahi aron mapili nimo kung asay angay kanimo.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Mga merkado sa siyudad",
        bullets: [
          "Cogon: central, duol sa downtown, mixed wet ug dry.",
          "Carmen: nailhan sa mga clothing ug household.",
          "Divisoria: shopping district duol sa park.",
          "Bulua: dagkong terminal area ug wholesale."
        ]
      },
      {
        heading: "Asay imong kinahanglan",
        paragraphs: [
          "Kung gusto nimo og presko nga pagkaon ug experience sa local market, ang Cogon ang labing duol sa downtown. Kung wholesale o clothing, tan-awa ang Carmen o Bulua."
        ]
      }
    ],
    faqs: [
      { q: "Asay pinakamaayong market sa CDO?", a: "Dependi sa imong gusto. Ang Cogon maayo para sa preskong pagkaon ug mixed shopping duol sa downtown; ang Carmen para sa clothing; ang Bulua para sa wholesale." },
      { q: "Layo ba ang Cogon sa Carmen?", a: "Ang duha naa sa Cagayan de Oro pero lahi nga distrito. Gamita ang jeepney o ride-hail; i-check ang live map para sa eksaktong biyahe." }
    ],
    related: ["nearby-carmen-market", "nearby-plaza-divisoria", "cogon-market-guide"]
  },
  {
    id: "best-time",
    slug: "best-time-to-visit-cogon-market",
    pillar: "core",
    metaTitle: "Best Time to Visit Cogon Market — Kailasan?",
    metaDescription: "Kailasan ang pinakamaayong oras ug adlaw sa pagbisita sa Cogon Market. Buntag, Domingo, ug seasonal tips.",
    h1: "Best Time to Visit Cogon Public Market",
    lead: "Ang tiyempo sa pagbisita naghubit sa presko nga paliton ug sa ka-busy sa merkado.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Oras sa adlaw",
        bullets: [
          "05:00–09:00: pinakapresko ug pinaka-busy.",
          "10:00–15:00: hinay, maayo para palit ug chika.",
          "Gabi: daytime market closes; night-market streets suspended."
        ]
      },
      {
        heading: "Adlaw ug tingtuig",
        paragraphs: [
          "Ang mga prutas nga naa sa panahon (halos tuig) mao ang draw. Sa mga holiday, mas daghan tawo — planoha ang parking ug oras daan."
        ]
      }
    ],
    faqs: [
      { q: "Unsa ang pinakamaayong oras sa Cogon?", a: "Sa buntag between 05:00 ug 09:00 kay pinakapresko ang paliton. Kung gusto nimo og hinay nga lugar, moadto sa udto hangtod hapon." },
      { q: "Unsa ang pinakamaayong adlaw?", a: "Ang weekdays kay mas hinay kaysa Domingo. Sa mga fruit season, bisan unsang adlaw maayo basta sayo ka." }
    ],
    related: ["cogon-market-hours", "cogon-market-rainy-day", "cogon-market-local-fruits"]
  },
  {
    id: "layout",
    slug: "cogon-market-layout",
    pillar: "core",
    metaTitle: "Cogon Market Layout & Sections — Asay Asa",
    metaDescription: "Unsay layout sa Cogon Public Market: wet, dry ug cooked sections. Walay beripikadong stall directory; tips sa paglibot.",
    h1: "Layout ug Sections sa Cogon Public Market",
    lead: "Wala kami og beripikadong floor plan, pero ani ang kasagarang pagkahimog public market sa Cogon.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Kasagarang pagkahimog section",
        bullets: [
          "Wet market: isda, karne, gulay sa usa ka area.",
          "Dry goods: rice, spices, household.",
          "Cooked food / carinderia: para sa moadto nga kaon.",
          "Fruit stalls: kasagarang duol sa entrance."
        ]
      },
      {
        heading: "Tips sa paglibot",
        paragraphs: [
          "Sugdi sa fruit ug veggie, unya ang wet market, unya ang cooked food para sa pamahaw. Pangutana sa mga tindera kung asa ang imong gipangita."
        ],
        callout: "Walay official stall directory nga gipakita dinhi; ang layout mahimong mag-usab."
      }
    ],
    faqs: [
      { q: "Naay map sulod sa Cogon Market?", a: "Walay beripikadong interior map nga gipakita sa giya. Pangutana sa mga tindera ug attendant sa dili pa mobisita." },
      { q: "Asay entrance?", a: "Ang fruit stalls kasagarang duol sa main entrance. Tan-awa ang Google Maps street view sa dili pa mobisita." }
    ],
    related: ["what-to-buy-at-cogon-market", "cogon-market-wet-market", "cogon-market-guide"]
  },
  {
    id: "faq",
    slug: "cogon-market-faq",
    pillar: "core",
    metaTitle: "Cogon Market FAQ — Paspas nga Tubag",
    metaDescription: "Mga kasagarang pangutana sa Cogon Public Market: address, oras, parking, safety, prutas ug transport. Third-party guide.",
    h1: "Cogon Public Market — FAQ",
    lead: "Mga paspas nga tubag sa kasagarang pangutana sa pagbisita sa Cogon.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Mga paspas nga tubag",
        bullets: [
          "Address: Cagayan de Oro City; Plus Code FMG2+WH.",
          "Oras: public-market listing 04:30–18:30 (lain ang stall).",
          "Parking: street ug pay parking; tariff i-check sa lugar.",
          "Night market: suspended sugod 22 Hunyo 2026."
        ]
      }
    ],
    faqs: [
      { q: "Asa ang Cogon Public Market?", a: "Naas Cagayan de Oro City, Misamis Oriental. Map pin 8.4773674, 124.6514096; gamita ang Cogon Public Market listing." },
      { q: "Pareho ba ang public market ug night market?", a: "Dili. Ang night market sa Osmeña ug Justo Ramonal suspended sugod 22 Hunyo 2026; ang daytime public market lain. Walay reopening notice nga beripikado sa 19 Oktubre 2026." },
      { q: "Naay beripikadong price list?", a: "Wala. Pangutana sa tindera ang timbang, quantity ug total sa dili pa mobayad." }
    ],
    related: ["cogon-market-guide", "cogon-market-address", "cogon-night-market", "cogon-market-hours"]
  },

  // ---------------- PILLAR: eat ----------------
  {
    id: "local-fruits",
    slug: "cogon-market-local-fruits",
    pillar: "eat",
    metaTitle: "CDO Famous Fruits at Cogon — Prutas sa Cagayan de Oro",
    metaDescription: "Mga prutas sa Cagayan de Oro nga makit-an sa Cogon Market: durian, lanzones, mangosteen, mango. Season ug tips sa pagpili.",
    h1: "CDO Famous Fruits sa Cogon Market",
    lead: "Ang Cagayan de Oro nailhan sa mga prutas. Sa Cogon Market, makit-an nimo ang mga prutas nga naa sa panahon sa barato nga presyo.",
    updated: "19 Oktubre 2026",
    facts: [
      { label: "Top fruit", value: "Durian, Lanzones, Mangosteen" },
      { label: "Season", value: "Lahi-lahi; i-check sa lugar" },
      { label: "Tip", value: "Palit sa buntag para presko" }
    ],
    blocks: [
      {
        heading: "Mga prutas nga imong makit-an",
        bullets: [
          "Durian — baho pero tamis; season kasagarang 8–12.",
          "Lanzones — local specialty sa Mindanao.",
          "Mangosteen — 'queen of fruits'.",
          "Mango, banana ug ubang seasonal."
        ]
      },
      {
        heading: "Tips sa pagpili ug presyo",
        paragraphs: [
          "Pangutana sa tindera kung bag-o ug kung unsa ang season karon. Ang presyo mag-usab; i-compare sa dagkong stall."
        ],
        callout: "Walay beripikadong price list; ang presyo depende sa season ug stall."
      }
    ],
    faqs: [
      { q: "Unsay famous fruits sa Cagayan de Oro?", a: "Ang durian, lanzones ug mangosteen ang mga nailhan. Makit-an nimo sa Cogon Market, labi na kung naa sa season." },
      { q: "Tagpila ang durian sa Cogon?", a: "Walay beripikadong presyo. Pangutana sa tindera sa imong gipangita ug i-compare ang duha ka stall." }
    ],
    related: ["cogon-market-durian", "cogon-market-tropical-fruits", "cogon-market-pasalubong", "best-time-to-visit-cogon-market"]
  },
  {
    id: "durian",
    slug: "cogon-market-durian",
    pillar: "eat",
    metaTitle: "Where to Buy Durian in CDO — Cogon Market Durian",
    metaDescription: "Asay durian sa Cagayan de Oro? Cogon Market durian guide: season, variety, pagpili ug pag-balot palawi.",
    h1: "Durian sa Cogon Market",
    lead: "Kung durian hunter ka, ang Cogon Market usa ka maayong stop — pero bantay sa season ug sa pag-balot.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Season ug variety",
        paragraphs: [
          "Ang durian sa Mindanao kasagarang mo-abot sa 8–12 ka bulan. Pangutana sa tindera kung unsa ang season karon; ang variety mahimong mag-usab."
        ]
      },
      {
        heading: "Tips sa pagpili ug pag-balot",
        bullets: [
          "Pangutana kung bag-o ug luto na.",
          "Ayaw pagkaon sa sulod sa merkado kung bawal.",
          "Balot ug tarong para dili molatok ang baho sa sakyanan."
        ],
        callout: "Walay beripikadong presyo; i-compare sa dagkong stall."
      }
    ],
    faqs: [
      { q: "Asay makapalit og durian sa CDO?", a: "Sa Cogon Market ug ubang local market. Pangutana sa tindera kung naa og season karon." },
      { q: "Unsa ang season sa durian?", a: "Kasagarang 8–12 ka bulan sa Mindanao, apan i-check sa tindera ang aktuwal nga season sa imong bisita." }
    ],
    related: ["cogon-market-local-fruits", "cogon-market-tropical-fruits", "cogon-market-pasalubong"]
  },
  {
    id: "tropical-fruits",
    slug: "cogon-market-tropical-fruits",
    pillar: "eat",
    metaTitle: "Cogon Market Tropical Fruits — Lanzones & Mangosteen",
    metaDescription: "Lanzones, mangosteen ug red dragon fruit sa Cogon Market. Season, pagpili ug nutritional note.",
    h1: "Tropical Fruits sa Cogon Market",
    lead: "Gawas sa durian, adunay uban pang tropical gems sa Cogon — lanzones, mangosteen ug panghimagat pa.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Lanzones ug Mangosteen",
        bullets: [
          "Lanzones — gikan sa Mindanao, tamis-aslom.",
          "Mangosteen — purple shell, white flesh.",
          "Red dragon fruit, rambutan ug uban pang seasonal."
        ]
      },
      {
        heading: "Pagpili",
        paragraphs: [
          "Pangutana sa tindera kung bag-o ug kung unsa ang pinakamaayo karon. Ang presko nga fruit mas bug-at ug walay bruise."
        ]
      }
    ],
    faqs: [
      { q: "Naay lanzones sa Cogon Market?", a: "Oo, kung naa sa season. Ang lanzones local specialty sa Mindanao; pangutana sa tindera ang availability." },
      { q: "Tagpila ang mangosteen?", a: "Walay beripikadong presyo. I-compare sa duha ka stall ug pangutana kung bag-o." }
    ],
    related: ["cogon-market-local-fruits", "cogon-market-durian", "cogon-market-pasalubong"]
  },
  {
    id: "food",
    slug: "cogon-market-food",
    pillar: "eat",
    metaTitle: "Cogon Market Food — Lutong-Balay ug Carinderia",
    metaDescription: "Asay kaon sa sulod sa Cogon Market: carinderia, lutong-balay, ug baon. Budget ug hygiene tips.",
    h1: "Pagkaon sa Cogon Public Market",
    lead: "Gusto ka og barato ug tinuod nga local food? Ang cooked section sa merkado puno ana.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Mga klaseng pagkaon",
        bullets: [
          "Carinderia — rice meals ug ulam.",
          "Lutong-balay — adobo, sinigang, grilled.",
          "Baon ug merienda."
        ]
      },
      {
        heading: "Tips sa kaon",
        paragraphs: [
          "Pili ug stall nga bisto ug init ang pagkaon. Pwede ra kaon sa sulod o i-takeout."
        ],
        callout: "Bantay sa hygiene; pangutana kung bag-o luto."
      }
    ],
    faqs: [
      { q: "Asay barato nga kaon sa Cogon?", a: "Sa cooked food section ug carinderia sa sulod sa merkado. Ang presyo kasagarang barato kaysa mall." },
      { q: "Safe ba kaonon ang cooked food?", a: "Pili ug stall nga init ug bisto ang pagkaon. Pangutana kung bag-o luto." }
    ],
    related: ["cogon-market-breakfast", "cogon-market-street-food", "cogon-market-seafood"]
  },
  {
    id: "breakfast",
    slug: "cogon-market-breakfast",
    pillar: "eat",
    metaTitle: "Cogon Market Breakfast Guide — Pamahaw sa Merkado",
    metaDescription: "Pamahaw sa Cogon Market: silog, sikwate, puto maya ug bakery. Sayong oras ug budget tips.",
    h1: "Pamahaw sa Cogon Public Market",
    lead: "Ang buntag sa Cogon nagsugod sa pamahaw — sikwate, puto maya ug silog.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Mga pamahaw nga imong makit-an",
        bullets: [
          "Sikwate ug puto maya — classic CDO breakfast.",
          "Silog variants — tapsi, longsi, tocino.",
          "Bakery — pandesal ug ubang tinapay."
        ]
      },
      {
        heading: "Sayong oras",
        paragraphs: [
          "Ang pinakamaayong oras sa pamahaw kay 05:00–09:00, samtang bag-o pa ang luto. Pwede nimo kombina ang pamahaw ug pagpalit."
        ]
      }
    ],
    faqs: [
      { q: "Unsa ang popular nga pamahaw sa CDO?", a: "Ang sikwate ug puto maya, plus ang silog variants. Makit-an nimo sa cooked section sa Cogon Market." },
      { q: "Unsa ang oras sa pamahaw stalls?", a: "Kasagarang sayo sa buntag. I-check ang live listing o pangutana sa tindera." }
    ],
    related: ["cogon-market-food", "cogon-market-cafes", "best-time-to-visit-cogon-market"]
  },
  {
    id: "seafood",
    slug: "cogon-market-seafood",
    pillar: "eat",
    metaTitle: "Cogon Market Seafood & Fresh Produce — Isda ug Gulay",
    metaDescription: "Preskong isda, seafood ug gulay sa Cogon wet market. Selection, season ug storage tips.",
    h1: "Seafood ug Fresh Produce sa Cogon",
    lead: "Para sa mga lokal nga magluto o bisita nga gusto og presko, ang wet section ang destinasyon.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Makit-an sa wet market",
        bullets: [
          "Isda — fresh catch gikan sa baybayon.",
          "Kabibe ug shellfish.",
          "Karne ug gulay."
        ]
      },
      {
        heading: "Tips sa pagpili",
        paragraphs: [
          "Pangutana kung bag-o ug asa gikan. Para sa hotel/stay, hangyo og cleaning ug store sa cold bag."
        ],
        callout: "Walay beripikadong price; i-compare ang stall."
      }
    ],
    faqs: [
      { q: "Naay preskong isda sa Cogon?", a: "Oo, sa wet market section. Pangutana sa tindera kung bag-o ug kung asa gikan." },
      { q: "Tagpila ang isda?", a: "Walay beripikadong presyo; mag-usab kada stall ug season. I-compare daan." }
    ],
    related: ["cogon-market-wet-market", "cogon-market-food", "what-to-buy-at-cogon-market"]
  },
  {
    id: "cheap-eats",
    slug: "cheap-eats-near-cogon-market",
    pillar: "eat",
    metaTitle: "Cheap Eats Near Cogon Market — Barato nga Kaon",
    metaDescription: "Barato nga restaurant ug carinderia duol sa Cogon Market. Budget meal, oras ug safe eating area.",
    h1: "Cheap Eats duol sa Cogon Market",
    lead: "Gawas sa merkado, adunay mga barato nga kaon duol — carinderia, bakery ug fast food type.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Mga klaseng cheap eats",
        bullets: [
          "Carinderia — rice meals sa barato.",
          "Bakery ug merienda spots.",
          "Fast-food ug food court sa duol nga mall."
        ]
      },
      {
        heading: "Budget ug safety",
        paragraphs: [
          "Ang merkado area ug downtown adunay daghang barato nga choice. Pili ug lugar nga bisto ug naay tawo."
        ]
      }
    ],
    faqs: [
      { q: "Asay barato nga kaon duol sa Cogon?", a: "Ang carinderia sa sulod ug duol sa merkado, plus ang mga bakery. Ang mall food court mas mahal gamay." },
      { q: "Layu ba ang mall?", a: "Ang SM CDO Downtown ug Limketkai duol ra sa Cogon; mubo nga sakay o lakaw." }
    ],
    related: ["cogon-market-food", "cogon-market-night-food", "nearby-gaston-park"]
  },
  {
    id: "cafes",
    slug: "cogon-market-cafes",
    pillar: "eat",
    metaTitle: "Cogon Market Cafes & Coffee — Kape duol sa Merkado",
    metaDescription: "Kape ug cafe duol sa Cogon Market: chain ug local, price range ug resting spots.",
    h1: "Kape ug Cafe duol sa Cogon Market",
    lead: "Human sa pagpalit, pwede ka mopahulay sa usa ka cafe duol sa merkado.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Mga option",
        bullets: [
          "Coffee chains sa duol nga mall.",
          "Local cafes sa downtown.",
          "Bakery nga nagbaligya og kape."
        ]
      },
      {
        heading: "Tips",
        paragraphs: [
          "Kung gusto nimo og wifi ug aircon, ang mall cafes ang mas maayo. Kung budget, ang bakery kape okay na."
        ]
      }
    ],
    faqs: [
      { q: "Naay cafe duol sa Cogon?", a: "Oo — sa downtown ug duol nga mall. I-check sa map para sa eksakto." },
      { q: "Tagpila ang kape?", a: "Nag-usab depende sa chain o local. Ang bakery kape kasagarang mas barato." }
    ],
    related: ["cogon-market-breakfast", "cheap-eats-near-cogon-market", "cogon-market-food"]
  },
  {
    id: "pasalubong",
    slug: "cogon-market-pasalubong",
    pillar: "eat",
    metaTitle: "Cogon Market Pasalubong — Food Souvenirs",
    metaDescription: "Pasalubong food gikan sa Cogon Market: dried fruit, preserves, snacks. Storage ug travel tips.",
    h1: "Pasalubong Food sa Cogon Market",
    lead: "Nagpangita og balik-balik nga pasalubong? Ang dry goods ug fruit preserves ang mga praktikal.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Mga pasalubong nga food",
        bullets: [
          "Dried fruit ug fruit preserves.",
          "Local snacks ug kakanin.",
          "Spices ug condiments."
        ]
      },
      {
        heading: "Tips sa pag-balot",
        paragraphs: [
          "Balot ug tarong para dili masamok. Kung flight, check ang liquid/soft rules sa airline."
        ],
        callout: "I-check ang expiration ug seal sa dili pa mopalit."
      }
    ],
    faqs: [
      { q: "Unsay maayong pasalubong gikan sa Cogon?", a: "Ang dried fruit, preserves ug local snacks. Pwede sad og prutas kung short trip ra." },
      { q: "Pwede ba sa flight ang prutas?", a: "Check sa airline ang rules sa fresh fruit. Ang dried ug sealed mas safe." }
    ],
    related: ["cogon-market-local-fruits", "cogon-market-tropical-fruits", "cogon-market-bargaining"]
  },
  {
    id: "street-food",
    slug: "cogon-market-street-food",
    pillar: "eat",
    metaTitle: "Cogon Market Street Food — Meryenda sa Dalan",
    metaDescription: "Street food ug merienda duol sa Cogon Market. Local snacks ug hygiene tips.",
    h1: "Street Food sa Cogon Market",
    lead: "Para sa meryenda, adunay mga local snacks duol sa merkado area.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Mga snacks",
        bullets: [
          "Puto, kutsinta ug local kakanin.",
          "Grilled ug fried merienda.",
          "Fruit shakes kung naa."
        ]
      },
      {
        heading: "Hygiene",
        paragraphs: [
          "Pili ug vendor nga bisto ug limpyo. Pangutana kung bag-o luto."
        ]
      }
    ],
    faqs: [
      { q: "Naay street food sa Cogon?", a: "Oo, duol sa merkado area adunay mga local snacks ug merienda. Pili ug limpyo nga vendor." },
      { q: "Safe ba ang street food?", a: "Pili ug vendor nga bag-o luto ug bisto. Bantay sa hygiene." }
    ],
    related: ["cogon-market-food", "cogon-market-breakfast", "cogon-market-night-food"]
  },

  // ---------------- PILLAR: play ----------------
  {
    id: "night-market",
    slug: "cogon-night-market",
    pillar: "play",
    metaTitle: "Cogon Night Market — Status (Suspended) 2026",
    metaDescription: "Cogon night market update: suspended sa Osmeña ug Justo Ramonal sugod 22 Hunyo 2026. Daytime market open; tan-awa ang city advisory.",
    h1: "Cogon Night Market — Karon nga Status",
    lead: "Importante: ang night market sa Osmeña ug Justo Ramonal Street suspended sugod 22 Hunyo 2026 tungod sa city advisory.",
    updated: "19 Oktubre 2026",
    facts: [
      { label: "Status", value: "Suspended sugod 22 Hunyo 2026" },
      { label: "Area", value: "Osmeña ug Justo Ramonal Streets" },
      { label: "Source", value: "CDO City Advisory, 16 Hunyo 2026" }
    ],
    blocks: [
      {
        heading: "Unsa ang karon nga status",
        paragraphs: [
          "Ang city advisory dated 16 Hunyo 2026 nag-anunsyo ug temporaryong suspensyon sa night market sa Osmeña ug Justo Ramonal Streets sugod 22 Hunyo, hangtod sa bag-ong pahibalo. Wala pay reopening notice nga beripikado sa 19 Oktubre 2026."
        ],
        callout: "Kini dili pagsira sa daytime public market. Ang Cogon Public Market (04:30–18:30 listing) lahi sa night-market streets."
      },
      {
        heading: "Asay imong mahimo karon",
        bullets: [
          "Bisitaha ang daytime public market sa buntag.",
          "Pangita og dinner sa nearby restaurants (tan-awa ang cheap-eats page).",
          "I-check ang bag-ong city announcement sa dili pa mobisita."
        ]
      }
    ],
    faqs: [
      { q: "Abli ba ang Cogon night market karon?", a: "Dili karon. Suspended ang night market sa Osmeña ug Justo Ramonal sugod 22 Hunyo 2026. Ang daytime market lahi ug open." },
      { q: "Asa makakuha og bag-ong update?", a: "Tan-awa ang official CDO City Government announcement ug advisory. Ang link naa sa footer sa giya." }
    ],
    related: ["cogon-market-night-food", "cheap-eats-near-cogon-market", "cogon-market-safety", "cogon-market-day-market"]
  },
  {
    id: "day-market",
    slug: "cogon-day-market",
    pillar: "play",
    metaTitle: "Cogon Day Market Experience — Buntag sa Merkado",
    metaDescription: "Experience sa Cogon day market: buntag nga ambiance, vendors, ug local culture. Photography courtesy ug tips.",
    h1: "Cogon Day Market Experience",
    lead: "Ang buntag sa Cogon puno sa kinabuhi — mga tindera, preskong paliton ug ang rhythm sa siyudad.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Unsa ang ma-experience",
        bullets: [
          "Buntag nga hustle sa wet ug dry sections.",
          "Local vendors ug ilang mga produkto.",
          "Authentic CDO daily life."
        ]
      },
      {
        heading: "Photography ug courtesy",
        paragraphs: [
          "Pwede magpicture, pero hangyo permiso kung kuhanon ang mga tindera. Bantay sa privacy."
        ]
      }
    ],
    faqs: [
      { q: "Unsa ang experience sa Cogon day market?", a: "Ang buntag nga merkado puno sa preskong paliton ug local culture. Maayo siya para sa photos ug people-watching." },
      { q: "Pwede magpicture?", a: "Oo, pero hangyo permiso kung kuhanon ang mga tawo ug tindera." }
    ],
    related: ["cogon-market-photo-spots", "cogon-market-layout", "best-time-to-visit-cogon-market"]
  },
  {
    id: "shopping",
    slug: "cogon-market-shopping",
    pillar: "play",
    metaTitle: "Cogon Market Shopping Guide — Palit sa Merkado",
    metaDescription: "Shopping sa Cogon Market: groceries, dry goods, household. Vs supermarket ug budget tips.",
    h1: "Shopping Guide sa Cogon Market",
    lead: "Gusto og practical nga shopping? Ang merkado mas barato kaysa supermarket para sa adlaw-adlaw.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Mga paliton",
        bullets: [
          "Groceries ug rice.",
          "Spices ug condiments.",
          "Household ug kitchen items."
        ]
      },
      {
        heading: "Market vs supermarket",
        paragraphs: [
          "Ang merkado kasagarang mas barato pero walay aircon. Para sa bulk, maayo ang merkado; para sa convenience, ang mall."
        ]
      }
    ],
    faqs: [
      { q: "Mas barato ba sa merkado?", a: "Kasagarang oo para sa fresh ug dry goods, pero i-compare. Ang supermarket mas limpyo ug aircon." },
      { q: "Naay ba sila og household items?", a: "Oo, sa dry goods section. Pangutana sa tindera kung asa." }
    ],
    related: ["what-to-buy-at-cogon-market", "cogon-market-bargaining", "cogon-market-handicrafts"]
  },
  {
    id: "handicrafts",
    slug: "cogon-market-handicrafts",
    pillar: "play",
    metaTitle: "Cogon Market Handicrafts & Local Products",
    metaDescription: "Local products ug handicrafts sa Cogon Market. Souvenir type ug fair-trade tips.",
    h1: "Handicrafts ug Local Products sa Cogon",
    lead: "Gusto og dili-pagkaon nga souvenir? Tan-awa ang local products sa merkado.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Mga produkto",
        bullets: [
          "Local woven ug bamboo items.",
          "Handmade ug regional products.",
          "Festival decorations."
        ]
      },
      {
        heading: "Tips",
        paragraphs: [
          "I-check ang quality ug pangutana kung local-made. Walay beripikadong stall directory; paglibot."
        ]
      }
    ],
    faqs: [
      { q: "Naay handicrafts sa Cogon?", a: "Pwede, sa dry goods ug local products section. I-check ang quality ug source." },
      { q: "Asay maayong souvenir?", a: "Ang local woven ug food preserves ang praktikal. I-compare sa duha ka stall." }
    ],
    related: ["cogon-market-pasalubong", "cogon-market-shopping", "cogon-market-bargaining"]
  },
  {
    id: "wet-market",
    slug: "cogon-market-wet-market",
    pillar: "play",
    metaTitle: "Cogon Wet Market — Isda, Karne ug Gulay",
    metaDescription: "Wet market sa Cogon: meat, fish, veggies. Layout, selection ug hygiene.",
    h1: "Cogon Wet Market",
    lead: "Ang wet section ang kasingkasing sa public market — isda, karne ug gulay.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Makit-an dinhi",
        bullets: [
          "Fresh fish ug seafood.",
          "Karne ug poultry.",
          "Gulay ug herbs."
        ]
      },
      {
        heading: "Tips",
        paragraphs: [
          "Pangutana kung bag-o ug asa gikan. Hangyo og cleaning kung dad-on sa hotel."
        ],
        callout: "Walay beripikadong price; i-compare ang stall."
      }
    ],
    faqs: [
      { q: "Unsa ang wet market?", a: "Ang section sa isda, karne ug gulay. Ang Cogon adunay kompleto nga wet market." },
      { q: "Safe ba ang preskong isda?", a: "Pili ug stall nga bisto ug bag-o. Pangutana kung asa gikan." }
    ],
    related: ["cogon-market-seafood", "what-to-buy-at-cogon-market", "cogon-market-layout"]
  },
  {
    id: "plaza-divisoria",
    slug: "nearby-plaza-divisoria",
    pillar: "play",
    metaTitle: "Plaza Divisoria Near Cogon — Duol nga Libot",
    metaDescription: "Plaza Divisoria Cagayan de Oro duol sa Cogon Market. History, things to do ug walking distance.",
    h1: "Plaza Divisoria — Duol sa Cogon",
    lead: "Human sa merkado, pwede nimo lakwaton ang Plaza Divisoria sa downtown.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Unsa ang Plaza Divisoria",
        paragraphs: [
          "Usa ka public park ug landmark sa downtown CDO, duol sa merkado. Popular para sa evening stroll ug mga local event."
        ]
      },
      {
        heading: "Paunsa",
        bullets: [
          "Lakaw o mubo nga jeepney gikan Cogon.",
          "Maayo nga sunod nga stop human sa shopping.",
          "I-check ang events sa city advisory."
        ]
      }
    ],
    faqs: [
      { q: "Layo ba ang Plaza Divisoria sa Cogon?", a: "Wala kaayo; naa sa downtown. Lakaw o mubo nga sakay ra." },
      { q: "Unsa ang activity sa Divisoria?", a: "Park stroll, local events ug food. I-check ang city advisory sa events." }
    ],
    related: ["nearby-gaston-park", "cogon-market-day-market", "cogon-market-guide"]
  },
  {
    id: "carmen",
    slug: "nearby-carmen-market",
    pillar: "play",
    metaTitle: "Carmen Market Near Cogon — CDO Markets",
    metaDescription: "Carmen Public Market Cagayan de Oro: specialty, vs Cogon, transport.",
    h1: "Carmen Market — Usa ka Laing Merkado",
    lead: "Kung gusto nimo og lain nga merkado experience, ang Carmen naa pud sa CDO.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Asay specialty sa Carmen",
        paragraphs: [
          "Ang Carmen Market nailhan sa clothing ug household items. Lahi sa Cogon nga mixed fresh market."
        ]
      },
      {
        heading: "Transport",
        bullets: [
          "Jeepney o ride-hail gikan Cogon.",
          "I-check ang live map para sa eksakto."
        ]
      }
    ],
    faqs: [
      { q: "Unsa ang lahi sa Carmen ug Cogon?", a: "Ang Carmen mas focus sa clothing ug household; ang Cogon mixed fresh ug dry. Dependi sa imong gusto." },
      { q: "Layo ba ang Carmen?", a: "Lahi nga distrito sa CDO. Gamita ang jeepney o ride-hail; i-check ang map." }
    ],
    related: ["cogon-market-vs-other-markets", "nearby-plaza-divisoria", "cogon-market-guide"]
  },
  {
    id: "gaston-park",
    slug: "nearby-gaston-park",
    pillar: "play",
    metaTitle: "Gaston Park & CDO Cathedral — Near Cogon",
    metaDescription: "Gaston Park ug Saint Augustine Cathedral duol sa Cogon. History ug family-friendly stop.",
    h1: "Gaston Park ug Cathedral",
    lead: "Para sa cultural stop, ang Gaston Park ug Cathedral naa sa downtown duol sa merkado.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Mga destinasyon",
        bullets: [
          "Gaston Park — public park sa downtown.",
          "Saint Augustine Metropolitan Cathedral.",
          "Maayo para sa family stroll."
        ]
      },
      {
        heading: "Transport",
        paragraphs: [
          "Lakaw o mubo nga sakay gikan Cogon. I-check ang map para sa agianan."
        ]
      }
    ],
    faqs: [
      { q: "Unsa ang Gaston Park?", a: "Usa ka public park sa downtown Cagayan de Oro, duol sa cathedral. Maayo para sa hinay nga libot." },
      { q: "Family-friendly ba?", a: "Oo, open space ug cathedral visit. Maayo para sa mga bata ug photos." }
    ],
    related: ["nearby-plaza-divisoria", "cogon-market-family-guide", "cogon-market-photo-spots"]
  },
  {
    id: "photo-spots",
    slug: "cogon-market-photo-spots",
    pillar: "play",
    metaTitle: "Cogon Market Photo Spots — Photography Tips",
    metaDescription: "Best photo spots ug tips sa Cogon Market. Lighting, courtesy ug composition.",
    h1: "Photo Spots sa Cogon Market",
    lead: "Gusto og content? Ang merkado puno og color ug kinabuhi — pero bantay sa courtesy.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Best ka-oras",
        bullets: [
          "Buntag — soft light ug presko nga display.",
          "Fruit ug veggie stalls — colorful.",
          "Cooked food — steam ug action."
        ]
      },
      {
        heading: "Courtesy",
        paragraphs: [
          "Hangyo permiso kung kuhanon ang mga tawo. Ayaw sagda ang privacy."
        ]
      }
    ],
    faqs: [
      { q: "Asay pinakamaayong oras para picture?", a: "Sa buntag, soft ang light ug presko ang paliton. Ang fruit stalls colorful." },
      { q: "Pwede kuhanon ang vendors?", a: "Oo, pero hangyo permiso. Bantay sa privacy." }
    ],
    related: ["cogon-market-day-market", "cogon-market-photo-spots", "nearby-gaston-park"]
  },
  {
    id: "bargaining",
    slug: "cogon-market-bargaining",
    pillar: "play",
    metaTitle: "Cogon Market Bargaining Tips — Pagusab sa Presyo",
    metaDescription: "Tips sa paghusay sa presyo sa Cogon Market. Courtesy, cash ug laing tips.",
    h1: "Bargaining Tips sa Cogon Market",
    lead: "Gusto og tipid? Ani ang praktikal nga paagi sa paghusay sa presyo — nga respeto.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Praktikal nga tips",
        bullets: [
          "Respeto ug ngiti sa paghusay.",
          "Cash ug small bills ang gamiton.",
          "Buli ra kung dili fixed price."
        ]
      },
      {
        heading: "Likayi",
        paragraphs: [
          "Ayaw paghusay sa fixed-price stalls. I-compare daan ang duha ka tindera."
        ]
      }
    ],
    faqs: [
      { q: "Pwede ba husayan ang presyo sa Cogon?", a: "Sa ubang stall, oo — pero respeto. Ang fixed-price dili pwede." },
      { q: "Cash ba ang mas maayo?", a: "Oo, dad-a ang small bills. Mas sayon ang transaksyon sa merkado." }
    ],
    related: ["cogon-market-shopping", "cogon-market-pasalubong", "what-to-buy-at-cogon-market"]
  },

  // ---------------- PILLAR: plan ----------------
  {
    id: "half-day",
    slug: "cogon-market-half-day-itinerary",
    pillar: "plan",
    metaTitle: "Cogon Market Half-Day Itinerary — 3-4 Ka Oras",
    metaDescription: "Half-day itinerary sa Cogon Market: pamahaw, fruits, wet market, coffee, Divisoria. Timeline ug budget.",
    h1: "Half-Day Itinerary sa Cogon Market",
    lead: "Kung gamay ra ang imong oras, ani ang maayong 3–4 ka oras nga plano.",
    updated: "19 Oktubre 2026",
    facts: [
      { label: "Duration", value: "3–4 ka oras" },
      { label: "Start", value: "05:30 sa buntag" },
      { label: "Budget", value: "Depende sa paliton" }
    ],
    blocks: [
      {
        heading: "Timeline",
        bullets: [
          "05:30 — abot, pamahaw sa cooked section.",
          "06:30 — fruit ug veggie shopping.",
          "07:30 — wet market ug coffee.",
          "08:30 — lakaw pa-Divisoria."
        ]
      },
      {
        heading: "Budget ug tips",
        paragraphs: [
          "Ang merkado barato, pero i-budget ang transport. Moadto sayo para presko."
        ]
      }
    ],
    faqs: [
      { q: "Unsa ang maayong half-day plan?", a: "Pamahaw, fruits, wet market, coffee, unya Divisoria stroll. Pwede sa 3–4 ka oras." },
      { q: "Sayo ba dapat moadto?", a: "Oo — 05:30 hangtod 09:00 kay pinakapresko ug pinaka-busy." }
    ],
    related: ["best-time-to-visit-cogon-market", "cogon-market-breakfast", "nearby-plaza-divisoria", "cogon-market-local-fruits"]
  },
  {
    id: "full-day",
    slug: "cdo-full-day-itinerary",
    pillar: "plan",
    metaTitle: "CDO Full-Day Itinerary with Cogon — 1 Ka Adlaw",
    metaDescription: "Cagayan de Oro full-day itinerary: Cogon Market, downtown landmarks, lunch, white-water rafting option.",
    h1: "CDO Full-Day Itinerary with Cogon",
    lead: "Gusto og kompleto nga adlaw? Sugdi sa Cogon, unya ang ubang CDO spots.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Ang adlaw",
        bullets: [
          "Buntag — Cogon Market (pamahaw + shopping).",
          "Udto — lunch sa downtown, libot sa Divisoria/Gaston Park.",
          "Hapon — white-water rafting option o mall.",
          "Gabi — dinner (night market suspended; tan-awa ang cheap-eats)."
        ]
      },
      {
        heading: "Tips",
        paragraphs: [
          "Kung rafting, ang Cogon maayo ngasupply stop sa dalan. I-check ang operator schedule."
        ]
      }
    ],
    faqs: [
      { q: "Unsa ang maayong 1-day sa CDO?", a: "Cogon sa buntag, downtown landmarks sa udto, rafting o mall sa hapon. I-check ang mga transport." },
      { q: "Asay dinner kung suspended ang night market?", a: "Tan-awa ang cheap-eats page para sa restaurants duol sa merkado." }
    ],
    related: ["cogon-market-half-day-itinerary", "cogon-market-to-white-water-rafting", "cheap-eats-near-cogon-market", "nearby-gaston-park"]
  },
  {
    id: "airport",
    slug: "laguindingan-airport-to-cogon-market",
    pillar: "plan",
    metaTitle: "Laguindingan Airport to Cogon Market — Transport",
    metaDescription: "Paunsa gikan Laguindingan Airport padulong Cogon Market: airport bus, taxi, duration ug drop-off.",
    h1: "Laguindingan Airport to Cogon Market",
    lead: "Gikan airport, ang Cogon naa pa sa siyudad — duha ka sakay ang kasagarang kinahanglan.",
    updated: "19 Oktubre 2026",
    facts: [
      { label: "From", value: "Laguindingan Airport" },
      { label: "To", value: "Cogon Market, CDO" },
      { label: "Via", value: "Downtown hubs" }
    ],
    blocks: [
      {
        heading: "Steps",
        bullets: [
          "Sakay ug airport bus padulong downtown (Centrio/Limketkai/SM).",
          "Gikan downtown, jeepney o ride-hail pa-Cogon.",
          "Ang taxi diretso pero mas mahal."
        ]
      },
      {
        heading: "Duration ug tips",
        paragraphs: [
          "I-allow og dugay nga oras kung traffic o ulan. Check ang live map near sa merkado."
        ],
        callout: "Ang fare mag-usab; i-check sa operator kung beripikado."
      }
    ],
    faqs: [
      { q: "Unsa ang pinakasayon gikan airport pa-Cogon?", a: "Airport bus padulong downtown, unya jeepney/ride-hail pa-Cogon. O taxi diretso kung budget." },
      { q: "Tagpila ang airport padulong CDO?", a: "Nag-usab ang fare; i-check sa airport bus operator. Walay beripikado nga presyo sa giya." }
    ],
    related: ["how-to-get-to-cogon-market", "cogon-market-parking", "cogon-market-guide"]
  },
  {
    id: "agora",
    slug: "agora-terminal-to-cogon-market",
    pillar: "plan",
    metaTitle: "Agora Terminal to Cogon Market — Jeepney Route",
    metaDescription: "Agora Bus Terminal to Cogon Market: jeepney/multicab route, duration, walk connection.",
    h1: "Agora Terminal to Cogon Market",
    lead: "Gikan sa Agora (main bus terminal), ang Cogon duol ra — jeepney o multicab.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Steps",
        bullets: [
          "Pangitaa ang rutang moagi sa Cogon / downtown.",
          "Tan-awa ang sign sa sakyanan.",
          "Manaog duol sa merkado; lakaw kung gikinahanglan."
        ]
      },
      {
        heading: "Tips",
        paragraphs: [
          "Pangutana sa drayber o konduktor sa dili pa mosakay aron sigurado."
        ]
      }
    ],
    faqs: [
      { q: "Unsa ang sakyan gikan Agora pa-Cogon?", a: "Jeepney o multicab nga moagi sa Cogon/downtown. Tan-awa ang sign ug pangutana sa drayber." },
      { q: "Layo ba ang Agora sa Cogon?", a: "Wala kaayo — mubo nga sakay. I-check ang live map." }
    ],
    related: ["how-to-get-to-cogon-market", "bulua-terminal-to-cogon-market", "cogon-market-parking"]
  },
  {
    id: "bulua",
    slug: "bulua-terminal-to-cogon-market",
    pillar: "plan",
    metaTitle: "Bulua Terminal to Cogon Market — Route",
    metaDescription: "Bulua Bus Terminal to Cogon Market: jeepney route, duration, connection.",
    h1: "Bulua Terminal to Cogon Market",
    lead: "Ang Bulua usa ka dako nga terminal sa CDO. Gikan dinhi, jeepney padulong Cogon.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Steps",
        bullets: [
          "Pangitaa ang rutang moagi sa downtown/Cogon.",
          "Tan-awa ang sign sa sakyanan.",
          "Manaog duol sa merkado."
        ]
      },
      {
        heading: "Tips",
        paragraphs: [
          "Ang ruta mahimong mag-usab; pangutana sa drayber. I-check ang live map."
        ]
      }
    ],
    faqs: [
      { q: "Unsa ang sakyan gikan Bulua pa-Cogon?", a: "Jeepney nga moagi sa downtown/Cogon. Tan-awa ang sign ug pangutana sa drayber." },
      { q: "Layo ba ang Bulua?", a: "Lahi nga dapit sa CDO; mubo hangtod tunga nga sakay. I-check ang map." }
    ],
    related: ["how-to-get-to-cogon-market", "agora-terminal-to-cogon-market", "cogon-market-parking"]
  },
  {
    id: "white-water",
    slug: "cogon-market-to-white-water-rafting",
    pillar: "plan",
    metaTitle: "Cogon Market to White Water Rafting — Supply Stop",
    metaDescription: "Cogon Market as supply stop before CDO white-water rafting. Water, fruits, pickup points.",
    h1: "Cogon Market to White Water Rafting",
    lead: "Kung rafting ang plano, ang Cogon maayo nga stop para sa supplies sa dalan.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Supply stop",
        bullets: [
          "Palit og tubig ug prutas sa merkado.",
          "Ang rafting operators kasagarang nay pickup point.",
          "I-check ang schedule sa operator."
        ]
      },
      {
        heading: "Tips",
        paragraphs: [
          "Ang Cogon naa sa siyudad, ang rafting sa river area — planoha ang travel time."
        ]
      }
    ],
    faqs: [
      { q: "Pwede ba mag-supply sa Cogon antes rafting?", a: "Oo — tubig, prutas ug snacks. Ang operators kasagarang nay pickup; i-check sa ilang schedule." },
      { q: "Layo ang rafting gikan Cogon?", a: "Ang rafting area naa sa river sa gawas sa siyudad; i-allow og travel time. Walay beripikado nga distansya sa giya." }
    ],
    related: ["cdo-full-day-itinerary", "cogon-market-local-fruits", "how-to-get-to-cogon-market"]
  },
  {
    id: "rainy-day",
    slug: "cogon-market-rainy-day",
    pillar: "plan",
    metaTitle: "Cogon Market Rainy Day Guide — Kung Ulan",
    metaDescription: "Rainy day sa Cogon Market ug CDO: covered market, indoor alternatives, safety.",
    h1: "Rainy Day Guide — Cogon Market",
    lead: "Ulan? Ang merkado naay cover, pero andam sa mga tip.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Sa merkado",
        bullets: [
          "Ang public market naay cover — pwede gihapon palit.",
          "Bantay sa basa nga salog.",
          "Dad-a ang payong ug extra bag."
        ]
      },
      {
        heading: "Indoor alternatives",
        paragraphs: [
          "Kung grabe ang ulan, ang mall (SM CDO Downtown, Limketkai) ang lain nga option."
        ]
      }
    ],
    faqs: [
      { q: "Pwede ba bisitahon ang Cogon kung ulan?", a: "Oo, naay cover ang public market. Bantay lang sa basa nga salog." },
      { q: "Asay indoor alternative?", a: "Ang mga mall sa downtown. I-check ang map." }
    ],
    related: ["best-time-to-visit-cogon-market", "cogon-market-shopping", "cogon-market-safety"]
  },
  {
    id: "family",
    slug: "cogon-market-family-guide",
    pillar: "plan",
    metaTitle: "Cogon Market Family Visit Guide — With Kids",
    metaDescription: "Family guide sa Cogon Market: stroller, kid-friendly food, restrooms, safety.",
    h1: "Family Visit Guide — Cogon Market",
    lead: "Moadto with kids? Ani ang mga tips para mas sayon ang bisita.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Tips sa bata",
        bullets: [
          "Ang ubang passage dili flat — gamita ang carrier kaysa stroller.",
          "Kid-friendly food sa cooked section.",
          "Bantay sa safety sa dagkong tawo."
        ]
      },
      {
        heading: "Rest ug safety",
        paragraphs: [
          "Pwede mopahulay sa coffee o food area. Bantay sa bata duol sa wet section."
        ]
      }
    ],
    faqs: [
      { q: "Stroller-friendly ba ang Cogon?", a: "Ang ubang passage dili flat; carrier mas maayo. Bantay sa crowded areas." },
      { q: "Naay kid food?", a: "Oo, sa cooked ug bakery section. Pili ug limpyo." }
    ],
    related: ["cogon-market-safety", "nearby-gaston-park", "cogon-market-food"]
  },
  {
    id: "accessibility",
    slug: "cogon-market-accessibility",
    pillar: "plan",
    metaTitle: "Cogon Market Accessibility Guide — Wheelchair & Senior",
    metaDescription: "Accessibility sa Cogon Market: pathways, rest points, companion tips.",
    h1: "Accessibility Guide — Cogon Market",
    lead: "Para sa wheelchair ug senior, ani ang praktikal nga mga tips.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Reality check",
        bullets: [
          "Ang uban nga area dili flat ug busy.",
          "Naay rest points sa food ug open areas.",
          "Companion nagatabang sa crowded lanes."
        ]
      },
      {
        heading: "Tips",
        paragraphs: [
          "Moadto sa hinay nga oras (udto) para mas limpyo ang lane. I-check ang map para sa accessible entrance."
        ]
      }
    ],
    faqs: [
      { q: "Wheelchair-friendly ba ang Cogon?", a: "Ang ubang area dili flat ug busy. Companion ug hinay nga oras ang girekomenda." },
      { q: "Naay rest points?", a: "Oo, sa food ug open areas. Pwede mopahulay intermittently." }
    ],
    related: ["cogon-market-family-guide", "cogon-market-layout", "cogon-market-safety"]
  },
  {
    id: "night-food",
    slug: "cogon-market-night-food",
    pillar: "plan",
    metaTitle: "Cogon Market Night Food Crawl — Dinner Options",
    metaDescription: "Night food duol sa Cogon Market. Night market suspended; dinner sa restaurants ug carinderia.",
    h1: "Night Food Crawl duol sa Cogon",
    lead: "Gusto og gabii nga kaon? Bantay: suspended ang night market — adto sa restaurants.",
    updated: "19 Oktubre 2026",
    blocks: [
      {
        heading: "Where to eat sa gabi",
        bullets: [
          "Restaurants ug carinderia duol sa merkado.",
          "Mall food court kung gusto ug aircon.",
          "Bantay sa lugar nga naay suga."
        ]
      },
      {
        heading: "Safety",
        paragraphs: [
          "Tungod sa suspended nga night market, pili ug maayong gilay-on ug dapit. Bantay sa imong gamit."
        ],
        callout: "Ang night market sa Osmeña ug Justo Ramonal suspended sugod 22 Hunyo 2026."
      }
    ],
    faqs: [
      { q: "Asay kaon sa gabi duol sa Cogon?", a: "Ang restaurants ug carinderia duol sa merkado, o ang mall food court. Ang night market suspended." },
      { q: "Open ba ang merkado sa gabi?", a: "Ang daytime public market closes (listing 04:30–18:30). Ang night-market streets suspended." }
    ],
    related: ["cogon-night-market", "cheap-eats-near-cogon-market", "cogon-market-safety"]
  }
];

export function getTopic(slug: string): TopicContent | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicsByPillar(pillar: Pillar): TopicContent[] {
  return TOPICS.filter((t) => t.pillar === pillar);
}

export function relatedTopics(slugs: string[]): TopicContent[] {
  return slugs
    .map((s) => getTopic(s))
    .filter((t): t is TopicContent => Boolean(t));
}
