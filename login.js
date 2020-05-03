function display(){
  fetch('https://malika01.github.io/LoginForm/login.json')
  .then(function(response) {
      return response.json()
  }
  )
  .then(function(data) {
    var i
    var flag=0
    for(i=0;i<3;i++)
    {
      if(document.getElementById("name").value==data[i].username && document.getElementById("mail").value==data[i].email && document.getElementById("password").value==data[i].password)
      flag=1;
    }
      if(flag==1)
      document.getElementById("text").innerHTML = "successfully logged in!!"
      else
      document.getElementById("text").innerHTML = "login failed!!" 
      
  }   
  )
  }

  function reset(){
    document.getElementById('name').value=null
    document.getElementById('password').value=null
    document.getElementById('mail').value=null
    document.getElementById('text').innerHTML = " "
  }

  function showpass(){
    var i=document.getElementById("password")
    if(i.type == "password")
    i.type="text"
    else
    i.type="password"
  }
