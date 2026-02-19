const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Bot is Running!'));
app.listen(process.env.PORT || 3000);

const BOT_TOKEN = process.env.BOT_TOKEN || '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });

const games = {
    // 📊 ALL MARKET 4 ANK CHART
    "ALL_MARKET_CHART": `
🔥 **ALL MARKET 4 ANK OTC** 🔥
━━━━━━━━━━━━━━━━━━━━
क्र. मार्केट नाम  |  4 अंक OTC  | जोड़ी
━━━━━━━━━━━━━━━━━━━━
1. SRIDEVI DAY   |  4-9-2-7  |  47
2. TIME BAZAR    |  1-6-4-9  |  16
3. MADHUR DAY    |  1-6-3-8  |  13
4. MILAN DAY     |  4-9-0-5  |  40
5. RAJDHANI DAY  |  3-8-6-0  |  36
6. SUPREME DAY   |  4-9-5-0  |  45
7. KALYAN        |  1-6-4-9  |  11
8. SRIDEVI NIGHT |  1-6-4-0  |  16
9. MADHUR NIGHT  |  4-9-2-7  |  42
10. SUPREME NIGHT|  1-6-2-7  |  11
11. MILAN NIGHT  |  3-8-1-6  |  31
12. KALYAN NIGHT |  4-9-1-6  |  41
13. RAJDHANI NIGHT| 4-9-3-8  |  43
14. MAIN BAZAR   |  0-5-4-9  |  00
━━━━━━━━━━━━━━━━━━━━
⚠️ जहाँ पास, वही **STOP** करें!
    `,

    // 🎯 SINGLE FOLLOW ANK
    "FOLLOW_DAY": { s: "4", sp: "9", j: "49, 94, 45, 40, 90", p: "130, 239, 679" },
    "FOLLOW_NIGHT": { s: "3", sp: "8", j: "38, 83, 35, 30, 85, 80", p: "120, 468, 148" },

    // 🌞 DAY MARKETS
    "SD_DAY": { n: "SRIDEVI DAY", s: "4", sp: "9", b: "2, 7", d: "4 | 42, 47, 49, 40 | 130, 158, 400, 220\n9 | 92, 97, 94, 90 | 126, 450, 270, 360\n2 | 24, 29, 27, 20 | 129, 390, 480, 156\n7 | 74, 79, 72, 70 | 179, 340, 250, 115" },
    "T_DAY": { n: "TIME BAZAR", s: "1", sp: "6", b: "4, 9", d: "1 | 14, 19, 16, 10 | 128, 470, 100, 146\n6 | 64, 69, 61, 60 | 123, 150, 600, 240\n4 | 41, 46, 44, 49 | 130, 158, 400, 220\n9 | 91, 96, 99, 94 | 126, 450, 270, 360" },
    "M_DAY": { n: "MADHUR DAY", s: "1", sp: "6", b: "3, 8", d: "1 | 13, 18, 16, 10 | 128, 470, 100, 146\n6 | 63, 68, 61, 60 | 123, 150, 600, 240\n3 | 31, 36, 38, 30 | 120, 148, 670, 247\n8 | 81, 86, 83, 80 | 125, 440, 260, 350" },
    "ML_DAY": { n: "MILAN DAY", s: "4", sp: "9", b: "0, 5", d: "4 | 40, 45, 49, 44 | 130, 158, 400, 220\n9 | 90, 95, 94, 99 | 126, 450, 270, 360\n0 | 04, 09, 00, 05 | 127, 460, 550, 280\n5 | 54, 59, 55, 50 | 140, 230, 690, 159" },
    "RD_DAY": { n: "RAJDHANI DAY", s: "3", sp: "8", b: "6, 0", d: "3 | 36, 30, 38, 33 | 120, 148, 670, 247\n8 | 86, 80, 83, 88 | 125, 440, 260, 350\n6 | 63, 68, 66, 60 | 123, 150, 600, 240\n0 | 03, 08, 00, 06 | 127, 460, 550, 280" },
    "SP_DAY": { n: "SUPREME DAY", s: "4", sp: "9", b: "5, 0", d: "4 | 45, 40, 49, 44 | 130, 158, 400, 220\n9 | 95, 90, 94, 99 | 126, 450, 270, 360\n5 | 54, 59, 50, 55 | 140, 230, 690, 159\n0 | 04, 09, 05, 00 | 127, 460, 550, 280" },
    "K_DAY": { n: "KALYAN", s: "1", sp: "6", b: "4, 9", d: "1 | 14, 19, 16, 11 | 128, 470, 100, 146\n6 | 64, 69, 61, 66 | 123, 150, 600, 240\n4 | 41, 46, 49, 44 | 130, 158, 400, 220\n9 | 91, 96, 94, 99 | 126, 450, 270, 360" },

    // 🌙 NIGHT MARKETS
    "SN_NIGHT": { n: "SRIDEVI NT", s: "1", sp: "6", b: "4, 0", d: "1 | 14, 10, 16, 11 | 128, 470, 100, 146\n6 | 64, 60, 61, 66 | 123, 150, 600, 240\n4 | 41, 46, 40, 44 | 130, 158, 400, 220\n0 | 01, 06, 04, 00 | 127, 460, 550, 280" },
    "MN_NIGHT": { n: "MADHUR NT", s: "4", sp: "9", b: "2, 7", d: "4 | 42, 47, 49, 44 | 130, 158, 400, 220\n9 | 92, 97, 94, 99 | 126, 450, 270, 360\n2 | 24, 29, 27, 22 | 129, 390, 480, 156\n7 | 74, 79, 72, 77 | 179, 340, 250, 115" },
    "MLN_NIGHT": { n: "MILAN NT", s: "3", sp: "8", b: "1, 6", d: "3 | 31, 36, 38, 33 | 120, 148, 670, 247\n8 | 81, 86, 83, 88 | 125, 440, 260, 350\n1 | 13, 18, 11, 16 | 128, 470, 100, 146\n6 | 63, 68, 66, 61 | 123, 150, 600, 240" },
    "RN_NIGHT": { n: "RAJDHANI NT", s: "4", sp: "9", b: "3, 8", d: "4 | 43, 48, 49, 40 | 130, 158, 400, 220\n9 | 93, 98, 94, 90 | 126, 450, 270, 360\n3 | 34, 39, 33, 30 | 120, 148, 670, 247\n8 | 84, 89, 88, 80 | 125, 440, 260, 350" },
    "SPN_NIGHT": { n: "SUPREME NT", s: "1", sp: "6", b: "2, 7", d: "1 | 12, 17, 16, 11 | 128, 470, 100, 146\n6 | 62, 67, 61, 66 | 123, 150, 600, 240\n2 | 21, 26, 22, 27 | 129, 390, 480, 156\n7 | 71, 76, 77, 72 | 179, 340, 250, 115" },
    "KN_NIGHT": { n: "KALYAN NT", s: "4", sp: "9", b: "1, 6", d: "4 | 41, 46, 49, 44 | 130, 158, 400, 220\n9 | 91, 96, 94, 99 | 126, 450, 270, 360\n1 | 14, 19, 11, 16 | 128, 470, 100, 146\n6 | 64, 69, 66, 61 | 123, 150, 600, 240" },
    "MB_NIGHT": { n: "MAIN BAZAR", s: "0", sp: "5", b: "4, 9", d: "0 | 04, 09, 05, 00 | 127, 460, 550, 280\n5 | 54, 59, 50, 55 | 140, 230, 690, 159\n4 | 40, 45, 44, 49 | 130, 158, 400, 220\n9 | 90, 95, 99, 94 | 126, 450, 270, 360" }
};

