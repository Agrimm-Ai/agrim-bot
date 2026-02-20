
const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Bot is Running!'));
app.listen(process.env.PORT || 3000);

const BOT_TOKEN = '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => "20-02-2026";

const specialNote = `\n━━━━━━━━━━━━━━\n⚠️ **विशेष नोट:**\n● Open Pass होने के बाद Close न खेलें।\n● Open या Close 100% Pass होगा।\n━━━━━━━━━━━━━━\n✅ **AGRIMM OFFICIAL**`;

// 📊 मार्केट डेटा
const marketData = {
    "TIME": `⚡ **TIME BAZAR (VIP 1)** ⚡\n📅 ${getTodayDate()}\n\n🟢 FIX: [ 0 ]\n🟡 STRONG: [ 5 ]\n⚪ SUPPORT: [ 1, 6 ]\n━━━━━━━━━━━━━━\n➲ 0 | 01, 06, 05, 00 | 127, 460, 550, 280\n➲ 5 | 51, 56, 50, 55 | 140, 230, 690, 159\n➲ 1 | 10, 15, 16, 11 | 128, 470, 100, 146\n➲ 6 | 60, 65, 61, 66 | 123, 150, 600, 240` + specialNote,
    
    "MILAN": `⚡ **MILAN DAY (VIP 1)** ⚡\n📅 ${getTodayDate()}\n\n🟢 FIX: [ 1 ]\n🟡 STRONG: [ 6 ]\n⚪ SUPPORT: [ 3, 8 ]\n━━━━━━━━━━━━━━\n➲ 1 | 13, 18, 16, 11 | 128, 470, 100, 146\n➲ 6 | 63, 68, 61, 66 | 123, 150, 600, 240\n➲ 3 | 31, 36, 38, 33 | 120, 148, 670, 247\n➲ 8 | 81, 86, 83, 88 | 125, 440, 260, 350` + specialNote,

    "KALYAN1": `⚡ **KALYAN (VIP 1)** ⚡\n📅 ${getTodayDate()}\n\n🟢 FIX: [ 2 ]\n🟡 STRONG: [ 7 ]\n⚪ SUPPORT: [ 4, 9 ]\n━━━━━━━━━━━━━━\n➲ 2 | 24, 29, 27, 22 | 129, 480, 570, 156\n➲ 7 | 74, 79, 72, 77 | 179, 340, 250, 115\n➲ 4 | 42, 47, 44, 49 | 130, 158, 400, 220\n➲ 9 | 92, 97, 99, 94 | 126, 450, 270, 360` + specialNote,

    "RAJ": `⚡ **RAJDHANI DAY (VIP 1)** ⚡\n📅 ${getTodayDate()}\n\n🟢 FIX: [ 4 ]\n🟡 STRONG: [ 9 ]\n⚪ SUPPORT: [ 2, 7 ]\n━━━━━━━━━━━━━━\n➲ 4 | 42, 47, 49, 44 | 130, 158, 400, 220\n➲ 9 | 92, 97, 94, 99 | 126, 450, 270, 360\n➲ 2 | 24, 29, 27, 22 | 129, 480, 570, 156\n➲ 7 | 74, 79, 72, 77 | 179, 340, 250, 115` + specialNote,

    "MAIN1": `⚡ **MAIN BAZAR (VIP 1)** ⚡\n📅 ${getTodayDate()}\n\n🟢 FIX: [ 0 ]\n🟡 STRONG: [ 5 ]\n⚪ SUPPORT: [ 1, 6 ]\n━━━━━━━━━━━━━━\n➲ 0 | 01, 06, 05, 00 | 127, 460, 550, 280\n➲ 5 | 51, 56, 50, 55 | 140, 230, 690, 159\n➲ 1 | 10, 15, 16, 11 | 128, 470, 100, 146\n➲ 6 | 60, 65, 61, 66 | 123, 150, 600, 240` + specialNote,

    "KALYAN2": `🏆 **KALYAN MASTER (VIP 2)** 🏆\n📅 ${getTodayDate()}\nशुक्रवार विशेष - रिकवरी धमाका\n━━━━━━━━━━━━━━━━━━━━\n🔥 **FIX OTC:** 0 --- 5 --- 3 --- 8\n\n💎 **VIP JODI (STRONG):**\n58 -- 53 -- 08 -- 03\n\n✨ **SUPPORT JODI:**\n50 -- 05 -- 38 -- 83\n\n🚀 **STRONG PANNA (OPEN):**\n375 -- 122 -- 230\n\n🚀 **STRONG PANNA (CLOSE):**\n369 -- 440 -- 125\n━━━━━━━━━━━━━━━━━━━━` + specialNote,

    "MAIN2": `👑 **MAIN BAZAR (VIP 2)** 👑\n📅 ${getTodayDate()}\nरात का राजा - फिक्स गेम\n━━━━━━━━━━━━━━━━━━━━\n🔥 **FIX OTC:** 0 --- 5 --- 4 --- 9\n\n💎 **VIP JODI (STRONG):**\n04 -- 09 -- 54 -- 59\n\n✨ **SUPPORT JODI:**\n05 -- 50 -- 49 -- 94\n\n🚀 **STRONG PANNA (OPEN):**\n497 -- 235 -- 145\n\n🚀 **STRONG PANNA (CLOSE):**\n203 -- 159 -- 690\n━━━━━━━━━━━━━━━━━━━━` + specialNote,

    "CHART": `🏆 **ALL MARKET 6 ANK OTC** 🏆\n📅 ${getTodayDate()}\n━━━━━━━━━━━━━━\n1. SRIDEVI DAY | 0,1,2,4,5,6\n2. TIME BAZAR | 0,8,9,2,3,4\n3. MADHUR DAY | 0,1,2,4,5,6\n4. MILAN DAY | 0,8,9,2,3,4\n5. RAJDHANI DAY | 0,8,9,2,3,4\n6. SUPREME DAY | 0,1,2,4,5,6\n7. KALYAN | 2,3,4,6,7,8\n8. SRIDEVI NIGHT | 0,1,2,6,7,8\n9. MADHUR NIGHT | 4,5,6,8,9,0\n10. SUPREME NIGHT | 7,8,9,1,2,3\n11. MILAN NIGHT | 9,0,1,3,4,5\n12. RAJDHANI NIGHT | 4,5,6,8,9,0\n13. KALYAN NIGHT | 9,0,1,3,4,5\n14. MAIN BAZAR | 9,0,1,3,4,5\n━━━━━━━━━━━━━━\n✅ **AGRIMM OFFICIAL**`
};

