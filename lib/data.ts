export const practice = {
  name: "Delaware Dental Solutions",
  shortName: "Delaware Dental",
  tagline: "Family & Cosmetic Dentistry in Bear, DE",
  phone: "302-409-3050",
  phoneHref: "tel:+1-302-409-3050",
  address: { line1: "131 Becks Woods Drive", city: "Bear", state: "DE", zip: "19701" },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12293.830432975394!2d-75.6991215!3d39.6168992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x62dc3647e0a01aaa!2sDelaware%20Dental%20Solutions!5e0!3m2!1sen!2sus!4v1650993083740!5m2!1sen!2sus",
  hours: [
    { day: "Monday", time: "8:00am – 4:00pm" },
    { day: "Tuesday", time: "8:00am – 4:00pm" },
    { day: "Wednesday", time: "8:00am – 4:00pm" },
    { day: "Thursday", time: "8:00am – 4:00pm" },
    { day: "Friday", time: "8:00am – 3:00pm" },
    { day: "Saturday – Sunday", time: "Closed" },
  ],
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/DelawaredentalSolutions/" },
    { name: "Yelp", href: "https://www.yelp.com/biz/delaware-dental-solutions-bear" },
    { name: "Google", href: "https://g.page/DelawaredentalSolutions?share" },
    { name: "Instagram", href: "https://www.instagram.com/dedentalsolutions/?hl=en" },
  ],
  areas: [
    "Bear", "Glasgow", "Christiana", "Newark", "New Castle", "St. Georges",
    "Middletown", "Hockessin", "Wilmington Manor", "North Star", "Newport",
  ],
};

const IMG = "https://www.dedentalsolutions.com";

export type Doctor = {
  slug: string;
  name: string;
  credential: string;
  role: string;
  image: string;
  short: string;
  bio: string[];
  memberships?: string[];
  interests?: string;
};

export const doctors: Doctor[] = [
  {
    slug: "dr-weidong-yang",
    name: "Weidong Yang",
    credential: "DMD",
    role: "Founder & General Dentist",
    image: `${IMG}/images/dental-services/dr1.png`,
    short:
      "Dr. Weidong Yang earned his first dental degree from Xi'an Jiaotong University and brings extensive training across cosmetic restoration, implants, periodontal and oral surgery, and endodontics.",
    bio: [
      "Dr. Weidong Yang received his first dental degree from the Dental School of Xi'an Jiaotong University, then attended an Oral Maxillofacial Surgery Resident program before starting his practice as an oral surgeon and faculty member at the Dental School in Xi'an, China. He was already a specialist in oral surgery before he received his second dental degree (Doctor of Medicine in Dentistry) from the University of Pennsylvania, where he worked as faculty for about three years following graduation.",
      "While he was still in school, Dr. Yang received professional awards and academic achievements in technology development and patenting, and had clinical research papers published in scientific journals.",
      "After practicing for a number of years in Philadelphia, Dr. Yang and his wife Yan Wang, who works at the University of Delaware, decided to move back to Delaware to be closer to their Newark home. Dr. Yang joined private practice in 2012. He has received extensive training in many specialty disciplines including cosmetic restoration, implant, periodontal and oral surgery, and endodontic treatment.",
    ],
    memberships: [
      "Academy of General Dentistry",
      "American Dental Association",
      "International Dental Implant Association",
      "Delaware Dental Society",
    ],
    interests: "When he's not in the office helping patients, Dr. Yang enjoys sports, fishing, and reading.",
  },
  {
    slug: "dr-emma-yang",
    name: "Emma Yang",
    credential: "DMD",
    role: "General & Cosmetic Dentist",
    image: `${IMG}/images/dental-services/dr2.png`,
    short:
      "Dr. Emma Yang grew up in Newark, Delaware and earned her DMD from Temple University's Kornberg School of Dentistry, graduating with awards and Dean's List honors.",
    bio: [
      "Dr. Emma Yang grew up in Newark, Delaware and received her Bachelor of Science (BS) and Master of Science (MS) in Biology from Case Western Reserve University in Cleveland, Ohio.",
      "She received her Doctor of Medicine in Dentistry degree (DMD) from Temple University Kornberg School of Dentistry, where she graduated with awards and was named to the Dean's List for her academic achievement.",
      "Dr. Emma is passionate about gentle, patient-focused care and helping every member of the family feel at ease in the dental chair — from a child's first cleaning to a complete smile makeover.",
    ],
    interests: "Dr. Emma is proud to care for the community she grew up in and loves welcoming new families to the practice.",
  },
];

