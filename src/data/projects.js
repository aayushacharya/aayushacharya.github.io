export default [
  {
    title: "Cross Border Request to Pay",
    subtitle: "Industry",
    stack: ["Go", "RabbitMQ", "Docker","CI/CD"],
    tags: ["API Service","Backend"],
    description:
      "Constructed secure, digitally signed messages using the ISO20022 financial standard to protect the integrity of transactions, leveraging RabbitMQ's asynchronous messaging for efficient and reliable communication between system components. Established robust CI/CD pipelines, automating integration and deployment for faster time-to-market and improved development efficiency. Spearheaded the design and implementation of independent execution threads in Go, optimizing performance and scalability.",
    year: "2023",
  },
  {
    title: "HMS with Sepsis predictive models",
    subtitle: "Industry",
    stack: ["Python", "ML","Flask","Go","GraphQL"],
    tags: ["Machine Learning","Backend"],
    description:
      "Developed a cutting-edge healthcare management product revolutionizing patient allocation across hospitals, wards, and beds. Leveraged comprehensive patient data, including demographics and EMR records, to build predictive models for early sepsis detection. Integrated sepsis prediction algorithms to enhance patient safety, enabling timely intervention and treatment. Spearheaded the creation of robust task assignment functionalities, including checklists and vital measurements, ensuring efficient healthcare workflows.",
    year: "2023",
  },
  {
    title: "Static site generator",
    subtitle: "Industry",
    stack: ["Go", "GCP","Firestore","App Engine","Cloud functions"],
    tags: ["Backend", "Google Cloud","Serverless"],
    description:
      "Engineered a serverless static site generator (SSG) in GCP, leveraging robust infrastructure. Implemented efficient templating with Go syntax for dynamic content injection. Enabled seamless publishing with a serverless architecture, utilizing App Engine and Pub/Sub with Cloud Functions. Streamlined site creation, injection, and deployment for optimal efficiency.",
    year: "2023",
  },
  {
    title: "ASR and Classification of Nepali Speech",
    subtitle: "Major Project",
    stack: ["React", "Fast API"],
    tags: ["Deep Learning", "NLP","wav2vec","ASR"],
    description:
      "An integrated ASR and NLP system that generates transcripts and relevant category for a given Nepali audio using a combination of self-supervised wav2vec2 model and CTC along with BERT based MuRIL model for Indic languages for further categorization into relevant categories like Sports, Politics, etc.",
    year: "2022",
  },
  {
    title: "Pest Classification using Deep Learning",
    subtitle: "Minor Project",
    stack: ["TensorFlow", "Flutter"],
    tags: ["Deep Learning", "Computer Vision"],
    description:
      "A cross platform mobile application tailored for farmers to identify pests infesting their yield, and suggesting the appropriate biological control method. It consists of a TensorFlow model built with VGG-19 and made suitable for deployment on mobile devices using TensorFlow Lite Converter.",
    year: "2021",
  },
  {
    title: "Campus Online Attendance System​",
    subtitle: "Semester project for DBMS and Software Engineering",
    stack: ["MySQL", "Express", "React", "Node.js"],
    tags: ["Database", "Web development"],
    description:
      "A web-based attendance system for college developed using Node.js for backend, React for frontend and MySQL for database.",
    year: "2020",
    links: [
      {
        label: "Client side",
        url: "https://github.com/Minor-DBMS-Projects/Attendance-Client",
      },
      {
        label: "Server side",
        url: "https://github.com/Minor-DBMS-Projects/Attendance-Backend",
      },
      {
        label: "Admin side",
        url: "https://github.com/Minor-DBMS-Projects/Attendance-AdminSite",
      },
    ],
  },
  {
    title: "Deep Learning based Facial Recognition",
    subtitle: "Instrumentation and LOCUS 2020",
    stack: ["OpenCV", "TensorFlow"],
    tags: ["Computer Vision", "Deep Learning"],
    description:
      "A system built using OpenCV and TensorFlow with the help of VGG-16 model and uses Siamese network for face classification. Designed to take classroom attendance in bulk.",
    year: "2020",
  },
  {
    title: "E-Kisaan​",
    subtitle: "Hack-a-week 2020",
    stack: ["MySQL", "Express", "Node.js"],
    tags: ["Web development", "Competition"],
    description:
      "A web application built using Node.js meant to promote urban farming and provide a platform for buying and selling of urban farming products. ​It was awarded as the winning product in LOCUS Hack a week 2020.",
    year: "2020",
  },
  {
    title: "OpenGL based Ranipokhari 3D Simulation",
    subtitle: "Semester project of Computer Graphics",
    stack: ["Blender", "OpenGL"],
    tags: ["3D Graphics", "Blender"],
    description:
      "3D simulation of Ranipokhari programmed using OpenGL and designed using Blender with proper lighting effects, camera movement and water simulation.",
    year: "2020",
  },
  {
    title: "Sky Bomber",
    subtitle: "Semester project of C++",
    stack: ["SFML"],
    tags: ["Game", "Arcade"],
    description:
      "You are the only remaining pilot of a fighter jet assigned to obliterate everything and anything within your sight. Apply your projectile motion wits and be as accurate as possible while throwing the missiles. But beware ! The fuel is running low.",
    year: "2019",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aayushacharya/Sky-Bomber",
      },
    ],
  },
  {
    title: "Flood Alert System",
    subtitle: "Locus exhibition 2019",
    stack: ["Arduino", "Radiohead"],
    tags: ["Hardware", "Ultrasonic", "Wireless"],
    description:
      "Flood alert system utilizes radio waves to send flood alerts based on the depth of water sources. The depth of the water is measured utilizing the ultrasonic technology and alerts are sent through receiver transmitter setup.",
    year: "2019",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aayushacharya/Flood-Alert-System",
      },
    ],
  },
  {
    title: "Sudoku solver",
    subtitle: "Semester project in C",
    stack: ["C"],
    tags: ["Depth first backtracking"],
    description:
      "A simple Sudoku solver in C using depth first backtracking algorithm.",
    year: "2018",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/aayushacharya/Sudoku-Solver",
      },
    ],
  },
]
