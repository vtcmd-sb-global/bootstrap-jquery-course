import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session06() {
  const codeBlockStyle = {
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    padding: '12px 16px',
    borderRadius: '6px',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '0.9rem',
    overflowX: 'auto',
    lineHeight: '1.5',
    margin: '12px 0 24px 0'
  };

  return (
    <Layout
      title="Session 06 — Integrating and Enhancing with Bootstrap and jQuery"
      description="Integrating Bootstrap and jQuery — Combining Components, Adding Interactivity, Plugins, and Best Practices"
    >
      <CustomLayout>
        <article className="session-content">

          <style>{`
            article code:not(pre code) {
              background-color: #f4f4f4;
              color: #d10057;
              padding: 2px 6px;
              border-radius: 4px;
              font-family: Consolas, Monaco, monospace;
              font-size: 0.9em;
            }
          `}</style>

          <h1>Session 06 — Integrating and Enhancing with Bootstrap and jQuery</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Combining Bootstrap components with jQuery to create
            interactive, dynamic, and professional web pages. Learn how to enhance
            Bootstrap elements with jQuery events, animations, and plugins.
          </p>

          <p>
            <strong>Practical Environment:</strong> VS Code + Browser
          </p>

          <p>
            <strong>Follows Book:</strong> From Book – Session 6 (Integrating and Enhancing with Bootstrap and jQuery)
          </p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Explain the process of interacting with Bootstrap components using jQuery</li>
            <li>Explain steps to integrate third-party jQuery plugins</li>
            <li>Identify best practices for responsive design when combining both libraries</li>
            <li>Illustrate the process of creating and deploying a responsive web page that uses both Bootstrap and jQuery</li>
          </ul>

          <hr />

          <h2>1. Why Combine Bootstrap and jQuery?</h2>

          <p>
            Bootstrap gives you a solid, responsive structure and beautiful components.
            jQuery adds interactivity, animations, and dynamic behavior.
          </p>

          <p>
            When used together, you can:
          </p>

          <ul>
            <li>Show / hide Bootstrap components with smooth effects</li>
            <li>Validate forms before submission</li>
            <li>Create interactive tabs, modals, and accordions</li>
            <li>Build dynamic content (add/remove cards, update lists, etc.)</li>
            <li>Enhance user experience with animations and feedback</li>
          </ul>

          <hr />

          <h2>2. Enhancing Bootstrap Components with jQuery</h2>

          <h3>Example 1 – Toggle a Bootstrap Alert</h3>

          <pre style={codeBlockStyle}>
            <code>{`<div id="successAlert" class="alert alert-success alert-dismissible fade" role="alert">
  <strong>Success!</strong> Your message has been sent.
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>

<button id="showAlertBtn" class="btn btn-primary">Show Alert</button>

<script>
  $(function() {
    $("#showAlertBtn").click(function() {
      $("#successAlert").addClass("show");
    });
  });
</script>`}</code>
          </pre>

          <h3>Example 2 – Smooth Scroll to Sections</h3>

          <pre style={codeBlockStyle}>
            <code>{`$(".nav-link").click(function(e) {
  e.preventDefault();
  let target = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(target).offset().top - 70
  }, 600);
});`}</code>
          </pre>

          <h3>Example 3 – Dynamic Card Filtering</h3>

          <pre style={codeBlockStyle}>
            <code>{`// HTML: cards with data-category attribute
// <div class="card" data-category="web">...</div>

$(".filter-btn").click(function() {
  let category = $(this).data("filter");

  if (category === "all") {
    $(".card").fadeIn(400);
  } else {
    $(".card").hide();
    $('.card[data-category="' + category + '"]').fadeIn(400);
  }

  $(".filter-btn").removeClass("active");
  $(this).addClass("active");
});`}</code>
          </pre>

          <hr />

          <h2>3. Form Validation with jQuery + Bootstrap</h2>

          <p>
            Bootstrap provides nice form styles. jQuery can add real-time validation.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<form id="contactForm" class="needs-validation" novalidate>
  <div class="mb-3">
    <label class="form-label">Name</label>
    <input type="text" class="form-control" id="name" required>
    <div class="invalid-feedback">Please enter your name.</div>
  </div>

  <div class="mb-3">
    <label class="form-label">Email</label>
    <input type="email" class="form-control" id="email" required>
    <div class="invalid-feedback">Please enter a valid email.</div>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<script>
  $(function() {
    $("#contactForm").on("submit", function(e) {
      e.preventDefault();

      let isValid = true;

      // Name validation
      if ($("#name").val().trim() === "") {
        $("#name").addClass("is-invalid");
        isValid = false;
      } else {
        $("#name").removeClass("is-invalid").addClass("is-valid");
      }

      // Email validation
      let email = $("#email").val().trim();
      let emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      if (!emailPattern.test(email)) {
        $("#email").addClass("is-invalid");
        isValid = false;
      } else {
        $("#email").removeClass("is-invalid").addClass("is-valid");
      }

      if (isValid) {
        alert("Form submitted successfully!");
        this.reset();
        $(".is-valid").removeClass("is-valid");
      }
    });
  });
</script>`}</code>
          </pre>

          <hr />

          <h2>4. Working with Bootstrap Modals using jQuery</h2>

          <pre style={codeBlockStyle}>
            <code>{`<!-- Button trigger -->
<button class="btn btn-primary" id="openModalBtn">Open Modal</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        This modal was opened with jQuery!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<script>
  $(function() {
    $("#openModalBtn").click(function() {
      let myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
      myModal.show();
    });
  });
</script>`}</code>
          </pre>

          <hr />

          <h2>5. Integrating Third-Party jQuery Plugins</h2>

          <p>
            Many jQuery plugins work perfectly with Bootstrap.
          </p>

          <h3>General Integration Steps</h3>

          <ol>
            <li>Include jQuery</li>
            <li>Include Bootstrap CSS &amp; JS</li>
            <li>Include the plugin CSS (if required)</li>
            <li>Include the plugin JavaScript</li>
            <li>Initialize the plugin inside <code>$(document).ready()</code></li>
          </ol>

          <h3>Example – Using a Simple Lightbox Plugin Idea</h3>

          <pre style={codeBlockStyle}>
            <code>{`// When an image with class "gallery-img" is clicked
$(".gallery-img").click(function() {
  let src = $(this).attr("src");
  $("#lightboxImage").attr("src", src);
  let lightbox = new bootstrap.Modal(document.getElementById("lightboxModal"));
  lightbox.show();
});`}</code>
          </pre>

          <hr />

          <h2>6. Best Practices When Combining Bootstrap + jQuery</h2>

          <ul>
            <li>Always load jQuery <strong>before</strong> Bootstrap’s JavaScript</li>
            <li>Prefer Bootstrap’s built-in JavaScript components (Modal, Collapse, Tab) when possible</li>
            <li>Use jQuery mainly for custom logic, animations, and DOM updates</li>
            <li>Keep your custom JavaScript in a separate file</li>
            <li>Avoid mixing too many plugins — they can conflict</li>
            <li>Test thoroughly on mobile devices</li>
            <li>Use event delegation (<code>$(document).on("click", ".selector", ...)</code>) when elements are added dynamically</li>
          </ul>

          <hr />

          <h2>7. Complete Practical Example – Interactive Product Filter Page</h2>

          <pre style={codeBlockStyle}>
            <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Filter - Bootstrap + jQuery</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <span class="navbar-brand">My Shop</span>
    </div>
  </nav>

  <div class="container my-5">
    <h2 class="mb-4">Our Products</h2>

    <!-- Filter Buttons -->
    <div class="mb-4">
      <button class="btn btn-outline-primary filter-btn active" data-filter="all">All</button>
      <button class="btn btn-outline-primary filter-btn" data-filter="electronics">Electronics</button>
      <button class="btn btn-outline-primary filter-btn" data-filter="fashion">Fashion</button>
      <button class="btn btn-outline-primary filter-btn" data-filter="home">Home</button>
    </div>

    <!-- Product Cards -->
    <div class="row g-4" id="productContainer">
      <div class="col-md-4 product-card" data-category="electronics">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Wireless Headphones</h5>
            <p class="card-text">High quality sound.</p>
            <button class="btn btn-sm btn-primary add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="col-md-4 product-card" data-category="fashion">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Casual T-Shirt</h5>
            <p class="card-text">Comfortable cotton.</p>
            <button class="btn btn-sm btn-primary add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="col-md-4 product-card" data-category="home">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Table Lamp</h5>
            <p class="card-text">Modern design.</p>
            <button class="btn btn-sm btn-primary add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>

      <div class="col-md-4 product-card" data-category="electronics">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">Smart Watch</h5>
            <p class="card-text">Track your fitness.</p>
            <button class="btn btn-sm btn-primary add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Toast Notification -->
  <div class="position-fixed bottom-0 end-0 p-3">
    <div id="cartToast" class="toast align-items-center text-bg-success border-0">
      <div class="d-flex">
        <div class="toast-body">Item added to cart!</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script>
    $(function() {

      // Filter products
      $(".filter-btn").click(function() {
        let filter = $(this).data("filter");

        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        if (filter === "all") {
          $(".product-card").fadeIn(300);
        } else {
          $(".product-card").hide();
          $('.product-card[data-category="' + filter + '"]').fadeIn(300);
        }
      });

      // Add to cart toast
      $(".add-to-cart").click(function() {
        let toast = new bootstrap.Toast(document.getElementById("cartToast"));
        toast.show();
      });

    });
  </script>
</body>
</html>`}</code>
          </pre>

          <hr />

          <h2>8. Final Project Guidelines</h2>

          <p>
            For your final project, create a complete multi-page or single-page website that includes:
          </p>

          <ul>
            <li>Responsive Bootstrap layout (navbar, grid, cards, forms, footer)</li>
            <li>At least 3 interactive features powered by jQuery (filter, modal, form validation, animation, etc.)</li>
            <li>Clean and organized code</li>
            <li>Mobile-friendly design</li>
          </ul>

          <p>
            Suggested project ideas:
          </p>

          <ul>
            <li>Personal Portfolio</li>
            <li>Product Catalog with Filter</li>
            <li>Restaurant Menu + Reservation Form</li>
            <li>Simple Blog / News Listing</li>
            <li>Event Landing Page with Registration</li>
          </ul>

          <hr />

          <h2>Session 06 Exercise</h2>

          <p><strong>Task 1 – Alert + Button</strong></p>
          <ol>
            <li>Create a Bootstrap alert that is hidden by default.</li>
            <li>When a button is clicked, the alert should fade in.</li>
          </ol>

          <p><strong>Task 2 – Form Validation</strong></p>
          <ol>
            <li>Create a contact form with Name, Email, and Message fields.</li>
            <li>Use jQuery to validate that all fields are filled and email is in correct format.</li>
            <li>Show Bootstrap validation styles (<code>is-valid</code> / <code>is-invalid</code>).</li>
          </ol>

          <p><strong>Task 3 – Filterable Cards</strong></p>
          <ol>
            <li>Create 6 Bootstrap cards with different categories.</li>
            <li>Add filter buttons (All, Category A, Category B…).</li>
            <li>Use jQuery to show/hide cards with a fade effect.</li>
          </ol>

          <p><strong>Task 4 – Modal Interaction</strong></p>
          <ol>
            <li>Create a Bootstrap modal.</li>
            <li>Open the modal using a jQuery click event (not only the data-bs attributes).</li>
          </ol>

          <hr />

          <h2>Challenge – Mini Project</h2>

          <p>
            Build a complete single-page website that contains:
          </p>

          <ul>
            <li>Responsive navbar with smooth scroll</li>
            <li>Hero section</li>
            <li>Filterable product / service cards</li>
            <li>Contact form with jQuery validation</li>
            <li>A working Bootstrap modal (e.g. “Quick View” or “Thank You” message)</li>
            <li>Toast notification when a button is clicked</li>
          </ul>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>In what order should you load jQuery and Bootstrap JavaScript files?</li>
            <li>How can you open a Bootstrap modal using jQuery?</li>
            <li>What Bootstrap classes are used for form validation feedback?</li>
            <li>Why is event delegation useful when working with dynamic content?</li>
            <li>Name two benefits of combining Bootstrap and jQuery.</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this final session you learned:
          </p>

          <ul>
            <li>How to enhance Bootstrap components with jQuery events and animations</li>
            <li>How to perform client-side form validation using jQuery + Bootstrap styles</li>
            <li>How to control Bootstrap modals programmatically</li>
            <li>How to integrate third-party plugins</li>
            <li>Best practices when using both libraries together</li>
            <li>How to build a complete interactive page (product filter example)</li>
          </ul>

          <p>
            Congratulations! You have completed the <strong>Bootstrap &amp; jQuery Course</strong>.
            You now have the skills to create modern, responsive, and interactive websites.
          </p>

          <p>
            Keep practicing by building small projects and exploring the official documentation
            of both Bootstrap and jQuery.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
