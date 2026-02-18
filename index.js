const { Telegraf, Markup } = require('telegraf');

// आपका फाइनल बॉट टोकन
const bot = new Telegraf('7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38');

const getTodayDate = () => new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });

// --- 🛡️ लॉक डेटाबेस: सतीश भाई यहीं से रोज सारा गेम अपडेट करें 🛡️ ---
const games = {
    // 1. ALL MARKET 4 ANK CHART (14 Markets OTC)
    "ALL_MARKET_CHART": `
🔥 **ALL MARKET 4 ANK OTC** 🔥
━━━━━━━━━━━━━━━━━━━━
क्र. मार्केट नाम  |  4 अंक OTC  | जोड़ी
━━━━━━━━━━━━━━━━━━━━
1. SRIDEVI DAY   |  4-9-0-5  |  90
2. TIME BAZAR    |  4-9-1-6  |  46
3. MADHUR DAY    |  4-9-3-8  |  93
4. MILAN DAY     |  1-6-0-5  |  15
5. RAJDHANI DAY  |  4-9-2-7  |  47
6. SUPREME DAY   |  0-5-1-6  |  06
7. KALYAN        |  4-9-0-5  |  40
8. SRIDEVI NIGHT |  3-8-4-9  |  39
9. MADHUR NIGHT  |  4-9-2-7  |  42
10. SUPREME NIGHT|  0-5-3-8  |  53
11. MILAN NIGHT  |  1-6-4-9  |  64
12. KALYAN NIGHT |  4-9-2-7  |  42
13. RAJDHANI NIGHT| 0-5-4-9  |  54
14. MAIN BAZAR   |  4-9-2-7  |  97
━━━━━━━━━━━━━━━━━━━━
⚠️ जहाँ पास, वही **STOP** करें!
    `,

    // 2. FOLLOW ANK DATA (Day & Night)
    "FOLLOW_DAY": { s: "5", sp: "0", j: "50, 55, 05, 00", p: "122, 447, 127, 460" },
    "FOLLOW_NIGHT": { s: "3", sp: "8", j: "38, 33, 83, 88", p: "120, 468, 148, 260" },

    // 3. FULL 14 MARKETS DATA (Simple Design)
    "SD_DAY": { n: "SRIDEVI DAY", s: "1", sp: "6", b: "3, 8", d: "1 | 13, 18, 10, 16 | 128, 470, 100, 146\n6 | 63, 68, 60, 61 | 123, 150, 600, 240\n3 | 31, 36, 30, 35 | 120, 148, 670, 247\n8 | 81, 86, 80, 85 | 125, 440, 260, 350" },
    "T_DAY": { n: "TIME BAZAR", s: "5", sp: "0", b: "1, 6", d: "5 | 51, 56, 50, 53 | 140, 230, 690, 159\n0 | 01, 06, 05, 08 | 127, 460, 550, 280\n1 | 15, 10, 16, 13 | 128, 470, 100, 146\n6 | 65, 60, 61, 68 | 123, 150, 600, 240" },
    "M_DAY": { n: "MADHUR DAY", s: "9", sp: "4", b: "3, 8", d: "9 | 93, 98, 94, 90 | 126, 450, 270, 360\n4 | 43, 48, 49, 40 | 130, 158, 400, 220\n3 | 39, 34, 31, 30 | 120, 148, 670, 247\n8 | 89, 84, 81, 80 | 125, 440, 260, 350" },
    "ML_DAY": { n: "MILAN DAY", s: "8", sp: "3", b: "2, 6", d: "8 | 83, 81, 86, 80 | 125, 440, 260, 350\n3 | 38, 31, 36, 30 | 120, 148, 670, 247\n2 | 28, 23, 21, 26 | 129, 390, 480, 156\n6 | 68, 63, 61, 60 | 123, 150, 600, 240" },
    "RD_DAY": { n: "RAJDHANI DAY", s: "2", sp: "7", b: "9, 3", d: "2 | 29, 23, 27, 20 | 129, 390, 480, 156\n7 | 79, 73, 72, 70 | 179, 340, 250, 115\n9 | 92, 97, 93, 90 | 126, 450, 270, 360\n3 | 32, 37, 39, 30 | 120, 148, 670, 247" },
    "SP_DAY": { n: "SUPREME DAY", s: "3", sp: "8", b: "5, 0", d: "3 | 35, 30, 38, 32 | 120, 148, 670, 247\n8 | 85, 80, 83, 87 | 125, 440, 260, 350\n5 | 53, 58, 50, 52 | 140, 230, 690, 159\n0 | 03, 08, 05, 07 | 127, 460, 550, 280" },
    "K_DAY": { n: "KALYAN", s: "5", sp: "0", b: "3, 2", d: "5 | 53, 52, 50, 58 | 140, 230, 690, 159\n0 | 03, 02, 05, 08 | 127, 460, 550, 280\n3 | 35, 30, 32, 38 | 120, 148, 670, 247\n2 | 25, 20, 23, 27 | 129, 390, 480, 156" },
    "SN_NIGHT": { n: "SRIDEVI NT", s: "3", sp: "8", b: "4, 9", d: "3 | 34, 39, 38, 30 | 120, 148, 670, 247\n8 | 84, 89, 83, 85 | 125, 440, 260, 350\n4 | 43, 48, 49, 40 | 130, 158, 400, 220\n9 | 93, 98, 94, 90 | 126, 450, 270, 360" },
    "MN_NIGHT": { n: "MADHUR NT", s: "7", sp: "2", b: "0, 5", d: "7 | 70, 75, 72, 73 | 179, 340, 250, 160\n2 | 20, 25, 27, 23 | 129, 390, 480, 156\n0 | 07, 02, 05, 03 | 127, 460, 550, 280\n5 | 57, 52, 50, 53 | 140, 230, 690, 159" },
    "MLN_NIGHT": { n: "MILAN NT", s: "4", sp: "9", b: "1, 6", d: "4 | 41, 46, 49, 40 | 130, 158, 400, 220\n9 | 91, 96, 94, 90 | 126, 450, 270, 360\n1 | 14, 19, 11, 16 | 128, 470, 100, 146\n6 | 64, 69, 66, 61 | 123, 150, 600, 240" },
    "RN_NIGHT": { n: "RAJDHANI NT", s: "0", sp: "5", b: "2, 7", d: "0 | 02, 07, 05, 01 | 127, 460, 550, 280\n5 | 52, 57, 50, 56 | 140, 230, 690, 159\n2 | 20, 25, 22, 27 | 129, 390, 480, 156\n7 | 70, 75, 77, 72 | 179, 340, 250, 115" },
    "SPN_NIGHT": { n: "SUPREME NT", s: "8", sp: "3", b: "9, 4", d: "8 | 89, 84, 83, 80 | 125, 440, 260, 350\n3 | 39, 34, 38, 30 | 120, 148, 670, 247\n9 | 98, 93, 99, 94 | 126, 450, 270, 360\n4 | 48, 43, 44, 49 | 130, 158, 400, 220" },
    "KN_NIGHT": { n: "KALYAN NT", s: "1", sp: "6", b: "5, 0", d: "1 | 15, 10, 16, 12 | 128, 470, 100, 146\n6 | 65, 60, 61, 67 | 123, 150, 600, 240\n5 | 51, 56, 55, 50 | 140, 230, 690, 159\n0 | 01, 06, 00, 05 | 127, 460, 550, 280" },
    "MB_NIGHT": { n: "MAIN BAZAR", s: "2", sp: "7", b: "8, 3", d: "2 | 28, 23, 27, 20 | 129, 390, 480, 156\n7 | 78, 73, 72, 70 | 179, 340, 250, 115\n8 | 82, 87, 88, 83 | 125, 440, 260, 350\n3 | 32, 37, 33, 38 | 120, 148, 670, 247" }
};

