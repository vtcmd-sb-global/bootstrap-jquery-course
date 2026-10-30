import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session01() {
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
            .tip-box {
              background: #f0f7ff;
              border-left: 4px solid #0d6efd;
              padding: 12px 16px;
              margin: 16px 0;
              border-radius: 0 6px 6px 0;
            }
            .warning-box {
              background: #fff8e6;
              border-left: 4px solid #ffc107;
              padding: 12px 16px;
              margin: 16px 0;
              border-radius: 0 6px 6px 0;
            }
            .note-box {
              background: #f8f9fa;
              border-left: 4px solid #6c757d;
              padding: 12px 16px;
              margin: 16px 0;
              border-radius: 0 6px 6px 0;
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
            <li>Explain what Bootstrap is, its history, and why it is widely used</li>
            <li>Set up Bootstrap in a project using CDN, local files, or a package manager</li>
            <li>Create a correct basic Bootstrap page structure (including the required meta tags)</li>
            <li>Describe the 12-column grid system and the roles of containers, rows, and columns</li>
            <li>Build responsive layouts that adapt across mobile, tablet, and desktop breakpoints</li>
            <li>Use nested columns, ordering classes, gutters, and offsets effectively</li>
            <li>Apply best practices and avoid common beginner mistakes with the grid</li>
          </ul>

          <hr />

          <h2>1. Introduction to Bootstrap</h2>

          <p>
            <strong>Bootstrap</strong> is a free, open-source front-end framework that helps you
            build responsive, mobile-first websites quickly. Instead of writing large amounts of
            custom CSS for layout, spacing, typography, buttons, and common UI patterns, you apply
            ready-made CSS classes.
          </p>

          <p>
            Think of Bootstrap as a large toolkit of carefully designed building blocks. You still
            write HTML, but the styling and responsive behavior are largely provided for you.
            This dramatically speeds up development and produces a consistent look across different
            browsers and devices.
          </p>

          <h3>What Bootstrap Provides</h3>

          <ul>
            <li><strong>A powerful grid system</strong> – for creating multi-column layouts that adapt to screen size</li>
            <li><strong>Pre-styled components</strong> – buttons, cards, navbars, forms, modals, alerts, carousels, and many more</li>
            <li><strong>Utility classes</strong> – for spacing, text alignment, colors, display, flexbox helpers, etc.</li>
            <li><strong>JavaScript plugins</strong> – for interactive behavior (dropdowns, modals, tooltips, carousels, etc.)</li>
          </ul>

          <h3>Why Bootstrap Is Popular</h3>

          <ul>
            <li><strong>Mobile-first by default</strong> – styles are written for small screens first and then enhanced for larger screens</li>
            <li><strong>Cross-browser consistency</strong> – the same components look and behave similarly in modern browsers</li>
            <li><strong>Excellent documentation</strong> – clear examples and official guides at getbootstrap.com</li>
            <li><strong>Huge community</strong> – themes, templates, tutorials, and Stack Overflow answers are abundant</li>
            <li><strong>Rapid prototyping</strong> – you can build a clean, professional-looking page in minutes</li>
            <li><strong>Flexible 12-column grid</strong> – the foundation for almost every responsive layout</li>
          </ul>

          <div className="tip-box">
            <strong>Tip for students:</strong> Bootstrap does not replace learning HTML and CSS.
            You still need to understand the structure of a page. Bootstrap simply gives you a
            well-tested set of classes so you spend less time fighting with layout and more time
            building useful interfaces.
          </div>

          <hr />

          <h2>2. History and Benefits of Bootstrap</h2>

          <h3>Brief History</h3>

          <p>
            Bootstrap was created inside Twitter in 2010 by Mark Otto and Jacob Thornton.
            The goal was to solve inconsistency problems across internal tools. In 2011 it was
            released as an open-source project and quickly became one of the most popular
            front-end frameworks in the world.
          </p>

          <p>
            Major versions you may encounter:
          </p>

          <ul>
            <li><strong>Bootstrap 3</strong> – introduced the mobile-first approach (still seen in older projects)</li>
            <li><strong>Bootstrap 4</strong> – moved to flexbox, improved the grid, dropped IE8/9 support</li>
            <li><strong>Bootstrap 5</strong> (current) – released in 2021; removed the jQuery dependency,
              improved form controls, utilities, and the grid, and modernized the JavaScript</li>
          </ul>

          <p>
            This course uses <strong>Bootstrap 5</strong>. Most examples will work with the latest
            5.x release (currently 5.3.x).
          </p>

          <h3>Key Benefits (Summary Table)</h3>

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
                <td>Layouts adapt automatically to different screen sizes using the grid and utility classes</td>
              </tr>
              <tr>
                <td>Mobile-first</td>
                <td>Designed first for mobile devices, then enhanced for larger screens with breakpoint modifiers</td>
              </tr>
              <tr>
                <td>Consistent styling</td>
                <td>Uniform look and feel across browsers and devices without writing large amounts of custom CSS</td>
              </tr>
              <tr>
                <td>Rapid development</td>
                <td>Pre-built components and utilities reduce coding and debugging time significantly</td>
              </tr>
              <tr>
                <td>Customizable</td>
                <td>Easy to override colors, spacing, and other design tokens with CSS variables or Sass</td>
              </tr>
              <tr>
                <td>Community & ecosystem</td>
                <td>Huge collection of free and paid themes, templates, and third-party plugins</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>3. Setting Up Bootstrap</h2>

          <p>
            There are three common ways to include Bootstrap in a project. For learning and simple
            static pages, the <strong>CDN method</strong> is the fastest and recommended.
          </p>

          <h3>Method 1: Using CDN (Recommended for Beginners)</h3>

          <p>
            A Content Delivery Network (CDN) hosts the Bootstrap files on fast servers around the
            world. You simply link to those files in your HTML. No download or installation is required.
          </p>

          <p>
            Official CDN links (Bootstrap 5.3.3 example):
          </p>

          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
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
  <p class="text-center">If this text is centered and the page looks clean, Bootstrap is working.</p>

  <!-- Bootstrap JS Bundle (includes Popper for tooltips, dropdowns, etc.) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}
          />

          <div className="tip-box">
            <strong>Important:</strong> Always place the CSS <code>{'<link>'}</code> inside the
            <code>{'<head>'}</code> and the JavaScript <code>{'<script>'}</code> just before the
            closing <code>{'</body>'}</code> tag. This is the standard and most reliable order.
          </div>

          <h3>Method 2: Local Installation (Download)</h3>

          <p>
            Download the compiled CSS and JS files from the official Bootstrap website
            (getbootstrap.com → Download). Unzip the package and place the files in your project,
            for example:
          </p>

          <CodeBlock
            language="html"
            code={`project/
├── css/
│   └── bootstrap.min.css
├── js/
│   └── bootstrap.bundle.min.js
└── index.html`}
          />

          <p>Then reference them with relative paths:</p>

          <CodeBlock
            language="html"
            code={`<!-- Local CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<!-- Local JS (place near the end of body) -->
<script src="js/bootstrap.bundle.min.js"></script>`}
          />

          <p>
            Local files are useful when you need offline access or want to lock a specific version
            without relying on a CDN.
          </p>

          <h3>Method 3: Using npm / yarn (Modern Projects)</h3>

          <p>
            If you are working with a modern JavaScript toolchain (Vite, Create React App, Next.js,
            Angular, etc.), install Bootstrap as a package:
          </p>

          <CodeBlock
            language="javascript"
            code={`npm install bootstrap
# or
yarn add bootstrap`}
          />

          <p>Then import the CSS (and optionally the JS) in your main entry file:</p>

          <CodeBlock
            language="javascript"
            code={`// In your main JS or CSS entry file
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';`}
          />

          <div className="note-box">
            <strong>Note:</strong> For pure HTML learning exercises in this course, stick with the
            CDN method. It requires zero build tools and is perfect for classroom practice.
          </div>

          <hr />

          <h2>4. Creating a Basic Bootstrap Page</h2>

          <p>
            Every well-formed Bootstrap page should contain at least the following pieces:
          </p>

          <ol>
            <li>A correct HTML5 doctype and <code>lang</code> attribute</li>
            <li>The required character-set meta tag</li>
            <li>The critical viewport meta tag (required for responsive behavior)</li>
            <li>The Bootstrap CSS link</li>
            <li>Your page content (usually inside a <code>container</code>)</li>
            <li>The Bootstrap JavaScript bundle (if you need interactive components)</li>
          </ol>

          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
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
    <p class="lead">This is a simple responsive page built with Bootstrap 5.</p>
    <button class="btn btn-primary">Click Me</button>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}
          />

          <h3>Why the Viewport Meta Tag Is Critical</h3>

          <p>
            Without the viewport meta tag, mobile browsers assume the page is designed for a
            desktop width (usually 980 px) and simply shrink the whole page. Bootstrap’s responsive
            classes will not work correctly.
          </p>

          <CodeBlock
            language="html"
            code={`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
          />

          <div className="warning-box">
            <strong>Common mistake:</strong> Forgetting the viewport meta tag. Always include it
            as the second meta tag in the <code>{'<head>'}</code>.
          </div>

          <hr />

          <h2>5. Understanding the Bootstrap Grid System</h2>

          <p>
            The grid system is the most important layout tool in Bootstrap. It is based on a
            flexible <strong>12-column</strong> model. You place content inside columns, and the
            columns sit inside rows, which sit inside a container.
          </p>

          <h3>Core Building Blocks</h3>

          <ul>
            <li><strong>Container</strong> – the outermost wrapper that centers content and applies horizontal padding</li>
            <li><strong>Row</strong> – a horizontal group of columns (uses flexbox under the hood)</li>
            <li><strong>Column</strong> – the actual content areas (<code>col</code>, <code>col-6</code>, <code>col-md-4</code>, etc.)</li>
          </ul>

          <h3>Basic Equal-Width Columns</h3>

          <p>
            When you use plain <code>col</code> classes without a number, Bootstrap automatically
            divides the available space equally among the columns.
          </p>

          <CodeBlock
            language="html"
            code={`<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
</div>`}
          />

          <p>
            In the example above each column receives 4 units out of the total 12 (because 12 ÷ 3 = 4).
          </p>

          <h3>Specifying Exact Column Widths</h3>

          <p>
            You can control the width by adding a number from 1 to 12 after <code>col-</code>.
            The numbers in a single row should normally add up to 12 (or less).
          </p>

          <CodeBlock
            language="html"
            code={`<div class="container">
  <div class="row">
    <div class="col-8">This column takes 8 units (≈ 66%)</div>
    <div class="col-4">This column takes 4 units (≈ 33%)</div>
  </div>
</div>`}
          />

          <div className="tip-box">
            <strong>Remember:</strong> Columns must be direct children of a <code>.row</code>.
            Never place a column directly inside a container without a row, and never nest a column
            inside another column without first creating a new row.
          </div>

          <hr />

          <h2>6. Containers, Rows, and Columns in Detail</h2>

          <h3>Containers</h3>

          <p>
            Containers provide a consistent horizontal padding and (in most cases) a maximum width
            so content does not stretch too wide on large screens.
          </p>

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
                <td>Fixed-width responsive container. Width changes at each breakpoint (most common choice).</td>
              </tr>
              <tr>
                <td><code>container-fluid</code></td>
                <td>Full-width container that always spans 100% of the viewport width.</td>
              </tr>
              <tr>
                <td><code>container-sm</code>, <code>container-md</code>, <code>container-lg</code>, etc.</td>
                <td>Responsive containers that stay fluid until a specific breakpoint, then become fixed-width.</td>
              </tr>
            </tbody>
          </table>

          <p>
            Most student projects should start with the regular <code>container</code> class.
          </p>

          <h3>Rows</h3>

          <p>
            A <code>.row</code> creates a horizontal flex container for columns. Important rules:
          </p>

          <ul>
            <li>Rows must be placed inside a container (or another column when nesting).</li>
            <li>Only columns should be direct children of a row.</li>
            <li>Rows have negative left/right margins that cancel the container’s padding so columns
              align correctly with the container edges.</li>
          </ul>

          <h3>Columns</h3>

          <p>
            Columns are the actual content holders. You can mix numbered and auto-width columns,
            and you can change their widths at different breakpoints (see next section).
          </p>

          <CodeBlock
            language="html"
            code={`<!-- Two-column layout: 2/3 + 1/3 -->
<div class="container">
  <div class="row">
    <div class="col-8">
      <h3>Main Content</h3>
      <p>This area takes up 8 of the 12 available units.</p>
    </div>
    <div class="col-4">
      <h3>Sidebar</h3>
      <p>This area takes the remaining 4 units.</p>
    </div>
  </div>
</div>`}
          />

          <hr />

          <h2>7. Responsive Breakpoints</h2>

          <p>
            Bootstrap is mobile-first. You write the styles for the smallest screens first, then
            add larger-breakpoint modifiers when you want the layout to change.
          </p>

          <p>
            The official breakpoints are:
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
                <td>Extra small (default)</td>
                <td><code>col-</code> or just <code>col</code></td>
                <td>< 576px</td>
                <td>Phones (portrait)</td>
              </tr>
              <tr>
                <td>Small</td>
                <td><code>col-sm-</code></td>
                <td>≥ 576px</td>
                <td>Large phones / small tablets</td>
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
                <td>Laptops / small desktops</td>
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

          <h3>How Responsive Classes Work</h3>

          <p>
            When you write <code>col-12 col-md-6 col-lg-4</code> it means:
          </p>

          <ul>
            <li>On extra-small screens (< 576px): take the full 12 columns (100% width)</li>
            <li>From medium screens (≥ 768px): take 6 columns (50% width)</li>
            <li>From large screens (≥ 992px): take 4 columns (≈ 33% width)</li>
          </ul>

          <CodeBlock
            language="html"
            code={`<div class="container">
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
</div>`}
          />

          <div className="tip-box">
            <strong>Practice tip:</strong> Open the browser DevTools (F12), switch to the device
            toolbar, and resize the viewport while watching how the columns rearrange. This is the
            fastest way to understand breakpoints.
          </div>

          <hr />

          <h2>8. Gutters, Offsets, and Alignment</h2>

          <h3>Gutters (Spacing Between Columns)</h3>

          <p>
            In Bootstrap 5 the space between columns is controlled by gutter classes.
            The most useful ones are:
          </p>

          <ul>
            <li><code>g-0</code> – no gutters</li>
            <li><code>g-1</code> … <code>g-5</code> – increasing gutter sizes</li>
            <li><code>gx-*</code> – horizontal gutters only</li>
            <li><code>gy-*</code> – vertical gutters only</li>
          </ul>

          <CodeBlock
            language="html"
            code={`<!-- Nice spacing between cards -->
<div class="row g-4">
  <div class="col-md-4">...</div>
  <div class="col-md-4">...</div>
  <div class="col-md-4">...</div>
</div>`}
          />

          <h3>Column Offsets</h3>

          <p>
            Offsets push a column to the right by a certain number of units. Useful for centering
            or creating asymmetric layouts.
          </p>

          <CodeBlock
            language="html"
            code={`<!-- A 6-unit column that is centered by offsetting 3 units on each side -->
<div class="row">
  <div class="col-md-6 offset-md-3">
    This column is centered on medium screens and larger.
  </div>
</div>`}
          />

          <h3>Vertical Alignment</h3>

          <p>
            Because rows use flexbox, you can align columns vertically with utility classes:
          </p>

          <CodeBlock
            language="html"
            code={`<div class="row align-items-center" style="min-height: 200px;">
  <div class="col">Vertically centered</div>
  <div class="col">Vertically centered</div>
</div>`}
          />

          <p>
            Other useful alignment classes: <code>align-items-start</code>, <code>align-items-end</code>,
            <code>align-self-center</code>, etc.
          </p>

          <hr />

          <h2>9. Nested Columns and Ordering</h2>

          <h3>Nested Columns</h3>

          <p>
            You can place a new <code>.row</code> inside a column to create nested layouts.
            Nested columns still follow the 12-column system relative to their parent column.
          </p>

          <CodeBlock
            language="html"
            code={`<div class="container">
  <div class="row">
    <div class="col-md-8">
      <h4>Main Content Area</h4>
      <p>This is the primary content column.</p>

      <!-- Nested row inside the main column -->
      <div class="row">
        <div class="col-6">
          <div class="p-3 border bg-light">Nested Column A</div>
        </div>
        <div class="col-6">
          <div class="p-3 border bg-light">Nested Column B</div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <h4>Sidebar</h4>
      <p>Secondary content goes here.</p>
    </div>
  </div>
</div>`}
          />

          <h3>Column Ordering</h3>

          <p>
            Sometimes you want the visual order of columns to be different from the HTML source order
            (for example, to improve accessibility or SEO while still showing a sidebar on the left
            on large screens). Use the order classes:
          </p>

          <CodeBlock
            language="html"
            code={`<div class="row">
  <!-- In the HTML this comes first, but on md+ screens it will appear second -->
  <div class="col-md-6 order-md-2">
    This appears second on medium screens and larger
  </div>

  <!-- In the HTML this comes second, but on md+ screens it will appear first -->
  <div class="col-md-6 order-md-1">
    This appears first on medium screens and larger
  </div>
</div>`}
          />

          <p>
            Order values range from <code>order-0</code> to <code>order-5</code>, plus
            <code>order-first</code> and <code>order-last</code>. You can also use responsive versions
            such as <code>order-md-2</code>.
          </p>

          <hr />

          <h2>10. Practical Example – Simple Responsive Services Section</h2>

          <p>
            Here is a complete, ready-to-run example that demonstrates containers, responsive
            columns, gutters, and simple card-like boxes. Resize the browser to see the layout change.
          </p>

          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
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
        <div class="p-4 border rounded bg-light text-center h-100">
          <h4>Web Design</h4>
          <p>Modern and responsive websites tailored to your brand.</p>
          <a href="#" class="btn btn-outline-primary btn-sm">Learn more</a>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="p-4 border rounded bg-light text-center h-100">
          <h4>Development</h4>
          <p>Clean, efficient code using the latest technologies.</p>
          <a href="#" class="btn btn-outline-primary btn-sm">Learn more</a>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="p-4 border rounded bg-light text-center h-100">
          <h4>Support</h4>
          <p>Ongoing maintenance and technical support.</p>
          <a href="#" class="btn btn-outline-primary btn-sm">Learn more</a>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>`}
          />

          <hr />

          <h2>11. Best Practices & Common Pitfalls</h2>

          <h3>Best Practices</h3>

          <ul>
            <li>Always include the viewport meta tag</li>
            <li>Prefer <code>container</code> unless you truly need full-bleed width</li>
            <li>Use responsive column classes (<code>col-md-</code>, <code>col-lg-</code>) instead of fixed <code>col-</code> only</li>
            <li>Keep the sum of column numbers in a row ≤ 12 (or use auto columns carefully)</li>
            <li>Use the <code>g-*</code> gutter classes for consistent spacing between columns</li>
            <li>Test layouts at multiple widths with browser DevTools</li>
            <li>Keep HTML semantic – use headings, paragraphs, lists, etc., and let Bootstrap style them</li>
          </ul>

          <h3>Common Beginner Mistakes</h3>

          <ul>
            <li>Forgetting the viewport meta tag → layout looks broken on phones</li>
            <li>Placing columns directly inside a container without a <code>.row</code></li>
            <li>Nesting columns without creating a new <code>.row</code> first</li>
            <li>Mixing fixed pixel widths with Bootstrap columns (they fight each other)</li>
            <li>Using <code>container-fluid</code> everywhere when a normal <code>container</code> would look better</li>
            <li>Not testing the design at tablet and mobile sizes</li>
          </ul>

          <hr />

          <h2>Session 01 Exercises</h2>

          <p><strong>Task 1 – Basic Page Setup</strong></p>
          <ol>
            <li>Create a new HTML file and include Bootstrap 5 using the CDN method.</li>
            <li>Add the correct viewport meta tag.</li>
            <li>Place a heading and a short paragraph inside a <code>container</code>.</li>
            <li>Open the page in a browser and confirm that Bootstrap styles are applied.</li>
          </ol>

          <p><strong>Task 2 – Equal and Unequal Columns</strong></p>
          <ol>
            <li>Create a row with three equal-width columns using the plain <code>col</code> class.</li>
            <li>Create another row with a 9 + 3 layout (<code>col-9</code> and <code>col-3</code>).</li>
            <li>Add some background color or borders so you can clearly see the column boundaries.</li>
          </ol>

          <p><strong>Task 3 – Responsive Grid</strong></p>
          <ol>
            <li>Create a row with three columns that appear side-by-side on desktop and stacked on mobile.</li>
            <li>Use the classes <code>col-12 col-md-4</code> (or similar).</li>
            <li>Test the layout by resizing the browser window.</li>
          </ol>

          <p><strong>Task 4 – Nested Layout</strong></p>
          <ol>
            <li>Create a two-column layout (main content + sidebar) using <code>col-md-8</code> and <code>col-md-4</code>.</li>
            <li>Inside the main content column, create another nested row with two equal columns.</li>
            <li>Give the nested columns a light background so the nesting is obvious.</li>
          </ol>

          <p><strong>Task 5 – Ordering Challenge</strong></p>
          <ol>
            <li>Create two columns. On mobile they should appear in normal source order.</li>
            <li>On medium screens and above, reverse their visual order using <code>order-md-1</code> and <code>order-md-2</code>.</li>
          </ol>

          <hr />

          <h2>Challenge Project</h2>

          <p>
            Build a simple product showcase page that contains:
          </p>

          <ul>
            <li>A header with the title “Our Products”</li>
            <li>Four product cards arranged in a responsive grid:
              <ul>
                <li>1 column on mobile (< 768px)</li>
                <li>2 columns on tablet (≥ 768px)</li>
                <li>4 columns on desktop (≥ 992px)</li>
              </ul>
            </li>
            <li>Each card should have a title, short description, and a “Buy Now” button</li>
            <li>Use gutters (<code>g-3</code> or <code>g-4</code>) for nice spacing</li>
            <li>Bonus: center the whole section and give each card a subtle border and rounded corners</li>
          </ul>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>What is the maximum number of columns in the Bootstrap grid system?</li>
            <li>Which class creates a full-width container?</li>
            <li>What does the class <code>col-md-6</code> mean?</li>
            <li>Why is the viewport meta tag important?</li>
            <li>Name three ways to include Bootstrap in a project.</li>
            <li>What is the purpose of the <code>g-4</code> class on a row?</li>
            <li>How do you reverse the visual order of two columns on medium screens and larger?</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this session you learned:
          </p>

          <ul>
            <li>What Bootstrap is, a brief history, and why it is popular</li>
            <li>How to set up Bootstrap using CDN, local files, or npm</li>
            <li>The correct structure of a basic Bootstrap page (including the viewport meta tag)</li>
            <li>How the 12-column grid system works with containers, rows, and columns</li>
            <li>How to create responsive layouts using breakpoint modifiers</li>
            <li>How to use gutters, offsets, vertical alignment, nested columns, and order classes</li>
            <li>Best practices and common pitfalls to avoid</li>
          </ul>

          <p>
            In the next session we will explore Bootstrap components such as buttons, cards,
            navigation bars, forms, alerts, and more — the ready-made UI pieces that make Bootstrap
            so productive.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
