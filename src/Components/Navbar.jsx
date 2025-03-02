import { IoMdCall } from "react-icons/io";

function Navbar() {
  return (
    <>
      <div
        style={{
         
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: 25, color: "blue" }}>
          Allen
        </h1>

        <nav>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "20px",
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a
                href="#Courses"
                style={{ textDecoration: "none", color: "black" }}
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#TestSeries"
                style={{ textDecoration: "none", color: "black" }}
              >
                Test Series
              </a>
            </li>
            <li>
              <a
                href="#Scholarships"
                style={{ textDecoration: "none", color: "black" }}
              >
                Scholarships
              </a>
            </li>
            <li>
              <a
                href="#Results"
                style={{ textDecoration: "none", color: "black" }}
              >
                Results
              </a>
            </li>
            <li>
              <a
                href="#StudyMaterials"
                style={{ textDecoration: "none", color: "black" }}
              >
                Study Materials
              </a>
            </li>
            <li>
              <a
                href="#AboutUs"
                style={{ textDecoration: "none", color: "black" }}
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IoMdCall style={{ height: 25, width: 25, color: "blue" }} />
          <button
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              border: "2px solid #74b9ff",
              padding: "5px 10px",
              color: "black",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#019370",
          color: "white",
          padding:5,
          marginTop: "0px",
          borderRadius: "10px",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        <span style={{color:"#f9ca24"}}>REGISTER FOR AOSAT✨</span>
        <spa style={{color:"white"}}>Win up to 90% scholarship on our Online Courses </spa>
      </div>
    </>
  );
}

export default Navbar;