// ⌨️ कीबोर्ड (Keyboards)
const menuTxt = `👑 **Welcome Agrimm Official** 👑\n👇 आज का धमाका देखने के लिए नीचे बटन दबाएं:`;

const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🔥 TODAY VIP GAME 1 🔥', 'FOLDERS_1')],
    [Markup.button.callback('💎 TODAY VIP GAME 2 💎', 'FOLDERS_2')],
    [Markup.button.callback('📊 MASTER CHART', 'MENU_CHART')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

const folder1KB = Markup.inlineKeyboard([
    [Markup.button.callback('⚡ TIME BAZAR', 'G1_TIME'), Markup.button.callback('⚡ MILAN DAY', 'G1_MILAN')],
    [Markup.button.callback('⚡ KALYAN', 'G1_KALYAN'), Markup.button.callback('⚡ RAJDHANI DAY', 'G1_RAJ')],
    [Markup.button.callback('⚡ MAIN BAZAR', 'G1_MAIN')],
    [Markup.button.callback('⬅️ BACK TO HOME', 'HOME')]
]);

const folder2KB = Markup.inlineKeyboard([
    [Markup.button.callback('⚡ KALYAN VIP 2', 'G2_KALYAN'), Markup.button.callback('⚡ MAIN BAZAR VIP 2', 'G2_MAIN')],
    [Markup.button.callback('⬅️ BACK TO HOME', 'HOME')]
]);

// 🤖 एक्शन्स (Handlers)
bot.start((ctx) => ctx.reply(menuTxt, mainKB));

// Home Action
bot.action('HOME', async (ctx) => {
    try { await ctx.editMessageText(menuTxt, mainKB); } catch (e) {}
});

// Folders Navigation
bot.action('FOLDERS_1', async (ctx) => {
    try { await ctx.editMessageText(`📂 **VIP GAME FOLDER 1:**`, folder1KB); } catch (e) {}
});

bot.action('FOLDERS_2', async (ctx) => {
    try { await ctx.editMessageText(`📂 **VIP GAME FOLDER 2:**`, folder2KB); } catch (e) {}
});

// VIP 1 Market Handlers (Proper Back to Folder 1)
bot.action('G1_TIME', (ctx) => ctx.editMessageText(marketData.TIME, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'FOLDERS_1')]])).catch(()=>{}));
bot.action('G1_MILAN', (ctx) => ctx.editMessageText(marketData.MILAN, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'FOLDERS_1')]])).catch(()=>{}));
bot.action('G1_KALYAN', (ctx) => ctx.editMessageText(marketData.KALYAN1, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'FOLDERS_1')]])).catch(()=>{}));
bot.action('G1_RAJ', (ctx) => ctx.editMessageText(marketData.RAJ, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'FOLDERS_1')]])).catch(()=>{}));
bot.action('G1_MAIN', (ctx) => ctx.editMessageText(marketData.MAIN1, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'FOLDERS_1')]])).catch(()=>{}));

// VIP 2 Market Handlers (Proper Back to Folder 2)
bot.action('G2_KALYAN', (ctx) => ctx.editMessageText(marketData.KALYAN2, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'FOLDERS_2')]])).catch(()=>{}));
bot.action('G2_MAIN', (ctx) => ctx.editMessageText(marketData.MAIN2, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'FOLDERS_2')]])).catch(()=>{}));

// Master Chart Action
bot.action('MENU_CHART', async (ctx) => {
    try { await ctx.editMessageText(marketData.CHART, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])); } catch (e) {}
});

bot.launch();
