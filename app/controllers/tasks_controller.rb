class TasksController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.json do
        tasks = Task.incomplete
        render :json => { :tasks => tasks }
      end
    end
  end

  def create
    respond_to do |format|
      format.json do
        todo = Task.new(params[:task])

        if todo.save
            render :json => todo, :status => :created
        else
          render :json => { :errors => todo.errors }, :status => :unprocessable_entity
        end
      end
    end
  end

  def update
    respond_to do |format|
      format.json do
        todo = Task.incomplete.find(params[:id])

        if todo.update_attributes(params[:task])
          render :json => { :task => todo }
        else
          render :json => {}, :status => :unprocessable_entity
        end
      end
    end
  end

end
