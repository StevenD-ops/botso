/* eslint-disable quotes */
const fs = require('fs-extra')
const { prefix, botName, linkGroup, emot, noOwner } = JSON.parse(fs.readFileSync('config.json'))


exports.hits = (hitxx, hitsxx) => {
    return `
*「 HITS 」*

*➸ Hits Today : ${hitxx}* 
*➸ Hits Total : ${hitsxx}*

Hits adalah banyaknya penggunaan *Command*
`
}
exports.grupinfo = (groupname, totalMem, welgrp, antibkp, ngrp, simihh, stprt, lepel, antlink, ngegasih, pirtex, porn, desc) => {
    return `
*「 GROUP INFO 」*

*➸ Name : ${groupname}* 
*➸ Members : ${totalMem}*
*➸ Welcome : ${welgrp ? 'Aktif' : 'Tidak Aktif'}*
*➸ Left : ${welgrp ? 'Aktif' : 'Tidak Aktif'}*
*➸ Anti NSFW : ${antibkp ? 'Aktif' : 'Tidak Aktif'}*
*➸ NSFW : ${ngrp ? 'Aktif' : 'Tidak Aktif'}*
*➸ SimSimi : ${simihh ? 'Aktif' : 'Tidak Aktif'}*
*➸ Leveling : ${lepel ? 'Aktif' : 'Tidak Aktif'}*
*➸ Auto Sticker : ${stprt ? 'Aktif' : 'Tidak Aktif'}*
*➸ Anti Link : ${antlink ? 'Aktif' : 'Tidak Aktif'}*
*➸ Anti Kasar : ${ngegasih ? 'Aktif' : 'Tidak Aktif'}*
*➸ Anti Virtext : ${pirtex ? 'Aktif' : 'Tidak Aktif'}*
*➸ Anti Porn : ${porn ? 'Aktif' : 'Tidak Aktif'}*
*➸ Group Description* : ${desc}

===========================`
}
exports.buy = (SN, time, pushname, totalharga, xpih, dapetnya) => {
    return `
「 B U Y 」
Pembelian berhasil dengan SN: ${SN} pada ${time}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
➯ Nama: ${pushname}
➯ Harga: ${totalharga}
➯ MY XP: ${xpih}
➯ Beli: +${dapetnya} 🎉
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
Jika ingin Unlimited Limit ketik ${prefix}premium

`
}
exports.buypremium = (SN, time, pushname, totalharga2, xpih2, dapetnya2) => {
    return `
「 BUY PREMIUM 」
Pembelian berhasil dengan SN: ${SN} pada ${time}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
➯ Nama: ${pushname}
➯ Harga: ${totalharga2} XP
➯ MY XP: ${xpih2}
➯ Beli: +${dapetnya2} 🎉
⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻⁻
Suport Owner ketik *${prefix}suport*

`
}
exports.addMenu = (newcase, time, keterangannya) => {
    return `
    *「 New Case 」*\n\nBerhasil ditambahkan dengan data:\n\n➸ *Nama Case*: ${newcase}\n➸ *Keterangan*:${keterangannya}\n\n➸ Cara Penggunaan : ${prefix}. ${newcase}\n➸ *Waktu Penambahan*: ${time}\n\n===========================`
}
exports.linkgrup = () => {
    return `${linkGroup}`
}

exports.addUpdate = (time, keterangan) => {
    return `*「 UPDATE 」*\n\nBerhasil ditambahkan dengan data:\n\n➸ *Pada*: ${time}\n➸ *Keterangan*: ${keterangan}\n\n===========================`
}


exports.MenuFound = (newcase2, keterangannya2, timenya) => {
    return `*「 ${newcase2} 」*\n\n➸${keterangannya2}\n\n➸ *Dibuat Pada*: ${timenya}\n===========================`
}
exports.MenuNotFound = (newcase2) => {
    return `*「 WARNING 」*\n\n*Case*: ${newcase2} Tidak Ada\n\n===========================`
}

////////////////

exports.perbaikan = () => {
    return ` Mohon maaf fitur ini sedang perbaikan~
    `
}
exports.getxp = (pushname) => {
    return `Hai ${pushname} Berikut cara mendapatkan XP & Limit\n=======================\n\n💎 chat di Grup . 1 chat = 100xp\n💎 Menangkan permainan *${prefix}dadu* dan get +4000 XP\n💎 Menangkan permainan *${prefix}slot* dan get +5000 XP\n*${prefix}claim*\n\n=======================

    `
}
exports.kodeBahasa = () => {
    return `Untuk cek kode bahasa klik ini https://id.wikipedia.org/wiki/Daftar_bahasa_menurut_ISO_639-2`
}
exports.kuotaEnd= () => {
    return `❌ Limit kamu sudah habis!\nKetik *${prefix}claim* ATAU *${prefix}shop* untuk mendapatkan limit.\n\n*Note:* Jika ingin *Unlimited*, hubungi owner : wa.me/${noOwner}`
}
exports.wait2 = () => {
    return `1 Limit terpakai, tunggu sebentar .. 📥`
}
exports.haram = () => {
    return '[❗] Fitur ini diblokir WhatApp'
}
exports.lapor = () => {
    return '[❗] Fitur ini sedang perbaikan. Jika ingin melapor silakan klik link ini: http://wa.me/6285216024226'
}

exports.groupandpremium = () => {
    // return '[❗] Fitur ini hanya bisa digunakan di  Grup. Jika ingin menenggunaan di private chat daftar member premiumsuport disini http://wa.me/6285216024226?text=Daftar%20*Premium*%20Gan ketik *${prefix}pricelist* untuk melihat harga.'
    return `[❗] Fitur ini hanya bisa digunakan di  Grup. Daftar *Premium* untuk menggunakan semua fitur bot ini di Private Chat.\nCek harga ketik *${prefix}harga*\n\n${linkGroup}`}

    // diky 
exports.wait = () => {
    return `Mohon tunggu sebentar~`
}

exports.ok = () => {
    return `Done Kak!`
}

exports.wrongFormat = () => {
    return `Format salah! Silakan cek cara penggunaan di *${prefix}menu*.`
}

exports.emptyMess = () => {
    return `Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd) => {
    return `Command *${prefix}${cmd}* tidak ditemukan!`
}

exports.blocked = (ownerNumber) => {
    return `Bot tidak menerima panggilan. Karena kamu telah melanggar rules, maka kamu telah diblok!\n\nHarap hubungi owner: wa.me/${ownerNumber.replace('@c.us', '')}`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner Ku!`
}

exports.doneOwner = () => {
    return `Done, Owner~`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!\nJoin Grup :  ${linkGroup}`
}

exports.adminOnly = () => {
    return `Command ini hanya bisa digunakan oleh admin grup!`
}

exports.notSimi = () => {
    return `Command SimSimi belum diaktifkan!`
}
exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.simiOn = () => {
    return `Command SimSimi berhasil *diaktifkan*! Ketik *${prefix}simi teks* untuk mulai percakapan!`
}
exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}
exports.simiOff = () => {
    return `Command SimSimi berhasil *dinonaktifkan*!`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}
exports.simiAlready = () => {
    return `Command SimSimi sudah diaktifkan sebelumnya.`
}

exports.addedGroup = (chat) => {
    return `Terima kasih telah mengundangku, para member *${chat.contact.name}*!\n\nSilakan register dengan cara ketik:\n*${prefix}register nama | umur*`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `------[ HALL OF SHAME ]------
    
Total diblokir: *${blockNumber.length}* users\n`
}

exports.notPremium = (noOwner) => {
    return `Kamu belum premium silahkan ketik *${prefix}shop*`
}
exports.notPremium2 = (noOwner) => {
    return `Maaf! Command ini khusus untuk user premium saja. Jika ingin daftar *Premium*\n\nklik ini: http://wa.me/${noOwner.replace('@c.us', '')}?text=Daftar%20*Premium*%20`
}

exports.notAdmin = () => {
    return `User bukan seorang admin!`
}

exports.adminAlready = () => {
    return `Tidak dapat mem-promote user yang merupakan admin!`
}

