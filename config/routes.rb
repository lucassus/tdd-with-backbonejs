TodoList::Application.routes.draw do
  resources :tasks, :only => [:index, :create, :update]
  root :to => 'tasks#index'
end
