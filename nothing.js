document.addEventListener('DOMContentLoaded', function() {
  const googleButton = document.getElementById('google-btn');
  if (googleButton) {
    googleButton.addEventListener('click', function() {
      window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&client_id=202808543491.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fauth.opera.com%2Faccount%2Fsocial%2Fv4%2Fcallback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&state=BQYmVyCbzqnvtZOGJOBul5UOyjyhMN&access_type=offline&prompt=select_account&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow';
    });
  } else {
    console.error('Google button not found');
  }
});