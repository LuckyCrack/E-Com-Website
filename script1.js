
function loadPage(iNumber)
{
  sessionStorage.setItem("num",iNumber)
  var linn = sessionStorage.getItem("isLoggedin").toString();

  if(linn == 'false')
  {
    alert('Log In or Sign Up')
  }
  else
  {
        window.location = 'link.html'
  }
}

function loadLogin()
{
  var inn = sessionStorage.getItem("isLoggedin").toString();
  if(inn == 'true')
  {
    alert('Already Logged In')
  }
  else
  {
      window.location = 'login.html'
  }
}
function loadSignup()
{
  window.location = 'signup.html'
}
