const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Bot is Running!'));
app.listen(process.env.PORT || 3000);

const BOT_TOKEN = '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });

// --- फोटो लिंक (PostImages.org से Direct Link यहाँ डालें) ---
const IMG_FOLLOW_DAY = "https://i.postimg.cc/your-link/day.jpg"; 
const IMG_FOLLOW_NIGHT = "https://i.postimg.cc/your-link/night.jpg";

const specialNote = `
━━━━━━━━━━━━━━
⚠️ **विशेष नोट:**
● Open Pass होने के बाद Close न खेलें।
● Open या Close 100% Pass होगा।
━━━━━━━━━━━━━━
✅ **AGRIMM OFFICIAL**`;

// 📊 5 मुख्य मार्केट का डेटा (Folder System)
const marketData = {
    "TIME_BAZAR": `◈ **TIME BAZAR** ◈\n📅 ${getTodayDate()}\n🎯 **मुख्य अंक (OTC):**\n━━━━━━━━━━━━━━\n🟢 FIX: [ 1 ]\n🟡 STRONG: [ 6 ]\n⚪ SUPPORT: [ 4, 9 ]\n━━━━━━━━━━━━━━\n📋 **गेम बोर्ड:**\n➲ 1 | 14, 19, 16, 11 | 128, 470, 100, 146\n➲ 6 | 64, 69, 61, 66 | 123, 150, 600, 240\n➲ 4 | 41, 46, 49, 44 | 130, 158, 400, 220\n➲ 9 | 91, 96, 94, 99 | 126, 450, 270, 360` + specialNote,

    "MILAN_DAY": `◈ **MILAN DAY** ◈\n📅 ${getTodayDate()}\n🎯 **मुख्य अंक (OTC):**\n━━━━━━━━━━━━━━\n🟢 FIX: [ 4 ]\n🟡 STRONG: [ 9 ]\n⚪ SUPPORT: [ 0, 5 ]\n━━━━━━━━━━━━━━\n📋 **गेम बोर्ड:**\n➲ 4 | 40, 45, 49, 44 | 130, 158, 400, 220\n➲ 9 | 90, 95, 94, 99 | 126, 450, 270, 360\n➲ 0 | 04, 09, 05, 00 | 127, 460, 550, 280\n➲ 5 | 54, 59, 50, 55 | 140, 230, 690, 159` + specialNote,

    "KALYAN": `◈ **KALYAN** ◈\n📅 ${getTodayDate()}\n🎯 **मुख्य अंक (OTC):**\n━━━━━━━━━━━━━━\n🟢 FIX: [ 1 ]\n🟡 STRONG: [ 6 ]\n⚪ SUPPORT: [ 4, 9 ]\n━━━━━━━━━━━━━━\n📋 **गेम बोर्ड:**\n➲ 1 | 14, 19, 16, 11 | 128, 470, 100, 146\n➲ 6 | 64, 69, 61, 66 | 123, 150, 600, 240\n➲ 4 | 41, 46, 49, 44 | 130, 158, 400, 220\n➲ 9 | 91, 96, 94, 99 | 126, 450, 270, 360` + specialNote,

    "MILAN_NIGHT": `◈ **MILAN NIGHT** ◈\n📅 ${getTodayDate()}\n🎯 **मुख्य अंक (OTC):**\n━━━━━━━━━━━━━━\n🟢 FIX: [ 3 ]\n🟡 STRONG: [ 8 ]\n⚪ SUPPORT: [ 1, 6 ]\n━━━━━━━━━━━━━━\n📋 **गेम बोर्ड:**\n➲ 3 | 31, 36, 38, 33 | 120, 148, 670, 247\n➲ 8 | 81, 86, 83, 88 | 125, 440, 260, 350\n➲ 1 | 13, 18, 16, 11 | 128, 470, 100, 146\n➲ 6 | 63, 68, 61, 66 | 123, 150, 600, 240` + specialNote,

    "MAIN_BAZAR": `◈ **MAIN BAZAR** ◈\n📅 ${getTodayDate()}\n🎯 **मुख्य अंक (OTC):**\n━━━━━━━━━━━━━━\n🟢 FIX: [ 0 ]\n🟡 STRONG: [ 5 ]\n⚪ SUPPORT: [ 4, 9 ]\n━━━━━━━━━━━━━━\n📋 **गेम बोर्ड:**\n➲ 0 | 04, 09, 05, 00 | 127, 460, 550, 280\n➲ 5 | 54, 59, 50, 55 | 140, 230, 690, 159\n➲ 4 | 40, 45, 44, 49 | 130, 158, 400, 220\n➲ 9 | 90, 95, 99, 94 | 126, 450, 270, 360` + specialNote
};

