const reg = [
    {
        name: "Amazon",
        img: "https://m.media-amazon.com/images/G/03/social_share/amazon_logo._CB633266471_.png",
        url: "https://www.amazon.com/",
        category: 1,
        status: 1
    },
    {
        name: "Binance",
        img: "https://public.bnbstatic.com/image/cms/blog/20220215/76c148c3-c3d8-4123-82b1-bee748c38869.png",
        url: "https://www.binance.com/",
        category: 2,
        status: 1
    },
    {
        name: "Wise",
        img: "https://static.tildacdn.com/tild3161-3531-4365-b739-356235336631/wise-cover.svg",
        url: "https://wise.com/",
        category: 3,
        status: 1
    },
    {
        name: "Revolut",
        img: "https://pbs.twimg.com/media/E4aNjtuWYAAsagb.jpg",
        url: "https://www.revolut.com/",
        category: 3,
        status: 1
    },
    {
        name: "eBay",
        img: "https://ir.ebaystatic.com/cr/v/c1/ebay-logo-1-1200x1200-margin.png",
        url: "https://www.ebay.com/",
        category: 1,
        status: 0
    },
    {
        name: "Coinlist",
        img: "https://cdn.coingape.com/wp-content/uploads/2022/11/24180028/coinlist-ex.jpg",
        url: "https://coinlist.co/",
        category: 2,
        status: 1
    },
    {
        name: "Huobi",
        img: "https://www.huobi.com/learn/wp-content/uploads/2021/08/Bank-_Huobi-logo-square-.png",
        url: "https://www.huobi.com/",
        category: 2,
        status: 0
    },
    {
        name: "Payoneer",
        img: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_fc2cb7d206430783d4bf8830a3118e6d/payoneer.png",
        url: "https://register.payoneer.com/",
        category: 3,
        status: 0
    },
    {
        name: "Tokensoft",
        img: "https://miro.medium.com/max/1400/0*-WV0H42-N1czroHa",
        url: "https://www.tokensoft.io/",
        category: 2,
        status: 0
    },
    {
        name: "Cex",
        img: "https://s3-eu-west-1.amazonaws.com/tpd/logos/5270ce330000640005772671/0x0.png",
        url: "https://cex.io/",
        category: 2,
        status: 0
    },
    {
        name: "Bybit",
        img: "https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/86/76/e1/8676e1a1-89a0-bc77-6285-d3c962f26b48/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
        url: "https://www.bybit.com/",
        category: 2,
        status: 1
    },
    {
        name: "Btse",
        img: "https://www.marketplacefairness.org/wp-content/uploads/2022/07/BTSE-Review.png",
        url: "https://www.btse.com/",
        category: 2,
        status: 0
    },
    {
        name: "Crypto.com",
        img: "https://pbs.twimg.com/profile_images/1480727876517253123/lt1gKNp9_400x400.png",
        url: "https://crypto.com/",
        category: 2,
        status: 0
    },
    {
        name: "Gate.io",
        img: "https://lever-client-logos.s3.us-west-2.amazonaws.com/15adce4a-6c21-4f20-9a12-212d637f2292-1653651001306.png",
        url: "https://www.gate.io/",
        category: 2,
        status: 0
    },
    {
        name: "Kucoin",
        img: "https://avatars.githubusercontent.com/u/6188901?s=280&v=4",
        url: "https://www.kucoin.com/",
        category: 2,
        status: 0
    },
    {
        name: "Mercuryo",
        img: "https://pbs.twimg.com/profile_images/1537363985032327169/986nj_7u_400x400.jpg",
        url: "https://mercuryo.io/",
        category: 2,
        status: 0
    },
    {
        name: "Neteller",
        img: "https://casinohipster.com/de/wp-content/uploads/sites/3/2022/05/neteller-online-casinos.jpg",
        url: "https://www.neteller.com/",
        category: 3,
        status: 0
    },
    {
        name: "Nexo",
        img: "https://mms.businesswire.com/media/20210610006037/de/884456/23/Nexo-Logo-Vertical-Regular.jpg",
        url: "https://www.nexo.io/",
        category: 2,
        status: 0
    },
    {
        name: "Skrill",
        img: "https://play-lh.googleusercontent.com/I8AQgdC1R5Gm_MKz4RskAsAroFY43cLQMe6IEiV0NkqATjaz863rfkjjx2IpeayGhW8",
        url: "https://www.skrill.com/",
        category: 3,
        status: 0
    },
    {
        name: "Whitebit",
        img: "https://assets.coingecko.com/coins/images/27045/large/wbt_token.png",
        url: "https://whitebit.com/",
        category: 2,
        status: 1
    },
    {
        name: "Transak",
        img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFN4g7gDi9W8w/company-logo_200_200/0/1654262141674?e=2147483647&v=beta&t=zzknL-gowG6ixNN34tD-7C4PMXB7FTwlviNpgB6n9U0",
        url: "https://transak.com/",
        category: 3,
        status: 0
    },
    {
        name: "Gemini",
        img: "https://pbs.twimg.com/card_img/1603534017231736832/kKMDrUIM?format=jpg&name=medium",
        url: "https://www.gemini.com/",
        category: 2,
        status: 0
    },
    {
        name: "Localbitcoins",
        img: "https://play-lh.googleusercontent.com/sRWNV14Ue-hXbyFxHSIDOqbr4O6-t3OuTFVtGRUBPUUh8O-B66j6wOA4mwjlRTei7ec",
        url: "https://localbitcoins.com/",
        category: 2,
        status: 0
    },
    {
        name: "Coinmama",
        img: "https://play-lh.googleusercontent.com/BpkRwKFcJRccOuXd-XMh7XCQtNhK-kYouGtKkS_lLsmvSIZkjZYxbDIAoviTfZF1jWM",
        url: "https://www.coinmama.com/",
        category: 2,
        status: 0
    },
    {
        name: "Coinbase",
        img: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
        url: "https://www.coinbase.com/",
        category: 2,
        status: 0
    },
    {
        name: "Paxful",
        img: "https://play-lh.googleusercontent.com/KnMs4kM-x2RcYE6sb0sJJdoa10JU4ey3HOJnfC9m_Dzi4kZl9fOlK3HfuqKoQpeD7g",
        url: "https://paxful.com/",
        category: 2,
        status: 0
    },
    {
        name: "Kraken",
        img: "https://cryptomeister.com/wp-content/uploads/kraken-logo.png",
        url: "https://www.kraken.com/",
        category: 2,
        status: 1
    },
    {
        name: "Okx",
        img: "https://avatars.githubusercontent.com/u/58539418?s=280&v=4",
        url: "https://www.okx.com/",
        category: 2,
        status: 0
    },
    {
        name: "Okcoin",
        img: "https://pbs.twimg.com/profile_images/1410623088027267074/uHn6VlAi_400x400.jpg",
        url: "https://www.okcoin.com/",
        category: 2,
        status: 0
    },
    {
        name: "Facebook",
        img: "https://www.facebook.com/images/fb_icon_325x325.png",
        url: "https://www.facebook.com/",
        category: 4,
        status: 1
    },
    {
        name: "Instagram",
        img: "https://pbs.twimg.com/profile_images/1526231349354303489/3Bg-2ZsT_400x400.jpg",
        url: "https://www.instagram.com/",
        category: 4,
        status: 0
    },
    {
        name: "Steam",
        img: "https://play-lh.googleusercontent.com/MfOmDw_wbHCE7D1ZKSsAbzMojq1cHsEH7CxBye2nQ0w6WeAf9NWaRIMBONgxl-eyW9PG",
        url: "https://store.steampowered.com/",
        category: 6,
        status: 0
    },
    {
        name: "TikTok",
        img: "https://static.giga.de/wp-content/uploads/2020/01/tiktok-rcm1600x1200u.png",
        url: "https://www.tiktok.com/",
        category: 5,
        status: 0
    },
    {
        name: "Twitter",
        img: "https://help.twitter.com/content/dam/help-twitter/brand/logo.png",
        url: "https://twitter.com/",
        category: 4,
        status: 0
    },
    {
        name: "Pornhub",
        img: "https://fsa.zobj.net/crop.php?r=vdLbqX6J2vYTS_ogTKy4iJRiuz5Z5WBgfUbqI9tdNBijR5J6WUF_jCeFvVnVEonkwVioXjBQ5gymrLGUFXvq31p8eMOiqOTYr2IcXpXpPrYVL_Yd-Jx5LWjCpj9MLJZz9TAIZ0jkQAM9Y_auE2USBvfF81Cq4LBUwGsE50_1LcLn3qo9g0Qc7sGLWR7D_WjHBYg99jVv8FXDFzw3",
        url: "https://rt.pornhub.com/",
        category: 5,
        status: 0
    },
    {
        name: "YouTube",
        img: "https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s900-c-k-c0x00ffffff-no-rj",
        url: "https://www.youtube.com/",
        category: 5,
        status: 0
    },
    {
        name: "Shopify",
        img: "https://cdn.shopify.com/static/share-image-common.jpg",
        url: "https://www.shopify.com/",
        category: 1,
        status: 1
    },
    {
        name: "Mobile Legends",
        img: "https://play-lh.googleusercontent.com/IhUVzRkz5MokalaeiLulcloc8rxROw0fSPRC7-Lc5zCF_wIfhbxo3qsOjKxYp524B1dY",
        url: "https://m.mobilelegends.com/",
        category: 6,
        status: 0
    },
    {
        name: "Dota 2",
        img: "https://pbs.twimg.com/profile_images/1478893871199186945/1mA6tezL_400x400.jpg",
        url: "https://www.dota2.com/",
        category: 6,
        status: 0
    },
]



export default { reg }