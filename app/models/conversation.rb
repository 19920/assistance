class Conversation < ApplicationRecord
  belongs_to :request_owner, foreign_key: "request_owner_id"
  belongs_to :volunteer, class_name: 'User',foreign_key: "volunteer_id"
  belongs_to :request
  has_many :messages, dependent: :destroy
  validates_presence_of :volunteer_id, :request_id
  validates_uniqueness_of :volunteer_id, :scope => :request_id
  scope :between, ->(volunteer_id, request_id) {where(volunteer_id: volunteer_id, request_id: request_id)}

  delegate :name, to: :request_owner, prefix: true
  delegate :name, to: :volunteer, prefix: true
end
