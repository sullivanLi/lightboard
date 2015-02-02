class WsController < ApplicationController
  def master
  end
  def client
  end
  def display
    render layout: "display"
  end
end
