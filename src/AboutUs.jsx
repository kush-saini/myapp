import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const AboutUs = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <section class="py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 mb-4 mb-md-0">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                class="img-fluid rounded shadow"
                alt="Team Working"
              />
            </div>

            <div class="col-md-6">
              <h3 class="fw-bold">About Us</h3>
              <p class="text-muted">
                We are a passionate team of developers and designers dedicated
                to building high-quality, modern and scalable digital solutions.
              </p>

              <p class="text-muted">
                Our goal is to help startups and businesses establish a strong
                online presence with clean design, fast performance, and
                user-friendly experiences.
              </p>

              <ul class="list-unstyled">
                <li class="mb-2">✔️ 100% Responsive Design</li>
                <li class="mb-2">✔️ Modern Technologies</li>
                <li class="mb-2">✔️ Client-Focused Approach</li>
                <li class="mb-2">✔️ Affordable Pricing</li>
              </ul>

              <button class="btn btn-dark">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      {/* <>
        {show ? <ProgressBar /> : ""}
        <button onClick={() => setShow(!show)}>Toggle</button>
      </> */}
    </div>
  );
};

export default AboutUs;
