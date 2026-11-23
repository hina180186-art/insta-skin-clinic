export interface ConcernData {
  slug: string;
  title: string;
  subtitle: string;
  heroBadge: string;
  heroImage: string;
  overview: string;
  causesTitle: string;
  causesIntro: string;
  causes: {
    iconName: string;
    title: string;
    description: string;
  }[];
  failsTitle: string;
  failsDescription: string;
  worksTitle: string;
  worksDescription: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedTreatmentSlug: string;
  relatedTreatmentName: string;
}

export const CONCERNS: Record<string, ConcernData> = {
  "hair-fall-thinning": {
    slug: "hair-fall-thinning",
    title: "Hair Fall, Thinning & Scalp Alopecia",
    subtitle: "Clinical guide to diagnosing and treating hair thinning, male/female pattern alopecia, and excessive shedding at Insta Skin Clinic, Kashmir Rd, Peoples Colony, Gujranwala.",
    heroBadge: "Trichology & Scalp Medicine",
    heroImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
    overview: "Hair loss is not just aesthetic—it is a physiological biomarker. In Gujranwala, water hardness, dietary ferritin deficiencies, and genetic DHT sensitivity accelerate follicle miniaturization. At Insta Skin Clinic on Kashmir Road, we replace unverified parlor oils with medically proven autologous PRP, exosome therapy, and targeted trichology.",
    causesTitle: "Why Are You Losing Hair?",
    causesIntro: "Accurate treatment requires isolating the root physiological mechanism behind follicle starvation:",
    causes: [
      {
        iconName: "dna",
        title: "Androgenetic Alopecia (DHT)",
        description: "Genetic sensitivity to Dihydrotestosterone (DHT) binds to receptors in frontal and vertex follicles, causing gradual shrinking until strands become invisible peach fuzz.",
      },
      {
        iconName: "droplet",
        title: "Nutritional & Ferritin Deficits",
        description: "Extremely prevalent in South Asian women. Low serum Ferritin (iron storage below 50 ng/mL) and Vitamin D3 deficiency trigger acute telogen effluvium, causing diffuse handfuls of hair to shed.",
      },
      {
        iconName: "activity",
        title: "PCOS & Postpartum Hormones",
        description: "Hormonal swings following childbirth or caused by Polycystic Ovarian Syndrome disrupt the normal 3-year growth cycle, pushing 30%+ of scalp follicles into premature resting phases.",
      },
    ],
    failsTitle: "What Fails: Parlor Oils & Home Masks",
    failsDescription: "Commercial hair oils, herbal pastes, and onion juices sit purely on the hair cuticle shaft. They cannot penetrate 3–4mm beneath the scalp to reach living follicular dermal papillae where cellular division occurs. Furthermore, heavy oils frequently clog sebaceous glands, triggering seborrheic dermatitis and worsening hair fall.",
    worksTitle: "What Works: Clinical Regenerative Medicine",
    worksDescription: "Autologous PRP directly introduces high concentrations of bioactive growth factors (PDGF, VEGF, TGF-beta) into the living root sheath. This stimulates new micro-vascularization (angiogenesis), re-opens biological nutrition pathways, and commands the follicle stem cells to enter vigorous Anagen growth.",
    faqs: [
      {
        question: "How much daily hair fall is considered abnormal?",
        answer: "Shedding between 50 to 100 strands per day is a natural part of the hair cycle. However, if you notice more than 150 strands on your pillow, shower drain, or brush, or if you can see your scalp shining through under indoor lights, medical intervention should begin promptly before follicles scar over.",
      },
      {
        question: "Does Gujranwala's hard tap water cause hair fall?",
        answer: "Hard water contains high mineral deposits of calcium and magnesium that form a film on hair strands, making them brittle and prone to snapping. While it does not kill the internal root itself, it weakens hair shafts drastically. Our doctors provide specific shower filtration and chelating scalp rinses as part of your care protocol.",
      },
      {
        question: "What blood tests should I get before my consultation?",
        answer: "We routinely evaluate Serum Ferritin (iron reserve), Complete Blood Count (CBC), Serum Vitamin D3, Thyroid Stimulating Hormone (TSH), and for women with irregular cycles, free Testosterone and DHEA-S. You can bring existing reports to your consultation or our clinic will advise on local diagnostic labs.",
      },
    ],
    relatedTreatmentSlug: "prp-hair-restoration",
    relatedTreatmentName: "Autologous PRP Hair Restoration",
  },
  "pigmentation-melasma": {
    slug: "pigmentation-melasma",
    title: "Stubborn Melasma & Hyperpigmentation",
    subtitle: "Safe, doctor-led treatment for stubborn dermal melasma, sun spots, and hyperpigmentation in Gujranwala at Insta Skin Clinic, Kashmir Rd, Peoples Colony.",
    heroBadge: "Melanocyte Regulation & Dermal Clearance",
    heroImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80",
    overview: "South Asian skin has hyper-reactive melanocytes. In Gujranwala, unverified salon 'whitening' creams containing hidden steroids and mercury cause severe skin thinning, telangiectasia, and aggressive rebound melasma. At Insta Skin Clinic, our doctors use low-fluence Nd:YAG laser toning, tranexamic acid cocktails, and pharmaceutical tyrosinase inhibitors to clear pigment safely.",
    causesTitle: "Understanding Melasma Depths",
    causesIntro: "Why did your previous creams fail? Because melanin deposits reside at distinct biological layers of your skin:",
    causes: [
      {
        iconName: "sun",
        title: "Epidermal Melasma",
        description: "Brown, sharply defined pigment located in the superficial skin layer. Responds quickly to modified Jessner peels, medical glycolic resurfacing, and topical tyrosinase blockers.",
      },
      {
        iconName: "layers",
        title: "Dermal Melasma",
        description: "Blue-gray or slate-colored pigment trapped deep in dermal macrophages. Standard creams cannot reach here; requires low-fluence Q-switched laser photo-acoustic shattering.",
      },
      {
        iconName: "shuffle",
        title: "Mixed Melasma (Most Common)",
        description: "The overwhelming majority of Pakistani patients present with both surface and deep melanin. Requires dual-action combination protocols to clear surface shade while silencing deep melanocytes.",
      },
    ],
    failsTitle: "The Danger: Steroid 'Whitening' Creams",
    failsDescription: "Many popular local beauty creams contain super-potent corticosteroids (Clobetasol) and mercury. They produce a temporary fake 'bleached' effect by constricting blood vessels. Within weeks, the skin barrier is destroyed, leading to facial redness, prominent veins, spider capillaries, and permanent paradoxical darkening known as exogenous ochronosis.",
    worksTitle: "The Solution: Medical Multimodal Therapy",
    worksDescription: "We use zero steroids. Our medical doctors restore the damaged epidermal lipid mantle with bio-identical ceramides, while oral/topical Tranexamic acid and low-energy laser photo-acoustic toning calm hyperactive melanocytes safely without triggering defensive rebound pigment.",
    faqs: [
      {
        question: "Can melasma be 100% permanently cured?",
        answer: "Melasma is a chronic pigmentary condition controlled by internal genetics, estrogen hormones, and sun exposure. While clinical treatments achieve 80% to 90%+ clearance and restore a bright, unblemished complexion, strict ongoing sun protection (SPF 50+) and gentle maintenance homecare are required to prevent hormonal reactivation.",
      },
      {
        question: "Will medical laser treatments make my melasma darker?",
        answer: "High-heat ablative lasers can worsen melasma if used incorrectly. That is why at Insta Skin Clinic on Kashmir Road, our doctors never use hot ablative energy on active melasma. Instead, we use sub-photothermal 'Q-switched Laser Toning' with low fluences that fracture pigment particles mechanically without heat injury.",
      },
      {
        question: "Can cooking heat or kitchen steam trigger melasma?",
        answer: "Yes, thermal heat from stovetops, ovens, and boiling steam causes vasodilation and stimulates melanocyte dendrites in the same manner as solar ultraviolet rays. We advise patients to apply iron-oxide mineral sunscreen even indoors when cooking.",
      },
    ],
    relatedTreatmentSlug: "hydrafacial",
    relatedTreatmentName: "Signature HydraFacial MD & Chemical Peels",
  },
};
