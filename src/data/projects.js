export const projects = [
  {
    id: 1,
    title: "Induverso",
    description: "Ecosistema industrial, científico y tecnológico enfocado en resolver las necesidades reales del sector productivo chileno.",
    image: "https://www.automaticaeinstrumentacion.com/images/showid2/4319728?w=900&mh=700",
    technologies: ["React", "Node.js", "MongoDB", "MaterialUI"],
    category: "profesional",
    github: "https://induverso.cl",
    demo: "https://induverso.cl",
    featured: true
  },
  {
    id: 2,
    title: "Biblioteca Inteligente",
    description: "Sistema Gamificado para gestión de cursos educativos en Biblioteca Escolar. Presenta un sistema de Iluminación inteligente que permite la ubicación física de recursos mediante un panel de busqueda.",
    image: "/biblioteca_inteligente.jpg",
    technologies: ["Nodejs", "Express", "MongoDB", "JWT"],
    category: "educativo",
    github: "https://github.com/alejandro92robot/biblioteca_front.git",
    demo: "https://github.com/alejandro92robot/biblioteca_front.git",
    featured: true
  },
  {
    id: 3,
    title: "Spiderbot 12DOF",
    description: "Robot de 12 grados de libertad con microservos controlados por websocket en ESP32. Aplicación Kotlin para control remoto.",
    image: "/spiderbot_12dof.jpeg",
    technologies: ["Kotlin", "C++", "Esp32"],
    category: "educativo",
    github: "https://github.com/tuusuario/task-app",
    demo: "https://tutaskapp.com",
    featured: false
  },
  {
    id: 4,
    title: "Mechatronics Eyes",
    description: "Ojos mecatrónicos con microservos y movimiento por control analógico.",
    image: "/images/mecha_eyes.jpeg",
    technologies: ["Arduino UNO", "C++", "Python"],
    category: "educativo",
    github: "https://github.com/tuusuario/analytics-dashboard",
    demo: "https://tuanalytics.com",
    featured: true
  },
  {
    id: 5,
    title: "Modumetrix e-commerce",
    description: "Plataforma de ventas modulares innovadora. Construyes tu productos a medida con visualizador 3D en vivo.",
    image: "/images/modumetrix.jpeg",
    technologies: ["React", "Three.js", "MongoDB", "Node.js"],
    category: "profesional",
    github: "https://github.com/tuusuario/analytics-dashboard",
    demo: "https://tuanalytics.com",
    featured: true
  }
];

export const skills = [
  {
    category: "Frontend Development",
    icon: "💻",
    color: "#FF6B6B",
    items: [
      { name: "React", level: 92, description: "Desarrollo de aplicaciones modernas con hooks, context y React Router" },
      { name: "JavaScript", level: 95, description: "ES6+, async/await, promises, destructuring" },
      { name: "TypeScript", level: 88, description: "Tipado estático, interfaces, genéricos" },
      { name: "HTML5", level: 98, description: "Semántica, accesibilidad, APIs modernas" },
      { name: "CSS3", level: 94, description: "Flexbox, Grid, animaciones, variables CSS" },
      { name: "Tailwind CSS", level: 90, description: "Utility-first, componentes personalizados" },
      { name: "Next.js", level: 97, description: "SSR, SSG, API routes, optimización" }
    ]
  },
  {
    category: "Backend Development",
    icon: "🔧",
    color: "#4ECDC4",
    items: [
      { name: "Node.js", level: 91, description: "Express, NestJS, arquitectura de APIs REST" },
      { name: "Python", level: 96, description: "FastAPI, Flask, Django, scripts de automatización" },
      { name: "Express", level: 89, description: "Middleware, routing, autenticación JWT" },
      { name: "FastAPI", level: 86, description: "APIs rápidas, documentación automática, async" },
      { name: "MongoDB", level: 88, description: "Aggregations, indexes, relaciones" },
      { name: "PostgreSQL", level: 84, description: "Consultas complejas, transacciones, optimización" }
    ]
  },
  {
    category: "Mobile Development",
    icon: "📱",
    color: "#45B7D1",
    items: [
      { name: "React Native", level: 89, description: "Cross-platform, componentes nativos, performance" },
      { name: "Flutter", level: 86, description: "Widgets, Dart, animaciones nativas" },
      { name: "iOS Development", level: 81, description: "Swift, UIKit, SwiftUI, App Store" },
      { name: "Android Development", level: 84, description: "Kotlin, Jetpack Compose, Google Play" },
      { name: "Expo", level: 86, description: "Development builds, OTA updates, plugins" },
      { name: "Mobile UI/UX", level: 83, description: "Design systems, responsive layouts, gestures" }
    ]
  },
  {
    category: "Cybersecurity",
    icon: "🔒",
    color: "#96CEB4",
    items: [
      { name: "Wireshark", level: 86, description: "Análisis de tráfico, filtros, troubleshooting" },
      { name: "Metasploit", level: 82, description: "Exploits, payloads, post-exploitation" },
      { name: "Nmap", level: 89, description: "Network scanning, OS detection, vulnerability discovery" },
      { name: "Burp Suite", level: 83, description: "Web app testing, intercepting proxy, scanner" },
      { name: "OWASP Top 10", level: 91, description: "Vulnerabilidades web, prevención, best practices" },
      { name: "Penetration Testing", level: 84, description: "Ethical hacking, reporting, methodologies" }
    ]
  },
  {
    category: "Machine Learning & AI",
    icon: "🤖",
    color: "#FECA57",
    items: [
      { name: "TensorFlow", level: 89, description: "Deep learning, Keras, model training" },
      { name: "PyTorch", level: 86, description: "Neural networks, dynamic computation graphs" },
      { name: "Scikit-learn", level: 91, description: "Classic ML algorithms, preprocessing, evaluation" },
      { name: "Pandas", level: 93, description: "Data manipulation, analysis, cleaning" },
      { name: "NumPy", level: 91, description: "Numerical computing, array operations" },
      { name: "Computer Vision", level: 84, description: "OpenCV, image processing, object detection" }
    ]
  },
  {
    category: "DevOps & Cloud",
    icon: "⚡",
    color: "#54A0FF",
    items: [
      { name: "Docker", level: 86, description: "Containerization, Docker Compose, multi-stage builds" },
      { name: "AWS", level: 84, description: "EC2, S3, Lambda, RDS, IAM" },
      { name: "Azure", level: 79, description: "App Services, Functions, Cosmos DB" },
      { name: "CI/CD", level: 86, description: "GitHub Actions, GitLab CI, Jenkins pipelines" },
      { name: "Terraform", level: 78, description: "Infrastructure as Code, modules, state management" }
    ]
  }
];