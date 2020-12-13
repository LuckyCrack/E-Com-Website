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
function see()
{
  var e1 = document.getElementById('em').value;
  var p1 = document.getElementById('pw').value

  var emd = CryptoJS.MD5(e1).toString();
  var pmd = CryptoJS.MD5(p1).toString();

  var e_check = sessionStorage.getItem("email_md5");
  var p_check = sessionStorage.getItem("pass_md5");
  sessionStorage.setItem("isLoggedin",false);

  if(emd == e_check && pmd == p_check)
  {
    sessionStorage.setItem("isLoggedin",true);
    window.location = "index.html";
  }
  else
  {
    alert("Incorrect Credentials");
  }
}
