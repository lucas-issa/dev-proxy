Package.describe({
    name:          'lucasissa:dev-proxy',
    version:       '0.0.6',
    summary:       'Proxy your REST api calls to a web server running on the same machine, but another port.',
    git:           'https://github.com/pbastowski/dev-proxy',
    documentation: 'README.md'
});

var npmDeps = {
    "http-proxy": "1.16.2",
};

Npm.depends(npmDeps);

Package.onUse(function (api) {
    api.versionsFrom('1.3');
    api.use('webapp', 'server');
    api.add_files('server/proxy.js', 'server');
    api.export(['DevProxy'], 'server');
});

