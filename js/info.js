const reg = [
    {
        name: "Amazon",
        img: "https://m.media-amazon.com/images/G/03/social_share/amazon_logo._CB633266471_.png",
        url: "https://www.amazon.com/",
        status: 1
    },
    {
        name: "Binance",
        img: "https://public.bnbstatic.com/image/cms/blog/20220215/76c148c3-c3d8-4123-82b1-bee748c38869.png",
        url: "https://www.binance.com/",
        status: 1
    },
    {
        name: "Wise",
        img: "https://static.tildacdn.com/tild3161-3531-4365-b739-356235336631/wise-cover.svg",
        url: "https://wise.com/",
        status: 1
    },
    {
        name: "Revolut",
        img: "https://pbs.twimg.com/media/E4aNjtuWYAAsagb.jpg",
        url: "https://www.revolut.com/",
        status: 1
    },
    {
        name: "eBay",
        img: "https://ir.ebaystatic.com/cr/v/c1/ebay-logo-1-1200x1200-margin.png",
        url: "https://www.ebay.com/",
        status: 0
    },
    {
        name: "Coinlist",
        img: "https://cdn.coingape.com/wp-content/uploads/2022/11/24180028/coinlist-ex.jpg",
        url: "https://coinlist.co/",
        status: 1
    },
    {
        name: "Huobi",
        img: "https://www.huobi.com/learn/wp-content/uploads/2021/08/Bank-_Huobi-logo-square-.png",
        url: "https://www.huobi.com/",
        status: 0
    },
    {
        name: "Payoneer",
        img: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_fc2cb7d206430783d4bf8830a3118e6d/payoneer.png",
        url: "https://register.payoneer.com/",
        status: 0
    },
    {
        name: "Tokensoft",
        img: "https://miro.medium.com/max/1400/0*-WV0H42-N1czroHa",
        url: "https://www.tokensoft.io/",
        status: 0
    },
    {
        name: "Cex",
        img: "https://s3-eu-west-1.amazonaws.com/tpd/logos/5270ce330000640005772671/0x0.png",
        url: "https://cex.io/",
        status: 0
    },
    {
        name: "Bybit",
        img: "https://is3-ssl.mzstatic.com/image/thumb/Purple122/v4/86/76/e1/8676e1a1-89a0-bc77-6285-d3c962f26b48/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
        url: "https://www.bybit.com/",
        status: 1
    },
    {
        name: "Btse",
        img: "https://www.marketplacefairness.org/wp-content/uploads/2022/07/BTSE-Review.png",
        url: "https://www.btse.com/",
        status: 0
    },
    {
        name: "Crypto.com",
        img: "https://pbs.twimg.com/profile_images/1480727876517253123/lt1gKNp9_400x400.png",
        url: "https://crypto.com/",
        status: 0
    },
    {
        name: "Gate.io",
        img: "https://lever-client-logos.s3.us-west-2.amazonaws.com/15adce4a-6c21-4f20-9a12-212d637f2292-1653651001306.png",
        url: "https://www.gate.io/",
        status: 0
    },
    {
        name: "Hetzner",
        img: "https://pbs.twimg.com/profile_images/1168782761102139392/AP3o9UsW_400x400.jpg",
        url: "https://www.hetzner.com/",
        status: 0
    },
    {
        name: "Kucoin",
        img: "https://avatars.githubusercontent.com/u/6188901?s=280&v=4",
        url: "https://www.kucoin.com/",
        status: 0
    },
    {
        name: "Mercuryo",
        img: "https://pbs.twimg.com/profile_images/1537363985032327169/986nj_7u_400x400.jpg",
        url: "https://mercuryo.io/",
        status: 0
    },
    {
        name: "Neteller",
        img: "https://casinohipster.com/de/wp-content/uploads/sites/3/2022/05/neteller-online-casinos.jpg",
        url: "https://www.neteller.com/",
        status: 0
    },
    {
        name: "Nexo",
        img: "https://mms.businesswire.com/media/20210610006037/de/884456/23/Nexo-Logo-Vertical-Regular.jpg",
        url: "https://www.nexo.io/",
        status: 0
    },
    {
        name: "Skrill",
        img: "https://play-lh.googleusercontent.com/I8AQgdC1R5Gm_MKz4RskAsAroFY43cLQMe6IEiV0NkqATjaz863rfkjjx2IpeayGhW8",
        url: "https://www.skrill.com/",
        status: 0
    },
    {
        name: "Whitebit",
        img: "https://assets.coingecko.com/coins/images/27045/large/wbt_token.png",
        url: "https://whitebit.com/",
        status: 1
    },
    {
        name: "Transak",
        img: "https://media-exp1.licdn.com/dms/image/C4D0BAQFN4g7gDi9W8w/company-logo_200_200/0/1654262141674?e=2147483647&v=beta&t=zzknL-gowG6ixNN34tD-7C4PMXB7FTwlviNpgB6n9U0",
        url: "https://transak.com/",
        status: 0
    },
    {
        name: "Gemini",
        img: "https://pbs.twimg.com/card_img/1603534017231736832/kKMDrUIM?format=jpg&name=medium",
        url: "https://www.gemini.com/",
        status: 0
    },
    {
        name: "Localbitcoins",
        img: "https://play-lh.googleusercontent.com/sRWNV14Ue-hXbyFxHSIDOqbr4O6-t3OuTFVtGRUBPUUh8O-B66j6wOA4mwjlRTei7ec",
        url: "https://localbitcoins.com/",
        status: 0
    },
    {
        name: "Coinmama",
        img: "https://play-lh.googleusercontent.com/BpkRwKFcJRccOuXd-XMh7XCQtNhK-kYouGtKkS_lLsmvSIZkjZYxbDIAoviTfZF1jWM",
        url: "https://www.coinmama.com/",
        status: 0
    },
    {
        name: "Coinbase",
        img: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
        url: "https://www.coinbase.com/",
        status: 0
    },
    {
        name: "Paxful",
        img: "https://play-lh.googleusercontent.com/KnMs4kM-x2RcYE6sb0sJJdoa10JU4ey3HOJnfC9m_Dzi4kZl9fOlK3HfuqKoQpeD7g",
        url: "https://paxful.com/",
        status: 0
    },
    {
        name: "Kraken",
        img: "https://cryptomeister.com/wp-content/uploads/kraken-logo.png",
        url: "https://www.kraken.com/",
        status: 1
    },
    {
        name: "Okx",
        img: "https://avatars.githubusercontent.com/u/58539418?s=280&v=4",
        url: "https://www.okx.com/",
        status: 0
    },
    {
        name: "Okcoin",
        img: "https://pbs.twimg.com/profile_images/1410623088027267074/uHn6VlAi_400x400.jpg",
        url: "https://www.okcoin.com/",
        status: 0
    },
]



export default { reg }