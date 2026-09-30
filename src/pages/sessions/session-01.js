import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session01() {
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

  const inlineCodeStyle = {
    backgroundColor: '#f4f4f4',
    color: '#d10057',
    padding: '2px 6px',
    borderRadius: '4px',
    fontFamily: 'Consolas, Monaco, monospace',
    fontSize: '0.9em'
  };

  return (
    <Layout
      title="Session 01 — Fundamentals of Bootstrap"
      description="Fundamentals of Bootstrap — History, Benefits, Setup, Grid System, Containers, Rows, Columns, and Responsive Layouts"
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

          <h1>Session 01 — Fundamentals of Bootstrap</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Understanding Bootstrap history, benefits, setup methods,
            and mastering the Bootstrap grid system to create responsive layouts.
          </p>

          <p>
            <strong>Practical Environment:</strong> Any modern code editor (VS Code recommended)
            + Browser (Chrome / Edge / Firefox)
          </p>

          <p>
            <strong>Follows Book:</strong> From Book – Session 1 (Fundamentals of Bootstrap)
          </p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Explain the history and benefits of Bootstrap</li>
            <li>Elaborate on setup and configuration for using Bootstrap</li>
            <li>List steps to create a basic Bootstrap page</li>
            <li>Define and describe the Bootstrap grid system</li>
            <li>Illustrate responsive layouts with nested columns and order classes</li>
          </ul>

          <hr />

          <h2>1. Introduction to Bootstrap</h2>

          <p>
            <strong>Bootstrap</strong> is a widely used open-source front-end framework designed for
            developing responsive and mobile-first websites and web applications.
          </p>

          <p>
            It provides a robust collection of CSS and JavaScript tools that help developers create
            modern, visually appealing, and user-friendly interfaces quickly.
          </p>

          <p>
            Bootstrap simplifies the development process by offering pre-designed components and a
            flexible grid system, enabling developers to focus on creating high-quality, interactive
            web experiences.
          </p>

          <h3>Why Bootstrap is Popular</h3>

          <ul>
            <li>Mobile-first approach by default</li>
            <li>Consistent design across browsers</li>
            <li>Large community and excellent documentation</li>
            <li>Ready-to-use components (buttons, cards, navbars, forms, etc.)</li>
            <li>Powerful and flexible 12-column grid system</li>
          </ul>

          <hr />

          <h2>2. History and Benefits of Bootstrap</h2>

          <h3>Brief History</h3>

          <p>
            Bootstrap was originally created by Twitter developers <strong>Mark Otto</strong> and
            <strong>Jacob Thornton</strong> in 2010. It was open-sourced in 2011 and quickly became
            one of the most popular front-end frameworks in the world.
          </p>

          <p>
            The current major version is <strong>Bootstrap 5</strong> (released in 2021). Bootstrap 5
            removed the dependency on jQuery and improved the grid system, utilities, and form controls.
          </p>

          <h3>Key Benefits</h3>

          <table>
            <thead>
              <tr>
                <th>Benefit</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Responsive by default</td>
                <td>Layouts adapt automatically to different screen sizes</td>
              </tr>
              <tr>
                <td>Mobile-first</td>
                <td>Designed first for mobile devices, then enhanced for larger screens</td>
              </tr>
              <tr>
                <td>Consistent styling</td>
                <td>Uniform look and feel across browsers and devices</td>
              </tr>
              <tr>
                <td>Rapid development</td>
                <td>Pre-built components reduce coding time significantly</td>
              </tr>
              <tr>
                <td>Customizable</td>
                <td>Easy to override styles using CSS variables or Sass</td>
              </tr>
              <tr>
                <td>Community support</td>
                <td>Huge ecosystem of themes, templates, and plugins</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>3. Setting Up Bootstrap</h2>

          <p>
            There are three common ways to include Bootstrap in your project.
          </p>

          <h3>Method 1: Using CDN (Recommended for Beginners)</h3>

          <p>
            The fastest way to start is by linking Bootstrap from a Content Delivery Network (CDN).
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Bootstrap Page</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <h1 class="text-center mt-5">Hello Bootstrap!</h1>

  <!-- Bootstrap JS Bundle (includes Popper) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}</code>
          </pre>

          <h3>Method 2: Local Installation (Download)</h3>

          <p>
            Download the compiled CSS and JS files from the official website and place them in your project folder.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<!-- Local CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<!-- Local JS -->
<script src="js/bootstrap.bundle.min.js"></script>`}</code>
          </pre>

          <h3>Method 3: Using npm / yarn (for modern projects)</h3>

          <pre style={codeBlockStyle}>
            <code>{`npm install bootstrap
# or
yarn add bootstrap`}</code>
          </pre>

          <p>
            Then import it in your main CSS or JS file:
          </p>

          <pre style={codeBlockStyle}>
            <code>{`// In your main JS file
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';`}</code>
          </pre>

          <hr />

          <h2>4. Creating a Basic Bootstrap Page</h2>

          <p>
            Every Bootstrap page should follow this basic structure:
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Bootstrap Page</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <div class="container">
    <h1 class="mt-4">Welcome to Bootstrap</h1>
    <p class="lead">This is a simple responsive page.</p>
    <button class="btn btn-primary">Click Me</button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}</code>
          </pre>

          <h3>Important Meta Tag</h3>

          <p>
            Always include the viewport meta tag. Without it, Bootstrap’s responsive features will not work properly on mobile devices.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</code>
          </pre>

          <hr />

          <h2>5. Understanding the Bootstrap Grid System</h2>

          <p>
            The Bootstrap grid system is the foundation of almost every layout you will create.
            It is based on a <strong>12-column</strong> system.
          </p>

          <h3>Core Concepts</h3>

          <ul>
            <li><strong>Container</strong> – wraps the entire layout</li>
            <li><strong>Row</strong> – creates a horizontal group of columns</li>
            <li><strong>Column</strong> – the actual content areas (col-*)</li>
          </ul>

          <h3>Basic Grid Structure</h3>

          <pre style={codeBlockStyle}>
            <code>{`<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
</div>`}</code>
          </pre>

          <p>
            The three columns above will each take equal width (4 units out of 12).
          </p>

          <hr />

          <h2>6. Containers, Rows, and Columns in Detail</h2>

          <h3>Containers</h3>

          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>container</code></td>
                <td>Fixed-width responsive container (has max-width at each breakpoint)</td>
              </tr>
              <tr>
                <td><code>container-fluid</code></td>
                <td>Full-width container that spans the entire viewport</td>
              </tr>
              <tr>
                <td><code>container-sm</code> / <code>container-md</code> etc.</td>
                <td>Responsive containers that become fixed at specific breakpoints</td>
              </tr>
            </tbody>
          </table>

          <h3>Rows</h3>

          <p>
            A <code>row</code> is a horizontal group of columns. Rows must be placed inside a container.
            Columns must be direct children of a row.
          </p>

          <h3>Columns</h3>

          <p>
            You can specify column widths using numbers from 1 to 12.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<div class="container">
  <div class="row">
    <div class="col-8">This column takes 8 units</div>
    <div class="col-4">This column takes 4 units</div>
  </div>
