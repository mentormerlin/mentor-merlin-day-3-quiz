// Questions data for Mentor Merlin quiz
// Each question object contains:
//  - id: unique identifier
//  - question: the question text
//  - type: question type ("mcq" for multiple choice, "tf" for true/false,
//    "fitb" for fill in the blanks, "image" for image-based)
//  - options: array of answer options (for MCQ)
//  - correctIndex or correctAnswer: index of the correct option or answer
//  - explanation: a brief explanation shown after submission

// Reset the questions array with the updated Day 3 quiz content. Each object
// follows the same structure as before: an `id`, `type` (always 'mcq'
// here), `question` text, list of `options`, `correctIndex` pointing to
// the right answer in the options array (0-based), and a simple
// `explanation` repeating the correct answer for clarity.
const questions = [
    {
        id: 1,
        type: 'mcq',
        question: "What is the first stage of the UK NMC registration process?",
        options: ["CBT Exam", "Application and Evaluation", "OSCE Exam", "Health and Character Declaration"],
        correctIndex: 1,
        explanation: "Application and Evaluation is the correct answer."
    },
    {
        id: 2,
        type: 'mcq',
        question: "How much is the NMC evaluation fee for the first stage?",
        options: ["£83", "£140", "£153", "£794"],
        correctIndex: 1,
        explanation: "£140 is the correct answer."
    },
    {
        id: 3,
        type: 'mcq',
        question: "Which exam consists of Part A: Numeracy and Part B: Clinical questions?",
        options: ["OET", "OSCE", "CBT", "IELTS"],
        correctIndex: 2,
        explanation: "CBT is the correct answer."
    },
    {
        id: 4,
        type: 'mcq',
        question: "What is included in the Merlin Gold Service package?",
        options: ["OET, CBT and OSCE", "Full NMC registration support including CBT and OSCE", "Visa application and OSCE", "OSCE onsite training only"],
        correctIndex: 1,
        explanation: "Full NMC registration support including CBT and OSCE is the correct answer."
    },
    {
        id: 5,
        type: 'mcq',
        question: "Which OSCE package will be suggested to a candidate currently located in India?",
        options: ["OSCE Crack Course", "OSCE online course", "VC OSCE", "Merlin Gold Service"],
        correctIndex: 2,
        explanation: "VC OSCE is the correct answer."
    },
    {
        id: 6,
        type: 'mcq',
        question: "Which one of these are not an official OSCE test centres location?",
        options: ["Ulster", "Northampton", "London", "Oxford"],
        correctIndex: 2,
        explanation: "London is the correct answer."
    },
    {
        id: 7,
        type: 'mcq',
        question: "What is the duration of the OET Preparation Program offered by Mentor Merlin?",
        options: ["3 months", "2 months", "3 + 1 months", "4 months"],
        correctIndex: 2,
        explanation: "3 + 1 months is the correct answer."
    },
    {
        id: 8,
        type: 'mcq',
        question: "Which program offers visa guidance and UK accommodation for OSCE training?",
        options: ["VC OSCE Program", "Merlin Gold Service", "OSCE Crack Course", "None"],
        correctIndex: 0,
        explanation: "VC OSCE Program is the correct answer."
    },
    {
        id: 9,
        type: 'mcq',
        question: "What is the OSCE exam fee for a full attempt?",
        options: ["£394", "£140", "£794", "£153"],
        correctIndex: 2,
        explanation: "£794 is the correct answer."
    },
    {
        id: 10,
        type: 'mcq',
        question: "Which one of these are not an accepted medium for English language requirement?",
        options: ["PTE", "IELTS", "OET", "SIFE"],
        correctIndex: 0,
        explanation: "PTE is the correct answer."
    },
    {
        id: 11,
        type: 'mcq',
        question: "In HubSpot, what property is used to track where a lead is in the buying process?",
        options: ["Lead Source", "Lifecycle Stage", "Lead Status", "Pipeline"],
        correctIndex: 1,
        explanation: "Lifecycle Stage is the correct answer."
    },
    {
        id: 12,
        type: 'mcq',
        question: "Which HubSpot property best describes the specific state of a lead, such as 'Connected' or 'New Candidate'?",
        options: ["Lead Source", "Lifecycle Stage", "Lead Status", "Contact Owner"],
        correctIndex: 2,
        explanation: "Lead Status is the correct answer."
    },
    {
        id: 13,
        type: 'mcq',
        question: "Where in HubSpot would you log the details of a sales call with a lead?",
        options: ["Notes section", "Lead Status", "Call log", "Tasks"],
        correctIndex: 2,
        explanation: "Call log is the correct answer."
    },
    {
        id: 14,
        type: 'mcq',
        question: "In Chatwoot, what feature allows you to tag a conversation for categorisation?",
        options: ["Labels", "Mentions", "Folders", "Topics"],
        correctIndex: 0,
        explanation: "Labels is the correct answer."
    },
    {
        id: 15,
        type: 'mcq',
        question: "What is the benefit of associating a deal with a contact in HubSpot?",
        options: ["Tracks revenue potential", "Sends automated emails", "Changes lead status automatically", "Creates a support ticket"],
        correctIndex: 0,
        explanation: "Tracks revenue potential is the correct answer."
    },
    {
        id: 16,
        type: 'mcq',
        question: "Which HubSpot feature allows you to schedule reminders to follow up with a lead?",
        options: ["Tasks", "Notes", "Sequences", "Snippets"],
        correctIndex: 0,
        explanation: "Tasks is the correct answer."
    },
    {
        id: 17,
        type: 'mcq',
        question: "In Chatwoot, where can you see all ongoing conversations?",
        options: ["Dashboard", "Contacts", "Inbox", "Reports"],
        correctIndex: 2,
        explanation: "Inbox is the correct answer."
    },
    {
        id: 18,
        type: 'mcq',
        question: "What is the main purpose of 'Lead Source' in HubSpot?",
        options: ["To track the origin of the lead", "To record their phone number", "To track deal amount", "To store meeting notes"],
        correctIndex: 0,
        explanation: "To track the origin of the lead is the correct answer."
    },
    {
        id: 19,
        type: 'mcq',
        question: "Which HubSpot tool would you use to send a bulk email to a segmented list?",
        options: ["Workflows", "Campaigns", "Marketing Email", "Sequences"],
        correctIndex: 2,
        explanation: "Marketing Email is the correct answer."
    },
    {
        id: 20,
        type: 'mcq',
        question: "In Chatwoot, how do you assign a conversation to a specific agent?",
        options: ["Tag them", "Use the Assign option", "Forward it", "Mention them"],
        correctIndex: 1,
        explanation: "Use the Assign option is the correct answer."
    },
    {
        id: 21,
        type: 'mcq',
        question: "What does a 'High Priority' generally indicate in HubSpot?",
        options: ["Lead has shown high interest and is close to converting", "Lead is unresponsive", "Lead has unsubscribed", "Lead source is unknown"],
        correctIndex: 0,
        explanation: "Lead has shown high interest and is close to converting is the correct answer."
    },
    {
        id: 22,
        type: 'mcq',
        question: "Which HubSpot feature helps track the monetary value of a sales opportunity?",
        options: ["Deal Amount", "Lead Status", "Lifecycle Stage", "Lead Source"],
        correctIndex: 0,
        explanation: "Deal Amount is the correct answer."
    },
    {
        id: 23,
        type: 'mcq',
        question: "In Chatwoot, what can you use to automate responses to common questions?",
        options: ["Canned Responses", "Auto Bots", "Labels", "Quick Tags"],
        correctIndex: 0,
        explanation: "Canned Responses is the correct answer."
    },
    {
        id: 24,
        type: 'mcq',
        question: "In HubSpot, what should you update immediately after a meaningful interaction with a lead?",
        options: ["Lifecycle Stage and Lead Status", "Pipeline", "Lead Source", "Deal Stage"],
        correctIndex: 0,
        explanation: "Lifecycle Stage and Lead Status is the correct answer."
    },
    {
        id: 25,
        type: 'mcq',
        question: "Where can you see the complete history of all lead interactions in HubSpot?",
        options: ["Activity Timeline", "Pipeline", "Dashboard", "Reports"],
        correctIndex: 0,
        explanation: "Activity Timeline is the correct answer."
    },
    {
        id: 26,
        type: 'mcq',
        question: "In Chatwoot, how can you prioritise urgent queries?",
        options: ["Mark as Priority", "Add Urgent Label", "Assign to Senior Agent", "Pin Conversation"],
        correctIndex: 1,
        explanation: "Add Urgent Label is the correct answer."
    },
    {
        id: 27,
        type: 'mcq',
        question: "What is the main advantage of integrating Chatwoot with HubSpot?",
        options: ["To sync conversations and lead data", "To automate marketing emails", "To manage invoices", "To handle payments"],
        correctIndex: 0,
        explanation: "To sync conversations and lead data is the correct answer."
    },
    {
        id: 28,
        type: 'mcq',
        question: "Which HubSpot feature allows you to visually track deal progress through stages?",
        options: ["Pipeline", "Dashboard", "Workflows", "Campaigns"],
        correctIndex: 0,
        explanation: "Pipeline is the correct answer."
    },
    {
        id: 29,
        type: 'mcq',
        question: "In Chatwoot, how do you search past conversations with a lead?",
        options: ["Use the Search Bar", "Filter by Date", "Open Reports", "View Dashboard"],
        correctIndex: 0,
        explanation: "Use the Search Bar is the correct answer."
    },
    {
        id: 30,
        type: 'mcq',
        question: "When updating HubSpot, why is it important to record the Lead Source accurately?",
        options: ["For better lead attribution and marketing ROI tracking", "To know which agent spoke to them last", "To qualify them as hot leads", "To send them relevant offers only"],
        correctIndex: 0,
        explanation: "For better lead attribution and marketing ROI tracking is the correct answer."
    }
];
