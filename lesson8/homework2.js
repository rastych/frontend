/**
 * Created by rastych on 11/20/16.
 */
var mySite = prompt("Введите адрес сайта с протоколом", "https://site.ua");
var isHttps = null;

function checkProtocol(mySite) {
    if (mySite.indexOf("https://") == 0) {
        return isHttps = 'сайт секурный';
    } else {
        return isHttps = 'сайт несекурный нифига';
    }
}
alert (checkProtocol(mySite));

var str = "Хороший день";

str = str.slice(-5);

alert(str);