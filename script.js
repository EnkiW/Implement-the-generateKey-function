function gKey(len, characters) {
    let key = '';
    const cL = characters.length;
    for (let i = 0; i < len; i++) {
        const random = Math.floor(Math.random() * cL);
        key += characters.charAt(random);
    }
    return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = gKey(16, characters);
console.log(key);
