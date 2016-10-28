class UsersController < ApplicationController
  before_action :authorize_user

  def index
    @user = current_user
    respond_to do |format|
      format.json { render json: { user_id: @user.id, deck_choice: @user.deck }}
    end
  end

  def show
    @user = current_user
    @readings = @user.readings
  end

  def update
    @deck_choice = params['deck_choice']
    @user = current_user
    @user.deck = @deck_choice
    @user.save
  end

  private

  def user_params
    params.require(:user).permit(:deck_choice)
  end

  def authorize_user
    if !user_signed_in?
      flash[:notice] = 'Please sign in to continue'
      redirect_to new_user_session_path
    end
  end

end
