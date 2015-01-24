require 'eventmachine'
require 'em-websocket'

EventMachine.run {
  masters = []
  clients = []
  EventMachine::WebSocket.start(:host => "0.0.0.0", :port => 8082) do |ws|
    ws.onopen {
      puts "WebSocket connection open"
    }

    ws.onmessage { |msg|
      puts msg
      if(msg == 'master')
        masters << ws
        time = Time.now.to_f * 1000
        ws.send('serverTime=' + time.to_s[0, 13])
      elsif(msg == 'client')
        clients << ws
        masters.each{|conn| conn.send("client connections=#{clients.size}")}
        time = Time.now.to_f * 1000
        ws.send('serverTime=' + time.to_s[0, 13])
      elsif(msg == 'GO')
        time = (Time.now.to_f * 1000) + 1000
        sendMsg = 'GO=' + time.to_s[0, 13]
        masters.each{|conn| conn.send(sendMsg)}
        clients.each{|conn| conn.send(sendMsg)}
      elsif(msg == 'PAUSE')
        time = (Time.now.to_f * 1000) + 1000
        sendMsg = 'PAUSE=' + time.to_s[0, 13]
        masters.each{|conn| conn.send(sendMsg)}
        clients.each{|conn| conn.send(sendMsg)}
      else
        clients.each{|conn| conn.send(msg)}
      end
    }

    ws.onclose {
      puts "WebSocket connection closed"
      masters.delete(ws)
      clients.delete(ws)
      masters.each{|conn| conn.send("client connections=#{clients.size}")}
    }
  end
}