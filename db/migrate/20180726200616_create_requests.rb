class CreateRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :requests do |t|
      t.string :title
      t.string :description
      t.string :address
      t.float :latitude
      t.float :longitude
      t.string :request_type
      t.integer :status,default: 0
      t.integer :answers_count,default: 0
      t.integer :user_id

      t.timestamps
    end
  end
end
