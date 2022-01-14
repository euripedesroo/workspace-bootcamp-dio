
const pali = (text) => {
    const pal = text.split(``)
        .reverse()
        .join(``);
        console.log(pal)
return pal == text ? 'Palindromo confirmado' : 'Nao e um palindromo';
}

console.log(pali('ovo'));