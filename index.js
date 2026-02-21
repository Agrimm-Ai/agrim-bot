const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Agrimm Official Bot is Running!'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const BOT_TOKEN = '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => "21/02/2026";
const getTodayDay = () => "शनिवार";

const specialNote = `\n━━━━━━━━━━━━━━\n⚠️ **विशेष नोट:**\n● Open Pass होने के बाद Close न खेलें।\n● Open या Close 100% Pass होगा।\n━━━━━━━━━━━━━━\n✅ **AGRIMM OFFICIAL**`;

// 📊 मार्केट डेटा
const marketData = {
    "SRIDEVI": `✥ **SRIDEVI DAY** ✥\n${getTodayDay()} धमाका | ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━\n💪 **STRONG ANK:** 3 — 8\n━━━━━━━━━━━━━━━━━━\n🔥 **FIX OTC:** 3 — 8 — 0 — 5\n━━━━━━━━━━━━━━━━━━\n🎯 **SINGLE JODI:** [[ 30 ]]\n━━━━━━━━━━━━━━━━━━\n🎰 **POWER PANNA:** 120 — 468 — 157 — 378\n━━━━━━━━━━━━━━━━━━` + specialNote,

    "TIME": `🏛️ **TIME BAZAR : ELITE LOOK** 🏛️\n📅 ${getTodayDate()} (${getTodayDay()})\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n⭐ **PRIMARY FIX** ➔ [[ 4 ]]\n🔥 **SECONDARY STRONG** ➔ [[ 9 ]]\n🛡️ **DEFENSE SUPPORT** ➔ [[ 0, 5 ]]\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n💎 अंक 4: 40, 45, 49, 44 | 130, 158, 400, 220\n💎 अंक 9: 90, 95, 94, 99 | 126, 450, 270, 360\n━━━━━━━━━━━━━━━━━━━━━━━━━━` + specialNote,

    "MILAN_DAY": `✥ **MILAN DAY** ✥\n${getTodayDay()} धमाका | ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━\n💪 **STRONG ANK:** 0 — 5\n━━━━━━━━━━━━━━━━━━\n🔥 **FIX OTC:** 0 — 5 — 3 — 8\n━━━━━━━━━━━━━━━━━━\n🎯 **SINGLE JODI:** [[ 03 ]]\n━━━━━━━━━━━━━━━━━━\n🎰 **POWER PANNA:** 127 — 235 — 145 — 460\n━━━━━━━━━━━━━━━━━━` + specialNote,

    "KALYAN_SAT": `🏛️ **KALYAN : SATURDAY SPECIAL** 🏛️\n📅 ${getTodayDate()} (${getTodayDay()})\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n⭐ **PRIMARY FIX** ➔ [[ 3 ]]\n🔥 **SECONDARY STRONG** ➔ [[ 8 ]]\n🛡️ **DEFENSE SUPPORT** ➔ [[ 1, 6 ]]\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n💎 अंक 3: 31, 36, 38, 33 | 120, 148, 670, 247\n💎 अंक 8: 81, 86, 83, 88 | 125, 440, 260, 350\n━━━━━━━━━━━━━━━━━━━━━━━━━━` + specialNote,

    "CHART": `✨ **𝐀𝐆𝐑𝐈𝐌𝐌 𝐒𝐏𝐄𝐂𝐈𝐀𝐋 𝐆𝐀𝐌𝐄** ✨\n📅 ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━\n⭐ **[ डे मार्केट - 6 ANK OTC ]** ⭐\n➥ SRIDEVI DAY » 【1-2-3-5-6-7】\n➥ TIME BAZAR » 【0-8-9-2-3-4】\n➥ MADHUR DAY » 【7-8-9-1-2-3】\n➥ MILAN DAY » 【0-8-9-2-3-4】\n➥ RAJDHANI DAY » 【5-6-7-9-0-1】\n➥ SUPREME DAY » 【5-6-7-9-0-1】\n➥ KALYAN » 【4-5-6-8-9-0】🔥\n\n🌑 **[ नाइट मार्केट - 6 ANK OTC ]** 🌑\n➥ SRIDEVI NIGHT » 【4-5-6-8-9-0】\n➥ MADHUR NIGHT » 【1-2-3-5-6-7】\n➥ SUPREME NIGHT » 【0-1-2-4-5-6】\n➥ MILAN NIGHT » 【9-0-1-3-4-5】\n➥ RAJDHANI NIGHT» 【8-9-0-2-3-4】\n➥ KALYAN NIGHT » 【0-1-2-4-5-6】\n➥ MAIN BAZAR » 【3-4-5-7-8-9】🔥\n━━━━━━━━━━━━━━━━━━\n✅ सफलता का दूसरा नाम: **AGRIMM**`
};

// --- कीबोर्ड्स ---
const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🔥 TODAY VIP GAME 1 🔥', 'FOLDERS_1')],
    [Markup.button.callback('💎 TODAY VIP GAME 2 💎', 'FOLDERS_2')],
    [Markup.button.callback('📊 MASTER CHART', 'MENU_CHART')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

const folder1KB = Markup.inlineKeyboard([
    [Markup.button.callback('⚡ SRIDEVI DAY', 'G1_SRIDEVI')],
    [Markup.button.callback('⚡ TIME BAZAR', 'G1_TIME'), Markup.button.callback('⚡ MILAN DAY', 'G1_MILAN')],
    [Markup.button.callback('⬅️ BACK TO HOME', 'HOME')]
]);

const folder2KB = Markup.inlineKeyboard([
    [Markup.button.callback('⚡ KALYAN SATURDAY', 'G2_KALYAN')],
    [Markup.button.callback('⬅️ BACK TO HOME', 'HOME')]
]);

// --- "Delete & Send" हेल्पर (यह कभी नहीं अटकेगा) ---
const refreshMenu = async (ctx, text, keyboard) => {
    try {
        await ctx.answerCbQuery().catch(() => {});
        await ctx.deleteMessage().catch(() => {});
        await ctx.reply(text, keyboard);
    } catch (e) {
        await ctx.reply(text, keyboard);
    }
};

// --- हैंडल्स ---
bot.start((ctx) => ctx.reply(`👑 **Welcome Agrimm Official** 👑\n👇 आज का धमाका देखने के लिए नीचे बटन दबाएं:`, mainKB));

bot.action('HOME', (ctx) => refreshMenu(ctx, `👑 **Welcome Agrimm Official** 👑\n👇 विकल्प चुनें:`, mainKB));
bot.action('FOLDERS_1', (ctx) => refreshMenu(ctx, `📂 **VIP GAME FOLDER 1:**`, folder1KB));
bot.action('FOLDERS_2', (ctx) => refreshMenu(ctx, `📂 **VIP GAME FOLDER 2:**`, folder2KB));

// मार्केट एक्शन्स
bot.action('G1_SRIDEVI', (ctx) => refreshMenu(ctx, marketData.SRIDEVI, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'FOLDERS_1')]])));
bot.action('G1_TIME', (ctx) => refreshMenu(ctx, marketData.TIME, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'FOLDERS_1')]])));
bot.action('G1_MILAN', (ctx) => refreshMenu(ctx, marketData.MILAN_DAY, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'FOLDERS_1')]])));
bot.action('G2_KALYAN', (ctx) => refreshMenu(ctx, marketData.KALYAN_SAT, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'FOLDERS_2')]])));
bot.action('MENU_CHART', (ctx) => refreshMenu(ctx, marketData.CHART, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])));

bot.launch({ dropPendingUpdates: true });


