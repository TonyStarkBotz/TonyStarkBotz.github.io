// Data for all the channels, groups, and bots
const items = [
    {
        type: "channel",
        title: "✨ Cine Uploads",
        description: "Your Ultimate Entertainment Universe ❤️‍🔥",
        keywords: "entertainment cine uploads movies",
        openUrl: "https://t.me/Cine_Uploads",
        copyUrl: "https://t.me/Cine_Uploads",
        icon: "https://envs.sh/GOU.jpg"
    },
    {
        type: "channel",
        title: "🍿 Series Hub",
        description: "All your favorite shows & films in one hub.",
        keywords: "movies series hub",
        openUrl: "https://t.me/MTLinksShareBot?start=LTEwMDIxMTM3OTkzMTk=",
        copyUrl: "https://t.me/MTLinksShareBot?start=LTEwMDIxMTM3OTkzMTk=",
        icon: "https://envs.sh/GOl.jpg" // Add icon path here if available
    },
    {
        type: "channel",
        title: "🌟 MARVEL Fandom",
        description: "Exclusive Marvel updates, leaks & news.",
        keywords: "marvel avengers fandom",
        openUrl: "https://t.me/MTLinksShareBot?start=LTEwMDIxMjMyOTc1NTI=",
        copyUrl: "https://t.me/MTLinksShareBot?start=LTEwMDIxMjMyOTc1NTI=",
        icon: "https://envs.sh/GON.jpg" // Add icon path here if available
    },
    {
        type: "channel",
        title: "🦇 DC Legends",
        description: "DC Universe news, movies, and series.",
        keywords: "dc dccomics justiceleague batman superman",
        openUrl: "https://t.me/MTLinksShareBot?start=LTEwMDIwMzI5NTg0NjQ=",
        copyUrl: "https://t.me/MTLinksShareBot?start=LTEwMDIwMzI5NTg0NjQ=",
        icon: "https://envs.sh/GOv.jpg" // Add icon path here if available
    },
    {
        type: "channel",
        title: "🎌 Anime Galaxy",
        description: "Anime uploads, subs & updates.",
        keywords: "anime manga otaku subbed dubbed",
        openUrl: "https://t.me/MTLinksShareBot?start=req_LTEwMDIyMDg0NDQ3OTY",
        copyUrl: "https://t.me/MTLinksShareBot?start=req_LTEwMDIyMDg0NDQ3OTY",
        icon: "" // Add icon path here if available
    },
    {
        type: "group",
        title: "🕵️‍♂️ Request Anything",
        description: "Community request & search group.",
        keywords: "request search group",
        openUrl: "https://t.me/RequestXUltron",
        copyUrl: "https://t.me/RequestXUltron",
        icon: "https://envs.sh/GOs.jpg" // Add icon path here if available
    },
    {
        type: "updates",
        title: "🌐 Stream Everything",
        description: "One-stop portal for streaming all content.",
        keywords: "stream online watch website",
        openUrl: "https://movietimestv.vercel.app",
        copyUrl: "https://movietimestv.vercel.app",
        icon: "https://envs.sh/GOa.jpg" // Add icon path here if available
    },
    {
        type: "bot",
        title: "🤖 𝖴𝖫𝖳𝖱𝖮𝖭-𝖷 @MovieTimesUBot",
        description: "MovieTimes bot for content requests and links.",
        keywords: "bot ultron movietimes request",
        openUrl: "https://t.me/MovieTimesUBot",
        copyUrl: "@MovieTimesUBot",
        icon: "" // Add icon path here if available
    },
    {
        type: "bot",
        title: "🌸 Hinata @HinataMoviesBot",
        description: "Hinata bot for anime and movie requests.",
        keywords: "bot hinata anime movies request",
        openUrl: "https://t.me/HinataMoviesBot",
        copyUrl: "@HinataMoviesBot",
        icon: "" // Add icon path here if available
    },
    {
        type: "channel",
        title: "🎬 MCU Movies",
        description: "Marvel Cinematic Universe movies collection.",
        keywords: "mcu marvel movies avengers",
        openUrl: "https://t.me/+hMuIZCedI71mZDNl",
        copyUrl: "https://t.me/+hMuIZCedI71mZDNl",
        icon: "https://envs.sh/GOf.jpg" // Add icon path here if available
    },
    {
        type: "channel",
        title: "📺 Marvel Series",
        description: "All Marvel TV series collection.",
        keywords: "marvel series tv shows",
        openUrl: "https://t.me/+sj7b0L01IOMwZDg1",
        copyUrl: "https://t.me/+sj7b0L01IOMwZDg1",
        icon: "" // Add icon path here if available
    },
    {
        type: "channel",
        title: "🎞️ Other Marvel Content",
        description: "Marvel animated movies, one shots, and more.",
        keywords: "marvel animated oneshots",
        openUrl: "https://t.me/+nNwm3YUyf0A1ZjBl",
        copyUrl: "https://t.me/+nNwm3YUyf0A1ZjBl",
        icon: "" // Add icon path here if available
    },
    {
        type: "channel",
        title: "🎨 Marvel Animation",
        description: "Marvel animated series and movies.",
        keywords: "marvel animation animated",
        openUrl: "https://t.me/+rieIlRwy66hlY2U1",
        copyUrl: "https://t.me/+rieIlRwy66hlY2U1",
        icon: "https://envs.sh/GOH.jpg" // Add icon path here if available
    },
    {
        type: "channel",
        title: "🕸️ Spider-Verse Collection",
        description: "All Spider-Man movies and related content.",
        keywords: "spiderman spiderverse marvel",
        openUrl: "https://t.me/+IBCw7sL3ljA5ZDU1",
        copyUrl: "https://t.me/+IBCw7sL3ljA5ZDU1",
        icon: "" // Add icon path here if available
    },
    {
        type: "channel",
        title: "🧬 X-Men Movies Collection",
        description: "Complete X-Men movie series.",
        keywords: "xmen marvel movies",
        openUrl: "https://t.me/+VDJMGQ0M0bpmZDk1",
        copyUrl: "https://t.me/+VDJMGQ0M0bpmZDk1",
        icon: "" // Add icon path here if available
    },
    {
        type: "channel",
        title: "🔥 Fantastic Four Collection",
        description: "Fantastic Four movies and content.",
        keywords: "fantasticfour marvel movies",
        openUrl: "https://t.me/+mPOFBa5eoFFjOTBl",
        copyUrl: "https://t.me/+mPOFBa5eoFFjOTBl",
        icon: "" // Add icon path here if available
    },
    {
        type: "channel",
        title: "📚 Marvel & DC Comics",
        description: "Comics from both Marvel and DC universes.",
        keywords: "marvel dc comics",
        openUrl: "https://t.me/+6xG5cPqHUGUzMmFl",
        copyUrl: "https://t.me/+6xG5cPqHUGUzMmFl",
        icon: "https://envs.sh/GO9.jpg" // Add icon path here if available
    },
    {
        type: "channel",
        title: "🎬 DC Movies",
        description: "DC Universe movies collection.",
        keywords: "dc movies batman superman",
        openUrl: "https://t.me/+Fy9iWFAw0qI1OGNl",
        copyUrl: "https://t.me/+Fy9iWFAw0qI1OGNl",
        icon: "" // Add icon path here if available
    },
    {
        type: "channel",
        title: "📺 DC Series",
        description: "DC TV series collection.",
        keywords: "dc series tv shows",
        openUrl: "https://t.me/+JCcrIaYUWl5mOGVl",
        copyUrl: "https://t.me/+JCcrIaYUWl5mOGVl",
        icon: "" // Add icon path here if available
    },
    {
        type: "channel",
        title: "🎨 DC Animation",
        description: "DC animated movies and series.",
        keywords: "dc animation animated",
        openUrl: "https://t.me/+wK460I4ePzM1OWQ1",
        copyUrl: "https://t.me/+wK460I4ePzM1OWQ1",
        icon: "https://envs.sh/GOg.jpg" // Add icon path here if available
    },
    {
        type: "channel",
        title: "🎥 Marvel 4K Collection",
        description: "Marvel movies in 4K quality.",
        keywords: "marvel 4k ultrahd movies",
        openUrl: "https://t.me/MTLinksShareBot?start=LTEwMDI0MzUwMTM5MTk=",
        copyUrl: "https://t.me/MTLinksShareBot?start=LTEwMDI0MzUwMTM5MTk=",
        icon: "https://envs.sh/GOO.jpg" // Add icon path here if available
    }
];