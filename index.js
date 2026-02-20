

const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Bot is Running!'));
app.listen(process.env.PORT || 3000);

const BOT_TOKEN = '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => "20-02-2026";
const getTodayDay = () => "शुक्रवार";

// --- फोटो लिंक (PostImages.org से Direct Link यहाँ डालें) ---
const IMG_FOLLOW_DAY = "https://i.postimg.cc/your-link/day.jpg"; 
const IMG_FOLLOW_NIGHT = "https://i.postimg.cc/your-link/night.jpg";

const specialNote = `\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n⚠️ **विशेष नोट:**\n● Open Pass होने के बाद Close न खेलें।\n● Open या Close 100% Pass होगा।\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n✅ **AGRIMM OFFICIAL**`;

// 📊 5 VIP मार्केट का डेटा
const marketData = {
    "TIME_BAZAR": `⚡ **TIME BAZAR** ⚡\n📅 ${getTodayDate()} | ${getTodayDay()}\n◢◤ आज का फाइनल बुलेटिन ◢◤\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n◈ FIX ANK ➲ 〖 0 〗\n◈ STRONG ➲ 〖 5 〗\n◈ SUPPORT ➲ 〖 1, 6 〗\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 **MASTER DATA BOARD:**\n🥇 TOP | 0 | 01, 06, 05, 00 | 127, 460, 550, 280\n🥈 HIGH | 5 | 51, 56, 50, 55 | 140, 230, 690, 159\n🥉 SAFE | 1 | 10, 15, 16, 11 | 128, 470, 100, 146\n🥉 SAFE | 6 | 60, 65, 61, 66 | 123, 150, 600, 240` + specialNote,

    "MILAN_DAY": `⚡ **MILAN DAY** ⚡\n📅 ${getTodayDate()} | ${getTodayDay()}\n◢◤ आज का फाइनल बुलेटिन ◢◤\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n◈ FIX ANK ➲ 〖 1 〗\n◈ STRONG ➲ 〖 6 〗\n◈ SUPPORT ➲ 〖 3, 8 〗\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 **MASTER DATA BOARD:**\n🥇 TOP | 1 | 13, 18, 16, 11 | 128, 470, 100, 146\n🥈 HIGH | 6 | 63, 68, 61, 66 | 123, 150, 600, 240\n🥉 SAFE | 3 | 31, 36, 38, 33 | 120, 148, 670, 247\n🥉 SAFE | 8 | 81, 86, 83, 88 | 125, 440, 260, 350` + specialNote,

    "KALYAN": `⚡ **KALYAN** ⚡\n📅 ${getTodayDate()} | ${getTodayDay()}\n◢◤ आज का FINAL बुलेटिन ◢◤\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n◈ FIX ANK ➲ 〖 2 〗\n◈ STRONG ➲ 〖 7 〗\n◈ SUPPORT ➲ 〖 4, 9 〗\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 **MASTER DATA BOARD:**\n🥇 TOP | 2 | 24, 29, 27, 22 | 129, 480, 570, 156\n🥈 HIGH | 7 | 74, 79, 72, 77 | 179, 340, 250, 115\n🥉 SAFE | 4 | 42, 47, 44, 49 | 130, 158, 400, 220\n🥉 SAFE | 9 | 92, 97, 99, 94 | 126, 450, 270, 360` + specialNote,

    "RAJDHANI_DAY": `⚡ **RAJDHANI DAY** ⚡\n📅 ${getTodayDate()} | ${getTodayDay()}\n◢◤ आज का फाइनल बुलेटिन ◢◤\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n◈ FIX ANK ➲ 〖 4 〗\n◈ STRONG ➲ 〖 9 〗\n◈ SUPPORT ➲ 〖 2, 7 〗\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 **MASTER DATA BOARD:**\n🥇 TOP | 4 | 42, 47, 49, 44 | 130, 158, 400, 220\n🥈 HIGH | 9 | 92, 97, 94, 99 | 126, 450, 270, 360\n🥉 SAFE | 2 | 24, 29, 27, 22 | 129, 480, 570, 156\n🥉 SAFE | 7 | 74, 79, 72, 77 | 179, 340, 250, 115` + specialNote,

    "MAIN_BAZAR": `⚡ **MAIN BAZAR** ⚡\n📅 ${getTodayDate()} | ${getTodayDay()}\n◢◤ रिकवरी स्पेशल बुलेटिन ◢◤\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n◈ FIX ANK ➲ 〖 0 〗\n◈ STRONG ➲ 〖 5 〗\n◈ SUPPORT ➲ 〖 1, 6 〗\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📊 **MASTER DATA BOARD:**\n🥇 TOP | 0 | 01, 06, 05, 00 | 127, 460, 550, 280\n🥈 HIGH | 5 | 51, 56, 50, 55 | 140, 230, 690, 159\n🥉 SAFE | 1 | 10, 15, 16, 11 | 128, 470, 100, 146\n🥉 SAFE | 6 | 60, 65, 61, 66 | 123, 150, 600, 240` + specialNote
};

