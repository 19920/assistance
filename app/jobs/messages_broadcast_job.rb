class MessageBroadcastJob < ApplicationJob
	queue_as  :default

    def perform(message)
		ActionCable.server.broadcast "request_channel", message: message
	end

end
