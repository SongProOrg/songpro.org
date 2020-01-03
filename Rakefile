require 'bundler/audit/task'
Bundler::Audit::Task.new

desc 'Run the Middleman Server'
task :server do
  system 'bundle exec middleman server'
end

desc 'Build the static site'
task :build do
  system 'bundle exec middleman build'
end

