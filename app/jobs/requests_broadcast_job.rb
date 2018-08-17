class TaskBroadcastJob < ApplicationJob
	queue_as  :default

    def perform(request)
		ActionCable.server.broadcast "stats_channel", stats: render_stats()
	end


	def render_stats
	{
	unfulfiled: Request.where(status: false).count,
	fulfiled: Request.where(status: true).count,
	users: User.all.count,
	}

	end
end
