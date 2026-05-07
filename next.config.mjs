export default (phase) => {
  const isDevServer = phase === 'phase-development-server';

  return {
    // Automatically Copying Traced Files
    output: 'standalone',
    reactStrictMode: true,
    images: {
      deviceSizes: [520, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      dangerouslyAllowSVG: true,
      remotePatterns: [
        { protocol: 'https', hostname: '**' },
        { protocol: 'http', hostname: '**' },
        { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      ],
    },
    async headers() {
      if (isDevServer) {
        return [];
      }

      return [
        {
          source:
            '/:all*.(jpg|jpeg|gif|png|ico|cur|gz|svg|svgz|mp4|ogg|ogv|webm|htc|glb|gltf|woff)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  };
};
