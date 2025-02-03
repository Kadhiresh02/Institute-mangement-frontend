import React, { useState } from 'react';
import cloud from "../assets/AllCoursesImages/cloud-computing.webp";
import softwaretesting from "../assets/AllCoursesImages/software-testing.jpg"
const AllCoursesComp = () => {
  const courses = [
    {
      // name: "Fullstack Development with .NET",
      // image: "https://via.placeholder.com/150",
      // batch: "Batch A",
      // duration: "6 Months",
      // description: "Master full-stack development using .NET framework.",
      // details: "Learn front-end and back-end development, REST APIs, and database management with C# and ASP.NET."

      
        name: "Fullstack Development with .NET",
        image:  cloud,
        batch: "Batch A",
        duration: "4 Months",
        description: "Master fullstack development with .NET.",
        details: "Learn backend with C#, frontend with React, and database integration."
      
    },
    {
      name: "Fullstack Development with Python",
      image: "/AllCoursesImages/cloud-computing.webp",
      batch: "Batch B",
      duration: "6 Months",
      description: "Become a full-stack developer using Python.",
      details: "Covers Django, Flask, REST APIs, front-end frameworks, and deployment techniques."
    },
    {
      name: "Software Testing",
      image:  softwaretesting,
      batch: "Batch C",
      duration: "3 Months",
      description: "Comprehensive software testing techniques.",
      details: "Learn manual and automated testing, tools like Selenium, JUnit, and performance testing."
    },
    {
      name: "Frontend Development with React",
      image: "https://via.placeholder.com/150",
      batch: "Batch D",
      duration: "4 Months",
      description: "Build dynamic web applications with React.",
      details: "Covers React hooks, state management, routing, and integration with APIs."
    },
    {
      name: "DevOps",
      image: "https://via.placeholder.com/150",
      batch: "Batch E",
      duration: "5 Months",
      description: "Master DevOps practices and tools.",
      details: "Learn CI/CD pipelines, Docker, Kubernetes, Jenkins, and cloud integrations."
    },
    {
      name: "Salesforce",
      image: "https://via.placeholder.com/150",
      batch: "Batch F",
      duration: "4 Months",
      description: "Become proficient in Salesforce development and administration.",
      details: "Covers Apex programming, Visualforce, Lightning components, and Salesforce administration."
    },
    {
      name: "Cloud Computing",
      image: "cloud",
      batch: "Batch G",
      duration: "5 Months",
      description: "Understand cloud infrastructure and services.",
      details: "Learn AWS, Azure, GCP, cloud architecture, virtualization, and deployment strategies."
    },
    {
      name: "Data Analyst",
      image: "https://via.placeholder.com/150",
      batch: "Batch H",
      duration: "4 Months",
      description: "Analyze and visualize data effectively.",
      details: "Covers Excel, SQL, Python, data visualization tools, and business intelligence techniques."
    },
    {
      name: "Cyber Security",
      image: "https://via.placeholder.com/150",
      batch: "Batch I",
      duration: "5 Months",
      description: "Learn the fundamentals of cyber security.",
      details: "Covers network security, ethical hacking, cryptography, and security management practices."
    },
    {
      name: "Android Development",
      image: "https://via.placeholder.com/150",
      batch: "Batch J",
      duration: "4 Months",
      description: "Develop robust Android applications.",
      details: "Covers Java, Kotlin, Android Studio, UI/UX design, and API integration."
    },
    {
      name: "Artificial Intelligence (AI)",
      image: "https://via.placeholder.com/150",
      batch: "Batch K",
      duration: "6 Months",
      description: "Dive into the world of AI and machine learning.",
      details: "Learn Python, machine learning algorithms, neural networks, and AI model deployment."
    },
    {
      name: "Power BI",
      image: "https://via.placeholder.com/150",
      batch: "Batch L",
      duration: "3 Months",
      description: "Master data visualization with Power BI.",
      details: "Covers dashboards, DAX, data modeling, and interactive report creation."
    }
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div style={{background:"#FFF8E1"}} > 
    <div className="container AllCoursesSection">
      <h2 className="text-center mb-5 Exploreheader">Explore Our Courses</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm h-100" onClick={() => handleCardClick(course)}>
              <img src={course.image} className="card-img-top" alt={course.name} />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text"><strong>Batch:</strong> {course.batch}</p>
                <p className="card-text"><strong>Duration:</strong> {course.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="modal fade show" style={{ display: 'block' }} aria-hidden="false">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedCourse.name}</h5>
                <button type="button" className="close" aria-label="Close" onClick={closeModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h6><strong>Description:</strong></h6>
                <p>{selectedCourse.description}</p>
                <h6><strong>Details:</strong></h6>
                <p>{selectedCourse.details}</p>
                <p><strong>Batch:</strong> {selectedCourse.batch}</p>
                <p><strong>Duration:</strong> {selectedCourse.duration}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default AllCoursesComp;
