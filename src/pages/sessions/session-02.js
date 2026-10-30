import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session02() {
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
            <li>Use the main Bootstrap button styles, sizes, outlines, and groups</li>
            <li>Build flexible content cards (with headers, footers, images, and badges)</li>
            <li>Create a fully responsive navigation bar with collapse behavior</li>
            <li>Style forms consistently with Bootstrap form controls and layout helpers</li>
            <li>Display alerts, badges, and useful typography utilities</li>
            <li>Make images responsive and apply rounded / circular / thumbnail styles</li>
            <li>Combine multiple components into a realistic page section</li>
          </ul>

          <hr />

          <h2>1. Introduction to Bootstrap Components</h2>

          <p>
            Bootstrap’s real power comes from its <strong>pre-built components</strong>.
            Instead of writing long CSS rules for every button, card, or form control,
            you apply a small set of well-named classes and Bootstrap does the heavy lifting.
          </p>

          <p>
            Most components are pure HTML + CSS. A few (navbar toggler, dropdowns, modals,
            dismissible alerts, carousels, etc.) also need Bootstrap’s JavaScript.
            When you include the Bootstrap JS bundle (as we did in Session 01), those
            interactive features work automatically.
          </p>

          <p>
            In this session we will cover the components you will use most often:
          </p>

          <ul>
            <li>Buttons (and button groups)</li>
            <li>Cards</li>
            <li>Navbar and simple Navs / Tabs</li>
            <li>Forms and form controls</li>
            <li>Alerts and Badges</li>
            <li>Typography helpers</li>
            <li>Images and media utilities</li>
          </ul>

          <div className="tip-box">
            <strong>Tip:</strong> Keep the official Bootstrap documentation open while you practice
            (getbootstrap.com). Almost every component has live examples you can copy and experiment with.
          </div>

          <hr />

          <h2>2. Buttons</h2>

          <p>
            Buttons are one of the most frequently used components. Bootstrap gives you
            a consistent set of colors, sizes, and states so your interface looks professional
            without custom CSS.
          </p>

          <h3>Solid (Contextual) Buttons</h3>

          <p>
            The base class is <code>btn</code>. You then add a contextual class such as
            <code>btn-primary</code>, <code>btn-success</code>, etc.
          </p>

          <CodeBlock
            language="html"
            code={`<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-link">Link</button>`}
          />

          <h3>Outline Buttons</h3>

          <p>
            Outline buttons have a transparent background and a colored border.
            They are useful when you want a lighter visual weight.
          </p>

          <CodeBlock
            language="html"
            code={`<button class="btn btn-outline-primary">Primary</button>
<button class="btn btn-outline-success">Success</button>
<button class="btn btn-outline-danger">Danger</button>
<button class="btn btn-outline-secondary">Secondary</button>`}
          />

          <h3>Button Sizes</h3>

          <CodeBlock
            language="html"
            code={`<button class="btn btn-primary btn-lg">Large button</button>
<button class="btn btn-primary">Default button</button>
<button class="btn btn-primary btn-sm">Small button</button>`}
          />

          <h3>Disabled State</h3>

          <p>
            Add the <code>disabled</code> attribute (for <code>{'<button>'}</code>) or the
            <code>disabled</code> class (for <code>{'<a>'}</code> tags styled as buttons).
          </p>

          <CodeBlock
            language="html"
            code={`<button class="btn btn-primary" disabled>Disabled button</button>
<a href="#" class="btn btn-secondary disabled" tabindex="-1" aria-disabled="true">Disabled link</a>`}
          />

          <h3>Block / Full-Width Buttons</h3>

          <p>
            In Bootstrap 5 the old <code>btn-block</code> class was removed.
            Use the grid / flex utilities instead:
          </p>

          <CodeBlock
            language="html"
            code={`<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Full-width button</button>
  <button class="btn btn-outline-secondary" type="button">Another full-width button</button>
</div>`}
          />

          <h3>Button Groups</h3>

          <p>
            Group related buttons together with <code>btn-group</code>.
          </p>

          <CodeBlock
            language="html"
            code={`<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-outline-primary">Left</button>
  <button type="button" class="btn btn-outline-primary">Middle</button>
  <button type="button" class="btn btn-outline-primary">Right</button>
</div>`}
          />

          <div className="tip-box">
            <strong>Accessibility tip:</strong> Always give button groups a clear
            <code>aria-label</code> so screen-reader users understand the group’s purpose.
          </div>

          <hr />

          <h2>3. Cards</h2>

          <p>
            Cards are flexible content containers. They are perfect for product tiles,
            blog posts, user profiles, pricing tables, and almost any “box of related content”.
          </p>

          <h3>Basic Card</h3>

          <CodeBlock
            language="html"
            code={`<div class="card" style="width: 18rem;">
  <img src="https://via.placeholder.com/286x180" class="card-img-top" alt="Product image">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`}
          />

          <h3>Card with Header and Footer</h3>

          <CodeBlock
            language="html"
            code={`<div class="card">
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
</div>`}
          />

          <h3>Useful Card Patterns</h3>

          <ul>
            <li><code>h-100</code> on the card – makes all cards in a row the same height</li>
            <li><code>card-img-top</code> / <code>card-img-bottom</code> – places the image correctly</li>
            <li><code>text-center</code> or <code>text-end</code> – quickly aligns content</li>
            <li>Combine with badges and buttons for product cards (see the practical example later)</li>
          </ul>

          <div className="note-box">
            <strong>Note:</strong> Prefer using the grid system (<code>col-md-4</code> etc.)
            rather than a fixed <code>style="width: 18rem;"</code> when you want responsive cards.
          </div>

          <hr />

          <h2>4. Navigation Components</h2>

          <h3>Navbar (Navigation Bar)</h3>

          <p>
            The navbar is one of the most important components on almost every website.
            Bootstrap’s navbar is responsive by default: on large screens it shows the menu
            horizontally; on small screens it collapses behind a hamburger (toggler) button.
          </p>

          <CodeBlock
            language="html"
            code={`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MyWebsite</a>

    <!-- Toggler button (visible only on small screens) -->
    <button class="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
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
</nav>`}
          />

          <p>
            Key classes and attributes:
          </p>

          <ul>
            <li><code>navbar-expand-lg</code> – the menu expands from the large breakpoint upward</li>
            <li><code>navbar-dark bg-dark</code> – dark theme (also try <code>navbar-light bg-light</code>)</li>
            <li><code>ms-auto</code> – pushes the menu items to the right</li>
            <li><code>data-bs-toggle="collapse"</code> and <code>data-bs-target</code> – make the toggler work (requires Bootstrap JS)</li>
          </ul>

          <div className="warning-box">
            <strong>Common mistake:</strong> Forgetting the Bootstrap JavaScript bundle.
            Without it the hamburger button will not open the menu on mobile.
          </div>

          <h3>Simple Navs and Tabs</h3>

          <CodeBlock
            language="html"
            code={`<!-- Tabs style -->
<ul class="nav nav-tabs">
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
</ul>

<!-- Pills style -->
<ul class="nav nav-pills mt-3">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>`}
          />

          <hr />

          <h2>5. Forms</h2>

          <p>
            Bootstrap makes form styling consistent and attractive with very little effort.
            The most important classes are <code>form-control</code> (for inputs and textareas)
            and <code>form-select</code> (for select menus).
          </p>

          <h3>Basic Form</h3>

          <CodeBlock
            language="html"
            code={`<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com">
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
</form>`}
          />

          <h3>Select and Textarea</h3>

          <CodeBlock
            language="html"
            code={`<div class="mb-3">
  <label class="form-label">Choose an option</label>
  <select class="form-select">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<div class="mb-3">
  <label class="form-label">Comments</label>
  <textarea class="form-control" rows="3" placeholder="Leave a comment here"></textarea>
</div>`}
          />

          <h3>Input Groups</h3>

          <p>
            Input groups let you attach text or buttons to the left or right of an input.
          </p>

          <CodeBlock
            language="html"
            code={`<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search...">
  <button class="btn btn-outline-secondary" type="button">Search</button>
</div>`}
          />

          <h3>Floating Labels (Bootstrap 5)</h3>

          <CodeBlock
            language="html"
            code={`<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
  <label for="floatingPassword">Password</label>
</div>`}
          />

          <div className="tip-box">
            <strong>Tip:</strong> Use <code>mb-3</code> (margin-bottom) consistently between form
            groups so the vertical spacing looks even.
          </div>

          <hr />

          <h2>6. Alerts, Badges and Typography</h2>

          <h3>Alerts</h3>

          <p>
            Alerts are used to show important messages to the user (success, error, warning, info).
          </p>

          <CodeBlock
            language="html"
            code={`<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>`}
          />

          <h3>Dismissible Alerts</h3>

          <p>
            Add a close button and the <code>alert-dismissible</code> class.
            Bootstrap’s JavaScript will handle the closing animation.
          </p>

          <CodeBlock
            language="html"
            code={`<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Well done!</strong> You successfully read this important alert message.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`}
          />

          <h3>Badges</h3>

          <CodeBlock
            language="html"
            code={`<h1>Example heading <span class="badge bg-secondary">New</span></h1>

<button type="button" class="btn btn-primary">
  Notifications <span class="badge text-bg-secondary">4</span>
</button>

<span class="badge bg-success">In Stock</span>
<span class="badge bg-danger">Sold Out</span>
<span class="badge bg-warning text-dark">Limited</span>`}
          />

          <h3>Useful Typography Classes</h3>

          <CodeBlock
            language="html"
            code={`<p class="lead">This is a lead paragraph. It stands out from regular body text.</p>
<p class="text-muted">Muted text – good for secondary information</p>
<p class="fw-bold">Bold text (font-weight-bold)</p>
<p class="fst-italic">Italic text</p>
<p class="text-center">Centered text</p>
<p class="text-uppercase">Uppercase text</p>
<p class="text-primary">Primary colored text</p>
<p class="fs-4">Larger font size (fs-1 is largest, fs-6 is smallest)</p>`}
          />

          <hr />

          <h2>7. Media Objects & Images</h2>

          <p>
            Bootstrap provides several helpful classes for images.
          </p>

          <CodeBlock
            language="html"
            code={`<!-- Makes the image scale with its parent (never overflows) -->
<img src="https://via.placeholder.com/600x400" class="img-fluid" alt="Responsive image">

<!-- Rounded corners -->
<img src="https://via.placeholder.com/150" class="rounded" alt="Rounded">

<!-- Circle -->
<img src="https://via.placeholder.com/150" class="rounded-circle" alt="Circle">

<!-- Thumbnail style (border + padding) -->
<img src="https://via.placeholder.com/150" class="img-thumbnail" alt="Thumbnail">`}
          />

          <div className="tip-box">
            <strong>Best practice:</strong> Always include a meaningful <code>alt</code> attribute.
            Screen readers and search engines rely on it.
          </div>

          <hr />

          <h2>8. Practical Example – Product Cards Section</h2>

          <p>
            Here we combine the grid system, cards, badges, buttons, and utility classes
            into a realistic product showcase.
          </p>

          <CodeBlock
            language="html"
            code={`<div class="container my-5">
  <h2 class="text-center mb-4">Our Products</h2>

  <div class="row g-4">
    <!-- Product 1 -->
    <div class="col-12 col-md-4">
      <div class="card h-100 shadow-sm">
        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Wireless Headphones">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">Wireless Headphones</h5>
          <p class="card-text">High quality sound with noise cancellation.</p>
          <span class="badge bg-success mb-3 align-self-start">In Stock</span>
          <div class="mt-auto d-grid">
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Product 2 -->
    <div class="col-12 col-md-4">
      <div class="card h-100 shadow-sm">
        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Smart Watch">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">Smart Watch</h5>
          <p class="card-text">Track your fitness and stay connected.</p>
          <span class="badge bg-warning text-dark mb-3 align-self-start">Limited</span>
          <div class="mt-auto d-grid">
            <button class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Product 3 -->
    <div class="col-12 col-md-4">
      <div class="card h-100 shadow-sm">
        <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Bluetooth Speaker">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">Bluetooth Speaker</h5>
          <p class="card-text">Portable speaker with powerful bass.</p>
          <span class="badge bg-danger mb-3 align-self-start">Sold Out</span>
          <div class="mt-auto d-grid">
            <button class="btn btn-secondary" disabled>Out of Stock</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}
          />

          <hr />

          <h2>9. Best Practices</h2>

          <ul>
            <li>Prefer Bootstrap utility classes (<code>mb-3</code>, <code>text-center</code>, <code>d-grid</code>, <code>h-100</code>) over writing custom CSS whenever possible</li>
            <li>Always include Bootstrap’s JavaScript if you use interactive components (navbar toggler, dismissible alerts, dropdowns, modals)</li>
            <li>Test every component at mobile, tablet, and desktop widths</li>
            <li>Keep HTML clean and consistently indented – it makes debugging much easier</li>
            <li>Use semantic HTML (<code>{'<button>'}</code> for actions, <code>{'<a>'}</code> for navigation) and then style them with Bootstrap classes</li>
            <li>Give images meaningful <code>alt</code> text and interactive elements proper <code>aria-*</code> attributes</li>
          </ul>

          <hr />

          <h2>Session 02 Exercises</h2>

          <p><strong>Task 1 – Buttons Practice</strong></p>
          <ol>
            <li>Create a page that shows all solid button colors.</li>
            <li>Also show the outline versions and the three sizes (lg, default, sm).</li>
            <li>Add a disabled button and a full-width button using <code>d-grid</code>.</li>
          </ol>

          <p><strong>Task 2 – Card Gallery</strong></p>
          <ol>
            <li>Create three cards side-by-side using the grid (<code>col-md-4</code>).</li>
            <li>Each card should have an image, title, short text, a badge, and a button.</li>
            <li>Make the cards equal height with <code>h-100</code>.</li>
          </ol>

          <p><strong>Task 3 – Navbar + Form</strong></p>
          <ol>
            <li>Create a responsive dark navbar with a brand and four menu items.</li>
            <li>Below the navbar create a simple contact form (name, email, message, submit button).</li>
            <li>Use proper Bootstrap form classes and spacing.</li>
          </ol>

          <p><strong>Task 4 – Alerts & Badges</strong></p>
          <ol>
            <li>Show success, warning, and danger alerts on the same page.</li>
            <li>Make at least one of them dismissible.</li>
            <li>Add a few badges next to headings or buttons.</li>
          </ol>

          <hr />

          <h2>Challenge Project</h2>

          <p>
            Build a complete mini landing page that includes:
          </p>

          <ul>
            <li>A responsive Navbar (dark or light) with brand and menu items</li>
            <li>A simple hero section (heading + short paragraph + primary button)</li>
            <li>A section with three product cards (image, title, text, badge, button)</li>
            <li>A simple contact form</li>
            <li>A footer with copyright text</li>
          </ul>

          <p>
            Try to use only Bootstrap classes (no custom CSS if possible).
            Test the page on both mobile and desktop widths.
          </p>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>Which class creates a primary solid button?</li>
            <li>How do you create an outline success button?</li>
            <li>What class makes a card fill the full height of its grid column?</li>
            <li>Which two attributes make the navbar toggler work on mobile?</li>
            <li>What class is used for a standard text input in Bootstrap forms?</li>
            <li>How do you make an alert dismissible?</li>
            <li>Which class makes an image scale responsively with its parent?</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this session you learned:
          </p>

          <ul>
            <li>How to use Bootstrap buttons (solid, outline, sizes, disabled, groups, full-width)</li>
            <li>How to create and style Cards (basic, with header/footer, equal height)</li>
            <li>How to build a fully responsive Navbar with collapse behavior</li>
            <li>How to style Forms with form-control, form-select, input groups, and floating labels</li>
            <li>How to use Alerts (including dismissible), Badges, and Typography helpers</li>
            <li>How to make images responsive and apply rounded / circular / thumbnail styles</li>
            <li>How to combine multiple components into a realistic UI section</li>
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
