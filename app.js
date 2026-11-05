/**
 * SACRED LIFE BY PINKI — Reimagined Architectural Temple Sanctuary
 * Themes: Life • Suffering • Repeating Patterns • People's Behaviour • Deep Understanding • Temple • Connection Talks
 */

// 0. DATA: Hero Interactive Intention Selector ("What brings you to the Temple Steps today?")
const HERO_INTENTIONS = [
  {
    id: 'suffering',
    label: '“Life feels heavy & I want to understand my suffering”',
    sanskrit: 'DUKKHA NIVARANA • HEALING ACHE',
    letter: '“Sit down for a moment and let your shoulders drop. Suffering feels unbearable only when we fight it alone in the dark. Here in the temple, we do not judge your pain—we look gently at what it is trying to free inside you.”',
    image: 'asset/images/elements/Woman_holding_red_rose_portrait_202608142217.jpeg'
  },
  {
    id: 'patterns',
    label: '“I keep repeating the same painful pattern in life”',
    sanskrit: 'SAMSARA CHAKRA • BREAKING LOOPS',
    letter: '“Have you noticed how the faces change, yet the heartbreak feels identical? Life repeats a lesson until we see our own unconscious hand in the pattern. The moment you witness the loop with clear eyes, the cycle breaks.”',
    image: 'asset/images/elements/Woman_wearing_saree_2K_20260918182251.jpeg'
  },
  {
    id: 'behaviour',
    label: '“I am trying to understand someone’s hurtful behaviour”',
    sanskrit: 'SAKSHI BHAVA • HUMAN NATURE',
    letter: '“You exhaust yourself asking why they acted that way. Remember this truth: people do not treat you according to your worth; they treat you according to their own unhealed fears and conditioning. Understand them clearly, and step out of their storm.”',
    image: 'asset/images/elements/Woman_reclining_on_sofa_2K_202608121827 (1).jpeg'
  },
  {
    id: 'connection',
    label: '“I crave an honest, unmasked Connection Talk”',
    sanskrit: 'SATSANG • SOUL DIALOGUE',
    letter: '“The world is full of noise and polite masks, yet starving for real understanding. When two human beings sit together in complete honesty—without pretending or defending—that conversation itself becomes a temple.”',
    image: 'asset/images/profile/Woman_holding_red_rose_portrait_202608142243.jpeg'
  }
];

// 1. DATA: The 4 Manuscript Chapters (Life & Suffering, Patterns, People's Behaviour, Understanding)
const MANIFESTO_PILLARS = [
  {
    id: 'suffering',
    number: 'I',
    subtitle: 'DUKKHA & AWAKENING',
    title: 'Life & The Anatomy of Suffering',
    shortDesc: 'Pain is a natural wave of human life; suffering is the mental prison we build when we demand that reality or people be different than they are.',
    mantra: '“Pain is the shell breaking; understanding is the life that emerges from within it.”',
    ritualPractice: 'Sit before a lit Diya for 5 minutes. Instead of running from the heaviness in your chest, breathe into it as a silent witness.',
    image: 'asset/images/elements/IMG_20260725_220559517.jpg',
    caption: 'Chapter I — Sitting gently with unspoken suffering until it turns into clarity.',
    highlights: [
      'Why we suffer: clinging to illusions about how life or people "should" have been',
      'Separating raw human grief from the exhausting loop of mental overthinking',
      'Allowing heartbreak and disappointment to deepen your wisdom rather than harden your heart'
    ]
  },
  {
    id: 'patterns',
    number: 'II',
    subtitle: 'KARMIC REPETITION',
    title: 'Why Patterns Repeat Until Witnessed',
    shortDesc: 'Why do we walk into the same emotional storm with different people? Because the nervous system mistakes familiar childhood pain for home.',
    mantra: '“What you refuse to observe within yourself, you will keep meeting disguised as fate.”',
    ritualPractice: 'Ask yourself honestly tonight: "What role do I keep playing in my own heartbreak—the rescuer, the over-giver, or the silent carrier?"',
    image: 'asset/images/elements/Woman_wearing_saree_2K_20260918182251.jpeg',
    caption: 'Chapter II — The Mirror of Self-Inquiry: seeing the loop before it repeats.',
    highlights: [
      'Recognizing why chaotic or unavailable dynamics feel "magnetic" to an unhealed wound',
      'Catching yourself in the 3-second pause before an old reactive pattern takes over',
      'Replacing self-blame with compassionate awareness so the cycle finally ends'
    ]
  },
  {
    id: 'behaviour',
    number: 'III',
    subtitle: 'PSYCHOLOGY & SPIRIT',
    title: 'Decoding People’s Behaviour Without Absorbing It',
    shortDesc: 'Every human being acts from their level of consciousness, conditioning, and fear. When you see the root of their behaviour, you stop taking it personally.',
    mantra: '“To understand someone’s behaviour is not to excuse harm—it is to free your mind from their chaos.”',
    ritualPractice: 'When someone reacts with ego, coldness, or projection, pause and silently note: "This is their inner weather, not my identity."',
    image: 'asset/images/elements/c396f690-4727-45cd-8982-72c2d2b9606f.jpeg_20260919171030.jpeg',
    caption: 'Chapter III — Standing in calm sovereignty while observing human nature.',
    highlights: [
      'Why people project their own guilt, insecurity, and unfinished past onto you',
      'The difference between reacting with anger vs. responding with calm, firm boundaries',
      'How to love and understand people with open eyes without losing your self-respect'
    ]
  },
  {
    id: 'understanding',
    number: 'IV',
    subtitle: 'THE TEMPLE & SATSANG',
    title: 'Deep Understanding & Connection Talks',
    shortDesc: 'The temple is not merely carved stone—it is the quality of stillness and total honesty when two human beings sit together to understand life.',
    mantra: '“One conversation rooted in truth can heal what ten years of surface talk could never touch.”',
    ritualPractice: 'Practice deep listening today: listen not to argue or fix, but to hear the human soul speaking beneath the words.',
    image: 'asset/images/elements/Woman_holding_red_rose_portrait_202608142217.jpeg',
    caption: 'Chapter IV — Satsang: where masks fall away and real connection begins.',
    highlights: [
      'Moving from modern loneliness into meaningful, unmasked soul connection',
      'Using the temple environment—bells, lamps, stone, and silence—to anchor inner peace',
      '1:1 Connection Talks with Pinki to untangle complex life and relationship crossroads'
    ]
  }
];

// 1B. DATA: "The Human Mirror" — Interactive Decoder of People's Behaviour & Patterns
const BEHAVIOUR_MIRROR_CASES = [
  {
    id: 'case-1',
    question: '01. Why do people hurt or push away the ones who love them most?',
    surfaceBehaviour: 'Sudden coldness, picking unnecessary fights, or sabotaging closeness right when connection deepens.',
    hiddenWound: 'Deep fear of vulnerability and abandonment. For a defended nervous system, real intimacy feels dangerous because it risks being seen and left.',
    yourPattern: 'You try harder, over-explain, and pour more love in—believing if you just prove your devotion, they will feel safe.',
    templeClarity: 'You cannot heal someone’s fear of intimacy by sacrificing your own peace. Step back with warmth, not bitterness, and let them face their own mirror.'
  },
  {
    id: 'case-2',
    question: '02. Why do people project their own faults and blame onto you?',
    surfaceBehaviour: 'Accusing you of selfishness, dishonesty, or drama when you calmly bring up a real hurt.',
    hiddenWound: 'An fragile ego that cannot bear the weight of shame. To avoid feeling guilty, the unconscious mind throws the hot coal onto you.',
    yourPattern: 'You immediately enter the courtroom to defend your character, spending hours trying to make them see your innocence.',
    templeClarity: 'Never step into a courtroom built by someone else’s projection. When you know your heart is clean, a quiet "I see how you feel, but that is not my truth" is enough.'
  },
  {
    id: 'case-3',
    question: '03. Why do I keep attracting people who take my energy but give crumbs?',
    surfaceBehaviour: 'One-sided friendships or relationships where you are the therapist, anchor, and giver, while your needs go unseen.',
    hiddenWound: 'Many takers are not evil—they are simply emotionally immature and accustomed to consuming whatever is freely offered without boundaries.',
    yourPattern: 'Early in life, you learned that being "needed" and self-sacrificing was the price of admission for love.',
    templeClarity: 'The pattern breaks the day you stop auditioning for love. Give from overflow, never from self-abandonment.'
  },
  {
    id: 'case-4',
    question: '04. How do I deeply understand someone’s pain without excusing their bad behaviour?',
    surfaceBehaviour: 'Seeing someone’s childhood trauma or stress and therefore allowing them to repeatedly cross your boundaries.',
    hiddenWound: 'Their trauma explains *why* they struggle with regulation, but it does not grant permission to wound others.',
    yourPattern: 'Confusing spiritual compassion with endlessly tolerating disrespect.',
    templeClarity: 'True temple wisdom holds two truths at once: "I have deep compassion for the wound that made you this way, AND I will not allow that wound to mistreat me."'
  }
];

