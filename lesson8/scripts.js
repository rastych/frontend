/**
 * Created by rastych on 11/20/16.
 */
// var name = prompt('enter name');
// var password = prompt('enter password');
/*if(name === 'admin' && password === "admin") {
    document.write('you\'re admin');
}
else if(name === "user" && password === 'user') {
    document.write('hello user')
}
else {
    alert('get out');
}*/

/*
for(var i = 0; i < 3; i++) {
    console.log(i);
}*/

/*
(name === 'admin' && password === "admin") ? document.write('you\'re admin') : (name === "user" && password === 'user') ? document.write('hello user') : document.write('get out');*/

var fruites = ['oranges', 'apples', 2, 'bananas', 5, 'test']
var filteredArray = [];

for(var i = 0; i < fruites.length; i++) {
    console.log(fruites[i]);
    if(typeof fruites[i] === 'number') {
        continue;
    }
    filteredArray.push(fruites[i]);
}

console.log(filteredArray);