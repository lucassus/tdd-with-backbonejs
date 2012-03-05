class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name, :null => false
      t.boolean :complete, :null => false, :default => true

      t.timestamps
    end
  end
end