// 1C. DATA: Interactive 5 Sacred Temple Diyas (Pushkarini Altar)
const TEMPLE_DIYAS = [
  {
    id: 'diya-life',
    name: 'Diya of Life',
    sanskrit: 'PRANA DEEPAM',
    teaching: 'Life is not a problem to be solved, but a sacred pilgrimage to be experienced with open eyes.'
  },
  {
    id: 'diya-suffering',
    name: 'Diya of Healing Suffering',
    sanskrit: 'KARUNA DEEPAM',
    teaching: 'Every crack in the heart is where the temple light enters when you stop resisting truth.'
  },
  {
    id: 'diya-patterns',
    name: 'Diya of Breaking Patterns',
    sanskrit: 'CHETANA DEEPAM',
    teaching: 'Awareness is the flame that burns away years of repeating karmic and emotional loops in a single moment.'
  },
  {
    id: 'diya-behaviour',
    name: 'Diya of Understanding People',
    sanskrit: 'SAKSHI DEEPAM',
    teaching: 'See people as they are—wounded, seeking, conditioned—so their behaviour no longer disturbs your inner sanctum.'
  },
  {
    id: 'diya-connection',
    name: 'Diya of Soul Connection',
    sanskrit: 'SATSANG DEEPAM',
    teaching: 'When two minds meet in honesty without masks, that conversation itself becomes a temple.'
  }
];

// 2. DATA: Connection Talks Ledger (Horizontal Architectural Rows)
const SACRED_OFFERINGS = [
  {
    id: 'connection-talk-1on1',
    numeral: 'DIALOGUE I',
    category: 'connection-talks',
    badge: '1:1 HEART-TO-HEART DIALOGUE',
    title: 'Life, Suffering & Pattern Clarity Talk',
    subtitle: 'Private 1:1 Conversation with Pinki • 60 / 90 Minutes',
    duration: 'Voice or Video Temple Sanctuary',
    image: 'asset/images/elements/Woman_wearing_saree_2K_20260918182251.jpeg',
    description: 'When life feels heavy, confusing, or caught in a repeating loop—sit with Pinki in an unhurried, judgment-free 1:1 conversation. Together we look at the root of your suffering, uncover the hidden pattern, and restore quiet clarity.',
    features: [
      'Unpacking emotional suffering & life crossroads without clichés',
      'Identifying why a specific relationship or life pattern keeps repeating',
      'Practical inner-witness tools to return to peace'
    ]
  },
  {
    id: 'understanding-people',
    numeral: 'DIALOGUE II',
    category: 'behaviour',
    badge: 'HUMAN NATURE & BOUNDARIES',
    title: 'Understanding People’s Behaviour & Relationships',
    subtitle: 'Deep Inquiry into Interpersonal Dynamics • 75 Minutes',
    duration: '1:1 Guided Clarity Session',
    image: 'asset/images/elements/c396f690-4727-45cd-8982-72c2d2b9606f.jpeg_20260919171030.jpeg',
    description: 'Struggling to make sense of someone’s coldness, projection, or mixed signals? We decode the human psychology and spiritual root behind their behaviour so you can stop overthinking, release self-blame, and hold peaceful boundaries.',
    features: [
      'Seeing clearly beneath ego masks, attachment fears & projection',
      'Ending the cycle of over-giving and people-pleasing',
      'Responding from calm strength instead of emotional exhaustion'
    ]
  },
  {
    id: 'temple-satsang',
    numeral: 'DIALOGUE III',
    category: 'temple-circle',
    badge: 'WEEKLY TEMPLE ENVIRONMENT',
    title: 'Evening Temple Satsang & Connection Circle',
    subtitle: 'Shared Diya-Lit Reflections on Life, Mind & Stillness',
    duration: 'Weekly Live Gathering + Audio Archive',
    image: 'asset/images/elements/IMG_20260725_220559517.jpg',
    description: 'Gather in a serene dark temple environment lit by brass lamps and honest conversation. Listen to Pinki’s weekly discourses on life, suffering, and human nature, and bring your questions to the open circle.',
    features: [
      'Live weekly Satsang talks on real-life struggles & spiritual maturity',
      'Guided temple bell silence & lamp-lighting contemplation',
      'Full archive of Pinki’s spoken midnight reflections'
    ]
  }
];

// 2B. DATA: The 7 Temple Pradakshina Walks (asset/videos/vertical_video)
const TEMPLE_REELS = [
  {
    id: 'reel-1',
    badge: 'PRADAKSHINA I • STILLNESS',
    title: 'Entering the Temple to Quiet the Mind',
    desc: 'When the outside world is full of noise and human misunderstandings, stepping onto cool temple stone reminds us that silence is always waiting within.',
    mantra: '“You do not enter a temple to escape life; you enter to see life clearly without the dust of yesterday’s suffering.”',
    video: 'asset/videos/vertical_video/Woman_walking_in_temple_0a71f433_1080p.mp4',
    poster: 'asset/images/profile/Woman_holding_red_rose_portrait_202608142243.jpeg'
  },
  {
    id: 'reel-2',
    badge: 'PRADAKSHINA II • WITNESSING',
    title: 'Pillars of Awareness — Seeing Our Loops',
    desc: 'Just as temple pillars stand unmoved by passing wind, learn to stand as a witness to your own repeating thoughts and emotional patterns.',
    mantra: '“The moment you observe a pattern without judging yourself, its grip over your life begins to loosen.”',
    video: 'asset/videos/vertical_video/Woman_walking_in_temple_6b1afb8e_1080p.mp4',
    poster: 'asset/images/elements/Woman_holding_red_rose_portrait_202608142217.jpeg'
  },
  {
    id: 'reel-3',
    badge: 'PRADAKSHINA III • DUALITY',
    title: 'Where Suffering Meets Understanding',
    desc: 'In the temple corridor, warm diya light and deep shadow exist together. Life too is woven from both joy and sorrow—understanding holds them both.',
    mantra: '“Do not resent the dark chapters of your life; they gave you the depth to understand others.”',
    video: 'asset/videos/vertical_video/Woman_walking_in_temple_6da78e35_1080p.mp4',
    poster: 'asset/images/elements/Woman_wearing_saree_2K_20260918182251.jpeg'
  },
  {
    id: 'reel-4',
    badge: 'PRADAKSHINA IV • HUMAN NATURE',
    title: 'Walking Past Judgment Into Clarity',
    desc: 'People act from their level of awareness and their unhealed wounds. Walk with grace, knowing you do not have to carry every stone thrown your way.',
    mantra: '“Understanding someone’s behaviour does not mean tolerating harm; it means freeing your heart from hatred.”',
    video: 'asset/videos/vertical_video/Woman_walking_in_temple_86ce502b_1080p.mp4',
    poster: 'asset/images/elements/Woman_reclining_on_sofa_2K_202608121827 (1).jpeg'
  },
  {
    id: 'reel-5',
    badge: 'PRADAKSHINA V • THRESHOLD',
    title: 'Leaving Old Burdens at the Temple Door',
    desc: 'Every threshold in the temple asks you to bow the ego and leave behind the heavy stories you have been carrying alone.',
    mantra: '“How much lighter would your life feel if you stopped replaying conversations that are already over?”',
    video: 'asset/videos/vertical_video/Woman_walking_in_temple_a3ebed1e_1080p.mp4',
    poster: 'asset/images/elements/IMG_20260725_220559517.jpg'
  },
  {
    id: 'reel-6',
    badge: 'PRADAKSHINA VI • SOLITUDE',
    title: 'Loneliness vs. Sacred Solitude',
    desc: 'Loneliness is the pain of feeling disconnected from others; solitude is the temple joy of finally being connected to yourself.',
    mantra: '“When you are at home within yourself, you no longer beg for crumbs of attention from the world.”',
    video: 'asset/videos/vertical_video/Woman_walking_in_temple_b0711809_1080p.mp4',
    poster: 'asset/images/elements/c396f690-4727-45cd-8982-72c2d2b9606f.jpeg_20260919171030.jpeg'
  },
  {
    id: 'reel-7',
    badge: 'PRADAKSHINA VII • SATSANG',
    title: 'Evening Lamps & True Connection',
    desc: 'As temple lamps are lit at dusk, we remember that the highest gift we can offer another human being is our undivided, understanding presence.',
    mantra: '“Real connection needs no performance—only two honest hearts willing to listen.”',
    video: 'asset/videos/vertical_video/Woman_walking_in_temple_d39516e7_1080p.mp4',
    poster: 'asset/images/profile/Woman_holding_red_rose_portrait_202608142243.jpeg'
  }
];

