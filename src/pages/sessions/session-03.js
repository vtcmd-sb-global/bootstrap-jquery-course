import React from 'react';
import Layout from '@theme/Layout';
import CustomLayout from '@site/src/components/Layout/Layout';

export default function Session03() {
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
          `}</style>

          <h1>Session 03 — Getting Started with jQuery</h1>

          <p><strong>Duration:</strong> 2 hours</p>

          <p>
            <strong>Focus:</strong> Understanding what jQuery is, how to include it in a project,
            using selectors to target elements, and handling basic events.
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
            <li>Explain the purpose and benefits of jQuery</li>
            <li>Elaborate on setup and configuration for using jQuery</li>
            <li>Explain jQuery syntax and selectors for targeting Web page elements</li>
            <li>List and explain jQuery events and event-handling techniques</li>
          </ul>

          <hr />

          <h2>1. Introduction to jQuery</h2>

          <p>
            <strong>jQuery</strong> is a free, popular, open-source JavaScript library.
            It is designed to make common JavaScript tasks much easier and shorter to write.
          </p>

          <p>
            jQuery simplifies:
          </p>

          <ul>
            <li>HTML Document Object Model (DOM) traversal and manipulation</li>
            <li>Event handling</li>
            <li>Animations and effects</li>
            <li>Ajax (asynchronous communication with the server)</li>
          </ul>

          <p>
            It provides an easy-to-use API that works across almost all modern browsers.
            Because of its simplicity and power, jQuery became extremely popular after its release in 2006.
          </p>

          <h3>Why Learn jQuery?</h3>

          <ul>
            <li>Writes less code for the same result (Write Less, Do More)</li>
            <li>Excellent browser compatibility</li>
            <li>Huge community and many plugins</li>
            <li>Still widely used in many existing projects and CMS platforms</li>
            <li>Great foundation before learning modern frameworks (React, Vue, etc.)</li>
          </ul>

          <hr />

          <h2>2. Setting Up jQuery</h2>

          <p>
            There are three common ways to include jQuery in a project.
          </p>

          <h3>Method 1: Using CDN (Recommended for beginners)</h3>

          <pre style={codeBlockStyle}>
            <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First jQuery Page</title>
</head>
<body>

  <h1>Hello jQuery</h1>

  <!-- jQuery CDN -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

  <script>
    // Your jQuery code will go here
  </script>
</body>
</html>`}</code>
          </pre>

          <h3>Method 2: Local File</h3>

          <p>
            Download jQuery from the official website and place the file in your project.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`<script src="js/jquery-3.7.1.min.js"></script>`}</code>
          </pre>

          <h3>Method 3: Using npm</h3>

          <pre style={codeBlockStyle}>
            <code>{`npm install jquery`}</code>
          </pre>

          <hr />

          <h2>3. jQuery Syntax</h2>

          <p>
            The basic jQuery syntax is:
          </p>

          <pre style={codeBlockStyle}>
            <code>{`$(selector).action();`}</code>
          </pre>

          <ul>
            <li><code>$</code> → the jQuery object (shortcut for <code>jQuery</code>)</li>
            <li><code>selector</code> → tells jQuery which HTML element(s) to select</li>
            <li><code>action()</code> → the method you want to perform on the selected element(s)</li>
          </ul>

          <h3>Document Ready</h3>

          <p>
            Always wait until the HTML document is fully loaded before running jQuery code.
          </p>

          <pre style={codeBlockStyle}>
            <code>{`$(document).ready(function() {
  // Your code here
});

// Shorter version (most common)
$(function() {
  // Your code here
});`}</code>
          </pre>

          <hr />

          <h2>4. jQuery Selectors</h2>

          <p>
            Selectors are used to find and select HTML elements.
          </p>

          <h3>Common Selectors</h3>

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
                <td>Element</td>
                <td><code>$("p")</code></td>
                <td>Selects all &lt;p&gt; elements</td>
              </tr>
              <tr>
                <td>ID</td>
                <td><code>$("#myId")</code></td>
                <td>Selects the element with id="myId"</td>
              </tr>
              <tr>
                <td>Class</td>
                <td><code>$(".myClass")</code></td>
                <td>Selects all elements with class="myClass"</td>
              </tr>
              <tr>
                <td>Universal</td>
                <td><code>$("*")</code></td>
                <td>Selects all elements</td>
              </tr>
              <tr>
                <td>Multiple</td>
                <td><code>$("h1, p, .box")</code></td>
                <td>Selects all h1, p and .box elements</td>
              </tr>
            </tbody>
          </table>

          <h3>Examples</h3>

          <pre style={codeBlockStyle}>
            <code>{`// Select by ID
$("#title").text("New Title");

// Select by class
$(".btn").css("background-color", "blue");

// Select by tag
$("p").hide();

// Select first paragraph
$("p:first").css("color", "red");

// Select last list item
$("li:last").addClass("highlight");`}</code>
          </pre>

          <hr />

          <h2>5. jQuery Events</h2>

          <p>
            Events are actions that happen on a web page (click, mouseover, keypress, etc.).
            jQuery makes event handling very simple.
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
                <td>When the element is clicked</td>
              </tr>
              <tr>
                <td><code>dblclick</code></td>
                <td>When the element is double-clicked</td>
              </tr>
              <tr>
                <td><code>mouseenter</code></td>
                <td>When the mouse pointer enters the element</td>
              </tr>
              <tr>
                <td><code>mouseleave</code></td>
                <td>When the mouse pointer leaves the element</td>
              </tr>
              <tr>
                <td><code>keydown</code> / <code>keyup</code></td>
                <td>When a keyboard key is pressed / released</td>
              </tr>
              <tr>
                <td><code>submit</code></td>
                <td>When a form is submitted</td>
              </tr>
              <tr>
                <td><code>focus</code> / <code>blur</code></td>
                <td>When an input gets / loses focus</td>
              </tr>
            </tbody>
          </table>

          <h3>Event Examples</h3>

          <pre style={codeBlockStyle}>
            <code>{`$(function() {

  // Click event
  $("#btn").click(function() {
    alert("Button was clicked!");
  });

  // Mouse enter / leave
  $(".box").mouseenter(function() {
    $(this).css("background-color", "yellow");
  });

  $(".box").mouseleave(function() {
    $(this).css("background-color", "white");
  });

  // Form submit
  $("#myForm").submit(function(e) {
    e.preventDefault(); // stop the form from submitting
    alert("Form submitted!");
  });

});`}</code>
          </pre>

          <hr />

          <h2>6. Basic DOM Manipulation</h2>

          <p>
            jQuery provides many useful methods to change content, attributes, and styles.
          </p>

          <h3>Content Methods</h3>

          <pre style={codeBlockStyle}>
            <code>{`// Get text
let text = $("#title").text();

// Set text
$("#title").text("New Heading");

// Get HTML
let html = $("#content").html();

// Set HTML
$("#content").html("<strong>Bold text</strong>");

// Get / Set value of input
let name = $("#name").val();
$("#name").val("John Doe");`}</code>
          </pre>

          <h3>CSS &amp; Class Methods</h3>

          <pre style={codeBlockStyle}>
            <code>{`// Change CSS
$("p").css("color", "blue");
$("p").css({
  "color": "blue",
  "font-size": "20px",
  "font-weight": "bold"
});

// Add / Remove / Toggle class
$("div").addClass("highlight");
$("div").removeClass("highlight");
$("div").toggleClass("highlight");`}</code>
          </pre>

          <h3>Show / Hide</h3>

          <pre style={codeBlockStyle}>
            <code>{`$("#box").hide();          // hide immediately
$("#box").show();          // show immediately
$("#box").toggle();        // toggle visibility

$("#box").hide(500);       // hide with animation (500ms)
$("#box").show("slow");    // show slowly`}</code>
          </pre>

          <hr />

          <h2>7. Practical Example – Interactive Button</h2>

          <pre style={codeBlockStyle}>
            <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
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

      $("#btnChange").click(function() {
        $("#title").text("Text Changed Successfully!");
        $("#title").css("color", "green");
      });

      $("#btnToggle").click(function() {
        $("#myBox").toggleClass("highlight");
      });

      $("#myBox").mouseenter(function() {
        $(this).text("Mouse Entered");
      });

      $("#myBox").mouseleave(function() {
        $(this).text("Box");
      });

    });
  </script>
