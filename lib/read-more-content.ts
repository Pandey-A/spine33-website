export type ReadMoreArticle = {
  slug: string
  featureTitle: string
  pageTitle: string
  heroSubtitle: string
  introHeading: string
  introParagraph: string
  sections: Array<{
    heading: string
    paragraphs: string[]
    bullets?: string[]
  }>
}

export const readMoreArticles: ReadMoreArticle[] = [
  {
    slug: "expert-spine-specialists",
    featureTitle: "Expert Spine Specialists",
    pageTitle: "Expert Spine Specialists in Nagpur - The Spine 33 Clinical Team",
    heroSubtitle: "The Core of Spine 33: Expertise You Can Trust",
    introHeading: "The Core of Spine 33: Expertise You Can Trust",
    introParagraph:
      "Choosing the right specialist for your spine is one of the most important health decisions you will make. At Spine 33 in Nagpur, we understand that back and neck pain can be paralyzing, affecting your work, your family time, and your mental well-being. That is why we have assembled a team that combines decades of clinical experience with a deep sense of empathy.",
    sections: [
      {
        heading: "A Multidisciplinary Approach",
        paragraphs: [
          "Unlike general clinics, Spine 33 focuses specifically on the complex architecture of the human spine. Our team includes senior orthopedic consultants, specialized spine therapists, and senior physiotherapists.",
          "We believe that spine care is not a one-person approach. It requires a multidisciplinary model where doctors and therapists work together to create a personalized recovery map for every patient.",
        ],
      },
      {
        heading: "Why Specialization Matters",
        paragraphs: [
          "The spine is the central pillar of your body. It houses the nervous system and supports your entire weight. When something goes wrong, whether it is a slipped disc, sciatica, or chronic stiffness, you need more than just temporary pain relief.",
          "Our specialists are trained in the latest global protocols for spinal health, ensuring that patients in Nagpur receive international-standard care right here in their home city.",
        ],
      },
      {
        heading: "Our Commitment to Non-Invasive Care",
        paragraphs: [
          "At the heart of our expertise is a Surgery-Last philosophy. While many clinics may rush toward surgical interventions, our specialists focus on conservative management and precision-led rehabilitation.",
          "By using advanced diagnostic tools and precision-based physiotherapy, we help most of our patients avoid surgery while still recovering effectively.",
        ],
      },
      {
        heading: "Patient-Centric Care in Nagpur",
        paragraphs: [
          "Medical language can be overwhelming. Our experts take time to explain MRI or X-ray findings in simple terms and discuss the reason behind your pain.",
          "When you visit Spine 33, you are not just another appointment number; you are an active partner in your healing journey.",
        ],
      },
    ],
  },
  {
    slug: "quick-assessment",
    featureTitle: "Quick Assessment",
    pageTitle: "Quick Assessment - Precision Diagnosis of Back and Neck Pain for Lasting Relief",
    heroSubtitle: "Stop Guessing, Start Healing: The Spine 33 Assessment Protocol",
    introHeading: "Stop Guessing, Start Healing: The Spine 33 Assessment Protocol",
    introParagraph:
      "Many people live with back pain for years, treating symptoms without understanding the real cause. At Spine 33, our Quick Assessment is designed to end that guesswork through a comprehensive 360-degree evaluation of your spine, posture, and neurological health.",
    sections: [
      {
        heading: "What Happens During Your Assessment?",
        paragraphs: [
          "When you visit our Nagpur clinic, we evaluate your body as a whole to identify the real pain generator and hidden movement problems.",
        ],
        bullets: [
          "Digital Posture Screening to analyze standing and sitting alignment",
          "Biomechanical Analysis to detect movement asymmetry and overload patterns",
          "Palpation and Reflex Tests to identify trigger points and nerve-related stress",
        ],
      },
      {
        heading: "Early Detection Saves Years of Pain",
        paragraphs: [
          "Conditions like scoliosis, degenerative disc disease, or early-stage sciatica are easier to manage when detected early. Our assessment establishes a clear baseline and helps track treatment progress objectively.",
        ],
      },
      {
        heading: "The Power of a Clear Plan",
        paragraphs: [
          "After assessment, you receive a Spine Health Report with your condition summary, contributing lifestyle factors, and a practical recovery roadmap.",
          "By identifying the exact source of pain, whether a nerve, muscle, or joint, we can target therapy with precision while keeping treatment non-surgical.",
        ],
      },
    ],
  },
  {
    slug: "pain-free-treatment",
    featureTitle: "Pain-Free Treatment",
    pageTitle: "Pain-Free Treatment - Restoring Life Without Surgery",
    heroSubtitle: "Advanced Healing: The Science of Pain-Free Recovery",
    introHeading: "Advanced Healing: The Science of Pain-Free Recovery",
    introParagraph:
      "The fear of surgery often delays treatment. At Spine 33, we focus on advanced, non-surgical care that is effective, safe, and designed to reduce pain without downtime.",
    sections: [
      {
        heading: "Our Core Treatment Pillars",
        paragraphs: [
          "We combine clinical precision, hands-on expertise, and rehabilitation science to promote natural healing and durable relief.",
        ],
        bullets: [
          "Clinical Physiotherapy focused on spinal rehabilitation and core stability",
          "Manual Therapy and Mobilization to improve motion and reduce inflammation",
          "Spinal Decompression for disc-related pressure and nerve irritation",
          "Posture Correction Programs for long-term protection in daily life",
        ],
      },
      {
        heading: "A Safe and Effective Alternative",
        paragraphs: [
          "Our protocols are designed for people who want to avoid the risks and long recovery associated with surgery. Most patients begin experiencing meaningful relief within early sessions.",
          "Because treatment is non-invasive, you can return to your normal routine immediately after care.",
        ],
      },
      {
        heading: "The Long-Term Goal: Permanent Recovery",
        paragraphs: [
          "We do not believe in temporary fixes. Our goal is to resolve structural and functional causes of pain, improve circulation, and support your body’s natural healing process.",
          "From work productivity to family life, the mission is simple: help you move freely and live pain-free with confidence.",
        ],
      },
    ],
  },
]

export function getReadMoreArticleBySlug(slug: string) {
  return readMoreArticles.find((article) => article.slug === slug)
}