// 3. DATA: Complete Visual Sanctum Archive (All 6 Local Portraits + All 7 Temple Walk Videos Connected)
const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    type: 'image',
    category: 'golden-hour',
    title: 'Sanctum Host — The Red Rose Offering',
    subtitle: 'SHRINE I • PROFILE SANCTUM',
    ritualNote: 'Like a rose that blooms alongside thorns, real life holds both beauty and ache. Offer both to the sacred fire within.',
    image: 'asset/images/profile/Woman_holding_red_rose_portrait_202608142243.jpeg'
  },
  {
    id: 'gal-2',
    type: 'video',
    category: 'rituals',
    title: 'Pradakshina I — Entering the Stone Sanctuary',
    subtitle: 'SHRINE II • 1080P TEMPLE FILM',
    ritualNote: 'Stepping across the carved threshold into the lamp-lit stillness of the inner temple.',
    image: 'asset/images/profile/Woman_holding_red_rose_portrait_202608142243.jpeg',
    video: 'asset/videos/vertical_video/Woman_walking_in_temple_0a71f433_1080p.mp4'
  },
  {
    id: 'gal-3',
    type: 'image',
    category: 'temple-silk',
    title: 'The Mirror of Self-Inquiry in Temple Silk',
    subtitle: 'SHRINE III • SEEING OUR PATTERNS',
    ritualNote: 'Every relationship is a mirror. Instead of asking why they acted that way, ask what inside you is ready to heal.',
    image: 'asset/images/elements/Woman_wearing_saree_2K_20260918182251.jpeg'
  },
  {
    id: 'gal-4',
    type: 'video',
    category: 'rituals',
    title: 'Pradakshina II — Pillars of Witnessing',
    subtitle: 'SHRINE IV • 1080P TEMPLE FILM',
    ritualNote: 'Stand like the carved stone pillars—observing passing emotional storms without losing your center.',
    image: 'asset/images/elements/Woman_holding_red_rose_portrait_202608142217.jpeg',
    video: 'asset/videos/vertical_video/Woman_walking_in_temple_6b1afb8e_1080p.mp4'
  },
  {
    id: 'gal-5',
    type: 'image',
    category: 'golden-hour',
    title: 'Devotion & Unspoken Stories',
    subtitle: 'SHRINE V • COMPASSIONATE HEART',
    ritualNote: 'Keep your heart soft and discerning even after understanding how unconscious the world can be.',
    image: 'asset/images/elements/Woman_holding_red_rose_portrait_202608142217.jpeg'
  },
  {
    id: 'gal-6',
    type: 'video',
    category: 'temple-silk',
    title: 'Pradakshina III — Light & Shadow in the Mandapa',
    subtitle: 'SHRINE VI • 1080P TEMPLE FILM',
    ritualNote: 'Where suffering meets deep understanding, every dark corridor reveals a glowing lamp.',
    image: 'asset/images/elements/Woman_wearing_saree_2K_20260918182251.jpeg',
    video: 'asset/videos/vertical_video/Woman_walking_in_temple_6da78e35_1080p.mp4'
  },
  {
    id: 'gal-7',
    type: 'image',
    category: 'tropical',
    title: 'Sacred Rest — Observing Human Behaviour',
    subtitle: 'SHRINE VII • SOUL SOVEREIGNTY',
    ritualNote: 'True connection is not possession; it is witnessing the divine and the wounded in another while remaining whole in yourself.',
    image: 'asset/images/elements/Woman_reclining_on_sofa_2K_202608121827 (1).jpeg'
  },
  {
    id: 'gal-8',
    type: 'video',
    category: 'tropical',
    title: 'Pradakshina IV — Walking Past Judgment',
    subtitle: 'SHRINE VIII • 1080P TEMPLE FILM',
    ritualNote: 'When you understand why people act from fear, their actions lose the power to poison your peace.',
    image: 'asset/images/elements/Woman_reclining_on_sofa_2K_202608121827 (1).jpeg',
    video: 'asset/videos/vertical_video/Woman_walking_in_temple_86ce502b_1080p.mp4'
  },
  {
    id: 'gal-9',
    type: 'image',
    category: 'golden-hour',
    title: 'Sitting with Unspoken Suffering',
    subtitle: 'SHRINE IX • GARBHAGRIHA STILLNESS',
    ritualNote: 'Do not run from the quiet ache at night. Sit with it gently in the diya light until it turns into wisdom.',
    image: 'asset/images/elements/IMG_20260725_220559517.jpg'
  },
  {
    id: 'gal-10',
    type: 'video',
    category: 'rituals',
    title: 'Pradakshina V — Leaving Burdens at the Threshold',
    subtitle: 'SHRINE X • 1080P TEMPLE FILM',
    ritualNote: 'Every temple doorway invites you to set down the heavy stories you have been carrying alone.',
    image: 'asset/images/elements/IMG_20260725_220559517.jpg',
    video: 'asset/videos/vertical_video/Woman_walking_in_temple_a3ebed1e_1080p.mp4'
  },
  {
    id: 'gal-11',
    type: 'image',
    category: 'tropical',
    title: 'The Eyes of Deep Understanding',
    subtitle: 'SHRINE XI • THE SILENT WITNESS',
    ritualNote: 'When you understand yourself deeply, nobody else’s projection can shake your inner sanctum.',
    image: 'asset/images/elements/c396f690-4727-45cd-8982-72c2d2b9606f.jpeg_20260919171030.jpeg'
  },
  {
    id: 'gal-12',
    type: 'video',
    category: 'temple-silk',
    title: 'Pradakshina VI — Sacred Solitude vs. Loneliness',
    subtitle: 'SHRINE XII • 1080P TEMPLE FILM',
    ritualNote: 'Solitude in the temple is the joy of finally coming home to your own being.',
    image: 'asset/images/elements/c396f690-4727-45cd-8982-72c2d2b9606f.jpeg_20260919171030.jpeg',
    video: 'asset/videos/vertical_video/Woman_walking_in_temple_b0711809_1080p.mp4'
  },
  {
    id: 'gal-13',
    type: 'video',
    category: 'rituals',
    title: 'Pradakshina VII — Evening Diyas & Connection',
    subtitle: 'SHRINE XIII • 1080P TEMPLE FILM',
    ritualNote: 'As the evening lamps are lit, two honest hearts meeting in truth become a living temple.',
    image: 'asset/images/profile/Woman_holding_red_rose_portrait_202608142243.jpeg',
    video: 'asset/videos/vertical_video/Woman_walking_in_temple_d39516e7_1080p.mp4'
  }
];

// 4. DATA: Palm-Leaf / Temple Sutra Cards
const ORACLE_CARDS = [
  {
    numeral: 'SUTRA I',
    title: 'The Medicine of Suffering',
    archetype: 'TRANSMUTING PAIN INTO WISDOM',
    element: 'Sacred Lamp Flame (Agni)',
    affirmation: '“I no longer ask ‘Why is this happening to me?’ I ask ‘What is this pain trying to awaken and free inside me?’”',
    ritualPrompt: 'Today, notice one situation you have been mentally resisting. Take three slow breaths and whisper: "I allow this moment to teach me without breaking my peace."',
    crystal: 'Temple Brass Diya & Sandalwood'
  },
  {
    numeral: 'SUTRA II',
    title: 'The Unbroken Pattern',
    archetype: 'STEPPING OUT OF REPEATING LOOPS',
    element: 'Temple Stone Threshold',
    affirmation: '“I recognize my old familiar patterns with kindness, and today I choose a different response instead of the same old wound.”',
    ritualPrompt: 'When an old emotional trigger arises today—pause for 5 full seconds before speaking or texting. That 5-second pause is where karma changes.',
    crystal: 'Rudraksha & Sacred Ash (Vibhuti)'
  },
  {
    numeral: 'SUTRA III',
    title: 'The Mirror of People’s Behaviour',
    archetype: 'UNDERSTANDING WITHOUT ABSORBING',
    element: 'Still Temple Water (Pushkarini)',
    affirmation: '“How others behave reflects their own inner weather. I can understand their struggle deeply without allowing their storm into my sanctuary.”',
    ritualPrompt: 'Think of someone whose behaviour recently hurt or confused you. Silently say: "Their actions belong to their conditioning; my peace belongs to me."',
    crystal: 'Lotus Petal & Clear Water'
  },
  {
    numeral: 'SUTRA IV',
    title: 'The Sanctuary of True Connection',
    archetype: 'DROPPING THE MASK IN SATSANG',
    element: 'Mogra Jasmine & Incense Smoke',
    affirmation: '“I release the exhaustion of pretending I am fine. I open my life to honest, unmasked conversations where souls truly meet.”',
    ritualPrompt: 'Have one completely honest conversation today—either with a trusted soul or in your journal—where you speak what you actually feel without editing yourself.',
    crystal: 'White Jasmine & Pure Camphor'
  },
  {
    numeral: 'SUTRA V',
    title: 'Silence Between the Temple Bells',
    archetype: 'DEEP UNDERSTANDING & STILLNESS',
    element: 'Resonant Bronze Bell (Ghanta)',
    affirmation: '“Beneath the noise of my overthinking mind, there is an untouched inner sanctum (Garbhagriha) that already knows the answer.”',
    ritualPrompt: 'Sit in complete silence for 5 minutes this evening with no phone and no music. Watch your thoughts pass like temple incense smoke dissolving into air.',
    crystal: 'Panchaloha Bronze & Tulsi'
  },
  {
    numeral: 'SUTRA VI',
    title: 'Compassion for Your Own Journey',
    archetype: 'FORGIVING PAST VERSIONS OF YOURSELF',
    element: 'Crimson Rose & Kumkum',
    affirmation: '“I forgive myself for the patterns I repeated when I was only trying to feel loved and safe. With new understanding, I walk forward free.”',
    ritualPrompt: 'Place your hand over your heart and thank your younger self for surviving what she did not yet have the wisdom to understand.',
    crystal: 'Red Rose & Temple Kumkum'
  }
];

