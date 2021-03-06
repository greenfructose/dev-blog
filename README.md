This is a [Next.js](https://nextjs.org/) dev-blog project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and styled with [TailwindCSS](https://tailwindcss.com/). [GraphQL](https://graphql.org/) is used for models and [GraphCMS](https://graphcms.com/) is used for content management via API.

I made this following this [tutorial](https://youtu.be/HYv55DhgTuA) from [JavaScript Mastery](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A), he is a great resource for learning modern web development. After I finished the tutorial, I added more features and changed up some of the styling. Deployed on [Vercel](https://dev-blog-delta.vercel.app/).

## Getting Started

First, install TailwindCSS:

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Make sure your tailwind.config.js has the proper module.exports:

```bash
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Then start the Tailwind CLI build process
```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

You will need a GraphCMS account and a project with the below Schema:

## Models:

### Author
| Field Name | Field Type | Reference Type | Unique | Required | Multiple Values |
| --- | --- | ---| --- | --- | --- |
| Name | Single Line Text | n/a | true | true | false |
| Photo | Asset | n/a | false | false | false |
| Bio | Multi Line Text | n/a | false | false | false |
| Posts | Reference | Two-way Reference | false | false | true|

### Category

| Field Name | Field Type | Reference Type | Unique | Required | Multiple Values |
| --- | --- | ---| --- | --- | --- |
| Name | Single Line Text | n/a | true | true | false |
| Slug | Slug | n/a | true | true | false |
| Posts | Reference | Two-way Reference | false | false | true |

### Comment

| Field Name | Field Type | Reference Type | Unique | Required | Multiple Values |
| --- | --- | ---| --- | --- | --- |
| Name | Single Line Text | n/a | false | true | false|
| Email | Single Line Text | n/a | false | true | false |
| Comment | Multi Line Text | n/a | false | true | false |
| Post | Reference | Two-way Reference | false | true | false |

### Post

| Field Name | Field Type | Reference Type | Unique | Required | Multiple Values |
| --- | --- | ---| --- | --- | --- |
| Title | Single Line Text | n/a | false | true | flase |
| Slug | Slug | n/a | true | true | false |
| Excerpt | Multi Line Text | n/a | false | true | false |
| Content | Rich Text | n/a | false | true | false |
| Featured Image | Asset | n/a | false | true | false |
| Featured Post | Boolean | n/a | false | true | false |
| Author | Reference | Two-way Reference | false | true | false |
| Categories | Reference | Two-way Reference | false | true | true |
| Comments | Reference | Two-way Reference | false | false | true |

Your `.env` file should look like this and be saved in the project root:

```bash
NEXT_PUBLIC_GRAPHCMS_ENDPOINT=your_enpoint_url
GRAPHCMS_TOKEN=your_token
```
Finally, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
