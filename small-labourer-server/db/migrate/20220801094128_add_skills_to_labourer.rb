class AddSkillsToLabourer < ActiveRecord::Migration[5.2]
  def change
    add_column :labourers, :skill, :text, array: true, default: []
  end
end
