import Header from '../components/Header.astro';
import { Astro } from './Layout.astro';

<Fragment>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="description" content="Astro description" />
<meta name="viewport" content="width=device-width" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<meta name="generator" content={Astro.generator} />
<title>{title}</title>
</head>
<body class="bg-gray-900 min-h-screen pb-32">
<Header />
<main class="max-w-5xl px-4 m-auto">
<slot />
</main>
</body>
</html>
<style is:global>{`

	html {
		font-family: system-ui, sans-serif;
		background: #13151a;
		background-size: 224px;
		color: rgb(243, 236, 221);
		color-scheme: dark light;
	}
`}</style>

</Fragment>;
