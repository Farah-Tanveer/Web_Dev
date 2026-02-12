# 💡 Interactive Bulb Toggle

![HTML](https://img.shields.io/badge/HTML-5-orange?style=for-the-badge&logo=html5)
![CSS](https://img.shields.io/badge/CSS-3-blue?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript)
![Status](https://img.shields.io/badge/Project-Complete-success?style=for-the-badge)

A simple interactive web project that simulates a realistic light bulb turning **ON** and **OFF** using DOM manipulation and CSS visual effects.

---

## 🚀 About The Project

This project demonstrates how JavaScript interacts with CSS to create dynamic UI changes.

When the button is clicked:

- The bulb toggles between OFF and ON state  
- The button text updates dynamically  
- A glowing effect is applied using layered shadows  
- Smooth transitions create realistic animation  

---

## 🛠️ Built With

- HTML5  
- CSS3 (Flexbox, Gradients, Transitions)  
- JavaScript (DOM Manipulation)  

---

## 📂 Project Structure

Interactive-Bulb/
│
├── index.html
├── style.css
├── script.js
└── README.md


---

## 🧠 How It Works

### 1️⃣ DOM Selection

```js
var bulb = document.querySelector("#bulb");
var btn = document.querySelector("#toggleBtn");


Selects the bulb and button elements using their IDs.

### 2️⃣ Event Listener
btn.addEventListener("click", function () {});


Listens for click events on the button.

### 3️⃣ Class Toggle
bulb.classList.toggle("on");


Adds the on class if it does not exist and removes it if it does.
This switches between OFF and ON visual states.

### 4️⃣ Conditional Button Text
if (bulb.classList.contains("on")) {
    btn.textContent = "Turn Off";
} else {
    btn.textContent = "Turn On";
}


Updates button text based on the current bulb state.

## 🎨 CSS Explanation
🔹 Layout Centering (Flexbox)
body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}


100vh → Full screen height

display: flex → Enables flexbox

justify-content → Horizontal centering

align-items → Vertical centering

🔹 Bulb OFF State
#bulb {
    background: radial-gradient(circle at 30% 30%, 
                #666 0%, 
                #444 60%, 
                #222 100%);
}


Creates a 3D dark glass effect using radial gradients.

🔹 Bulb ON State
.on {
    background: radial-gradient(circle at 30% 30%, 
                #fffde7 0%, 
                #ffeb3b 40%, 
                #fbc02d 70%, 
                #f57f17 100%);
    
    box-shadow:
        0 0 20px #ffeb3b,
        0 0 40px #ffeb3b,
        0 0 80px #ffc107,
        0 0 120px rgba(255, 235, 59, 0.6);
}


Brighter center

Layered shadows

Realistic glowing effect

🔹 Smooth Transitions
transition: all 0.4s ease;


Ensures smooth animation between ON and OFF states.

## ✨ Features

Realistic glowing effect

Smooth animations

Dynamic button text

Responsive centered layout

Clean UI design

## 📚 Concepts Practiced

DOM Manipulation

Event Handling

Conditional Logic

Class Management

CSS Gradients

CSS Shadows

Flexbox Layout

UI State Design

## 🔮 Future Improvements

Add bulb holder base

Add flicker animation

Add sound effect

Add multiple bulbs

Dark room lighting effect

## 👩‍💻 Author

Farah Tanveer
Frontend Learning Journey 🚀