// 5. WEB AUDIO API: Bronze Temple Bell & 432Hz Tanpura Synthesizer
class SacredSoundEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.oscillators = [];
    this.masterGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTempleBell() {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const partials = [
        { freq: 432, amp: 0.22, decay: 4.5 },
        { freq: 864, amp: 0.14, decay: 3.6 },
        { freq: 1188, amp: 0.09, decay: 2.8 },
        { freq: 1728, amp: 0.06, decay: 2.1 },
        { freq: 2410, amp: 0.04, decay: 1.4 }
      ];

      partials.forEach((p) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(p.freq, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(p.amp, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + p.decay + 0.05);
      });
    } catch (e) { }
  }

  playChime(freq = 528) {
    try {
      this.init();
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(freq, now);
      osc2.frequency.setValueAtTime(freq * 1.5, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.1, now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.8);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 2.9);
      osc2.stop(now + 2.9);
    } catch (e) { }
  }

  toggleAmbient() {
    this.init();
    if (this.isPlaying) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }

  startAmbient() {
    const now = this.ctx.currentTime;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, now);
    this.masterGain.gain.linearRampToValueAtTime(0.07, now + 2.0);
    this.masterGain.connect(this.ctx.destination);

    const freqs = [216, 324, 432, 528];
    this.oscillators = freqs.map((f, idx) => {
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now);
      oscGain.gain.setValueAtTime(idx === 0 ? 0.45 : 0.18, now);
      osc.connect(oscGain);
      oscGain.connect(this.masterGain);
      osc.start(now);
      return osc;
    });

    this.isPlaying = true;
  }

  stopAmbient() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.8);
    setTimeout(() => {
      this.oscillators.forEach((osc) => {
        try { osc.stop(); } catch (e) { }
      });
      this.oscillators = [];
    }, 850);
    this.isPlaying = false;
  }
}

const soundEngine = new SacredSoundEngine();

