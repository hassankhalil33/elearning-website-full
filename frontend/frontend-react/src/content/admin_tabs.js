import dashboard from "../assets/images/dashboard.svg";
import teachers from "../assets/images/teachers.svg";
import courses from "../assets/images/courses.svg";
import students from "../assets/images/students.svg";

const tabs = [
  {
    content: "Dashboard",
    icon: dashboard,
    path: "/"
  },
  {
    content: "Students",
    icon: students,
    path: "/students"
  },
  {
    content: "Teachers",
    icon: teachers,
    path: "/teachers"
  },
  {
    content: "Courses",
    icon: courses,
    path: "/courses"
  }
]

export default tabs;
