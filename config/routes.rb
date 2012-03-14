TodoList::Application.routes.draw do
  resources :tasks, :only => [:index, :show, :create, :update]
  root :to => 'tasks#index'
end
