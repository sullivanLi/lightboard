require 'eventmachine'
require 'em-websocket'

EventMachine.run {
  masters = []
  clients = []
  EventMachine::WebSocket.start(:host => "0.0.0.0", :port => 8080) do |ws|
    ws.onopen {
      puts "WebSocket connection open"
    }

    ws.onmessage { |msg|
      puts msg
      if(msg == 'master')
        masters << ws
      elsif(msg == 'client')
        clients << ws
        masters.each{|conn| conn.send("client connections=#{clients.size}")}
        time = Time.now.to_f * 1000
        ws.send('serverTime=' + time.to_s[0, 13])
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