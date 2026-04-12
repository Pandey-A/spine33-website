export type SpineService = {
  slug: string
  title: string
  image: string
  shortDescription: string
  conditions: string[]
  overview: string
  whoItsFor: string[]
  treatments: string[]
}

export const spineServices: SpineService[] = [
  {
    slug: "back-pain",
    title: "BACK PAIN",
    image: "/services/Back-Pain.png",
    shortDescription: "Evidence-based treatment for acute and chronic back pain.",
    conditions: ["Lower Back Pain", "Neck Pain", "Upper Back Pain"],
    overview:
      "Our back pain program focuses on root-cause assessment, posture correction, and progressive rehabilitation. We blend manual therapy, targeted exercises, and movement retraining to reduce pain and improve day-to-day comfort.",
    whoItsFor: [
      "People with desk-job stiffness and postural strain",
      "Patients with recurring low back or neck pain",
      "Individuals recovering after prolonged inactivity",
    ],
    treatments: [
      "Clinical posture and movement screening",
      "Manual therapy and myofascial release",
      "Core strengthening and mobility drills",
      "Home-exercise and ergonomic guidance",
    ],
  },
  {
    slug: "spondylitis",
    title: "SPONDYLITIS",
    image: "/services/SPONDYLITIS.png",
    shortDescription: "Specialized non-surgical care for spondylitis-related symptoms.",
    conditions: ["Spondylosis", "Scoliosis", "Spondylolisthesis", "Stenosis"],
    overview:
      "For spondylitis and related spinal degeneration, we provide structured conservative care that reduces inflammation, improves spinal mobility, and strengthens supporting muscles for long-term stability.",
    whoItsFor: [
      "People with persistent neck or lower back stiffness",
      "Patients with radiating pain from spinal degeneration",
      "Anyone seeking non-surgical symptom control",
    ],
    treatments: [
      "Condition-specific physiotherapy protocols",
      "Segmental mobility and flexibility work",
      "Stability-focused strengthening plans",
      "Pain management through guided progression",
    ],
  },
  {
    slug: "disc-bulge",
    title: "DISC BULGE",
    image: "/services/Disc-Bulge.png",
    shortDescription: "Disc care plans to ease pain and restore confidence in movement.",
    conditions: ["Slipped Disc", "Herniated Disc", "Disc Prolapse"],
    overview:
      "Our disc bulge management pathway emphasizes pain relief, nerve decompression strategies, and safe movement mechanics. Treatment is customized based on pain pattern, severity, and daily activity needs.",
    whoItsFor: [
      "Patients with disc-related back or leg pain",
      "People with sitting intolerance and movement fear",
      "Individuals advised for conservative care first",
    ],
    treatments: [
      "Neural mobility and decompression exercises",
      "Progressive loading for spinal resilience",
      "Manual therapy for muscle guarding",
      "Education for safe lifting and posture",
    ],
  },
  {
    slug: "pregnancy-back-pain",
    title: "PREGNANCY BACK PAIN",
    image: "/services/Pregnancy-pain.png",
    shortDescription: "Gentle, trimester-safe spine and pelvic pain rehabilitation.",
    conditions: ["Pre & Post Pregnancy Care", "Pelvic Pain", "Posture Correction"],
    overview:
      "We offer safe, stage-appropriate care for pregnancy and postpartum discomfort. The focus is to reduce pain, improve pelvic and spinal support, and help mothers move comfortably through daily routines.",
    whoItsFor: [
      "Pregnant women with back or pelvic discomfort",
      "Postpartum mothers needing recovery support",
      "Women with posture-related strain during pregnancy",
    ],
    treatments: [
      "Trimester-wise therapeutic exercise plans",
      "Pelvic floor and core activation work",
      "Posture, breathing, and movement coaching",
      "Postpartum reconditioning and pain relief",
    ],
  },
  {
    slug: "spinal-canal-stenosis",
    title: "SPINAL CANAL STENOSIS",
    image: "/services/Spinal-Canal.png",
    shortDescription: "Targeted therapy to reduce stenosis symptoms and improve walking tolerance.",
    conditions: ["Nerve Compression", "Lumbar Stenosis", "Cervical Stenosis"],
    overview:
      "For stenosis-related pain and numbness, our rehabilitation model improves posture alignment, nerve comfort, and functional endurance. The program is paced carefully to improve symptom-free movement.",
    whoItsFor: [
      "Patients with pain on standing or walking",
      "People with stenosis-related leg or arm symptoms",
      "Individuals seeking conservative symptom management",
    ],
    treatments: [
      "Flexion-biased and decompression strategies",
      "Nerve-glide and mobility interventions",
      "Lower-limb and trunk endurance training",
      "Activity modification and pacing plans",
    ],
  },
  {
    slug: "headaches-with-neck-pain",
    title: "HEADACHES WITH NECK PAIN",
    image: "/services/Headache.png",
    shortDescription: "Integrated headache and cervical pain management program.",
    conditions: ["Cervicogenic Headaches", "Tension Headaches", "Migraine Relief"],
    overview:
      "Headache symptoms can be strongly linked to neck mechanics and muscular tension. We combine cervical mobility work, trigger-point care, posture training, and stress-aware movement routines for sustainable relief.",
    whoItsFor: [
      "People with recurring headache plus neck tightness",
      "Patients with screen-time related cervical strain",
      "Those with tension-type headache patterns",
    ],
    treatments: [
      "Cervical mobilization and soft-tissue release",
      "Deep-neck flexor and scapular strengthening",
      "Posture and workstation correction",
      "Headache trigger tracking and prevention plan",
    ],
  },
]

export function getSpineServiceBySlug(slug: string) {
  return spineServices.find((service) => service.slug === slug)
}
