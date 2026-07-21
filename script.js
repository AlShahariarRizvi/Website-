/**
 * Condomart - Application Frontend Execution Layer
 * Architectural Target: Vanilla Modular Reactive Functions
 */

// Production Data Layer Modeling Mimicking Arogga Structure Data Outlines
// Production Data Layer - generated from real product images (Desktop/Products)
const DEFAULT_CATALOGUE = [
    {
        id: "p1",
        title: "Carex Extra Time Powershot Dotted Condom 10PackMalaysia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Carex-Extra-Time-Powershot-Dotted-Condom---10PackMalaysia.avif",
        stock: 0
    },
    {
        id: "p2",
        title: "Carex Extra Time Powershot Dotted Condom 3PackMade In Malaysia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Carex-Extra-Time-Powershot-Dotted-Condom---3PackMade-In-Malaysia.avif",
        stock: 0
    },
    {
        id: "p3",
        title: "Carex Extra Time Rough Tough Condom 10 Pcs Pack Made in Malaysia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Carex-Extra-Time-Rough-Tough-Condom-10-Pcs-Pack-Made-in-Malaysia.avif",
        stock: 0
    },
    {
        id: "p4",
        title: "Carex Extra Time Super Thin Contoured Perfumed Condom 10Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Carex-Extra-Time-Super-Thin-Contoured-Perfumed-Condom---10Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p5",
        title: "Celebrity Small Fit 45mm Ultra Thin Plain Silver Condom 10Pcs Pack Made in Malaysia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Celebrity-Small-Fit-45mm-Ultra-Thin-Plain-Silver-Condom---10Pcs-Pack-Made-in-Malaysia.avif",
        stock: 0
    },
    {
        id: "p6",
        title: "Celebrity Small Gold Condom 45mm Dotted Condom 10Pcs Pack From Malaysia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Celebrity-Small-Gold-Condom-45mm-Dotted-Condom---10Pcs-Pack-From-Malaysia.avif",
        stock: 0
    },
    {
        id: "p7",
        title: "Coral 3 in 1 Lubricated Natural Latex Condom Single Pack 3x1 3pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral-3-in-1-Lubricated-Natural-Latex-Condom-Single-Pack-3x1-3pcs.avif",
        stock: 0
    },
    {
        id: "p8",
        title: "Coral Banana Flavor Extra Performance Condom Single Large Pack 10x110pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral---Banana-Flavor-Extra-Performance-Condom---Single-Large-Pack---10x110pcs.avif",
        stock: 0
    },
    {
        id: "p9",
        title: "Coral Condom 3 Fruit Flavours 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral-Condom-3-Fruit-Flavours-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p10",
        title: "Coral Condom 3 Ice Cream Flavours 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral-Condom-3-Ice-Cream-Flavours-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p11",
        title: "Coral Condom Banana Flavours 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral-Condom-Banana-Flavours-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p12",
        title: "Coral Condom Chocolate Flavour 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral-Condom-Chocolate-Flavour-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p13",
        title: "Coral Condom Extra Time Combo 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral-Condom-Extra-Time-Combo-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p14",
        title: "Coral Condom Long Lasting Extra Time 3pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral-Condom-Long-Lasting-Extra-Time-3pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p15",
        title: "Coral Condom Mint Flavour 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral-Condom-Mint-Flavour-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p16",
        title: "Coral Condom Orange Flavours",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral-Condom-Orange-Flavours.avif",
        stock: 0
    },
    {
        id: "p17",
        title: "Coral Condom Strawberry Flavoured 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral-Condom-Strawberry-Flavoured-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p18",
        title: "Coral Condom Supper Dotted 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral-Condom-Supper-Dotted-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p19",
        title: "Coral Condom Vanila Flavour 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral-Condom-Vanila-Flavour-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p20",
        title: "Coral Long Lasting Lubricated Natural Latex Condom Single Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral---Long-Lasting-Lubricated-Natural-Latex-Condom---Single-Pack.jpeg",
        stock: 0
    },
    {
        id: "p21",
        title: "Coral Orange Natural Latex Condom for Men single pack 3x1 3 pieces",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral---Orange-Natural-Latex-Condom-for-Men-single-pack-3x1---3-pieces.avif",
        stock: 0
    },
    {
        id: "p22",
        title: "Coral Super Ultra Thin Lubricated Natural Latex Condom Single Pack 3x1 3pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Coral-Super-Ultra-Thin-Lubricated-Natural-Latex-Condom-Single-Pack-3x1-3pcs.avif",
        stock: 0
    },
    {
        id: "p23",
        title: "Durex 5 in 1 Pleasure Mix Assorted Condoms 20Pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-5-in-1-Pleasure-Mix-Assorted-Condoms-20Pcs.avif",
        stock: 0
    },
    {
        id: "p24",
        title: "Durex Air Ultra Thin Condom 10Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Air-Ultra-Thin-Condom---10Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p25",
        title: "Durex Air Ultra Thin Condom 3Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Air-Ultra-Thin-Condom---3Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p26",
        title: "Durex Close Fit Invisible 49mm Small Better Fit Ultra Thin Condom 10Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Close-Fit-Invisible-49mm-Small-Better-Fit-Ultra-Thin-Condom---10Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p27",
        title: "Durex Extra Dots Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Dots-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p28",
        title: "Durex Extra Dots Condoms for Men 10Pcs Pack India",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Dots-Condoms-for-Men---10Pcs-Pack-India.avif",
        stock: 0
    },
    {
        id: "p29",
        title: "Durex Extra Ribbed Condom 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Ribbed-Condom-10s-Pack.jpeg",
        stock: 0
    },
    {
        id: "p30",
        title: "Durex Extra Ribbed Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Ribbed-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p31",
        title: "Durex Extra Thin Bubblegum 12 Pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Thin-Bubblegum-12-Pcs.avif",
        stock: 0
    },
    {
        id: "p32",
        title: "Durex Extra Thin Bubblegum Flavoured Condom 3Pcs PackIndia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Thin-Bubblegum-Flavoured-Condom---3Pcs-PackIndia.avif",
        stock: 0
    },
    {
        id: "p33",
        title: "Durex Extra Thin Condom 10Pcs PackIndia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Thin-Condom--10Pcs-PackIndia.avif",
        stock: 0
    },
    {
        id: "p34",
        title: "Durex Extra Thin Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Thin-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p35",
        title: "Durex Extra Thin Intense Chocolate Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Thin-Intense-Chocolate-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p36",
        title: "Durex Extra Thin Intense Chocolate Flavoured Condom 12Pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Thin-Intense-Chocolate-Flavoured-Condom-12Pcs.avif",
        stock: 0
    },
    {
        id: "p37",
        title: "Durex Extra Thin Wild Strawberry Flavored Condom 3Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Thin-Wild-Strawberry-Flavored-Condom---3Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p38",
        title: "Durex Extra Thin Wild Strawberry Flavoured Condom 12Pcs PackIndia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Thin-Wild-Strawberry-Flavoured-Condom---12Pcs-PackIndia.avif",
        stock: 0
    },
    {
        id: "p39",
        title: "Durex Extra Time Condom 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Time-Condom-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p40",
        title: "Durex Extra Time Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Time-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p41",
        title: "Durex Extra Time Ultra Thin 3 Pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Extra-Time-Ultra-Thin---3-Pcs.avif",
        stock: 0
    },
    {
        id: "p42",
        title: "Durex Flavours Condom Strawberry Banana Orange Apple Combo 12s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Flavours-Condom-Strawberry-Banana-Orange-Apple-Combo---12s-Pack.avif",
        stock: 0
    },
    {
        id: "p43",
        title: "Durex Intense Condoms 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Intense-Condoms-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p44",
        title: "Durex Invisible 003 Micro Thin Condom for Maximum Sensations 3s pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Invisible-003-Micro-Thin-Condom-for-Maximum-Sensations-3s-pack.jpeg",
        stock: 0
    },
    {
        id: "p45",
        title: "Durex Invisible Condom 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Invisible-Condom-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p46",
        title: "Durex Invisible Super Ultra Thin Condom 3Pcs Pack Thailand",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Invisible-Super-Ultra-Thin-Condom---3Pcs-Pack-Thailand.jpeg",
        stock: 0
    },
    {
        id: "p47",
        title: "Durex Mutual Climax Dotted and Ribbed Condom 10Pcs Pack India",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Mutual-Climax-Dotted-and-Ribbed-Condom-10Pcs-Pack-India.avif",
        stock: 0
    },
    {
        id: "p48",
        title: "Durex Mutual Climax Dotted and Ribbed Condom 3Pcs PackIndia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Mutual-Climax-Dotted-and-Ribbed-Condom---3Pcs-PackIndia.avif",
        stock: 0
    },
    {
        id: "p49",
        title: "Durex Original Extra Safe Regular Fit Condom 12Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Original-Extra-Safe-Regular-Fit-Condom---12Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p50",
        title: "Durex Pleasure Me Regular Fit Dotted Ribbed Condom 12 pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Pleasure-Me-Regular-Fit-Dotted-Ribbed-Condom---12-pcs.avif",
        stock: 0
    },
    {
        id: "p51",
        title: "Durex Real Feel Skin on Skin Feeling Condom 3Pcs PackThailand",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Real-Feel-Skin-on-Skin-Feeling-Condom---3Pcs-PackThailand.avif",
        stock: 0
    },
    {
        id: "p52",
        title: "Durex Thin Feel Close Fit Condom 12 pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Thin-Feel-Close-Fit-Condom-12-pcs.avif",
        stock: 0
    },
    {
        id: "p53",
        title: "Durex Together Easy On Condoms 12 Pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Durex-Together-Easy-On-Condoms-12-Pcs.avif",
        stock: 0
    },
    {
        id: "p54",
        title: "EXS Comfy Fit Nano Thin Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/EXS-Comfy-Fit-Nano-Thin-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p55",
        title: "EXS Comfy Fit Ribbed Dotted 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/EXS-Comfy-Fit-Ribbed-Dotted-3s-Pack.jpeg",
        stock: 0
    },
    {
        id: "p56",
        title: "EXS Delay Extra Time 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/EXS-Delay-Extra-Time-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p57",
        title: "EXS Glow In The Dark Condom Combo 3pcs pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/EXS---Glow-In-The-Dark-Condom---Combo-3pcs-pack.avif",
        stock: 0
    },
    {
        id: "p58",
        title: "EXS Glow In The Dark Condom Single Pack 3x13pcs Made in UK",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/EXS---Glow-In-The-Dark-Condom---Single-Pack---3x13pcs-Made-in-UK.avif",
        stock: 0
    },
    {
        id: "p59",
        title: "Fire Xotica Long Lasting Condom 4pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Fire-Xotica-Long-Lasting-Condom-4pcs.jpeg",
        stock: 0
    },
    {
        id: "p60",
        title: "Hero Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Hero-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p61",
        title: "Kamasutra Banana Flavoured Dotted Condoms 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Kamasutra-Banana-Flavoured-Dotted-Condoms-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p62",
        title: "Kamasutra Butterscotch Flavoured Dotted Condoms 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Kamasutra-Butterscotch-Flavoured-Dotted-Condoms-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p63",
        title: "KamaSutra Chocolate Flavoured Dotted Condom 3s Pack Made in India",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/KamaSutra-Chocolate-Flavoured-Dotted-Condom-3s-Pack-Made-in-India.avif",
        stock: 0
    },
    {
        id: "p64",
        title: "KamaSutra Dotted Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/KamaSutra-Dotted-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p65",
        title: "Kamasutra Extra Dots Extra Pleasure Condom 10Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Kamasutra-Extra-Dots-Extra-Pleasure-Condom---10Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p66",
        title: "KamaSutra Longlast Climax Dotted Extended Pleasure Condoms 12s Pack India",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/KamaSutra-Longlast-Climax-Dotted-Extended-Pleasure-Condoms---12s-Pack-India.avif",
        stock: 0
    },
    {
        id: "p67",
        title: "KamaSutra LongLast Extended Pleasure Climax Delay Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/KamaSutra-LongLast-Extended-Pleasure-Climax-Delay-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p68",
        title: "Kamasutra Longlast Sync Condom 12pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Kamasutra-Longlast-Sync-Condom-12pcs.avif",
        stock: 0
    },
    {
        id: "p69",
        title: "Kamasutra Mango Flavoured 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Kamasutra-Mango-Flavoured-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p70",
        title: "KamaSutra Skin FEEL Thinnest Condoms 10pcs PackIndia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/KamaSutra-Skin-FEEL-Thinnest-Condoms---10pcs-PackIndia.jpeg",
        stock: 0
    },
    {
        id: "p71",
        title: "KamaSutra Strawberry Flavoured Condom 3s Pack Made in India",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/KamaSutra-Strawberry-Flavoured-Condom-3s-Pack-Made-in-India.avif",
        stock: 0
    },
    {
        id: "p72",
        title: "KamaSutra SuperThin Condom 3s Pack Made in India",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/KamaSutra-SuperThin-Condom-3s-Pack-Made-in-India.avif",
        stock: 0
    },
    {
        id: "p73",
        title: "Kamasutra Vanilla Flavoured Dotted Condoms 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Kamasutra-Vanilla-Flavoured-Dotted-Condoms-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p74",
        title: "Lust Dotted Condom 10 pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Lust-Dotted-Condom-10-pcs.avif",
        stock: 0
    },
    {
        id: "p75",
        title: "Manforce 342 Dots Xotic Condom Chocolate Flavour 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-342-Dots-Xotic-Condom-Chocolate-Flavour-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p76",
        title: "Manforce Chocolate Flavoured 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Chocolate-Flavoured-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p77",
        title: "Manforce Cocktail with Dotted Rings Hazelnut Chocolate Condom 10Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Cocktail-with-Dotted-Rings-Hazelnut-Chocolate-Condom---10Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p78",
        title: "Manforce Cocktail with Dotted Rings Hazelnut Chocolate Condom 3Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Cocktail-with-Dotted-Rings-Hazelnut-Chocolate-Condom---3Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p79",
        title: "Manforce Condom 1500 Dots Litchi Flavor Condom 10pcs Condom Made in India",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Condom-1500-Dots-Litchi-Flavor-Condom-10pcs-Condom-Made-in-India.avif",
        stock: 0
    },
    {
        id: "p80",
        title: "Manforce Condom 1500 Dots Litchi Flavor Condom 3pcs Condom Made in India",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Condom-1500-Dots-Litchi-Flavor-Condom-3pcs-Condom-Made-in-India.jpeg",
        stock: 0
    },
    {
        id: "p81",
        title: "Manforce Epic Desire 005 Super Thin Premium Silk Chocolate Flavour Condom 10Pcs PackIndia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Epic-Desire-005-Super-Thin-Premium-Silk-Chocolate-Flavour-Condom---10Pcs-PackIndia.avif",
        stock: 0
    },
    {
        id: "p82",
        title: "Manforce Epic Just skin Condom 10pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Epic-Just-skin-Condom-10pcs.avif",
        stock: 0
    },
    {
        id: "p83",
        title: "Manforce Epic ThinX 003 mm Thickness Ultra Thin Condom 3Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Epic-ThinX-003-mm-Thickness-Ultra-Thin-Condom---3Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p84",
        title: "Manforce Game Exotic 3in1 Ribbed Dotted Condoms 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Game-Exotic-3in1-Ribbed-Dotted-Condoms-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p85",
        title: "Manforce Game Exotic Flavored Condom 3pcs Pack 3in1 Ribbed Dotted Anatomically Shaped Condom",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Game-Exotic-Flavored-Condom-3pcs-Pack-3in1-Ribbed-Dotted-Anatomically-Shaped-Condom.jpeg",
        stock: 0
    },
    {
        id: "p86",
        title: "Manforce King Dots Premium Condom 10pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-King-Dots-Premium-Condom-10pcs.avif",
        stock: 0
    },
    {
        id: "p87",
        title: "Manforce King Thin Premium Condoms 10pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-King-Thin-Premium-Condoms-10pcs.avif",
        stock: 0
    },
    {
        id: "p88",
        title: "Manforce Litchi 1740 Extra Dotted Condom 10Pcs New Pack India",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Litchi-1740-Extra-Dotted-Condom---10Pcs-New-Pack-India.avif",
        stock: 0
    },
    {
        id: "p89",
        title: "Manforce Overtime Orange Long Lasting Pleasure Condom 10Pcs PackIndia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Overtime-Orange-Long-Lasting-Pleasure-Condom---10Pcs-PackIndia.avif",
        stock: 0
    },
    {
        id: "p90",
        title: "Manforce Overtime Pineapple 3in1 Ribbed Contour Dotted Condom 10Pcs PackIndia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Overtime-Pineapple-3in1-Ribbed-Contour-Dotted-Condom---10Pcs-PackIndia.avif",
        stock: 0
    },
    {
        id: "p91",
        title: "Manforce Overtime Pineapple 3in1 Ribbed Contour Dotted Condom 3Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Overtime-Pineapple-3in1-Ribbed-Contour-Dotted-Condom---3Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p92",
        title: "Manforce Plain Premium Condom 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Plain-Premium-Condom-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p93",
        title: "Manforce Plain Premium Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Plain-Premium-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p94",
        title: "Manforce Sunny Edition Ribbed Dotted Condoms 10pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Sunny-Edition-Ribbed-Dotted-Condoms---10pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p95",
        title: "Manforce Sunny Edition Ribbed Dotted Condoms 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Sunny-Edition-Ribbed-Dotted-Condoms-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p96",
        title: "Manforce Wild Strawberry Flavor Condoms 10pcs Pack 3in1 Dotted Ribbed Contoured Condoms Made in India",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Wild-Strawberry-Flavor-Condoms-10pcs-Pack-3in1-Dotted-Ribbed-Contoured-Condoms-Made-in-India.avif",
        stock: 0
    },
    {
        id: "p97",
        title: "Manforce Xotic Chocolate Flavored 342 Dotted Condom 3pcs PackIndia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Xotic-Chocolate-Flavored-342-Dotted-Condom---3pcs-PackIndia.avif",
        stock: 0
    },
    {
        id: "p98",
        title: "Manforce Xotic Strawberry 1500 Dotted Condom 3Pcs PackIndia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Xotic-Strawberry-1500-Dotted-Condom---3Pcs-PackIndia.avif",
        stock: 0
    },
    {
        id: "p99",
        title: "Manforce Xotic Strawberry Flavoured 1500 Dots Condom 10Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Xotic-Strawberry-Flavoured-1500-Dots-Condom---10Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p100",
        title: "Manforce Xtra Pleasure Condom 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Manforce-Xtra-Pleasure-Condom-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p101",
        title: "Mingliu Close Fit Condom 10pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Mingliu-Close-Fit-Condom-10pcs.avif",
        stock: 0
    },
    {
        id: "p102",
        title: "Moods All Night Condom 3 pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-All-Night-Condom-3-pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p103",
        title: "Moods Bubblegum Flavored Condom 3 pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Bubblegum-Flavored-Condom-3-pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p104",
        title: "Moods Choco Condom 3pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Choco-Condom-3pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p105",
        title: "Moods Choco Flavored Condom 12 pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Choco-Flavored-Condom-12-pcs-Pack.jpeg",
        stock: 0
    },
    {
        id: "p106",
        title: "Moods Dotted Condom Blue 10 pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Dotted-Condom-Blue-10-pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p107",
        title: "Moods Dotted Condom Blue 3 pcs pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Dotted-Condom-Blue-3-pcs-pack.avif",
        stock: 0
    },
    {
        id: "p108",
        title: "Moods Dotted Green Condom Green 10 pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Dotted-Green-Condom-Green-10-pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p109",
        title: "Moods Gold Electrify Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Gold-Electrify-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p110",
        title: "Moods Grapes Flavored Condom 12 pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Grapes-Flavored-Condom-12-pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p111",
        title: "Moods Grapes Flavored Condom 3pcs pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Grapes-Flavored-Condom-3pcs-pack.avif",
        stock: 0
    },
    {
        id: "p112",
        title: "Moods Hotspots Scented with 1500 Dots Condom 3s PackIndia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Hotspots-Scented-with-1500-Dots-Condom-3s-PackIndia.avif",
        stock: 0
    },
    {
        id: "p113",
        title: "Moods Joyride Condom 3pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Joyride-Condom-3pcs.avif",
        stock: 0
    },
    {
        id: "p114",
        title: "Moods Panache Dotted Condom 12 pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Panache-Dotted-Condom-12-pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p115",
        title: "Moods Panache Dotted Condom 3 pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Panache-Dotted-Condom-3-pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p116",
        title: "Moods Panache Ultra Thin Condom 3 pcs pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Panache-Ultra-Thin-Condom-3-pcs-pack.avif",
        stock: 0
    },
    {
        id: "p117",
        title: "Moods Ribbed Condom 12 pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Ribbed-Condom-12-pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p118",
        title: "Moods Ribbed Condom 3 pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Ribbed-Condom-3-pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p119",
        title: "Moods Silver 1500 Dots Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Silver-1500-Dots-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p120",
        title: "Moods Silver 1500 Dots Condoms 12s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Silver-1500-Dots-Condoms-12s-Pack.jpeg",
        stock: 0
    },
    {
        id: "p121",
        title: "Moods Strawberry Flavored Condom 12 pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Strawberry-Flavored-Condom-12-pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p122",
        title: "Moods Strawberry Flavored Condom 3 pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Moods-Strawberry-Flavored-Condom-3-pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p123",
        title: "Olo Ha For Man Zero Ultra Thin Condom Blue 10Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Olo-Ha-For-Man-Zero-Ultra-Thin-Condom-Blue---10Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p124",
        title: "Oxballs Big Dick Deep Red Reusable Condom 36g Length 152mm Wide 42mm",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Oxballs-Big-Dick-Deep-Red-Reusable-Condom-36g-Length--152mm-Wide--42mm.avif",
        stock: 0
    },
    {
        id: "p125",
        title: "Panther Banana Dotted Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Panther-Banana-Dotted-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p126",
        title: "Panther Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Panther-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p127",
        title: "Sensation Super Dotted Scented Strawberry Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Sensation-Super-Dotted-Scented-Strawberry-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p128",
        title: "Skins Dots Ribs Premium Condom 4s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skins-Dots-Ribs-Premium-Condom-4s-Pack.avif",
        stock: 0
    },
    {
        id: "p129",
        title: "Skins Ultra Thin Premium Condom 4s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skins-Ultra-Thin-Premium-Condom-4s-Pack.jpeg",
        stock: 0
    },
    {
        id: "p130",
        title: "Skore Banana 1500 Dots Condoms 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Banana-1500-Dots-Condoms-10s-Pack.jpeg",
        stock: 0
    },
    {
        id: "p131",
        title: "Skore Banana 1500Dots Condoms 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Banana-1500Dots-Condoms-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p132",
        title: "Skore Blues Vanilla Scented Coloured Condoms 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Blues-Vanilla-Scented-Coloured-Condoms-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p133",
        title: "Skore Cherry Flavored 1500 Dotted with Extra Lubrication Condom 10pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Cherry-Flavored-1500-Dotted-with-Extra-Lubrication-Condom---10pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p134",
        title: "Skore Cherry Flavored 1500 Dotted with Extra Lubrication Condom 3Pcs Pack NewIndia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Cherry-Flavored-1500-Dotted-with-Extra-Lubrication-Condom---3Pcs-Pack-NewIndia.avif",
        stock: 0
    },
    {
        id: "p135",
        title: "Skore Chocolate Flavoured 1500 Dots Condoms 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Chocolate-Flavoured-1500-Dots-Condoms-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p136",
        title: "Skore Chocolate Flavoured 1500 Dots Condoms 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Chocolate-Flavoured-1500-Dots-Condoms-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p137",
        title: "Skore Cool With Mint Sensation Dotted Ribbed Condom 3Pcs PackIndia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Cool-With-Mint-Sensation-Dotted-Ribbed-Condom---3Pcs-PackIndia.avif",
        stock: 0
    },
    {
        id: "p138",
        title: "Skore Dessert Premium Flavoured Condoms 1 pack 10pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Dessert-Premium-Flavoured-Condoms-1-pack-10pcs.jpeg",
        stock: 0
    },
    {
        id: "p139",
        title: "Skore Dots 1500 Dotted Vanilla Flavoured Condom 10pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Dots-1500-Dotted-Vanilla-Flavoured-Condom---10pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p140",
        title: "Skore Nothing Climax Delays Long Lasting Condom 3Pcs PackIndia",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Nothing-Climax-Delays-Long-Lasting-Condom---3Pcs-PackIndia.jpeg",
        stock: 0
    },
    {
        id: "p141",
        title: "Skore Nothing Thinnest Chocolate Flavoured Condoms 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Nothing-Thinnest-Chocolate-Flavoured-Condoms-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p142",
        title: "Skore Nothing Thinnest Climax Delay Flavoured Condoms 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Nothing-Thinnest-Climax-Delay-Flavoured-Condoms-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p143",
        title: "Skore Not Out Climax Delay Dotted Condoms 10pcs Pack Made in India",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Not-Out-Climax-Delay-Dotted-Condoms-10pcs-Pack-Made-in-India.avif",
        stock: 0
    },
    {
        id: "p144",
        title: "Skore Orange 1500 Dots Condoms 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Orange-1500-Dots-Condoms-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p145",
        title: "Skore Orange 1500Dots Condoms 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Orange-1500Dots-Condoms-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p146",
        title: "Skore Pina Colada Condom 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Pina-Colada-Condom-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p147",
        title: "Skore Shade Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Shade-Condom-3s-Pack.jpeg",
        stock: 0
    },
    {
        id: "p148",
        title: "Skore Strawberry 1500 Dotted with Extra Lubrication Condom 10Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Strawberry-1500-Dotted-with-Extra-Lubrication-Condom---10Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p149",
        title: "Skore Strawberry 1500 Dotted with Extra Lubrication Condom 3Pcs Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Strawberry-1500-Dotted-with-Extra-Lubrication-Condom---3Pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p150",
        title: "Skore Timeless Climax Delay Dotted Ribbed Condom 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Timeless-Climax-Delay-Dotted-Ribbed-Condom---10s-Pack.avif",
        stock: 0
    },
    {
        id: "p151",
        title: "Skore Timeless Climax Delay Dotted Ribbed Condom 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Timeless-Climax-Delay-Dotted-Ribbed-Condom---10s-Pack.png",
        stock: 0
    },
    {
        id: "p152",
        title: "Skore Warm Condom 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-Warm-Condom-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p153",
        title: "Skore ZigZag Dotted Ribbed Condoms 10s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Skore-ZigZag-Dotted-Ribbed-Condoms-10s-Pack.avif",
        stock: 0
    },
    {
        id: "p154",
        title: "Tiger Anatomic Rose Flavor Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Tiger-Anatomic-Rose-Flavor-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p155",
        title: "Tiger Gold Banana Flavor Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Tiger-Gold-Banana-Flavor-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p156",
        title: "Tiger Plain Strawberry Flavored Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Tiger-Plain-Strawberry-Flavored-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p157",
        title: "Tiger Ribbed Strawberry Flavor Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Tiger-Ribbed-Strawberry-Flavor-Condom-3s-Pack.jpeg",
        stock: 0
    },
    {
        id: "p158",
        title: "Tiger Super Dotted Chocolate Flavored Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Tiger-Super-Dotted-Chocolate-Flavored-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p159",
        title: "Tiger Super Dotted Orange Flavored Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Tiger-Super-Dotted-Orange-Flavored-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p160",
        title: "Tiger Super Dotted Rose Flavored Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Tiger-Super-Dotted-Rose-Flavored-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p161",
        title: "Tiger Ultra Thin Rose Flavored Condom 3s pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Tiger-Ultra-Thin-Rose-Flavored-Condom-3s-pack.avif",
        stock: 0
    },
    {
        id: "p162",
        title: "Xtreme Ultra Thin Premium Condom 3s Pack",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Xtreme-Ultra-Thin-Premium-Condom-3s-Pack.avif",
        stock: 0
    },
    {
        id: "p163",
        title: "Yommee 001 Explore Pleasure Natural Latex Rubber Condom with Hyaluronic Acid 10pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Yommee-001-Explore-Pleasure-Natural-Latex-Rubber-Condom-with-Hyaluronic-Acid-10pcs.avif",
        stock: 0
    },
    {
        id: "p164",
        title: "Yommee 001 Upgrade Pleasure Natural Latex Rubber Condom 10pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Yommee-001-Upgrade-Pleasure-Natural-Latex-Rubber-Condom-10pcs.avif",
        stock: 0
    },
    {
        id: "p165",
        title: "Yommee Tea Mold Tight Form Tight Fitting Long Lasting Condom 10pcs",
        brand: "",
        category: "condoms",
        price: 0,
        icon: "fas fa-layer-group",
        image: "images/condoms/Yommee-Tea-Mold-Tight-Form---Tight-Fitting-Long-Lasting-Condom-10pcs.avif",
        stock: 0
    },
    {
        id: "p166",
        title: "Cupid Water Based Lubricant Jelly Lube Gel 82gm",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/Cupid-Water-Based-Lubricant-Jelly-Lube-Gel---82gm.avif",
        stock: 0
    },
    {
        id: "p167",
        title: "Durex KY Personal Lubricant Gel for Comfort 50g",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/Durex-KY-Personal-Lubricant-Gel-for-Comfort-50g.avif",
        stock: 0
    },
    {
        id: "p168",
        title: "Durex Play Classic H2O Lube Smooth Glide Gel 3 Sachets",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/Durex-Play-Classic-H2O-Lube-Smooth-Glide-Gel-3-Sachets.avif",
        stock: 0
    },
    {
        id: "p169",
        title: "Durex Play Classic H2O Water Based Lubricant Lube Gel 100ml Thailand",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/Durex-Play-Classic-H2O-Water-Based-Lubricant-Lube-Gel-100ml-Thailand.avif",
        stock: 0
    },
    {
        id: "p170",
        title: "Durex Play Classic H2O Water Based Lubricant Lube Gel 50ml Thailand",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/Durex-Play-Classic-H2O-Water-Based-Lubricant-Lube-Gel--50ml-Thailand.avif",
        stock: 0
    },
    {
        id: "p171",
        title: "Durex Play Sweet Strawberry Lube 100ml",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/Durex-Play-Sweet-Strawberry-Lube-100ml.avif",
        stock: 0
    },
    {
        id: "p172",
        title: "Durex Play Sweet Strawberry Lube 50ml",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/Durex-Play-Sweet-Strawberry-Lube-50ml.avif",
        stock: 0
    },
    {
        id: "p173",
        title: "Durex Play Tingle H2O Tingling Lubricant Water Based Lube Gel 100ml",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/Durex-Play-Tingle-H2O-Tingling-Lubricant-Water-Based-Lube-Gel-100ml.avif",
        stock: 0
    },
    {
        id: "p174",
        title: "Durex Play Warming Lubricant Water based Lube Gel 100ml",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/Durex-Play-Warming-Lubricant-Water-based-Lube-Gel-100ml.avif",
        stock: 0
    },
    {
        id: "p175",
        title: "Durex Play Warming Lubricant Water based Lube Gel 50ml",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/Durex-Play-Warming-Lubricant-Water-based-Lube-Gel---50ml.avif",
        stock: 0
    },
    {
        id: "p176",
        title: "EXS Choco Lube 100ml",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/EXS-Choco-Lube-100ml.avif",
        stock: 0
    },
    {
        id: "p177",
        title: "EXS Peach Natural Flavoured 50ml",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/EXS-Peach-Natural-Flavoured-50ml.avif",
        stock: 0
    },
    {
        id: "p178",
        title: "Fun Time Cherry Flavoured Lube Safe Fun 75ml",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/Fun-Time-Cherry-Flavoured-Lube-Safe-Fun-75ml.avif",
        stock: 0
    },
    {
        id: "p179",
        title: "KA Ya Lube China 50g",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/KA-Ya-Lube-China-50g.avif",
        stock: 0
    },
    {
        id: "p180",
        title: "KY Jelly Personal Lubricant Gel 50g",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/KY-Jelly-Personal-Lubricant-Gel-50g.jpeg",
        stock: 0
    },
    {
        id: "p181",
        title: "Manforce Epic Lube Strawberry Flavored Lubricant Gel 60ml",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/lubricants/Manforce-Epic-Lube-Strawberry-Flavored-Lubricant-Gel---60ml.avif",
        stock: 0
    },
    {
        id: "p182",
        title: "Skore Blue Coloured With Vanilla Flavoured Condom 3Pcs Pack India",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/condoms/Skore-Blue-Coloured-With-Vanilla-Flavoured-Condom---3Pcs-Pack-India.avif",
        stock: 0
    },
    {
        id: "p183",
        title: "Skore Duo Max Condom 10 pcs Pack",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/condoms/Skore-Duo-Max-Condom-10-pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p184",
        title: "Skore Nothing Thinnest Strawberry Flavored Condoms 10pcs Pack",
        brand: "",
        category: "lubricants",
        price: 0,
        icon: "fas fa-water",
        image: "images/condoms/Skore-Nothing-Thinnest-Strawberry-Flavored-Condoms-10pcs-Pack.avif",
        stock: 0
    },
    {
        id: "p185",
        title: "i Know Pregnancy Test Kit 1pc I Urine Pregnancy Kit at Home",
        brand: "",
        category: "contraceptive",
        price: 0,
        icon: "fas fa-vial",
        image: "images/contraceptive/i-Know-Pregnancy-Test-Kit-1pc-I-Urine-Pregnancy-Kit-at-Home.avif",
        stock: 0
    },
    {
        id: "p186",
        title: "Pregnancy HCG Test Kit CupiSure",
        brand: "",
        category: "contraceptive",
        price: 0,
        icon: "fas fa-vial",
        image: "images/contraceptive/Pregnancy-HCG-Test-Kit-CupiSure.png",
        stock: 0
    },
    {
        id: "p187",
        title: "Pregnancy HCG Test Midstream Get Sure",
        brand: "",
        category: "contraceptive",
        price: 0,
        icon: "fas fa-vial",
        image: "images/contraceptive/Pregnancy-HCG-Test-Midstream-Get-Sure.avif",
        stock: 0
    },
    {
        id: "p188",
        title: "Pregnancy HCG Test Midstream Strip Get Sure",
        brand: "",
        category: "contraceptive",
        price: 0,
        icon: "fas fa-vial",
        image: "images/contraceptive/Pregnancy-HCG-Test-Midstream-Strip-Get-Sure.avif",
        stock: 0
    },
    {
        id: "p189",
        title: "Procomil Long Time Anti Premature Ejaculation Delay Spray for Men Original Germany",
        brand: "",
        category: "delay",
        price: 0,
        icon: "fas fa-spray-can",
        image: "images/delay/Procomil-Long-Time-Anti-Premature-Ejaculation-Delay-Spray-for-Men---Original-Germany.avif",
        stock: 0
    },
];