// 6. FALLBACK IMAGE GENERATOR
window.handleLuxuryImageError = function (imgEl, titleText = 'Sacred Temple') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
    <rect width="800" height="1000" fill="#140D08"/>
    <circle cx="400" cy="420" r="220" fill="none" stroke="#E8A838" stroke-width="2"/>
    <text x="400" y="760" text-anchor="middle" fill="#F7EBD4" font-family="Georgia, serif" font-size="28" letter-spacing="3">${titleText.toUpperCase()}</text>
  </svg>`;
  imgEl.onerror = null;
  imgEl.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};

// 6B. PHOTOREALISTIC 3D BRASS DIYA & MULTI-LAYER LIVING GHEE FLAME SVG GENERATOR
function createRealisticDiyaSVG(uid = 'diya-1', sizeClass = 'w-20 h-24') {
  return `
    <svg class="${sizeClass} overflow-visible select-none" viewBox="0 0 120 135" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Warm Firelight Radial Aura Halo -->
        <radialGradient id="halo-${uid}" cx="50%" cy="32%" r="50%">
          <stop offset="0%" stop-color="#FFAE2B" stop-opacity="0.85"/>
          <stop offset="45%" stop-color="#FF5500" stop-opacity="0.38"/>
          <stop offset="100%" stop-color="#FF3300" stop-opacity="0"/>
        </radialGradient>

        <!-- Outer Flame Saffron-Crimson Gradient -->
        <linearGradient id="flameOuter-${uid}" x1="60" y1="6" x2="60" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FF3B00" stop-opacity="0.95"/>
          <stop offset="35%" stop-color="#FF7B00"/>
          <stop offset="80%" stop-color="#FFC42E"/>
          <stop offset="100%" stop-color="#2E6BFF" stop-opacity="0.75"/>
        </linearGradient>

        <!-- Inner Flame White-Gold Core Gradient -->
        <linearGradient id="flameCore-${uid}" x1="60" y1="18" x2="60" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#FFE875"/>
          <stop offset="55%" stop-color="#FFFDF2"/>
          <stop offset="100%" stop-color="#66A3FF" stop-opacity="0.9"/>
        </linearGradient>

        <!-- 3D Metallic Panchaloha Brass Bowl Gradient -->
        <linearGradient id="brassBowl-${uid}" x1="14" y1="76" x2="106" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#4A2E0B"/>
          <stop offset="22%" stop-color="#9E6B1E"/>
          <stop offset="48%" stop-color="#F7C552"/>
          <stop offset="62%" stop-color="#FFF0A8"/>
          <stop offset="82%" stop-color="#9A661A"/>
          <stop offset="100%" stop-color="#3B2307"/>
        </linearGradient>

        <!-- Liquid Golden Ghee Oil Pool Gradient -->
        <radialGradient id="gheePool-${uid}" cx="50%" cy="45%" r="50%">
          <stop offset="0%" stop-color="#FFE270"/>
          <stop offset="55%" stop-color="#C97A10"/>
          <stop offset="100%" stop-color="#522E04"/>
        </radialGradient>

        <!-- Brass Pedestal Gradient -->
        <linearGradient id="brassBase-${uid}" x1="34" y1="98" x2="86" y2="124" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#3D2508"/>
          <stop offset="45%" stop-color="#E5A93C"/>
          <stop offset="55%" stop-color="#FCE295"/>
          <stop offset="100%" stop-color="#382106"/>
        </linearGradient>
      </defs>

      <!-- 1. Pulsing Radial Firelight Halo Behind Flame -->
      <circle class="diya-halo-glow" cx="60" cy="36" r="46" fill="url(#halo-${uid})" />

      <!-- 2. Cotton Wick & Red-Hot Glowing Ember Tip -->
      <path d="M58 66 Q60 59 60 54" stroke="#3D2612" stroke-width="3" stroke-linecap="round"/>
      <circle cx="60" cy="54" r="2.2" fill="#FF3300" />

      <!-- 3. Living Multi-Layer Ghee Flame -->
      <g class="diya-flame-outer">
        <!-- Main Teardrop Saffron Flame -->
        <path d="M60 7 C60 7 79 29 79 44 C79 55.5 70.5 62 60 62 C49.5 62 41 55.5 41 44 C41 29 60 7 60 7 Z" fill="url(#flameOuter-${uid})" />
        <!-- Inner White-Hot & Golden Core -->
        <g class="diya-flame-core">
          <path d="M60 19 C60 19 71 34 71 45 C71 52.5 66 58 60 58 C54 58 49 52.5 49 45 C49 34 60 19 60 19 Z" fill="url(#flameCore-${uid})" />
          <ellipse cx="60" cy="50" rx="5.5" ry="7" fill="#FFFFFF" fill-opacity="0.92"/>
        </g>
      </g>

      <!-- 4. Brass Diya Bowl Rim & Liquid Ghee Oil Pool -->
      <ellipse cx="60" cy="69" rx="44" ry="8.5" fill="#2B1904" stroke="#F5C451" stroke-width="1.5"/>
      <ellipse class="ghee-oil-surface" cx="60" cy="69.5" rx="40" ry="6.5" fill="url(#gheePool-${uid})"/>

      <!-- 5. 3D Carved Panchaloha Brass Bowl Body (Kunda) with Lotus Bevel -->
      <path d="M15 69 C18 90 36 100 60 100 C84 100 102 90 105 69 C92 76 28 76 15 69 Z" fill="url(#brassBowl-${uid})" stroke="#6B440E" stroke-width="1"/>
      <!-- Carved Lotus Petals on Brass Bowl -->
      <path d="M32 75 Q40 92 46 77 M48 77 Q60 95 72 77 M74 77 Q80 92 88 75" stroke="#593708" stroke-width="1.1" fill="none" opacity="0.65"/>
      <!-- Specular Highlight on Bowl Lip -->
      <path d="M22 71 Q60 79 98 71" stroke="#FFF4B8" stroke-width="1.2" fill="none" opacity="0.8"/>

      <!-- 6. Stepped Brass Pedestal Base (Peetha) -->
      <path d="M45 99 H75 L79 107 H41 L45 99 Z" fill="url(#brassBase-${uid})" stroke="#593708" stroke-width="0.9"/>
      <path d="M36 107 H84 L92 118 H28 L36 107 Z" fill="url(#brassBase-${uid})" stroke="#593708" stroke-width="1"/>
      <ellipse cx="60" cy="119" rx="34" ry="4" fill="#080401" opacity="0.75"/>
    </svg>
  `;
}

// 7. INITIALIZE APPLICATION ON DOM READY
document.addEventListener('DOMContentLoaded', () => {
  initSanctumThemeToggle();
  initWallSconceDiyas();
  initTempleAtmosphereCanvas();
  initFlameCursor();
  initNavbarAndMobileMenu();
  initHeroIntentionSelector();
  initTempleAltarAndBell();
  initManifestoAccordion();
  initBehaviourMirror();
  initSacredCinemaSection();
  initOfferingsSection();
  initGallerySection();
  initOracleSection();
  initExperienceModal();
  initBookingModal();
  initNewsletterForm();
  initScrollReveal();
});

// ==========================================
// WALL SCONCE DIYAS & TEMPLE ATMOSPHERE CANVAS (EMBERS & INCENSE SMOKE)
// ==========================================
function initWallSconceDiyas() {
  document.querySelectorAll('[data-wall-diya]').forEach((el, idx) => {
    const size = el.getAttribute('data-wall-diya-size') || 'w-14 h-16';
    el.classList.add('diya-lit', 'wall-diya-sconce');
    el.innerHTML = createRealisticDiyaSVG(`wall-${idx}`, size);
  });
}

function initTempleAtmosphereCanvas() {
  const canvas = document.getElementById('temple-atmosphere-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  // Lightweight rising golden diya embers (8 on mobile, 16 on desktop for 60fps battery-friendly smoothness)
  const particleCount = window.innerWidth < 768 ? 8 : 16;
  const particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 1.8 + 0.8,
    vx: (Math.random() - 0.5) * 0.28,
    vy: -(Math.random() * 0.48 + 0.2),
    alpha: Math.random() * 0.55 + 0.2,
    phase: Math.random() * Math.PI * 2
  }));

  function animate() {
    if (!document.hidden) {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#FFB347';
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.phase += 0.025;
        p.x += p.vx + Math.sin(p.phase) * 0.18;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        ctx.globalAlpha = p.alpha * (0.65 + 0.35 * Math.sin(p.phase));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
}

function initFlameCursor() {
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ticking = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
        ring.style.transform = `translate3d(${mouseX - 170}px, ${mouseY - 170}px, 0)`;
        ticking = false;
      });
    }
  }, { passive: true });
}

// ==========================================
// ANCIENT GARBHAGRIHA (DEFAULT) / DAWN EMBER AURA SWITCHER
// ==========================================
function initSanctumThemeToggle() {
  const toggleBtns = document.querySelectorAll('[data-toggle-sanctum-theme]');
  const labelEls = document.querySelectorAll('.theme-mode-label');

  function updateLabels() {
    const isSunlit = document.documentElement.classList.contains('sunlit-courtyard');
    labelEls.forEach((el) => {
      el.textContent = isSunlit ? '🪔 Deep Abyss Sanctum' : '✨ Warm Ember Aura';
    });
  }

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('sunlit-courtyard');
      soundEngine.playChime(528);
      updateLabels();
      const isSunlit = document.documentElement.classList.contains('sunlit-courtyard');
      showSanctuaryToast(
        isSunlit
          ? 'Switched to Warm Golden Diya Aura'
          : 'Entered Pitch-Dark Garbhagriha Abyss'
      );
    });
  });

  updateLabels();
}

// ==========================================
// HERO INTERACTIVE INTENTION SELECTOR (BORDERLESS)
// ==========================================
function initHeroIntentionSelector() {
  const pillsContainer = document.getElementById('hero-intention-pills');
  const responseBox = document.getElementById('hero-intention-response');
  if (!pillsContainer || !responseBox) return;

  let activeId = HERO_INTENTIONS[0].id;

  function renderIntentions() {
    pillsContainer.innerHTML = HERO_INTENTIONS.map((item) => {
      const isActive = item.id === activeId;
      return `
        <button
          type="button"
          data-intention-id="${item.id}"
          class="text-left px-5 py-3.5 rounded-full text-xs sm:text-sm transition-all duration-300 flex items-center justify-between gap-3 ${isActive
          ? 'btn-terracotta font-medium'
          : 'btn-sandstone opacity-85 hover:opacity-100'
        }"
        >
          <span>${item.label}</span>
          <span class="text-xs opacity-80">✦</span>
        </button>
      `;
    }).join('');

    const current = HERO_INTENTIONS.find((i) => i.id === activeId) || HERO_INTENTIONS[0];
    responseBox.innerHTML = `
      <div class="flex flex-col sm:flex-row gap-5 items-start sm:items-center pt-4">
        <div class="shrink-0">
          <img
            src="${current.image}"
            alt="Pinki Reflection"
            class="w-16 h-20 rounded-full object-cover object-top shadow-[0_0_30px_rgba(255,140,25,0.35)]"
          />
        </div>
        <div class="space-y-1.5">
          <div class="text-[10px] uppercase tracking-[0.26em] text-[#F3BC52] font-semibold">
            🪔 ${current.sanskrit}
          </div>
          <p class="font-serif-display italic text-xl sm:text-2xl leading-snug text-[#FAF2E6]">
            ${current.letter}
          </p>
        </div>
      </div>
    `;

    pillsContainer.querySelectorAll('[data-intention-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeId = btn.getAttribute('data-intention-id');
        soundEngine.playChime(528);
        renderIntentions();
      });
    });
  }

  renderIntentions();
}

// ==========================================
// NAVIGATION & MOBILE MENU
// ==========================================
function initNavbarAndMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileCloseBtn = document.getElementById('mobile-menu-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleDrawer(open) {
    if (!mobileDrawer) return;
    if (open) {
      mobileDrawer.classList.remove('hidden');
    } else {
      mobileDrawer.classList.add('hidden');
    }
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', () => toggleDrawer(true));
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', () => toggleDrawer(false));
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
}

// ==========================================
// INTERACTIVE TEMPLE BELL & 5 SACRED DIYAS ALTAR
// ==========================================
function initTempleAltarAndBell() {
  const bellBtns = document.querySelectorAll('[data-ring-bell]');
  const bellSvgIcons = document.querySelectorAll('.temple-bell-icon');
  const diyasContainer = document.getElementById('temple-diyas-row');
  const diyaTeachingBox = document.getElementById('diya-blessing-text');
  const lightAllBtn = document.getElementById('light-all-diyas-btn');

  bellBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      soundEngine.playTempleBell();
      bellSvgIcons.forEach((icon) => {
        icon.classList.remove('bell-swinging');
        void icon.offsetWidth;
        icon.classList.add('bell-swinging');
      });
      showSanctuaryToast('🔔 Temple Bell Rung — May your mind become still and clear.');
    });
  });

  if (!diyasContainer) return;

  const litState = new Set(['diya-life', 'diya-suffering', 'diya-connection']);

  function renderDiyas(activeId = 'diya-suffering') {
    // Dynamically adjust temple interior firelight intensity based on how many diyas are lit
    const glowAlpha = (0.12 + litState.size * 0.055).toFixed(2);
    document.documentElement.style.setProperty('--diya-glow-alpha', glowAlpha);

    diyasContainer.innerHTML = TEMPLE_DIYAS.map((diya) => {
      const isLit = litState.has(diya.id);
      return `
        <button
          type="button"
          data-diya-id="${diya.id}"
          class="temple-surface last:col-span-2 sm:last:col-span-1 flex flex-col items-center p-3.5 sm:p-5 text-center transition-all duration-500 ${isLit
          ? 'diya-card-lit diya-lit'
          : 'opacity-70 hover:opacity-100 diya-unlit'
        }"
        >
          ${createRealisticDiyaSVG(diya.id, 'w-16 h-20 sm:w-20 sm:h-24 mb-1')}
          <span class="text-[9px] uppercase tracking-[0.2em] text-[#E8A838] font-semibold">${diya.sanskrit}</span>
          <span class="font-serif-display text-base sm:text-lg font-semibold mt-0.5 text-[#F7EBD4] leading-snug">${diya.name}</span>
          <span class="text-[9px] sm:text-[10px] uppercase tracking-widest mt-1 ${isLit ? 'text-[#FF9922]' : 'text-[#C8B698]'} font-semibold">
            ${isLit ? '🪔 Ghee Flame Lit' : 'Touch Wick to Light'}
          </span>
        </button>
      `;
    }).join('');

    const activeObj = TEMPLE_DIYAS.find((d) => d.id === activeId) || TEMPLE_DIYAS[0];
    if (diyaTeachingBox) {
      diyaTeachingBox.innerHTML = `
        <div class="text-[11px] uppercase tracking-[0.22em] text-[#E5A93C] font-semibold mb-1">
          🪔 ${activeObj.name} (${activeObj.sanskrit}) • ${litState.size} of 5 Sanctum Lamps Burning
        </div>
        <p class="font-serif-display italic text-2xl sm:text-3xl">
          “${activeObj.teaching}”
        </p>
      `;
    }

    diyasContainer.querySelectorAll('[data-diya-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-diya-id');
        if (litState.has(id) && litState.size > 1) {
          litState.delete(id);
        } else {
          litState.add(id);
          soundEngine.playChime(528);
        }
        renderDiyas(id);
      });
    });
  }

  if (lightAllBtn) {
    lightAllBtn.addEventListener('click', () => {
      TEMPLE_DIYAS.forEach((d) => litState.add(d.id));
      soundEngine.playTempleBell();
      renderDiyas('diya-connection');
      showSanctuaryToast('🪔 All 5 Temple Diyas Lit on the Pushkarini Altar.');
    });
  }

  renderDiyas();
}

// ==========================================
// CHAPTER II: 4-FOLD MANUSCRIPT ACCORDION (LIFE, SUFFERING, PATTERNS, BEHAVIOUR)
// ==========================================
function initManifestoAccordion() {
  const accordionContainer = document.getElementById('manifesto-accordion');
  const stageImage = document.getElementById('manifesto-stage-img');
  const stageCaption = document.getElementById('manifesto-stage-caption');
  const stageNumber = document.getElementById('manifesto-stage-number');

  if (!accordionContainer) return;

  let activePillarId = MANIFESTO_PILLARS[0].id;

  function renderAccordion() {
    const current = MANIFESTO_PILLARS.find((p) => p.id === activePillarId) || MANIFESTO_PILLARS[0];

    if (stageImage) stageImage.src = current.image;
    if (stageCaption) stageCaption.textContent = current.caption;
    if (stageNumber) stageNumber.textContent = `CHAPTER ${current.number}`;

    accordionContainer.innerHTML = MANIFESTO_PILLARS.map((pillar) => {
      const isOpen = pillar.id === activePillarId;
      return `
        <div class="transition-all duration-500 ${isOpen ? 'py-6 sm:py-8 temple-surface px-4 sm:px-7 my-3 sm:my-4' : 'py-4 sm:py-5 px-4 sm:px-5 opacity-70 hover:opacity-100'}">
          <button
            type="button"
            data-accordion-id="${pillar.id}"
            class="w-full text-left flex items-baseline justify-between gap-4 group"
          >
            <div class="flex items-baseline gap-3 sm:gap-6">
              <span class="font-temple-caps text-lg sm:text-xl ${isOpen ? 'text-[#FF9424] font-bold' : 'opacity-50'
        }">
                ${pillar.number}
              </span>
              <div>
                <span class="block text-[10px] uppercase tracking-[0.26em] text-[#F3BC52] font-semibold mb-1">
                  ${pillar.subtitle}
                </span>
                <h3 class="font-serif-display text-2xl sm:text-4xl font-normal group-hover:text-[#F3BC52] transition-colors">
                  ${pillar.title}
                </h3>
              </div>
            </div>
            <span class="text-xl font-light ${isOpen ? 'text-[#FF9424]' : 'opacity-40'}">
              ${isOpen ? '—' : '+'}
            </span>
          </button>

          ${isOpen
          ? `
            <div class="pl-2 sm:pl-12 pt-5 sm:pt-6 space-y-5 sm:space-y-6">
              <p class="text-base sm:text-lg leading-relaxed text-[#C4AF93]">
                ${pillar.shortDesc}
              </p>

              <blockquote class="p-5 sm:p-6 rounded-3xl bg-[#FF8A1E]/[0.06] font-serif-display italic text-xl sm:text-2xl text-[#F3BC52]">
                ${pillar.mantra}
              </blockquote>

              <div class="space-y-2.5">
                <div class="text-[10px] uppercase tracking-[0.24em] text-[#F3BC52] font-semibold">
                  Sanctum Insights:
                </div>
                <ul class="space-y-2 text-sm sm:text-base text-[#FAF2E6]/90">
                  ${pillar.highlights
            .map(
              (h) => `
                    <li class="flex items-start gap-3">
                      <span class="text-[#FF8A1E] mt-1">✦</span>
                      <span>${h}</span>
                    </li>
                  `
            )
            .join('')}
                </ul>
              </div>

              <div class="p-4 sm:p-5 rounded-2xl bg-[#FF8A1E]/[0.08] text-xs sm:text-sm text-[#FAF2E6]">
                <strong class="uppercase tracking-widest text-[#FF9424] mr-2">🪔 Diya Contemplation:</strong>
                <span>${pillar.ritualPractice}</span>
              </div>
            </div>
          `
          : ''
        }
        </div>
      `;
    }).join('');

    accordionContainer.querySelectorAll('[data-accordion-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activePillarId = btn.getAttribute('data-accordion-id');
        soundEngine.playChime(528);
        renderAccordion();
      });
    });
  }

  renderAccordion();
}

// ==========================================
// CHAPTER III: THE HUMAN MIRROR (DECODING PEOPLE'S BEHAVIOUR — BORDERLESS)
// ==========================================
function initBehaviourMirror() {
  const tabsContainer = document.getElementById('behaviour-mirror-tabs');
  const detailContainer = document.getElementById('behaviour-mirror-detail');
  if (!tabsContainer || !detailContainer) return;

  let activeCaseId = BEHAVIOUR_MIRROR_CASES[0].id;

  function renderMirror() {
    tabsContainer.innerHTML = BEHAVIOUR_MIRROR_CASES.map((item) => {
      const isSelected = item.id === activeCaseId;
      return `
        <button
          type="button"
          data-case-id="${item.id}"
          class="w-full text-left p-6 rounded-3xl transition-all duration-300 flex items-center justify-between gap-4 ${isSelected
          ? 'btn-terracotta shadow-2xl'
          : 'temple-surface opacity-80 hover:opacity-100'
        }"
        >
          <span class="font-serif-display text-xl sm:text-2xl font-normal leading-snug">
            ${item.question}
          </span>
          <span class="text-lg shrink-0">${isSelected ? '✦' : '→'}</span>
        </button>
      `;
    }).join('');

    const current =
      BEHAVIOUR_MIRROR_CASES.find((c) => c.id === activeCaseId) || BEHAVIOUR_MIRROR_CASES[0];

    detailContainer.innerHTML = `
      <div class="temple-surface p-6 sm:p-12 space-y-6 sm:space-y-8">
        <div>
          <span class="text-[10px] uppercase tracking-[0.26em] text-[#FF9424] font-semibold block mb-2">
            PSYCHOLOGICAL & SPIRITUAL ANATOMY
          </span>
          <h3 class="font-serif-display text-2xl sm:text-4xl font-normal text-[#FAF2E6]">
            ${current.question}
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <div class="p-5 sm:p-6 rounded-3xl bg-[#FF8A1E]/[0.06] space-y-2">
            <div class="text-[10px] uppercase tracking-widest text-[#F3BC52] font-bold">
              1. Surface Behaviour
            </div>
            <p class="text-sm leading-relaxed text-[#C4AF93]">
              ${current.surfaceBehaviour}
            </p>
          </div>

          <div class="p-5 sm:p-6 rounded-3xl bg-[#FF8A1E]/[0.06] space-y-2">
            <div class="text-[10px] uppercase tracking-widest text-[#FF9424] font-bold">
              2. Their Hidden Wound
            </div>
            <p class="text-sm leading-relaxed text-[#C4AF93]">
              ${current.hiddenWound}
            </p>
          </div>

          <div class="p-5 sm:p-6 rounded-3xl bg-[#FF8A1E]/[0.06] space-y-2">
            <div class="text-[10px] uppercase tracking-widest text-[#D93822] font-bold">
              3. Why It Hooks Your Pattern
            </div>
            <p class="text-sm leading-relaxed text-[#C4AF93]">
              ${current.yourPattern}
            </p>
          </div>
        </div>

        <div class="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#FF8A1E]/[0.12] to-transparent space-y-2">
          <div class="text-[10px] uppercase tracking-[0.24em] text-[#F3BC52]">
            🪔 Pinki’s Temple Clarity & Response:
          </div>
          <p class="font-serif-display italic text-xl sm:text-2xl leading-relaxed text-[#FAF2E6]">
            “${current.templeClarity}”
          </p>
        </div>

        <div class="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span class="text-xs text-[#C4AF93]">
            Walking through this exact dynamic right now?
          </span>
          <button
            type="button"
            onclick="window.openBookingModal('connection-talk-1on1')"
            class="btn-terracotta w-full sm:w-auto px-7 py-3.5 text-xs font-semibold"
          >
            Talk Through This Pattern with Pinki →
          </button>
        </div>
      </div>
    `;

    tabsContainer.querySelectorAll('[data-case-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeCaseId = btn.getAttribute('data-case-id');
        soundEngine.playChime(528);
        renderMirror();
        if (window.innerWidth < 1024) {
          detailContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });
  }

  renderMirror();
}

// ==========================================
// CHAPTER IV: THE 7 TEMPLE PRADAKSHINA WALKS (OPTIMIZED CINEMA & REELS)
// ==========================================
function initSacredCinemaSection() {
  const reelsGrid = document.getElementById('vertical-reels-grid');
  const mainVideo = document.getElementById('cinema-stage-main-video');
  const backdropImg = document.getElementById('cinema-stage-backdrop-img');
  const stageBadge = document.getElementById('cinema-stage-badge');
  const stageTitle = document.getElementById('cinema-stage-title');
  const stageDesc = document.getElementById('cinema-stage-desc');
  const stageMantra = document.getElementById('cinema-stage-mantra');
  const prevBtn = document.getElementById('cinema-prev-reel');
  const nextBtn = document.getElementById('cinema-next-reel');
  const chimeBtn = document.getElementById('cinema-mute-toggle');

  if (!reelsGrid || !mainVideo) return;

  let activeReelIdx = 0;

  function selectReel(idx) {
    activeReelIdx = (idx + TEMPLE_REELS.length) % TEMPLE_REELS.length;
    const reel = TEMPLE_REELS[activeReelIdx];

    mainVideo.src = reel.video;
    mainVideo.poster = reel.poster;
    mainVideo.play().catch(() => { });

    if (backdropImg) {
      backdropImg.src = reel.poster;
    }

    if (stageBadge) stageBadge.textContent = reel.badge;
    if (stageTitle) stageTitle.textContent = reel.title;
    if (stageDesc) stageDesc.textContent = reel.desc;
    if (stageMantra) stageMantra.textContent = reel.mantra;

    renderReelsStrip();
  }

  function renderReelsStrip() {
    reelsGrid.innerHTML = TEMPLE_REELS.map((reel, idx) => {
      const isSelected = idx === activeReelIdx;
      return `
        <div
          data-reel-idx="${idx}"
          class="min-w-[145px] sm:min-w-0 snap-center shrink-0 relative rounded-3xl overflow-hidden aspect-[9/16] cursor-pointer group transition-transform duration-300 ${isSelected
          ? 'scale-[1.03] ring-2 ring-[#F3BC52]'
          : 'opacity-70 hover:opacity-100'
        }"
        >
          <img
            src="${reel.poster}"
            alt="${reel.title}"
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>

          <div class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 text-[9px] uppercase tracking-widest text-[#F3BC52]">
            ▶ WALK 0${idx + 1}
          </div>

          <div class="absolute bottom-3 inset-x-3">
            <p class="font-serif-display text-sm text-[#FAF2E6] leading-tight line-clamp-2">
              ${reel.title}
            </p>
          </div>
        </div>
      `;
    }).join('');

    reelsGrid.querySelectorAll('[data-reel-idx]').forEach((card) => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-reel-idx'), 10);
        soundEngine.playChime(528);
        selectReel(idx);
        if (window.innerWidth < 768) {
          mainVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      soundEngine.playChime(432);
      selectReel(activeReelIdx - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      soundEngine.playChime(528);
      selectReel(activeReelIdx + 1);
    });
  }
  if (chimeBtn) {
    chimeBtn.addEventListener('click', () => {
      const playing = soundEngine.toggleAmbient();
      chimeBtn.querySelector('span').textContent = playing
        ? '✦ 432Hz Tanpura Drone: ON'
        : '✦ Accompany with 432Hz Tanpura';
      showSanctuaryToast(
        playing ? '432Hz Temple Tanpura Drone Activated' : 'Temple Drone Paused'
      );
    });
  }

  renderReelsStrip();
}

// ==========================================
// CHAPTER V: CONNECTION TALKS (BORDERLESS FLOATING SANCTUARY CARDS)
// ==========================================
function initOfferingsSection() {
  const grid = document.getElementById('offerings-ledger');
  if (!grid) return;

  grid.innerHTML = SACRED_OFFERINGS.map(
    (offering) => `
      <article class="temple-surface p-7 sm:p-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Left Borderless Feathered Arch -->
          <div class="lg:col-span-4 sanctum-halo-backdrop">
            <div class="relative h-80 temple-arch-frame overflow-hidden">
              <img
                src="${offering.image}"
                alt="${offering.title}"
                loading="lazy"
                decoding="async"
                onerror="handleLuxuryImageError(this, '${offering.title}')"
                class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-4 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-black/75 text-[#F3BC52] text-[10px] uppercase tracking-widest">
                ${offering.numeral}
              </div>
            </div>
          </div>

          <!-- Center Narrative -->
          <div class="lg:col-span-5 space-y-3">
            <div class="text-[10px] uppercase tracking-[0.26em] text-[#FF9424] font-bold">
              ${offering.badge}
            </div>
            <h3 class="font-serif-display text-3xl sm:text-4xl font-normal leading-tight text-[#FAF2E6]">
              ${offering.title}
            </h3>
            <p class="text-xs uppercase tracking-widest text-[#F3BC52] font-medium">
              ${offering.subtitle}
            </p>
            <p class="text-sm sm:text-base text-[#C4AF93] leading-relaxed pt-1">
              ${offering.description}
            </p>
            <ul class="space-y-2 pt-2 text-xs sm:text-sm text-[#FAF2E6]/90">
              ${offering.features
        .map(
          (f) => `
                <li class="flex items-start gap-2.5">
                  <span class="text-[#FF8A1E]">✦</span>
                  <span>${f}</span>
                </li>
              `
        )
        .join('')}
            </ul>
          </div>

          <!-- Right Action Column -->
          <div class="lg:col-span-3 flex flex-col justify-between lg:pl-7 space-y-6">
            <div>
              <span class="text-[10px] uppercase tracking-widest text-[#C4AF93] block mb-1">Sanctuary Format</span>
              <span class="font-serif-display text-2xl italic text-[#F3BC52]">${offering.duration}</span>
            </div>
            <button
              type="button"
              data-book-offering="${offering.id}"
              class="btn-terracotta w-full py-4 px-6 font-semibold text-xs"
            >
              Sit for This Talk →
            </button>
          </div>
        </div>
      </article>
    `
  ).join('');

  grid.querySelectorAll('[data-book-offering]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const offeringId = btn.getAttribute('data-book-offering');
      window.openBookingModal(offeringId);
    });
  });
}

// ==========================================
// CHAPTER VI: BORDERLESS APPARITION ARCHIVE GALLERY & LIGHTBOX (FAST LAZY LOAD)
// ==========================================
function initGallerySection() {
  const galleryGrid = document.getElementById('gallery-bento-grid');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxSubtitle = document.getElementById('lightbox-subtitle');
  const lightboxNote = document.getElementById('lightbox-note');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  if (!galleryGrid) return;

  let activeCategory = 'all';
  let currentList = [...GALLERY_ITEMS];
  let currentIndex = 0;

  function renderGallery() {
    currentList =
      activeCategory === 'all'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

    galleryGrid.innerHTML = currentList
      .map(
        (item, idx) => `
      <div
        data-gallery-idx="${idx}"
        class="cursor-pointer group flex flex-col temple-surface p-4 hover:-translate-y-1 transition-transform duration-300"
      >
        <div class="relative h-80 temple-arch-frame overflow-hidden bg-[#050302]">
          <img
            src="${item.image}"
            alt="${item.title}"
            loading="lazy"
            decoding="async"
            onerror="handleLuxuryImageError(this, '${item.title}')"
            class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          ${item.type === 'video'
            ? `<div class="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/10 transition-colors">
                 <div class="w-12 h-12 rounded-full bg-[#FF8A1E]/90 text-white flex items-center justify-center text-sm shadow-xl">▶</div>
               </div>`
            : ''
          }
          <div class="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/75 text-[#F3BC52] text-[9px] uppercase tracking-widest whitespace-nowrap">
            ${item.type === 'video' ? '▶ 1080p Temple Film' : '✦ Sanctum Portrait'}
          </div>
        </div>

        <div class="pt-4 px-2 pb-2 space-y-1.5 text-center">
          <div class="text-[9px] uppercase tracking-[0.24em] text-[#FF9424] font-semibold">
            ${item.subtitle}
          </div>
          <h3 class="font-serif-display text-2xl font-normal text-[#FAF2E6] group-hover:text-[#F3BC52] transition-colors">
            ${item.title}
          </h3>
          <p class="text-xs text-[#C4AF93] italic line-clamp-2">
            “${item.ritualNote}”
          </p>
        </div>
      </div>
    `
      )
      .join('');

    galleryGrid.querySelectorAll('[data-gallery-idx]').forEach((card) => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-gallery-idx'), 10);
        openLightbox(idx);
      });
    });
  }

  function openLightbox(idx) {
    currentIndex = idx;
    updateLightboxSlide();
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = '';
    if (lightboxVideo) lightboxVideo.pause();
  }

  function updateLightboxSlide() {
    const item = currentList[currentIndex];
    if (!item) return;
    if (item.type === 'video' && lightboxVideo) {
      lightboxImg.classList.add('hidden');
      lightboxVideo.classList.remove('hidden');
      lightboxVideo.src = item.video;
      lightboxVideo.poster = item.image;
      lightboxVideo.play().catch(() => { });
    } else {
      if (lightboxVideo) {
        lightboxVideo.pause();
        lightboxVideo.classList.add('hidden');
      }
      lightboxImg.classList.remove('hidden');
      lightboxImg.src = item.image;
      lightboxImg.alt = item.title;
    }
    lightboxTitle.textContent = item.title;
    lightboxSubtitle.textContent = item.subtitle;
    lightboxNote.textContent = `“${item.ritualNote}”`;
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-gallery-filter');
      filterBtns.forEach((b) => {
        b.classList.remove('btn-terracotta');
        b.classList.add('btn-sandstone');
      });
      btn.classList.remove('btn-sandstone');
      btn.classList.add('btn-terracotta');
      renderGallery();
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + currentList.length) % currentList.length;
      updateLightboxSlide();
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % currentList.length;
      updateLightboxSlide();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (lightbox && !lightbox.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lightboxPrev.click();
      if (e.key === 'ArrowRight') lightboxNext.click();
    }
  });

  renderGallery();
}

// ==========================================
// CHAPTER VII: PALM-LEAF / TEMPLE SUTRA CARD DRAW
// ==========================================
function initOracleSection() {
  const cardInner = document.getElementById('oracle-card-inner');
  const cardTrigger = document.getElementById('oracle-card-trigger');
  const drawBtn = document.getElementById('draw-oracle-btn');
  const resetBtn = document.getElementById('reset-oracle-btn');
  const copyOracleBtn = document.getElementById('copy-oracle-btn');

  const numeralEl = document.getElementById('oracle-numeral');
  const titleEl = document.getElementById('oracle-title');
  const archetypeEl = document.getElementById('oracle-archetype');
  const elementEl = document.getElementById('oracle-element');
  const crystalEl = document.getElementById('oracle-crystal');

  const readingStatus = document.getElementById('oracle-reading-status');
  const readingTitle = document.getElementById('oracle-reading-title');
  const readingAffirmation = document.getElementById('oracle-reading-affirmation');
  const readingRitual = document.getElementById('oracle-reading-ritual');

  if (!cardInner) return;

  let lastCardIndex = -1;
  let isFlipped = false;
  let currentCard = ORACLE_CARDS[0];

  function drawSacredCard() {
    let nextIndex = Math.floor(Math.random() * ORACLE_CARDS.length);
    if (nextIndex === lastCardIndex) {
      nextIndex = (nextIndex + 1) % ORACLE_CARDS.length;
    }
    lastCardIndex = nextIndex;
    currentCard = ORACLE_CARDS[nextIndex];

    soundEngine.playTempleBell();

    if (isFlipped) {
      cardInner.classList.remove('is-flipped');
      setTimeout(() => {
        populateCardData(currentCard);
        cardInner.classList.add('is-flipped');
      }, 360);
    } else {
      populateCardData(currentCard);
      cardInner.classList.add('is-flipped');
      isFlipped = true;
    }

    if (resetBtn) resetBtn.classList.remove('hidden');
    if (copyOracleBtn) copyOracleBtn.classList.remove('hidden');
    if (drawBtn) drawBtn.querySelector('span').textContent = 'Draw Another Temple Sutra';
  }

  function populateCardData(card) {
    if (numeralEl) numeralEl.textContent = card.numeral;
    if (titleEl) titleEl.textContent = card.title;
    if (archetypeEl) archetypeEl.textContent = card.archetype;
    if (elementEl) elementEl.textContent = card.element;
    if (crystalEl) crystalEl.textContent = card.crystal;

    if (readingStatus) readingStatus.textContent = `${card.numeral} • ${card.archetype}`;
    if (readingTitle) readingTitle.textContent = card.title;
    if (readingAffirmation) readingAffirmation.textContent = card.affirmation;
    if (readingRitual) readingRitual.textContent = card.ritualPrompt;
  }

  if (cardTrigger) cardTrigger.addEventListener('click', drawSacredCard);
  if (drawBtn) drawBtn.addEventListener('click', drawSacredCard);
  if (resetBtn) {
    resetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      cardInner.classList.remove('is-flipped');
      isFlipped = false;
      resetBtn.classList.add('hidden');
      if (copyOracleBtn) copyOracleBtn.classList.add('hidden');
      if (drawBtn) drawBtn.querySelector('span').textContent = 'Draw Your Temple Sutra';
    });
  }

  if (copyOracleBtn) {
    copyOracleBtn.addEventListener('click', () => {
      const text = `Temple Sutra — ${currentCard.title}\nInsight: ${currentCard.affirmation}\nContemplation: ${currentCard.ritualPrompt}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(() => { });
      }
      showSanctuaryToast(`Copied "${currentCard.title}" to Clipboard`);
    });
  }
}

