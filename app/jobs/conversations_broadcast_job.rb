class ConversationBroadcastJob < ApplicationJob
	queue_as  :default

    def perform(conversation)
		ActionCable.server.broadcast "request_channel#{conversation.request_id}", conversation: conversation 
	end

end
