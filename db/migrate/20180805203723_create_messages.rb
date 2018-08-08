class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.text :body
      t.integer :conversation_id
      t.integer :volunteer_id
      t.integer :request_owner_id
      t.integer :request_id
      t.boolean :owner, :default => false
      t.boolean :seen, :default => false
      t.timestamps
    end
  end
end
