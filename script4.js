function loadLogin()
{
  window.location = 'login.html'
}
function valid()
{
  var em = document.getElementById('em').value;
  var pw = document.getElementById('pw').value

  sessionStorage.setItem("isLoggedin",false);
  if(em == "" || pw =="")
  {
    alert('All fields is mandatory');
  }
  else
  {
    var e = CryptoJS.MD5(em).toString();
    var p = CryptoJS.MD5(pw).toString();
    sessionStorage.setItem("email_md5",e);
    sessionStorage.setItem("pass_md5",p);
    sessionStorage.setItem("isLoggedin",true);
    window.location = "index.html";
  }
}