const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🌞 DAY MARKETS', 'MENU_DAY'), Markup.button.callback('🌙 NIGHT MARKETS', 'MENU_NIGHT')],
    [Markup.button.callback('📊 ALL MARKET 4 ANK', 'MENU_CHART')],
    [Markup.button.callback('🎯 SINGLE FOLLOW ANK', 'MENU_FOLLOW')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

bot.start((ctx) => {
    ctx.reply(`👑 **WELCOME! आज आपकी जीत पक्की है** 👑\n━━━━━━━━━━━━━━━━━━━━\n📅 दिनांक: **${getTodayDate()}**\n🎯 **सटीक गेम, बड़ा धमाका!**\n👇 नीचे से मार्केट चुनिए:`, mainKB);
});

bot.action('MENU_CHART', (ctx) => {
    ctx.editMessageText(games.ALL_MARKET_CHART, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])).catch(() => {});
});

bot.action('MENU_FOLLOW', (ctx) => {
    ctx.editMessageText('🎯 **SINGLE FOLLOW ANK चुनें:**', Markup.inlineKeyboard([
        [Markup.button.callback('🌞 DAY FOLLOW (SD to KL)', 'VIEW_FOLLOW_DAY')],
        [Markup.button.callback('🌙 NIGHT FOLLOW (SN to MB)', 'VIEW_FOLLOW_NIGHT')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ])).catch(() => {});
});

bot.action('VIEW_FOLLOW_DAY', (ctx) => {
    const f = games.FOLLOW_DAY;
    let res = `🌞 DAY SINGLE FOLLOW ANK 🌞\n📅 दिनांक: ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━━━\nसिंगल अंक: ${f.s}\nसपोर्ट अंक: ${f.sp}\nवीआईपी जोड़ी: ${f.j}\nस्ट्रॉन्ग पन्ना: ${f.p}\n━━━━━━━━━━━━━━━━━━━━\n🎯 गेम Open या Close 100% Pass होगा।\n⚠️ Sridevi Day से Kalyan तक जहाँ पास हो जाए STOP।\n━━━━━━━━━━━━━━━━━━━━\n✅ AGRIMM OFFICIAL`;
    ctx.editMessageText(res, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]]));
});

