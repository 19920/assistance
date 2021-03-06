class Message < ApplicationRecord
    belongs_to :request
    belongs_to :conversation
    validates_presence_of :body, :volunteer_id, :request_owner_id, :conversation_id, :request_id
    def message_time
      created_at.strftime("%m/%d/%y at %l:%M %p")
    end
     after_create_commit { MessageBroadcastJob.perform_later(self) }
end