</body>
</html>`}</code>
          </pre>

          <hr />

          <h2>8. Best Practices</h2>

          <ul>
            <li>Always put jQuery code inside <code>$(document).ready()</code> or the short form <code>$(function(){})</code></li>
            <li>Prefer ID selectors when targeting a single unique element</li>
            <li>Use class selectors when you want to affect multiple elements</li>
            <li>Keep your JavaScript / jQuery code in a separate <code>.js</code> file for larger projects</li>
            <li>Use <code>e.preventDefault()</code> when handling form submissions or links that should not navigate</li>
          </ul>

          <hr />

          <h2>Session 03 Exercise</h2>

          <p><strong>Task 1 – Setup</strong></p>
          <ol>
            <li>Create an HTML page and include jQuery using the CDN method.</li>
            <li>Write a document-ready function that shows an alert “jQuery is ready!”.</li>
          </ol>

          <p><strong>Task 2 – Selectors Practice</strong></p>
          <ol>
            <li>Create a page with a heading (id), three paragraphs (class), and a button.</li>
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
            <li>Create a colored box (div).</li>
            <li>When the mouse enters the box → change its background color.</li>
            <li>When the mouse leaves → restore the original color.</li>
            <li>When the box is clicked → toggle a CSS class.</li>
          </ol>

          <p><strong>Task 4 – Form Interaction</strong></p>
          <ol>
            <li>Create a simple form with name and email fields + a submit button.</li>
            <li>On submit, prevent the default action and display the entered values in an alert.</li>
          </ol>

          <hr />

          <h2>Challenge</h2>

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

          <hr />

          <h2>Quick Quiz</h2>

          <ol>
            <li>What does the <code>$</code> symbol represent in jQuery?</li>
            <li>Why do we use <code>$(document).ready()</code>?</li>
            <li>How do you select an element with the id <code>header</code>?</li>
            <li>Write the jQuery code to hide all paragraphs when a button is clicked.</li>
            <li>Name three common jQuery events.</li>
          </ol>

          <hr />

          <h2>Summary</h2>

          <p>
            In this session you learned:
          </p>

          <ul>
            <li>What jQuery is and why it is useful</li>
            <li>How to include jQuery using CDN or local file</li>
            <li>The basic jQuery syntax <code>$(selector).action()</code></li>
            <li>How to use element, ID, and class selectors</li>
            <li>How to handle common events (click, mouseenter, submit, etc.)</li>
            <li>Basic DOM manipulation (text, html, css, classes, show/hide)</li>
          </ul>

          <p>
            In the next session we will explore more powerful jQuery techniques —
            effects, animations, and advanced DOM manipulation.
          </p>

        </article>
      </CustomLayout>
    </Layout>
  );
}
