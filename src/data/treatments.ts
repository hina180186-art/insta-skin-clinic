export interface TreatmentData {
  slug: string;
  title: string;
  subtitle: string;
  heroBadge: string;
  heroImage: string;
  specs: {
    duration: string;
    durationSub: string;
    downtime: string;
    downtimeSub: string;
    sessions: string;
    sessionsSub: string;
    results: string;
    resultsSub: string;
  };
  overview: string;
  howItWorksTitle: string;
  howItWorksIntro: string;
  steps: {
    number: string;
    title: string;
    description: string;
  }[];
  candidates: {
    title: string;
    description: string;
  }[];
  preCare: string[];
  postCare: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const TREATMENTS: Record<string, TreatmentData> = {
  "laser-hair-removal": {
    slug: "laser-hair-removal",
    title: "Permanent, Painless Laser Hair Removal",
    subtitle: "Painless full body & facial laser hair reduction in Gujranwala using FDA-cleared triple-wavelength technology at Insta Skin Clinic on Kashmir Road.",
    heroBadge: "FDA-Cleared Triple Wavelength (755nm / 808nm / 1064nm)",
    heroImage: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80",
    specs: {
      duration: "30 – 60 Mins",
      durationSub: "Depending on area size",
      downtime: "Zero Downtime",
      downtimeSub: "Immediate return to work",
      sessions: "6 – 8 Sessions",
      sessionsSub: "Spaced 4 to 6 weeks apart",
      results: "85% – 95%",
      resultsSub: "Permanent follicle reduction",
    },
    overview: "Experience the gold standard in permanent hair reduction engineered specifically for Pakistani skin phototypes. Our sub-zero chilled sapphire contact system destroys the follicle root while preserving the surrounding melanin, delivering silky, bump-free skin with zero downtime.",
    howItWorksTitle: "How Triple-Wavelength Destroys Hair Bulbs",
    howItWorksIntro: "Different hair strands sit at different skin depths. Our system fires three complementary wavelengths simultaneously for comprehensive clearance:",
    steps: [
      {
        number: "755",
        title: "Alexandrite 755nm",
        description: "Delivers powerful energy absorption by melanin chromophores, making it ideal for the most superficial, fine, and thin hair strands on the upper lip, chin, and eyebrows.",
      },
      {
        number: "808",
        title: "Classic Diode 808nm",
        description: "The classic wavelength with deep tissue penetration that targets the mid-dermal follicle bulge. Perfect for dense body hair on arms, legs, back, and underarms.",
      },
      {
        number: "1064",
        title: "Nd:YAG 1064nm",
        description: "Characterized by lower melanin absorption, making it the safest wavelength for tanned and rich Pakistani skin tones. Reaches deep follicle papillae without surface heating.",
      },
    ],
    candidates: [
      {
        title: "Full Face & PCOS Hirsutism",
        description: "Permanent reduction of coarse facial hair on chin, upper lip, sideburns, and jawline triggered by hormonal imbalances.",
      },
      {
        title: "Underarms & Arms",
        description: "Eliminates painful razor burns, ingrown hairs, and shadow discoloration under the arms.",
      },
      {
        title: "Full Body Silky Smoothness",
        description: "Full legs, arms, and torso grooming performed in discrete, private female clinical suites.",
      },
      {
        title: "Men's Beard Shaping",
        description: "Sharp clean beard lines and elimination of folliculitis barbae razor bumps on the neck.",
      },
    ],
    preCare: [
      "Shave Area 24 Hours Prior with a clean razor. Do not wax, tweeze, or bleach for 4 weeks.",
      "Avoid active direct sun exposure or tanning beds for 7 days prior to treatment.",
      "Arrive with clean skin free of perfumes, heavy lotions, or body deodorants.",
    ],
    postCare: [
      "Apply broad-spectrum SPF 50+ mineral sunscreen to all treated facial and exposed areas.",
      "Avoid boiling showers, steam saunas, and intense workouts for 24 hours.",
      "Allow treated hair to naturally shed over the subsequent 10 to 14 days without tweezing.",
    ],
    faqs: [
      {
        question: "Is the laser hair removal procedure truly painless?",
        answer: "Yes! Older generation lasers caused snapping sensations like a rubber band. Our FDA-cleared system features continuous contact sapphire cooling that keeps the skin epidermis at -10°C throughout the pulse, feeling like a cooling massage with minimal to no discomfort.",
      },
      {
        question: "Is it safe for brown / South Asian skin tones without burning?",
        answer: "Absolutely. Brown skin (Fitzpatrick Types III to V) has rich epidermal melanin. Inexpensive salon lasers often mistake skin pigment for hair pigment, causing burns. Our medical system uses calibrated Nd:YAG 1064nm and diode wavelengths that bypass surface melanin safely to target only the follicle bulb.",
      },
      {
        question: "Why do I need multiple sessions (6 to 8 treatments)?",
        answer: "Hair grows in three biological phases: Anagen (active growth), Catagen (transition), and Telogen (resting). Lasers can only permanently neutralize hair when it is in the active Anagen growth cycle. At any given moment, only 15–20% of your hair is in this phase, which is why 6 to 8 spaced sessions ensure every follicle is treated.",
      },
      {
        question: "Does laser hair removal work for PCOS hormonal facial hair?",
        answer: "Yes, our clinical doctors specialize in hormonal hirsutism caused by PCOS. While internal hormones continue to stimulate new dormant follicles over time, medical laser sessions effectively destroy active coarse hair, prevent razor shadow, and reduce maintenance to an occasional touch-up.",
      },
      {
        question: "Are female treatment rooms private with female practitioners?",
        answer: "Yes, 100%. At Insta Skin Clinic on Kashmir Road, Peoples Colony, all female laser sessions are conducted in soundproof, discrete clinical suites by certified female medical aestheticians and doctors under complete privacy.",
      },
    ],
  },
  "hydrafacial": {
    slug: "hydrafacial",
    title: "Signature Medical HydraFacial MD",
    subtitle: "The genuine medical-grade HydraFacial MD experience in Gujranwala. Vortex-Fusion pore extraction, gentle glycolic peel, and intense antioxidant hydration glow.",
    heroBadge: "Original Patented Vortex-Fusion Technology",
    heroImage: "https://images.unsplash.com/photo-1512290900672-1f0236a28189?auto=format&fit=crop&w=1200&q=80",
    specs: {
      duration: "45 – 60 Mins",
      durationSub: "Relaxing medical protocol",
      downtime: "Zero Downtime",
      downtimeSub: "Immediate glass-skin radiance",
      sessions: "Monthly Care",
      sessionsSub: "Or 48 hrs before weddings",
      results: "Clear & Plump",
      resultsSub: "Clean pores, intense hydration",
    },
    overview: "The definitive medical-grade facial treatment for instant luminous clarity. Utilizing patented vortex-suction to extract deeply trapped sebum, blackheads, and environmental smog while continuously infusing medical-grade peptides, antioxidants, and concentrated hyaluronic acid.",
    howItWorksTitle: "The 4-Step Clinical Protocol",
    howItWorksIntro: "Unlike manual facials that squeeze and bruise the skin, HydraFacial uses hydrodynamic vortex spirals to cleanse without trauma:",
    steps: [
      {
        number: "1",
        title: "Cleanse & Exfoliate",
        description: "Dead skin cells are gently removed to reveal healthy new skin, while lactic acid and glucosamine prime the dermal barrier.",
      },
      {
        number: "2",
        title: "Gentle GlySal Peel",
        description: "A non-irritating blend of glycolic and salicylic acids loosens deep congestion and hardened sebum inside the pores without flaking.",
      },
      {
        number: "3",
        title: "Painless Vortex Suction",
        description: "Automated vortex vacuum effortlessly draws out blackheads, dead cellular debris, and dirt into a visible waste container.",
      },
      {
        number: "4",
        title: "Antioxidant Infusion",
        description: "The freshly cleared pores are saturated with targeted peptides, hyaluronic acid, and white tea extract to lock in moisture and luminescence.",
      },
    ],
    candidates: [
      {
        title: "Enlarged & Clogged Pores",
        description: "Removes stubborn blackheads and sebum plugs that resist everyday cleansers.",
      },
      {
        title: "Dehydrated & Dull Complexion",
        description: "Drenches depleted skin cells with intensive multi-molecular hyaluronic acid.",
      },
      {
        title: "Bridal Glow Canvas",
        description: "The premier preparation for brides 2-3 days before Mehndi, Barat, or Walima.",
      },
      {
        title: "Executive Skin Maintenance",
        description: "Monthly clinical deep clean that offsets city pollution and stress damage.",
      },
    ],
    preCare: [
      "Avoid using prescription Retin-A or strong exfoliating acids 48 hours prior to treatment.",
      "Do not undergo facial waxing or threading for 3 days before your session.",
      "Arrive at the clinic without heavy theatrical makeup for prompt assessment.",
    ],
    postCare: [
      "Enjoy immediate glass-skin radiance. Mineral makeup can be applied immediately if desired.",
      "Keep skin protected daily with physical SPF 50+ sunscreen.",
      "Avoid harsh granular facial scrubs or alcohol-based toners for 48 hours.",
    ],
    faqs: [
      {
        question: "How is Insta Skin's Medical HydraFacial MD different from salon facials?",
        answer: "Commercial salons frequently use Chinese replica machines with harsh physical diamond wands and water bottles. Insta Skin Clinic utilizes genuine medical Vortex-Fusion devices with sealed physician-grade ampoules and disposable medical tips, ensuring sterile, clinically validated dermal delivery without scratches or bacteria spread.",
      },
      {
        question: "How long does the radiant glow last after treatment?",
        answer: "The immediate hydration and radiant glow typically persist for 7 to 10 days, while improved cellular clarity and texture continue for over 4 weeks. With monthly sessions, patients experience permanent improvements in pore size and sebum control.",
      },
      {
        question: "Is there any downtime, redness, or peeling?",
        answer: "None at all. You can apply makeup immediately or step straight onto the red carpet or wedding stage. Skin looks instantly quenched, clear, and plumped.",
      },
      {
        question: "Can HydraFacial be done on active acne or sensitive skin?",
        answer: "Yes. Our attending doctor calibrates the vortex suction level and selects targeted salicylic acid boosters to calm inflammatory acne and extract trapped micro-comedones without popping or tearing the skin.",
      },
      {
        question: "When should brides get a HydraFacial before their wedding?",
        answer: "We recommend scheduling your final bridal HydraFacial MD 2 to 3 days before your main event (Mehndi / Barat / Walima). This allows maximum serum assimilation and creates an airbrushed canvas for bridal makeup application.",
      },
    ],
  },
  "prp-hair-restoration": {
    slug: "prp-hair-restoration",
    title: "Autologous PRP & Exosome Hair Restoration",
    subtitle: "Regenerate thinning hair and halt crown shedding with high-concentration Platelet-Rich Plasma therapy at Insta Skin Clinic, Kashmir Rd, Peoples Colony, Gujranwala.",
    heroBadge: "High-Concentration Double-Spin Centrifugation",
    heroImage: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&w=1200&q=80",
    specs: {
      duration: "45 – 60 Mins",
      durationSub: "Blood draw, spin & injection",
      downtime: "12 – 24 Hours",
      downtimeSub: "Mild sensitivity only",
      sessions: "4 – 6 Sessions",
      sessionsSub: "Administered 4 weeks apart",
      results: "3–4 Weeks",
      resultsSub: "Shedding halts; density rises",
    },
    overview: "Halt hair shedding and stimulate dormant scalp follicles naturally. We extract concentrated Platelet-Rich Plasma from your own blood, enriched with PDGF, VEGF, and bioactive exosomes, and micro-inject it directly into thinning crown and hairline zones under complete local comfort.",
    howItWorksTitle: "The Regenerative Cascade Explained",
    howItWorksIntro: "Androgenetic alopecia causes hair follicles to miniaturize under DHT attack until they stop producing visible shafts. PRP halts this cycle biologically:",
    steps: [
      {
        number: "1",
        title: "Sterile Centrifugation",
        description: "A small sample (15-20ml) of your blood is drawn in a sterile gel tube and spun in a precision medical centrifuge to isolate gold platelet plasma from red blood cells.",
      },
      {
        number: "2",
        title: "Targeted Micro-Injections",
        description: "Using ultra-fine, painless 32-gauge needles, the platelet concentrate is injected at 1.5mm–2mm depth directly around hair bulb roots in thinning zones.",
      },
      {
        number: "3",
        title: "Follicle Awakening",
        description: "Growth factors stimulate angiogenesis (new capillary networks) around follicles, restoring oxygen and nutrients to reverse miniaturization and trigger the Anagen phase.",
      },
    ],
    candidates: [
      {
        title: "Male Pattern Crown Thinning",
        description: "Norwood Scale II–IV vertex thinning and receding temple hairlines.",
      },
      {
        title: "Female Diffuse Thinning & Wide Part",
        description: "Loss of hair volume across the central scalp and crown in women.",
      },
      {
        title: "Postpartum & Telogen Effluvium",
        description: "Acute shedding following pregnancy, illness, fever, or extreme psychological stress.",
      },
      {
        title: "Post-Hair Transplant Support",
        description: "Accelerates healing of newly grafted follicular units and strengthens native hairs.",
      },
    ],
    preCare: [
      "Drink at least 2 liters of water 24 hours prior to maximize plasma quality and volume.",
      "Avoid blood thinners, Aspirin, Ibuprofen, and high-dose Vitamin E 48 hours prior.",
      "Wash hair with regular shampoo on the morning of treatment; avoid hair waxes or sprays.",
    ],
    postCare: [
      "Do not wash your scalp or get your hair wet for 24 hours after treatment.",
      "Avoid heavy gym sweating, saunas, and swimming pools for 48 hours.",
      "Delay hair coloring, chemical perms, or bleaching for at least 7 days post-PRP.",
    ],
    faqs: [
      {
        question: "Is PRP hair restoration painful?",
        answer: "Discomfort is minimal. We apply medical-grade topical anesthetic numbing gel and employ precision cooling ice rollers prior to injection. The micro-needles used are extremely fine (32-gauge), feeling only like tiny, brief pinpricks.",
      },
      {
        question: "When can I expect to see visible hair improvements?",
        answer: "The first noticeable result is a sharp reduction in daily hair fall and shower shedding within 3 to 4 weeks after session 2. Visible follicle thickening and new baby vellus hairs typically appear between months 3 and 5 as the growth cycle matures.",
      },
      {
        question: "Does PRP work for female diffuse thinning and postpartum loss?",
        answer: "Yes! In fact, women frequently experience faster responses than men. PRP is remarkably effective for female wide-parting thinning, telogen effluvium, stress-induced shedding, and postpartum hormonal hair loss.",
      },
      {
        question: "How many sessions will I need in total?",
        answer: "Most clinical protocols require an initial loading course of 4 to 6 sessions spaced 4 weeks apart. After achieving the desired density, a single maintenance session every 4 to 6 months keeps hair follicles thriving.",
      },
      {
        question: "Can PRP regrow hair on completely shiny bald spots?",
        answer: "PRP requires living, miniaturized follicles to stimulate. It cannot resurrect completely scarred-over, completely dormant areas where roots have permanently vanished for decades. If you have active thinning or fine miniaturized hair, PRP is the ideal clinical intervention before the follicle dies.",
      },
    ],
  },
  "acne-scar-laser": {
    slug: "acne-scar-laser",
    title: "Fractional CO2 Laser Scar Resurfacing",
    subtitle: "Level stubborn atrophic acne scars and remodel dermal collagen with medical Fractional CO2 laser ablation at Insta Skin Clinic, Kashmir Rd, Gujranwala.",
    heroBadge: "Ablative Micro-Thermal Zone Technology (10,600nm)",
    heroImage: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    specs: {
      duration: "60 – 75 Mins",
      durationSub: "Includes 30 min numbing",
      downtime: "3 – 5 Days",
      downtimeSub: "Micro-crusting & pinkness",
      sessions: "3 – 5 Sessions",
      sessionsSub: "Spaced 4 to 6 weeks apart",
      results: "70% – 85%",
      resultsSub: "Permanent scar fill & remodeling",
    },
    overview: "The clinical gold standard for stubborn atrophic acne scars, enlarged pores, and rough uneven skin texture. Fractional carbon dioxide laser micro-ablates damaged fibrous scar tissue and triggers massive neocollagenesis, rebuilding a smooth epidermal foundation.",
    howItWorksTitle: "How We Treat Different Acne Scar Types",
    howItWorksIntro: "Acne scars vary in morphological depth. Our Gujranwala clinic uses multi-modal doctor protocols combining laser, subcision, and growth factors:",
    steps: [
      {
        number: "1",
        title: "Rolling Scars & Wavy Texture",
        description: "Caused by fibrotic bands tethering skin to subcutaneous tissue. We perform cannula subcision to sever the bands, followed by Fractional CO2 laser to stimulate collagen filling.",
      },
      {
        number: "2",
        title: "Boxcar Scars & Crater Pores",
        description: "Characterized by sharp vertical edges. The high-energy fractional beam vaporizes the abrupt borders, feathering them smoothly into the surrounding epidermal surface.",
      },
      {
        number: "3",
        title: "Icepick Scars & Deep Pits",
        description: "Narrow, deep columns extending into the reticular dermis. Treated with targeted focal TCA CROSS chemical reconstruction combined with fractional laser smoothing.",
      },
    ],
    candidates: [
      {
        title: "Depressed Atrophic Acne Scars",
        description: "Rolling, boxcar, and mixed post-acne scarring on cheeks and temples.",
      },
      {
        title: "Severe Skin Texture & Large Pores",
        description: "Rough, orange-peel texture that prevents makeup from sitting smoothly.",
      },
      {
        title: "Surgical & Traumatic Scars",
        description: "Rebuilds disrupted skin architecture and softens raised or tethered edges.",
      },
      {
        title: "Premature Wrinkles & Photo-Damage",
        description: "Tightens loose skin and induces firm new elastin bundles.",
      },
    ],
    preCare: [
      "Stop Retinoids, Tretinoin, Differin, and exfoliating AHAs/BHAs 7 days before treatment.",
      "Strictly avoid sun tanning or direct sun exposure for 2 weeks prior.",
      "Patients with a history of oral herpes should take prophylactic antiviral medication.",
    ],
    postCare: [
      "Apply the doctor-prescribed occlusive healing barrier ointment 3 to 4 times daily.",
      "Do not pick, scratch, or scrub the microscopic bronze crusts; let them shed naturally by day 4-5.",
      "Strict physical SPF 50+ sun protection is mandatory for 4 weeks post-treatment.",
    ],
    faqs: [
      {
        question: "Is Fractional CO2 laser safe on Pakistani brown skin?",
        answer: "Yes, when performed by certified dermatologists. South Asian skin requires customized pulse stack settings, lower fractional density, and higher pitch spacing to prevent post-inflammatory hyperpigmentation (PIH). At Insta Skin Clinic, every session is supervised by medical doctors trained specifically in Pakistani melanin parameters.",
      },
      {
        question: "How much downtime will I need from work or college?",
        answer: "Patients typically experience mild sunburn-like erythema for 24 to 48 hours, followed by microscopic bronze crusts that naturally peel off between days 3 and 5. Most patients schedule their treatment on a Thursday evening and return to normal public activities by Monday morning.",
      },
      {
        question: "Are the acne scar filling results permanent?",
        answer: "Yes! Unlike temporary dermal fillers that dissolve after 9–12 months, Fractional CO2 stimulates your own body to synthesize new Type-I and Type-III collagen fibers. Once these new fibers remodel and level the crater floor, the structural improvement is permanent.",
      },
      {
        question: "Does the procedure hurt?",
        answer: "We apply a potent compounded medical topical numbing cream for 30 to 45 minutes prior to the session. Most patients describe feeling a prickling warm sensation, completely tolerable. Immediately following the pass, cooling recovery packs and soothing regenerative serums are applied.",
      },
      {
        question: "Can I get Fractional CO2 if I still have active acne breakouts?",
        answer: "Active inflamed cystic acne must first be stabilized to prevent bacterial dissemination. Our doctor will evaluate your skin and may prescribe medical peels or topical therapy for 2 to 3 weeks before proceeding with the ablative laser resurfacing.",
      },
    ],
  },
};
