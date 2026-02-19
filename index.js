const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Bot is Running!'));
app.listen(process.env.PORT || 3000);

const BOT_TOKEN = process.env.BOT_TOKEN || '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });

const games = {
    // 🔥 TODAY VIP GAME (5 प्रमुख मार्केट का पूरा डेटा)
    "FIX_GAME_LIST": `
🔥 **TODAY VIP GAME** 🔥
📅 दिनांक: ${getTodayDate()}
━━━━━━━━━━━━━━━━━━━━

📊 **TIME BAZAR**
🔥 FIX: [ 1 ] | 🎯 STRONG: [ 6 ] | 🛡️ SUP: [ 4, 9 ]
1 | 14, 19, 16, 11 | 128, 470, 100, 146
6 | 64, 69, 61, 66 | 123, 150, 600, 240
4 | 41, 46, 49, 44 | 130, 158, 400, 220
9 | 91, 96, 94, 99 | 126, 450, 270, 360

━━━━━━━━━━━━━━━━━━━━

📊 **MILAN DAY**
🔥 FIX: [ 4 ] | 🎯 STRONG: [ 9 ] | 🛡️ SUP: [ 0, 5 ]
4 | 40, 45, 49, 44 | 130, 158, 400, 220
9 | 90, 95, 94, 99 | 126, 450, 270, 360
0 | 04, 09, 05, 00 | 127, 460, 550, 280
5 | 54, 59, 50, 55 | 140, 230, 690, 159

━━━━━━━━━━━━━━━━━━━━

📊 **KALYAN**
🔥 FIX: [ 1 ] | 🎯 STRONG: [ 6 ] | 🛡️ SUP: [ 4, 9 ]
1 | 14, 19, 16, 11 | **128 (PASS)** ✅
6 | 64, 69, 61, 66 | 123, 150, 600, 240
4 | 41, 46, 49, 44 | 130, 158, 400, 220
9 | 91, 96, 94, 99 | 126, 450, 270, 360

━━━━━━━━━━━━━━━━━━━━

📊 **MILAN NIGHT**
🔥 FIX: [ 3 ] | 🎯 STRONG: [ 8 ] | 🛡️ SUP: [ 1, 6 ]
3 | 31, 36, 38, 33 | 120, 148, 670, 247
8 | 81, 86, 83, 88 | 125, 440, 260, 350
1 | 13, 18, 16, 11 | 128, 470, 100, 146
6 | 63, 68, 61, 66 | 123, 150, 600, 240

━━━━━━━━━━━━━━━━━━━━

📊 **MAIN BAZAR**
🔥 FIX: [ 0 ] | 🎯 STRONG: [ 5 ] | 🛡️ SUP: [ 4, 9 ]
0 | 04, 09, 05, 00 | 127, 460, 550, 280
5 | 54, 59, 50, 55 | 140, 230, 690, 159
4 | 40, 45, 44, 49 | 130, 158, 400, 220
9 | 90, 95, 99, 94 | 126, 450, 270, 360

━━━━━━━━━━━━━━━━━━━━
⚠️ **विशेष नोट:**
● Open Pass होने के बाद Close न खेलें।
● Open या Close 100% Pass होगा।
━━━━━━━━━━━━━━━━━━━━
✅ **AGRIMM OFFICIAL**
    `,

    // 📊 MASTER CHART: सभी 14 मार्केट का 4 अंक OTC (वापस जोड़ दिया गया है)
    "ALL_MARKET_CHART": `
🏆 **ALL MARKET 4 ANK OTC** 🏆
📅 दिनांक: ${getTodayDate()}
━━━━━━━━━━━━━━━━━━━━
1. SRIDEVI DAY    |  0-5-3-8  |  03
2. TIME BAZAR     |  0-5-2-7  |  52
3. MADHUR DAY     |  3-8-1-6  |  81
4. MILAN DAY      |  0-5-4-9  |  04
5. RAJDHANI DAY   |  3-8-2-7  |  37
6. SUPREME DAY    |  0-5-1-6  |  56
7. KALYAN         |  0-5-3-8  |  35
8. SRIDEVI NIGHT  |  1-6-3-8  |  63
9. MADHUR NIGHT   |  0-5-3-8  |  08
10. SUPREME NIGHT |  2-7-0-5  |  70
11. MILAN NIGHT   |  3-8-4-9  |  34
12. KALYAN NIGHT  |  0-5-3-8  |  53
13. RAJDHANI NIGHT|  1-6-0-5  |  10
14. MAIN BAZAR    |  3-8-0-5  |  80
━━━━━━━━━━━━━━━━━━━━
🎯 जहाँ पास, वही **STOP** करें!
✅ **AGRIMM OFFICIAL**
    `,

    "FOLLOW_ANK": `🎯 Follow Ank के लिए एडमिन से संपर्क करें।`
};

const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🔥 TODAY VIP GAME 🔥', 'MENU_FIX')],
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

bot.launch().then(() => console.log("🚀 MASTER CHART RESTORED & SYSTEM LIVE!"));
