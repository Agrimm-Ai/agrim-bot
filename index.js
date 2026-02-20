const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Bot is Running!'));
app.listen(process.env.PORT || 3000);

const BOT_TOKEN = '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => "20-02-2026";

// 📊 मार्केट डेटा
const marketData = {
    "TIME": `⚡ TIME BAZAR ⚡\n📅 ${getTodayDate()}\n\n🟢 FIX: [ 0 ]\n🟡 STRONG: [ 5 ]\n⚪ SUPPORT: [ 1, 6 ]\n━━━━━━━━━━━━━━\n➲ 0 | 01, 06, 05, 00 | 127, 460, 550, 280\n➲ 5 | 51, 56, 50, 55 | 140, 230, 690, 159\n➲ 1 | 10, 15, 16, 11 | 128, 470, 100, 146\n➲ 6 | 60, 65, 61, 66 | 123, 150, 600, 240\n\n✅ AGRIMM OFFICIAL`,
    
    "MILAN": `⚡ MILAN DAY ⚡\n📅 ${getTodayDate()}\n\n🟢 FIX: [ 1 ]\n🟡 STRONG: [ 6 ]\n⚪ SUPPORT: [ 3, 8 ]\n━━━━━━━━━━━━━━\n➲ 1 | 13, 18, 16, 11 | 128, 470, 100, 146\n➲ 6 | 63, 68, 61, 66 | 123, 150, 600, 240\n➲ 3 | 31, 36, 38, 33 | 120, 148, 670, 247\n➲ 8 | 81, 86, 83, 88 | 125, 440, 260, 350\n\n✅ AGRIMM OFFICIAL`,

    "KALYAN": `⚡ KALYAN ⚡\n📅 ${getTodayDate()}\n\n🟢 FIX: [ 2 ]\n🟡 STRONG: [ 7 ]\n⚪ SUPPORT: [ 4, 9 ]\n━━━━━━━━━━━━━━\n➲ 2 | 24, 29, 27, 22 | 129, 480, 570, 156\n➲ 7 | 74, 79, 72, 77 | 179, 340, 250, 115\n➲ 4 | 42, 47, 44, 49 | 130, 158, 400, 220\n➲ 9 | 92, 97, 99, 94 | 126, 450, 270, 360\n\n✅ AGRIMM OFFICIAL`,

    "RAJ": `⚡ RAJDHANI DAY ⚡\n📅 ${getTodayDate()}\n\n🟢 FIX: [ 4 ]\n🟡 STRONG: [ 9 ]\n⚪ SUPPORT: [ 2, 7 ]\n━━━━━━━━━━━━━━\n➲ 4 | 42, 47, 49, 44 | 130, 158, 400, 220\n➲ 9 | 92, 97, 94, 99 | 126, 450, 270, 360\n➲ 2 | 24, 29, 27, 22 | 129, 480, 570, 156\n➲ 7 | 74, 79, 72, 77 | 179, 340, 250, 115\n\n✅ AGRIMM OFFICIAL`,

    "MAIN": `⚡ MAIN BAZAR ⚡\n📅 ${getTodayDate()}\n\n🟢 FIX: [ 0 ]\n🟡 STRONG: [ 5 ]\n⚪ SUPPORT: [ 1, 6 ]\n━━━━━━━━━━━━━━\n➲ 0 | 01, 06, 05, 00 | 127, 460, 550, 280\n➲ 5 | 51, 56, 50, 55 | 140, 230, 690, 159\n➲ 1 | 10, 15, 16, 11 | 128, 470, 100, 146\n➲ 6 | 60, 65, 61, 66 | 123, 150, 600, 240\n\n✅ AGRIMM OFFICIAL`,

    "CHART": `🏆 ALL MARKET 6 ANK OTC 🏆\n📅 ${getTodayDate()}\n━━━━━━━━━━━━━━\n1. SRIDEVI DAY | 0,1,2,4,5,6\n2. TIME BAZAR | 0,8,9,2,3,4\n3. MADHUR DAY | 0,1,2,4,5,6\n4. MILAN DAY | 0,8,9,2,3,4\n5. RAJDHANI DAY | 0,8,9,2,3,4\n6. SUPREME DAY | 0,1,2,4,5,6\n7. KALYAN | 2,3,4,6,7,8\n8. SRIDEVI NIGHT | 0,1,2,6,7,8\n9. MADHUR NIGHT | 4,5,6,8,9,0\n10. SUPREME NIGHT | 7,8,9,1,2,3\n11. MILAN NIGHT | 9,0,1,3,4,5\n12. RAJDHANI NIGHT | 4,5,6,8,9,0\n13. KALYAN NIGHT | 9,0,1,3,4,5\n14. MAIN BAZAR | 9,0,1,3,4,5\n━━━━━━━━━━━━━━\n✅ AGRIMM OFFICIAL`
};

// कीबोर्ड
const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🔥 TODAY VIP GAME 🔥', 'MENU_FOLDERS')],
    [Markup.button.callback('📊 MASTER CHART', 'MENU_CHART')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

const folderKB = Markup.inlineKeyboard([
    [Markup.button.callback('⚡ TIME BAZAR', 'GO_TIME'), Markup.button.callback('⚡ MILAN DAY', 'GO_MILAN')],
    [Markup.button.callback('⚡ KALYAN', 'GO_KALYAN'), Markup.button.callback('⚡ RAJDHANI DAY', 'GO_RAJ')],
    [Markup.button.callback('⚡ MAIN BAZAR', 'GO_MAIN')],
    [Markup.button.callback('⬅️ BACK', 'HOME')]
]);

// कमांड्स
bot.start((ctx) => ctx.reply(`👑 Welcome Agrimm Official 👑\n👇 गेम देखने के लिए नीचे बटन दबाएं:`, mainKB));

bot.action('HOME', (ctx) => ctx.editMessageText(`👑 Welcome Agrimm Official 👑\n👇 बटन दबाएं:`, mainKB).catch(() => {}));

bot.action('MENU_FOLDERS', (ctx) => ctx.editMessageText(`📂 मार्केट चुनें:`, folderKB).catch(() => {}));

bot.action('GO_TIME', (ctx) => ctx.editMessageText(marketData.TIME, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])).catch(() => {}));
bot.action('GO_MILAN', (ctx) => ctx.editMessageText(marketData.MILAN, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])).catch(() => {}));
bot.action('GO_KALYAN', (ctx) => ctx.editMessageText(marketData.KALYAN, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])).catch(() => {}));
bot.action('GO_RAJ', (ctx) => ctx.editMessageText(marketData.RAJ, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])).catch(() => {}));
bot.action('GO_MAIN', (ctx) => ctx.editMessageText(marketData.MAIN, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLDERS')]])).catch(() => {}));

bot.action('MENU_CHART', (ctx) => ctx.editMessageText(marketData.CHART, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])).catch(() => {}));

bot.launch();
