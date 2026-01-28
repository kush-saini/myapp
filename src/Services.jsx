import React from "react";

const Services = () => {
  return (
    <div>
      <section class="py-5 bg-light">
        <div class="container text-center">
          <h2 class="fw-bold">Our Services</h2>
          <p class="text-muted mb-5">
            We provide high-quality digital solutions to grow your business
          </p>

          <div class="row g-4">
            <div class="col-md-4">
              <div class="p-4 shadow-sm bg-white rounded service-card">
                <div class="fs-1 mb-3">💻</div>
                <h5 class="fw-bold">Web Development</h5>
                <p class="text-muted">
                  Responsive and fast websites using modern technologies like
                  React and Bootstrap.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="p-4 shadow-sm bg-white rounded service-card">
                <div class="fs-1 mb-3">🎨</div>
                <h5 class="fw-bold">Web Design</h5>
                <p class="text-muted">
                  Clean, modern UI/UX designs that enhance user experience.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="p-4 shadow-sm bg-white rounded service-card">
                <div class="fs-1 mb-3">📱</div>
                <h5 class="fw-bold">Responsive Design</h5>
                <p class="text-muted">
                  Mobile-first layouts that work perfectly on all devices.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="p-4 shadow-sm bg-white rounded service-card">
                <div class="fs-1 mb-3">⚙️</div>
                <h5 class="fw-bold">Maintenance</h5>
                <p class="text-muted">
                  Ongoing support, updates, and bug fixes for your website.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="p-4 shadow-sm bg-white rounded service-card">
                <div class="fs-1 mb-3">🚀</div>
                <h5 class="fw-bold">SEO Optimization</h5>
                <p class="text-muted">
                  Improve your website ranking and visibility on search engines.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="p-4 shadow-sm bg-white rounded service-card">
                <div class="fs-1 mb-3">🛒</div>
                <h5 class="fw-bold">E-Commerce</h5>
                <p class="text-muted">
                  Online stores with payment integration and product management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