// 🏆 MASTER CHART (14 मार्केट 6-अंक OTC)
const masterChartData = `🏆 **ALL MARKET 6 ANK OTC** 🏆\n📅 दिनांक: ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━━━\n1. SRIDEVI DAY    | 0, 1, 2, 4, 5, 6\n2. TIME BAZAR     | 0, 8, 9, 2, 3, 4\n3. MADHUR DAY     | 0, 1, 2, 4, 5, 6\n4. MILAN DAY      | 0, 8, 9, 2, 3, 4\n5. RAJDHANI DAY   | 0, 8, 9, 2, 3, 4\n6. SUPREME DAY    | 0, 1, 2, 4, 5, 6\n7. KALYAN         | 2, 3, 4, 6, 7, 8\n8. SRIDEVI NIGHT  | 0, 1, 2, 6, 7, 8\n9. MADHUR NIGHT   | 4, 5, 6, 8, 9, 0\n10. SUPREME NIGHT | 7, 8, 9, 1, 2, 3\n11. MILAN NIGHT   | 9, 0, 1, 3, 4, 5\n12. RAJDHANI NIGHT| 4, 5, 6, 8, 9, 0\n13. KALYAN NIGHT  | 9, 0, 1, 3, 4, 5\n14. MAIN BAZAR    | 9, 0, 1, 3, 4, 5\n━━━━━━━━━━━━━━━━━━━━\n🎯 जहाँ पास, वही STOP करें!\n✅ AGRIMM OFFICIAL`;

// कीबोर्ड सेटअप
const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🔥 TODAY VIP GAME 🔥', 'MENU_FOLDERS')],
    [Markup.button.callback('📊 MASTER CHART', 'MENU_CHART')],
    [Markup.button.callback('🎯 FOLLOW ANK', 'MENU_FOLLOW')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

const folderKB = Markup.inlineKeyboard([
    [Markup.button.callback('⚡ TIME BAZAR', 'GO_TIME'), Markup.button.callback('⚡ MILAN DAY', 'GO_MILAN_DAY')],
    [Markup.button.callback('⚡ KALYAN', 'GO_KALYAN'), Markup.button.callback('⚡ RAJDHANI DAY', 'GO_RAJ_DAY')],
    [Markup.button.callback('⚡ MAIN BAZAR', 'GO_MAIN')],
    [Markup.button.callback('⬅️ BACK TO HOME', 'HOME')]
]);

// एक्शन्स
bot.start((ctx) => ctx.reply(`👑 **Welcome Agrimm Official** 👑\n📅 दिनांक: ${getTodayDate()}\n👇 गेम देखने के लिए बटन दबाएं:`, mainKB));

bot.action('HOME', async (ctx) => {
    try { await ctx.deleteMessage(); } catch (e) {}
    ctx.reply(`👑 **Welcome Agrimm Official** 👑\n👇 गेम देखने के लिए बटन दबाएं:`, mainKB);
});

bot.action('MENU_FOLDERS', async (ctx) => {
    try { await ctx.deleteMessage(); } catch (e) {}
    ctx.reply(`📂 **Select Market Folder:**`, folderKB);
});

// मार्केट एक्शन्स
bot.action('GO_TIME', async (ctx) => { try { await ctx.deleteMessage(); } catch (e) {} ctx.reply(marketData.TIME_BAZAR, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])); });
bot.action('GO_MILAN_DAY', async (ctx) => { try { await ctx.deleteMessage(); } catch (e) {} ctx.reply(marketData.MILAN_DAY, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])); });
bot.action('GO_KALYAN', async (ctx) => { try { await ctx.deleteMessage(); } catch (e) {} ctx.reply(marketData.KALYAN, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])); });
bot.action('GO_RAJ_DAY', async (ctx) => { try { await ctx.deleteMessage(); } catch (e) {} ctx.reply(marketData.RAJDHANI_DAY, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])); });
bot.action('GO_MAIN', async (ctx) => { try { await ctx.deleteMessage(); } catch (e) {} ctx.reply(marketData.MAIN_BAZAR, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])); });

bot.action('MENU_CHART', async (ctx) => {
    try { await ctx.deleteMessage(); } catch (e) {}
    ctx.reply(masterChartData, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]]));
});

bot.action('MENU_FOLLOW', async (ctx) => {
    try { await ctx.deleteMessage(); } catch (e) {}
    ctx.reply('🎯 **CHOOSE FOLLOW ANK:**', Markup.inlineKeyboard([
        [Markup.button.callback('🌞 DAY FOLLOW', 'V_DAY'), Markup.button.callback('🌙 NIGHT FOLLOW', 'V_NIGHT')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ]));
});

bot.action('V_DAY', async (ctx) => { try { await ctx.deleteMessage(); } catch (e) {} ctx.sendPhoto(IMG_FOLLOW_DAY, { caption: `🌞 **DAY FOLLOW ANK**`, ...Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]]) }).catch(() => ctx.reply("फोटो लिंक सेट करें।")); });
bot.action('V_NIGHT', async (ctx) => { try { await ctx.deleteMessage(); } catch (e) {} ctx.sendPhoto(IMG_FOLLOW_NIGHT, { caption: `🌙 **NIGHT FOLLOW ANK**`, ...Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]]) }).catch(() => ctx.reply("फोटो लिंक सेट करें।")); });

bot.launch();
