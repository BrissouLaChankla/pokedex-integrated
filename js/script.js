let IdSearch = 1;

const colors = {
    fire: "#ff7402",
    grass: "#33a165",
    steel: "#00858a",
    water: "#0050ac",
    psychic: "#c90086",
    ground: "#c90086",
    ice: "#70deff",
    flying: "#5d4e75",
    ghost: "#4d5b64",
    normal: "#753845",
    poison: "#7e0058",
    rock: "#6e1a00",
    fighting: "#634136",
    dark: "#272625",
    bug: "#6e1a00",
    dragon: "#00c431",
    electric: "#bba909",
    fairy: "#d31c81",
    unknow: "#757575",
    shadow: "#29292c",
}


// -- Bonne chance !

//  Votre code














// 1 -> #001
function formateNumber(number) {
    let str = "" + number
    let pad = "000"
    let ans = "#" + pad.substring(0, pad.length - str.length) + str;
    return ans;
}

// Transforme la Height et la Weight sous bon format
function getCorrectValue(value) {
    if (value < 10) {
        return "0." + value;
    } else {
        let splitted = value.toString().split('');
        splitted.splice(splitted.length-1 , 0, ".");
        return splitted.join('');
    }
}
