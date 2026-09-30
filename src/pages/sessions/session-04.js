import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session04() {
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
      title="Session 04 — Mastering jQuery Techniques"
      description="Mastering jQuery Techniques — Effects, Animations, DOM Manipulation, and Plugins"
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

          <h1>Session 04 — Mastering jQuery Techniques</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Learning jQuery effects and animations, advanced DOM manipulation,
            and how to use jQuery plugins and UI components.
          </p>

          <p>
            <strong>Practical Environment:</strong> VS Code + Browser (Chrome / Edge / Firefox)
          </p>

          <p>
            <strong>Follows Book:</strong> From Book – Session 4 (Mastering jQuery Techniques)
          </p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Illustrate jQuery effects and animations with examples</li>
            <li>Outline DOM manipulation techniques using jQuery</li>
            <li>Explain the process of integrating and configuring jQuery plugins</li>
            <li>Explain the process of implementing jQuery UI components</li>
          </ul>

          <hr />

          <h2>1. jQuery Effects and Animations</h2>

          <p>
            jQuery offers a variety of methods for creating animations and effects.
            These methods enhance user interaction and the overall experience on a web page.
          </p>

          <h3>Hiding and Showing Elements</h3>

          <pre style={codeBlockStyle}>
            <code>{`// Hide
$("#box").hide();           // instant
$("#box").hide(500);        // 500 milliseconds
$("#box").hide("slow");     // slow animation
$("#box").hide("fast");     // fast animation

// Show
$("#box").show();
$("#box").show(800);

// Toggle (hide if visible, show if hidden)
$("#box").toggle();
$("#box").toggle(600);`}</code>
          </pre>

          <h3>Fading Effects</h3>

          <pre style={codeBlockStyle}>
            <code>{`$("#box").fadeIn();         // fade in
$("#box").fadeOut();        // fade out
$("#box").fadeToggle();     // toggle fade
$("#box").fadeTo(1000, 0.4); // fade to 40% opacity over 1 second`}</code>
          </pre>

          <h3>Sliding Effects</h3>

          <pre style={codeBlockStyle}>
            <code>{`$("#panel").slideDown();    // slide down
$("#panel").slideUp();      // slide up
$("#panel").slideToggle();  // toggle slide`}</code>
          </pre>

          <h3>Custom Animation – animate()</h3>

          <pre style={codeBlockStyle}>
            <code>{`$("#box").animate({
  left: '250px',
  opacity: '0.5',
  height: '150px',
  width: '150px'
}, 1000);   // duration in milliseconds

// Multiple animations (queued)
$("#box")
  .animate({ left: '200px' }, 800)
  .animate({ top: '100px' }, 800)
  .animate({ opacity: 0.3 }, 500);`}</code>
          </pre>

          <hr />

          <h2>2. Advanced DOM Manipulation</h2>

          <h3>Creating and Adding Elements</h3>

          <pre style={codeBlockStyle}>
            <code>{`// Create a new element
let newPara = $("<p>This is a new paragraph</p>");

// Append (inside, at the end)
$("#container").append(newPara);
$("#container").append("<p>Another paragraph</p>");

// Prepend (inside, at the beginning)
$("#container").prepend("<h3>New Heading</h3>");

// After (outside, after the element)
$("#box").after("<p>Inserted after the box</p>");

// Before (outside, before the element)
$("#box").before("<p>Inserted before the box</p>");`}</code>
          </pre>

          <h3>Removing Elements</h3>

          <pre style={codeBlockStyle}>
            <code>{`// Remove the element itself
$("#box").remove();

// Remove only the children (keep the element)
$("#container").empty();

// Remove elements that match a filter
$("p").remove(".highlight");`}</code>
          </pre>

          <h3>Working with Attributes</h3>

          <pre style={codeBlockStyle}>
            <code>{`// Get attribute
let src = $("img").attr("src");

// Set attribute
$("img").attr("src", "new-image.jpg");
$("a").attr("href", "https://example.com");

// Set multiple attributes
$("img").attr({
  src: "photo.jpg",
  alt: "My Photo",
  title: "Profile Picture"
});

// Remove attribute
$("img").removeAttr("title");`}</code>
          </pre>

          <h3>Working with Classes</h3>

          <pre style={codeBlockStyle}>
            <code>{`$("#box").addClass("active highlight");
$("#box").removeClass("highlight");
$("#box").toggleClass("active");

// Check if element has a class
if ($("#box").hasClass("active")) {
  console.log("Box is active");
}`}</code>
          </pre>

          <hr />

          <h2>3. Traversing the DOM</h2>

          <p>
            jQuery makes it easy to move through the DOM tree.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`// Parent
$("#child").parent();           // direct parent
$("#child").parents();          // all ancestors
$("#child").parentsUntil("div");

// Children
$("#parent").children();        // direct children
$("#parent").find("span");      // all descendants that match

// Siblings
$("#item").siblings();          // all siblings
$("#item").next();              // next sibling
$("#item").prev();              // previous sibling
$("#item").nextAll();
$("#item").prevAll();

// Filtering
$("p").first();
$("p").last();
$("p").eq(2);                   // third paragraph (index starts at 0)
$("p").filter(".intro");
$("p").not(".intro");`}</code>
          </pre>

          <hr />

          <h2>4. jQuery Plugins</h2>

          <p>
            A <strong>plugin</strong> is a piece of code that extends jQuery’s functionality.
            Thousands of free plugins are available for image sliders, lightboxes, form validation, etc.
          </p>

          <h3>How to Use a Plugin (General Steps)</h3>

          <ol>
            <li>Include jQuery first</li>
            <li>Include the plugin’s CSS (if any)</li>
            <li>Include the plugin’s JavaScript file</li>
            <li>Initialize the plugin on the desired element</li>
          </ol>

          <pre style={codeBlockStyle}>
            <code>{`<!-- Example structure -->
<script src="jquery.min.js"></script>
<link rel="stylesheet" href="plugin.css">
<script src="plugin.min.js"></script>

<script>
  $(function() {
    $("#myElement").pluginName({
      // options
      option1: value1,
      option2: value2
    });
  });
</script>`}</code>
          </pre>

          <h3>Popular Plugin Categories</h3>

          <ul>
            <li>Image sliders / carousels</li>
            <li>Lightbox / galleries</li>
            <li>Form validation</li>
            <li>Date pickers</li>
            <li>Tooltips and popovers</li>
            <li>Tables (sorting, filtering, pagination)</li>
          </ul>

          <hr />

          <h2>5. Introduction to jQuery UI</h2>

          <p>
            <strong>jQuery UI</strong> is an official collection of user interface interactions,
            effects, widgets, and themes built on top of jQuery.
          </p>

          <h3>Common jQuery UI Widgets</h3>

          <ul>
            <li>Accordion</li>
            <li>Tabs</li>
            <li>Datepicker</li>
            <li>Dialog (modal)</li>
            <li>Slider</li>
            <li>Autocomplete</li>
            <li>Draggable / Droppable / Sortable</li>
          </ul>

          <h3>Basic Example – Datepicker</h3>

          <pre style={codeBlockStyle}>
            <code>{`<!-- Include jQuery + jQuery UI -->
<link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>

<input type="text" id="datepicker">

<script>
  $(function() {
    $("#datepicker").datepicker();
  });
</script>`}</code>
          </pre>

          <h3>Basic Example – Accordion</h3>

          <pre style={codeBlockStyle}>
            <code>{`<div id="accordion">
  <h3>Section 1</h3>
  <div>
    <p>Content for section 1</p>
  </div>
  <h3>Section 2</h3>
  <div>
    <p>Content for section 2</p>
  </div>
  <h3>Section 3</h3>
  <div>
    <p>Content for section 3</p>
  </div>
</div>

<script>
  $(function() {
    $("#accordion").accordion();
  });
</script>`}</code>
          </pre>

          <hr />

          <h2>6. Practical Example – Animated FAQ + Theme Toggle</h2>

          <pre style={codeBlockStyle}>
            <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>jQuery Effects Practice</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .faq-item { border: 1px solid #ccc; margin-bottom: 10px; }
    .faq-question {
      background: #007bff;
      color: white;
      padding: 12px;
      cursor: pointer;
    }
    .faq-answer {
      padding: 15px;
      display: none;
      background: #f8f9fa;
    }
    .dark-theme {
      background-color: #222;
      color: #eee;
    }
    .dark-theme .faq-question { background: #444; }
    .dark-theme .faq-answer { background: #333; color: #eee; }
  </style>
</head>
<body>

  <button id="themeBtn">Toggle Dark Theme</button>

  <h2>Frequently Asked Questions</h2>

  <div class="faq-item">
    <div class="faq-question">What is jQuery?</div>
    <div class="faq-answer">
      jQuery is a fast, small, and feature-rich JavaScript library.
    </div>
  </div>

  <div class="faq-item">
    <div class="faq-question">Why use animations?</div>
    <div class="faq-answer">
      Animations improve user experience and make interfaces feel more interactive.
    </div>
  </div>

  <div class="faq-item">
    <div class="faq-question">Is jQuery still used?</div>
    <div class="faq-answer">
      Yes, many existing websites and CMS platforms still rely on jQuery.
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script>
    $(function() {

      // FAQ accordion effect
      $(".faq-question").click(function() {
        // Close other answers
        $(".faq-answer").not($(this).next()).slideUp();
        // Toggle current answer
        $(this).next().slideToggle();
      });

      // Theme toggle
      $("#themeBtn").click(function() {
        $("body").toggleClass("dark-theme");
      });

    });
  </script>
</body>
</html>`}</code>
          </pre>

          <hr />

          <h2>7. Best Practices</h2>

          <ul>
            <li>Always chain methods when possible to keep code clean</li>
            <li>Use <code>stop()</code> before animations if the user can trigger them multiple times quickly</li>
            <li>Prefer CSS transitions for simple hover effects; use jQuery for more complex logic</li>
            <li>Load jQuery UI only when you actually need its widgets</li>
            <li>Keep animations short (200–600 ms) so the interface feels responsive</li>
          </ul>

          <hr />

          <h2>Session 04 Exercise</h2>

          <p><strong>Task 1 – Effects Practice</strong></p>
          <ol>
            <li>Create a box and four buttons: Hide, Show, Fade Out, Slide Toggle.</li>
            <li>Connect each button to the corresponding jQuery effect.</li>
          </ol>

          <p><strong>Task 2 – Custom Animation</strong></p>
          <ol>
            <li>Create a box that moves from left to right and changes size when a button is clicked.</li>
            <li>Use the <code>animate()</code> method.</li>
          </ol>

          <p><strong>Task 3 – DOM Manipulation</strong></p>
          <ol>
            <li>Create an empty list (<code>&lt;ul&gt;</code>).</li>
            <li>Add a text box and a button “Add Item”.</li>
            <li>When the button is clicked, append a new <code>&lt;li&gt;</code> with the entered text.</li>
            <li>Add a second button that removes the last item.</li>
          </ol>

          <p><strong>Task 4 – Simple Accordion</strong></p>
          <ol>
            <li>Create three questions and answers (like the practical example).</li>
            <li>Only one answer should be open at a time (slide up the others).</li>
          </ol>

          <hr />

          <h2>Challenge</h2>

          <p>
            Build a small interactive image gallery:
          </p>

          <ul>
            <li>Show 4–6 thumbnail images</li>
            <li>When a thumbnail is clicked, the main large image fades out, changes source, and fades in</li>
            <li>Add a “Shuffle” button that randomly changes the order of the thumbnails using jQuery</li>
          </ul>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>What is the difference between <code>hide()</code> and <code>fadeOut()</code>?</li>
            <li>Which method is used for custom animations?</li>
            <li>How do you add a new element at the beginning of a container?</li>
            <li>What does <code>$(element).empty()</code> do?</li>
            <li>Name two widgets provided by jQuery UI.</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this session you learned:
          </p>

          <ul>
            <li>How to use hide/show, fade, and slide effects</li>
            <li>How to create custom animations with <code>animate()</code></li>
            <li>Advanced DOM manipulation (add, remove, change attributes and classes)</li>
            <li>How to traverse the DOM (parent, children, siblings, filtering)</li>
            <li>The basic idea of jQuery plugins and jQuery UI widgets</li>
          </ul>

          <p>
            In the next session we will focus on <strong>Designing Responsive Web Pages</strong>
            using Bootstrap’s responsive utilities and grid system in more depth.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
