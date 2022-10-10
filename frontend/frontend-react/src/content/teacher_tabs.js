import dashboard from "../assets/images/dashboard.svg";
import teachers from "../assets/images/teachers.svg";
import courses from "../assets/images/courses.svg";
import students from "../assets/images/students.svg";

const teacherTabs = [
  {
    content: "Dashboard",
    icon: dashboard,
    path: "/teacher"
  },
  {
    content: "Students",
    icon: students,
    path: "/teacher/students"
  },
  {
    content: "Teachers",
    icon: teachers,
    path: "/teacher/teachers"
  },
  {
    content: "Courses",
    icon: courses,
    path: "/teacher/courses"
  }
]

export default teacherTabs;
