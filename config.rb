activate :directory_indexes

activate :external_pipeline,
  name: :webpack,
  command: build? ?
  "NODE_ENV=production ./node_modules/webpack/bin/webpack.js --bail -p" :
  "./node_modules/webpack/bin/webpack.js --watch -d --progress --color",
  source: "tmp/dist",
  latency: 1

set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, smartypants: true
