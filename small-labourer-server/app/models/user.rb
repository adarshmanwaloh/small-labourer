class User < ApplicationRecord
        acts_as_token_authenticatable
        has_many :labourers
        has_many :customers
        # Include default devise modules. Others available are:
        # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
        devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

        def invalidate_all_sessions!
                update_attribute(:authentication_token, SecureRandom.hex)
        end
end
