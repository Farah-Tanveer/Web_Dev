/****************************************************
 * DAY 14 — DYNAMIC DOM + DATA (FOUNDATION)
 * 
 * Today’s goal:
 * ❌ Not styling
 * ❌ Not memorizing syntax
 * ✅ Understanding how DATA becomes UI
 *
 * This is the most important concept in frontend.
 ****************************************************/


/* ==================================================
   1️⃣ STATIC vs DYNAMIC DOM
   ==================================================

   STATIC DOM:
   - HTML is written manually
   - JS only changes existing elements

   DYNAMIC DOM:
   - JS CREATES elements
   - JS DECIDES what appears on screen
   - UI depends on DATA (arrays / objects)

   Modern frontend = Dynamic DOM
*/


/* ==================================================
   2️⃣ THE CORE IDEA (VERY IMPORTANT)
   ==================================================

   DATA  →  LOOP  →  CREATE ELEMENTS  →  SHOW ON PAGE

   This is how:
   - React works
   - Vue works
   - Every UI framework works

   We’ll do it with plain JS.
*/


/* ==================================================
   3️⃣ SELECT A CONTAINER (WHERE UI WILL GO)
   ==================================================

   We never randomly add elements to body.
   We select a specific container.
*/

let container = document.querySelector("#container");

/*
   HTML might look like this:

   <div id="container"></div>

   Think of container as an empty box.
*/


/* ==================================================
   4️⃣ DATA (SOURCE OF TRUTH)
   ==================================================

   UI should NOT be hardcoded.
   UI should come from data.
*/

let items = ["Learn JS", "Practice DOM", "Build Project"];

/*
   This array is called STATE (conceptually).
   When data changes → UI should change.
*/


/* ==================================================
   5️⃣ CREATING ELEMENTS WITH JS
   ==================================================

   document.createElement("tagName")
*/

let p = document.createElement("p");

/*
   At this moment:
   - p exists in memory
   - It is NOT visible on the page yet
*/

/*
   Topics Covered Today
   Selecting multiple elements (querySelectorAll)
   Looping over elements with forEach
   Manipulating attributes (getAttribute, setAttribute)
   Creating & appending elements dynamically (createElement, appendChild)
   Removing elements (remove())
   Understanding event delegation
   Adding/removing/toggling multiple classes
*/