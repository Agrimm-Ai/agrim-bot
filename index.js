const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Bot is Running!'));
app.listen(process.env.PORT || 3000);

const BOT_TOKEN = '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });

// --- सतीश भाई, यहाँ अपने फोटो लिंक डालें (PostImages.org से) ---
const IMG_FOLLOW_DAY = "https://i.postimg.cc/example/day.jpg"; 
const IMG_FOLLOW_NIGHT = "https://i.postimg.cc/example/night.jpg";

const games = {
    "FIX_GAME_LIST": `
🔥 TODAY VIP GAME 🔥
📅 DATE: ${getTodayDate()}
━━━━━━━━━━━━━━━━━━━━

💠 TIME BAZAR 💠
🏆 FIX ANK ➔ [ 1 ]
⭐ STRONG ➔ [ 6 ]
📍 SUPPORT ➔ [ 4, 9 ]
━━━━━━━━━━━━━━━━━━━━
📊 MASTER BOARD 📊
💠 1 | 14, 19, 16, 11 | 128, 470, 100, 146
💠 6 | 64, 69, 61, 66 | 123, 150, 600, 240
💠 4 | 41, 46, 49, 44 | 130, 158, 400, 220
💠 9 | 91, 96, 94, 99 | 126, 450, 270, 360

━━━━━━━━━━━━━━━━━━━━

💠 MILAN DAY 💠
🏆 FIX ANK ➔ [ 4 ]
⭐ STRONG ➔ [ 9 ]
📍 SUPPORT ➔ [ 0, 5 ]
━━━━━━━━━━━━━━━━━━━━
📊 MASTER BOARD 📊
💠 4 | 40, 45, 49, 44 | 130, 158, 400, 220
💠 9 | 90, 95, 94, 99 | 126, 450, 270, 360
💠 0 | 04, 09, 05, 00 | 127, 460, 550, 280
💠 5 | 54, 59, 50, 55 | 140, 230, 690, 159

━━━━━━━━━━━━━━━━━━━━

💠 KALYAN 💠
🏆 FIX ANK ➔ [ 1 ]
⭐ STRONG ➔ [ 6 ]
📍 SUPPORT ➔ [ 4, 9 ]
━━━━━━━━━━━━━━━━━━━━
📊 MASTER BOARD 📊
💠 1 | 14, 19, 16, 11 | 128, 470, 100, 146
💠 6 | 64, 69, 61, 66 | 123, 150, 600, 240
💠 4 | 41, 46, 49, 44 | 130, 158, 400, 220
💠 9 | 91, 96, 94, 99 | 126, 450, 270, 360

━━━━━━━━━━━━━━━━━━━━

💠 MILAN NIGHT 💠
🏆 FIX ANK ➔ [ 3 ]
⭐ STRONG ➔ [ 8 ]
📍 SUPPORT ➔ [ 1, 6 ]
━━━━━━━━━━━━━━━━━━━━
📊 MASTER BOARD 📊
💠 3 | 31, 36, 38, 33 | 120, 148, 670, 247
💠 8 | 81, 86, 83, 88 | 125, 440, 260, 350
💠 1 | 13, 18, 16, 11 | 128, 470, 100, 146
💠 6 | 63, 68, 61, 66 | 123, 150, 600, 240

━━━━━━━━━━━━━━━━━━━━

💠 MAIN BAZAR 💠
🏆 FIX ANK ➔ [ 0 ]
⭐ STRONG ➔ [ 5 ]
📍 SUPPORT ➔ [ 4, 9 ]
━━━━━━━━━━━━━━━━━━━━
📊 MASTER BOARD 📊
💠 0 | 04, 09, 05, 00 | 127, 460, 550, 280
💠 5 | 54, 59, 50, 55 | 140, 230, 690, 159
💠 4 | 40, 45, 44, 49 | 130, 158, 400, 220
💠 9 | 90, 95, 99, 94 | 126, 450, 270, 360

━━━━━━━━━━━━━━━━━━━━
⚠️ विशेष नोट:
● Open Pass होने के बाद Close न खेलें।
● Open या Close 100% Pass होगा।
━━━━━━━━━━━━━━━━━━━━
✅ AGRIMM OFFICIAL
    `,

    "ALL_MARKET_CHART": `
🏆 ALL MARKET 4 ANK OTC 🏆
📅 दिनांक: ${getTodayDate()}
━━━━━━━━━━━━━━━━━━━━
1. SRIDEVI DAY    |  0-5-3-8
2. TIME BAZAR     |  0-5-2-7
3. MADHUR DAY     |  3-8-1-6
4. MILAN DAY      |  0-5-4-9
5. RAJDHANI DAY   |  3-8-2-7
6. SUPREME DAY    |  0-5-1-6
7. KALYAN         |  0-5-3-8
8. SRIDEVI NIGHT  |  1-6-3-8
9. MADHUR NIGHT   |  0-5-3-8
10. SUPREME NIGHT |  2-7-0-5
11. MILAN NIGHT   |  3-8-4-9
12. KALYAN NIGHT  |  0-5-3-8
13. RAJDHANI NIGHT|  1-6-0-5
14. MAIN BAZAR    |  3-8-0-5
━━━━━━━━━━━━━━━━━━━━
🎯 जहाँ पास, वही STOP करें!
✅ AGRIMM OFFICIAL
    `
};

