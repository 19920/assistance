class User < ApplicationRecord
   
    validates_uniqueness_of :email
    has_secure_password
    has_secure_token :auth_token
    has_many :requests, dependent: :destroy
    has_many :messages
    has_many :volunteers, class_name: 'Conversation', foreign_key: 'volunteer_id'
    has_many :request_owners, class_name: 'Conversation', foreign_key: 'request_owner_id'
    

    def invalidate_token
        self.update_columns(auth_token: nil)
    end
    def self.validate_login(email, password)
        user = find_by(email: email)
        if user && user.authenticate(password)
            user
        end
    end

end
