Rails.application.routes.draw do
  get '/' => 'site#home'
  get '/contact' => 'site#contact'

  get '/cities/pointsofinterest' => 'point_of_interests#index'
end
