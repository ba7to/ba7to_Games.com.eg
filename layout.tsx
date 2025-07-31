import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en,ar">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8865069421209568"
     crossOrigin="anonymous"></script>
        <meta name="keywords" content="تحميل العاب كمبيوتر, تنزيل العاب PC, العاب كمبيوتر مجانية, تحميل العاب مجانا, موقع تحميل العاب, أفضل العاب الكمبيوتر, موقع Ba7to_games, العاب للكمبيوتر, تحميل ألعاب, ألعاب مجانية للتحميل, تحميل العاب اكشن, تنزيل العاب مغامرات, العاب استراتيجية للكمبيوتر, تحميل العاب رعب, العاب رياضية للكمبيوتر, تحميل العاب سباق سيارات, العاب محاكاة للكمبيوتر, تحميل العاب الألغاز, العاب فردية (Single Player), العاب جماعية (Multiplayer), العاب اون لاين للكمبيوتر, تحميل العاب RPG, العاب تصويب (Shooter Games), العاب قتال (Fighting Games), العاب تقمص الأدوار, العاب عالم مفتوح (Open World Games), تحميل العاب ويندوز 10, العاب ويندوز 7, تحميل العاب للكمبيوتر الضعيف, العاب بدون متطلبات عالية, متطلبات تشغيل الالعاب, العاب خفيفة للكمبيوتر, العاب للكمبيوتر المتوسط, تحميل العاب للرام 4 جيجا, العاب للكرت الشاشة الضعيف, تحميل احدث الالعاب, جديد العاب الكمبيوتر, العاب 2024 للتحميل, العاب قادمة للكمبيوتر, اخر اصدارات الالعاب, تحديثات الالعاب, تحميل GTA V للكمبيوتر, تنزيل ببجي للكمبيوتر, تحميل فورتنايت PC, تحميل ريد ديد ريدمبشن 2, العاب كول اوف ديوتي للتحميل, تحميل فيفا للكمبيوتر, تحميل اي فوتبول بيس, تحميل ماين كرافت للكمبيوتر, تحميل ليج اوف ليجيندز, تحميل فالورانت, شرح تحميل العاب الكمبيوتر, مشاكل تحميل الالعاب وحلولها, برامج لتشغيل الالعاب, تحميل كراكات الالعاب, شروحات الالعاب, مراجعات العاب الكمبيوتر, اخبار العاب PC











Deep Research

Canvas

صورة

قد يعرض Gemini معلومات خاطئة، لذا ننصحك بالتحقّق من ردوده"/>
        <meta name="description" content="It's a website to download pc games"/>
        <link rel="icon" href="./favicon.ico"/>
        <title>ba7to_Games</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
