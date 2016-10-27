class UsersController < ApplicationController

  def index
    @user = current_user
    respond_to do |format|
      format.json { render json: @user.id }
    end
  end

  def show
    @user = current_user
    @readings = @user.readings
  end

  def update
    @deck_choice = params[:deck_choice]
    @user = current_user
    binding.pry
    @user.deck = @deck_choice
    @user.save
    binding.pry
  end

end