export type Service = {
  slug: string;
  name: string;
  category: "General" | "Cosmetic" | "Restorative" | "Specialty";
  blurb: string;
  body: string[];
  highlights?: string[];
  image: string;
};

const serviceImg = (file: string) => `${IMG}/images/dental-services/${file}`;

export const services: Service[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    category: "General",
    blurb: "Prevention, diagnosis, and treatment for the conditions that affect your teeth and gums.",
    body: [
      "Our practice provides general dentistry procedures including the prevention, diagnosis, and treatment of a wide variety of conditions and diseases that affect your teeth and gums.",
      "At Delaware Dental Solutions, we work with each and every patient to establish a customized dental hygiene plan that incorporates dental exams, x-rays, thorough teeth cleanings, tooth scaling and deep cleaning (if necessary), as well as other diagnostic equipment to prevent and treat conditions that affect your oral health.",
    ],
    highlights: ["Dental cleaning", "Dental examinations", "Dental X-rays", "Deep cleaning"],
    image: serviceImg("general-dentistry.jpg"),
  },
  {
    slug: "family-dentistry",
    name: "Family Dentistry",
    category: "General",
    blurb: "One welcoming dental home for every age, from first visits to lifelong care.",
    body: [
      "Family dentistry means caring for every member of your household under one roof. From a child's first cleaning to a grandparent's restorative work, our team builds trust across generations.",
      "We focus on prevention and comfortable, unhurried visits so your whole family looks forward to the dentist — not the other way around.",
    ],
    highlights: ["Children & adults", "Preventive checkups", "Comfortable visits", "Same dental home for all ages"],
    image: serviceImg("general-dentistry.jpg"),
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    category: "Cosmetic",
    blurb: "Treatments designed to enhance the look of your smile while protecting your oral health.",
    body: [
      "Cosmetic dentistry is a method of treatment aimed at assisting our patients in achieving the smile they have always wanted. Whether it's brightening, reshaping, or fully restoring your teeth, we tailor every plan to your goals.",
      "Dr. Yang's extensive training in cosmetic restoration means your results are designed to look natural and last.",
    ],
    highlights: ["Veneers", "Teeth whitening", "Smile makeovers", "Tooth-colored restorations"],
    image: serviceImg("cosmetic-dentistry.jpg"),
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "Cosmetic",
    blurb: "Professional whitening for a brighter, more confident smile.",
    body: [
      "Professional teeth whitening lifts years of stains from coffee, tea, and everyday life — safely and far more effectively than over-the-counter kits.",
      "We'll help you choose between in-office and take-home options to reach a shade that looks natural for you.",
    ],
    highlights: ["In-office whitening", "Custom take-home trays", "Safe & supervised"],
    image: serviceImg("cosmetic-dentistry.jpg"),
  },
  {
    slug: "dental-exam",
    name: "Exam & Cleaning",
    category: "General",
    blurb: "The foundation of lifelong oral health — thorough, gentle, and personalized.",
    body: [
      "A comprehensive exam and professional cleaning is the cornerstone of preventive care. We check for decay, gum disease, and other concerns before they become bigger problems.",
      "Each visit includes a customized hygiene plan tailored to your mouth and your goals.",
    ],
    highlights: ["Comprehensive exam", "Professional cleaning", "Digital X-rays", "Personalized plan"],
    image: serviceImg("general-dentistry.jpg"),
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "Restorative",
    blurb: "A permanent, natural-looking solution for missing teeth.",
    body: [
      "Dental implants replace missing teeth with a permanent foundation that looks, feels, and functions like a natural tooth. As implant specialists, our team handles your care from placement to final restoration.",
      "Implants help preserve your jawbone, protect neighboring teeth, and restore full confidence in your smile and bite.",
    ],
    highlights: ["Single & multiple implants", "Implant-supported restorations", "Bone preservation"],
    image: serviceImg("denture.jpg"),
  },
  {
    slug: "dental-fillings",
    name: "Dental Fillings",
    category: "Restorative",
    blurb: "Tooth-colored fillings that restore strength and blend seamlessly.",
    body: [
      "Modern tooth-colored fillings repair cavities while blending naturally with your smile — no dark metal required.",
      "We restore the strength and function of damaged teeth so you can eat and smile comfortably again.",
    ],
    highlights: ["Tooth-colored composite", "Natural appearance", "Durable & comfortable"],
    image: serviceImg("general-dentistry.jpg"),
  },
  {
    slug: "dental-crowns",
    name: "Dental Crowns",
    category: "Restorative",
    blurb: "Custom crowns that rebuild and protect damaged teeth.",
    body: [
      "A dental crown caps and protects a tooth that's been weakened by decay, a large filling, or a root canal — restoring its shape, strength, and appearance.",
      "Each crown is crafted to match your natural teeth for a seamless result.",
    ],
    highlights: ["Custom-matched", "Protects weak teeth", "Long-lasting"],
    image: serviceImg("general-dentistry.jpg"),
  },
  {
    slug: "orthodontics",
    name: "Orthodontics",
    category: "Specialty",
    blurb: "Straighter teeth and a healthier bite for kids, teens, and adults.",
    body: [
      "Orthodontic treatment corrects crowded, crooked teeth and bite problems — improving both the look of your smile and your long-term oral health.",
      "We'll walk you through the options that fit your lifestyle and goals.",
    ],
    highlights: ["Bite correction", "Kids, teens & adults", "Healthier alignment"],
    image: serviceImg("general-dentistry.jpg"),
  },
  {
    slug: "invisalign",
    name: "Invisalign",
    category: "Cosmetic",
    blurb: "Clear, removable aligners that straighten teeth discreetly.",
    body: [
      "Invisalign uses a series of clear, custom aligners to gradually straighten your teeth — without the look and feel of traditional metal braces.",
      "The aligners are removable, so you can eat, brush, and floss normally throughout treatment.",
    ],
    highlights: ["Nearly invisible", "Removable aligners", "Custom treatment plan"],
    image: serviceImg("general-dentistry.jpg"),
  },
  {
    slug: "periodontal-treatment",
    name: "Periodontal Treatment",
    category: "Specialty",
    blurb: "Specialized care for healthy gums and a strong foundation.",
    body: [
      "Periodontal (gum) disease is one of the leading causes of tooth loss. Our team specializes in treating gum disease at every stage to protect the foundation of your smile.",
      "From deep cleanings to ongoing maintenance, we'll help you restore and keep healthy gums.",
    ],
    highlights: ["Gum disease treatment", "Scaling & root planing", "Ongoing maintenance"],
    image: serviceImg("general-dentistry.jpg"),
  },
  {
    slug: "root-canal",
    name: "Root Canal",
    category: "Restorative",
    blurb: "Gentle endodontic care that saves your natural tooth.",
    body: [
      "A root canal relieves pain and saves a tooth that's been damaged by deep decay or infection. With Dr. Yang's endodontic training, the procedure is more comfortable than its reputation suggests.",
      "Saving your natural tooth keeps your bite strong and your smile whole.",
    ],
    highlights: ["Relieves pain", "Saves natural teeth", "Comfortable technique"],
    image: serviceImg("general-dentistry.jpg"),
  },
  {
    slug: "oral-surgery",
    name: "Oral Surgery",
    category: "Specialty",
    blurb: "Expert surgical care from a dentist with oral surgery specialty training.",
    body: [
      "Dr. Yang began his career as an oral surgeon and faculty member, bringing specialist-level surgical expertise to the practice — from extractions to more complex procedures.",
      "You'll receive surgical care with a focus on comfort, safety, and a smooth recovery.",
    ],
    highlights: ["Specialist training", "Extractions", "Comfort-focused"],
    image: serviceImg("general-dentistry.jpg"),
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    category: "General",
    blurb: "Prompt care when dental pain or injury can't wait.",
    body: [
      "Dental emergencies happen — a sudden toothache, a broken tooth, or an injury. When they do, call us right away and we'll work to see you as soon as possible.",
      "Quick treatment can relieve pain and often save a tooth, so don't wait. Call 302-409-3050.",
    ],
    highlights: ["Same-day when possible", "Toothache relief", "Broken & injured teeth"],
    image: serviceImg("general-dentistry.jpg"),
  },
  {
    slug: "dentures",
    name: "Dentures",
    category: "Restorative",
    blurb: "Comfortable, natural-looking replacements for missing teeth.",
    body: [
      "Today's dentures are more comfortable and natural-looking than ever. Whether you need a full or partial set, we craft them to fit well and restore your ability to eat and speak with confidence.",
      "Ask us about implant-supported dentures for added stability.",
    ],
    highlights: ["Full & partial", "Natural appearance", "Implant-supported options"],
    image: serviceImg("denture.jpg"),
  },
  {
    slug: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    category: "General",
    blurb: "Gentle, friendly dental care that helps kids love the dentist.",
    body: [
      "Healthy habits start young. We make children's visits positive and stress-free, building the foundation for a lifetime of healthy smiles.",
      "From first teeth to teenage years, our team keeps young patients comfortable and cavity-free.",
    ],
    highlights: ["Kid-friendly", "Preventive focus", "Gentle approach"],
    image: serviceImg("general-dentistry.jpg"),
  },
  {
    slug: "bone-grafting",
    name: "Bone Grafting",
    category: "Specialty",
    blurb: "Rebuilding jaw structure to support implants and lasting health.",
    body: [
      "Bone grafting restores lost jawbone, often as a first step that makes dental implants possible. With surgical specialty training, our team handles grafting in-house.",
      "A strong foundation means better, longer-lasting results for your restorative care.",
    ],
    highlights: ["Prepares for implants", "Restores jaw structure", "In-house surgical care"],
    image: serviceImg("denture.jpg"),
  },
];

