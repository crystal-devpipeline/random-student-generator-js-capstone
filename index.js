function loadScript(url)
{    
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);   
}

loadScript('./js/getUsers.js');
loadScript('./js/weightUsers.js');
loadScript('./js/randomUsers.js');
