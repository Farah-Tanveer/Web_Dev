// ======================================
// DOM NOTES - Accessing Nodes
// ======================================

// Print something to console
console.log("Hello World");

/*
---------------------------------------
1. CHILD NODES
---------------------------------------

To see all child nodes of the body:

document.body.childNodes

Example output:
NodeList(9) [text, div, text, script, text, comment, text, script, text]

Access a specific child node:

document.body.childNodes[0]

NOTE:
"text" nodes are usually spaces or line breaks in HTML.
They appear because of indentation and spacing.
*/


/*
---------------------------------------
2. ACCESSING FIRST AND LAST CHILD
---------------------------------------

document.body.childNodes[1].firstChild
// Output: #text

document.body.childNodes[1].lastChild
// Output: #text

The text node here is usually the spacing before/after elements.
*/


/*
---------------------------------------
3. IGNORING TEXT NODES
---------------------------------------

To access only HTML elements (ignore text nodes):

document.body.childNodes[1].firstElementChild

Example output:
<div class="box">Box1</div>
*/


/*
---------------------------------------
4. ACCESSING PARENT ELEMENT
---------------------------------------

document.body.childNodes[1].firstElementChild.parentElement

Example output:
<div class="container"> ... </div>
*/


/*
---------------------------------------
5. ACCESSING CHILDREN OF AN ELEMENT
---------------------------------------

document.body.firstElementChild.children

Example output:
HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

Access a specific child:

document.body.firstElementChild.children[2]

Output:
<div class="box">Box3</div>
*/


/*
---------------------------------------
6. NEXT ELEMENT SIBLING
---------------------------------------

document.body.firstElementChild.children[2].nextElementSibling

Output:
<div class="box">Box4</div>
*/


/*
---------------------------------------
7. ACCESSING TABLE ELEMENTS
---------------------------------------

document.body.children

Example output:
HTMLCollection(4) [div, table, script, script]

Access table:

document.body.children[1]

Output:
<table> ... </table>

Access rows of table:

document.body.children[1].rows

Example output:
HTMLCollection(2) [tr, tr]
*/