class AddUserRefToLabourer < ActiveRecord::Migration[5.2]
  def change
    add_reference :labourers, :user, foreign_key: true
  end
end
