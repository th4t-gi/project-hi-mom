export interface Competency {
  slug: string;
  name: string;
  section: string;
  description: string;
  questions: string[];
  preview: string;
  topic?: string;
  topic_code?: boolean;
  status: "Completed" | "Needs Review" | "Approved For" | "TODO"
}

export const sections = [
  'Development',
  'Verification',
  'Design',
  'Engineering',
  'Advanced Design',
  'Advanced Verification',
  'Advanced Engineering',
] as const;

export const competencies: Competency[] = [
  {
    slug: 'medium-scale-abstraction',
    name: 'Medium-scale Abstraction',
    section: 'Development',
    description:
      'Choose a part of the project that you (co-)wrote that employs medium-scale abstraction.',
    questions: [
      'What functionality does your code sample abstract away?',
      'How does it mechanically achieve abstraction?',
      'What purpose does this abstraction serve in your larger program?',
    ],
    preview: "",
    // topic: "",
    // topic_code: true,
    status: "Needs Review"
  },
  {
    slug: 'medium-scale-architecture',
    name: 'Medium-scale Architecture',
    section: 'Development',
    description:
      'Choose one of the components of your project that you (co-)designed according to its architecture, e.g., front-end versus back-end.',
    questions: [
      'What architectural pattern does your program employ?',
      'What components result from this pattern in your program?',
      'What technologies and/or libraries make up each of the components?',
    ],
    preview: "",
    topic: "",
    // topic: "Authentication and UserContext",
    // topic_code: true,
    status: "Completed"
  },
  {
    slug: 'testing-strategies',
    name: 'Testing Strategies',
    section: 'Verification',
    description:
      'Identify a component of your project that you were responsible for testing. According to code coverage tools, what aspects of this component are covered with tests?',
    questions: [
      'What kinds of tests are they?',
      'For code that is not covered by tests, why did you not cover them?',
    ],
    preview: "",
    status: "Needs Review"
  },
  {
    slug: 'testing-infrastructure',
    name: 'Testing Infrastructure',
    section: 'Verification',
    description:
      'Identify relevant components from your development infrastructure (IDE, build, etc.) that you use to test your project.',
    questions: [
      'How have you automated your tests so that they both take "1-click" to run and run automatically as part of build validation?',
      'Describe a specific occurrence in which your testing infrastructure saved you and/or your team work.',
    ],
    preview: "",
    status: "Needs Review"
  },
  {
    slug: 'needfinding',
    name: 'Needfinding',
    section: 'Design',
    description:
      'Identify relevant artifacts from the human-centered design process that address the following points.',
    questions: [
      'What techniques did you employ to discover users\' needs?',
      'What did you learn about users\' needs from this process?',
    ],
    preview: "",
    status: "Completed"
  },
  {
    slug: 'ideation',
    name: 'Ideation',
    section: 'Design',
    description:
      'Identify relevant artifacts from the human-centered design process that address the following points.',
    questions: [
      'What techniques did you use to discover solutions to users\' needs?',
      'What solution(s) did you ultimate pursue and why did you choose them?',
    ],
    preview: "",
    status: "Completed"
  },
  {
    slug: 'prototyping',
    name: 'Prototyping',
    section: 'Design',
    description:
      'Identify relevant artifacts from the human-centered design process that address the following points.',
    questions: [
      'What design questions did you intend to answer with your prototype(s)?',
      'How did you design your prototype(s) and subsequent user studies to address these questions?',
      'What answers to your design questions did your efforts unveil?',
    ],
    preview: "",
    status: "Completed"
  },
  {
    slug: 'evaluation',
    name: 'Evaluation',
    section: 'Design',
    description:
      'Identify relevant artifacts from the human-centered design process that address the following points.',
    questions: [
      'What was the design of your user study to evaluate your artifact?',
      'What were the results of this user study?',
      'What were the main points of future development that you took away from this activity?',
    ],
    preview: "",
    status: "Needs Review"
  },
  {
    slug: 'infrastructure',
    name: 'Infrastructure',
    section: 'Engineering',
    description:
      'Describe your development tools and how they helped you write code and automate the build/deployment process.',
    questions: [
      'What development tools did you use through the process to help write code and automate the build/deployment process?',
      'What is one specific problem (e.g., debugging an issue) that you encountered while writing code and how did your tools help or hinder your ability to address that problem?',
    ],
    preview: "",
    status: "Needs Review"
  },
  {
    slug: 'self-learning',
    name: 'Self-learning',
    section: 'Engineering',
    description:
      'Identify a portion of your tech tutorial that you developed.',
    questions: [
      'Describe the technology that the tutorial addresses and how it fits into your project.',
      'Evaluate how useful the tool was in your work. What were its strengths and weaknesses, especially in comparison with other tools you have used?',
      'Identify one particular sticking point to using this technology that you would want your team to know about when adopting the tool and how you resolved it.',
    ],
    preview: "",
    status: "Needs Review"
  },
  {
    slug: 'process',
    name: 'Process',
    section: 'Engineering',
    description:
      'Describe the software engineering practices your group employed to manage, distribute, and execute on their work.',
    questions: [
      'What software engineering practices did your group employ to manage, distribute, and execute on their work?',
      'In your estimation, how well did your group follow through on using these processes throughout the semester?',
      'What, if anything, got in the way of integrating these processes into your workflow?',
    ],
    preview: "",
    status: "Needs Review"
  },
  {
    slug: 'collaboration',
    name: 'Collaboration',
    section: 'Engineering',
    description:
      'Identify three different instances where you participated in collaborative work with your team as identified by specific commits, pull requests, and/or issue numbers on GitHub.',
    questions: [
      'Identify the work you did in each of these instances.',
      'Describe the difficulties that necessitated communication with your peers in each instance.',
      'Did you encounter any difficulties in collaboration with your team during these instances? If so, how did you resolve those difficulties?',
    ],
    preview: "",
    status: "Needs Review"
  },
  {
    slug: 'user-interface-design',
    name: 'User Interface Design',
    section: 'Advanced Design',
    description:
      'Identify a portion of the user interface that you designed.',
    questions: [
      'How does your design adhere to one or more of the principles of interaction design?',
      'What alternative designs did you consider (describe at least one) and why did the current design prevail, appealing to the principles of interaction design?',
    ],
    preview: "",
    status: "Needs Review"
  },
  // {
  //   slug: 'accessible-design',
  //   name: 'Accessible Design',
  //   section: 'Advanced Design',
  //   description:
  //     'Identify a portion of the user interface that you designed.',
  //   questions: [
  //     'How does your design adhere to one or more of the principles of accessible design?',
  //     'How did you use validation tools (if at all) to ensure that your design was accessible?',
  //   ],
  //   status: "TODO"
  // },
  {
    slug: 'testing-technologies',
    name: 'Testing Technologies',
    section: 'Advanced Verification',
    description:
      'Identify a portion of your test suite that utilizes advanced testing tools or techniques.',
    questions: [
      'What advanced testing tool or technology did you employ in your code?',
      'What did this tool/technology validate in your program?',
      'How effective was it in this task?',
      'In what contexts did you envision yourself utilizing this tool/technology in the future?',
    ],
    preview: "",
    status: "TODO"
  },
  {
    slug: 'quality',
    name: 'Quality',
    section: 'Advanced Engineering',
    description:
      'Imagine that you were up for promotion and your case rests on the quality of your project\'s codebase. Provide an overall evaluation of its quality.',
    questions: [
      'In what ways does your codebase exemplify engineering excellence? Be as exhaustive as possible in your analysis.',
      'In what ways does it fall short? How would you have addressed these issues if given more time?',
    ],
    preview: "",
    status: "TODO"
  },
];