// Category Representative Image Mapping (locally stored, discreet generic imagery)
const CATEGORY_IMAGES = {
    "condoms":       "images/condoms/Durex-Extra-Thin-Condom-3s-Pack.avif",
    "lubricants":    "images/lubricants/KY-Jelly-Personal-Lubricant-Gel-50g.jpeg",
    "contraceptive": "images/contraceptive/i-Know-Pregnancy-Test-Kit-1pc-I-Urine-Pregnancy-Kit-at-Home.avif",
    "delay":         "images/delay/Procomil-Long-Time-Anti-Premature-Ejaculation-Delay-Spray-for-Men---Original-Germany.avif",
    "pills":         "images/pill.svg"
};

function getProductImage(product) {
    if (product.image) return product.image;
    return CATEGORY_IMAGES[product.category] || "images/condom-plain.svg";
}

// Product persistence (admin can add/edit/delete; falls back to defaults)
const PRODUCTS_STORAGE_KEY = "condomart_products";
const PRODUCTS_VERSION_KEY = "condomart_products_version";
const PRODUCTS_VERSION = "3"; // bump when default catalogue / images change
const VALID_CATEGORIES = ["condoms", "lubricants", "contraceptive", "delay", "pills"];

// Combo offer persistence
const COMBO_STORAGE_KEY = "condomart_combo";
const DEFAULT_COMBOS = [
    {
        title: "Durex Flavour Combo 12s + Extra Thin 3s",
        image: "images/condoms/Durex-Flavours-Condom-Strawberry-Banana-Orange-Apple-Combo---12s-Pack.avif",
        originalPrice: 1200,
        comboPrice: 899,
        items: ["Durex Flavours 12s", "Durex Extra Thin 3s"],
        active: true
    },
    {
        title: "Moods Mega Pack — Dotted + Ribbed + Ultra Thin",
        image: "images/condoms/Moods-Panache-Dotted-Condom-12-pcs-Pack.avif",
        originalPrice: 800,
        comboPrice: 599,
        items: ["Moods Dotted 12s", "Moods Ribbed 3s", "Moods Ultra Thin 3s"],
        active: true
    },
    {
        title: "Manforce Bestseller Combo — Chocolate + Strawberry",
        image: "images/condoms/Manforce-Chocolate-Flavoured-3s-Pack.avif",
        originalPrice: 650,
        comboPrice: 449,
        items: ["Manforce Chocolate 3s", "Manforce Wild Strawberry 10s"],
        active: true
    }
];

