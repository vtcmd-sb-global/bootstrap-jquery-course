import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session05() {
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
      title="Session 05 — Designing Responsive Web Pages"
      description="Designing Responsive Web Pages — Responsive Principles, Bootstrap Utilities, Grid System, and Media"
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

          <h1>Session 05 — Designing Responsive Web Pages</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Understanding responsive design principles and applying
            Bootstrap’s responsive utilities, grid system, and media techniques to create
            layouts that work well on all devices.
          </p>

          <p>
            <strong>Practical Environment:</strong> VS Code + Browser DevTools (Device Toolbar)
          </p>

          <p>
            <strong>Follows Book:</strong> From Book – Session 5 (Designing Responsive Web Pages)
          </p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>List responsive design principles</li>
            <li>Explain the process of applying Bootstrap’s responsive utilities</li>
            <li>Describe the implementation of grid systems to create responsive layouts</li>
            <li>Explain methods to integrate responsive media for optimal viewing</li>
          </ul>

          <hr />

          <h2>1. Responsive Design Principles</h2>

          <p>
            Responsive Web design ensures that websites adapt to various devices —
            mobile phones, tablets, laptops, and large desktops — with different screen
            sizes, browsers, and operating systems.
          </p>

          <p>
            Instead of creating separate websites for mobile and desktop, we create
            <strong>one flexible layout</strong> that responds to the screen size.
          </p>

          <h3>Core Principles</h3>

          <ul>
            <li><strong>Fluid Grids</strong> — Use relative units (%, fr, etc.) instead of fixed pixels</li>
            <li><strong>Flexible Images</strong> — Images should scale within their containers</li>
            <li><strong>Media Queries</strong> — Apply different CSS rules based on screen width</li>
            <li><strong>Mobile-First Approach</strong> — Design for mobile first, then enhance for larger screens</li>
          </ul>

          <h3>Why Responsive Design Matters</h3>

          <ul>
            <li>Better user experience on every device</li>
            <li>Improved SEO (Google prefers mobile-friendly sites)</li>
            <li>One codebase instead of multiple versions</li>
            <li>Higher engagement and lower bounce rate</li>
          </ul>

          <hr />

          <h2>2. Bootstrap Responsive Breakpoints (Recap)</h2>

          <p>
            Bootstrap uses these standard breakpoints:
          </p>

          <table>
            <thead>
              <tr>
                <th>Breakpoint</th>
                <th>Class Infix</th>
                <th>Minimum Width</th>
                <th>Typical Device</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Extra small</td>
                <td><code>none</code> / <code>col-</code></td>
                <td>&lt; 576px</td>
                <td>Mobile phones</td>
              </tr>
              <tr>
                <td>Small</td>
                <td><code>sm</code></td>
                <td>≥ 576px</td>
                <td>Large phones</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td><code>md</code></td>
                <td>≥ 768px</td>
                <td>Tablets</td>
              </tr>
              <tr>
                <td>Large</td>
                <td><code>lg</code></td>
                <td>≥ 992px</td>
                <td>Laptops</td>
              </tr>
              <tr>
                <td>Extra large</td>
                <td><code>xl</code></td>
                <td>≥ 1200px</td>
                <td>Desktops</td>
              </tr>
              <tr>
                <td>XXL</td>
                <td><code>xxl</code></td>
                <td>≥ 1400px</td>
                <td>Large desktops</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>3. Responsive Grid System in Practice</h2>

          <p>
            The most powerful tool for responsive layouts is the combination of
            different column classes.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<!-- Mobile: full width | Tablet: half | Desktop: one-third -->
<div class="container">
  <div class="row g-4">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-3 border bg-light">Column 1</div>
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <div class="p-3 border bg-light">Column 2</div>
    </div>
    <div class="col-12 col-md-12 col-lg-4">
      <div class="p-3 border bg-light">Column 3</div>
    </div>
  </div>
</div>`}</code>
          </pre>

          <h3>Common Responsive Patterns</h3>

          <pre style={codeBlockStyle}>
            <code>{`<!-- 1 column on mobile, 2 on tablet, 4 on desktop -->
<div class="col-12 col-md-6 col-lg-3">...</div>

<!-- 1 column on mobile, 3 on tablet+ -->
<div class="col-12 col-md-4">...</div>

<!-- Sidebar + Main content -->
<div class="col-12 col-lg-8">Main Content</div>
<div class="col-12 col-lg-4">Sidebar</div>`}</code>
          </pre>

          <hr />

          <h2>4. Bootstrap Responsive Utilities</h2>

          <h3>Display Utilities</h3>

          <p>
            Control visibility of elements at different breakpoints.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<!-- Hide on mobile, show from medium and up -->
<div class="d-none d-md-block">Visible on tablet and desktop</div>

<!-- Show only on mobile -->
<div class="d-block d-md-none">Visible only on mobile</div>

<!-- Hide on large screens -->
<div class="d-lg-none">Hidden on large desktops</div>`}</code>
          </pre>

          <h3>Flexbox &amp; Spacing Utilities</h3>

          <pre style={codeBlockStyle}>
            <code>{`<!-- Responsive flex direction -->
<div class="d-flex flex-column flex-md-row">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Responsive margin / padding -->
<div class="mt-3 mt-md-5 mb-2 mb-lg-4 p-2 p-md-4">
  Content with responsive spacing
</div>`}</code>
          </pre>

          <h3>Text Alignment</h3>

          <pre style={codeBlockStyle}>
            <code>{`<p class="text-center text-md-start text-lg-end">
  Centered on mobile, left on tablet, right on desktop
</p>`}</code>
          </pre>

          <hr />

          <h2>5. Responsive Images and Media</h2>

          <h3>Responsive Images</h3>

          <pre style={codeBlockStyle}>
            <code>{`<!-- Always use img-fluid for responsive images -->
<img src="photo.jpg" class="img-fluid" alt="Description">

<!-- Image with rounded corners -->
<img src="photo.jpg" class="img-fluid rounded" alt="...">

<!-- Thumbnail style -->
<img src="photo.jpg" class="img-thumbnail" alt="...">`}</code>
          </pre>

          <h3>Responsive Embeds (Videos / Maps)</h3>

          <pre style={codeBlockStyle}>
            <code>{`<div class="ratio ratio-16x9">
  <iframe 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    title="YouTube video" 
    allowfullscreen>
  </iframe>
</div>

<!-- Other ratios available -->
<!-- ratio-1x1, ratio-4x3, ratio-21x9 -->`}</code>
          </pre>

          <h3>Picture Element (Art Direction)</h3>

          <pre style={codeBlockStyle}>
            <code>{`<picture>
  <source media="(min-width: 992px)" srcset="large.jpg">
  <source media="(min-width: 768px)" srcset="medium.jpg">
  <img src="small.jpg" class="img-fluid" alt="Responsive image">
</picture>`}</code>
          </pre>

          <hr />

          <h2>6. Mobile-First Navbar (Advanced)</h2>

          <p>
            A good responsive navbar collapses into a hamburger menu on small screens.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div class="container">
    <a class="navbar-brand" href="#">BrandName</a>

    <button class="navbar-toggler" type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#mainNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNavbar">
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

          <hr />

          <h2>7. Practical Example – Responsive Landing Section</h2>

          <pre style={codeBlockStyle}>
            <code>{`<div class="container my-5">
  <div class="row align-items-center">
    
    <!-- Text Content -->
    <div class="col-12 col-lg-6 mb-4 mb-lg-0 order-2 order-lg-1">
      <h1 class="display-5 fw-bold">Build Beautiful Responsive Websites</h1>
      <p class="lead text-muted">
        Learn how to create modern layouts that look great on every device
        using Bootstrap’s powerful grid and utility classes.
      </p>
      <div class="d-grid gap-2 d-md-flex justify-content-md-start">
        <button class="btn btn-primary btn-lg px-4">Get Started</button>
        <button class="btn btn-outline-secondary btn-lg px-4">Learn More</button>
      </div>
    </div>

    <!-- Image -->
    <div class="col-12 col-lg-6 order-1 order-lg-2">
      <img src="https://via.placeholder.com/600x400" 
           class="img-fluid rounded shadow" 
           alt="Hero image">
    </div>

  </div>
</div>`}</code>
          </pre>

          <hr />

          <h2>8. Testing Responsive Designs</h2>

          <p>
            Always test your pages using browser Developer Tools:
          </p>

          <ul>
            <li>Open DevTools → Toggle Device Toolbar (Ctrl + Shift + M)</li>
            <li>Test common sizes: 375px (iPhone), 768px (iPad), 1280px (Laptop)</li>
            <li>Check both portrait and landscape orientations</li>
            <li>Verify that text remains readable and buttons are easy to tap</li>
          </ul>

          <hr />

          <h2>9. Best Practices</h2>

          <ul>
            <li>Always start with the mobile layout first (mobile-first)</li>
            <li>Use <code>col-12</code> as the base and then add larger breakpoints</li>
            <li>Prefer Bootstrap utility classes over custom media queries when possible</li>
            <li>Make sure touch targets (buttons/links) are large enough on mobile (≥ 44px)</li>
            <li>Test real devices whenever possible, not only the emulator</li>
            <li>Use <code>img-fluid</code> on almost every image</li>
          </ul>

          <hr />

          <h2>Session 05 Exercise</h2>

          <p><strong>Task 1 – Responsive Grid</strong></p>
          <ol>
            <li>Create a row with 4 boxes.</li>
            <li>On mobile → 1 column</li>
            <li>On tablet → 2 columns</li>
            <li>On desktop → 4 columns</li>
          </ol>

          <p><strong>Task 2 – Show / Hide Elements</strong></p>
          <ol>
            <li>Create two different banners.</li>
            <li>One should be visible only on mobile.</li>
            <li>The other should be visible only on tablet and desktop.</li>
          </ol>

          <p><strong>Task 3 – Responsive Hero Section</strong></p>
          <ol>
            <li>Build a hero section with text on one side and an image on the other.</li>
            <li>On mobile the image should appear on top of the text.</li>
            <li>On desktop the text should be on the left and image on the right.</li>
          </ol>

          <p><strong>Task 4 – Responsive Video</strong></p>
          <ol>
            <li>Embed a YouTube video using Bootstrap’s <code>ratio</code> class so it scales correctly on all devices.</li>
          </ol>

          <hr />

          <h2>Challenge</h2>

          <p>
            Create a complete responsive multi-section page that includes:
          </p>

          <ul>
            <li>A sticky responsive navbar</li>
            <li>A hero section (text + image that reorders on mobile)</li>
            <li>A features section with 3 or 4 cards that change columns based on screen size</li>
            <li>A responsive video section</li>
            <li>A simple footer</li>
          </ul>

          <p>
            Test the page thoroughly at 375px, 768px, and 1200px widths.
          </p>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>What does “mobile-first” mean?</li>
            <li>Which class makes an image scale with its parent container?</li>
            <li>How do you hide an element on medium screens and larger?</li>
            <li>What is the purpose of the <code>ratio</code> class in Bootstrap?</li>
            <li>Name three Bootstrap breakpoints.</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this session you learned:
          </p>

          <ul>
            <li>The core principles of responsive web design</li>
            <li>How to use Bootstrap’s responsive grid classes effectively</li>
            <li>Display, flex, spacing, and text utilities for different screen sizes</li>
            <li>How to make images and videos responsive</li>
            <li>How to build a mobile-friendly navbar and hero section</li>
            <li>Best practices for testing responsive layouts</li>
          </ul>

          <p>
            In the final session we will combine everything you have learned —
            Bootstrap components + jQuery interactivity — to build richer,
            more dynamic web pages.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
