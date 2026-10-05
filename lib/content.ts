export type ContentPage = {
  path: string; kind: "program" | "guide"; title: string; nav: string;
  description: string; intro: string; sections: string[][]; faqs: string[][]; related: string[];
};
export const contentPages: ContentPage[] = [
  {
    "path": "/programs/kids-karate-spring-tx",
    "kind": "program",
    "title": "Kids Karate in Spring, TX",
    "nav": "Kids sport karate",
    "description": "Explore kids sport karate at Five Rings in Spring, TX: fundamentals, focus, respect, leadership and a thoughtful introduction to competition.",
    "intro": "A place for young athletes to practice focus, discover what they can do, and learn how to treat the people training beside them.",
    "sections": [
      [
        "More than learning the next technique",
        "A child’s first karate experience should make the expectations clear: listen, try, respect your partner, and ask for help when you need it. At Five Rings Community Martial Arts, the aim is to connect athletic development with those everyday habits. A well-practiced stance matters, and so does the patience to work on it again.",
        "Our kids program centers on sport karate. That gives practice a direction: learning fundamentals, improving control and preparing for the demands of performance and competition. Progress is personal. A student who speaks up to ask a question or returns to a difficult movement with a better attitude is doing meaningful work, even before a belt or a tournament result changes."
      ],
      [
        "What young students work on",
        "Foundations come first: stance, balance, footwork, coordination and the ability to stop a movement under control. Students need to understand where their body is before speed and power become useful. Repetition should have a purpose, such as a steadier landing or a cleaner return to a ready position.",
        "Forms and partner exercises present different challenges. A form asks a student to remember a sequence and perform with intention. Partner work adds distance, timing, listening and responsibility for another person. Those skills build the foundation for competition training without turning every practice into a contest."
      ],
      [
        "Respect that children can practice",
        "Respect becomes clearer when it is something a child can do: wait while someone finishes speaking, give a training partner space, respond to correction and encourage a classmate. Leadership begins with taking responsibility for those small actions.",
        "The same approach can continue at home. Instead of asking only whether a child won or earned a stripe, ask what they practiced, where they needed help and what they want to improve next time. That keeps attention on effort and decisions the child can influence."
      ],
      [
        "A thoughtful path toward competition",
        "Sport karate can give a child a concrete goal to prepare for, but tournament readiness is more than knowing a technique. A young competitor also needs to follow instructions, manage the wait for a division and recover when something does not go to plan.",
        "Talk with the instructor about interest, readiness and event requirements before signing up. Age divisions, experience categories, equipment and rules depend on the event. Competition should support the student’s development; the student should not feel that a result defines their place in the community."
      ],
      [
        "Finding the right starting point",
        "When you contact Five Rings in Spring, share your child’s age, previous experience and what you hope training will help them practice. A quieter beginner and an experienced young competitor may need very different introductions.",
        "Ask about current age groupings, class availability, what to wear and whether a parent can observe. These practical details help you decide how training will fit into your family’s routine before making a commitment."
      ]
    ],
    "faqs": [
      [
        "Does my child need previous karate experience?",
        "No previous experience is needed to ask about getting started. Tell us your child’s age and experience so we can discuss an appropriate starting point."
      ],
      [
        "Is competition required?",
        "Competition is a central part of our program’s direction. Discuss expectations and readiness with Bob before enrolling; a tournament entry should be a deliberate decision."
      ],
      [
        "What ages and class times are available?",
        "Tell us your child’s age and the days that work for your family. We’ll help you check current age groups and class availability."
      ]
    ],
    "related": [
      "/programs/leadership-martial-arts",
      "/guides/choosing-a-karate-school",
      "/guides/first-karate-class"
    ]
  },
  {
    "path": "/programs/adult-karate-spring-tx",
    "kind": "program",
    "title": "Adult Karate in Spring, TX",
    "nav": "Adult martial arts",
    "description": "Adult martial arts at Five Rings in Spring, TX. Explore American Karate fundamentals, sport training and a practical path for beginners and returning students.",
    "intro": "Start something demanding, useful and yours. Adult karate offers a practice you can return to, with clear skills to work on each time.",
    "sections": [
      [
        "You do not need a martial arts past to begin",
        "Beginning as an adult can feel awkward. You may be learning how to stand, turn and coordinate movements while people around you look comfortable. That is a normal part of learning a physical skill. A productive first goal is understanding the movement, not matching someone else’s speed.",
        "Five Rings Community Martial Arts brings adults into a sport karate environment grounded in respect and steady practice. Whether you are new to martial arts or returning after time away, your starting point should reflect your current experience and goals."
      ],
      [
        "Technique before intensity",
        "Karate gives you specific things to improve: balance during a turn, the placement of a foot, distance from a partner or a controlled finish to a technique. Those details make progress easier to recognize than simply leaving every session exhausted.",
        "Training can be physically demanding, but effort should serve the skill being practiced. Tell the instructor about relevant limitations and ask how an exercise can be adjusted. You should understand what you are being asked to do and be able to communicate when a movement is not appropriate for you."
      ],
      [
        "A practice that fits a working life",
        "Bob Huff is an IT executive as well as an American Karate black belt. His background makes the connection between responsibility at work and responsibility in training a natural part of the Five Rings story. Preparation, listening and responding to feedback matter in both settings.",
        "Consistency starts with a realistic commitment. Before joining, ask about current class options and choose a routine you can maintain alongside work and family. A sustainable practice creates more opportunities to learn than an ambitious plan that is difficult to keep."
      ],
      [
        "What sport karate adds",
        "Sport training introduces a useful distinction between performing a skill in isolation and applying it under an event’s rules. Timing, precision and composure become part of the task. Forms and sparring ask different things of a competitor, and their requirements vary by tournament.",
        "If competing interests you, make that part of the conversation early. If you are still exploring martial arts, start by learning the fundamentals and understanding the program. Readiness for an event should be discussed individually, including rules, equipment and the amount of preparation involved."
      ],
      [
        "Returning from another school or style",
        "Bring your previous experience into the conversation, including the style you studied, how long you trained and how long you have been away. Familiarity with martial arts can help, but terminology, methods and rank expectations vary between schools.",
        "Ask how prior training is evaluated and which foundations you will need to learn here. Approaching that discussion with curiosity makes it easier to retain the value of your experience while learning a new way of practicing."
      ]
    ],
    "faqs": [
      [
        "Can I start as an adult beginner?",
        "Yes. Contact Five Rings to discuss your experience, goals and current class options. Starting with fundamentals is part of learning."
      ],
      [
        "Will my rank from another school transfer?",
        "Rank recognition needs an individual discussion. Share your style and training history; do not assume belt equivalence between schools."
      ],
      [
        "Do I need to be fit before contacting you?",
        "You can ask about the program at your current starting point. Discuss the demands of training and any relevant limitations before participating."
      ]
    ],
    "related": [
      "/guides/first-karate-class",
      "/programs/competition-karate-spring-tx",
      "/about"
    ]
  },
  {
    "path": "/programs/self-defense-spring-tx",
    "kind": "program",
    "title": "Self-Defense Training in Spring, TX",
    "nav": "Self defense",
    "description": "Learn about the self-defense focus at Five Rings in Spring, TX: awareness, boundaries, controlled practice and the distinction between sport and personal safety.",
    "intro": "Awareness, clear boundaries and controlled decisions belong alongside physical skills. The purpose is to find a way out of danger.",
    "sections": [
      [
        "Start with decisions, not a collection of moves",
        "Self-defense is often presented as a list of techniques. A more useful starting point is deciding what you are trying to accomplish: recognize a problem, create distance, find an exit and get help. Physical practice should support that purpose.",
        "Five Rings includes self defense within a broader martial arts program focused on respect and responsibility. When asking about training, describe what you want to learn. General confidence, boundary-setting and partner drills are different needs, and the right starting conversation should make those differences clear."
      ],
      [
        "Awareness and boundaries",
        "Practical awareness means noticing the environment and keeping options available. Where is the exit? Can you leave a tense conversation? Is there someone nearby who can help? These questions are useful because they focus attention on choices before a physical response is needed.",
        "Boundary practice includes using a clear voice, communicating that an interaction is unwanted and moving away when possible. It is not a guarantee that another person will cooperate. The aim is to rehearse decisions and communication without creating false certainty about an unpredictable situation."
      ],
      [
        "The role of physical practice",
        "Distance, balance and controlled movement are useful foundations for partner exercises. Drills give students a setting in which to ask questions and understand the limits of a technique. Partners need agreed boundaries, clear instructions and a way to stop the exercise.",
        "A successful repetition in class is evidence that a student performed that drill in those conditions. It does not prove that a response will work in every situation. Good training leaves room for uncertainty and keeps the goal of disengaging in view."
      ],
      [
        "Sport karate and self defense are different tasks",
        "Competition has rules, officials and an agreed format. Those conditions make it possible to practice and evaluate particular skills. A confrontation outside the sport does not provide the same structure.",
        "Sport karate can be an engaging way to practice movement and composure, but tournament success is not a promise of personal safety. At Five Rings, ask which parts of the training serve competition and which parts specifically address awareness, boundaries and leaving an unsafe interaction."
      ],
      [
        "Questions to ask before starting",
        "Discuss who the training is designed for, how partner exercises are introduced and what level of contact is involved. Ask whether the current offering fits your age and experience, and tell the instructor if there are situations you do not want to simulate.",
        "You should be able to understand the purpose of an exercise before participating. A useful first conversation makes the expectations concrete: what will be practiced, how feedback works and how to pause or decline a drill. Contact Five Rings for current self-defense options in Spring, TX."
      ]
    ],
    "faqs": [
      [
        "Is self defense the same as competition sparring?",
        "No. Sparring operates within an agreed rule set. Self-defense discussions also address awareness, boundaries, exits and getting help."
      ],
      [
        "Does training guarantee safety?",
        "No. Training cannot guarantee an outcome in an unpredictable situation. It provides an opportunity to practice specific skills and decisions."
      ],
      [
        "Are there standalone self-defense classes?",
        "Ask about current offerings. Availability and format need to be confirmed directly before booking."
      ]
    ],
    "related": [
      "/programs/adult-karate-spring-tx",
      "/programs/kids-karate-spring-tx",
      "/guides/choosing-a-karate-school"
    ]
  },
  {
    "path": "/programs/competition-karate-spring-tx",
    "kind": "program",
    "title": "Sport & Competition Karate in Spring, TX",
    "nav": "Competition karate",
    "description": "Explore Five Rings sport karate in Spring, TX: purposeful fundamentals, forms, sparring preparation, tournament readiness and sportsmanship.",
    "intro": "Prepare with purpose. Compete with control. Bring something useful back to the next practice, whatever the result.",
    "sections": [
      [
        "Competition as part of a longer practice",
        "Five Rings is built around sport karate and competitions. An event gives training a deadline and a setting where preparation is tested. It also creates opportunities to practice listening, making decisions under pressure and treating an opponent with respect.",
        "A tournament result is one piece of information. The more useful question is what happened: Did the competitor keep their balance? Follow the official’s directions? Recover after an error? Identifying a specific lesson makes the next training session more productive."
      ],
      [
        "Forms: performance with intention",
        "In a forms event, the athlete performs a sequence for evaluation under the organizer’s rules. Preparation can include learning the sequence, refining transitions and practicing how to begin and finish. A student needs to know both the material and the procedure for presenting it.",
        "Rehearsal should include the less dramatic details: waiting for a cue, using the available floor space and continuing after a small mistake. Those details help separate remembering a form in class from presenting it in an unfamiliar setting."
      ],
      [
        "Sparring: timing within a rule set",
        "Competition sparring asks a student to work with distance, timing and controlled decisions while following event rules. The format determines what is permitted, how scoring works and what equipment is required. Do not assume that a familiar tournament uses the same rules as the next one.",
        "Before entering, review the published rules with the instructor. Ask about contact expectations, prohibited actions and how officials stop or restart a match. Equipment compliance and eligibility should be checked before event day, not while waiting ringside."
      ],
      [
        "Readiness is more than a belt color",
        "A student may know the techniques and still need practice listening under pressure or waiting calmly through a long division. Readiness also includes wanting to participate and understanding the format. For children, the parent and instructor should be part of that conversation.",
        "Choose an event and division based on current published requirements and the student’s preparation. Age, rank and experience categories can differ. Five Rings does not promise placements or a fixed timetable for becoming competition-ready."
      ],
      [
        "Train the response to winning and losing",
        "Respect has a visible form at an event: follow instructions, acknowledge an opponent and let the appropriate adults or coaches handle questions about procedures. Frustration is understandable; acting on it is still a choice.",
        "After a match or performance, allow time to settle before analyzing it. Begin with what the athlete remembers, then choose one useful improvement. The goal is to leave with a clearer training priority and a willingness to return to practice."
      ]
    ],
    "faqs": [
      [
        "Do you focus on sport karate?",
        "Yes. Sport karate and competitions are central to the Five Rings program, alongside leadership and respect."
      ],
      [
        "Which tournaments do students attend?",
        "Discuss current event plans with Bob, including the divisions, travel and preparation involved, before choosing a tournament."
      ],
      [
        "What equipment is required?",
        "Requirements depend on the event and division. Read the organizer’s current rules and confirm with your instructor before purchasing or registering."
      ]
    ],
    "related": [
      "/guides/first-karate-tournament",
      "/programs/kids-karate-spring-tx",
      "/programs/leadership-martial-arts"
    ]
  },
  {
    "path": "/programs/leadership-martial-arts",
    "kind": "program",
    "title": "Leadership & Respect Through Martial Arts",
    "nav": "Leadership & respect",
    "description": "How Five Rings connects martial arts with leadership: listening, taking responsibility, encouraging others and responding thoughtfully to feedback.",
    "intro": "Leadership starts with how you practice beside another person. Respect is something you demonstrate, repeatedly.",
    "sections": [
      [
        "Make the values visible",
        "Words such as discipline and leadership can sound impressive without explaining what a student does differently. At Five Rings, the intention is to connect those values to ordinary actions: arriving prepared, listening to a correction, respecting a partner’s space and contributing to a productive class.",
        "The aim applies to adults as well as children. A more experienced student can model patience when a beginner needs another explanation. A new student can demonstrate responsibility by asking a question instead of pretending to understand. Neither requires a title."
      ],
      [
        "Listening is an active skill",
        "An instruction is useful only when a student can turn it into action. That may mean watching a demonstration, checking what was asked and making a change on the next repetition. Listening includes recognizing when an explanation was not clear and asking for help respectfully.",
        "Parents can reinforce this outside class with concrete questions. What correction did you receive? What changed when you tried it? A conversation about one example is more helpful than a broad demand to be more disciplined."
      ],
      [
        "Responsibility without perfection",
        "A missed technique or a lost match creates a chance to practice responsibility. The student can name what happened, decide what they can work on and take a next step. Responsibility does not require denying disappointment or pretending that every outcome is positive.",
        "The same habit can apply beyond martial arts: prepare for the task, notice the result and adjust the approach. Transfer is something students must practice deliberately. A belt does not automatically create leadership at school, work or home."
      ],
      [
        "Helping without taking over",
        "Encouragement should make it easier for another student to learn. Give a partner time to try. Notice effort. Avoid using experience as permission to dominate an exercise. Instruction and partner work still need appropriate supervision.",
        "For children, being a leader might mean including someone who is new or calmly following a direction when others are distracted. For adults, it can mean receiving feedback without defensiveness. Small acts repeated over time give the value substance."
      ],
      [
        "Competition is a useful test of conduct",
        "When the stakes feel higher, habits become easier to see. Can a student remain respectful after a disputed result? Can they celebrate without belittling another competitor? Can they support a teammate when their own division is finished?",
        "Five Rings treats these questions as part of the purpose of sport karate. Families looking for martial arts in Spring can use them when discussing program fit: ask how the school handles mistakes, discouragement and disagreements, not just how it prepares someone to win."
      ]
    ],
    "faqs": [
      [
        "How does leadership connect to karate practice?",
        "Through everyday actions: listening to a correction, being dependable during partner work and helping others learn. The aim is to practice those habits alongside technique."
      ],
      [
        "How can parents reinforce respect at home?",
        "Ask for a specific example from class and connect it to a practical action at home, such as listening fully or preparing for a responsibility."
      ],
      [
        "Is leadership only for advanced students?",
        "No. Listening, effort and consideration for others can be practiced from the first class."
      ]
    ],
    "related": [
      "/about",
      "/philosophy",
      "/programs/kids-karate-spring-tx"
    ]
  },
  {
    "path": "/guides/first-karate-class",
    "kind": "guide",
    "title": "Your First Karate Class: A Beginner’s Guide",
    "nav": "Your first karate class",
    "description": "What to ask, bring and expect before your first karate class. A practical guide for adults and parents exploring Five Rings in Spring, TX.",
    "intro": "You do not need to know the terminology before you walk in. Start with a few practical questions and a willingness to learn.",
    "sections": [
      [
        "Before you choose a class",
        "Contact the school before arriving and confirm the current schedule, age group and whether the class is appropriate for a first visit. Tell the instructor about previous training and what you hope to get from martial arts. For a child, include their age and whether they have experience following instructions in a group activity.",
        "Ask what the visit includes and what, if anything, it costs. An inquiry is not the same as a confirmed booking. At Five Rings, use the contact form to start that conversation and wait for confirmation of a suitable class."
      ],
      [
        "What to wear and bring",
        "Ask the school about clothing and equipment before buying a uniform. Comfortable clothing that allows movement may be suitable for an introduction, but the school’s requirements come first. Ask about footwear on the training floor, jewelry and anything else that should be removed or secured.",
        "Bring water and arrive with enough time to introduce yourself and complete any required paperwork. If there are relevant limitations or concerns, discuss them before practice begins rather than in the middle of an exercise."
      ],
      [
        "What to pay attention to",
        "The first lesson is partly about understanding the class: where to stand, when to listen and how to ask for help. You may repeat a simple movement several times. Focus on one correction at a time rather than trying to remember every detail immediately.",
        "Look for clear explanations and opportunities to ask questions. You should understand how partner exercises work and what to do if you need to stop. New students should not have to guess the boundaries of an activity."
      ],
      [
        "If you are bringing a child",
        "Explain the visit in simple terms: they will meet an instructor, listen and try some movements. Avoid making the first class a test of bravery or talent. Ask in advance whether parents can observe and how the school introduces children who are unsure.",
        "Afterward, ask what the child remembers and what they would like to try again. One hesitant visit does not tell the whole story, but their experience matters. Share specific concerns with the instructor rather than assuming that reluctance is a discipline problem."
      ],
      [
        "Before making a commitment",
        "Ask about tuition, additional fees, uniforms, equipment, class access and any cancellation terms. Confirm how progress is discussed and what the expectations are around competition. Written details make it easier to compare options thoughtfully.",
        "A useful first visit leaves you with a clearer picture of the teaching environment and the practical commitment. You do not need to decide based on excitement alone. Choose a place where you understand the expectations and can see yourself returning consistently."
      ]
    ],
    "faqs": [
      [
        "Should I buy a uniform first?",
        "Confirm the school’s requirements before purchasing a uniform or equipment."
      ],
      [
        "What if I cannot remember the movements?",
        "That is part of being new. Ask for clarification and work on one part of the movement at a time."
      ],
      [
        "Does submitting the contact form reserve a class?",
        "No. It starts an inquiry. Class availability and booking details need to be confirmed with the school."
      ]
    ],
    "related": [
      "/programs/kids-karate-spring-tx",
      "/programs/adult-karate-spring-tx",
      "/guides/choosing-a-karate-school"
    ]
  },
  {
    "path": "/guides/choosing-a-karate-school",
    "kind": "guide",
    "title": "Choosing a Karate School in Spring, TX",
    "nav": "Choosing a karate school",
    "description": "Questions for comparing karate schools in Spring, TX: teaching approach, program fit, competition expectations, costs and the first visit.",
    "intro": "Look beyond the belt display. A good decision starts with the kind of practice you want and the everyday experience a school provides.",
    "sections": [
      [
        "Start with the student’s goal",
        "A parent looking for a supportive first activity and an adult seeking competition preparation may value different things. Write down the primary goal before comparing schools. Is it learning a martial art, developing a routine, exploring sport competition or finding a community?",
        "Be specific about practical needs too. A class that sounds ideal is difficult to sustain if its schedule does not work for your family. Confirm the current training location and class times rather than relying only on a search listing."
      ],
      [
        "Ask how the instructor teaches",
        "Rank and training history are useful context, but observe how the instructor explains a movement, gives a correction and responds to questions. Can a beginner follow the explanation? Are expectations appropriate for the students in the class?",
        "Ask who normally teaches the class you are considering. A biography describes one person; a visit helps you understand the day-to-day experience. Five Rings publishes Bob Huff’s confirmed background so families have a concrete starting point for that conversation."
      ],
      [
        "Understand the program’s emphasis",
        "Martial arts schools can emphasize different styles and goals. Ask how much attention goes to fundamentals, forms, partner work, competition and self defense. Those labels are not interchangeable, so follow up with questions about actual activities.",
        "Five Rings is centered on sport karate and competition, with leadership and respect as part of its purpose. That focus should help you decide whether the program matches your goals. A clear fit is more useful than a claim that one approach is right for everyone."
      ],
      [
        "Look at how the group works",
        "During a visit, notice how students treat each other. Are beginners included? Are partner boundaries explained? How does the instructor respond when a student is distracted or frustrated? The answer tells you more about the environment than a slogan on a wall.",
        "Ask about class size, age grouping and the process for raising concerns. A parent should know who to contact with a question. An adult student should know how to discuss an exercise that does not suit their current ability."
      ],
      [
        "Compare the full commitment",
        "Ask for tuition, testing fees, equipment requirements, tournament expenses and cancellation terms before enrolling. If competition is part of the program, clarify whether participation is expected and how events are chosen.",
        "Keep notes after each visit using the same categories: teaching, fit, practical arrangements and cost. You are choosing a routine and a relationship, not simply a monthly price. Take the time to resolve questions before making the commitment."
      ]
    ],
    "faqs": [
      [
        "What should I ask about a black belt credential?",
        "Ask about the style, when it was earned and the instructor’s teaching experience. Use the answers as context alongside observing the instruction."
      ],
      [
        "How do I compare prices fairly?",
        "Ask for the full set of costs and terms, including required equipment and any testing or event fees, rather than comparing tuition alone."
      ],
      [
        "Should I choose the closest school?",
        "Location matters for consistency, but also consider instruction, program focus and whether the class schedule works for you."
      ]
    ],
    "related": [
      "/about",
      "/programs",
      "/guides/first-karate-class"
    ]
  },
  {
    "path": "/guides/first-karate-tournament",
    "kind": "guide",
    "title": "Preparing for Your First Karate Tournament",
    "nav": "Your first karate tournament",
    "description": "A practical first-tournament guide: eligibility, rules, equipment, event-day preparation and a useful post-competition conversation.",
    "intro": "A little preparation before event day creates more room to focus on the actual performance. Start with the rules for the event you are entering.",
    "sections": [
      [
        "Choose the event with your instructor",
        "Discuss whether the event and division fit the student’s current preparation. Check the organizer’s requirements for age, rank and experience. If an eligibility detail is unclear, resolve it before paying or assuming a division will be available.",
        "Forms and sparring have different preparation needs. Decide what the student will enter, then work backward from the event date. A first tournament is a learning experience, but the athlete should understand the basic format before arriving."
      ],
      [
        "Read the current rules",
        "Find the organizer’s current rules and registration information. Check deadlines, check-in requirements, equipment, scoring and any restrictions specific to the division. Rules can differ between organizations and events, so a previous tournament’s experience is not enough.",
        "For sparring, review contact expectations and prohibited actions with the instructor. For forms, confirm presentation and division requirements. If the event publishes a schedule, check how changes are communicated and who is responsible for ensuring the athlete is at the correct ring."
      ],
      [
        "Prepare the practical details",
        "Make a packing list from the event’s requirements: uniform, belt, required protective equipment, registration confirmation and any other documents the organizer specifies. Check that equipment fits and is permitted before event day.",
        "Plan travel, arrival time, food and water around the published arrangements. Keep valuables and unnecessary distractions manageable. For a child, decide which adult will track announcements and where the family will meet if people become separated in a busy venue."
      ],
      [
        "Help the athlete manage the wait",
        "A tournament includes waiting as well as performing. Ask the instructor about an appropriate preparation routine and leave room for changes in the schedule. Do not assume that every division will start exactly when expected.",
        "For parents, keep instructions simple. Too many last-minute corrections can make the task harder to follow. Encourage the student to listen to the coach and officials, and make clear that their effort and conduct matter alongside the result."
      ],
      [
        "Turn the result into the next practice",
        "Allow time for the athlete to settle after competing. Ask what they noticed before supplying your own analysis. Then identify one specific thing to work on, such as a transition in a form or listening for a restart instruction.",
        "Celebrate respectful conduct and preparation as well as a placement. If there is a question about an event procedure, use the organizer’s process and let the appropriate adult or coach handle it. The lasting value of a first tournament is a clearer understanding of what to practice next."
      ]
    ],
    "faqs": [
      [
        "Are rules the same at every tournament?",
        "No. Always check the specific event’s current rules, divisions and equipment requirements."
      ],
      [
        "What is a useful first-tournament goal?",
        "Choose a controllable goal with the instructor, such as following the presentation procedure or maintaining focus through a form."
      ],
      [
        "Should parents coach from the sidelines?",
        "Clarify the event rules and the instructor’s expectations. Consistent guidance helps avoid conflicting instructions during a performance."
      ]
    ],
    "related": [
      "/programs/competition-karate-spring-tx",
      "/programs/leadership-martial-arts",
      "/programs/kids-karate-spring-tx"
    ]
  },
  {
    "path": "/programs/personalized-karate-coaching-spring-tx",
    "kind": "program",
    "title": "Personalized Karate Coaching in Spring, TX",
    "nav": "Personalized coaching",
    "description": "Personalized karate coaching at Five Rings in Spring, TX, with individual feedback, clear next steps and instruction shaped around each student's goals.",
    "intro": "Train with a community without becoming one face in the room. Each student should understand what they are improving and what to work on next.",
    "sections": [
      [
        "A group class with individual direction",
        "Students can share the same class and still need different coaching. One person may be learning balance and sequence while another is refining timing, presentation or control. At Five Rings, personalized feedback means noticing that difference and giving each student a useful next step.",
        "This is a teaching approach, not a claim that every class is a private lesson. The goal is to make group training more specific: students know what the exercise is for, receive a correction they can act on and have an opportunity to try again."
      ],
      [
        "Observe, explain, practice, check",
        "Useful feedback starts with observation. The instructor identifies a detail that will make the biggest difference, explains it in language the student can use and lets the student practice the change. A follow-up check helps confirm whether the adjustment worked.",
        "Corrections should be focused enough to remember. Instead of trying to rebuild everything at once, a student might work on a steadier stance, a cleaner transition or a calmer reset after an error. That creates progress students can recognize."
      ],
      [
        "Feedback for young athletes",
        "Children differ in coordination, confidence, attention and competition experience. Personalized coaching gives a young student an achievable target while maintaining clear expectations for listening, effort and respect.",
        "Parents can support the process by asking what one thing the student practiced and what they will try next time. This keeps the conversation centered on learning instead of comparison with another child."
      ],
      [
        "Coaching for adult goals",
        "Adults may arrive with very different goals, schedules, prior experience and physical considerations. A useful starting conversation identifies what the student wants from training and which fundamentals need attention first.",
        "Students should tell the instructor about relevant limitations and ask questions when a movement is unclear. Personalized feedback works best as a conversation: the instructor provides direction, and the student shares what they are experiencing."
      ],
      [
        "A clearer competition feedback loop",
        "Competition preparation benefits from specific review. Forms, sparring and weapons divisions each present different demands. Coaching can focus on the detail most likely to improve the next performance rather than treating a placement as the whole story.",
        "After an event, the student and instructor can identify what held up under pressure and select a priority for the next training cycle. The result becomes information, and the student leaves with a plan."
      ]
    ],
    "faqs": [
      ["Does personalized coaching mean private lessons?", "Not necessarily. It describes the individual feedback students receive within training. Ask about the current class format and whether separate private instruction is available."],
      ["How will I know what to improve?", "The aim is to give you a focused correction or practice target, then check the change. Your next step will depend on your current skill and goals."],
      ["Can feedback support competition goals?", "Yes. Competition preparation can be shaped around the event, division and specific skills the student is developing. Readiness and current plans should be discussed with Bob."]
    ],
    "related": [
      "/programs/kids-karate-spring-tx",
      "/programs/adult-karate-spring-tx",
      "/programs/competition-karate-spring-tx"
    ]
  },
  {
    "path": "/programs/kobudo-weapons-training-spring-tx",
    "kind": "program",
    "title": "Kobudo & Weapons Training in Spring, TX",
    "nav": "Kobudo & weapons",
    "description": "Explore supervised kobudo and traditional weapons training at Five Rings in Spring, TX, including control, forms, safety and competition preparation.",
    "intro": "Traditional weapons practice can sharpen coordination, distance and focus. It begins with control, respect for the training tool and readiness for the responsibility involved.",
    "sections": [
      [
        "Where kobudo fits at Five Rings",
        "Kobudo is commonly used to describe traditional Okinawan weapons practice. At Five Rings, weapons work can complement American Karate and sport-karate training without claiming a lineage that has not been established publicly.",
        "Training may include sai and other instructor-approved equipment according to the current curriculum and the student’s readiness. Contact Five Rings before purchasing a weapon or assuming that a particular weapon is available in class."
      ],
      [
        "Safety comes before speed",
        "A training weapon requires space, attention and consistent control. Students first need to understand how to carry, hold and place equipment safely, how much room a movement needs and when to stop. Instructor supervision and class rules apply every time.",
        "Weapons should not be used for unsupervised experimentation or treated as toys. Age, maturity, experience and the ability to follow directions can all affect when this training is appropriate."
      ],
      [
        "Build the movement from the ground up",
        "Grip, posture, chamber, path and recovery shape the quality of a weapons technique. Slow, deliberate repetitions make it easier to see whether the student is maintaining balance and control before adding speed.",
        "Personalized feedback matters here. One student may need to simplify a transition while another works on a consistent line or stronger presentation. The useful correction is the one the student can apply safely on the next repetition."
      ],
      [
        "Weapons forms and competition",
        "A weapons form combines technical control with memory, timing and presentation. Competition adds an event’s procedures and rules. The student must be able to perform safely in the available space as well as know the sequence.",
        "Weapons divisions, permitted equipment and inspection requirements vary by organizer. Review the current event rules with the instructor before registering or purchasing competition equipment. Five Rings does not guarantee eligibility, placement or a fixed competition schedule."
      ],
      [
        "Who should ask about kobudo",
        "Kobudo may appeal to karate students who enjoy forms, want a new coordination challenge or are preparing for a weapons division. Interest alone is a good reason to ask, but participation should follow a conversation about readiness and current program availability.",
        "Tell Bob about the student’s age, martial arts experience, any previous weapons training and competition goals. That information helps determine an appropriate next step in Spring, TX."
      ]
    ],
    "faqs": [
      ["Do I need karate experience before kobudo?", "Readiness is individual. Ask Bob about current prerequisites, age considerations and whether the student should establish karate fundamentals first."],
      ["Which weapons are taught?", "Sai may be included, while other equipment depends on the current curriculum and student readiness. Confirm availability before buying any training weapon."],
      ["Can kobudo students compete?", "Weapons forms may be offered at sport-karate events. Competition plans depend on preparation and the organizer’s current divisions, equipment rules and eligibility requirements."]
    ],
    "related": [
      "/programs/competition-karate-spring-tx",
      "/programs/personalized-karate-coaching-spring-tx",
      "/guides/first-karate-tournament"
    ]
  }
];
export const findPage = (path: string) => contentPages.find(page => page.path === path);

