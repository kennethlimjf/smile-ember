#!/usr/bin/env ruby
puts "Starting Deployment"
`git fetch origin`
`git checkout production`
`git merge origin/master`
`git push origin production`
puts "Production branch updated."

`ember build -prod`
puts "Build complete. Deploying..."

`cp -R ./dist ./smile-ember`
`tar -zcvf smile-ember.tar.gz ./smile-ember`
`scp ./smile-ember.tar.gz smile:/home/ubuntu/smile-ember.tar.gz`
`ssh smile rm -rf /home/ubuntu/smile-ember`
`ssh smile tar -zxvf /home/ubuntu/smile-ember.tar.gz`
`ssh smile chmod -R 755 /home/ubuntu/smile-ember/assets`
`ssh smile rm -rf /home/ubuntu/smile-ember.tar.gz`
`ssh smile service nginx restart`
`rm smile-ember.tar.gz`
`rm -rf smile-ember`

puts "Deploy complete"
`git checkout master`
