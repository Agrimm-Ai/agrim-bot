const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Agrimm Official Bot is Running!'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bot started on port ${PORT}`));

const BOT_TOKEN = '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => "21-02-2026";
const specialNote = `\n━━━━━━━━━━━━━━\n⚠️ **विशेष नोट:**\n● Open Pass होने के बाद Close न खेलें।\n● Open या Close 100% Pass होगा।\n━━━━━━━━━━━━━━\n✅ **AGRIMM OFFICIAL**`;

// 📊 कम्प्लीट डेटा
const marketData = {
    "SRIDEVI": `✥ **SRIDEVI DAY** ✥\n📅 ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━\n💪 **STRONG ANK:** 3 — 8\n🔥 **FIX OTC:** 3 — 8 — 0 — 5\n🎯 **SINGLE JODI:** [[ 30 ]]\n💎 **SUPPORT:** 85, 35, 80, 03\n🎰 **PANNA:** 120, 468, 157, 378\n━━━━━━━━━━━━━━━━━━` + specialNote,

    "TIME": `🏛️ **TIME BAZAR : ELITE LOOK** 🏛️\n📅 ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━━━\n⭐ **PRIMARY FIX** ➔ [[ 4 ]]\n🔥 **STRONG** ➔ [[ 9 ]]\n🛡️ **SUPPORT** ➔ [[ 0, 5 ]]\n━━━━━━━━━━━━━━━━━━━━\n💎 4: 40, 45, 49, 44 | 130, 158\n💎 9: 90, 95, 94, 99 | 126, 450\n━━━━━━━━━━━━━━━━━━━━` + specialNote,

    "MILAN": `✥ **MILAN DAY** ✥\n📅 ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━\n💪 **STRONG ANK:** 0 — 5\n🔥 **FIX OTC:** 0, 5, 3, 8\n🎯 **SINGLE JODI:** [[ 03 ]]\n💎 **SUPPORT:** 58, 08, 53, 35\n🎰 **PANNA:** 127, 235, 145, 460\n━━━━━━━━━━━━━━━━━━` + specialNote,

    "KALYAN": `🏛️ **KALYAN : SATURDAY SPECIAL** 🏛️\n📅 ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━━━\n⭐ **PRIMARY FIX** ➔ [[ 3 ]]\n🔥 **STRONG** ➔ [[ 8 ]]\n🛡️ **SUPPORT** ➔ [[ 1, 6 ]]\n━━━━━━━━━━━━━━━━━━━━\n💎 3: 31, 36, 38, 33 | 120, 148\n💎 8: 81, 86, 83, 88 | 125, 440\n━━━━━━━━━━━━━━━━━━━━` + specialNote,

    "CHART": `✨ **𝐀𝐆𝐑𝐈𝐌𝐌 𝐒𝐏𝐄𝐂𝐈𝐀𝐋 𝐆𝐀𝐌𝐄** ✨\n📅 दिनांक: ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━\n⭐ **[ 6 ANK OTC CHART ]** ⭐\n➥ SRIDEVI DAY »  【1-2-3-5-6-7】\n➥ TIME BAZAR »  【0-8-9-2-3-4】\n➥ MADHUR DAY »  【7-8-9-1-2-3】\n➥ MILAN DAY »  【0-8-9-2-3-4】\n➥ RAJDHANI DAY » 【5-6-7-9-0-1】\n➥ KALYAN »  【4-5-6-8-9-0】🔥\n━━━━━━━━━━━━━━━━━━\n✅ सफलता का दूसरा नाम: **AGRIMM**`
};

// --- कीबोर्ड ---
const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🔥 TODAY VIP GAME 1', 'F1')],
    [Markup.button.callback('💎 TODAY VIP GAME 2', 'F2')],
    [Markup.button.callback('📊 MASTER CHART', 'CH')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

const f1KB = Markup.inlineKeyboard([
    [Markup.button.callback('⚡ SRIDEVI', 'G_SRI'), Markup.button.callback('⚡ TIME', 'G_TIME')],
    [Markup.button.callback('⚡ MILAN DAY', 'G_MIL')],
    [Markup.button.callback('⬅️ BACK TO HOME', 'HOME')]
]);

const f2KB = Markup.inlineKeyboard([
    [Markup.button.callback('⚡ KALYAN SAT', 'G_KAL')],
    [Markup.button.callback('⬅️ BACK TO HOME', 'HOME')]
]);

// --- स्मूथ नेविगेशन फंक्शन ---
const update = async (ctx, text, kb) => {
    try {
        await ctx.answerCbQuery().catch(() => {});
        await ctx.editMessageText(text, { parse_mode: 'Markdown', ...kb });
    } catch (e) {
        await ctx.reply(text, kb); // अगर एडिट फेल हो तो नया मैसेज भेजें
    }
};

// --- हैंडल्स ---
bot.start((ctx) => ctx.reply(`👑 **Welcome Agrimm Official** 👑\n👇 आज का धमाका देखने के लिए नीचे बटन दबाएं:`, mainKB));

bot.action('HOME', (ctx) => update(ctx, `👑 **Main Menu** 👑\nविकल्प चुनें:`, mainKB));
bot.action('F1', (ctx) => update(ctx, `📂 **VIP Folder 1**`, f1KB));
bot.action('F2', (ctx) => update(ctx, `📂 **VIP Folder 2**`, f2KB));

bot.action('G_SRI', (ctx) => update(ctx, marketData.SRIDEVI, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'F1')]])));
bot.action('G_TIME', (ctx) => update(ctx, marketData.TIME, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'F1')]])));
bot.action('G_MIL', (ctx) => update(ctx, marketData.MILAN, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'F1')]])));
bot.action('G_KAL', (ctx) => update(ctx, marketData.KALYAN, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'F2')]])));
bot.action('CH', (ctx) => update(ctx, marketData.CHART, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])));

bot.launch({ dropPendingUpdates: true });
