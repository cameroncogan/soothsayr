Rails.application.routes.draw do
   root "cards#index"

   resources :cards, only: [:index]

   devise_for :users, :controllers => { registrations: 'registrations' }
   resources :users, only: [:index, :show, :update, :edit, :destroy]

end
