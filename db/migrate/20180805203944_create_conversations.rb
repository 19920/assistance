class CreateConversations < ActiveRecord::Migration[5.1]
  def change
    create_table :conversations do |t|
      t.integer :request_owner_id
      t.integer :volunteer_id
      t.integer :request_id
      t.timestamps
    end
    add_foreign_key :conversations, :users, column: :volunteer_id, primary_key: :id
    add_foreign_key :conversations, :users, column: :request_owner_id, primary_key: :id
  end
end
