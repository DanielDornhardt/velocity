Package.describe({
  summary: 'Velocity, a Meteor specific test-runner'
});

Npm.depends({
  'chokidar': '0.8.2',
  'lodash': '2.4.1',
  'glob': '3.2.9',
  'rsync': '0.3.0',
  'fs.extra': '1.2.1',
  'freeport': '1.0.2'
});

Package.on_use(function (api) {

  api.use('http');
  api.use('retry');

  api.add_files('collections.js', ['client', 'server']);

  api.export('Velocity', ['client', 'server']);
  api.export('VelocityTestFiles', ['client', 'server']);
  api.export('VelocityFixtureFiles', ['client', 'server']);
  api.export('VelocityTestReports', ['client', 'server']);
  api.export('VelocityAggregateReports', ['client', 'server']);
  api.export('VelocityLogs', ['client', 'server']);

  api.add_files('main.js', 'server');
  api.add_files(['lib/FileCopier.js'], 'server');
});