const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🔥 TODAY VIP GAME 🔥', 'MENU_FOLDERS')],
    [Markup.button.callback('📊 MASTER CHART', 'MENU_CHART')],
    [Markup.button.callback('🎯 FOLLOW ANK', 'MENU_FOLLOW')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

const folderKB = Markup.inlineKeyboard([
    [Markup.button.callback('◈ TIME BAZAR', 'GO_TIME_BAZAR'), Markup.button.callback('◈ MILAN DAY', 'GO_MILAN_DAY')],
    [Markup.button.callback('◈ KALYAN', 'GO_KALYAN')],
    [Markup.button.callback('◈ MILAN NIGHT', 'GO_MILAN_NIGHT'), Markup.button.callback('◈ MAIN BAZAR', 'GO_MAIN_BAZAR')],
    [Markup.button.callback('⬅️ BACK TO HOME', 'HOME')]
]);

bot.start((ctx) => {
    ctx.reply(`👑 **Welcome Agrimm Official** 👑\n━━━━━━━━━━━━━━━━━━━━\n📅 दिनांक: **${getTodayDate()}**\n👇 गेम देखने के लिए नीचे बटन दबाएं:`, mainKB);
});

bot.action('HOME', async (ctx) => {
    try { await ctx.editMessageText(`👑 **Welcome Agrimm Official** 👑\n━━━━━━━━━━━━━━━━━━━━\n👇 गेम देखने के लिए बटन दबाएं:`, mainKB); } catch (e) {}
});

bot.action('MENU_FOLDERS', (ctx) => {
    ctx.editMessageText(`📂 **Select Market Folder:**\n📅 दिनांक: ${getTodayDate()}`, folderKB);
});

bot.action('GO_TIME_BAZAR', (ctx) => ctx.editMessageText(marketData.TIME_BAZAR, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK TO LIST', 'MENU_FOLDERS')]])));
bot.action('GO_MILAN_DAY', (ctx) => ctx.editMessageText(marketData.MILAN_DAY, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK TO LIST', 'MENU_FOLDERS')]])));
bot.action('GO_KALYAN', (ctx) => ctx.editMessageText(marketData.KALYAN, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK TO LIST', 'MENU_FOLDERS')]])));
bot.action('GO_MILAN_NIGHT', (ctx) => ctx.editMessageText(marketData.MILAN_NIGHT, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK TO LIST', 'MENU_FOLDERS')]])));
bot.action('GO_MAIN_BAZAR', (ctx) => ctx.editMessageText(marketData.MAIN_BAZAR, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK TO LIST', 'MENU_FOLDERS')]])));

bot.action('MENU_CHART', (ctx) => {
    const chart = `🏆 **ALL MARKET 4 ANK OTC** 🏆\n📅 दिनांक: ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━━━\n1. SRIDEVI DAY    |  0-5-3-8\n2. TIME BAZAR     |  0-5-2-7\n3. MADHUR DAY     |  3-8-1-6\n4. MILAN DAY      |  0-5-4-9\n5. RAJDHANI DAY   |  3-8-2-7\n6. SUPREME DAY    |  0-5-1-6\n7. KALYAN         |  0-5-3-8\n8. SRIDEVI NIGHT  |  1-6-3-8\n9. MADHUR NIGHT   |  0-5-3-8\n10. SUPREME NIGHT |  2-7-0-5\n11. MILAN NIGHT   |  3-8-4-9\n12. KALYAN NIGHT  |  0-5-3-8\n13. RAJDHANI NIGHT|  1-6-0-5\n14. MAIN BAZAR    |  3-8-0-5\n━━━━━━━━━━━━━━━━━━━━\n🎯 जहाँ पास, वही STOP करें!\n✅ **AGRIMM OFFICIAL**`;
    ctx.editMessageText(chart, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]]));
});

bot.action('MENU_FOLLOW', (ctx) => {
    ctx.editMessageText('🎯 **CHOOSE FOLLOW ANK:**', Markup.inlineKeyboard([
        [Markup.button.callback('🌞 DAY FOLLOW', 'VIEW_FOLLOW_DAY'), Markup.button.callback('🌙 NIGHT FOLLOW', 'VIEW_FOLLOW_NIGHT')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ]));
});

bot.action('VIEW_FOLLOW_DAY', async (ctx) => {
    try { await ctx.deleteMessage(); } catch (e) {}
    await ctx.sendPhoto(IMG_FOLLOW_DAY, { caption: `🌞 **DAY FOLLOW ANK**`, ...Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]]) });
});

bot.action('VIEW_FOLLOW_NIGHT', async (ctx) => {
    try { await ctx.deleteMessage(); } catch (e) {}
    await ctx.sendPhoto(IMG_FOLLOW_NIGHT, { caption: `🌙 **NIGHT FOLLOW ANK**`, ...Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]]) });
});

bot.launch();