function loadCombos() {
    try {
        var c = JSON.parse(localStorage.getItem(COMBO_STORAGE_KEY));
        if (Array.isArray(c) && c.length) return c;
    } catch (e) {}
    return JSON.parse(JSON.stringify(DEFAULT_COMBOS));
}

function saveCombos(combos) {
    localStorage.setItem(COMBO_STORAGE_KEY, JSON.stringify(combos));
}

function loadProducts() {
    try {
        // Ignore outdated cached catalogue so catalogue/image updates are picked up
        if (localStorage.getItem(PRODUCTS_VERSION_KEY) !== PRODUCTS_VERSION) {
            localStorage.removeItem(PRODUCTS_STORAGE_KEY);
            localStorage.setItem(PRODUCTS_VERSION_KEY, PRODUCTS_VERSION);
        }
        const stored = JSON.parse(localStorage.getItem(PRODUCTS_STORAGE_KEY));
        if (Array.isArray(stored) && stored.length) {
            // Drop any products whose category is no longer valid (cleanup after category changes)
            const cleaned = stored.filter(p => VALID_CATEGORIES.includes(p.category));
            return cleaned.length ? cleaned : JSON.parse(JSON.stringify(DEFAULT_CATALOGUE));
        }
    } catch (e) {}
    return JSON.parse(JSON.stringify(DEFAULT_CATALOGUE));
}

