class Reading < ActiveRecord::Base
  has_many :reveals
  has_many :cards, through: :reveals
  belongs_to :user
  validates :user, presence: true
end
