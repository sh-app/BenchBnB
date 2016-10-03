class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
     if @user
       log_in(@user)
       render 'api/users/show'
     else
       render json: ["Login Failed: Invalid credentials"], status: 422
     end

  end

  def destroy
    if current_user
      @user = current_user
      log_out
      render 'api/users/show'
    else
      render json: ["404 No user found"], status: 404
    end
  end

  private
  def session_params
    params.require(:user).permit(:username, :password)
  end

end