// ==========================================
// TEMPLE SILENCE MODAL & TANPURA SOUND
// ==========================================
function initExperienceModal() {
  const openBtns = document.querySelectorAll('[data-open-vibe-modal]');
  const modal = document.getElementById('vibe-modal');
  const closeBtn = document.getElementById('vibe-modal-close');
  const toggleSoundBtn = document.getElementById('toggle-ambient-sound-btn');
  const navSoundBtns = document.querySelectorAll('#nav-sound-toggle, [data-toggle-sound]');

  if (!modal) return;

  function updateSoundUI(playing) {
    const labelEls = document.querySelectorAll('.sound-status-label');
    labelEls.forEach((el) => {
      el.textContent = playing ? '432Hz ON' : '432Hz';
    });
    navSoundBtns.forEach((btn) => {
      if (playing) {
        btn.classList.add('is-playing');
      } else {
        btn.classList.remove('is-playing');
      }
    });
  }

  function openVibeModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    const vibeVideo = document.getElementById('vibe-modal-video');
    if (vibeVideo) vibeVideo.play().catch(() => { });
    soundEngine.playTempleBell();
    if (!soundEngine.isPlaying) {
      const playing = soundEngine.toggleAmbient();
      updateSoundUI(playing);
    }
  }

  function closeVibeModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
    const vibeVideo = document.getElementById('vibe-modal-video');
    if (vibeVideo) vibeVideo.pause();
  }

  openBtns.forEach((btn) => btn.addEventListener('click', openVibeModal));
  if (closeBtn) closeBtn.addEventListener('click', closeVibeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeVibeModal();
  });

  if (toggleSoundBtn) {
    toggleSoundBtn.addEventListener('click', () => {
      const playing = soundEngine.toggleAmbient();
      updateSoundUI(playing);
    });
  }

  navSoundBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const playing = soundEngine.toggleAmbient();
      updateSoundUI(playing);
      showSanctuaryToast(
        playing ? '432Hz Temple Tanpura Drone Activated' : 'Temple Drone Paused'
      );
    });
  });
}

