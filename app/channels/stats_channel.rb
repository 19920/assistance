class StatsChannel < ApplicationCable::Channel
  def subscribed
	stream_from 'stats_channel'
  end

  def unsubscribed
    
end