function saveProducts(products) {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
}

// Wishlist persistence (account-scoped fallback to device)
const WISHLIST_KEY = "condomart_wishlist";

function loadWishlist() {
    try { return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; }
    catch (e) { return []; }
}
function saveWishlist(list) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
}
function isInWishlist(id) {
    return loadWishlist().includes(id);
}
function toggleWishlist(id) {
    let list = loadWishlist();
    if (list.includes(id)) list = list.filter(x => x !== id);
    else list.push(id);
    saveWishlist(list);
    return list.includes(id);
}
function renderWishlistBadge() {
    const badge = document.getElementById("wishlistBadge");
    if (!badge) return;
    const count = loadWishlist().length;
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
}

// Application Global Reactive State Layout
let PRODUCT_CATALOGUE = loadProducts();
let cartState = {
    items: {} // keyed by product id -> { product, qty }
};

// Order persistence layer for admin panel
const ORDERS_STORAGE_KEY = "condomart_orders";

function loadOrders() {
    try {
        return JSON.parse(localStorage.getItem(ORDERS_STORAGE_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function saveOrder(order) {
    const orders = loadOrders();
    orders.push(order);
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
}

// Initial DOM Execution Context Registration
document.addEventListener("DOMContentLoaded", () => {
    PRODUCT_CATALOGUE = loadProducts();
    initAppNavigation();
    initCatalogView(PRODUCT_CATALOGUE);
    initInteractiveSearch();
    initCategoryFilters();
    initCartPanel();
    initQuickView();
    initToast();
    initCheckout();
    initWishlistPanel();
    initMobileNav();
    renderCart();
    renderWishlistBadge();
    initHeroMarquee();

    var privacyBtn = document.getElementById("privacyPromiseBtn");
    var privacyModal = document.getElementById("privacyModal");
    if (privacyBtn && privacyModal) {
        privacyBtn.addEventListener("click", function(e) {
            e.preventDefault();
            privacyModal.classList.add("open");
        });
        var privacyCloseBtn = document.getElementById("privacyCloseBtn");
        if (privacyCloseBtn) privacyCloseBtn.addEventListener("click", function() { privacyModal.classList.remove("open"); });
        var privacyCloseX = privacyModal.querySelector(".modal-close");
        if (privacyCloseX) privacyCloseX.addEventListener("click", function() { privacyModal.classList.remove("open"); });
        privacyModal.addEventListener("click", function(e) {
            if (e.target === privacyModal) privacyModal.classList.remove("open");
        });
    }

    renderComboOffer();
});

function initHeroMarquee() {
    const leftTrack = document.getElementById("heroMarqueeLeft");
    const rightTrack = document.getElementById("heroMarqueeRight");
    if (!leftTrack || !rightTrack) return;
    const allImages = PRODUCT_CATALOGUE.map(p => getProductImage(p)).filter(Boolean);
    if (allImages.length === 0) return;
    function buildRow(imgs) {
        return imgs.map(src => `<img src="${src}" alt="">`).join("");
    }
    leftTrack.innerHTML  = buildRow(allImages) + buildRow(allImages);
    rightTrack.innerHTML = buildRow([...allImages].reverse()) + buildRow([...allImages].reverse());
}

var comboTimer = null;
var comboIndex = 0;

function renderComboOffer() {
    var card = document.getElementById("comboOfferCard");
    var wrapper = document.getElementById("comboSlideWrapper");
    var dotsEl = document.getElementById("comboDots");
    var addBtn = document.getElementById("comboAddBtn");
    if (!card || !wrapper) return;

    var allCombos = loadCombos();
    var combos = allCombos.filter(function(c) { return c.active; });

    if (combos.length === 0) { card.style.display = "none"; return; }
    card.style.display = "";

    wrapper.innerHTML = "";
    dotsEl.innerHTML = "";
    comboIndex = 0;

    combos.forEach(function(c, i) {
        var savings = c.originalPrice - c.comboPrice;
        var slide = document.createElement("div");
        slide.className = "combo-slide" + (i === 0 ? " active" : "");
        slide.innerHTML =
            '<img src="' + c.image + '" alt="' + c.title + '" style="width:90px;height:90px;object-fit:contain;">' +
            '<h3 class="combo-title">' + c.title + '</h3>' +
            '<div class="combo-pricing">' +
            '<span class="combo-old-price">৳ ' + c.originalPrice + '</span>' +
            '<span class="combo-new-price">৳ ' + c.comboPrice + '</span>' +
            '</div>' +
            (savings > 0 ? '<div class="combo-savings">সেভ করুন ৳ ' + savings + '</div>' : '');
        wrapper.appendChild(slide);

        var dot = document.createElement("button");
        dot.className = "combo-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", "Combo " + (i + 1));
        dot.addEventListener("click", function() { goToCombo(i); });
        dotsEl.appendChild(dot);
    });

    if (addBtn) {
        addBtn.onclick = function() {
            var c = combos[comboIndex];
            if (!c || c.comboPrice <= 0) { showToast("কম্বো প্রাইস সেট করুন"); return; }
            var comboProduct = {
                id: "combo-" + Date.now(),
                title: c.title,
                brand: "Combo",
                category: "condoms",
                price: c.comboPrice,
                image: c.image,
                stock: 999
            };
            var key = "combo-offer-" + comboIndex;
            var existing = cartState.items[key];
            if (existing) {
                existing.qty += 1;
            } else {
                cartState.items[key] = { product: comboProduct, qty: 1 };
            }
            renderCart();
            showToast("কম্বো কার্টে যোগ হয়েছে!");
            document.getElementById("cartPanel").classList.add("open");
            document.getElementById("cartOverlay").classList.add("open");
        };
    }

    if (combos.length > 1) {
        if (comboTimer) clearInterval(comboTimer);
        comboTimer = setInterval(function() { goToCombo((comboIndex + 1) % combos.length); }, 3000);
    }

    function goToCombo(idx) {
        var slides = wrapper.querySelectorAll(".combo-slide");
        var dots = dotsEl.querySelectorAll(".combo-dot");
        if (!slides.length) return;
        slides[comboIndex].classList.remove("active");
        slides[comboIndex].classList.add("exit");
        dots[comboIndex].classList.remove("active");
        setTimeout(function() { slides[comboIndex].classList.remove("exit"); }, 400);
        comboIndex = idx;
        slides[comboIndex].classList.add("active");
        dots[comboIndex].classList.add("active");
    }
}

/**
 * Navigation Structural Interaction Hooks
 */
function initAppNavigation() {
    const header = document.getElementById("main-header");
    const mobileToggle = document.getElementById("mobileMenuToggle");
    const mainNav = document.getElementById("mainNav");

    // Sticky Scroll Observer Interaction Logic
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Mobile Hamburger Dropdown Action Drawer Interface Menu Hook
    mobileToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        mobileToggle.setAttribute("aria-expanded", isOpen);
        
        // Dynamically shift icons for UX feedback
        const icon = mobileToggle.querySelector("i");
        if(isOpen) {
            icon.className = "fas fa-times";
        } else {
            icon.className = "fas fa-bars";
        }
    });
}

/**
 * Dynamic View Rendering Engine Layer for Products Matrix Layout
 */
function initCatalogView(products) {
    const targetGrid = document.getElementById("productsGrid");
    const counterLabel = document.getElementById("resultsCount");
    
    // Safety verification check bounds validation handling
    if (!targetGrid) return;

    // Reset loop views content text HTML node string buffer
    targetGrid.innerHTML = "";

    if (products.length === 0) {
        targetGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--color-text-muted);">
                <i class="fas fa-search-minus" style="font-size: 3rem; margin-bottom: 10px;"></i>
                <p>কোনো ম্যাচিং প্রোডাক্ট পাওয়া যায়নি। আবার সার্চ করে দেখুন।</p>
            </div>
        `;
        if (counterLabel) counterLabel.textContent = "0 product পাওয়া যায়নি";
        return;
    }

    if (counterLabel) counterLabel.textContent = `${products.length} টি প্রোডাক্ট পাওয়া গেছে`;

    // Process collection structural mapping array loops
    products.forEach(product => {
        const card = document.createElement("article");
        card.className = "product-card";
        card.setAttribute("data-id", product.id);

        const stockBadge = getStockBadge(product.stock);
        const inWishlist = isInWishlist(product.id);

        card.innerHTML = `
            ${stockBadge}
            <button class="wishlist-btn ${inWishlist ? 'active' : ''}" data-wish="${product.id}" aria-label="Save to wishlist">
                <i class="${inWishlist ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <div class="product-image-container" aria-hidden="true">
                <img src="${getProductImage(product)}" alt="${product.title}" loading="lazy">
            </div>
            <span class="product-brand">${product.brand}</span>
            <h3 class="product-title">${product.title}</h3>
            <div class="product-meta-row">
                <span class="product-price">à§³ ${product.price}</span>
                <span class="discreet-badge" title="Guaranteed Secure Outer Packaging">
                    <i class="fas fa-user-secret"></i> Private Box
                </span>
            </div>
            <div class="product-card-actions">
                <button class="btn-add-cart" data-add="${product.id}" ${product.stock <= 0 ? 'disabled' : ''}>
                    ${product.stock <= 0 ? 'স্টক নেই' : 'কার্টে যোগ করুন'}
                </button>
                <button class="btn-quickview" data-view="${product.id}" aria-label="Quick view">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        `;
        targetGrid.appendChild(card);
    });
}

function getStockBadge(stock) {
    if (stock <= 0) return `<span class="stock-badge out">স্টক নেই</span>`;
    if (stock <= 10) return `<span class="stock-badge low">Only ${stock} left</span>`;
    return `<span class="stock-badge in">In Stock</span>`;
}

/**
 * Active Client-side Simulated Search Architecture Engine
 */
const BN_SEARCH_MAP = {
    "কনডম": ["condoms", "condom"],
    "কনডমের": ["condoms", "condom"],
    "লুব্রিকেন্ট": ["lubricants", "lube", "lubricant", "jelly", "gel"],
    "জেল": ["lubricants", "lube", "lubricant", "jelly", "gel"],
    "গর্ভনিরোধক": ["contraceptive", "pregnancy", "test"],
    "টেস্ট কিট": ["contraceptive", "pregnancy", "test", "kit"],
    "ডিলে স্প্রে": ["delay", "spray"],
    "ডিলে": ["delay", "extra time", "long lasting", "longlast"],
    "পিলস": ["pills", "pill"],
    "থিন": ["thin", "ultra thin", "extra thin", "invisible"],
    "পাতলা": ["thin", "ultra thin", "extra thin", "invisible"],
    "সুপার থিন": ["super thin", "ultra thin", "thin"],
    "ডটেড": ["dotted", "dots"],
    "রিবড": ["ribbed", "rib"],
    "ফ্লেভার": ["flavour", "flavored", "flavoured", "flavor"],
    "স্ট্রবেরি": ["strawberry"],
    "চকলেট": ["chocolate", "choco"],
    "বানানা": ["banana"],
    "ভ্যানিলা": ["vanilla"],
    "পুদিনা": ["mint"],
    "কম্বো": ["combo", "assorted", "mix", "3in1"],
    "প্রিমিয়াম": ["premium"],
    "বেশি সময়": ["extra time", "long lasting", "longlast", "delay"],
    "লং লাস্টিং": ["long lasting", "longlast", "extra time"],
    "এক্সট্রা টাইম": ["extra time", "long lasting"],
    "সুপার ডটেড": ["super dotted", "dots", "dotted"],
    "গ্লো": ["glow", "dark"],
    "ইনভিজিবল": ["invisible", "ultra thin"],
    "রিয়াল ফিল": ["real feel", "skin on skin"],
    "দেরেক্স": ["durex"],
    "ডুরেক্স": ["durex"],
    "স্কোর": ["skore"],
    "করাল": ["coral"],
    "ক্যারেক্স": ["carex"],
    "ম্যানফোর্স": ["manforce"],
    "কামাসুত্র": ["kamasutra"],
    "মুডস": ["moods"],
    "টাইগার": ["tiger"],
    "এক্সএস": ["exs"],
    "এক্সট্রিম": ["xtreme"],
    "সেলিব্রিটি": ["celebrity"],
    "প্যান্থার": ["panther"],
    "হিরো": ["hero"],
    "ওলো": ["olo"],
    "ইয়মি": ["yommee"],
    "কুপিড": ["cupid"],
    "ফান টাইম": ["fun time"],
    "সেনসেশন": ["sensation"],
    "স্কিনস": ["skins"],
    "সেক্সুয়াল": ["sexual", "wellness", "health"],
    "হেলথ": ["health", "wellness"],
    "ওয়েলনেস": ["wellness", "health"],
    "প্রেগনেন্সি": ["pregnancy", "test", "hcg"],
    "স্প্রে": ["spray", "delay", "procomil"],
    "প্রোকমিল": ["procomil", "delay", "spray"],
    "প্রোডাক্ট": [],
    "প্যাক": ["pack", "pcs", "s pack", "pcs pack"],
    "পিস": ["pcs", "pack"],
    "সিঙ্গেল": ["single", "3x1"],
    "টেস্ট": ["test", "kit", "pregnancy"]
};

function expandSearchQuery(query) {
    const terms = [query];
    Object.keys(BN_SEARCH_MAP).forEach(bn => {
        if (query.includes(bn)) {
            BN_SEARCH_MAP[bn].forEach(en => terms.push(en));
        }
    });
    return terms;
}

function performSearch(query) {
    var q = (query || "").toLowerCase().trim();
    if (!q) {
        resetNavActiveState();
        initCatalogView(PRODUCT_CATALOGUE);
        return;
    }

    var extraTerms = [];
    Object.keys(BN_SEARCH_MAP).forEach(function(bn) {
        if (q.indexOf(bn) !== -1) {
            extraTerms = extraTerms.concat(BN_SEARCH_MAP[bn]);
        }
    });

    var filtered = PRODUCT_CATALOGUE.filter(function(product) {
        var t = (product.title || "").toLowerCase();
        var b = (product.brand || "").toLowerCase();
        var c = (product.category || "").toLowerCase();
        if (t.indexOf(q) !== -1 || b.indexOf(q) !== -1 || c.indexOf(q) !== -1) return true;
        for (var i = 0; i < extraTerms.length; i++) {
            var et = extraTerms[i].toLowerCase();
            if (et && (t.indexOf(et) !== -1 || b.indexOf(et) !== -1 || c.indexOf(et) !== -1)) return true;
        }
        return false;
    });

    resetNavActiveState();
    initCatalogView(filtered);
    document.getElementById("products-showcase").scrollIntoView({ behavior: "smooth" });
}

function initInteractiveSearch() {
    const input = document.getElementById("searchInput");
    const form = document.getElementById("searchForm");
    if (!input) return;

    input.addEventListener("input", function() {
        performSearch(this.value);
    });

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            performSearch(input.value);
            input.blur();
        });
    }
}

/**
 * Taxonomy Component Filter Interactions Configuration Hooks Loop
 */
function initCategoryFilters() {
    const links = document.querySelectorAll(".nav-item");
    const structuralCards = document.querySelectorAll(".category-card");

    // Unified dispatch listener router routine processing unit
    const handleFilterSelection = (category) => {
        if (!category) return;

        // Reset query strings field metrics safely
        const input = document.getElementById("searchInput");
        if(input) input.value = "";

        if (category === "all") {
            initCatalogView(PRODUCT_CATALOGUE);
        } else {
            const collection = PRODUCT_CATALOGUE.filter(p => p.category === category);
            initCatalogView(collection);
        }
    };

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            
            handleFilterSelection(link.getAttribute("data-category"));
            
            // Auto close mobile layout drawer on item chosen interaction selection loops
            document.getElementById("mainNav").classList.remove("open");
            const toggleIcon = document.getElementById("mobileMenuToggle").querySelector("i");
            if(toggleIcon) toggleIcon.className = "fas fa-bars";

            // Seamlessly scroll user viewport focus onto the filtered products
            document.getElementById("products-showcase").scrollIntoView({ behavior: 'smooth' });
        });
    });

    structuralCards.forEach(card => {
        card.addEventListener("click", () => {
            const activeCategory = card.getAttribute("data-category");
            
            // Synchronize Secondary Bar Active State indicator links UI highlights
            links.forEach(l => {
                if(l.getAttribute("data-category") === activeCategory) {
                    l.classList.add("active");
                } else {
                    l.classList.remove("active");
                }
            });

            handleFilterSelection(activeCategory);
            
            // Seamlessly scroll user viewport focus coordinates directly onto viewport elements
            document.getElementById("products-showcase").scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function resetNavActiveState() {
    const links = document.querySelectorAll(".nav-item");
    links.forEach(l => {
        if(l.getAttribute("data-category") === "all") {
            l.classList.add("active");
        } else {
            l.classList.remove("active");
        }
    });
}

/**
 * Shopping Cart Panel Interaction Layer
 */
function initCartPanel() {
    const cartButton = document.getElementById("cartButton");
    const panel = document.getElementById("cartPanel");
    const overlay = document.getElementById("cartOverlay");
    const closeBtn = document.getElementById("cartClose");
    const checkoutBtn = document.getElementById("cartCheckout");

    const openPanel = () => {
        panel.classList.add("open");
        overlay.classList.add("open");
        panel.setAttribute("aria-hidden", "false");
    };
    const closePanel = () => {
        panel.classList.remove("open");
        overlay.classList.remove("open");
        panel.setAttribute("aria-hidden", "true");
    };

    cartButton.addEventListener("click", openPanel);
    overlay.addEventListener("click", closePanel);
    closeBtn.addEventListener("click", closePanel);

    // Delegate add-to-cart clicks on dynamically rendered product cards
    document.getElementById("productsGrid").addEventListener("click", (e) => {
        const addBtn = e.target.closest("[data-add]");
        if (addBtn) {
            if (addBtn.disabled) return;
            executeCartIncrement(addBtn.getAttribute("data-add"));
            openPanel();
            showToast("কার্টে যোগ হয়েছে");
            return;
        }
        const wishBtn = e.target.closest("[data-wish]");
        if (wishBtn) {
            const id = wishBtn.getAttribute("data-wish");
            const active = toggleWishlist(id);
            wishBtn.classList.toggle("active", active);
            wishBtn.querySelector("i").className = active ? "fas fa-heart" : "far fa-heart";
            renderWishlistBadge();
            showToast(active ? "উইশলিস্টে সেভ হয়েছে" : "উইশলিস্ট থেকে সরানো হয়েছে");
            return;
        }
        const viewBtn = e.target.closest("[data-view]");
        if (viewBtn) {
            openQuickView(viewBtn.getAttribute("data-view"));
        }
    });

    checkoutBtn.addEventListener("click", () => {
        const ids = Object.keys(cartState.items);
        if (ids.length === 0) return;
        openCheckout();
    });
}

/**
 * Render Cart Panel Contents & Totals
 */
function renderCart() {
    const body = document.getElementById("cartPanelBody");
    const badge = document.getElementById("cartBadge");
    const link = document.getElementById("cartButton");
    const totalEl = document.getElementById("cartTotal");

    const ids = Object.keys(cartState.items);
    const totalQty = ids.reduce((sum, id) => sum + cartState.items[id].qty, 0);
    const totalPrice = ids.reduce((sum, id) => sum + cartState.items[id].qty * cartState.items[id].product.price, 0);

    if (badge) badge.textContent = totalQty;
    if (link) link.setAttribute("aria-label", `Shopping Basket, ${totalQty} items`);
    if (totalEl) totalEl.textContent = "à§³ " + totalPrice;

    // Micro visual feedback on badge
    if (badge) {
        badge.style.transform = "scale(1.3)";
        setTimeout(() => { badge.style.transform = "scale(1)"; }, 300);
    }

    if (ids.length === 0) {
        body.innerHTML = `
            <div class="cart-empty">
                <i class="fas fa-shopping-basket"></i>
                <p>আপনার বাস্কেট খালি।</p>
            </div>
        `;
        return;
    }

    body.innerHTML = ids.map(id => {
        const entry = cartState.items[id];
        const p = entry.product;
        return `
            <div class="cart-item" data-item="${id}">
                <div class="cart-item-icon"><img src="${getProductImage(p)}" alt="${p.title}" loading="lazy"></div>
                <div class="cart-item-info">
                    <span class="cart-item-brand">${p.brand}</span>
                    <h4 class="cart-item-title">${p.title}</h4>
                    <span class="cart-item-price">à§³ ${p.price} প্রতিটি</span>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" data-dec="${id}" aria-label="Decrease quantity">âˆ’</button>
                    <span class="qty-value">${entry.qty}</span>
                    <button class="qty-btn" data-inc="${id}" aria-label="Increase quantity">+</button>
                </div>
                <div class="cart-item-subtotal">à§³ ${p.price * entry.qty}</div>
            </div>
        `;
    }).join("");

    body.querySelectorAll("[data-inc]").forEach(btn => {
        btn.addEventListener("click", () => executeCartIncrement(btn.getAttribute("data-inc")));
    });
    body.querySelectorAll("[data-dec]").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-dec");
            if (cartState.items[id]) {
                cartState.items[id].qty -= 1;
                if (cartState.items[id].qty <= 0) delete cartState.items[id];
                renderCart();
            }
        });
    });
}

function initWishlistPanel() {
    const btn = document.getElementById("wishlistButton");
    const panel = document.getElementById("wishlistPanel");
    const overlay = document.getElementById("wishlistOverlay");
    const closeBtn = document.getElementById("wishlistClose");
    if (!btn || !panel) return;

    const open = () => { renderWishlistPanel(); panel.classList.add("open"); overlay.classList.add("open"); panel.setAttribute("aria-hidden","false"); };
    const close = () => { panel.classList.remove("open"); overlay.classList.remove("open"); panel.setAttribute("aria-hidden","true"); };

    btn.addEventListener("click", open);
    overlay.addEventListener("click", close);
    closeBtn.addEventListener("click", close);

    document.getElementById("wishlistPanelBody").addEventListener("click", (e) => {
        const add = e.target.closest("[data-wadd]");
        if (add) {
            executeCartIncrement(add.getAttribute("data-wadd"));
            const cp = document.getElementById("cartPanel");
            cp.classList.add("open"); document.getElementById("cartOverlay").classList.add("open");
            showToast("কার্টে যোগ হয়েছে");
            open();
            return;
        }
        const rem = e.target.closest("[data-wrem]");
        if (rem) {
            const id = rem.getAttribute("data-wrem");
            toggleWishlist(id);
            renderWishlistPanel(); renderWishlistBadge();
            // refresh product cards wishlist state
            document.querySelectorAll(`[data-wish="${id}"]`).forEach(b => {
                b.classList.remove("active"); b.querySelector("i").className = "far fa-heart";
            });
        }
    });
}

function renderWishlistPanel() {
    const body = document.getElementById("wishlistPanelBody");
    if (!body) return;
    const list = loadWishlist();
    if (list.length === 0) {
        body.innerHTML = `                <div class="cart-empty"><i class="fas fa-heart"></i><p>আপনার উইশলিস্ট খালি।</p></div>`;
        return;
    }
    body.innerHTML = list.map(id => {
        const p = PRODUCT_CATALOGUE.find(x => x.id === id);
        if (!p) return "";
        return `
            <div class="cart-item" data-item="${id}">
                <div class="cart-item-icon"><img src="${getProductImage(p)}" alt="${p.title}"></div>
                <div class="cart-item-info">
                    <span class="cart-item-brand">${p.brand}</span>
                    <h4 class="cart-item-title">${p.title}</h4>
                    <span class="cart-item-price">à§³ ${p.price}</span>
                </div>
                <div class="cart-item-controls" style="grid-area:controls;">
                    <button class="qty-btn" data-wadd="${id}"><i class="fas fa-cart-plus"></i></button>
                    <button class="qty-btn" data-wrem="${id}"><i class="fas fa-trash"></i></button>
                </div>
            </div>`;
    }).join("");
}

function initMobileNav() {
    const home = document.getElementById("mbnHome");
    const wish = document.getElementById("mbnWish");
    const cart = document.getElementById("mbnCart");
    const acc = document.getElementById("mbnAcc");
    if (home) home.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    if (wish) wish.addEventListener("click", () => document.getElementById("wishlistButton").click());
    if (cart) cart.addEventListener("click", () => {
        const cp = document.getElementById("cartPanel");
        cp.classList.add("open"); document.getElementById("cartOverlay").classList.add("open");
    });
    if (acc) acc.addEventListener("click", () => document.getElementById("accountButton").click());
}
// Delivery areas: Chattogram City Corporation (main town) = 50tk, other upazilas/unions = 80tk
const MAIN_TOWN_FEE = 50;
const OUTER_FEE = 80;
const DELIVERY_AREAS = [
    // --- Chattogram City Corporation (Main Town, 41 wards) ---
    { id: "ccc-kotwali", name: "Kotwali (Old Town)", fee: MAIN_TOWN_FEE },
    { id: "ccc-pahartali", name: "Pahartali", fee: MAIN_TOWN_FEE },
    { id: "ccc-chawkbazar", name: "Chawkbazar", fee: MAIN_TOWN_FEE },
    { id: "ccc-double-mooring", name: "Double Mooring", fee: MAIN_TOWN_FEE },
    { id: "ccc-port", name: "Port (Bandar)", fee: MAIN_TOWN_FEE },
    { id: "ccc-panchlaish", name: "Panchlaish", fee: MAIN_TOWN_FEE },
    { id: "ccc-khulshi", name: "Khulshi", fee: MAIN_TOWN_FEE },
    { id: "ccc-halishahar", name: "Halishahar", fee: MAIN_TOWN_FEE },
    { id: "ccc-bakolia", name: "Bakolia", fee: MAIN_TOWN_FEE },
    { id: "ccc-bayazid", name: "Bayazid Bostami", fee: MAIN_TOWN_FEE },
    { id: "ccc-chandgaon", name: "Chandgaon", fee: MAIN_TOWN_FEE },
    { id: "ccc-sitakunda", name: "Sitakunda (CCC)", fee: MAIN_TOWN_FEE },
    { id: "ccc-patenga", name: "Patenga", fee: MAIN_TOWN_FEE },
    { id: "ccc-epz", name: "EPZ / Karnaphuli", fee: MAIN_TOWN_FEE },
    { id: "ccc-agrabad", name: "Agrabad", fee: MAIN_TOWN_FEE },
    { id: "ccc-gec", name: "GEC Circle", fee: MAIN_TOWN_FEE },
    { id: "ccc-nasirabad", name: "Nasirabad", fee: MAIN_TOWN_FEE },
    { id: "ccc-lalkhanbazar", name: "Lalkhan Bazar", fee: MAIN_TOWN_FEE },
    { id: "ccc-reazuddin", name: "Reazuddin Bazar", fee: MAIN_TOWN_FEE },
    { id: "ccc-newmarket", name: "New Market / Jubilee Rd", fee: MAIN_TOWN_FEE },
    { id: "ccc-kadam-mobara", name: "Kadam Mubarak", fee: MAIN_TOWN_FEE },
    { id: "ccc-akbarshah", name: "Akbar Shah", fee: MAIN_TOWN_FEE },
    { id: "ccc-mohra", name: "Mohra", fee: MAIN_TOWN_FEE },
    { id: "ccc-oxyzen", name: "Oxygen", fee: MAIN_TOWN_FEE },
    { id: "ccc-sadarghat", name: "Sadarghat", fee: MAIN_TOWN_FEE },
    { id: "ccc-mehedibag", name: "Mehedibag", fee: MAIN_TOWN_FEE },
    { id: "ccc-collegegate", name: "College Gate", fee: MAIN_TOWN_FEE },
    { id: "ccc-kaziromi", name: "Kazi Romi Rahman Goli", fee: MAIN_TOWN_FEE },
    { id: "ccc-foyzabad", name: "Foyzabad", fee: MAIN_TOWN_FEE },
    { id: "ccc-banshbaria", name: "Banshbaria", fee: MAIN_TOWN_FEE },
    { id: "ccc-sikondar", name: "Sikondar", fee: MAIN_TOWN_FEE },
    { id: "ccc-barak", name: "Barak", fee: MAIN_TOWN_FEE },
    { id: "ccc-jaliakoli", name: "Jaliakoli", fee: MAIN_TOWN_FEE },
    { id: "ccc-saralia", name: "Saralia", fee: MAIN_TOWN_FEE },
    { id: "ccc-sonali", name: "Sonali Resort", fee: MAIN_TOWN_FEE },
    { id: "ccc-sikondarpur", name: "Sikondarpur", fee: MAIN_TOWN_FEE },
    { id: "ccc-kadamtali", name: "Kadamtali", fee: MAIN_TOWN_FEE },
    { id: "ccc-bagmoniram", name: "Bagmoniram", fee: MAIN_TOWN_FEE },
    { id: "ccc-profur", name: "Profur Ghona", fee: MAIN_TOWN_FEE },
    { id: "ccc-barkol", name: "Barkol", fee: MAIN_TOWN_FEE },
    { id: "ccc-baluchara", name: "Baluchara", fee: MAIN_TOWN_FEE },

    // --- Municipalities (Outer, 80tk) ---
    { id: "mun-raozan", name: "Raozan Municipality", fee: OUTER_FEE },
    { id: "mun-mirsharai", name: "Mirsharai Municipality", fee: OUTER_FEE },
    { id: "mun-sandwip", name: "Sandwip Municipality", fee: OUTER_FEE },
    { id: "mun-sitakunda", name: "Sitakunda Municipality", fee: OUTER_FEE },
    { id: "mun-hathazari", name: "Hathazari Municipality", fee: OUTER_FEE },
    { id: "mun-fatikchhari", name: "Fatikchhari Municipality", fee: OUTER_FEE },
    { id: "mun-banskhali", name: "Banskhali Municipality", fee: OUTER_FEE },
    { id: "mun-boalkhali", name: "Boalkhali Municipality", fee: OUTER_FEE },
    { id: "mun-patiya", name: "Patiya Municipality", fee: OUTER_FEE },
    { id: "mun-anowara", name: "Anowara Municipality", fee: OUTER_FEE },
    { id: "mun-lohagara", name: "Lohagara Municipality", fee: OUTER_FEE },
    { id: "mun-satkania", name: "Satkania Municipality", fee: OUTER_FEE },
    { id: "mun-chandanaish", name: "Chandanaish Municipality", fee: OUTER_FEE },

    // --- Upazilas / Unions (Outer, 80tk) ---
    { id: "up-raozan", name: "Raozan Upazila", fee: OUTER_FEE },
    { id: "up-mirsharai", name: "Mirsharai Upazila", fee: OUTER_FEE },
    { id: "up-sandwip", name: "Sandwip Upazila", fee: OUTER_FEE },
    { id: "up-sitakunda", name: "Sitakunda Upazila", fee: OUTER_FEE },
    { id: "up-hathazari", name: "Hathazari Upazila", fee: OUTER_FEE },
    { id: "up-fatikchhari", name: "Fatikchhari Upazila", fee: OUTER_FEE },
    { id: "up-banskhali", name: "Banskhali Upazila", fee: OUTER_FEE },
    { id: "up-boalkhali", name: "Boalkhali Upazila", fee: OUTER_FEE },
    { id: "up-patiya", name: "Patiya Upazila", fee: OUTER_FEE },
    { id: "up-anowara", name: "Anowara Upazila", fee: OUTER_FEE },
    { id: "up-lohagara", name: "Lohagara Upazila", fee: OUTER_FEE },
    { id: "up-satkania", name: "Satkania Upazila", fee: OUTER_FEE },
    { id: "up-chandanaish", name: "Chandanaish Upazila", fee: OUTER_FEE },
    { id: "up-karnafuli", name: "Karnafuli Upazila", fee: OUTER_FEE },
    { id: "union-raozan", name: "Raozan Unions", fee: OUTER_FEE },
    { id: "union-hathazari", name: "Hathazari Unions", fee: OUTER_FEE },
    { id: "union-patiya", name: "Patiya Unions", fee: OUTER_FEE },
    { id: "union-satkania", name: "Satkania Unions", fee: OUTER_FEE },
    { id: "union-anowara", name: "Anowara Unions", fee: OUTER_FEE },
    { id: "union-mirsharai", name: "Mirsharai Unions", fee: OUTER_FEE }
];
const LOCATION_KEY = "condomart_location";

function getLocation() {
    try {
        const l = JSON.parse(localStorage.getItem(LOCATION_KEY));
        if (l && l.id) return l;
    } catch (e) {}
    return { id: "ccc-gec", name: "GEC Circle", fee: MAIN_TOWN_FEE };
}
function saveLocation(loc) { localStorage.setItem(LOCATION_KEY, JSON.stringify(loc)); }

function updateLocationDisplays() {
    const cur = getLocation();
    const nameEls = document.querySelectorAll(".loc-name");
    nameEls.forEach(el => el.textContent = cur.name);
    const feeTop = document.getElementById("locFeeTop");
    if (feeTop) feeTop.textContent = "à§³" + cur.fee;
    const areaName = document.getElementById("deliveryAreaName");
    if (areaName) areaName.textContent = cur.name;
    const feeEl = document.getElementById("deliveryFee");
    if (feeEl) feeEl.textContent = "à§³" + cur.fee;
}

function initLocationMenu(cfg) {
    const btn = document.getElementById(cfg.btn);
    const menu = document.getElementById(cfg.menu);
    const list = document.getElementById(cfg.list);
    const searchInput = document.getElementById(cfg.search);
    if (!btn || !menu) return;

    const renderList = (filter = "") => {
        const cur = getLocation();
        const q = filter.trim().toLowerCase();
        const areas = DELIVERY_AREAS.filter(a => a.name.toLowerCase().includes(q));
        if (areas.length === 0) {
            list.innerHTML = `<div class="loc-empty">কোনো এলাকা পাওয়া যায়নি।</div>`;
            return;
        }
        list.innerHTML = areas.map(a =>
            `<button class="loc-option ${a.id === cur.id ? 'active' : ''}" data-loc="${a.id}">
                <span>${a.name}</span> <span class="loc-opt-fee">à§³${a.fee}</span>
            </button>`
        ).join("");
    };

    const render = () => {
        // sync this instance's button label + fee
        const cur = getLocation();
        const nameEl = btn.querySelector(".loc-name");
        const feeEl = btn.querySelector(".loc-fee");
        if (nameEl) nameEl.textContent = cur.name;
        if (feeEl) feeEl.textContent = "à§³" + cur.fee;
        if (list) renderList(searchInput ? searchInput.value : "");
    };
    render();

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("open");
        if (menu.classList.contains("open") && searchInput) setTimeout(() => searchInput.focus(), 50);
    });
    if (searchInput) {
        searchInput.addEventListener("input", (e) => renderList(e.target.value));
        searchInput.addEventListener("click", (e) => e.stopPropagation());
    }
    menu.addEventListener("click", (e) => {
        const opt = e.target.closest("[data-loc]");
        if (!opt) return;
        const area = DELIVERY_AREAS.find(a => a.id === opt.getAttribute("data-loc"));
        saveLocation(area);
        render();
        menu.classList.remove("open");
        updateLocationDisplays();
        updateCheckoutTotals();
    });
    document.addEventListener("click", () => menu.classList.remove("open"));
}

// Legacy single entry-point kept for backward compatibility
function initLocationSelector() {
    initLocationMenu({ btn: "locationBtn", menu: "locationMenu", list: "locationList", search: "locationSearch" });
}

/* ==========================================================================
   Toast Notifications
   ========================================================================== */
function initToast() {
    if (!document.getElementById("toastContainer")) {
        const el = document.createElement("div");
        el.id = "toastContainer";
        el.className = "toast-container";
        document.body.appendChild(el);
    }
}
function showToast(message) {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 2200);
}

/* ==========================================================================
   Quick View Modal
   ========================================================================== */
function initQuickView() {
    const modal = document.getElementById("quickViewModal");
    const closeBtn = document.getElementById("quickViewClose");
    if (!modal) return;
    closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });
}
function openQuickView(id) {
    const product = PRODUCT_CATALOGUE.find(p => p.id === id);
    if (!product) return;
    const modal = document.getElementById("quickViewModal");
    const desc = product.description || `${product.brand} ${product.title} — ১০০% ডিসক্রিট বক্সে ডেলিভারি হবে। অথেন্টিক প্রোডাক্ট, গোপনীয় বিলিং।`;
    modal.querySelector("#qvImage").src = getProductImage(product);
    modal.querySelector("#qvBrand").textContent = product.brand;
    modal.querySelector("#qvTitle").textContent = product.title;
    modal.querySelector("#qvPrice").textContent = "à§³ " + product.price;
    modal.querySelector("#qvDesc").textContent = desc;
    modal.querySelector("#qvStock").innerHTML = getStockBadge(product.stock);
    const addBtn = modal.querySelector("#qvAdd");
    addBtn.disabled = product.stock <= 0;
    addBtn.textContent = product.stock <= 0 ? "স্টক নেই" : "কার্টে যোগ করুন";
    addBtn.onclick = () => {
        if (product.stock <= 0) return;
        executeCartIncrement(id);
        const panel = document.getElementById("cartPanel");
        panel.classList.add("open");
        document.getElementById("cartOverlay").classList.add("open");
        panel.setAttribute("aria-hidden", "false");
        modal.classList.remove("open");
        showToast("কার্টে যোগ হয়েছে");
    };
    modal.classList.add("open");
}

/* ==========================================================================
   Checkout Flow (name / phone / address + COD)
   ========================================================================== */
function cartSubtotal() {
    const ids = Object.keys(cartState.items);
    return ids.reduce((sum, id) => sum + cartState.items[id].qty * cartState.items[id].product.price, 0);
}
function updateCheckoutTotals() {
    const sub = cartSubtotal();
    const loc = getLocation();
    const total = sub + (sub > 0 ? loc.fee : 0);
    const subEl = document.getElementById("checkoutSubtotal");
    const feeEl = document.getElementById("checkoutFee");
    const totEl = document.getElementById("checkoutTotal");
    if (subEl) subEl.textContent = "à§³ " + sub;
    if (feeEl) feeEl.textContent = "à§³ " + (sub > 0 ? loc.fee : 0);
    if (totEl) totEl.textContent = "à§³ " + total;
}
function openCheckout() {
    const modal = document.getElementById("checkoutModal");
    if (!modal) return;
    const acc = getAccount();
    if (acc) {
        const nameEl = document.getElementById("coName");
        const emailEl = document.getElementById("coEmail");
        if (nameEl && !nameEl.value) nameEl.value = acc.name;
        if (emailEl && !emailEl.value) emailEl.value = acc.email;
    }
    const loc = getLocation();
    const coArea = document.getElementById("coArea");
    if (coArea) coArea.textContent = loc.name;
    renderCheckoutItems();
    updateCheckoutTotals();
    modal.classList.add("open");
}
function renderCheckoutItems() {
    const wrap = document.getElementById("checkoutItems");
    if (!wrap) return;
    const ids = Object.keys(cartState.items);
    wrap.innerHTML = ids.map(id => {
        const e = cartState.items[id];
        return `<div class="co-item"><span>${e.product.title} Ã— ${e.qty}</span><span>à§³ ${e.product.price * e.qty}</span></div>`;
    }).join("");
}
function initCheckout() {
    const modal = document.getElementById("checkoutModal");
    const closeBtn = document.getElementById("checkoutClose");
    const form = document.getElementById("checkoutForm");
    if (!modal) return;
    closeBtn.addEventListener("click", () => modal.classList.remove("open"));
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });

    // Delivery location selector inside the checkout (order confirm time)
    initLocationMenu({ btn: "checkoutLocBtn", menu: "checkoutLocationMenu", list: "checkoutLocationList", search: "checkoutLocationSearch" });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const ids = Object.keys(cartState.items);
        if (ids.length === 0) return;

        const loc = getLocation();
        const lines = ids.map(id => {
            const entry = cartState.items[id];
            return {
                id: entry.product.id,
                title: entry.product.title,
                brand: entry.product.brand,
                price: entry.product.price,
                qty: entry.qty,
                subtotal: entry.product.price * entry.qty
            };
        });
        const subtotal = lines.reduce((sum, l) => sum + l.subtotal, 0);
        const total = subtotal + loc.fee;

        // Decrement stock
        lines.forEach(l => {
            const prod = PRODUCT_CATALOGUE.find(p => p.id === l.id);
            if (prod) prod.stock = Math.max(0, prod.stock - l.qty);
        });
        saveProducts(PRODUCT_CATALOGUE);

        const order = {
            id: "ORD-" + Date.now(),
            placedAt: new Date().toISOString(),
            customer: {
                name: document.getElementById("coName").value.trim(),
                phone: document.getElementById("coPhone").value.trim(),
                address: document.getElementById("coAddress").value.trim(),
                area: loc.name
            },
            items: lines,
            subtotal,
            deliveryFee: loc.fee,
            total: total,
            status: "Pending"
        };

        saveOrder(order);
        cartState.items = {};
        renderCart();
        document.getElementById("cartPanel").classList.remove("open");
        document.getElementById("cartOverlay").classList.remove("open");
        modal.classList.remove("open");
        form.reset();
        showToast("অর্ডার প্লেস হয়েছে! ID: " + order.id);
        alert("ধন্যবাদ! আপনার অর্ডার " + order.id + " কনফার্ম হয়েছে।");
    });
}

/**
 * Global Cart State Management Transaction Interceptor Engine
 */
window.executeCartIncrement = function(productId) {
    const product = PRODUCT_CATALOGUE.find(p => p.id === productId);
    if (!product) return;

    const current = cartState.items[productId] ? cartState.items[productId].qty : 0;
    if (product.stock <= 0) { showToast("স্টক নেই"); return; }
    if (current >= product.stock) { showToast("সর্বোচ্চ স্টক পৌঁছে গেছে"); return; }

    if (!cartState.items[productId]) {
        cartState.items[productId] = { product, qty: 0 };
    }
    cartState.items[productId].qty += 1;

    renderCart();
};

/* ==========================================================================
   Account Layer: Register / Login (local, privacy-first)
   ========================================================================== */
const ACCOUNT_STORAGE_KEY = "condomart_account";

function getAccount() {
    try { return JSON.parse(localStorage.getItem(ACCOUNT_STORAGE_KEY)); }
    catch (e) { return null; }
}

function saveAccount(account) {
    localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(account));
}

function initAccount() {
    const accountButton = document.getElementById("accountButton");
    const modal = document.getElementById("accountModal");
    const closeBtn = document.getElementById("accountModalClose");
    const form = document.getElementById("accountForm");
    const nameInput = document.getElementById("accName");
    const emailInput = document.getElementById("accEmail");
    const passInput = document.getElementById("accPass");
    const submitBtn = document.getElementById("accountSubmit");
    const toggleLink = document.getElementById("accountToggle");
    const toggleText = document.getElementById("accountToggleText");
    const accountText = document.getElementById("accountText");

    let mode = "register"; // or "login"

    const setMode = (newMode) => {
        mode = newMode;
        if (mode === "register") {
            nameInput.style.display = "block";
            nameInput.previousElementSibling.style.display = "block";
            submitBtn.textContent = "অ্যাকাউন্ট তৈরি করুন";
            toggleText.textContent = "ইতিমধ্যে অ্যাকাউন্ট আছে?";
            toggleLink.textContent = "লগইন করুন";
        } else {
            nameInput.style.display = "none";
            nameInput.previousElementSibling.style.display = "none";
            submitBtn.textContent = "লগইন করুন";
            toggleText.textContent = "নতুন কনডোমার্টে?";
            toggleLink.textContent = "অ্যাকাউন্ট তৈরি করুন";
        }
    };

    const openModal = () => {
        const acc = getAccount();
        if (acc) { // already logged in -> logout option
            if (confirm("লগইন করা আছে: " + acc.name + "। লগআউট করবেন?")) {
                localStorage.removeItem(ACCOUNT_STORAGE_KEY);
                updateAccountUI();
            }
            return;
        }
        modal.classList.add("open");
    };
    const closeModal = () => modal.classList.remove("open");

    accountButton.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    toggleLink.addEventListener("click", () => setMode(mode === "register" ? "login" : "register"));

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = emailInput.value.trim().toLowerCase();
        const pass = passInput.value;

        let accounts = {};
        try { accounts = JSON.parse(localStorage.getItem("condomart_users")) || {}; }
        catch (e) { accounts = {}; }

        if (mode === "register") {
            if (accounts[email]) {
                alert("এই ইমেইল দিয়ে ইতিমধ্যে অ্যাকাউন্ট আছে। দয়া করে লগইন করুন।");
                setMode("login");
                return;
            }
            const name = nameInput.value.trim();
            accounts[email] = { name, pass };
            localStorage.setItem("condomart_users", JSON.stringify(accounts));
            const acc = { name, email };
            saveAccount(acc);
            alert("অ্যাকাউন্ট তৈরি হয়েছে। স্বাগতম, " + name + "!");
        } else {
            const user = accounts[email];
            if (!user || user.pass !== pass) {
                alert("ভুল ইমেইল বা পাসওয়ার্ড।");
                return;
            }
            const acc = { name: user.name, email };
            saveAccount(acc);
            alert("স্বাগতম পুনরায়, " + user.name + "!");
        }

        closeModal();
        form.reset();
        updateAccountUI();
    });

    function updateAccountUI() {
        const acc = getAccount();
        if (acc) {
            accountText.textContent = acc.name.split(" ")[0];
            accountButton.setAttribute("aria-label", "Logged in as " + acc.name);
        } else {
            accountText.textContent = "অ্যাকাউন্ট";
        }
    }

    updateAccountUI();
}

// Initialise account after DOM ready
document.addEventListener("DOMContentLoaded", () => {
    initAccount();
});

// Live-refresh catalogue when admin edits products in another tab
window.addEventListener("storage", (e) => {
    if (e.key === PRODUCTS_STORAGE_KEY) {
        PRODUCT_CATALOGUE = loadProducts();
        initCatalogView(PRODUCT_CATALOGUE);
        renderCart();
    }
});




