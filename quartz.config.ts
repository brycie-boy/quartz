import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🔮 The Cosmos",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "thecosmos.brycemcalister",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        @import url(https://db.onlinewebfonts.com/c/40ebc217b413175c58d9c6d5044f5815?family=Pixel+Operator);
        @import url(https://db.onlinewebfonts.com/c/f779d20a1d7221b6f507caef1e471628?family=Pixel+Operator+Bold);
        @import url(https://db.onlinewebfonts.com/c/689d07b9988e93f5344ffd6748697270?family=Pixel+Operator+Mono);
        header: "Pixel Operator Bold",
        body: "Pixel Operator",
        code: "Pixel Operator Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#B1B1B1",
          gray: "#CECECE",
          darkgray: "#000000",
          dark: "#000000",
          secondary: "#DAA3FF",
          tertiary: "#824EA4",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#434343",
          gray: "#5E5E5E",
          darkgray: "#faf8f8",
          dark: "#faf8f8",
          secondary: "#DAA3FF",
          tertiary: "#824EA4",
          highlight: "rgba(143, 159, 169, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