// --- ⚖️ कानूनी सूचना (Disclaimer) ---
const disclaimerText = `⚖️ **कानूनी सूचना (Disclaimer)** ⚖️\n━━━━━━━━━━━━━━━━━━━━\n1. यह बॉट पूरी तरह से **अंक ज्योतिष (Numerology)** पर आधारित है।\n2. हमारा उद्देश्य किसी भी अवैध गतिविधि को बढ़ावा देना नहीं है।\n3. बॉट के अंक केवल मनोरंजन और शिक्षा के लिए हैं।\n4. किसी भी वित्तीय लाभ या हानि के जिम्मेदार आप स्वयं होंगे।\n━━━━━━━━━━━━━━━━━━━━\n✅ जनहित में जारी: **AGRIMM OFFICIAL**`;

// --- 2. मुख्य मेनू (Home Keyboard) ---
const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🌞 DAY MARKETS', 'MENU_DAY'), Markup.button.callback('🌙 NIGHT MARKETS', 'MENU_NIGHT')],
    [Markup.button.callback('📊 ALL MARKET 4 ANK', 'MENU_CHART')],
    [Markup.button.callback('🎯 SINGLE FOLLOW ANK', 'MENU_FOLLOW')],
    [Markup.button.callback('⚖️ DISCLAIMER', 'MENU_DISCLAIMER')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

bot.start((ctx) => {
    ctx.reply(`👑 **WELCOME! आज आपकी जीत पक्की है** 👑\n━━━━━━━━━━━━━━━━━━━━\n📅 दिनांक: **${getTodayDate()}**\n🎯 **सटीक गेम, बड़ा धमाका!**\n👇 नीचे से मार्केट चुनिए:`, mainKB);
});

// --- 3. डिस्क्लेमर और चार्ट ---
bot.action('MENU_DISCLAIMER', (ctx) => {
    ctx.editMessageText(disclaimerText, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])).catch(() => {});
});

