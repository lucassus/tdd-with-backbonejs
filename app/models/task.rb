class Task < ActiveRecord::Base
  validates :name, :presence => true
end
