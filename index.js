let nomeHeroi = "Super Mario"
let xp = 7001

const mensagem = "O Herói de nome " + nomeHeroi + " está no nível "

if (xp < 1000) {
    console.log(mensagem + "Ferro")
} else if (xp > 1000 && xp < 2001) {
    console.log(mensagem + "Bronze")
} else if (xp > 2000 && xp < 5001) {
    console.log(mensagem + "Prata")
} else if (xp > 5000 && xp < 7001) {
    console.log(mensagem + "Ouro")
} else if (xp > 7000 && xp < 8001) {
    console.log(mensagem + "Platina")
} else if (xp > 8000 && xp < 9001) {
    console.log(mensagem + "Ascendente")
} else if (xp > 9000 && xp < 10001) {
    console.log(mensagem + "Imortal")
} else {
    console.log(mensagem + "Radiante")
}