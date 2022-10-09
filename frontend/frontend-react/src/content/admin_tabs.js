import dashboard from "../assets/images/dashboard.svg";
import teachers from "../assets/images/teachers.svg";
import courses from "../assets/images/courses.svg";
import students from "../assets/images/students.svg";

const adminTabs = [
  {
    content: "Dashboard",
    icon: dashboard,
    path: "/admin"
  },
  {
    content: "Students",
    icon: students,
    path: "/admin/students"
  },
  {
    content: "Teachers",
    icon: teachers,
    path: "/admin/teachers"
  },
  {
    content: "Courses",
    icon: courses,
    path: "/admin/courses"
  }
]

export default adminTabs;
