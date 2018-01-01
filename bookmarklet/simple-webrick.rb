# encoding: utf-8
# https://www.fedux.org/articles/2015/04/11/setup-a-proxy-with-ruby.html
# http://www.independent-software.com/creating-a-forward-proxy-with-webrick/
#
require 'webrick'
require 'webrick/httpproxy'
require 'logger'

#logger = Logger.new($stderr)
#logger.level = Logger::DEBUG

def handle_resquest(req, res)
  #puts "[REQUEST] " + req.request_line
  #res.header.delete('Content-Security-Policy')
end

handler = proc do |req, res|
  puts res['content-type']
  puts res.body.class
  if res['content-type'] == 'text/html'
    res.body = res.body.upcase
  end
  #res.body << "\nCHANGED\n"
end

#proxy = WEBrick::HTTPProxyServer.new Port: 3128
#proxy = WEBrick::HTTPProxyServer.new Port: 3128, Logger: logger
proxy = WEBrick::HTTPProxyServer.new(
  :Port => 3128,
  #:Logger => logger,
  :ProxyContentHandler => handler)

trap 'INT' do proxy.shutdown end
trap 'TERM' do proxy.shutdown end

proxy.start
