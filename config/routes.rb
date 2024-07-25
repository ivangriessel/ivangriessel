Rails.application.routes.draw do
  root 'pages#home' #send the application to the hello method in the application controller
  get 'about', to: 'pages#about'
end