// ==========================================
// CONNECTION TALK MODAL
// ==========================================
function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('booking-modal-close');
  const openBtns = document.querySelectorAll('[data-open-booking]');
  const form = document.getElementById('sanctuary-booking-form');
  const selectEl = document.getElementById('booking-offering-select');
  const successView = document.getElementById('booking-success-view');
  const resetFormBtn = document.getElementById('booking-reset-btn');

  if (!modal) return;

  window.openBookingModal = function (offeringId = 'connection-talk-1on1') {
    if (selectEl && offeringId) {
      selectEl.value = offeringId;
    }
    if (form && successView) {
      form.classList.remove('hidden');
      successView.classList.add('hidden');
    }
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
    soundEngine.playTempleBell();
  };

  function closeBookingModal() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  openBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const preset = btn.getAttribute('data-open-booking') || 'connection-talk-1on1';
      window.openBookingModal(preset);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeBookingModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeBookingModal();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('booking-name').value.trim();
      const offeringText = selectEl.options[selectEl.selectedIndex].text;
      const summaryEl = document.getElementById('booking-confirmation-summary');

      if (summaryEl) {
        summaryEl.textContent = `Dear ${name || 'Seeker'}, your note for "${offeringText}" has been placed at Pinki’s Temple Desk. You will receive a personal response shortly.`;
      }

      form.classList.add('hidden');
      successView.classList.remove('hidden');
      soundEngine.playTempleBell();
      showSanctuaryToast('Connection Talk Request Received');
    });
  }

  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
      form.reset();
      closeBookingModal();
    });
  }
}

