desc 'Run the Middleman Server'
task :server do
  system 'bundle exec middleman server'
end

desc 'Build the static site'
task :build do
  system 'bundle exec middleman build'
end

desc 'Deploy site to Amazon S3'
task deploy: [:build] do
  system 'bundle exec middleman s3_sync'
end

