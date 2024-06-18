<html>
<head>
  <title>querySelector Example</title>
</head>
<body>
  <div id="myId">Element with ID</div>
  <div class="myClass">Element with Class</div>
  <div name="myName">Element with Attribute</div>
  <div class="parent">
    <div class="child">Nested Element</div>
  </div>

  <script>
    // Selecting an element by ID
    var elementById = document.querySelector('#myId');
    console.log(elementById.textContent); // Output: Element with ID

    // Selecting an element by class
    var elementByClass = document.querySelector('.myClass');
    console.log(elementByClass.textContent); // Output: Element with Class

    // Selecting an element by tag name
    var elementByTag = document.querySelector('div');
    console.log(elementByTag.textContent); // Output: Element with ID (the first <div> element)

    // Selecting an element by attribute
    var elementByAttribute = document.querySelector('[name="myName"]');
    console.log(elementByAttribute.textContent); // Output: Element with Attribute

    // Selecting a nested element
    var nestedElement = document.querySelector('.parent .child');
    console.log(nestedElement.textContent); // Output: Nested Element
  </script>
</body>
</html>
