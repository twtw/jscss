# encoding: utf-8
# change http body and header
require 'evil-proxy'

proxy = EvilProxy::MITMProxyServer.new Port: 3128

proxy.before_response do |req, res|
  #puts res.inspect
  body = res.body << "\nCHANGED\n"
  res.header['content-length'] = body.length
  res.body = body
end

proxy.start
