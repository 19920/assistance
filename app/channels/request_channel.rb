class RequestChannel < ApplicationCable::Channel
  def subscribed

    @request= Request.find_by(id: params[:room])
    stream_for @request
  end
  def received(data)
    RequestChannel.broadcast_to(@request,{request: @request, users: @request.waiting_users})
  end

  def unsubscribed

  end
end