exports.botNotPremium = () => {
    return `Bot ini tidak mendukung command premium. Silakan hubungi pemilik bot ini.`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu!`
}


//////////////// TEMPLATE YT //////////////// 
exports.ytFound = (res) => {
    return `*Video ditemukan!*\n\n➸ *Judul*: ${res.title}\n➸ *Deskripsi*:\n${res.desc}\n➸ *Durasi*: ${res.duration} menit\n\nMedia sedang dikirim, mohon tunggu...`
}
exports.yta2 = (res) => {
    return `*「 YOUTUBE MP3 」*\n\n➸ *Link YT*: ${res.result.source}\n➸ *Judul*: ${res.result.judul}\n➸ *Size*: ${res.result.size}\n➸ *Ext*: ${res.result.extension}\n➸ *Download*: ${res.result.url} \n\nMedia sedang dikirim, mohon tunggu...\n\n=====================`
}
exports.ytv = (res) => {
    return `*「 YOUTUBE MP4 」*\n\n➸ *Link YT*: ${res.result.source}\n➸ *Judul*: ${res.result.judul}\n➸ *Download*: ${res.result.urlVideo} \n\nMedia sedang dikirim, mohon tunggu...\n\n=====================`
}
exports.ytv2 = (duration, filesize, title, desc) => {
    return `*Video ditemukan!*\n\n➸ *Link*: ${title}\n➸ *Judul*: ${title}\n*Size*: ${filesize}\n➸ *Deskripsi*:\n${desc}\n➸ *Durasi*: ${duration} menit\n\nMedia sedang dikirim, mohon tunggu...`
}
exports.ytDoc = () => {
    return `Bukanya di Folfer *Whatsapp Dokumen* kak biar bisa diputar...`
}

exports.notRegistered = (pushname) => {
    return `Kak ${pushname} belum terdaftar di database!\n\nSilakan daftar dengan ketik: *${prefix}daftar*\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n`
}

exports.registered = (pushname, userId, time, serial) => {
    return `*「 REGISTRATION 」*\n\nKakak telah terdaftar dengan data:\n\n➸ *Nama*: ${pushname}\n➸ *WA*: wa.me/${userId}\n➸ *Waktu pendaftaran*: ${time}\n➸ *Serial*: ${serial}\n\nKetik *${prefix}rules* terlebih dahulu ya~\nPrefix Bot : *${prefix}*\n\n ${linkGroup}`
}
// exports.registered = (name, age, userId, time, serial) => {
//     return `*「 REGISTRATION 」*\n\nKakak telah terdaftar dengan data:\n\n➸ *Nama*: ${name}\n➸ *Umur*: ${age}\n➸ *ID*: ${userId}\n➸ *Waktu pendaftaran*: ${time}\n➸ *Serial*: ${serial}\n\nCatatan:\nSimpan/Bintangin kode *serial* ini!\n\nKetik *${prefix}rules* terlebih dahulu ya~\n\n*Join Grup 1* :  https://chat.whatsapp.com/LKqlQmcp0vY6sxKoPjDpJz\n\n*Join Grup 2* :  https://chat.whatsapp.com/JIuBgMQogUmLsyMy0AT3Fs\n\n`
// }

exports.registeredAlready = () => {
    return `Kamu sudah Terdaftar.`
}

exports.received = (pushname) => {
    return `Halo ${pushname}!\nTerima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.limit = (time) => {
    return `Ups, Coba lagi dalam : \n⏰ *${time.hours}* jam *${time.minutes}* menit *${time.seconds}* detik.`
}
exports.limitdownload = (timedownload) => {
    return `Ups masih Cooldown, Coba lagi dalam : \n⏰ *${timedownload.minutes}* menit *${timedownload.seconds}* detik.`
}
exports.limitmaker = (timemaker) => {
    return `Ups masih Cooldown, Coba lagi dalam : \n⏰ *${timemaker.minutes}* menit *${timemaker.seconds}* detik.`
}
exports.limitgame = (timegame) => {
    return `Ups masih Cooldown, Coba lagi dalam : \n⏰ *${timegame.minutes}* menit *${timegame.seconds}* detik.`
}

exports.videoLimit = () => {
    return `Ukuran video terlalu besar!`
}

exports.joox = (result) => {
    return `*Lagu ditemukan!*\n\n➸ *Penyanyi*: ${result[0].penyanyi}\n➸ *Judul*: ${result[0].judul}\n➸ *Album*: ${result[0].album}\n➸ *Ext*: ${result[0].ext}\n➸ *Size*: ${result[0].filesize}\n➸ *Durasi*: ${result[0].duration}\n\nMedia sedang dikirim, mohon tunggu...`
}

exports.infomotor= (result) => {
    return `➸ *Merek*: ${result.title}\n➸ *Spesifikasi*: ${result.spesifikasi}\n➸ *Kekurangan*: ${result.kekurangan}\n➸ *Kelebihan*: ${result.kelebihan}\n➸ *Harga*: ${result.harga}`
}
exports.infomobil= (result) => {
    return `➸ *Merek*: ${result.title}\n➸ *Spesifikasi*: ${result.spesifikasi}\n➸ *Kekurangan*: ${result.kekurangan}\n➸ *Kelebihan*: ${result.kelebihan}\n➸ *Harga*: ${result.harga}`
}
exports.gsm = (result) => {
    return `➸ *Merek*: ${result.title}\n➸ *Spesifikasi*: ${result.spec}`
}

exports.receipt = (result) => {
    return `${result.title}\n\n${result.desc}\n\n*Bahan*: ${result.bahan}\n\n*Cara membuat*:\n${result.cara}`
}

exports.ytResult = (urlyt, title, channel, duration, views) => {
    return `➸ *Judul*: ${title}\n➸ *Channel*: ${channel}\n➸ *Durasi*: ${duration}\n➸ *Views*: ${views}\n➸ *Link*: ${urlyt}`
}

exports.profile = (username, status, premi, benet, adm, level, requiredXp, xp, levelRole3) => {
    return `-----[ *USER INFO* ]-----\n\n➸ *Username*: ${username}\n➸ *Status*: ${status}\n➸ *Premium*: ${premi}\n➸ *Banned*: ${benet}\n➸ *Admin*: ${adm}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${level}\n➸ *XP*: ${xp} / ${requiredXp}\n\n`
}

exports.detectorOn = (namagcnyo) => {
    return `*「 ANTI GROUP LINK 」*\n\nPerhatian untuk penghuni grup ${(namagcnyo)}\nGrup ini memiliki anti-group link detector, apabila ada salah satu member mengirim group link di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(namagcnyo)}`
}
exports.kasarOn = (namagcnyo) => {
    return `*「 ANTI BADWORD 」*\n\nPerhatian untuk penghuni grup ${(namagcnyo)}\nGrup ini memiliki anti Badword detector, apabila ada salah satu member berkata kasar akan aku kick otomatis!\n\nSekian terima kasih.\n- Admin ${(namagcnyo)}`
}

exports.detectorOff = () => {
    return `Fitur anti-group link berhasil *dinonaktifkan*!`
}
exports.kasarOff = () => {
    return `Fitur anti-badword berhasil *dinonaktifkan*!`
}

exports.detectorOnAlready = () => {
    return `Fitur anti-group link telah diaktifkan sebelumnya.`
}
exports.kasarAlready = () => {
    return `Fitur anti-badword telah diaktifkan sebelumnya.`
}

exports.antiNsfwOn = (namagcnyo) => {
    return `*「 ANTI NSFW LINK 」*\n\nPerhatian untuk penghuni grup ${(namagcnyo)}\nGrup ini memiliki anti-NSFW link detector, apabila ada salah satu member mengirim link NSFW/porn di sini maka dia akan ter-kick secara otomatis.\n\nSekian terima kasih.\n- Admin ${(namagcnyo)}`
}

exports.antiNsfwOff = () => {
    return `Fitur anti-NSFW link berhasil *dinonaktifkan*!`
}

exports.antiNsfwOnAlready = () => {
    return `Fitur anti-NSFW link telah diaktifkan sebelumnya.`
}

exports.linkDetected = () => {
    return `*「 ANTI GROUP LINK 」*\n\nKamu mengirim link group chat!\nMaaf tapi kami harus mengeluarkan mu...\nGood Bye~`
}
exports.kasarDetected = () => {
    return `*「 BADWORD DETECTED」*\n\nKamu telah berkata kasar di group chat!\nMaaf aku harus mengeluarkan mu...\ndadahhh~`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!\nKetik *${prefix}leveling* on\n\n=_=_=_=_=_=_=_=_=_=_\n\natau join di sini\n\n${linkGroup}\n\n`
}

exports.levelNull = () => {
    return `Kamu belum memiliki level!`
}

exports.welcome = (event) => {
    return `Selamat datang @${event.who.replace('@c.us', '')}!\n\nSemoga betah terus di grup kami ya~`
}

exports.welcomeOn = () => {
    return `Fitur welcome berhasil *diaktifkan*!`
}

exports.welcomeOff = () => {
    return `Fitur welcome berhasil *dinonaktifkan*!`
}

exports.welcomeOnAlready = () => {
    return `Fitur welcome telah diaktifkan sebelumnya.`
}

exports.minimalDb = () => {
    return `Butuh setidaknya *20* user yang memiliki level di database!`
}

exports.autoStikOn = () => {
    return `Fitur auto-stiker berhasil *diaktifkan*!`
}

exports.autoStikOff = () => {
    return `Fitur auto-stiker berhasil *dinonaktifkan*!`
}

