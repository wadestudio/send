document.querySelector('#profileMore').addEventListener('click',()=>{
  document.querySelector('.modal').style.display = "block";
});

document.querySelector('#closeModal').addEventListener('click',()=>{
  document.querySelector('.modal').style.display = "none";
});

document.querySelector('.modal').addEventListener('click',()=>{
  document.querySelector('.modal').style.display = "none";
});