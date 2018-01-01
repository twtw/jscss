# encoding: utf-8
# remove https header
# import CA certificate (./certs/CA/cacert.pem) into browser
# https://github.com/bbtfr/evil-proxy/blob/master/lib/evil-proxy/quickcert.rb
#
require 'evil-proxy'

proxy = EvilProxy::MITMProxyServer.new Port: 3128

proxy.before_response do |req, res|
  res.header.delete('content-security-policy')
  res.header.delete('strict-transport-security')
  #puts res.header.inspect
end

proxy.start