</div>`}</code>
          </pre>

          <hr />

          <h2>7. Responsive Breakpoints</h2>

          <p>
            Bootstrap uses the following breakpoints:
          </p>

          <table>
            <thead>
              <tr>
                <th>Breakpoint</th>
                <th>Class Infix</th>
                <th>Minimum Width</th>
                <th>Device</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Extra small</td>
                <td><code>col-</code></td>
                <td>&lt; 576px</td>
                <td>Mobile phones</td>
              </tr>
              <tr>
                <td>Small</td>
                <td><code>col-sm-</code></td>
                <td>≥ 576px</td>
                <td>Large phones</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td><code>col-md-</code></td>
                <td>≥ 768px</td>
                <td>Tablets</td>
              </tr>
              <tr>
                <td>Large</td>
                <td><code>col-lg-</code></td>
                <td>≥ 992px</td>
                <td>Laptops</td>
              </tr>
              <tr>
                <td>Extra large</td>
                <td><code>col-xl-</code></td>
                <td>≥ 1200px</td>
                <td>Desktops</td>
              </tr>
              <tr>
                <td>XXL</td>
                <td><code>col-xxl-</code></td>
                <td>≥ 1400px</td>
                <td>Large desktops</td>
              </tr>
            </tbody>
          </table>

          <h3>Responsive Example</h3>

          <pre style={codeBlockStyle}>
            <code>{`<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      <!-- Full width on mobile, half on tablet, one-third on desktop -->
      Box 1
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      Box 2
    </div>
    <div class="col-12 col-md-12 col-lg-4">
      Box 3
    </div>
  </div>