bot.action('VIEW_FOLLOW_NIGHT', (ctx) => {
    const f = games.FOLLOW_NIGHT;
    let res = `🌙 NIGHT SINGLE FOLLOW ANK 🌙\n📅 दिनांक: ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━━━\nसिंगल अंक: ${f.s}\nसपोर्ट अंक: ${f.sp}\nवीआईपी जोड़ी: ${f.j}\nस्ट्रॉन्ग पन्ना: ${f.p}\n━━━━━━━━━━━━━━━━━━━━\n🎯 गेम Open या Close 100% Pass होगा।\n⚠️ Sridevi Night से Main Bazar तक जहाँ पास हो जाए STOP।\n━━━━━━━━━━━━━━━━━━━━\n✅ AGRIMM OFFICIAL`;
    ctx.editMessageText(res, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]]));
});

bot.action('MENU_DAY', (ctx) => {
    ctx.editMessageText('🌞 **DAY MARKETS LIST:**', Markup.inlineKeyboard([
        [Markup.button.callback('🔴 SRIDEVI DAY', 'SD_DAY'), Markup.button.callback('🟡 TIME BAZAR', 'T_DAY')],
        [Markup.button.callback('🟢 MADHUR DAY', 'M_DAY'), Markup.button.callback('🔵 MILAN DAY', 'ML_DAY')],
        [Markup.button.callback('🟠 RAJDHANI DAY', 'RD_DAY'), Markup.button.callback('🟣 SUPREME DAY', 'SP_DAY')],
        [Markup.button.callback('🏆 KALYAN 🏆', 'K_DAY')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ])).catch(() => {});
});

bot.action('MENU_NIGHT', (ctx) => {
    ctx.editMessageText('🌙 **NIGHT MARKETS LIST:**', Markup.inlineKeyboard([
        [Markup.button.callback('🔴 SRIDEVI NT', 'SN_NIGHT'), Markup.button.callback('🟡 MADHUR NT', 'MN_NIGHT')],
        [Markup.button.callback('🟢 MILAN NT', 'MLN_NIGHT'), Markup.button.callback('🔵 RAJDHANI NT', 'RN_NIGHT')],
        [Markup.button.callback('🟣 SUPREME NT', 'SPN_NIGHT'), Markup.button.callback('🟠 KALYAN NT', 'KN_NIGHT')],
        [Markup.button.callback('🔥 MAIN BAZAR 🔥', 'MB_NIGHT')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ])).catch(() => {});
});

bot.action(/^(SD_DAY|T_DAY|M_DAY|ML_DAY|RD_DAY|SP_DAY|K_DAY|SN_NIGHT|MN_NIGHT|MLN_NIGHT|RN_NIGHT|SPN_NIGHT|KN_NIGHT|MB_NIGHT)$/, (ctx) => {
    const code = ctx.match[0];
    const g = games[code];
    let res = `💎 AGRIMM OFFICIAL: ${g.n} 💎\n📅 तारीख: ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━━━\n`;
    res += `सिंगल ओपन: ${g.s}\nसपोर्ट ओपन: ${g.sp}\nबैकअप अंक: ${g.b}\n\n`;
    res += `अंक | वीआईपी जोड़ी | स्ट्रॉन्ग पन्ना\n━━━━━━━━━━━━━━━━━━━━\n${g.d}\n━━━━━━━━━━━━━━━━━━━━\n`;
    res += `🎯 OTC: Open या Close जहाँ पास हो उसके बाद STOP।`;
    const backMenu = code.includes('NIGHT') || code === 'MB_NIGHT' ? 'MENU_NIGHT' : 'MENU_DAY';
    ctx.editMessageText(res, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', backMenu)]])).catch(() => {});
});

bot.action('HOME', (ctx) => {
    ctx.editMessageText(`👑 **WELCOME! आज आपकी जीत पक्की है** 👑\n━━━━━━━━━━━━━━━━━━━━\n📅 दिनांक: **${getTodayDate()}**\n👇 मार्केट चुनिए:`, mainKB).catch(() => {});
});

bot.launch().then(() => { console.log("🚀 ALL 14 MARKETS UPDATED - V20 LIVE!"); });

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
