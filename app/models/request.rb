class Request < ApplicationRecord
    belongs_to :user
    has_many :conversations
    has_many :messages
    allowed_types = ['material', 'help']
    validates_presence_of :title, :description, :latitude, :longitude, :user_id, :request_type

      validates :title, length: { in: 2...30,
    message: "title must be between 2 and 30 letters"  }

    validates :description, length: { maximum: 300,
    message: "your text is too long ,maximum 300 letters"  }

    validates_inclusion_of :request_type, { in: allowed_types,
    message: "request must be either material or help" }

     geocoded_by :address, :latitude => :lat, :longitude => :lng
     after_create_commit { RequestBroadcastJob.perform_later(self) }




end
