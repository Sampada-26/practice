let count = 0;

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
function checkCountValue(){
    if (count==10){
        alert("Your insta post gained 10 followers");
    }
    else if (count==20){
        alert("Your insta post gained 20 followers");
    }
}
function increaseCount() {
  count++; // Increment the count by 1
  displayCount(); // Display the count
  checkCountValue(); // Check count value and display messages
}
function reset(){
    count = 0;
    displayCount();
    alert("Followers count has been reset");
}
