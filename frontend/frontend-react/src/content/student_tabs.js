import dashboard from "../assets/images/dashboard.svg";
import assignments from "../assets/images/assignments.svg";
import announcements from "../assets/images/announcements.svg";

const studentTabs = [
  {
    content: "Dashboard",
    icon: dashboard,
    path: "/student"
  },
  {
    content: "Assignments",
    icon: assignments,
    path: "/student/assignments"
  },
  {
    content: "Announcements",
    icon: announcements,
    path: "/student/announcements"
  }
]

export default studentTabs;
