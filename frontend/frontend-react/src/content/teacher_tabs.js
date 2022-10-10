import dashboard from "../assets/images/dashboard.svg";
import assignments from "../assets/images/assignments.svg";
import announcements from "../assets/images/announcements.svg";
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
    content: "Assignments",
    icon: assignments,
    path: "/teacher/assignments"
  },
  {
    content: "Announcements",
    icon: announcements,
    path: "/teacher/announcements"
  }
]

export default teacherTabs;
