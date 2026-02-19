const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Bot is Running!'));
app.listen(process.env.PORT || 3000);

const BOT_TOKEN = process.env.BOT_TOKEN || '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });

const games = {
    // 1. 📊 ALL MARKET MASTER CHART (14 Markets)
    "ALL_MARKET_CHART": `
🏆 **ALL MARKET MASTER CHART** 🏆
📅 दिनांक: ${getTodayDate()}
━━━━━━━━━━━━━━━━━━━━
क्र. | मार्केट नाम | 4 अंक OTC | जोड़ी
━━━━━━━━━━━━━━━━━━━━
1. SRIDEVI DAY    |  0-5-3-8  |  03
2. TIME BAZAR     |  0-5-2-7  |  52
3. MADHUR DAY     |  3-8-1-6  |  81
4. MILAN DAY      |  0-5-4-9  |  04
5. RAJDHANI DAY   |  3-8-2-7  |  37
6. SUPREME DAY    |  0-5-1-6  |  56
7. KALYAN         |  0-5-3-8  |  35
8. SRIDEVI NIGHT  |  1-6-3-8  |  63
9. MADHUR NIGHT   |  0-5-3-8  |  08
10. SUPREME NIGHT |  2-7-0-5  |  70
11. MILAN NIGHT   |  3-8-4-9  |  34
12. KALYAN NIGHT  |  0-5-3-8  |  53
13. RAJDHANI NIGHT|  1-6-0-5  |  10
14. MAIN BAZAR    |  3-8-0-5  |  80
━━━━━━━━━━━━━━━━━━━━
⚠️ जहाँ पास, वही **STOP** करें!
✅ **AGRIMM OFFICIAL**
    `,

    // 2. 🎯 SINGLE FOLLOW ANK
    "FOLLOW_DAY": { s: "4", sp: "9", j: "49, 94, 45, 40, 90", p: "130, 239, 679" },
    "FOLLOW_NIGHT": { s: "3", sp: "8", j: "38, 83, 35, 30, 85, 80", p: "120, 468, 148" },

    // 3. 🌞 DAY MARKETS DATA
    "SD_DAY": { n: "SRIDEVI DAY", s: "4", sp: "9", b: "2, 7", d: "4 | 42, 47, 49, 40 | 130, 158, 400, 220\n9 | 92, 97, 94, 90 | 126, 450, 270, 360" },
    "T_DAY": { n: "TIME BAZAR", s: "1", sp: "6", b: "4, 9", d: "1 | 14, 19, 16, 10 | 128, 470, 100, 146\n6 | 64, 69, 61, 60 | 123, 150, 600, 240" },
    "M_DAY": { n: "MADHUR DAY", s: "1", sp: "6", b: "3, 8", d: "1 | 13, 18, 16, 10 | 128, 470, 100, 146" },
    "ML_DAY": { n: "MILAN DAY", s: "4", sp: "9", b: "0, 5", d: "4 | 40, 45, 49, 44 | 130, 158, 400, 220" },
    "RD_DAY": { n: "RAJDHANI DAY", s: "3", sp: "8", b: "6, 0", d: "3 | 36, 30, 38, 33 | 120, 148, 670, 247" },
    "SP_DAY": { n: "SUPREME DAY", s: "4", sp: "9", b: "5, 0", d: "4 | 45, 40, 49, 44 | 130, 158, 400, 220" },
    "K_DAY": { n: "KALYAN", s: "1", sp: "6", b: "4, 9", d: "1 | 14, 19, 16, 11 | 128, 470, 100, 146" },

    // 4. 🌙 NIGHT MARKETS DATA
    "SN_NIGHT": { n: "SRIDEVI NT", s: "1", sp: "6", b: "4, 0", d: "1 | 14, 10, 16, 11 | 128, 470, 100, 146" },
    "MN_NIGHT": { n: "MADHUR NT", s: "4", sp: "9", b: "2, 7", d: "4 | 42, 47, 49, 44 | 130, 158, 400, 220" },
    "MLN_NIGHT": { n: "MILAN NT", s: "3", sp: "8", b: "1, 6", d: "3 | 31, 36, 38, 33 | 120, 148, 670, 247" },
    "RN_NIGHT": { n: "RAJDHANI NT", s: "4", sp: "9", b: "3, 8", d: "4 | 43, 48, 49, 40 | 130, 158, 400, 220" },
    "SPN_NIGHT": { n: "SUPREME NT", s: "1", sp: "6", b: "2, 7", d: "1 | 12, 17, 16, 11 | 128, 470, 100, 146" },
    "KN_NIGHT": { n: "KALYAN NT", s: "4", sp: "9", b: "1, 6", d: "4 | 41, 46, 49, 44 | 130, 158, 400, 220" },
    "MB_NIGHT": { n: "MAIN BAZAR", s: "0", sp: "5", b: "4, 9", d: "0 | 04, 09, 05, 00 | 127, 460, 550, 280" }
};

