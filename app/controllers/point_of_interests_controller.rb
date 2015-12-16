class PointOfInterestsController < ApplicationController
  include ApplicationHelper
  layout 'mapping'

  def index
    @city = City.find_by(name: params[:city])
    if @city == "" || @city == nil
      flash[:alert] = "City name incorrect"
      redirect_to '/'
    else
      @pointsofinterest = @city.point_of_interests.order(rating: :DESC)
      @filterpois = PointOfInterest.district_by_rating(@pointsofinterest)

      @date = calculate_days(params[:arrival],params[:departure])
      if @date == 0
        redirect_to '/'
      end
       respond_to do |format|
         format.json{render json: {days: @date, city: @city, poi: @filterpois}, status: 201}
         format.html{render 'index'}
      end
    end
  end

end