export const technology = [
  { name: "Cone Beam CT Imaging", image: `${IMG}/images/conebeam.jpg`, desc: "3D imaging for precise diagnosis and implant planning." },
  { name: "Intra-Oral Camera", image: `${IMG}/images/intraoral.jpg`, desc: "See exactly what we see, in real time, on screen." },
  { name: "Digital X-Rays", image: `${IMG}/images/digital-xrays.jpg`, desc: "Faster, clearer images with far less radiation." },
  { name: "Laser Dentistry", image: `${IMG}/images/dental-services/laser-dentistry.jpg`, desc: "Precise, comfortable treatment with quicker healing." },
];

export const officeGallery = [
  `${IMG}/images/home-slider/office1.jpg`,
  `${IMG}/client/images/gallery/office2.jpg`,
  `${IMG}/client/images/gallery/office3.jpg`,
  `${IMG}/client/images/gallery/office4.jpg`,
];

export const differentiators = [
  { title: "Years of Experience", desc: "Deep dental experience across general, cosmetic, and surgical care for every oral health need." },
  { title: "Comfortable & Convenient", desc: "We work to keep every patient relaxed and at ease throughout their visit." },
  { title: "State-of-the-Art Technology", desc: "The latest equipment and techniques for accurate diagnosis and better outcomes." },
  { title: "A Team You Can Count On", desc: "A friendly, experienced dentist and caring team here to serve you." },
];

export const teamImage = `${IMG}/images/home-slider/team.jpg`;