exports.autoStikOnAlready = () => {
    return `Fitur auto-stiker telah diaktifkan sebelumnya.`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.gcClose = () => {
    return `*「 CLOSE 」*\n\nJam Malam BOT mau tidur👋.`
}

exports.gcOpen = () => {
    return `*「 OPEN 」*\n\nSekarang semua anggota dapat mengirim chat di grup ini.`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka! Tolong masukkan angka`
}

exports.playstore = (app_id, title, developer, description, price, free, url) => {
    return `➸ *Nama*: ${title}\n➸ *ID*: ${app_id}\n➸ *Developer*: ${developer}\n➸ *Gratis*: ${free}\n➸ *Harga*: ${price}\n➸ *Deskripsi*: ${description}\n➸ *Link* : https://play.google.com${url}`
}

exports.shopee = (nama, harga, terjual, shop_location, description, link_product) => {
    return `➸ *Nama*: ${nama}\n➸ *Harga*: ${harga}\n➸ *Terjual*: ${terjual}\n➸ *Lokasi*: ${shop_location}\n➸ *Link produk*: ${link_product}\n➸ *Deskripsi*: ${description}`
}

exports.pc = (pushname) => {
    return `*「 REGISTRATION 」*\n\nAkun kamu berhasil terdaftar! Silakan cek pesan ku di private chat mu ya ${pushname}~ :3\n\nNote:\nJika kamu tidak menerima pesan, artinya kamu belum save nomor bot.`
}

exports.registeredFound = (time, serial, userId) => {
    return `*「 REGISTERED 」*\n\n➸ *WA*: wa.me/${userId.replace('@c.us', '')}\n➸ *Waktu pendaftaran*: ${time}\n➸ *Serial*: ${serial}`
}

exports.registeredNotFound = (serial) => {
    return `Akun dengan serial: *${serial}* tidak ditemukan!`
}

exports.ytPlay = (result) => {
    return `*「 PLAY 」*\n\n➸ *Judul*: ${result.title}\n➸ *Durasi*: ${result.duration}\n➸ *Link*: ${result.url}\n\nMedia sedang dikirim, mohon tunggu...`
}
exports.pcOnly = () => {
    return `Command ini hanya bisa digunakan di dalam private chat (japri) saja!`
}

exports.linkNsfw = () => {
    return `*「 ANTI NSFW LINK 」*\n\nKakak telah mengirim link NSFW!\nMaaf, tapi aku harus mengeluarkan mu...`
}

exports.ageOld = () => {
    return `Kamu terlalu tua untuk menggunakan fitur ini! . `
}
exports.fileEror = () => {
    return `File ini tidak bisa didownload, silakan coba File lain . `
}

exports.menu = (pushname, sender, levelnya, xpnya,reqXp, uangku, role, totalUser, ppriu) => {
    return `🔴🟡🟢

Hai Kak ${pushname}
╔═════════════════════
╠≽ *Level*: ${levelnya}
╠≽ *XP*: ${xpnya} / ${reqXp}
╠≽ *Role*: ${role}
╠≽ *Money*: ${uangku}
╠≽ *Total Users:* ${totalUser}
╠≽ *Prefix Bot:* ${prefix}
╚═════════════════════
╔═════════════════════
║ Nama BOT : ${botName}
║ 700+ Fitur
║ Jika ada bug ketik ${prefix}lapor kata2nya
╚═════════════════════
══════════════════════
Dapatkan lebih banyak fitur menarik dengan cara daftar premium klik wa.me/${noOwner}?text=premium

Mau beli sc bot ini? murah klik wa.me/6285216024226?text=beli+sc+gan

Mau jadi ownerbot bisa add member premium, terima beres?  terjangkau klik wa.me/6285216024226?text=jadi+owner
══════════════════════
*LIST MENU YANG TERSEDIA* ✅

${emot} Menu Media 
${emot} Menu Bot 
${emot} Menu Edukasi 
${emot} Menu Stiker 
${emot} Menu Anime
${emot} Menu Maker 
${emot} Menu Grup 
${emot} Menu NSFW 
${emot} Menu Owner 
${emot} Menu Leveling
${emot} Menu Tools 
${emot} Menu Fun 
${emot} Menu Shop 
${emot} Menu Link
${emot} Menu Premium 
${emot} Menu Kerang 
${emot} *${prefix}NEW*
${emot} Contoh: *${prefix}menu media*
╔═════════════════════
╠≽ *Owner* : wa.me/${noOwner}
╚═════════════════════

    `
}

exports.kalkulator = () => {
    return `
Kalkulator.
* = Perkalian
+ = Pertambahan
- = Pengurangan
/ = Pembagian

Usage: *${prefix}kalkulator* 12*12

`
}


exports.menuMedia = () => {
    return `
╔══✪ [ *MENU MEDIA* ]
║
╠➣ *${prefix}googlereverse* reply foto
╠➣ *${prefix}reverseyandex* reply foto
╠➣ *${prefix}mediafire* link
╠➣ *${prefix}pinterestvideo* link
╠➣ *${prefix}addvn* namanya
╠➣ *${prefix}delvn* namanya
╠➣ *${prefix}listvn*
╠➣ *${prefix}getvn* namanya
║
╠➣ *${prefix}drakorongoin*
╠➣ *${prefix}ig2* link
╠➣ *${prefix}storyig* <username>
╠➣ *${prefix}gimage* <kata kunci>
╠➣ *${prefix}gambar* <anime>
╠➣ *${prefix}tiktokmusik* <link>
╠➣ *${prefix}playv* <judul>
╠➣ *${prefix}play3* <judul>
╠➣ *${prefix}ytsearch* judul
╠➣ *${prefix}lagu* judul
╠➣ *${prefix}play* lagu
╠➣ *${prefix}play2* lagu
╠➣ *${prefix}playvideo2* judul
╠➣ *${prefix}facebook* link
╠➣ *${prefix}ytmp3* link
╠➣ *${prefix}ytmp4* link
╠➣ *${prefix}yta* link
╠➣ *${prefix}yta2* link
╠➣ *${prefix}ytv* link
╠➣ *${prefix}ytv2* link
╠➣ *${prefix}joox* Judul
╠➣ *${prefix}tiktok* link
╠➣ *${prefix}tiktok2* link
╠➣ *${prefix}tiktoknowm* link
╠➣ *${prefix}twitter* link
╠➣ *${prefix}tiktokpic* username
╠➣ *${prefix}tomp3*
╠➣ *${prefix}mp3*
╠➣ *${prefix}igstory* kata_kunci
╠➣ *${prefix}pinterest* kata_kunci
╠➣ *${prefix}pinterest2* kata_kunci
╠➣ *${prefix}instagram* link
╠➣ *${prefix}happymod* apk
╠➣ *${prefix}moddroid* apk
╠➣ *${prefix}apkpure* apk
╠➣ *${prefix}wpsearch* kata_kunci
╠➣ *${prefix}igstalk* username
╠➣ *${prefix}igstalk2* username
╠➣ *${prefix}tiktokstalk* username
╠➣ *${prefix}removebg* kirim foto
╠➣ *${prefix}removebg2* kirim foto
╠➣ *${prefix}imgtopdf* kirim foto
╠➣ *${prefix}drakor* judul
╠
╠
╚═══✪ [ ${botName} ]

`
}

exports.menuEdu = () => {
    return `
╔═══✪[ *MENU EDUKASI* ]
║
╠➣ *${prefix}quotesislami*
╠➣ *${prefix}indbeasiswa*
╠➣ *${prefix}kisannabi* nama_nabi
╠➣ *${prefix}listsurah*
╠➣ *${prefix}cariayat* no surah *|* ayat
╠➣ *${prefix}carisurah* no surah
╠➣ *${prefix}ayataudio* no surah *|* ayat
╠➣ *${prefix}surahaudio* no surah
╠➣ *${prefix}tafsir* Al-mulk 10
╠➣ *${prefix}surah* nomor surah
╠➣ *${prefix}hadis*
╠➣ *${prefix}randomngaji*
╠➣ *${prefix}wikipedia* teks
╠➣ *${prefix}kbbi* kata
╠➣ *${prefix}resep* makanan
╠➣ *${prefix}kalkulator*
╠➣ *${prefix}jsolat*
╠➣ *${prefix}katabijak*
╠➣ *${prefix}motivasi*
╠➣ *${prefix}infohoax*
╠➣ *${prefix}fakta*
╠➣ *${prefix}quote*
╠➣ *${prefix}brainly* teksnya
╠➣ *${prefix}translate*
╠➣ *${prefix}kelpersegi* P Sisi
╠➣ *${prefix}luaspersegi* P Sisi
╠➣ *${prefix}luaskubik* P Sisi
╠➣ *${prefix}faktorial* angka
╠➣ *${prefix}kuadrat* Angka
╠➣ *${prefix}topdf*
╠➣ *${prefix}todoc*
╠➣ *${prefix}todocx*
╠➣ *${prefix}komprespdf*
╠
╠
╚═══✪ [ ${botName} ]


`
}

exports.menuSticker = () => {
    return `
╔═══✪ [ *MENU STICKER* ]
║
╠➣ *${prefix}patrick*
╠➣ *${prefix}amongus*
╠➣ *${prefix}gawrgura*
╠➣ *${prefix}anjing*
╠➣ *${prefix}bucinstick*
╠➣ *${prefix}emojitoimg* emotnya
╠➣ *${prefix}sticker*
╠➣ *${prefix}stickerp* ANTI CROP
╠➣ *${prefix}sgif*
╠➣ *${prefix}gif*
╠➣ *${prefix}ttg* teks
╠➣ *${prefix}snobg* kirim foto
╠➣ *${prefix}snobg2* kirim foto
╠➣ *${prefix}stickertoimg*
╠➣ *${prefix}emojistiker* emot
╠➣ *${prefix}stickerwm* teks | teks
╠➣ *${prefix}stickermeme* teks | teks
╠➣ *${prefix}attp* teks
╠➣ *${prefix}imgtourl*
╠➣ *${prefix}linesticker*
╠➣ *${prefix}findstiker* kata_kunci
╠➣ *${prefix}ttp2* teks
╠➣ *${prefix}steks* teks
╠➣ *${prefix}stikernobg* 
╠➣ *${prefix}animestiker* 
╠
╠ 
╚═══✪ [ ${botName} ]
 

`
}
exports.menuAnime = () => {
    return `
╔═══✪ [ *MENU ANIME* ]
║
╠➣ *${prefix}quotenime*
╠➣ *${prefix}neko*
╠➣ *${prefix}genshin* karakter
╠➣ *${prefix}neko2*
╠➣ *${prefix}kemono*
╠➣ *${prefix}waifu*
╠➣ *${prefix}waifustiker*
╠➣ *${prefix}anoboy*
╠➣ *${prefix}anitoki*
╠➣ *${prefix}kusonime* judul
╠➣ *${prefix}komiku* judul_manga
╠➣ *${prefix}wait* reply_foto
╠➣ *${prefix}saurce* reply_foto
╠➣ *${prefix}wp*
╠➣ *${prefix}wpanime*
╠➣ *${prefix}wpanime2*
╠➣ *${prefix}baka*
╠➣ *${prefix}rhug*
╠➣ *${prefix}slap*
╠➣ *${prefix}nekostiker*
╠➣ *${prefix}randompat*
╠
╠
╚═══✪ [ ${botName} ]



`
}
exports.menuMaker = () => {
    return `
╔═══✪ [ *MENU MAKER* ]
║
╠➣ *${prefix}pubgmaskot* teks
╠➣ *${prefix}aovwall* teks
╠➣ *${prefix}mlwall* teks
╠➣ *${prefix}logogaming* teks
╠➣ *${prefix}fpslogo* teks
╠➣ *${prefix}avatarlolnew* teks
╠➣ *${prefix}avatardota* teks
╠➣ *${prefix}lolbanner* teks
╠➣ *${prefix}affect* reply foto
╠➣ *${prefix}jail* reply foto
╠➣ *${prefix}rainbow* reply foto
╠➣ *${prefix}sepia* reply foto
╠➣ *${prefix}rip* reply foto
╠➣ *${prefix}beautiful* reply foto
╠➣ *${prefix}amongus* teks1
╠➣ *${prefix}gsuggest* teks1 teks2 teks3
╠➣ *${prefix}toloserti* teks
╠➣ *${prefix}fuckboy* teks
╠➣ *${prefix}fuckgirl* teks
╠➣ *${prefix}bucinserti* teks
╠➣ *${prefix}pacarserti* teks
╠➣ *${prefix}goodboy* teks
╠➣ *${prefix}goodgirl* teks
╠➣ *${prefix}badgirl* teks
╠➣ *${prefix}badboy* teks
║
╠➣ *${prefix}quotemaker* teks
╠➣ *${prefix}quotemaker2* teks | nama
╠➣ *${prefix}quotemaker3* teks+reply foto
╠➣ *${prefix}hartacustom* teks
╠➣ *${prefix}kannagen* teks
╠➣ *${prefix}changemymind* teks
╠➣ *${prefix}yugioh* judul | desc (+reply foto)
║
╠➣ *${prefix}flip*
╠➣ *${prefix}grayscale*
╠➣ *${prefix}roundimage*
╠➣ *${prefix}1977*
╠➣ *${prefix}aden*
╠➣ *${prefix}brannan*
╠➣ *${prefix}brooklyn*
╠➣ *${prefix}clarendon*
╠➣ *${prefix}gingham*
╠➣ *${prefix}hudson*
╠➣ *${prefix}inkwell*
╠➣ *${prefix}earlybird*
╠➣ *${prefix}kelvin*
╠➣ *${prefix}lark*
╠➣ *${prefix}lofi*
╠➣ *${prefix}maven*
╠➣ *${prefix}mayfair*
╠➣ *${prefix}moon*
╠➣ *${prefix}nashville*
╠➣ *${prefix}perpetua*
╠➣ *${prefix}reyes*
╠➣ *${prefix}rise*
╠➣ *${prefix}slumber*
╠➣ *${prefix}stinson*
╠➣ *${prefix}toaster*
╠➣ *${prefix}valencia*
╠➣ *${prefix}walden*
╠➣ *${prefix}xpro2*
║
╠➣ *${prefix}burneffect* kirim foto/reply
╠➣ *${prefix}crossgun* kirim foto/reply
╠➣ *${prefix}gtavposter* kirim foto/reply
╠➣ *${prefix}imageburning* kirim foto/reply
╠➣ *${prefix}raindrop* kirim foto/reply
╠➣ *${prefix}nightbeach* kirim foto/reply
╠➣ *${prefix}customwp* kirim foto/reply
╠➣ *${prefix}3dlinephoto* kirim foto/reply
║
╠➣ *${prefix}sweetcandy* textnya
╠➣ *${prefix}woodblock* textnya
╠➣ *${prefix}lovemsg* textnya
╠➣ *${prefix}mugflower* textnya
╠➣ *${prefix}glowingneon* textnya
╠➣ *${prefix}underwater* textnya
╠➣ *${prefix}candlemug* textnya
║
╠➣ *${prefix}text1*
╠➣ *${prefix}neon* textnya
╠➣ *${prefix}greenneon* textnya
╠➣ *${prefix}advanceglow* textnya
╠➣ *${prefix}futureneon* textnya
╠➣ *${prefix}sandwriting* textnya
╠➣ *${prefix}sandsummer* textnya
╠➣ *${prefix}sandengraved* textnya
╠➣ *${prefix}metaldark* textnya
╠➣ *${prefix}neonlight* textnya
╠➣ *${prefix}holographic* textnya
╠➣ *${prefix}text1917* textnya
╠➣ *${prefix}minion* textnya
╠➣ *${prefix}deluxesilver* textnya
╠➣ *${prefix}newyearcard* textnya
╠➣ *${prefix}bloodfrosted* textnya
╠➣ *${prefix}halloween* textnya
╠➣ *${prefix}jokerlogo* textnya
╠➣ *${prefix}breakwall* textnya
╠➣ *${prefix}fireworksparkle* textnya
╠➣ *${prefix}natureleaves* textnya
╠➣ *${prefix}bokeh* textnya
╠➣ *${prefix}toxic* textnya
╠➣ *${prefix}strawberry* textnya
╠➣ *${prefix}box3d* textnya
╠➣ *${prefix}roadwarning* textnya
╠➣ *${prefix}icecold* textnya
╠➣ *${prefix}luxury* textnya
╠➣ *${prefix}cloud* textnya
╠➣ *${prefix}summersand* textnya
╠➣ *${prefix}horrorblood* textnya
╠➣ *${prefix}thunder* textnya
╠➣ *${prefix}pornhub* teks1 | teks2
╠➣ *${prefix}glitch* teks1 | teks2
╠➣ *${prefix}avenger* teks1 | teks2
╠➣ *${prefix}space* teks1 | teks2
╠➣ *${prefix}ninjalogo* teks1 | teks2
╠➣ *${prefix}marvelstudio* teks1 | teks2
╠➣ *${prefix}lionlogo* teks1 | teks2
╠➣ *${prefix}wolflogo* teks1 | teks2
╠➣ *${prefix}steel3d* teks1 | teks2
╠➣ *${prefix}wallgravity* teks1 | teks2
╠➣ *${prefix}codwar* text1 | teks2
╠➣ *${prefix}ffrandom* text1 | teks2
╠➣ *${prefix}Juventus* text1 | nomor
╠➣ *${prefix}wetglass* teksnya
╠➣ *${prefix}multicolor3d* teksnya
╠➣ *${prefix}luxurygold* teksnya
╠➣ *${prefix}galaxywallpaper* teksnya
╠➣ *${prefix}watercolor* teksnya
╠➣ *${prefix}lighttext* teksnya
╠➣ *${prefix}royaltext* teksnya
╠➣ *${prefix}heartshaped* teksnya
╠➣ *${prefix}birthdaycake* teksnya
╠➣ *${prefix}galaxystyle* teksnya
╠➣ *${prefix}greenneon* teksnya
╠➣ *${prefix}hologram3d* teksnya
╠➣ *${prefix}glossychrome* teksnya
╠➣ *${prefix}greenbush* teksnya
╠➣ *${prefix}metallogo* teksnya
╠➣ *${prefix}noeltext* teksnya
╠➣ *${prefix}textcake* teksnya
╠➣ *${prefix}starsnight* teksnya
╠➣ *${prefix}wooden3d* teksnya
╠➣ *${prefix}textbyname* teksnya
╠➣ *${prefix}writegalacy* teksnya
╠➣ *${prefix}galaxybat* teksnya
╠➣ *${prefix}snow3d* teksnya
╠➣ *${prefix}birthdayday* teksnya
╠➣ *${prefix}goldplaybutton* teksnya
╠➣ *${prefix}silverplaybutton* teksnya
╠➣ *${prefix}freefire* teksnya
╠➣ *${prefix}beautifulflower* teksnya
╠➣ *${prefix}starsnight* teksnya
╠➣ *${prefix}glittergold* teksnya
╠➣ *${prefix}fflogo* karakter | teks
╠➣ *${prefix}ffbanner* teks | teks
╠➣ *${prefix}logogame* teks
╠➣ *${prefix}pubg* teks | teks
╠➣ *${prefix}csgo* teks | teks
║
╠➣ *${prefix}text1*
╠➣ *${prefix}sensor* kirim foto
╠➣ *${prefix}invert* kirim foto
╠➣ *${prefix}fisheye* kirim foto
╠➣ *${prefix}ytkomen*
╠➣ *${prefix}hartatahta* teks
╠➣ *${prefix}nulis* teks
╠➣ *${prefix}stylelogo* teks
╠➣ *${prefix}8bit* teks
╠➣ *${prefix}nulishd* teks
╠➣ *${prefix}blackping* teks
╠➣ *${prefix}phmaker* teks | teks
╠➣ *${prefix}galaxy* teks 
╠➣ *${prefix}triggered* reply chat
╠➣ *${prefix}trigger* reply gambar
╠➣ *${prefix}phcomment* Nama | teks
╠➣ *${prefix}fflogo* karakter | teks
╠➣ *${prefix}firemaker* teks
╠➣ *${prefix}mlmaker* hero | teks
╠➣ *${prefix}blmaker* teks | teks
╠➣ *${prefix}sliding* teks 
╠➣ *${prefix}trash* tag_member
╠➣ *${prefix}hitler* tag_member
╠➣ *${prefix}wasted* kirim gambar
╠➣ *${prefix}hilih* teks 
╠➣ *${prefix}ffbanner* teks | teks
╠➣ *${prefix}logogame* teks 
╠➣ *${prefix}metal* teks 
╠➣ *${prefix}glitchtext* teks | teks
╠➣ *${prefix}shadow* teks
╠➣ *${prefix}burn* teks
╠➣ *${prefix}kopi* teks
╠➣ *${prefix}love* teks
╠➣ *${prefix}wood* teks
╠➣ *${prefix}qowh* teks
╠➣ *${prefix}grass* teks
╠➣ *${prefix}potter* teks
╠➣ *${prefix}warface* teks
╠➣ *${prefix}pubg* teks | teks
╠➣ *${prefix}csgo* teks | teks
╠➣ *${prefix}snowwrite* teks | teks
╠➣ *${prefix}cup* teks
╠➣ *${prefix}cup2* teks
╠➣ *${prefix}party* teks
╠➣ *${prefix}padlock* 1 1 2001 | Aku
╠➣ *${prefix}glassmaker* teks
╠➣ *${prefix}logowolf* teks | teks
╠➣ *${prefix}blackpinkmaker* teks
╠➣ *${prefix}blackpinkmaker2* teks
╠➣ *${prefix}teks3d* teks
╠➣ *${prefix}dropwater* teks
╠➣ *${prefix}matrixmaker* teks
╠➣ *${prefix}grafiti* teks
╠➣ *${prefix}breakwall* teks
╠➣ *${prefix}neonblue* teks
╠➣ *${prefix}neonlight* teks
╠➣ *${prefix}trumptweet* teks
╠➣ *${prefix}gradien* teks
╠➣ *${prefix}draw1* tag/reply foto
╠➣ *${prefix}draw2* tag/reply foto
╠
╠➣ *${prefix}watglass* teksnya
╠➣ *${prefix}multicolor* teksnya
╠➣ *${prefix}luxurygold* teksnya
╠➣ *${prefix}galaxywallpaper* teksnya
╠➣ *${prefix}watercolor* teksnya
╠➣ *${prefix}lighttext* teksnya
╠➣ *${prefix}royaltext* teksnya
╠➣ *${prefix}heartshaped* teksnya
╠➣ *${prefix}birthdaycake* teksnya
╠➣ *${prefix}galaxystyle* teksnya
╠➣ *${prefix}greenneon* teksnya
╠➣ *${prefix}hologram3d* teksnya
╠➣ *${prefix}glossychrome* teksnya
╠➣ *${prefix}greenbush* teksnya
╠➣ *${prefix}metallogo* teksnya
╠➣ *${prefix}noeltext* teksnya
╠➣ *${prefix}textcake* teksnya
╠➣ *${prefix}starsnight* teksnya
╠➣ *${prefix}wooden3d* teksnya
╠➣ *${prefix}textbyname* teksnya
╠➣ *${prefix}writegalacy* teksnya
╠➣ *${prefix}galaxybat* teksnya
╠➣ *${prefix}snow3d* teksnya
╠➣ *${prefix}birthdayday* teksnya
╠➣ *${prefix}goldplaybutton* teksnya
╠➣ *${prefix}silverplaybutton* teksnya
╠➣ *${prefix}freefire* teksnya
╠➣ *${prefix}beautifulflower* teksnya
╠➣ *${prefix}starsnight* teksnya
╠➣ *${prefix}glittergold* teksnya
║
║
╚═══✪ [ ${botName} ]



`
}

exports.menuPremium2 = () => {
    return `
Menu ini telah dipindahkah ke *${prefix}menu*
`}
exports.menuPremium = () => {
    return `
╔═══✪ [ *MENU PREMIUM* ]
║
╠➣ *${prefix}play2* lagu
╠➣ *${prefix}play3* lagu
╠➣ *${prefix}joox* lagu
╠➣ *${prefix}lagu* judul
╠➣ *${prefix}playvideo* judul
╠➣ *${prefix}playvideo2* judul
╠➣ *${prefix}yta* link
╠➣ *${prefix}yta2* link
╠➣ *${prefix}ytv* link
╠➣ *${prefix}ytv2* link
╠➣ *${prefix}joox* 
╠➣ *${prefix}tiktoknowm* link
╠➣ *${prefix}tiktoknowm2* link
╠➣ *${prefix}twitter* link
╠➣ *${prefix}tomp3*
╠➣ *${prefix}igstory* kata_kunci
╠➣ *${prefix}removebg* kirim foto
╠➣ *${prefix}snobg* kirim foto
╠➣ *${prefix}imgtopdf* kirim foto
╠➣ *${prefix}drakor* judul
╠➣ *${prefix}happymod* apk
╠➣ *${prefix}pinterest2* kata_kunci
║
╠➣ *${prefix}codwar* text1 | teks2
╠➣ *${prefix}Juventus* text1 | nomor
╠➣ *${prefix}watglass* teksnya
╠➣ *${prefix}multicolor* teksnya
╠➣ *${prefix}luxurygold* teksnya
╠➣ *${prefix}galaxywallpaper* teksnya
╠➣ *${prefix}watercolor* teksnya
╠➣ *${prefix}lighttext* teksnya
╠➣ *${prefix}royaltext* teksnya
╠➣ *${prefix}heartshaped* teksnya
╠➣ *${prefix}birthdaycake* teksnya
╠➣ *${prefix}galaxystyle* teksnya
╠➣ *${prefix}greenneon* teksnya
╠➣ *${prefix}hologram3d* teksnya
╠➣ *${prefix}glossychrome* teksnya
╠➣ *${prefix}greenbush* teksnya
╠➣ *${prefix}metallogo* teksnya
╠➣ *${prefix}noeltext* teksnya
╠➣ *${prefix}textcake* teksnya
╠➣ *${prefix}starsnight* teksnya
╠➣ *${prefix}wooden3d* teksnya
╠➣ *${prefix}textbyname* teksnya
╠➣ *${prefix}writegalacy* teksnya
╠➣ *${prefix}galaxybat* teksnya
╠➣ *${prefix}snow3d* teksnya
╠➣ *${prefix}birthdayday* teksnya
╠➣ *${prefix}goldplaybutton* teksnya
╠➣ *${prefix}silverplaybutton* teksnya
╠➣ *${prefix}freefire* teksnya
╠➣ *${prefix}beautifulflower* teksnya
╠➣ *${prefix}starsnight* teksnya
╠➣ *${prefix}glittergold* teksnya
╠➣ *${prefix}fflogo* karakter | teks
╠➣ *${prefix}ffbanner* teks | teks
╠➣ *${prefix}logogame* teks
║
╠➣ *${prefix}findstiker* kata_kunci
╠➣ *${prefix}stickerp* ANTI CROP
╠➣ *${prefix}stickerwm* teks | teks
╠➣ *${prefix}brainly* teksnya
╠➣ *${prefix}translate* 
╠➣ *${prefix}wikipedia* teksnya
╠➣ *${prefix}stikernobg*
╠➣ *${prefix}findstiker* teksnya
╠➣ *${prefix}wpsearch* katakunci
╠➣ *${prefix}wpanime*
╠➣ *${prefix}wpanime2*
║
╠➣ *${prefix}spamsms* 628xxx
╠➣ *${prefix}spamcall* 8xxx
╠➣ *${prefix}nsfwcek* kirimgambar
║
║
╠➣ *${prefix}premiumlist*
╠➣ *${prefix}setbg* link.jpg
║
╠➣ *${prefix}imgtopdf* kirim foto
╠➣ *${prefix}happymood* apk
║
╠➣ *${prefix}simsimi* ON/OFF
╠➣ *${prefix}welcome* ON/OFF
╠➣ *${prefix}antikasar* ON/OFF
╠➣ *${prefix}antiporn* ON/OFF
║
╠➣ *${prefix}lapor* teknya jika ada bug
║
╠➣ *DAN LAIN LAIN ++*
║
╚═══✪ [ ${botName} ]

`
}
exports.menuGrup = () => {
    return `
╔═══✪ [ *MENU GRUP* ]
║
╠➣ *${prefix}grupinfo*
╠➣ *${prefix}add* 628xxx
╠➣ *${prefix}kick* 628xxx
╠➣ *${prefix}kickfake*
╠➣ *${prefix}setgroupname*
╠➣ *${prefix}linkg*
╠➣ *${prefix}promote* tag_member
╠➣ *${prefix}demote* tag_admin
╠➣ *${prefix}leave*
╠➣ *${prefix}tagall*
╠➣ *${prefix}simsimi* ON/OFF
╠➣ *${prefix}antiluar* ON/OFF
╠➣ *${prefix}antiporn* ON/OFF
╠➣ *${prefix}nsfw* ON/OFF
╠➣ *${prefix}antilink* ON/OFF
╠➣ *${prefix}antikasar* ON/OFF
╠➣ *${prefix}welcome* ON/OFF
╠➣ *${prefix}autosticker* ON/OFF
╠➣ *${prefix}antivirtext* ON/OFF
╠➣ *${prefix}closegc* ON/OFF
╠➣ *${prefix}ava* reply_foto
╠➣ *${prefix}kickall*
╠➣ *${prefix}ownergroup*
╠➣ *${prefix}adminlist*
╠➣ *${prefix}sider* reply_bot
╠➣ *${prefix}edotensei* tag_member
╠➣ *${prefix}getpic* tag_member
╠➣ *${prefix}ceksange* tag_member
╠➣ *${prefix}profile*
╠➣ *${prefix}infogc* link_gc
╠
╠
╚═══✪ [ ${botName} ]

`
}
exports.menuBot = () => {
    return `
╔══✪ [ *MENU BOT* ]
║
╠➣ *${prefix}buypremium*
╠➣ *${prefix}support*
╠➣ *${prefix}listgrup*
╠➣ *${prefix}premium*
╠➣ *${prefix}daftarpremium*
╠➣ *${prefix}runtime*
╠➣ *${prefix}menu*
╠➣ *${prefix}bot* teks
╠➣ *${prefix}resend* reply_file
╠➣ *${prefix}help*
╠➣ *${prefix}status*
╠➣ *${prefix}listblock*
╠➣ *${prefix}listbanned*
╠➣ *${prefix}ping*
╠➣ *${prefix}delete*
╠➣ *${prefix}lapor* teks
╠➣ *${prefix}tos* 
╠➣ *${prefix}owner* 
╠➣ *${prefix}owner* 
╠➣ *${prefix}premiumcheck* 
╠➣ *${prefix}premiumlist* 
╠➣ *${prefix}linkgrup* 
╠➣ *${prefix}linkgrup* 
╠➣ *${prefix}jamaktif* 
╠➣ *${prefix}buatgrup* nama
╠➣ *${prefix}rules*
╠➣ *${prefix}getcontact* tag member
╠➣ *${prefix}getnomor* tag member
╠
╠
╚═══✪ [ ${botName} ]


`
}

exports.menuNsfw = () => {
    return `
-----[ NSFW ]-----

1. *${prefix}lewds*
Mengirim pict anime lewd.
Aliases: *lewd*
Usage: *${prefix}lewds*

2. *${prefix}multilewds*
Mengirim up to 5 anime lewd pics. (PREMIUM ONLY)
Aliases: *multilewds multilewd mlewd mlewds*
Usage: *${prefix}multilewds*

3. *${prefix}nhentai*
Mengirim info doujinshi dari nHentai.
Aliases: *nh*
Usage: *${prefix}nhentai* kode

4. *${prefix}nhdl*
Mendownload doujin dari nHentai sebagai file PDF. (PREMIUM ONLY)
Aliases: -
Usage: *${prefix}nhdl* kode

5. *${prefix}nekopoi*
Mengirim video link Nekopoi terbaru.
Aliases: -
Usage: *${prefix}nekopoi*

6. *${prefix}multifetish*
Mengirim up to 5 fetish pics. (PREMIUM ONLY)
Aliases: *mfetish*
Usage: *${prefix}multifetish* <armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao>

7. *${prefix}waifu18*
Mengirim random foto waifu NSFW.
Aliases: -
Usage: *${prefix}waifu18*

8. *${prefix}fetish*
Mengirim fetish pics.
Aliases: -
Usage: *${prefix}fetish* armpits/feets/thighs/ass/boobs/belly/sideboobs/ahegao

9. *${prefix}phdl*
Download video dari Pornhub.
Aliases: -
Usage *${prefix}phdl* link

10. *${prefix}yuri*
Mengirim random foto lewd yuri.
Aliases: -
Usage: *${prefix}yuri*

11. *${prefix}lewdavatar*
Mengirim random avatar lewd.
Aliases: -
Usage: *${prefix}lewdavatar*

12. *${prefix}femdom*
Mengirim random foto ero femdom.
Aliases: -
Usage: *${prefix}femdom*

13. *${prefix}nhsearch*
nHentai search.
Aliases: -
Usage: *${prefix}nhsearch* query

14. *${prefix}nekosearch*
Nekopoi search.
Aliases: -
Usage: *${prefix}nekosearch* query

_Index of [8]_
    `
}


exports.menuOwner = () => {
    return `
╔═══✪ [ *MENU OWNER* ]
║
╠➣ *${prefix}infoapi*
╠➣ *${prefix}set*
╠➣ *${prefix}bc*
╠➣ *${prefix}clearall*
╠➣ *${prefix}block* tag
╠➣ *${prefix}unblock* tag 
╠➣ *${prefix}getses*
╠➣ *${prefix}reset*
╠➣ *${prefix}ban* add/del user
╠➣ *${prefix}prem* add/del user day
╠➣ *${prefix}leaveall*
╠➣ *${prefix}eval*
╠➣ *${prefix}sendv* 628xx
╠➣ *${prefix}japri* 628xx | pesan
╠➣ *${prefix}shutdown*
╠➣ *${prefix}setstatus*
╠➣ *${prefix}setpp*
╠➣ *${prefix}serial* NOMOR
╠➣ *${prefix}exif* pack | aut
╠➣ *${prefix}takestick* pack | aut
╠➣ *${prefix}muteall*
╠➣ *${prefix}setname*
╠➣ *${prefix}addupdate* 
╠➣ *${prefix}addcase* case | ket.
╠➣ *${prefix}newcase*
╠➣ *${prefix}open* nama_newcase
╠➣ *${prefix}mutebot* ON/OFF
╠➣ *${prefix}revoke*
╠➣ *${prefix}diterima* 628xx | pesan
╠➣ *${prefix}givexp* 628xx jumlah
╠➣ *${prefix}getlinkgc* id
╠➣ *${prefix}okick* reply_chat
╠➣ *${prefix}sessionid*
╠➣ *${prefix}unreg* 628xxx
╠
╚═══✪ [ ${botName} ]

`
}
exports.menuLeveling = () => {
    return `
╔═══✪ [ *LEVELING & LIMIT* ]
║
╠➣ *${prefix}suit*
╠➣ *${prefix}level*
╠➣ *${prefix}xp*
╠➣ *${prefix}lb*
╠➣ *${prefix}setbg*
╠➣ *${prefix}getxp*
╠➣ *${prefix}limit*
╠➣ *${prefix}dadu*
╠➣ *${prefix}slot*
╠➣ *${prefix}mining*
╠➣ *${prefix}claim*
╠➣ *${prefix}daily*
╠➣ *${prefix}givexpto* tag_mem jumlahxp 
╠
╚═══✪ [ ${botName} ]

`
}
exports.menuTools = () => {
    return `
╔═══✪ [ *MENU TOOLS* ]
║
╠➣ *${prefix}carigrup* kata kunci
╠➣ *${prefix}ocr* kirim gambar
╠➣ *${prefix}githubstalk* username
╠➣ *${prefix}encode* teks
╠➣ *${prefix}decode* teks
╠➣ *${prefix}texttohex* teks
╠➣ *${prefix}hextotext* teks
╠➣ *${prefix}playstore* apk
╠➣ *${prefix}chord* judul
╠➣ *${prefix}shopee* produk
╠➣ *${prefix}tts* teks
╠➣ *${prefix}tts2* teks
╠➣ *${prefix}say* teks
╠➣ *${prefix}movie* judul
╠➣ *${prefix}corona* negara
╠➣ *${prefix}jumlahhuruf* teks
╠➣ *${prefix}infogempa*
╠➣ *${prefix}gempa*
╠➣ *${prefix}spek* merk HP
╠➣ *${prefix}infomotor* merek
╠➣ *${prefix}infomobil* merek
╠➣ *${prefix}tribunnews*
╠➣ *${prefix}liputan6*
╠➣ *${prefix}lirik* judul
╠➣ *${prefix}shortlink* link
╠➣ *${prefix}bitly* link
╠➣ *${prefix}igstalk* username
╠➣ *${prefix}gsmarena* HP
╠➣ *${prefix}readmore* teks | teks
╠➣ *${prefix}afk* alasan
╠➣ *${prefix}distance* kota1 | kota2
╠➣ *${prefix}mutual*
╠➣ *${prefix}whois* alamat IP
╠➣ *${prefix}sms* pesan | nomornya
╠➣ *${prefix}cekongkir*
╠➣ *${prefix}jobseek*
╠➣ *${prefix}spamcall* nomor 
╠➣ *${prefix}email*
╠➣ *${prefix}sspc* link
╠➣ *${prefix}ssphone* link
╠➣ *${prefix}judul* judul
╠➣ *${prefix}resi* jnt (resi)
╠➣ *${prefix}qrcode* 
╠➣ *${prefix}qrread* 
╠➣ *${prefix}cuaca* 
╠➣ *${prefix}gempa* 
╠➣ *${prefix}kodebahasa* 
╠➣ *${prefix}reminder* 60s | pesan 
╠
╚═══✪ [ ${botName} ]


`
}

exports.rules = (noOwner) => {
    return `
-----[ RULES ]-----

1. Jangan spam bot. Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot. Sanksi: *SOFT BLOCK*

3. *${prefix}menu* untuk memulai!

4. Ketik *${prefix}dukung* untuk support OWNER.

Owner :  http://wa.me/${noOwner}

    `
}


exports.menuFun = () => {
    return `
╔═══✪ [ *MENU FUN* ]
║
╠➣ *${prefix}estetic*
╠➣ *${prefix}agedetect* reply foto
╠➣ *${prefix}facedetect* reply foto
╠➣ *${prefix}cekumur* reply foto
╠➣ *${prefix}google* <kata kunci>
╠➣ *${prefix}blush*
╠➣ *${prefix}bts*
╠➣ *${prefix}exo*
╠➣ *${prefix}blackpink*
╠➣ *${prefix}elf*
╠➣ *${prefix}husbu*
╠➣ *${prefix}sagiri*
╠➣ *${prefix}shinobu*
╠➣ *${prefix}megumin*
╠➣ *${prefix}usernameml* ID | ID 4 ANGKA
╠➣ *${prefix}usernameff* ID
╠➣ *${prefix}bucin2*
╠➣ *${prefix}randomnama*
╠➣ *${prefix}dilan*
╠➣ *${prefix}peluk* tag_member
╠➣ *${prefix}tag* teks
╠➣ *${prefix}readmore* teks | teks
╠➣ *${prefix}kiss* kirim_foto
╠➣ *${prefix}pantun*
╠➣ *${prefix}caklontong*
╠➣ *${prefix}asupan*
╠➣ *${prefix}creepyfact*
╠➣ *${prefix}namaninja* namamu
╠➣ *${prefix}caripacar*
╠➣ *${prefix}citacita*
╠➣ *${prefix}tod*
╠➣ *${prefix}simi* teks
╠➣ *${prefix}pasangan* nama | doimu
╠➣ *${prefix}zodiak* zodiakmu
╠➣ *${prefix}toxic*
╠➣ *${prefix}trending*
╠➣ *${prefix}jadian*
╠➣ *${prefix}cantik*
╠➣ *${prefix}ganteng*
╠➣ *${prefix}sange*
╠➣ *${prefix}kpop* blackpink/exo/bts
╠➣ *${prefix}jadwalbola*
╠➣ *${prefix}join*
╠➣ *${prefix}quotesimg*
╠➣ *${prefix}simi* teks
╠➣ *${prefix}bot* teks
╠➣ *${prefix}fiersa*
╠➣ *${prefix}katailham*
╠➣ *${prefix}bucin*
╠➣ *${prefix}hekerbucin*
╠➣ *${prefix}memeindo*
╠➣ *${prefix}puisi*
╠➣ *${prefix}cerpen*
╠
╠
╚═══✪ [ ${botName} ]


`
}


exports.menuShop = (noOwner) => {
    return `🔴🟡🟢-〘 *MENU SHOP* 〙---
 

HARGA DAFTAR PREMIUM :
Rp. 5k = 7 hari
Rp. 10k = 14 hari
Rp. 20k = 1 bulan
Rp. 35k = 2 bulan
Rp. 50k = 4 bulan

Keuntungan Jadi Premium :
1. Unlimited Pemakaian Bot
2. Bot Bisa Join Grup Kalian
3. Akses Semua Fitur Premium
4. Dapat Grup PREMIUM
5. FAST Respon OWNER CANTIK
6. TAU DULUAN BOT AKAN UPDATE APA ☺

Jika Ingin Daftar Premium :
Chat nomor di bawah

====== SUPORT OWNER =======
➯ SEIKLASNYA UNTUK MEMPERPANJANG
➯ SEWA RDP DAN APIKEY TIAP BULAN
➯ *GOPAY/LINK AJA/DANA* :
➯ *SHOPEEPAY*
➯ *Pulsa*
➯ *Minat hubungi* : 
➯ https://wa.me/${noOwner}
======================


====== Buy Limit =======
➯ *${prefix}buy* _jumlah_
➯ Beli 1 Limit = 1000 XP
➯ Cara dapat xp, ketik *${prefix}getxp*
======================
➯ *Mau Pake Script Bot ini?*
➯ *klik link di bawah!* 
➯ https://wa.me/6285216024226
======================

════✪〘 ${botName} 〙✪══════


_Index of [14]_
    `
}

exports.menuKerang = () => {
    return `

🔴🟡🟢 -[ *KERANG* ]----


${emot} *${prefix}apakah*

${emot} *${prefix}seberapa*

${emot} *${prefix}bisakah*

${emot} *${prefix}kapankah*

--------[ *A G R O  B O T* ]-----

    `
}

// Dimohon untuk owner/hoster jangan mengedit ini, terima kasih.
exports.tos = (ownerNumber) => {
    return `
-----[ TERMS OF SERVICE ]-----

Bot ini merupakan open-source bot dengan nama asli BocchiBot yang tersedia di GitHub secara gratis.
Owner/hoster dari bot ini terlepas dari tanggung jawab dan pengawasan developer (Slavyan).
Owner/hoster boleh menjiplak, menambahkan, menghapus, mengganti source code dengan catatan *tidak memperjualbelikannya* dalam bentuk apapun.
Apabila terjadi sebuah error, orang yang pertama yang harus kalian hubungi ialah owner/hoster.

Jika kalian ingin berkontribusi dalam projek ini, silakan kunjungi:
https://github.com/SlavyanDesu/BocchiBot

Contact person:
wa.me/${ownerNumber.replace('@c.us', '')} (Owner/hoster)
wa.me/6281294958473 (Developer)

Kalian juga bisa mendukung saya agar bot ini tetap up to date dengan:
081294958473 (OVO/Telkomsel/GoPay)

Terima kasih!

Slavyan.
    `
}

exports.menuText = () => {
    return `
╔══❉ *𝐓𝐞𝐱𝐭 𝐌𝐚𝐤𝐞𝐫* ❉═══
║
║ Untuk Spasi Teks menggunakan *+*
║ contoh : ${prefix}text1 neon kael+bot
║
╟⊱ *${prefix}text1 burnpaper* _teks_
╟⊱ *${prefix}text1 candlemug* _teks_
╟⊱ *${prefix}text1 lovemsg* _teks_
╟⊱ *${prefix}text1 mugflower* _teks_
╟⊱ *${prefix}text1 narutobanner* _teks_
╟⊱ *${prefix}text1 paperonglass* _teks_
╟⊱ *${prefix}text1 romancetext* _teks_
╟⊱ *${prefix}text1 shadowtext* _teks_
╟⊱ *${prefix}text1 tiktokeffect* _teks_
╟⊱ *${prefix}text1 darkneon* _teks_
╟⊱ *${prefix}text1 sweetcandy* _teks_
╟⊱ *${prefix}text1 hpotter* _teks_
╟⊱ *${prefix}text1 underwater* _teks_
╟⊱ *${prefix}text1 woodblock* _teks_
╟
║⊱ BY VF
║
╚══❉ ${botName} ❉═══
    `
}
exports.reset = () => {
    return `
╔══❉ *RESET* ❉═══
║
╟⊱ *${prefix}reset* donasi
╟⊱ *${prefix}reset* limitgame
╟⊱ *${prefix}reset* limitdownload
╟⊱ *${prefix}reset* hit
╟⊱ *${prefix}reset* hits
╟⊱ *${prefix}reset* antiporn
╟⊱ *${prefix}reset* welcome
╟⊱ *${prefix}reset* afk
╟⊱ *${prefix}reset* antilink
╟⊱ *${prefix}reset* update
╟⊱ *${prefix}reset* mutegc
╟⊱ *${prefix}reset* antikasar
╟⊱ *${prefix}reset* autosticker
╟⊱ *${prefix}reset* useragh
╟⊱ *${prefix}reset* tugas
╟⊱ *${prefix}reset* gcmatkul
╟
║⊱ BY DasX000
║
╚══❉ ${botName}❉═══
    `
}

exports.set = () => {
    return `
╔══❉ *SETTING* ❉═══
║
╟⊱ *${prefix}set* hafizh
╟⊱ *${prefix}set* prefix
╟⊱ *${prefix}set* linkgroup
╟⊱ *${prefix}set* emot
╟⊱ *${prefix}set* memberlimit
╟⊱ *${prefix}set* gruplimit
╟⊱ *${prefix}set* kuota
╟⊱ *${prefix}set* noowner
╟⊱ *${prefix}set* owner
╟⊱ *${prefix}set* namabot
╟⊱ *${prefix}set* vhtear
╟⊱ *${prefix}set* lol
╟⊱ *${prefix}set* zeks
╟
║⊱ BY DasX000
║
╚══❉ ${botName}❉═══
    `
}


exports.fakeLink = () => {
    return `Ups, link ini terlihat mencurigakan. Demi keamanan grup, aku harus mengeluarkan mu...\n`
}

exports.muteChatOn = () => {
    return `Berhasil *mute* bot pada grup ini!`
}

exports.muteChatOff = () => {
    return `Berhasil *unmute* bot pada grup ini!`
}

exports.muteChatOnAlready = () => {
    return `Mute telah diaktifkan di grup ini sebelumnya!`
}

exports.randomQuran = (ranquran) => {
    return `
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
*Nama surah*: ${ranquran.data.result.nama} / ${ranquran.data.result.asma}
*Arti*: ${ranquran.data.result.arti}
*Surat ke*: ${ranquran.data.result.nomor}
*Keterangan*: ${ranquran.data.result.keterangan}
*Link audio*: ${ranquran.data.result.audio}
    `
}

exports.hadis = () => {
    return `
_*Assalamu'alaikum wr. wb.*_

*Daftar hadis*:
1. Hadis Bukhari ada 6638 hadis
    _usage_: ${prefix}hadis bukhari 1
2. Hadis Muslim ada 4930 hadis
    _usage_: ${prefix}hadis muslim 25
3. Hadis Tirmidzi ada 3625 hadis
    _usage_: ${prefix}hadis tirmidzi 10
4. Hadis nasai ada 5364 hadis
    _usage_: ${prefix}hadis nasai 6
5. Hadis Ahmad ada 4305 hadis
    _usage_: ${prefix}hadis ahmad 5
6. Hadis Abu Daud ada 4419 hadis
    _usage_: ${prefix}hadis abudaud 45
7. Hadis Malik ada 1587 hadis
    _usage_: ${prefix}hadis malik 45
8. Hadis Ibnu Majah ada 4285 hadis
    _usage_: ${prefix}hadis ibnumajah 8
9. Hadis Darimi ada 2949 hadis
    _usage_: ${prefix}hadis darimi 3

*Semoga bermanfaat*
_*Wassalam*_
    `
}




/////////// AGH  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.agrA = () => {
    return `
----[ * AGRONOMI A 🍁* ]----

1. PUTRI RAHMADANI 1914161001
2. CITRA KHOIRRUN NISA 1914161003
3. RISKA YULISAWATI 1914161005
4. DESI ANGGRAENI 1914161007
5. NUR AZIZAH 1914161009
6. FHATIA NUR AULIA 1914161011
7. AJENG MARAAINI 1914161013
8. NURHIDAYAH 1914161015
9. DEA TRI WILIYANTI 1914161021
10. DIKY ADISAPUTRA 1914161023
11. RAHMA OKTAVIA 1914161025
12. THAHER RIFA'I 1914161027
13. ALYA FADHILAH 1914161029
14. MARA TASHELLA 1914161031
15. MUHAMMAD NUR RAHIM 1914161033
16. MASITA FITRIAH 1914161035
17. AULIA SARI 1914161037
18. EMAWATI 1914161039
19. EVI PUTRIANI 1914161041
20. SALWA AZZAHRA 1914161043
21. LIKA YUVITA 1914161045
22. AHMAD ZAKY ABYAN 1914161047
23. FADILA RAMADHANI 1914161049
24. ERIKA FADIA SALSABILA 1914161051
25. WISMA ADISTIRA 1914161053
26. DINASQI ASWI SERNIA 1914161055
27. FIKI OKTAVIAN 1914161057
28. SITI PUSPA TIARA 1914161061
29. ZUISDA FEBRIANI 1954161003
30. DIAN TIKA ROISNAHADI 1954161005
31. JIMMY VILLIAN 1954161007
32. ATHMARRATU WINTANI PUTRI 1954161011
33. OKTAVIAN ALANDRA S 1954161013
34. MUHAMMAD DAMIRI KHOIR 1954161015
35. STEVANI ALDINI RAMADHAN 1954161018
36. PUTU EKA SUYANTI 1954161009
37. ERIKA GUSTERES SAPUTRI 1954161001
38. M GARDA WIDJAYAKUSUMA 1954161001
39. SEFY YULIANTI 1914161017


    `
}

