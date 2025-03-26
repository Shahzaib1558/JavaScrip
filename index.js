
function getpercentage()
{
   let stdtmMarks = document.getElementById(`tm1`).value ;
   let stdobtMarks = document.getElementById(`om1`).value ;
   let res = (stdobtMarks/stdtmMarks)*100

   document.write(` your percentage is ${res}`)
   console.log(`your percentage is ${res}`)
   alert(`your percentage is ${res}`)
}


function zakat()
{
   let income = document.getElementById(`inc`).value ;
   let zakat = 2.5 ;
   let res = (wealth*zakat)/100 ;
   document.write(` your zakat is ${res}`)
   console.log(`your zakat is ${res}`)
   alert(`your zakat is ${res}`)
}


function getbmi()
{
   let weight = document.getElementById(`wei`).value ;
   let height = document.getElementById(`hei`).value ;
   let res = weight/ (height/100)*2
   document.write(` your bmi is ${res}`)
   console.log(`your bmi is ${res}`)
   alert(`your bmi is ${res}`)
}


function getbmr()
{
   let age = document.getElementById(`ag`).value ;
   let weight = document.getElementById(`we`).value ;
   let height = document.getElementById(`hi`).value ;
   let gender = document.getElementById(`gen`).value ;
   if (!age || !weight || !height || !gender) {
      document.getElementById('result').innerText = "Please enter all values.";
      return;
  }
   let bmr ;
   
     if (gender === "male") {
      bmr = (10*weight)+(6.25*height)-(5*age)+5
}
else{
   bmr = (10*weight)+(6.25*height)-(5*age)-161
}

   document.getElementById(`result`).innerText = `your bmr is ${bmr}`;
   console.log(`your bmr is ${bmr}`)
   alert(`your bmr is ${bmr}`)
}