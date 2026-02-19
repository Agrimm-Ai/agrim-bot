const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Bot is Running!'));
app.listen(process.env.PORT || 3000);

const BOT_TOKEN = process.env.BOT_TOKEN || '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });

const games = {
    // 🔥 TODAY FIX GAME: Sirf 5 markets ka data bina kisi badlav ke
    "FIX_GAME_LIST": `
🔥 **TODAY FIX GAME (VIP)** 🔥
━━━━━━━━━━━━━━━━━━━━
📅 दिनांक: ${getTodayDate()}

📊 **TIME BAZAR**
🔥 FIX ANK: [ 1 ] | 🎯 STRONG ANK: [ 6 ] | 🛡️ SUPPORT ANK: [ 4, 9 ]
1 | 14, 19, 16, 11 | 128, 470, 100, 146
6 | 64, 69, 61, 66 | 123, 150, 600, 240
4 | 41, 46, 49, 44 | 130, 158, 400, 220
9 | 91, 96, 94, 99 | 126, 450, 270, 360

━━━━━━━━━━━━━━━━━━━━

📊 **MILAN DAY**
🔥 FIX ANK: [ 4 ] | 🎯 STRONG ANK: [ 9 ] | 🛡️ SUPPORT ANK: [ 0, 5 ]
4 | 40, 45, 49, 44 | 130, 158, 400, 220
9 | 90, 95, 94, 99 | 126, 450, 270, 360
0 | 04, 09, 05, 00 | 127, 460, 550, 280
5 | 54, 59, 50, 55 | 140, 230, 690, 159

━━━━━━━━━━━━━━━━━━━━

📊 **KALYAN**
🔥 FIX ANK: [ 1 ] | 🎯 STRONG ANK: [ 6 ] | 🛡️ SUPPORT ANK: [ 4, 9 ]
1 | 14, 19, 16, 11 | 128 (PASS), 470, 100, 146
6 | 64, 69, 61, 66 | 123, 150, 600, 240
4 | 41, 46, 49, 44 | 130, 158, 400, 220
9 | 91, 96, 94, 99 | 126, 450, 270, 360

━━━━━━━━━━━━━━━━━━━━

📊 **MILAN NIGHT**
🔥 FIX ANK: [ 3 ] | 🎯 STRONG ANK: [ 8 ] | 🛡️ SUPPORT ANK: [ 1, 6 ]
3 | 31, 36, 38, 33 | 120, 148, 670, 247
8 | 81, 86, 83, 88 | 125, 440, 260, 350
1 | 13, 18, 16, 11 | 128, 470, 100, 146
6 | 63, 68, 61, 66 | 123, 150, 600, 240

━━━━━━━━━━━━━━━━━━━━

📊 **MAIN BAZAR**
🔥 FIX ANK: [ 0 ] | 🎯 STRONG ANK: [ 5 ] | 🛡️ SUPPORT ANK: [ 4, 9 ]
0 | 04, 09, 05, 00 | 127, 460, 550, 280
5 | 54, 59, 50, 55 | 140, 230, 690, 159
4 | 40, 45, 44, 49 | 130, 158, 400, 220
9 | 90, 95, 99, 94 | 126, 450, 270, 360

━━━━━━━━━━━━━━━━━━━━
✅ **AGRIMM OFFICIAL**
    `,

    "ALL_MARKET_CHART": `📊 Market Chart ke liye Admin se sampark karein.`,
    "FOLLOW_ANK": `🎯 Follow Ank ke liye Admin se sampark karein.`
};

const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🔥 TODAY FIX GAME 🔥', 'MENU_FIX')],
    [Markup.button.callback('📊 MASTER CHART', 'MENU_CHART')],
    [Markup.button.callback('🎯 FOLLOW ANK', 'MENU_FOLLOW')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

bot.start((ctx) => {
    ctx.reply(`👑 **Welcome Agrimm Official** 👑\n━━━━━━━━━━━━━━━━━━━━\n📅 दिनांक: **${getTodayDate()}**\n👇 आज का धमाका देखने के लिए नीचे बटन दबाएं:`, mainKB);
});

bot.action('HOME', (ctx) => {
    ctx.editMessageText(`👑 **Welcome Agrimm Official** 👑\n━━━━━━━━━━━━━━━━━━━━\n📅 दिनांक: **${getTodayDate()}**\n👇 आज का गेम देखने के लिए नीचे बटन दबाएं:`, mainKB).catch(() => {});
});

bot.action('MENU_FIX', (ctx) => {
    ctx.editMessageText(games.FIX_GAME_LIST, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])).catch(() => {});
});

bot.action('MENU_CHART', (ctx) => {
    ctx.editMessageText(games.ALL_MARKET_CHART, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])).catch(() => {});
});

bot.action('MENU_FOLLOW', (ctx) => {
    ctx.editMessageText(games.FOLLOW_ANK, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])).catch(() => {});
});

bot.launch().then(() => console.log("🚀 Agrimm Official Welcome Updated!"));

