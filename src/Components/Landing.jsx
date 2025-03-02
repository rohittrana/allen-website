function Landing() {
  return (
    <>
      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <div
          style={{
            height: 300,
            width: 500,
            borderRadius: 20,
            alignContent: "flex-start",
            marginLeft: 80,
          }}
        >
          <h1 style={{ fontWeight: "bolder" }}>
            Online coaching that delivers results
          </h1>
          <h4 style={{ fontSize: 20, color: "#91a3b3" }}>
            Explore our online courses
          </h4>
          <div
            style={{
              display: "flex",
              gap: 10,
              height: 30,
              borderRadius: "9999px",
            }}
          >
            <button
              style={{
                borderRadius: 10,
                borderStyle: "solid",
                borderColor: "#3383e0",
              }}
            >
              NEET
            </button>
            <button
              style={{
                borderRadius: "9999px",
                borderStyle: "solid",
                borderColor: "#3383e0",
              }}
            >
              JEE
            </button>
            <button
              style={{
                borderRadius: "9999px",
                borderStyle: "solid",
                borderColor: "#3383e0",
              }}
            >
              CLASS 6-10
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: 300,
            width: 500,
            background: "#74b9ff",
            alignContent: "flex-end",
            borderRadius: 20,
            marginLeft: 220,
            gap: 50,
          }}
        >
          <div
            style={{
              marginLeft: 20,
              marginTop: 30,
              color: "white",
              padding: 0,
            }}
          >
            <h3>278 student scored </h3>
            <h1>Top 100 </h1>
            <h1>Ranks in </h1>
            <h2>Olympiads</h2>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: 100,
              marginTop: 100,
              opacity: 0.75,
            }}
          >
            <img
              src="https://img.freepik.com/free-psd/3d-rendering-graduate-character-pose_23-2151848420.jpg"
              alt="student image"
              style={{ height: 200, width: 200 }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginRight: 80,
          padding: 60,
          marginBottom: 0,
          height: 10,
        }}
      >
        <h3 style={{ marginRight: 80, fontWeight: "bolder", fontSize: 25 }}>
          Win up to 90% scholarship | ALLEN Online Scholarship Test (AOSAT)
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          gap: 20,
          marginRight: 80,
          padding: 60,
          marginTop: 0,
        }}
      >
        <div
          style={{
            height: 300,
            width: 350,
            backgroundColor: "white",
            borderRadius: 40,
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: 20, marginLeft: 45 }}>AOSAT FOR NEET</h1>
          <br />
          <h4 style={{ marginLeft: 45 }}>
            Session:2025-26| Class 11 ,12 & 12+
          </h4>
          <div style={{ display: "flex", alignContent: "center" }}>
            <a
              href="#Register"
              style={{
                textDecoration: "none",
                fontSize: "bold",
                marginTop: 80,
              }}
            >
              Register
            </a>
            <img
              style={{ height: 100, width: 150, marginLeft: 200 }}
              src="https://img.freepik.com/free-vector/3d-cartoon-style-laptop-with-infographic-elements-screen-icon-business-data-analysis-financial-statistics-flat-vector-illustration-development-research-management-concept_778687-1013.jpg"
              alt="laptop image"
            />
          </div>
        </div>

        <div
          style={{
            height: 300,
            width: 350,
            backgroundColor: "white",
            borderRadius: 40,
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: 20, marginLeft: 45 }}>AOSAT FOR JEE</h1>
          <br />
          <h4 style={{ marginLeft: 45 }}>Session:2025-26| Class 11,12 & 12+</h4>
          <div style={{ display: "flex", alignContent: "center" }}>
            <a
              href="#Register"
              style={{
                textDecoration: "none",
                fontSize: "bold",
                marginTop: 80,
              }}
            >
              Register
            </a>
            <img
              style={{ height: 100, width: 150, marginLeft: 200 }}
              src="https://img.freepik.com/free-vector/3d-cartoon-style-laptop-with-infographic-elements-screen-icon-business-data-analysis-financial-statistics-flat-vector-illustration-development-research-management-concept_778687-1013.jpg"
              alt="laptop image"
            />
          </div>
        </div>
        <div
          style={{
            height: 300,
            width: 350,
            backgroundColor: "white",
            borderRadius: 40,
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: 20, marginLeft: 45 }}>AOSAT FOR Class6-10</h1>
          <br />
          <h4 style={{ marginLeft: 45 }}>Session:2025-26| Class 6-10</h4>
          <div style={{ display: "flex", alignContent: "center" }}>
            <a
              href="#Register"
              style={{
                textDecoration: "none",
                fontSize: "bold",
                marginTop: 80,
              }}
            >
              Register
            </a>
            <img
              style={{ height: 100, width: 150, marginLeft: 200 }}
              src="https://img.freepik.com/free-vector/3d-cartoon-style-laptop-with-infographic-elements-screen-icon-business-data-analysis-financial-statistics-flat-vector-illustration-development-research-management-concept_778687-1013.jpg"
              alt="laptop image"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          justifyItems: "center",
          fontSize: 30,
          backgroundColor: "white",
          padding: 20,
        }}
      >
        <h3>Why ALLEN Online</h3>

        <div style={{ display: "flex", gap: 30 }}>
          <div
            style={{
              backgroundColor: "#edf2fa",
              height: 250,
              width: 300,
              boxSizing: "borderBox",
              border: "0 solid #eee",
              borderRadius: 15,
            }}
          >
            <h3 style={{ fontSize: 30, marginLeft: 40 }}>Kota Faculty</h3>
            <p style={{ fontSize: 17, margin: 20 }}>
              Expert faculty, top-notch study material and teaching methods
              perfected in Kota over 35+ years
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#edf2fa",
              height: 250,
              width: 300,
              boxSizing: "borderBox",
              border: "0 solid #eee",
              borderRadius: 15,
            }}
          >
            <h3 style={{ fontSize: 30, marginLeft: 40 }}>Proven Results</h3>
            <p style={{ fontSize: 17, margin: 20 }}>
              Stellar results delivered through Online Courses across JEE, NEET,
              Olympiads and 10th Board Exams
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#edf2fa",
              height: 250,
              width: 300,
              boxSizing: "borderBox",
              border: "0 solid #eee",
              borderRadius: 15,
            }}
          >
            <h3 style={{ fontSize: 30, marginLeft: 40 }}>Learning Tools</h3>
            <p style={{ fontSize: 17, margin: 20 }}>
              24x7 doubt resolution and customized study material to test, and
              improve continuously
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#edf2fa",
              height: 250,
              width: 300,
              boxSizing: "borderBox",
              border: "0 solid #eee",
              borderRadius: 15,
            }}
          >
            <h3 style={{ fontSize: 30, marginLeft: 40 }}> Mentor Support</h3>
            <p style={{ fontSize: 17, margin: 20 }}>
              Regular mentorship sessions with faculty, guidance on exam
              strategy and updates to parents
            </p>
          </div>
        </div>
        <div style={{ padding: 40 }}>
          <button
            style={{
              borderRadius: "9999px",
              backgroundColor: "#0266da",
              height: 40,
              width: 150,
              borderColor: "#0266da",
              color: "white",
            }}
          >
            Explore Online Course
          </button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{}}>What's Trending</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ borderRadius: "2rem", height: "auto", width: "66rem" }}
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1737144038/qgao5iq2cxtrbnzc0kh4.png?_upload_ref=ic_img_tool&__ar__=4.03"
          alt="student"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ fontSize: 30, fontWeight: "bold" }}>Meet our Champions</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731570115/desktop_b1jw5i.webp"
          alt="student Image"
          style={{ height: 400, width: 1200 }}
        />
      </div>
      {/* 
    i will add here that two coloum */}

      {/* making last components */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "50px 10%",
          backgroundColor: "white",
        }}
      >
        <div style={{ width: "45%" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
            ALLEN App Advantage
          </h1>

          <div style={{ borderBottom: "1px solid #ddd", padding: "15px 0" }}>
            <details>
              <summary
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                400 Lakh+ Questions Practised
              </summary>
              <p style={{ marginTop: "8px" }}>
                Access a vast collection of questions to enhance your learning.
              </p>
            </details>
          </div>

          <div style={{ borderBottom: "1px solid #ddd", padding: "15px 0" }}>
            <details>
              <summary
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                10 Lakh+ Hours of Learning Content Consumed
              </summary>
              <p style={{ marginTop: "8px" }}>
                Get access to thousands of hours of video content and expert
                insights.
              </p>
            </details>
          </div>

          <div style={{ borderBottom: "1px solid #ddd", padding: "15px 0" }}>
            <details open>
              <summary
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                10 Lakh+ Doubts Solved
              </summary>
              <p style={{ marginTop: "8px" }}>
                Get instant answers with faculty help & AI assistance available
                24/7 in any language.
              </p>
            </details>
          </div>
        </div>

        <div
          style={{
            width: "45%",
            backgroundColor: "white",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <img
            src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1200,f_avif,q_auto/v1731330884/lls3agf6fwmht6zba5vx.svg?_upload_ref=ic_img_tool"
            alt="Allen App"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
      {/* //Explore more button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <button
          style={{
            height: 40,
            width: 150,
            borderRadius: 20,
            backgroundColor: "#0266da",
            color: "white",
            borderColor: "#0266da",
            marginBottom: 20,
          }}
        >
          Explore More
        </button>
      </div>
      {/* 
      Testimonials */}
      <div style={{ marginLeft: "80px" }}>
        <h1 style={{ fontSize: "30px" }}>Testimonials from our students</h1>
      </div>

      <div style={{ marginLeft: "50px", display: "flex", gap: "20px" }}>
        <div
          style={{
            height: "250px", // Fixed height for all boxes
            width: "400px",
            background: "white",
            borderRadius: "30px",
            padding: "20px",
          }}
        >
          <p>
            I chose ALLEN Online Courses because I wanted to balance my NEET
            prep with my school schedule. The course structure, from daily
            homework to post-class handouts, was well-organized.
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <img
              src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Sarth-128x128_wrp1pw.webp"
              alt="student"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
            <div style={{}}>
              <h5>SARTH PATIL</h5>
              <p>NEET-UG 2024,</p>
              <p>Score 710/720</p>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "250px",
            width: "400px",
            background: "white",
            borderRadius: "30px",
            padding: "20px",
          }}
        >
          <p>
            I took NEET in 2023 but didn’t achieve my desired score, so I
            reattempted in 2024 with ALLEN Online Courses. The top-quality
            faculty, study material, & personalised experience on the ALLEN app
            helped me improve my score.
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <img
              src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Galib-128x128_1_ktw4sw.webp"
              alt="student"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
            <div>
              <h5>SEKH GALIB RAZA</h5>
              <p>NEET-UG 2024,</p>
              <p>Score 690/720</p>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "250px",
            width: "400px",
            background: "white",
            borderRadius: "30px",
            padding: "20px",
          }}
        >
          <p>
            I wanted to stay with my family while preparing for JEE, so I chose
            ALLEN Online Courses. The faculty was great & the live classes,
            daily homework & test series helped me secure a great score & rank!
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <img
              src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Avik-128x128_vbkt1r.webp"
              alt="student"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
            <div>
              <h5>AVIK DAS</h5>
              <p>JEE Adv. 2024,</p>
              <p>AIR 69</p>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "250px",
            width: "400px",
            background: "white",
            borderRadius: "30px",
            padding: "20px",
          }}
        >
          <p>
            I came to know about ALLEN’s Online Test Series from my senior in
            school. The tests are really awesome as these are based mainly on
            NCERT and cover almost all types of NEET questions. They gave me the
            real feel of the competition.
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <img
              src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1725858116/Shifa-128x128_yjuigd.webp"
              alt="student"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
            <div>
              <h5>SHIFA FATIMA</h5>
              <p>NEET-UG 2024,</p>
              <p>Score 696/720</p>
            </div>
          </div>
        </div>
      </div>

      {/* // descover the perfect online course */}

      <div style={{ backgroundColor: "white" }}>
        <h1 style={{ marginLeft: 80 }}>Discover the pefect online course</h1>
        <div
          style={{
            display: "flex",
            backgroundColor: "white",
            gap: 50,
            marginLeft: 20,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: 200,
              width: 300,
              backgroundColor: "#edf2fa",
              borderRadius: 40,
            }}
          >
            <h1 style={{ marginLeft: 50 }}>JEE</h1>
            <div style={{ display: "flex" }}>
              <a
                href="#view"
                style={{
                  color: "blue",
                  textDecoration: "none",
                  fontSize: "bold",
                  marginTop: 50,
                  marginLeft: 30,
                }}
              >
                View
              </a>
              <img
                style={{
                  height: 50,
                  width: 60,
                  borderRaduis: 40,
                  opacity: 0.75,
                  marginTop: 60,
                  marginLeft: 150,
                }}
                src="https://cdn3d.iconscout.com/3d/premium/thumb/engineer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--architect-professional-worker-avatar-pack-people-icons-4841549.png?f=webp"
                alt="Engineering "
              />
            </div>
          </div>
          <div
            style={{
              height: 200,
              width: 300,
              backgroundColor: "#edf2fa",
              borderRadius: 40,
            }}
          >
            <h1 style={{ marginLeft: 50 }}>NEET</h1>
            <div style={{ display: "flex" }}>
              <a
                href="#view"
                style={{
                  color: "blue",
                  textDecoration: "none",
                  fontSize: "bold",
                  marginTop: 50,
                  marginLeft: 30,
                }}
              >
                View
              </a>
              <img
                style={{
                  height: 50,
                  width: 60,
                  borderRaduis: 40,
                  opacity: 0.75,
                  marginTop: 60,
                  marginLeft: 150,
                }}
                src="https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-cartoon-style-3d-illustration-of-a-male-doctor-holding-a-folder-image_3826989.jpg"
                alt="Engineering "
              />
            </div>
          </div>
          <div
            style={{
              height: 200,
              width: 300,
              backgroundColor: "#edf2fa",
              borderRadius: 40,
            }}
          >
            <h1 style={{ marginLeft: 50 }}>CLASS 6 - 10</h1>
            <div style={{ display: "flex" }}>
              <a
                href="#view"
                style={{
                  color: "blue",
                  textDecoration: "none",
                  fontSize: "bold",
                  marginTop: 50,
                  marginLeft: 30,
                }}
              >
                View
              </a>
              <img
                style={{
                  height: 50,
                  width: 60,
                  borderRaduis: 40,
                  opacity: 0.75,
                  marginTop: 60,
                  marginLeft: 150,
                }}
                src="https://cdn3d.iconscout.com/3d/premium/thumb/student-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--education-study-school-learning-avatar-pack-people-illustrations-4715116.png?f=webp"
                alt="Engineering "
              />
            </div>
          </div>
        </div>

        <div>
          <div style={{ display: "flex", padding: 10 }}>
            <div style={{ marginLeft: 150 }}>
              <img
                src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1730878962/oqfy1klihlgn0vmpy77w.webp?_upload_ref=ic_img_tool"
                alt="form image"
                style={{ height: 400, width: 300 }}
              />
            </div>
            
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Landing;