// ==========================================
// TEMPLE LETTERS & TOAST
// ==========================================
function initNewsletterForm() {
  const form = document.getElementById('inner-circle-form');
  const emailInput = document.getElementById('inner-circle-email');
  const nameInput = document.getElementById('inner-circle-name');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const name = nameInput ? nameInput.value.trim() : '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showSanctuaryToast('Please enter a valid email address.', true);
      emailInput.focus();
      return;
    }

    soundEngine.playTempleBell();
    showSanctuaryToast(
      `Welcome to the Temple Satsang${name ? ', ' + name : ''}. Pinki’s Sunday reflections will meet you in your inbox.`
    );
    form.reset();
  });
}

function showSanctuaryToast(message, isError = false) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `px-5 py-4 rounded-xl bg-[#181310] text-[#F5EFE6] border ${isError ? 'border-[#D14949]' : 'border-[#D4AF37]'
    } shadow-2xl flex items-center gap-3.5 max-w-md transform transition-all duration-500 translate-y-6 opacity-0 pointer-events-auto`;

  toast.innerHTML = `
    <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/50">
      🪔
    </span>
    <div class="text-xs md:text-sm leading-snug">
      ${message}
    </div>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-6', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  setTimeout(() => {
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 450);
  }, 4400);
}

// ==========================================
// SCROLL REVEAL & SMART VIDEO VIEWPORT OBSERVER
// ==========================================
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal-up');
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealEls.forEach((el) => observer.observe(el));

  // Automatically pause 1080p videos when offscreen so scrolling stays 60-120fps
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('section video').forEach((vid) => {
    videoObserver.observe(vid);
  });
}
