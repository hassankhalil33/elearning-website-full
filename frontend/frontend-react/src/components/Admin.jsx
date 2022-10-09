import React from "react";
import Profile from "./Profile";
import SideBar from "./SideBar";
import adminTabs from "../content/admin_tabs";

async function Admin() {
  // const test = useFetchData();
  // console.log(test);

  // const response_landing = await useFetchData();
  // console.log("Testing Products API", response_landing.data.data);

  // const [fetch, setFetch] = useState();
  // // axios.get("https://dog.ceo/api/breeds/image/random").then(response => setFetch(response.data));

  // useEffect(() => {
  //   axios.get("https://dog.ceo/api/breeds/image/random").then(response => setFetch(response.data));
  // }, [])

  //   useFetchData()
  //     .then(data => setFetch(data));

  return (
    <section className="admin-section">
      <SideBar tabs={adminTabs} />

      <div className="admin-feed">
        <h1>Dashboard</h1>
      </div>

      <div className="admin-profile">
        <h1>Profile</h1>
        <Profile
          fullName={"Hassan Khalil"}
          type={"admin"}
        />
      </div>
    </section >
  )
}

export default Admin;