bot.action('MENU_CHART', (ctx) => {
    ctx.editMessageText(games.ALL_MARKET_CHART, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])).catch(() => {});
});

// --- 4. फॉलो अंक सेक्शन ---
bot.action('MENU_FOLLOW', (ctx) => {
    ctx.editMessageText('🎯 **SINGLE FOLLOW ANK चुनें:**', Markup.inlineKeyboard([
        [Markup.button.callback('🌞 DAY FOLLOW (SD to KL)', 'VIEW_FOLLOW_DAY')],
        [Markup.button.callback('🌙 NIGHT FOLLOW (SN to MB)', 'VIEW_FOLLOW_NIGHT')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ])).catch(() => {});
});

bot.action('VIEW_FOLLOW_DAY', (ctx) => {
    const f = games.FOLLOW_DAY;
    let res = `🌞 DAY SINGLE FOLLOW ANK 🌞\n📅 दिनांक: ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━━━\nसिंगल अंक: ${f.s}\nसपोर्ट अंक: ${f.sp}\nवीआईपी जोड़ी: ${f.j}\nस्ट्रॉन्ग पन्ना: ${f.p}\n━━━━━━━━━━━━━━━━━━━━\n🎯 गेम Open या Close 100% Pass होगा।\n⚠️ Sridevi Day से Kalyan तक जहाँ पास हो जाए USKE BAAD STOP।\n━━━━━━━━━━━━━━━━━━━━\n✅ AGRIMM OFFICIAL`;
    ctx.editMessageText(res, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]]));
});

bot.action('VIEW_FOLLOW_NIGHT', (ctx) => {
    const f = games.FOLLOW_NIGHT;
    let res = `🌙 NIGHT SINGLE FOLLOW ANK 🌙\n📅 दिनांक: ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━━━\nसिंगल अंक: ${f.s}\nसपोर्ट अंक: ${f.sp}\nवीआईपी जोड़ी: ${f.j}\nस्ट्रॉन्ग पन्ना: ${f.p}\n━━━━━━━━━━━━━━━━━━━━\n🎯 गेम Open या Close 100% Pass होगा।\n⚠️ Sridevi Night से Main Bazar तक जहाँ पास हो जाए USKE BAAD STOP।\n━━━━━━━━━━━━━━━━━━━━\n✅ AGRIMM OFFICIAL`;
    ctx.editMessageText(res, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]]));
});

// --- 5. मार्केट लिस्ट्स ---
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
        [Markup.button.callback('🟠 SUPREME NT', 'SPN_NIGHT'), Markup.button.callback('🟣 KALYAN NT', 'KN_NIGHT')],
        [Markup.button.callback('🔥 MAIN BAZAR 🔥', 'MB_NIGHT')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ])).catch(() => {});
});

// --- 6. गेम डिस्प्ले लॉजिक (All 14 Markets) ---
bot.action(/^(SD_DAY|T_DAY|M_DAY|ML_DAY|RD_DAY|SP_DAY|K_DAY|SN_NIGHT|MN_NIGHT|MLN_NIGHT|RN_NIGHT|SPN_NIGHT|KN_NIGHT|MB_NIGHT)$/, (ctx) => {
    const code = ctx.match[0];
    const g = games[code];
    let res = `💎 AGRIMM OFFICIAL: ${g.n} 💎\n📅 तारीख: ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━━━\n`;
    res += `सिंगल ओपन: ${g.s}\nसपोर्ट ओपन: ${g.sp}\nबैकअप अंक: ${g.b}\n\n`;
    res += `अंक | वीआईपी जोड़ी | स्ट्रॉन्ग पन्ना\n━━━━━━━━━━━━━━━━━━━━\n${g.d}\n━━━━━━━━━━━━━━━━━━━━\n`;
    res += `🎯 OTC: Open या Close जहाँ पास हो USKE BAAD STOP।`;
    
    const backMenu = (code.includes('NIGHT') || code === 'MB_NIGHT') ? 'MENU_NIGHT' : 'MENU_DAY';
    ctx.editMessageText(res, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', backMenu)]])).catch(() => {});
});

bot.action('HOME', (ctx) => {
    ctx.editMessageText(`👑 **WELCOME! आज आपकी जीत पक्की है** 👑\n━━━━━━━━━━━━━━━━━━━━\n📅 दिनांक: **${getTodayDate()}**\n👇 मार्केट चुनिए:`, mainKB).catch(() => {});
    ctx.answerCbQuery();
});

bot.launch();
console.log("🚀 AGRIMM V20 (WELCOME DATE ADDED) LIVE!");