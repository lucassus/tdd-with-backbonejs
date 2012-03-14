class TasksController < ApplicationController

  def index
    @tasks = Task.incomplete

    respond_to do |format|
      format.html
      format.json do
        render :json => { :tasks => @tasks }
      end
    end
  end

  def show
    @task = Task.find(params[:id])

    respond_to do |format|
      format.json do
        render :json => { :task => @task }
      end
    end
  end

  def create
    todo = Task.new(params[:task])
    success = todo.save

    respond_to do |format|
      format.html do
        redirect_to root_path
      end

      format.json do
        if success
            render :json => todo, :status => :created
        else
          render :json => { :errors => todo.errors }, :status => :unprocessable_entity
        end
      end
    end
  end

  def update
    todo = Task.incomplete.find(params[:id])
    success = todo.update_attributes(params[:task])

    respond_to do |format|
      format.html do
        redirect_to root_path
      end

      format.json do success
        if
          render :json => { :task => todo }
        else
          render :json => {}, :status => :unprocessable_entity
        end
      end
    end
  end

end
