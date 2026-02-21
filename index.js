const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Agrimm Official Bot is Live!'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bot Server started on port ${PORT}`));

const BOT_TOKEN = '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => "21-02-2026";
const note = `\n━━━━━━━━━━━━━━\n⚠️ Open Pass होने के बाद Close न खेलें।\n✅ AGRIMM OFFICIAL`;

// 📊 कम्प्लीट मार्केट डेटा
const marketData = {
    "SRIDEVI": `✥ **SRIDEVI DAY** ✥\n📅 ${getTodayDate()}\n━━━━━━━━━━━━━━\n💪 STRONG ANK: 3 — 8\n🔥 FIX OTC: 3, 8, 0, 5\n🎯 JODI: [[ 30 ]]\n💎 SUPPORT: 85, 35, 80, 03\n🎰 PANNA: 120, 468, 157, 378\n━━━━━━━━━━━━━━` + note,

    "TIME": `🏛️ **TIME BAZAR** 🏛️\n📅 ${getTodayDate()}\n━━━━━━━━━━━━━━\n⭐ PRIMARY FIX: [[ 4 ]]\n🔥 STRONG: [[ 9 ]]\n🛡️ SUPPORT: [[ 0, 5 ]]\n━━━━━━━━━━━━━━\n💎 अंक 4: 40, 45, 49, 44 | 130, 158\n💎 अंक 9: 90, 95, 94, 99 | 126, 450\n━━━━━━━━━━━━━━` + note,

    "MILAN": `✥ **MILAN DAY** ✥\n📅 ${getTodayDate()}\n━━━━━━━━━━━━━━\n💪 STRONG ANK: 0 — 5\n🔥 FIX OTC: 0, 5, 3, 8\n🎯 JODI: [[ 03 ]]\n💎 SUPPORT: 58, 08, 53, 35\n🎰 PANNA: 127, 235, 145, 460\n━━━━━━━━━━━━━━` + note,

    "KALYAN": `🏛️ **KALYAN SATURDAY** 🏛️\n📅 ${getTodayDate()}\n━━━━━━━━━━━━━━\n⭐ PRIMARY FIX: [[ 3 ]]\n🔥 STRONG: [[ 8 ]]\n🛡️ SUPPORT: [[ 1, 6 ]]\n━━━━━━━━━━━━━━\n💎 अंक 3: 31, 36, 38, 33 | 120, 148\n💎 अंक 8: 81, 86, 83, 88 | 125, 440\n━━━━━━━━━━━━━━` + note,

    "CHART": `✨ **AGRIMM SPECIAL CHART** ✨\n📅 ${getTodayDate()}\n━━━━━━━━━━━━━━\n➥ SRIDEVI DAY » 【1-2-3-5-6-7】\n➥ TIME BAZAR » 【0-8-9-2-3-4】\n➥ MILAN DAY » 【0-8-9-2-3-4】\n➥ KALYAN » 【4-5-6-8-9-0】🔥\n━━━━━━━━━━━━━━\n✅ SUCCESS: AGRIMM`
};

// --- कीबोर्ड्स ---
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
    [Markup.button.callback('⚡ KALYAN SATURDAY', 'G_KAL')],
    [Markup.button.callback('⬅️ BACK TO HOME', 'HOME')]
]);

// --- हैंडल्स (अब कोई एरर नहीं आएगा) ---
bot.start((ctx) => ctx.reply(`👑 **Welcome Agrimm Official** 👑\n👇 आज का धमाका देखने के लिए नीचे बटन दबाएं:`, mainKB));

bot.action('HOME', (ctx) => { ctx.answerCbQuery(); ctx.reply(`👑 **Main Menu** 👑`, mainKB); });
bot.action('F1', (ctx) => { ctx.answerCbQuery(); ctx.reply(`📂 **VIP Folder 1**`, f1KB); });
bot.action('F2', (ctx) => { ctx.answerCbQuery(); ctx.reply(`📂 **VIP Folder 2**`, f2KB); });

bot.action('G_SRI', (ctx) => { ctx.answerCbQuery(); ctx.reply(marketData.SRIDEVI); });
bot.action('G_TIME', (ctx) => { ctx.answerCbQuery(); ctx.reply(marketData.TIME); });
bot.action('G_MIL', (ctx) => { ctx.answerCbQuery(); ctx.reply(marketData.MILAN); });
bot.action('G_KAL', (ctx) => { ctx.answerCbQuery(); ctx.reply(marketData.KALYAN); });
bot.action('CH', (ctx) => { ctx.answerCbQuery(); ctx.reply(marketData.CHART); });

bot.launch({ dropPendingUpdates: true });
