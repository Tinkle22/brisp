import CourseDetails from './course-details';

// Course data
export const courses = {
  'artificial-intelligence': {
    title: "Artificial Intelligence",
    subtitle: "Unlock The Power Of Artificial Intelligence And Become An AI Expert",
    duration: "3 Months Program",
    price: "K850/Pm",
    image: "/ai-course.jpg",
    description: "Our comprehensive AI program covers machine learning, deep learning, neural networks, and practical applications of AI in today's industry.",
    highlights: [
      "Hands-on experience with real-world AI projects",
      "Industry-standard tools and frameworks",
      "Personalized mentoring from AI experts",
      "Career guidance and placement support"
    ],
    curriculum: [
      {
        week: "Week 1-2",
        topics: ["Introduction to AI", "Python for AI", "Data Preprocessing"]
      },
      {
        week: "Week 3-4",
        topics: ["Machine Learning Fundamentals", "Supervised Learning", "Model Evaluation"]
      },
      {
        week: "Week 5-6",
        topics: ["Deep Learning", "Neural Networks", "Computer Vision"]
      },
      {
        week: "Week 7-8",
        topics: ["Natural Language Processing", "Reinforcement Learning", "AI Ethics"]
      },
      {
        week: "Week 9-12",
        topics: ["Capstone Project", "Industry Applications", "Portfolio Development"]
      }
    ],
    stats: [
      { label: "Hours per Week", value: "20", icon: "Clock" },
      { label: "Class Size", value: "15 Students", icon: "Users" },
      { label: "Projects", value: "8+", icon: "BookOpen" },
      { label: "Start Date", value: "Flexible", icon: "Calendar" }
    ]
  },
  'graphic-designing': {
    title: "graphic-designing",
    subtitle: "Master Modern Web Development and Build Real-World Applications",
    duration: "4 Months Program",
    price: "K750/Pm",
    image: "/web-dev.jpg",
    description: "Learn full-stack web development using the latest technologies and frameworks. Build responsive, scalable web applications from scratch.",
    highlights: [
      "Full-stack development coverage",
      "Modern frameworks and tools",
      "Real-world project experience",
      "Industry best practices"
    ],
    curriculum: [
      {
        week: "Week 1-2",
        topics: ["HTML5 & CSS3", "JavaScript Fundamentals", "Responsive Design"]
      },
      {
        week: "Week 3-4",
        topics: ["React.js", "State Management", "API Integration"]
      },
      {
        week: "Week 5-6",
        topics: ["Node.js", "Express.js", "Database Design"]
      },
      {
        week: "Week 7-8",
        topics: ["MongoDB", "Authentication", "Deployment"]
      },
      {
        week: "Week 9-16",
        topics: ["Full Stack Projects", "Testing", "Performance Optimization"]
      }
    ],
    stats: [
      { label: "Hours per Week", value: "25", icon: "Clock" },
      { label: "Class Size", value: "12 Students", icon: "Users" },
      { label: "Projects", value: "6+", icon: "BookOpen" },
      { label: "Start Date", value: "Monthly", icon: "Calendar" }
    ]
  },
};

export async function generateStaticParams() {
  return Object.keys(courses).map((id) => ({
    id: id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const course = courses[params.id as keyof typeof courses];

  if (!course) {
    return null; // or handle 404
  }

  return <CourseDetails course={course} />;
} 