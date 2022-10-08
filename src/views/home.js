import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'



  <body>

  <div class="container">
    <div class="content">
      <h2>0xef983589FC5af54a5f5864B0B01bac5BE69b04a3</h2>
      <div class="popup">
        <h4>Copied 📋</h4>
      </div>
    </div>
  </div>
</body>
    
    const text = document.querySelector(".content h2");
const popup = document.querySelector(".popup");

text.addEventListener("click", () => {
  popup.classList.add("active");
});  

text.addEventListener("click", () => {
  copyToClipBoard();
});
popup.addEventListener("animationend", () => {
  popup.classList.remove("active");
});

function copyToClipBoard() {
  const textarea = document.createElement("textarea");
  textarea.setAttribute("readonly", "");
  textarea.value = text.innerText;
  textarea.style.position = "absolute";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}



