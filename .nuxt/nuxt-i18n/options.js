

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","messages":{"en":{"welcome":"Welcome","homepage":{"banner":{"bannerTitle":"Shortened URL,","bannerSubTitle1":"Branded","bannerSubTitle2":"&","bannerSubTitle3":"Decrypted","bannerCaption":"Say hello to branded human-readable links.","bannerLink":"watch.bitss.intro.video"},"form":{"textfieldLinkPlaceholder":"Place your target link here...","textfieldBrandPlaceholder":"What is your brand?","btnSubmit":"Create"}},"login":{"pageTitle":"Sign in to your account","form":{"namePlaceholder":"Name","emailPlaceholder":"Email","submit":"Sign in","rememberMe":"Remember me","forgotPassword":"Forgot password?"}},"register":{"pageTitle":"Create an account","form":{"namePlaceholder":"Name","emailPlaceholder":"Email","submit":"Register","termsConditions":"Agree on Terms and Conditions","forgotPassword":"Forgot password?"}}},"fr":{"welcome":"Bienvenue","homepage":{"banner":{"bannerTitle":"URL raccourcie, décryptée.","bannerSubTitle":"Dites bonjour aux liens lisibles par lhomme.","bannerLink":"https://communicate.effectively.today"}}},"zh":{"homepage":{"banner":{"bannerTitle":"URL縮短，已解密。","bannerSubTitle":"向品牌可讀鏈接打個招呼。","bannerLink":"https://communicate.effectively.today"},"form":{"textfieldLinkPlaceholder":"將您的目標鏈接放在這裡...","textfieldBrandPlaceholder":"你的品牌是什麼？","btnSubmit":"創建"}},"login":{"pageTitle":"登錄到您的帳戶","form":{"rememberMe":"記住賬號","forgotPassword":"忘記密碼?","namePlaceholder":"姓名","emailPlaceholder":"電子郵件","submit":"登錄旅館"}},"register":{"pageTitle":"創建一個帳戶","form":{"namePlaceholder":"Name","emailPlaceholder":"Email","submit":"Register","termsConditions":"Agree on Terms and Conditions","forgotPassword":"Forgot password?"}}}}},
  vueI18nLoader: false,
  locales: [{"code":"en","iso":"en-US","file":"en.js","dir":"ltr"},{"code":"zh","iso":"zh-HK","file":"../i18n/hk.js"},{"code":"fr","iso":"fr-FR","file":"fr.js"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","iso":"en-US","file":"en.js","dir":"ltr"},{"code":"zh","iso":"zh-HK","file":"../i18n/hk.js"},{"code":"fr","iso":"fr-FR","file":"fr.js"}],
  localeCodes: ["en","zh","fr"],
}
