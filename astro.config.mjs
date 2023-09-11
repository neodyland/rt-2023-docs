import { defineConfig } from 'astro/config';
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.rt.rext.dev",
  integrations: [
    starlight({
      title: "RT 2023 Documents",
      social: {
        discord: "https://discord.gg/aP7SG5XaTK",
        github: 'https://github.com/aoharu-io/rt-2023-docs'
      },
      sidebar: [
        {label: "一般", items: [
          {label: "イントロダクション", link: "/docs/intro"},
          {label: "ユーザーガイド", link: "/docs/user_guide"},
          {label: "トラブルシューティング", link: "/docs/trouble_shooting"}
        ]},
        {label: "リファレンス", autogenerate: {directory: "docs/reference"}}
      ]
    })
  ]
});