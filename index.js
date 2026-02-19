
const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Bot is Running!'));
app.listen(process.env.PORT || 3000);

const BOT_TOKEN = process.env.BOT_TOKEN || '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });

const games = {
    // 📊 मास्टर चार्ट (बटन 3 के लिए)
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
✅ **AGRIMM OFFICIAL**
    `,

    // 🎯 सिंगल फॉलो अंक (बटन 4 के लिए)
    "FOLLOW_DAY": { s: "4", sp: "9", j: "49, 94, 45, 40, 90", p: "130, 239, 679" },
    "FOLLOW_NIGHT": { s: "3", sp: "8", j: "38, 83, 35, 30, 85, 80", p: "120, 468, 148" },

    // 🌞 DAY MARKETS (पूरी डिटेल्स के साथ)
    "SD_DAY": { n: "SRIDEVI DAY", s: "0", sp: "5", b: "3, 8", d: "0 | 03, 08, 05, 01 | 127, 460, 550, 280\n5 | 53, 58, 50, 56 | 140, 230, 690, 159\n3 | 30, 35, 32, 37 | 120, 148, 670, 247\n8 | 80, 85, 82, 87 | 125, 440, 260, 350" },
    "T_DAY": { n: "TIME BAZAR", s: "0", sp: "5", b: "2, 7", d: "0 | 02, 07, 05, 01 | 127, 460, 550, 280\n5 | 52, 57, 50, 56 | 140, 230, 690, 159\n2 | 20, 25, 27, 23 | 129, 390, 480, 156\n7 | 70, 75, 72, 73 | 179, 340, 250, 115" },
    "M_DAY": { n: "MADHUR DAY", s: "3", sp: "8", b: "1, 6", d: "3 | 31, 36, 30, 35 | 120, 148, 670, 247\n8 | 81, 86, 80, 85 | 125, 440, 260, 350\n1 | 13, 18, 10, 16 | 128, 470, 100, 146\n6 | 63, 68, 60, 61 | 123, 150, 600, 240" },
    "ML_DAY": { n: "MILAN DAY", s: "0", sp: "5", b: "4, 9", d: "0 | 04, 09, 05, 01 | 127, 460, 550, 280\n5 | 54, 59, 50, 56 | 140, 230, 690, 159\n4 | 40, 45, 49, 43 | 130, 158, 400, 220\n9 | 90, 95, 94, 91 | 126, 450, 270, 360" },
    "RD_DAY": { n: "RAJDHANI DAY", s: "3", sp: "8", b: "2, 7", d: "3 | 32, 37, 30, 35 | 120, 148, 670, 247\n8 | 82, 87, 80, 85 | 125, 440, 260, 350\n2 | 23, 28, 27, 20 | 129, 390, 480, 156\n7 | 73, 78, 72, 70 | 179, 340, 250, 115" },
    "SP_DAY": { n: "SUPREME DAY", s: "0", sp: "5", b: "1, 6", d: "0 | 01, 06, 05, 03 | 127, 460, 550, 280\n5 | 51, 56, 50, 53 | 140, 230, 690, 159\n1 | 10, 15, 16, 12 | 128, 470, 100, 146\n6 | 60, 65, 61, 68 | 123, 150, 600, 240" },
    "K_DAY": { n: "KALYAN", s: "0", sp: "5", b: "3, 8", d: "0 | 03, 08, 05, 02 | 127, 460, 550, 280\n5 | 53, 58, 50, 52 | 140, 230, 690, 159\n3 | 30, 35, 32, 38 | 120, 148, 670, 247\n8 | 80, 85, 82, 83 | 125, 440, 260, 350" },

    // 🌙 NIGHT MARKETS (पूरी डिटेल्स के साथ)
    "SN_NIGHT": { n: "SRIDEVI NT", s: "1", sp: "6", b: "3, 8", d: "1 | 13, 18, 10, 16 | 128, 470, 100, 146\n6 | 63, 68, 60, 61 | 123, 150, 600, 240\n3 | 31, 36, 30, 35 | 120, 148, 670, 247\n8 | 81, 86, 80, 85 | 125, 440, 260, 350" },
    "MN_NIGHT": { n: "MADHUR NT", s: "0", sp: "5", b: "3, 8", d: "0 | 03, 08, 05, 02 | 127, 460, 550, 280\n5 | 53, 58, 50, 52 | 140, 230, 690, 159\n3 | 30, 35, 32, 38 | 120, 148, 670, 247\n8 | 80, 85, 82, 83 | 125, 440, 260, 350" },
    "MLN_NIGHT": { n: "MILAN NT", s: "3", sp: "8", b: "4, 9", d: "3 | 34, 39, 30, 35 | 120, 148, 670, 247\n8 | 84, 89, 80, 85 | 125, 440, 260, 350\n4 | 43, 48, 49, 40 | 130, 158, 400, 220\n9 | 93, 98, 94, 90 | 126, 450, 270, 360" },
    "RN_NIGHT": { n: "RAJDHANI NT", s: "1", sp: "6", b: "0, 5", d: "1 | 10, 15, 16, 12 | 128, 470, 100, 146\n6 | 60, 65, 61, 67 | 123, 150, 600, 240\n0 | 01, 06, 05, 03 | 127, 460, 550, 280\n5 | 51, 56, 50, 53 | 140, 230, 690, 159" },
    "SPN_NIGHT": { n: "SUPREME NT", s: "2", sp: "7", b: "0, 5", d: "2 | 20, 25, 27, 23 | 129, 390, 480, 156\n7 | 70, 75, 72, 73 | 179, 340, 250, 115\n0 | 02, 07, 05, 01 | 127, 460, 550, 280\n5 | 52, 57, 50, 56 | 140, 230, 690, 159" },
    "KN_NIGHT": { n: "KALYAN NT", s: "0", sp: "5", b: "3, 8", d: "0 | 03, 08, 05, 01 | 127, 460, 550, 280\n5 | 53, 58, 50, 56 | 140, 230, 690, 159\n3 | 30, 35, 32, 37 | 120, 148, 670, 247\n8 | 80, 85, 82, 87 | 125, 440, 260, 350" },
    "MB_NIGHT": { n: "MAIN BAZAR", s: "3", sp: "8", b: "0, 5", d: "3 | 30, 35, 38, 32 | 120, 148, 670, 247\n8 | 80, 85, 83, 87 | 125, 440, 260, 350\n0 | 03, 08, 05, 01 | 127, 460, 550, 280\n5 | 53, 58, 50, 56 | 140, 230, 690, 159" }
};

const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🌞 DAY MARKETS', 'MENU_DAY'), Markup.button.callback('🌙 NIGHT MARKETS', 'MENU_NIGHT')],
    [Markup.button.callback('📊 ALL MARKET MASTER CHART', 'MENU_CHART')],
    [Markup.button.callback('🎯 SINGLE FOLLOW ANK', 'MENU_FOLLOW')],
    [Markup.button.callback('⚖️ DISCLAIMER', 'MENU_DISCLAIMER')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

bot.start((ctx) => {
    ctx.reply(`👑 **WELCOME सतीश भाई!**\n━━━━━━━━━━━━━━━━━━━━\n📅 दिनांक: **${getTodayDate()}**\n👇 नीचे से अपना मार्केट चुनें:`, mainKB);
});

bot.action('HOME', (ctx) => {
    ctx.editMessageText(`👑 **WELCOME सतीश भाई!**\n━━━━━━━━━━━━━━━━━━━━\n📅 दिनांक: **${getTodayDate()}**\n👇 नीचे से अपना मार्केट चुनें:`, mainKB).catch(() => {});
});

bot.action('MENU_CHART', (ctx) => {
    ctx.editMessageText(games.ALL_MARKET_CHART, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])).catch(() => {});
});

bot.action('MENU_DISCLAIMER', (ctx) => {
    ctx.editMessageText(`⚖️ **Disclaimer**: यह बॉट केवल ज्योतिषीय गणना पर आधारित है।\n✅ **AGRIMM OFFICIAL**`, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])).catch(() => {});
});

bot.action('MENU_FOLLOW', (ctx) => {
    ctx.editMessageText('🎯 **FOLLOW ANK चुनें:**', Markup.inlineKeyboard([
        [Markup.button.callback('🌞 DAY FOLLOW', 'VIEW_FOLLOW_DAY')],
        [Markup.button.callback('🌙 NIGHT FOLLOW', 'VIEW_FOLLOW_NIGHT')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ]));
});

bot.action('VIEW_FOLLOW_DAY', (ctx) => {
    const f = games.FOLLOW_DAY;
    ctx.editMessageText(`🌞 DAY FOLLOW\nअंक: ${f.s}, ${f.sp}\nजोड़ी: ${f.j}\nपन्ना: ${f.p}`, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]]));
});

bot.action('VIEW_FOLLOW_NIGHT', (ctx) => {
    const f = games.FOLLOW_NIGHT;
    ctx.editMessageText(`🌙 NIGHT FOLLOW\nअंक: ${f.s}, ${f.sp}\nजोड़ी: ${f.j}\nपन्ना: ${f.p}`, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'MENU_FOLLOW')]]));
});

bot.action('MENU_DAY', (ctx) => {
    ctx.editMessageText('🌞 **DAY MARKETS:**', Markup.inlineKeyboard([
        [Markup.button.callback('🔴 SRIDEVI DAY', 'SD_DAY'), Markup.button.callback('🟡 TIME BAZAR', 'T_DAY')],
        [Markup.button.callback('🟢 MADHUR DAY', 'M_DAY'), Markup.button.callback('🔵 MILAN DAY', 'ML_DAY')],
        [Markup.button.callback('🟠 RAJDHANI DAY', 'RD_DAY'), Markup.button.callback('🟣 SUPREME DAY', 'SP_DAY')],
        [Markup.button.callback('🏆 KALYAN', 'K_DAY')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ]));
});

bot.action('MENU_NIGHT', (ctx) => {
    ctx.editMessageText('🌙 **NIGHT MARKETS:**', Markup.inlineKeyboard([
        [Markup.button.callback('🔴 SRIDEVI NT', 'SN_NIGHT'), Markup.button.callback('🟡 MADHUR NT', 'MN_NIGHT')],
        [Markup.button.callback('🟢 MILAN NT', 'MLN_NIGHT'), Markup.button.callback('🔵 RAJDHANI NT', 'RN_NIGHT')],
        [Markup.button.callback('🟣 SUPREME NT', 'SPN_NIGHT'), Markup.button.callback('🟠 KALYAN NT', 'KN_NIGHT')],
        [Markup.button.callback('🔥 MAIN BAZAR 🔥', 'MB_NIGHT')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ]));
});

bot.action(/^(SD_DAY|T_DAY|M_DAY|ML_DAY|RD_DAY|SP_DAY|K_DAY|SN_NIGHT|MN_NIGHT|MLN_NIGHT|RN_NIGHT|SPN_NIGHT|KN_NIGHT|MB_NIGHT)$/, (ctx) => {
    const code = ctx.match[0];
    const g = games[code];
    let res = `💎 ${g.n} 💎\n━━━━━━━━━━━━━━━━━━━━\nसिंगल: ${g.s}\nसपोर्ट: ${g.sp}\nबैकअप: ${g.b}\n\nअंक | जोड़ी | पन्ना\n━━━━━━━━━━━━━━━━━━━━\n${g.d}\n━━━━━━━━━━━━━━━━━━━━\n🎯 OTC: Open-Close Pass होने पर STOP करें।`;
    const backMenu = code.includes('NIGHT') || code === 'MB_NIGHT' ? 'MENU_NIGHT' : 'MENU_DAY';
    ctx.editMessageText(res, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', backMenu)]])).catch(() => {});
});

bot.launch().then(() => console.log("🚀 BOT UPDATED SUCCESSFULLY!"));
