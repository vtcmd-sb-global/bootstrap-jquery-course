import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';
import CodeBlock from '@site/src/components/CodeBlock';

export default function Session03() {
  return (
    <Layout
      title="Session 03 — Getting Started with jQuery"
      description="Getting Started with jQuery — Introduction, Setup, Selectors, Events, and Basic DOM Manipulation"
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

          <h1>Session 03 — Getting Started with jQuery</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Understanding what jQuery is, how to include it in a project,
            using selectors to target elements, handling basic events, and performing simple
            DOM manipulation.
          </p>

          <p>
            <strong>Practical Environment:</strong> VS Code + Browser (Chrome / Edge / Firefox)
          </p>

          <p>
            <strong>Follows Book:</strong> From Book – Session 3 (Getting Started with jQuery)
          </p>

          <hr />

          <h2>Learning Objectives</h2>

          <p>By the end of this session, you should be able to:</p>

          <ul>
            <li>Explain what jQuery is and why it is still useful</li>
            <li>Include jQuery in a page using CDN, local file, or npm</li>
            <li>Write correct jQuery syntax and understand the document-ready pattern</li>
            <li>Select elements using ID, class, tag, and combined selectors</li>
            <li>Attach and handle common events (click, mouseenter, submit, etc.)</li>
            <li>Change text, HTML, CSS, and classes of elements</li>
            <li>Show, hide, and toggle elements</li>
          </ul>

          <hr />

          <h2>1. Introduction to jQuery</h2>

          <p>
            <strong>jQuery</strong> is a free, open-source JavaScript library created by John Resig
            in 2006. Its famous motto is <em>“Write Less, Do More”</em>.
          </p>

          <p>
            jQuery makes many common JavaScript tasks shorter and easier to write, especially:
          </p>

          <ul>
            <li>Selecting and traversing HTML elements (DOM)</li>
            <li>Changing content, attributes, and styles</li>
            <li>Handling browser events</li>
            <li>Creating simple animations and effects</li>
            <li>Making Ajax requests (talking to a server without reloading the page)</li>
          </ul>

          <p>
            Although modern JavaScript and frameworks (React, Vue, etc.) have reduced the need for
            jQuery in brand-new projects, jQuery is still widely used in existing websites,
            WordPress themes/plugins, Bootstrap 4 projects, and many learning environments.
            Understanding it is a valuable skill.
          </p>

          <h3>Why Learn jQuery?</h3>

          <ul>
            <li><strong>Less code</strong> – many tasks that take 10–15 lines of pure JavaScript become 1–2 lines</li>
            <li><strong>Cross-browser compatibility</strong> – jQuery handles many browser differences for you</li>
            <li><strong>Huge ecosystem</strong> – thousands of plugins and examples exist</li>
            <li><strong>Great learning foundation</strong> – helps you understand the DOM and events before moving to modern frameworks</li>
            <li><strong>Still relevant</strong> – many companies and legacy systems still use it</li>
          </ul>

          <div className="tip-box">
            <strong>Tip:</strong> jQuery is not a replacement for learning JavaScript.
            It is a useful tool that sits on top of JavaScript. The better you understand
            plain JavaScript, the more powerful jQuery becomes in your hands.
          </div>

          <hr />

          <h2>2. Setting Up jQuery</h2>

          <p>
            There are three common ways to include jQuery. For learning and simple pages,
            the <strong>CDN method</strong> is the fastest and recommended.
          </p>

          <h3>Method 1: Using CDN (Recommended for Beginners)</h3>

          <p>
            A Content Delivery Network hosts the jQuery file. You just add a script tag.
          </p>

          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First jQuery Page</title>
</head>
<body>

  <h1>Hello jQuery</h1>

  <!-- jQuery from CDN (place before your own scripts) -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

  <script>
    // Your jQuery code goes here
    $(function() {
      console.log("jQuery is ready!");
    });
  </script>
</body>
</html>`}
          />

          <div className="warning-box">
            <strong>Important order:</strong> Always load the jQuery library <em>before</em>
            any of your own scripts that use the <code>$</code> symbol. If you put your code first,
            you will get the error <code>$ is not defined</code>.
          </div>

          <h3>Method 2: Local File</h3>

          <p>
            Download the minified file from jquery.com and place it in your project
            (for example in a <code>js</code> folder).
          </p>

          <CodeBlock
            language="html"
            code={`<script src="js/jquery-3.7.1.min.js"></script>`}
          />

          <h3>Method 3: Using npm</h3>

          <CodeBlock
            language="javascript"
            code={`npm install jquery`}
          />

          <p>
            Then import it in a modern project:
          </p>

          <CodeBlock
            language="javascript"
            code={`import $ from 'jquery';
// or
const $ = require('jquery');`}
          />

          <div className="note-box">
            <strong>Note:</strong> For the exercises in this course, stick with the CDN method.
            It requires zero build tools and is perfect for classroom practice.
          </div>

          <hr />

          <h2>3. jQuery Syntax</h2>

          <p>
            Almost every jQuery statement follows this pattern:
          </p>

          <CodeBlock
            language="javascript"
            code={`$(selector).action();`}
          />

          <ul>
            <li><code>$</code> — the jQuery function (a shortcut for <code>jQuery</code>)</li>
            <li><code>selector</code> — tells jQuery which element(s) to find (very similar to CSS selectors)</li>
            <li><code>action()</code> — the method you want to run on the selected element(s)</li>
          </ul>

          <h3>Document Ready</h3>

          <p>
            The browser reads HTML from top to bottom. If your jQuery code runs before the
            elements exist, the selectors will find nothing. The safe pattern is to wait until
            the document is fully loaded:
          </p>

          <CodeBlock
            language="javascript"
            code={`// Full version
$(document).ready(function() {
  // Your code here
});

// Short version (most commonly used)
$(function() {
  // Your code here
});`}
          />

          <div className="tip-box">
            <strong>Tip:</strong> Get into the habit of always wrapping your jQuery code inside
            <code>$(function() {'{ ... }'})</code>. It prevents many “element not found” bugs.
          </div>

          <hr />

          <h2>4. jQuery Selectors</h2>

          <p>
            Selectors are how you tell jQuery which elements you want to work with.
            They are almost identical to CSS selectors.
          </p>

          <h3>Most Common Selectors</h3>

          <table>
            <thead>
              <tr>
                <th>Selector</th>
                <th>Example</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Element (tag)</td>
                <td><code>$("p")</code></td>
                <td>Selects all <p> elements</td>
              </tr>
              <tr>
                <td>ID</td>
                <td><code>$("#myId")</code></td>
                <td>Selects the single element with id="myId"</td>
              </tr>
              <tr>
                <td>Class</td>
                <td><code>$(".myClass")</code></td>
                <td>Selects all elements that have class="myClass"</td>
              </tr>
              <tr>
                <td>Universal</td>
                <td><code>$("*")</code></td>
                <td>Selects every element on the page</td>
              </tr>
              <tr>
                <td>Multiple</td>
                <td><code>$("h1, p, .box")</code></td>
                <td>Selects all h1, all p, and all .box elements</td>
              </tr>
              <tr>
                <td>Descendant</td>
                <td><code>$("div p")</code></td>
                <td>Selects all p elements that are inside a div</td>
              </tr>
              <tr>
                <td>First / Last</td>
                <td><code>$("p:first")</code> / <code>$("li:last")</code></td>
                <td>Selects the first or last matching element</td>
              </tr>
            </tbody>
          </table>

          <h3>Practical Selector Examples</h3>

          <CodeBlock
            language="javascript"
            code={`$(function() {

  // Select by ID and change its text
  $("#title").text("New Title");

  // Select by class and change background
  $(".btn").css("background-color", "blue");

  // Select by tag and hide all paragraphs
  $("p").hide();

  // Select the first paragraph only
  $("p:first").css("color", "red");

  // Select the last list item and add a class
  $("li:last").addClass("highlight");

  // Select multiple different elements at once
  $("h1, h2, .intro").css("font-family", "Arial");

});`}
          />

          <div className="tip-box">
            <strong>Performance tip:</strong> ID selectors are the fastest because an ID should
            be unique on the page. Use them when you only need one specific element.
          </div>

          <hr />

          <h2>5. jQuery Events</h2>

          <p>
            Events are things that happen in the browser — a user clicks a button, moves the mouse,
            presses a key, submits a form, etc. jQuery makes listening for these events very easy.
          </p>

          <h3>Common Events</h3>

          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>click</code></td>
                <td>User clicks the element</td>
              </tr>
              <tr>
                <td><code>dblclick</code></td>
                <td>User double-clicks the element</td>
              </tr>
              <tr>
                <td><code>mouseenter</code> / <code>mouseleave</code></td>
                <td>Mouse pointer enters / leaves the element</td>
              </tr>
              <tr>
                <td><code>hover</code></td>
                <td>Shorthand for mouseenter + mouseleave</td>
              </tr>
              <tr>
                <td><code>keydown</code> / <code>keyup</code></td>
                <td>Keyboard key is pressed / released</td>
              </tr>
              <tr>
                <td><code>submit</code></td>
                <td>A form is submitted</td>
              </tr>
              <tr>
                <td><code>focus</code> / <code>blur</code></td>
                <td>An input receives / loses focus</td>
              </tr>
              <tr>
                <td><code>change</code></td>
                <td>Value of an input, select, or textarea changes</td>
              </tr>
            </tbody>
          </table>

          <h3>Event Handling Examples</h3>

          <CodeBlock
            language="javascript"
            code={`$(function() {

  // Click event
  $("#btn").click(function() {
    alert("Button was clicked!");
  });

  // Mouse enter and leave
  $(".box").mouseenter(function() {
    $(this).css("background-color", "yellow");
  });

  $(".box").mouseleave(function() {
    $(this).css("background-color", "white");
  });

  // Hover (shorthand for enter + leave)
  $(".card").hover(
    function() { $(this).addClass("highlight"); },   // mouseenter
    function() { $(this).removeClass("highlight"); } // mouseleave
  );

  // Form submit – prevent the page from reloading
  $("#myForm").submit(function(e) {
    e.preventDefault(); // stop the default form submission
    alert("Form submitted!");
  });

  // Using the event object
  $("button").click(function(event) {
    console.log("Clicked element:", event.target);
  });

});`}
          />

          <div className="tip-box">
            <strong>Inside an event handler,</strong> <code>$(this)</code> refers to the element
            that triggered the event. This is one of the most useful patterns in jQuery.
          </div>

          <hr />

          <h2>6. Basic DOM Manipulation</h2>

          <p>
            Once you have selected elements, you usually want to change something about them.
            jQuery provides clean methods for the most common tasks.
          </p>

          <h3>Content Methods</h3>

          <CodeBlock
            language="javascript"
            code={`// Get or set text content (strips HTML)
let text = $("#title").text();
$("#title").text("New Heading");

// Get or set HTML content
let html = $("#content").html();
$("#content").html("<strong>Bold text</strong>");

// Get or set the value of form fields
let name = $("#name").val();
$("#name").val("John Doe");`}
          />

          <h3>CSS & Class Methods</h3>

          <CodeBlock
            language="javascript"
            code={`// Change one CSS property
$("p").css("color", "blue");

// Change multiple CSS properties at once
$("p").css({
  "color": "blue",
  "font-size": "20px",
  "font-weight": "bold"
});

// Work with classes
$("div").addClass("highlight");
$("div").removeClass("highlight");
$("div").toggleClass("highlight");   // add if missing, remove if present
$("div").hasClass("highlight");      // returns true or false`}
          />

          <h3>Show, Hide, and Toggle</h3>

          <CodeBlock
            language="javascript"
            code={`$("#box").hide();          // hide immediately
$("#box").show();          // show immediately
$("#box").toggle();        // switch between visible and hidden

// With animation duration (milliseconds or "slow" / "fast")
$("#box").hide(500);
$("#box").show("slow");
$("#box").toggle(300);`}
          />

          <div className="note-box">
            <strong>Note:</strong> <code>hide()</code>, <code>show()</code>, and <code>toggle()</code>
            only change the CSS <code>display</code> property. The element is still in the DOM;
            it is just not visible.
          </div>

          <hr />

          <h2>7. Practical Example – Interactive Page</h2>

          <p>
            Here is a complete mini-page that demonstrates selectors, events, and basic
            DOM manipulation together.
          </p>

          <CodeBlock
            language="html"
            code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>jQuery Practice</title>
  <style>
    .box {
      width: 200px;
      height: 200px;
      background-color: lightblue;
      margin: 20px;
      text-align: center;
      line-height: 200px;
      font-size: 24px;
      border-radius: 8px;
      transition: background-color 0.3s;
    }
    .highlight {
      background-color: orange;
      color: white;
    }
  </style>
</head>
<body>

  <h1 id="title">Hello jQuery</h1>
  <button id="btnChange">Change Text</button>
  <button id="btnToggle">Toggle Box</button>

  <div class="box" id="myBox">Box</div>

  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script>
    $(function() {

      // Change heading text and color
      $("#btnChange").click(function() {
        $("#title").text("Text Changed Successfully!");
        $("#title").css("color", "green");
      });

      // Toggle a CSS class on the box
      $("#btnToggle").click(function() {
        $("#myBox").toggleClass("highlight");
      });

      // React to mouse entering and leaving the box
      $("#myBox").mouseenter(function() {
        $(this).text("Mouse Entered");
      });

      $("#myBox").mouseleave(function() {
        $(this).text("Box");
      });

    });
  </script>
</body>
</html>`}
          />

          <hr />

          <h2>8. Best Practices</h2>

          <ul>
            <li>Always wrap your code in <code>$(function() {'{ ... }'})</code> (document ready)</li>
            <li>Load the jQuery library before any of your own scripts</li>
            <li>Prefer ID selectors when targeting a single unique element</li>
            <li>Use class selectors when you want to affect a group of elements</li>
            <li>Use <code>e.preventDefault()</code> inside form submit handlers if you do not want the page to reload</li>
            <li>For larger projects, move your jQuery code into a separate <code>.js</code> file</li>
            <li>Keep your HTML clean and give important elements clear IDs or classes</li>
          </ul>

          <hr />

          <h2>Session 03 Exercises</h2>

          <p><strong>Task 1 – Setup & Document Ready</strong></p>
          <ol>
            <li>Create an HTML page and include jQuery using the CDN.</li>
            <li>Inside a document-ready function, show an alert that says “jQuery is ready!”.</li>
          </ol>

          <p><strong>Task 2 – Selectors Practice</strong></p>
          <ol>
            <li>Create a page with:
              <ul>
                <li>A heading that has an id</li>
                <li>Three paragraphs that share the same class</li>
                <li>A button</li>
              </ul>
            </li>
            <li>When the button is clicked:
              <ul>
                <li>Change the heading text</li>
                <li>Change the color of all paragraphs</li>
                <li>Hide the first paragraph</li>
              </ul>
            </li>
          </ol>

          <p><strong>Task 3 – Events</strong></p>
          <ol>
            <li>Create a colored box (a div).</li>
            <li>When the mouse enters the box → change its background color.</li>
            <li>When the mouse leaves → restore the original color.</li>
            <li>When the box is clicked → toggle a CSS class that changes its appearance.</li>
          </ol>

          <p><strong>Task 4 – Form Interaction</strong></p>
          <ol>
            <li>Create a simple form with name and email fields plus a submit button.</li>
            <li>On submit, prevent the default action and display the entered values in an alert
                (or write them into a paragraph on the page).</li>
          </ol>

          <hr />

          <h2>Challenge Project</h2>

          <p>
            Build a small interactive page that contains:
          </p>

          <ul>
            <li>A heading</li>
            <li>A button labeled “Change Theme”</li>
            <li>Three content boxes</li>
          </ul>

          <p>
            When the user clicks “Change Theme”:
          </p>

          <ul>
            <li>The background color of the page changes</li>
            <li>The heading text and color change</li>
            <li>All three boxes receive a new CSS class (different background + border)</li>
          </ul>

          <p>
            Bonus: Add a second button that resets everything back to the original state.
          </p>

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>What does the <code>$</code> symbol represent in jQuery?</li>
            <li>Why do we use <code>$(document).ready()</code> or <code>$(function(){'{}'})</code>?</li>
            <li>How do you select an element with the id <code>header</code>?</li>
            <li>Write the jQuery code to hide all paragraphs when a button with id <code>btnHide</code> is clicked.</li>
            <li>Name three common jQuery events.</li>
            <li>What does <code>$(this)</code> refer to inside an event handler?</li>
            <li>How do you stop a form from submitting and reloading the page?</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this session you learned:
          </p>

          <ul>
            <li>What jQuery is and why it is still useful</li>
            <li>How to include jQuery using CDN, local file, or npm</li>
            <li>The basic jQuery syntax <code>$(selector).action()</code></li>
            <li>How to use the document-ready pattern</li>
            <li>How to select elements with ID, class, tag, and combined selectors</li>
            <li>How to handle common events (click, mouseenter, submit, etc.)</li>
            <li>Basic DOM manipulation (text, html, css, classes, show/hide)</li>
          </ul>

          <p>
            In the next session we will explore more powerful jQuery techniques —
            effects, animations, chaining, and advanced DOM manipulation.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
