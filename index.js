const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Bot is Running!'));
app.listen(process.env.PORT || 3000);

const BOT_TOKEN = '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });

// --- Photo Links (PostImages.org se) ---
const IMG_FOLLOW_DAY = "https://i.postimg.cc/your-link/day.jpg"; 
const IMG_FOLLOW_NIGHT = "https://i.postimg.cc/your-link/night.jpg";

const specialNote = `\n━━━━━━━━━━━━━━━━━━━━\n⚠️ **विशेष नोट:**\n● Open Pass होने के बाद Close न खेलें।\n● Open या Close 100% Pass होगा।\n━━━━━━━━━━━━━━━━━━━━\n✅ AGRIMM OFFICIAL`;

// 📊 Markets ka Data
const marketData = {
    "TIME_BAZAR": `💠 **TIME BAZAR** 💠\n📅 DATE: ${getTodayDate()}\n🎯 OTC ANK: [ 1, 6, 4, 9 ]\n━━━━━━━━━━━━━━━━━━━━\n📊 MASTER BOARD 📊\n💠 1 | 14, 19, 16, 11 | 128, 470, 100, 146\n💠 6 | 64, 69, 61, 66 | 123, 150, 600, 240\n💠 4 | 41, 46, 49, 44 | 130, 158, 400, 220\n💠 9 | 91, 96, 94, 99 | 126, 450, 270, 360` + specialNote,

    "MILAN_DAY": `💠 **MILAN DAY** 💠\n📅 DATE: ${getTodayDate()}\n🎯 OTC ANK: [ 4, 9, 0, 5 ]\n━━━━━━━━━━━━━━━━━━━━\n📊 MASTER BOARD 📊\n💠 4 | 40, 45, 49, 44 | 130, 158, 400, 220\n💠 9 | 90, 95, 94, 99 | 126, 450, 270, 360\n💠 0 | 04, 09, 05, 00 | 127, 460, 550, 280\n💠 5 | 54, 59, 50, 55 | 140, 230, 690, 159` + specialNote,

    "KALYAN": `💠 **KALYAN** 💠\n📅 DATE: ${getTodayDate()}\n🎯 OTC ANK: [ 1, 6, 4, 9 ]\n━━━━━━━━━━━━━━━━━━━━\n📊 MASTER BOARD 📊\n💠 1 | 14, 19, 16, 11 | 128, 470, 100, 146\n💠 6 | 64, 69, 61, 66 | 123, 150, 600, 240\n💠 4 | 41, 46, 49, 44 | 130, 158, 400, 220\n💠 9 | 91, 96, 94, 99 | 126, 450, 270, 360` + specialNote,

    "MILAN_NIGHT": `💠 **MILAN NIGHT** 💠\n📅 DATE: ${getTodayDate()}\n🎯 OTC ANK: [ 3, 8, 1, 6 ]\n━━━━━━━━━━━━━━━━━━━━\n📊 MASTER BOARD 📊\n💠 3 | 31, 36, 38, 33 | 120, 148, 670, 247\n💠 8 | 81, 86, 83, 88 | 125, 440, 260, 350\n💠 1 | 13, 18, 16, 11 | 128, 470, 100, 146\n💠 6 | 63, 68, 61, 66 | 123, 150, 600, 240` + specialNote,

    "MAIN_BAZAR": `💠 **MAIN BAZAR** 💠\n📅 DATE: ${getTodayDate()}\n🎯 OTC ANK: [ 0, 5, 4, 9 ]\n━━━━━━━━━━━━━━━━━━━━\n📊 MASTER BOARD 📊\n💠 0 | 04, 09, 05, 00 | 127, 460, 550, 280\n💠 5 | 54, 59, 50, 55 | 140, 230, 690, 159\n💠 4 | 40, 45, 44, 49 | 130, 158, 400, 220\n💠 9 | 90, 95, 99, 94 | 126, 450, 270, 360` + specialNote
};

// 📊 MASTER CHART (14 Markets)
const allMarketChart = `
🏆 **ALL MARKET 4 ANK OTC** 🏆
📅 DATE: ${getTodayDate()}
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
🎯 जहाँ पास, वही **STOP** करें!
✅ **AGRIMM OFFICIAL**
`;

const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🔥 TODAY VIP GAME 🔥', 'MENU_FOLDERS')],
    [Markup.button.callback('📊 MASTER CHART', 'MENU_CHART')],
    [Markup.button.callback('🎯 FOLLOW ANK', 'MENU_FOLLOW')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

const folderKB = Markup.inlineKeyboard([
    [Markup.button.callback('💠 TIME BAZAR', 'GO_TIME_BAZAR'), Markup.button.callback('💠 MILAN DAY', 'GO_MILAN_DAY')],
    [Markup.button.callback('💠 KALYAN', 'GO_KALYAN')],
    [Markup.button.callback('💠 MILAN NIGHT', 'GO_MILAN_NIGHT'), Markup.button.callback('💠 MAIN BAZAR', 'GO_MAIN_BAZAR')],
    [Markup.button.callback('⬅️ BACK TO HOME', 'HOME')]
]);

bot.start((ctx) => {
    ctx.reply(`👑 Welcome Agrimm Official 👑\n━━━━━━━━━━━━━━━━━━━━\n📅 दिनांक: ${getTodayDate()}\n👇 गेम देखने के लिए नीचे बटन दबाएं:`, mainKB);
});

bot.action('HOME', async (ctx) => {
    try { await ctx.editMessageText(`👑 Welcome Agrimm Official 👑\n👇 गेम देखने के लिए बटन दबाएं:`, mainKB); } catch (e) {}
});

bot.action('MENU_FOLDERS', (ctx) => {
    ctx.editMessageText(`📂 **Select Market:**\nदिनांक: ${getTodayDate()}`, folderKB);
});

bot.action('GO_TIME_BAZAR', (ctx) => ctx.editMessageText(marketData.TIME_BAZAR, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])));
bot.action('GO_MILAN_DAY', (ctx) => ctx.editMessageText(marketData.MILAN_DAY, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])));
bot.action('GO_KALYAN', (ctx) => ctx.editMessageText(marketData.KALYAN, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])));
bot.action('GO_MILAN_NIGHT', (ctx) => ctx.editMessageText(marketData.MILAN_NIGHT, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])));
bot.action('GO_MAIN_BAZAR', (ctx) => ctx.editMessageText(marketData.MAIN_BAZAR, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])));

bot.action('MENU_CHART', (ctx) => {
    ctx.editMessageText(allMarketChart, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]]));
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

bot.launch().then(() => console.log("Bot started successfully!"));


