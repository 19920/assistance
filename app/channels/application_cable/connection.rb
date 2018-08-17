module ApplicationCable
  class Connection < ActionCable::Connection::Base
    def connect
      "connected"
    end
  end
end
