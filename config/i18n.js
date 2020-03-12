// Only one item MUST have the "default: true" key

module.exports = {
  en: {
    default: true,
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `Gatsby Starter with multi-language and CMS`,
    defaultDescription: `Gatsby example site using Markdown, i18n and CMS`,
  },
  da: {
    path: `da`,
    locale: `da`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `da`,
    ogLanguage: `da_DK`,
    defaultTitle: `Gatsby Starter multilingue com CMS`,
    defaultDescription: `Exemplo de Gatsby site usando Markdown, i18n e CMS`,
  },
  es: {
    path: `es`,
    locale: `es-EN`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `es`,
    ogLanguage: `es_EN`,
    defaultTitle: `Gatsby en español`,
    defaultDescription: `Exemplo de Gatsby site usando Markdown, i18n e CMS`,
  },
}
