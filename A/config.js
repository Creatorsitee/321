require("./Zion")
const fs = require('fs')
const { version } = require("./package.json")
//~~~~~~~~~SETTING BOT~~~~~~~~~~//

// Bebas Ubah
global.owner = "6281330563713"
global.nobot = "6281327138819"
global.namaowner = "Raden"
global.namaBot = "xpedia-ai"
global.title = "Artifical Intelligence"

// Jangan Di ubah
global.creator = `${owner}@s.whatsapp.net` 
global.foother = `${title}`
global.versi = version
global.nama = namaBot 
global.namach = nama 
global.namafile = foother 
global.author = namaowner

// Bebas Ubah
// True = on || False = Off 
global.autoread = true
global.autoai = true
global.autotyping = true
global.Antilinkgc = false
global.Antilinkch = false
global.antispam = false
global.onlygc = false
global.autobio = false

// Set Payment
global.qris = ""
global.dana = "081327138819"
global.gopay = "081327138819"

// ===={ Set Link }===
global.ch = 'https://whatsapp.com/channel/0029Vb6oJBuEQIaejo5HBx1l'
global.idch = '120363421530239282@newsletter'
global.linkgc = 'https://chat.whatsapp.com/HA7Vx6pti9kBk7zQk1bQZF'
global.yt = 'https://youtube.com/@'
global.nekorin = "https://api.nekorinn.my.id"
global.idgc = "120363420046917912@g.us"
// ========set prefix========
global.setprefix = ".", "/", "#"

// User Sosmed
global.tt = "."
global.yt = "."
global.ig = "."

// Setting Api cVPS
global.doToken = "YOUAPIKEY"
global.linodeToken = "YOUAPIKEY"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://"
global.apikey = "ptla" //ptla
global.capikey = "ptlc" //ptlc

// [ THEME URL & URL ] ========//
global.thumbnail = 'https://d.uguu.se/JYmMrOWv.jpg'
global.thumbnaill = 'https://d.uguu.se/JYmMrOWv.jpg'

// Settings reply ~~~~~~~~~//
global.mess = {
    owner: "Khusus Owner",
    prem: "Khusus Premium",
    group: "Khusus di Group Chat",
    admin: "Khusus Admin",
    botadmin: "Bot Harus Jadi Admin",
    private: "Khusus di Private Chat",
    done: "Sukses"
}

global.packname = nama
global.author = author

//
global.gamewaktu = 60 // Game waktu
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar2 = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};

//~~~~~~~~~~~ !BIARIN AJA! ~~~~~~~~~~//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
