 

setInterval(function() {
  var div1 = document.getElementById("first_div");
  var div2 = document.getElementById("third_div");
  if(div1.className == 'green') {
    div1.className = '';
  } else {
    div1.className = 'green';
  }
  if(div2.className == 'brown') {
    div2.className = '';
  } else {
    div2.className = 'brown';
  } 
}, 3000);  


		/* JavaScript JQuery library  
		
 $(document).ready(function() {  
  setInterval(function() {
   $('#first_div').toggleClass('green');
   $('#third_div').toggleClass('brown'); 
  }, 3000);
 });   */