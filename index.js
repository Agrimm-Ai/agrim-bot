const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Bot is Running!'));
app.listen(process.env.PORT || 3000);

const BOT_TOKEN = '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });

// --- सतीश भाई, यहाँ अपने फोटो लिंक डालें ---
const IMG_FOLLOW_DAY = "https://i.postimg.cc/your-link/day.jpg"; 
const IMG_FOLLOW_NIGHT = "https://i.postimg.cc/your-link/night.jpg";

// 📊 मार्केट के अलग-अलग डेटा (Folders के अंदर का माल)
const marketData = {
    "TIME_BAZAR": `
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
✅ AGRIMM OFFICIAL`,

    "MILAN_DAY": `
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
✅ AGRIMM OFFICIAL`,

    "KALYAN": `
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
✅ AGRIMM OFFICIAL`,

    "MILAN_NIGHT": `
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
✅ AGRIMM OFFICIAL`,

    "MAIN_BAZAR": `
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
✅ AGRIMM OFFICIAL`
};

// मुख्य मेनू बटन्स
const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🔥 TODAY VIP GAME 🔥', 'MENU_FOLDERS')],
    [Markup.button.callback('📊 MASTER CHART', 'MENU_CHART')],
    [Markup.button.callback('🎯 FOLLOW ANK', 'MENU_FOLLOW')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

// 📂 मार्केट फोल्डर मेनू
const folderKB = Markup.inlineKeyboard([
    [Markup.button.callback('💠 TIME BAZAR', 'GO_TIME_BAZAR'), Markup.button.callback('💠 MILAN DAY', 'GO_MILAN_DAY')],
    [Markup.button.callback('💠 KALYAN', 'GO_KALYAN')],
    [Markup.button.callback('💠 MILAN NIGHT', 'GO_MILAN_NIGHT'), Markup.button.callback('💠 MAIN BAZAR', 'GO_MAIN_BAZAR')],
    [Markup.button.callback('⬅️ BACK TO HOME', 'HOME')]
]);

bot.start((ctx) => {
    ctx.reply(`👑 Welcome Agrimm Official 👑\n━━━━━━━━━━━━━━━━━━━━\n📅 दिनांक: ${getTodayDate()}\n👇 आज का धमाका देखने के लिए नीचे बटन दबाएं:`, mainKB);
});

bot.action('HOME', async (ctx) => {
    try { await ctx.editMessageText(`👑 Welcome Agrimm Official 👑\n👇 गेम देखने के लिए बटन दबाएं:`, mainKB); } catch (e) {}
});

// फोल्डर लिस्ट दिखाना
bot.action('MENU_FOLDERS', (ctx) => {
    ctx.editMessageText(`📂 **सभी मार्केट की लिस्ट यहाँ है:**\nजिस मार्केट का गेम देखना है उस पर क्लिक करें।`, folderKB);
});

// हर मार्केट के लिए अलग एक्शन
bot.action('GO_TIME_BAZAR', (ctx) => ctx.editMessageText(marketData.TIME_BAZAR, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK TO LIST', 'MENU_FOLDERS')]])));
bot.action('GO_MILAN_DAY', (ctx) => ctx.editMessageText(marketData.MILAN_DAY, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK TO LIST', 'MENU_FOLDERS')]])));
bot.action('GO_KALYAN', (ctx) => ctx.editMessageText(marketData.KALYAN, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK TO LIST', 'MENU_FOLDERS')]])));
bot.action('GO_MILAN_NIGHT', (ctx) => ctx.editMessageText(marketData.MILAN_NIGHT, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK TO LIST', 'MENU_FOLDERS')]])));
bot.action('GO_MAIN_BAZAR', (ctx) => ctx.editMessageText(marketData.MAIN_BAZAR, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK TO LIST', 'MENU_FOLDERS')]])));

bot.action('MENU_CHART', (ctx) => {
    ctx.editMessageText(`🏆 ALL MARKET 4 ANK OTC 🏆\n1. SRIDEVI DAY | 0-5-3-8\n...बाकी चार्ट यहाँ डालें`, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]]));
});

bot.action('MENU_FOLLOW', (ctx) => {
    ctx.editMessageText('🎯 CHOOSE FOLLOW ANK:', Markup.inlineKeyboard([
        [Markup.button.callback('🌞 DAY FOLLOW', 'VIEW_FOLLOW_DAY'), Markup.button.callback('🌙 NIGHT FOLLOW', 'VIEW_FOLLOW_NIGHT')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ]));
});

bot.action('VIEW_FOLLOW_DAY', async (ctx) => {
    try { await ctx.deleteMessage(); } catch (e) {}
    await ctx.sendPhoto(IMG_FOLLOW_DAY, { caption: `🌞 DAY FOLLOW ANK`, ...Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]]) });
});

bot.action('VIEW_FOLLOW_NIGHT', async (ctx) => {
    try { await ctx.deleteMessage(); } catch (e) {}
    await ctx.sendPhoto(IMG_FOLLOW_NIGHT, { caption: `🌙 NIGHT FOLLOW ANK`, ...Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]]) });
});

bot.launch();

