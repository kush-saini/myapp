import React from "react";

const Team = () => {
  const members = [
    {
      name: "Rahul Sharma",
      role: "Frontend Developer",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Anjali Verma",
      role: "UI/UX Designer",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Aman Gupta",
      role: "Backend Developer",
      img: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "Priya Singh",
      role: "Project Manager",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold">Meet Our Team</h2>
        <p className="text-muted mb-5">The people behind our success</p>

        <div className="row g-4">
          {members.map((m, index) => (
            <div className="col-md-3" key={index}>
              <div className="card shadow-sm border-0">
                <img src={m.img} className="card-img-top" alt={m.name} />
                <div className="card-body">
                  <h5 className="fw-bold mb-1">{m.name}</h5>
                  <p className="text-muted">{m.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