</div>`}</code>
          </pre>

          <hr />

          <h2>8. Nested Columns and Ordering</h2>

          <h3>Nested Columns</h3>

          <p>
            You can place a row inside a column to create nested layouts.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<div class="container">
  <div class="row">
    <div class="col-md-8">
      Main Content
      <div class="row">
        <div class="col-6">Nested 1</div>
        <div class="col-6">Nested 2</div>
      </div>
    </div>
    <div class="col-md-4">
      Sidebar
    </div>
  </div>
</div>`}</code>
          </pre>

          <h3>Column Ordering</h3>

          <p>
            Use order classes to change the visual order of columns without changing the HTML order.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<div class="row">
  <div class="col-md-6 order-md-2">This appears second on medium screens</div>
  <div class="col-md-6 order-md-1">This appears first on medium screens</div>
</div>`}</code>
          </pre>

          <hr />

          <h2>9. Practical Example – Simple Responsive Layout</h2>

          <p>
            Let’s create a simple three-column layout that stacks on mobile and displays side-by-side on larger screens.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Layout Practice</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <div class="container my-5">
    <h2 class="text-center mb-4">Our Services</h2>

    <div class="row g-4">
      <div class="col-12 col-md-4">
        <div class="p-4 border rounded bg-light text-center">
          <h4>Web Design</h4>
          <p>Modern and responsive websites tailored to your brand.</p>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="p-4 border rounded bg-light text-center">
          <h4>Development</h4>
          <p>Clean, efficient code using the latest technologies.</p>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="p-4 border rounded bg-light text-center">
          <h4>Support</h4>
          <p>Ongoing maintenance and technical support.</p>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}</code>
          </pre>

          <hr />

          <h2>10. Best Practices</h2>

          <ul>
            <li>Always start with the viewport meta tag</li>
            <li>Prefer <code>container</code> over <code>container-fluid</code> unless full-width is required</li>
            <li>Use responsive column classes (<code>col-md-</code>, <code>col-lg-</code>) instead of fixed <code>col-</code> only</li>
            <li>Keep the total column numbers ≤ 12 in a single row</li>
            <li>Use the <code>g-*</code> gutter classes (Bootstrap 5) for consistent spacing</li>
            <li>Test your layout on multiple screen sizes using browser DevTools</li>
          </ul>

          <hr />

          <h2>Session 01 Exercise</h2>

          <p><strong>Task 1 – Basic Page Setup</strong></p>
          <ol>
            <li>Create a new HTML file and include Bootstrap 5 using the CDN method.</li>
            <li>Add a heading and a paragraph inside a <code>container</code>.</li>
          </ol>

          <p><strong>Task 2 – Grid Practice</strong></p>
          <ol>
            <li>Create a row with three columns that appear side-by-side on desktop and stacked on mobile.</li>
            <li>Use appropriate responsive classes (<code>col-12 col-md-4</code>).</li>
          </ol>

          <p><strong>Task 3 – Nested Layout</strong></p>
          <ol>
            <li>Create a two-column layout (main content + sidebar).</li>
            <li>Inside the main content column, create another nested row with two equal columns.</li>
          </ol>

          <p><strong>Task 4 – Ordering Challenge</strong></p>
          <ol>
            <li>Create two columns. On mobile they should appear in normal order.</li>
            <li>On medium screens and above, reverse their visual order using order classes.</li>
          </ol>

          <hr />

          <h2>Challenge</h2>

          <p>
            Build a simple product showcase page that contains:
          </p>

          <ul>
            <li>A header with the title “Our Products”</li>
            <li>Four product cards arranged in a responsive grid:
              <ul>
                <li>1 column on mobile</li>
                <li>2 columns on tablet</li>
                <li>4 columns on desktop</li>
              </ul>
            </li>
            <li>Each card should have a title, short description, and a “Buy Now” button</li>
          </ul>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>What is the maximum number of columns in the Bootstrap grid system?</li>
            <li>Which class creates a full-width container?</li>
            <li>What does the class <code>col-md-6</code> mean?</li>
            <li>Why is the viewport meta tag important?</li>
            <li>Name three ways to include Bootstrap in a project.</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this session you learned:
          </p>

          <ul>
            <li>What Bootstrap is and why it is widely used</li>
            <li>How to set up Bootstrap using CDN, local files, or npm</li>
            <li>The structure of a basic Bootstrap page</li>
            <li>How the 12-column grid system works</li>
            <li>How to create responsive layouts using breakpoints</li>
            <li>How to nest columns and control order</li>
          </ul>

          <p>
            In the next session we will explore Bootstrap components such as buttons, cards,
            navigation bars, forms, and more.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
