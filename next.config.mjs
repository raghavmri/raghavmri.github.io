/** @type {import('next').NextConfig} */

// For GitHub Pages project site, use the repository name as basePath
// If deploying to username.github.io, leave basePath empty
const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGitHubPages ? '' : ''; // Update this with your repo name if not deploying to username.github.io
// Example: const basePath = '/my-portfolio';

const nextConfig = {
	output: 'export',
	basePath: basePath,
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
};

export default nextConfig;
