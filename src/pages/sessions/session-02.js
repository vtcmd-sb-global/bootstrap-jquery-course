import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session02() {
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
      title="Session 02 — Building Blocks with Bootstrap Components"
      description="Building Blocks with Bootstrap Components — Buttons, Cards, Navbar, Forms, Alerts, Badges, and more"
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

          <h1>Session 02 — Building Blocks with Bootstrap Components</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Learning how to use Bootstrap’s ready-made components
            such as buttons, cards, navigation bars, forms, alerts, badges, and more
            to build modern and responsive user interfaces.
          </p>

          <p>
            <strong>Practical Environment:</strong> VS Code + Browser (Chrome / Edge / Firefox)
          </p>

          <p>
            <strong>Follows Book:</strong> From Book – Session 2 (Building Blocks with Bootstrap Components)
          </p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Explain the implementation of basic Bootstrap components</li>
            <li>List and explain different Bootstrap navigation components and their use cases</li>
            <li>Explain the process to integrate content and media objects using Bootstrap classes</li>
            <li>List steps for designing a responsive Web page with basic Bootstrap components</li>
          </ul>

          <hr />

          <h2>1. Introduction to Bootstrap Components</h2>

          <p>
            Bootstrap is a well-known front-end framework that offers a variety of
            pre-designed components to streamline the Web development process.
          </p>

          <p>
            These components are made with HTML, CSS, and a little JavaScript.
            They help developers create modern, responsive, and visually appealing
            user interfaces quickly.
          </p>

          <p>
            Common Bootstrap components include:
          </p>

          <ul>
            <li>Buttons</li>
            <li>Cards</li>
            <li>Navigation bars (Navbar)</li>
            <li>Forms</li>
            <li>Alerts &amp; Badges</li>
            <li>Typography helpers</li>
            <li>Media objects</li>
            <li>Tables</li>
          </ul>

          <hr />

          <h2>2. Buttons</h2>

          <p>
            Buttons are one of the most frequently used components.
            Bootstrap provides many ready-made button styles.
          </p>

          <h3>Basic Buttons</h3>

          <pre style={codeBlockStyle}>
            <code>{`<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-link">Link</button>`}</code>
          </pre>

          <h3>Outline Buttons</h3>

          <pre style={codeBlockStyle}>
            <code>{`<button class="btn btn-outline-primary">Primary</button>
<button class="btn btn-outline-success">Success</button>
<button class="btn btn-outline-danger">Danger</button>`}</code>
          </pre>

          <h3>Button Sizes</h3>

          <pre style={codeBlockStyle}>
            <code>{`<button class="btn btn-primary btn-lg">Large button</button>
<button class="btn btn-primary">Default button</button>
<button class="btn btn-primary btn-sm">Small button</button>`}</code>
          </pre>

          <h3>Disabled Buttons</h3>

          <pre style={codeBlockStyle}>
            <code>{`<button class="btn btn-primary" disabled>Disabled button</button>
<a href="#" class="btn btn-secondary disabled">Disabled link</a>`}</code>
          </pre>

          <hr />

          <h2>3. Cards</h2>

          <p>
            Cards are flexible content containers. They are perfect for displaying
            product information, blog posts, user profiles, etc.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<div class="card" style="width: 18rem;">
  <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`}</code>
          </pre>

          <h3>Card with Header and Footer</h3>

          <pre style={codeBlockStyle}>
            <code>{`<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>`}</code>
          </pre>

          <hr />

          <h2>4. Navigation Components</h2>

          <h3>Navbar (Navigation Bar)</h3>

          <p>
            The navbar is one of the most important components for any website.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MyWebsite</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`}</code>
          </pre>

          <h3>Navs and Tabs</h3>

          <pre style={codeBlockStyle}>
            <code>{`<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>`}</code>
          </pre>

          <hr />

          <h2>5. Forms</h2>

          <p>
            Bootstrap makes form styling very easy and consistent.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1">
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>`}</code>
          </pre>

          <h3>Form Controls – Select &amp; Textarea</h3>

          <pre style={codeBlockStyle}>
            <code>{`<select class="form-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<textarea class="form-control" rows="3" placeholder="Leave a comment here"></textarea>`}</code>
          </pre>

          <hr />

          <h2>6. Alerts, Badges and Typography</h2>

          <h3>Alerts</h3>

          <pre style={codeBlockStyle}>
            <code>{`<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>`}</code>
          </pre>

          <h3>Badges</h3>

          <pre style={codeBlockStyle}>
            <code>{`<h1>Example heading <span class="badge bg-secondary">New</span></h1>
<button type="button" class="btn btn-primary">
  Notifications <span class="badge text-bg-secondary">4</span>
</button>`}</code>
          </pre>

          <h3>Useful Typography Classes</h3>

          <pre style={codeBlockStyle}>
            <code>{`<p class="lead">This is a lead paragraph. It stands out.</p>
<p class="text-muted">Muted text</p>
<p class="fw-bold">Bold text</p>
<p class="fst-italic">Italic text</p>
<p class="text-center">Centered text</p>
<p class="text-uppercase">Uppercase text</p>`}</code>
          </pre>

          <hr />

          <h2>7. Media Objects &amp; Images</h2>

          <p>
            Bootstrap provides helpful classes for images and media.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<!-- Responsive image -->
