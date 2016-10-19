Rails.application.routes.draw do
   root "readings#index"

   resources :readings, only: [:index, :show, :create]

   devise_for :users, :controllers => { registrations: 'registrations' }
   resources :users, only: [:index, :show, :update, :edit, :destroy]

end
