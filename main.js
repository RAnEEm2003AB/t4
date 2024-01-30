

let data = document.querySelector(".data");
let checkbox = document.querySelector(".myCheckbox");

data.onsubmit = task;

function task(ele) {
  ele.preventDefault();
  let input = "";
  let array = [];

  input = document.querySelector(".input").value;
  array.push(input);
  let result = `
   <div class="test ">
   <input type="checkbox" class="myCheckbox">
   <p class="inputName"><span class="">${input}</span></p>
   </div>
   `;

  document.querySelector(".Value").innerHTML+=result;

  let check = document.querySelectorAll(".myCheckbox");
    for (let i = 0; i < check.length; i++) {

      checkbox = check[i];
      checkbox.addEventListener("change", function(){ 

         let span =checkbox.closest('.test').querySelector('span');
        if (checkbox.checked) {
          span.classList.add("line");
        } 
        else {
          span.classList.remove("line");
        }
      });
    }
}

