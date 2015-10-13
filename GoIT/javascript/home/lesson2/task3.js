var passw;
var login = prompt('Vvedite vash login');
if (login = '') alert('Canceled');
if (login == 'admin') passw = prompt('Vvedite parol');
else alert('Acess denied');
if (passw == 'passw0rd') alert('Welcome home!');
else alert('Wrong password');
