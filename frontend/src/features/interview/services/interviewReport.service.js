const sampleReport = {
    matchScore: 88,
    technicalQuestions: [
        {
            question: "Explain the concept of the Event Loop in Node.js and how it handles asynchronous operations.",
            intention: "To assess the candidate's understanding of Node.js's non-blocking I/O architecture.",
            answer: "The Event Loop allows Node.js to perform non-blocking I/O operations despite being single-threaded by offloading operations to the system kernel whenever possible.",
        },
        {
            question: "How does JWT authentication work, and how did you implement it in your 'Synthesia' project?",
            intention: "To evaluate practical knowledge of security and state management in web applications.",
            answer: "JWT consists of a Header, Payload, and Signature. Upon login, the server generates a signed token and the client sends it with subsequent requests.",
        },
        {
            question: "What is the difference between useState and useEffect hooks in React?",
            intention: "To check proficiency in modern React functional component development.",
            answer: "useState manages local state and triggers re-renders, while useEffect handles side effects such as data fetching, subscriptions, and DOM synchronization.",
        },
        {
            question: "How do you optimize performance in a React application with many components?",
            intention: "To identify whether the candidate understands scalability and frontend efficiency.",
            answer: "Use memoization, code splitting, lazy loading, and virtualization where appropriate to reduce unnecessary work and keep rendering responsive.",
        },
        {
            question: "Explain the difference between a shallow copy and a deep copy in JavaScript.",
            intention: "To test fundamental JavaScript knowledge and memory management concepts.",
            answer: "A shallow copy duplicates top-level properties while nested references remain shared. A deep copy recursively creates independent nested values.",
        },
        {
            question: "In MongoDB, what are indexes and why are they used?",
            intention: "To assess database optimization skills.",
            answer: "Indexes provide efficient lookup structures that improve read performance, at the cost of additional storage and write overhead.",
        },
    ],
    behavioralQuestions: [
        { question: "Tell me about a difficult bug you encountered and how you solved it.", intention: "To assess problem-solving skills and persistence.", answer: "Use the STAR method to explain the situation, task, debugging actions, and measurable result." },
        { question: "How do you prioritize tasks when you have multiple deadlines?", intention: "To evaluate time management and organization.", answer: "Rank work by urgency and impact, then track milestones with a simple checklist or project board." },
    ],
    skillGaps: [
        { skill: "Cloud Deployment (AWS/Azure/GCP)", severity: "medium" },
        { skill: "Responsive Design Frameworks (Tailwind CSS/Bootstrap)", severity: "low" },
        { skill: "Agile Methodologies (Scrum/Kanban)", severity: "medium" },
        { skill: "Unit Testing (Jest/Mocha)", severity: "high" },
    ],
    preparationPlan: [
        {
            day: 1,
            focus: "Advanced JavaScript and ES6+",
            tasks: [
                "Review Closures, Prototypes, and the Event Loop",
                "Practice asynchronous JS (Promises, Async/Await)",
                "Review ES6 features like destructuring and spread operators",
            ],
        },
        {
            day: 2,
            focus: "React.js Mastery",
            tasks: [
                "Deep dive into React Hooks (useMemo, useCallback, useRef)",
                "Practice State Management and Context API",
                "Build a small project focusing on component lifecycle and optimization",
            ],
        },
        {
            day: 3,
            focus: "Backend Architecture with Node & Express",
            tasks: [
                "Review Middleware patterns and Error Handling",
                "Practice building RESTful endpoints and folder structuring",
                "Study JWT implementation and best security practices",
            ],
        },
        {
            day: 4,
            focus: "MongoDB and Database Design",
            tasks: [
                "Practice Schema design and Mongoose models",
                "Study aggregation pipelines and indexing",
                "Compare SQL vs NoSQL use cases",
            ],
        },
        {
            day: 5,
            focus: "Responsive Web Design & CSS",
            tasks: [
                "Master CSS Flexbox and Grid layouts",
                "Review Media Queries and Mobile-first design principles",
                "Explore a CSS framework like Tailwind CSS",
            ],
        },
    ],
};

export const getInterviewReport = () => sampleReport;