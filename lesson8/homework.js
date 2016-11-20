/**
 * Created by rastych on 11/20/16.
 */
// 1
i = prompt('enter string');

function stringLength(i) {
    return i.length;
}

i = stringLength(i);

document.write('Длина строки - ' + i);

//2

function whatExactlyIsTheLengthOfThisFuckingString(i) {
    if (i < 10) {
        return i = ', а это меньше десяти';
    }
    else if (i > 10) {
        return i = ', а это больше десяти';
    }
    else {
        return i = ', а это - 10!!!'
    }
}

i = whatExactlyIsTheLengthOfThisFuckingString(i)

document.write(i);