<img src="..." class="img-fluid" alt="Responsive image">

<!-- Rounded image -->
<img src="..." class="rounded" alt="...">

<!-- Circle image -->
<img src="..." class="rounded-circle" alt="...">

<!-- Thumbnail -->
<img src="..." class="img-thumbnail" alt="...">`}</code>
          </pre>

          <hr />

          <h2>8. Practical Example – Simple Product Page Section</h2>

          <p>
            Let’s combine several components to create a small product section.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<div class="container my-5">
  <h2 class="text-center mb-4">Our Products</h2>

  <div class="row g-4">
    <!-- Product 1 -->
    <div class="col-md-4">
      <div class="card h-100">
        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Product 1">
        <div class="card-body">
          <h5 class="card-title">Wireless Headphones</h5>
          <p class="card-text">High quality sound with noise cancellation.</p>
          <span class="badge bg-success mb-2">In Stock</span>
          <div class="d-grid">
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Product 2 -->
    <div class="col-md-4">
      <div class="card h-100">
        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Product 2">
        <div class="card-body">
          <h5 class="card-title">Smart Watch</h5>
          <p class="card-text">Track your fitness and stay connected.</p>
          <span class="badge bg-warning text-dark mb-2">Limited</span>
          <div class="d-grid">
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Product 3 -->
    <div class="col-md-4">
      <div class="card h-100">
        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Product 3">
        <div class="card-body">
          <h5 class="card-title">Bluetooth Speaker</h5>
          <p class="card-text">Portable speaker with powerful bass.</p>
          <span class="badge bg-danger mb-2">Sold Out</span>
          <div class="d-grid">
            <button class="btn btn-secondary" disabled>Out of Stock</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}</code>
          </pre>

          <hr />

          <h2>9. Best Practices</h2>

          <ul>
            <li>Always use the official Bootstrap documentation while learning components</li>
            <li>Prefer utility classes (<code>mb-3</code>, <code>text-center</code>, <code>d-grid</code>) instead of writing custom CSS</li>
            <li>Use <code>container</code> or <code>container-fluid</code> to control layout width</li>
            <li>Test the responsive behavior of every component on mobile and desktop</li>
            <li>Keep the HTML clean and well-indented</li>
          </ul>

          <hr />

          <h2>Session 02 Exercise</h2>

          <p><strong>Task 1 – Buttons Practice</strong></p>
          <ol>
            <li>Create a page that shows all button colors (primary, success, danger, etc.).</li>
            <li>Also show outline and different sizes of buttons.</li>
          </ol>

          <p><strong>Task 2 – Card Gallery</strong></p>
          <ol>
            <li>Create 3 cards side by side (use the grid system).</li>
            <li>Each card should have an image, title, short text, badge, and a button.</li>
          </ol>

          <p><strong>Task 3 – Navbar + Form</strong></p>
          <ol>
            <li>Create a responsive dark navbar with logo and 4 menu items.</li>
            <li>Below the navbar, create a simple contact form using Bootstrap form classes.</li>
          </ol>

          <p><strong>Task 4 – Alert Messages</strong></p>
          <ol>
            <li>Show success, warning, and danger alerts on the same page.</li>
          </ol>

          <hr />

          <h2>Challenge</h2>

          <p>
            Build a complete mini landing page that includes:
          </p>

          <ul>
            <li>A responsive Navbar</li>
            <li>A hero section with heading + button</li>
            <li>A section with 3 product cards</li>
            <li>A simple contact form</li>
            <li>A footer with copyright text</li>
          </ul>

          <p>
            Use only Bootstrap classes (no custom CSS if possible).
          </p>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>Which class is used to create a primary button?</li>
            <li>What is the main purpose of a Bootstrap Card?</li>
            <li>Which class makes an image responsive?</li>
            <li>How do you create an outline button?</li>
            <li>Name three navigation-related components in Bootstrap.</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this session you learned:
          </p>

          <ul>
            <li>How to use Bootstrap buttons (solid, outline, sizes, disabled)</li>
            <li>How to create and style Cards</li>
            <li>How to build a responsive Navbar</li>
            <li>How to style Forms using Bootstrap classes</li>
            <li>How to use Alerts, Badges, and Typography helpers</li>
            <li>How to combine multiple components to create a real UI section</li>
          </ul>

          <p>
            In the next session we will start learning <strong>jQuery</strong> —
            the popular JavaScript library that makes DOM manipulation and event handling much easier.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