exports.AGHUser = (pushname) => {
    return `${pushname} sudah terdaftar
    `
}
exports.nonAGH = (pushname) => {
    return `${pushname} tidak memiliki akses ⛔
    `
}

exports.tambahtugas= (kodetugas, matkul, kettugas, time, pushname) => {
    return `
*「 BERHASIL ADD TUGAS 」*

Berhasil ditambahkan dengan data:
===========================
➸ *Kode Tugas*: ${kodetugas}
➸ *Matkul*: ${matkul}
➸ *Keterangan*: ${kettugas}
➸ *Pada*: ${time}
➸ *Creator*: ${pushname}
===========================
    
    `
}
exports.menuAGH = () => {
    return `
╔══❉ *A G H* ❉═══
║
╟⊱ *${prefix}daftaragh*
╟⊱ *${prefix}ubahnama*
╟⊱ *${prefix}ubahnpm*
╟⊱ *${prefix}tambahtugas*
╟⊱ *${prefix}hapustugas*
╟⊱ *${prefix}npm*
╟⊱ *${prefix}hapususer*
╟⊱ *${prefix}listuser*
╟⊱ *${prefix}listtugas*
╟⊱ *${prefix}semester* 1/8
╟⊱ *${prefix}addgcmatkul*
╟⊱ *${prefix}gcmatkul*
╟
║
╚══❉ ${botName} ❉═══
    `
}

/////////////////  END AGH ////////////////////////////////////////////////////////////////////////////////////////////////////////////

