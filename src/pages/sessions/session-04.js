import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session04() {
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

          <h1>Session 04 — Mastering jQuery Techniques</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Learning jQuery effects and animations, advanced DOM manipulation,
            traversing the DOM, and an introduction to jQuery plugins and jQuery UI components.
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
            <li>Use hide/show, fade, and slide effects with and without duration</li>
            <li>Create custom animations with the <code>animate()</code> method and understand chaining</li>
            <li>Add, remove, and empty elements in the DOM</li>
            <li>Get and set attributes and work with CSS classes</li>
            <li>Traverse the DOM (parent, children, siblings, filtering)</li>
            <li>Understand the basic idea of jQuery plugins and how to initialize them</li>
            <li>Use simple jQuery UI widgets such as Datepicker and Accordion</li>
          </ul>

          <hr />

          <h2>1. jQuery Effects and Animations</h2>

          <p>
            jQuery provides a set of ready-made methods that make it easy to show, hide,
            fade, and slide elements. These effects improve the feel of a page when used
            carefully (not excessively).
          </p>

          <h3>Hiding and Showing Elements</h3>

          <CodeBlock
            language="javascript"
            code={`// Hide
$("#box").hide();           // instant
$("#box").hide(500);        // 500 milliseconds
$("#box").hide("slow");     // slow animation
$("#box").hide("fast");     // fast animation

// Show
$("#box").show();
$("#box").show(800);

// Toggle (hide if visible, show if hidden)
$("#box").toggle();
$("#box").toggle(600);`}
          />

          <h3>Fading Effects</h3>

          <CodeBlock
            language="javascript"
            code={`$("#box").fadeIn();          // fade in
$("#box").fadeOut();         // fade out
$("#box").fadeToggle();      // toggle fade
$("#box").fadeTo(1000, 0.4); // fade to 40% opacity over 1 second`}
          />

          <h3>Sliding Effects</h3>

          <p>
            Sliding is especially useful for accordion-style panels and mobile menus.
          </p>

          <CodeBlock
            language="javascript"
            code={`$("#panel").slideDown();     // slide down
$("#panel").slideUp();       // slide up
$("#panel").slideToggle();   // toggle slide`}
          />

          <h3>Custom Animation – animate()</h3>

          <p>
            The <code>animate()</code> method lets you change numeric CSS properties over time
            (left, top, width, height, opacity, etc.).
          </p>

          <CodeBlock
            language="javascript"
            code={`$("#box").animate({
  left: "250px",
  opacity: "0.5",
  height: "150px",
  width: "150px"
}, 1000);   // duration in milliseconds

// Multiple animations are queued automatically
$("#box")
  .animate({ left: "200px" }, 800)
  .animate({ top: "100px" }, 800)
  .animate({ opacity: 0.3 }, 500);`}
          />

          <div className="tip-box">
            <strong>Tip:</strong> You can only animate properties that have numeric values
            (width, height, left, top, opacity, margin, padding, etc.). You cannot animate
            colors with the core <code>animate()</code> method unless you use an extra plugin.
          </div>

          <div className="warning-box">
            <strong>Common problem:</strong> If the user clicks a button many times quickly,
            animations can queue up and keep running. Use <code>.stop(true, true)</code>
            before starting a new animation when needed.
          </div>

          <hr />

          <h2>2. Advanced DOM Manipulation</h2>

          <h3>Creating and Adding Elements</h3>

          <CodeBlock
            language="javascript"
            code={`// Create a new element
let newPara = $("<p>This is a new paragraph</p>");

// Append (inside the element, at the end)
$("#container").append(newPara);
$("#container").append("<p>Another paragraph</p>");

// Prepend (inside the element, at the beginning)
$("#container").prepend("<h3>New Heading</h3>");

// After (outside, after the element)
$("#box").after("<p>Inserted after the box</p>");

// Before (outside, before the element)
$("#box").before("<p>Inserted before the box</p>");`}
          />

          <h3>Removing Elements</h3>

          <CodeBlock
            language="javascript"
            code={`// Remove the element itself (and its data/events)
$("#box").remove();

// Remove only the children (keep the container)
$("#container").empty();

// Remove elements that match a filter
$("p").remove(".highlight");`}
          />

          <h3>Working with Attributes</h3>

          <CodeBlock
            language="javascript"
            code={`// Get attribute
let src = $("img").attr("src");

// Set one attribute
$("img").attr("src", "new-image.jpg");
$("a").attr("href", "https://example.com");

// Set multiple attributes at once
$("img").attr({
  src: "photo.jpg",
  alt: "My Photo",
  title: "Profile Picture"
});

// Remove an attribute
$("img").removeAttr("title");`}
          />

          <h3>Working with Classes</h3>

          <CodeBlock
            language="javascript"
            code={`$("#box").addClass("active highlight");
$("#box").removeClass("highlight");
$("#box").toggleClass("active");

// Check if an element has a class
if ($("#box").hasClass("active")) {
  console.log("Box is active");
}`}
          />

          <hr />

          <h2>3. Traversing the DOM</h2>

          <p>
            Traversing means moving from one element to related elements (parent, children,
            siblings, etc.). jQuery makes this very readable.
          </p>

          <CodeBlock
            language="javascript"
            code={`// Parent
$("#child").parent();            // direct parent
$("#child").parents();           // all ancestors
$("#child").parentsUntil("div");

// Children & descendants
$("#parent").children();         // direct children only
$("#parent").find("span");       // all descendants that match

// Siblings
$("#item").siblings();           // all siblings
$("#item").next();               // next sibling
$("#item").prev();               // previous sibling
$("#item").nextAll();
$("#item").prevAll();

// Filtering a selection
$("p").first();
$("p").last();
$("p").eq(2);                    // third paragraph (index starts at 0)
$("p").filter(".intro");
$("p").not(".intro");`}
          />

          <div className="tip-box">
            <strong>Tip:</strong> Chaining is one of jQuery’s strengths. You can write:
            <br />
            <code>$("#list").find("li").first().addClass("highlight");</code>
          </div>

          <hr />

          <h2>4. jQuery Plugins</h2>

          <p>
            A <strong>plugin</strong> is a piece of code that extends jQuery with new methods.
            There are thousands of free plugins for image sliders, lightboxes, form validation,
            date pickers, tables, and more.
          </p>

          <h3>General Steps to Use a Plugin</h3>

          <ol>
            <li>Include jQuery first</li>
            <li>Include the plugin’s CSS file (if it has one)</li>
            <li>Include the plugin’s JavaScript file</li>
            <li>Initialize the plugin on the desired element(s)</li>
          </ol>

          <CodeBlock
            language="html"
            code={`<!-- Typical structure -->
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
</script>`}
          />

          <h3>Popular Plugin Categories</h3>

          <ul>
            <li>Image sliders / carousels</li>
            <li>Lightbox / galleries</li>
            <li>Form validation</li>
            <li>Date pickers</li>
            <li>Tooltips and popovers</li>
            <li>Data tables (sorting, filtering, pagination)</li>
          </ul>

          <div className="note-box">
            <strong>Note:</strong> Always check that the plugin is compatible with the version
            of jQuery you are using. Many older plugins only work with jQuery 1.x or 2.x.
          </div>

          <hr />

          <h2>5. Introduction to jQuery UI</h2>

          <p>
            <strong>jQuery UI</strong> is an official set of user-interface interactions,
            effects, widgets, and themes built on top of jQuery. It is useful when you need
            ready-made components such as date pickers, accordions, dialogs, and sliders.
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

          <CodeBlock
            language="html"
            code={`<!-- Include jQuery + jQuery UI -->
<link rel="stylesheet" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>

<input type="text" id="datepicker">

<script>
  $(function() {
    $("#datepicker").datepicker();
  });
</script>`}
          />

          <h3>Basic Example – Accordion</h3>

          <CodeBlock
            language="html"
            code={`<div id="accordion">
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
</script>`}
          />

          <hr />

          <h2>6. Practical Example – Animated FAQ + Theme Toggle</h2>

          <p>
            This example combines sliding effects, class toggling, and event handling
            into a small interactive FAQ section.
          </p>

          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>jQuery Effects Practice</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    .faq-item { border: 1px solid #ccc; margin-bottom: 10px; border-radius: 6px; overflow: hidden; }
    .faq-question {
      background: #0d6efd;
      color: white;
      padding: 12px 16px;
      cursor: pointer;
      margin: 0;
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

      // FAQ accordion effect – only one open at a time
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
</html>`}
          />

          <hr />

          <h2>7. Best Practices</h2>

          <ul>
            <li>Chain methods when possible to keep code clean and readable</li>
            <li>Use <code>.stop(true, true)</code> before animations if the user can trigger them rapidly</li>
            <li>Prefer CSS transitions for simple hover effects; use jQuery for more complex or sequential logic</li>
            <li>Load jQuery UI only when you actually need its widgets (it adds extra weight)</li>
            <li>Keep animation durations short (200–600 ms) so the interface feels responsive</li>
            <li>Always place jQuery and plugin scripts before your own initialization code</li>
          </ul>

          <hr />

          <h2>Session 04 Exercises</h2>

          <p><strong>Task 1 – Effects Practice</strong></p>
          <ol>
            <li>Create a box and four buttons: Hide, Show, Fade Out, Slide Toggle.</li>
            <li>Connect each button to the corresponding jQuery effect.</li>
          </ol>

          <p><strong>Task 2 – Custom Animation</strong></p>
          <ol>
            <li>Create a box that moves from left to right and changes size when a button is clicked.</li>
            <li>Use the <code>animate()</code> method.</li>
            <li>Bonus: make a second animation that returns the box to its original position.</li>
          </ol>

          <p><strong>Task 3 – DOM Manipulation</strong></p>
          <ol>
            <li>Create an empty list (<code>{'<ul>'}</code>).</li>
            <li>Add a text box and a button “Add Item”.</li>
            <li>When the button is clicked, append a new <code>{'<li>'}</code> with the entered text.</li>
            <li>Add a second button that removes the last item from the list.</li>
          </ol>

          <p><strong>Task 4 – Simple Accordion</strong></p>
          <ol>
            <li>Create three questions and answers (similar to the practical example).</li>
            <li>Only one answer should be open at a time (slide up the others when a new one is opened).</li>
          </ol>

          <hr />

          <h2>Challenge Project</h2>

          <p>
            Build a small interactive image gallery:
          </p>

          <ul>
            <li>Show 4–6 thumbnail images</li>
            <li>When a thumbnail is clicked, the main large image fades out, changes its source, and fades in again</li>
            <li>Add a “Shuffle” button that randomly changes the order of the thumbnails using jQuery</li>
          </ul>

          <p>
            Bonus: Add previous / next buttons that also change the main image with a fade effect.
          </p>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>What is the difference between <code>hide()</code> and <code>fadeOut()</code>?</li>
            <li>Which method is used for custom animations?</li>
            <li>How do you add a new element at the beginning of a container?</li>
            <li>What does <code>$(element).empty()</code> do?</li>
            <li>Name two widgets provided by jQuery UI.</li>
            <li>Why might you call <code>.stop()</code> before starting a new animation?</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this session you learned:
          </p>

          <ul>
            <li>How to use hide/show, fade, and slide effects</li>
            <li>How to create custom animations with <code>animate()</code> and method chaining</li>
            <li>Advanced DOM manipulation (add, remove, change attributes and classes)</li>
            <li>How to traverse the DOM (parent, children, siblings, filtering)</li>
            <li>The basic idea of jQuery plugins and how to initialize them</li>
            <li>Simple jQuery UI widgets (Datepicker and Accordion)</li>
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