const disclaimerText = `⚖️ **Disclaimer**: यह बॉट केवल मनोरंजन और अंक ज्योतिष पर आधारित है। किसी भी वित्तीय लाभ या हानि के लिए आप स्वयं जिम्मेदार होंगे।\n✅ **AGRIMM OFFICIAL**`;

// --- Keyboard Logic ---
const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🌞 DAY MARKETS', 'MENU_DAY'), Markup.button.callback('🌙 NIGHT MARKETS', 'MENU_NIGHT')],
    [Markup.button.callback('📊 ALL MARKET MASTER CHART', 'MENU_CHART')],
    [Markup.button.callback('🎯 SINGLE FOLLOW ANK', 'MENU_FOLLOW')],
    [Markup.button.callback('⚖️ DISCLAIMER', 'MENU_DISCLAIMER')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

bot.start((ctx) => {
    ctx.reply(`👑 **WELCOME सतीश भाई! आज आपकी जीत पक्की है** 👑\n━━━━━━━━━━━━━━━━━━━━\n📅 दिनांक: **${getTodayDate()}**\n🎯 **सटीक गेम, बड़ा धमाका!**\n👇 नीचे से मार्केट चुनिए:`, mainKB);
});

bot.action('HOME', (ctx) => {
    ctx.editMessageText(`👑 **WELCOME सतीश भाई! आज आपकी जीत पक्की है** 👑\n━━━━━━━━━━━━━━━━━━━━\n📅 दिनांक: **${getTodayDate()}**\n👇 नीचे से मार्केट चुनिए:`, mainKB).catch(() => {});
});

bot.action('MENU_CHART', (ctx) => {
    ctx.editMessageText(games.ALL_MARKET_CHART, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])).catch(() => {});
});

bot.action('MENU_DISCLAIMER', (ctx) => {
    ctx.editMessageText(disclaimerText, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])).catch(() => {});
});

bot.action('MENU_FOLLOW', (ctx) => {
    ctx.editMessageText('🎯 **SINGLE FOLLOW ANK चुनें:**', Markup.inlineKeyboard([
        [Markup.button.callback('🌞 DAY FOLLOW', 'VIEW_FOLLOW_DAY')],
        [Markup.button.callback('🌙 NIGHT FOLLOW', 'VIEW_FOLLOW_NIGHT')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ])).catch(() => {});
});

bot.action('VIEW_FOLLOW_DAY', (ctx) => {
    const f = games.FOLLOW_DAY;
    let res = `🌞 DAY SINGLE FOLLOW ANK 🌞\n━━━━━━━━━━━━━━━━━━━━\nसिंगल अंक: ${f.s}\nसपोर्ट अंक: ${f.sp}\nवीआईपी जोड़ी: ${f.j}\nस्ट्रॉन्ग पन्ना: ${f.p}\n━━━━━━━━━━━━━━━━━━━━\n✅ AGRIMM OFFICIAL`;
    ctx.editMessageText(res, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]]));
});

bot.action('VIEW_FOLLOW_NIGHT', (ctx) => {
    const f = games.FOLLOW_NIGHT;
    let res = `🌙 NIGHT SINGLE FOLLOW ANK 🌙\n━━━━━━━━━━━━━━━━━━━━\nसिंगल अंक: ${f.s}\nसपोर्ट अंक: ${f.sp}\nवीआईपी जोड़ी: ${f.j}\nस्ट्रॉन्ग पन्ना: ${f.p}\n━━━━━━━━━━━━━━━━━━━━\n✅ AGRIMM OFFICIAL`;
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

bot.launch().then(() => { console.log("🚀 FINAL V20 SYSTEM LIVE!"); });
