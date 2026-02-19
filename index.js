
const { Telegraf, Markup } = require('telegraf');
const express = require('express'); 
const app = express();

app.get('/', (req, res) => res.send('Bot is Running!'));
app.listen(process.env.PORT || 3000);

const BOT_TOKEN = process.env.BOT_TOKEN || '7942529906:AAF827VI_gIQTMfU_CiUKU86IpF4CboNt38';
const bot = new Telegraf(BOT_TOKEN);

const getTodayDate = () => new Date().toLocaleDateString('hi-IN', { day: '2-digit', month: '2-digit', year: 'numeric' });

const games = {
    // --- 📊 ALL MARKET 4 ANK MASTER CHART (Updated as per your list) ---
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

    // अन्य डेटा (जो आपने पहले सेट करवाए थे)
    "FOLLOW_DAY": { s: "4", sp: "9", j: "49, 94, 45, 40, 90", p: "130, 239, 679" },
    "FOLLOW_NIGHT": { s: "3", sp: "8", j: "38, 83, 35, 30, 85, 80", p: "120, 468, 148" },

    "SD_DAY": { n: "SRIDEVI DAY", s: "4", sp: "9", b: "2, 7", d: "4 | 42, 47, 49, 40 | 130, 158, 400, 220\n9 | 92, 97, 94, 90 | 126, 450, 270, 360" },
    "T_DAY": { n: "TIME BAZAR", s: "1", sp: "6", b: "4, 9", d: "1 | 14, 19, 16, 10 | 128, 470, 100, 146" },
    "K_DAY": { n: "KALYAN", s: "1", sp: "6", b: "4, 9", d: "1 | 14, 19, 16, 11 | 128, 470, 100, 146" },
    "MB_NIGHT": { n: "MAIN BAZAR", s: "0", sp: "5", b: "4, 9", d: "0 | 04, 09, 05, 00 | 127, 460, 550, 280" }
};

const disclaimerText = `⚖️ **Disclaimer**: यह बॉट केवल मनोरंजन के लिए है. हम किसी भी तरह के अवैध सट्टे का समर्थन नहीं करते.`;

const mainKB = Markup.inlineKeyboard([
    [Markup.button.callback('🌞 DAY MARKETS', 'MENU_DAY'), Markup.button.callback('🌙 NIGHT MARKETS', 'MENU_NIGHT')],
    [Markup.button.callback('📊 ALL MARKET 4 ANK', 'MENU_CHART')],
    [Markup.button.callback('🎯 SINGLE FOLLOW ANK', 'MENU_FOLLOW')],
    [Markup.button.url('📲 WhatsApp VIP', 'https://wa.me/917225914607')]
]);

bot.start((ctx) => {
    ctx.reply(`👑 **WELCOME सतीश भाई!**\n📅 दिनांक: **${getTodayDate()}**\n👇 आज का मास्टर चार्ट नीचे बटन से देखें:`, mainKB);
});

bot.action('MENU_CHART', (ctx) => {
    ctx.editMessageText(games.ALL_MARKET_CHART, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]])).catch(() => {});
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
        [Markup.button.callback('🏆 KALYAN', 'K_DAY')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ]));
});

bot.action('MENU_NIGHT', (ctx) => {
    ctx.editMessageText('🌙 **NIGHT MARKETS:**', Markup.inlineKeyboard([
        [Markup.button.callback('🔥 MAIN BAZAR', 'MB_NIGHT')],
        [Markup.button.callback('⬅️ BACK', 'HOME')]
    ]));
});

bot.action(/^(SD_DAY|T_DAY|K_DAY|MB_NIGHT)$/, (ctx) => {
    const g = games[ctx.match[0]];
    let res = `💎 ${g.n} 💎\nदिनांक: ${getTodayDate()}\n━━━━━━━━━━━━━━━━━━━━\nसिंगल: ${g.s}\nसपोर्ट: ${g.sp}\nबैकअप: ${g.b}\n\n${g.d}`;
    ctx.editMessageText(res, Markup.inlineKeyboard([[Markup.button.callback('⬅️ BACK', 'HOME')]]));
});

bot.action('HOME', (ctx) => {
    ctx.editMessageText(`👑 **WELCOME! आज आपकी जीत पक्की है**\n📅 दिनांक: **${getTodayDate()}**`, mainKB).catch(() => {});
});

bot.launch().then(() => console.log("🚀 Master Chart Updated!"));