const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🔥 TODAY VIP GAME 🔥', 'MENU_FIX')],
    [Markup.button.callback('📊 MASTER CHART', 'MENU_CHART')],
    [Markup.button.callback('🎯 FOLLOW ANK', 'MENU_FOLLOW')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

bot.start((ctx) => {
    ctx.reply(`👑 Welcome Agrimm Official 👑\n━━━━━━━━━━━━━━━━━━━━\n📅 दिनांक: ${getTodayDate()}\n👇 आज का धमाका देखने के लिए नीचे बटन दबाएं:`, mainKB);
});

bot.action('HOME', async (ctx) => {
    try { await ctx.deleteMessage(); } catch (e) {}
    ctx.reply(`👑 Welcome Agrimm Official 👑\n👇 गेम देखने के लिए बटन दबाएं:`, mainKB);
});

bot.action('MENU_FIX', (ctx) => {
    ctx.editMessageText(games.FIX_GAME_LIST, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])).catch(() => {});
});

bot.action('MENU_CHART', (ctx) => {
    ctx.editMessageText(games.ALL_MARKET_CHART, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])).catch(() => {});
});

bot.action('MENU_FOLLOW', (ctx) => {
    ctx.editMessageText('🎯 CHOOSE FOLLOW ANK:', Markup.inlineKeyboard([
        [Markup.button.callback('🌞 DAY FOLLOW', 'VIEW_FOLLOW_DAY'), Markup.button.callback('🌙 NIGHT FOLLOW', 'VIEW_FOLLOW_NIGHT')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ]));
});

bot.action('VIEW_FOLLOW_DAY', async (ctx) => {
    try { await ctx.deleteMessage(); } catch (e) {}
    await ctx.sendPhoto(IMG_FOLLOW_DAY, {
        caption: `🌞 DAY FOLLOW ANK`,
        ...Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]])
    }).catch(() => ctx.reply("सतीश भाई, फोटो लिंक सेट करें।"));
});

bot.action('VIEW_FOLLOW_NIGHT', async (ctx) => {
    try { await ctx.deleteMessage(); } catch (e) {}
    await ctx.sendPhoto(IMG_FOLLOW_NIGHT, {
        caption: `🌙 NIGHT FOLLOW ANK`,
        ...Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]])
    }).catch(() => ctx.reply("सतीश भाई, फोटो लिंक सेट करें।"));
});

bot.launch();
