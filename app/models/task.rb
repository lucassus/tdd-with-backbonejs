class Task < ActiveRecord::Base
  validates :name, :presence => true

  def self.incomplete
    self.where(:complete => false)
  end
end
