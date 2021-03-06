class Card < ActiveRecord::Base
  has_many :reveals
  has_many :readings, through: :reveals
  validates :name, presence: true, uniqueness: true
  validates :image_path, presence: true
  validates :situation, presence: true
  validates :danger, presence: true
  validates :safety, presence: true
  validates :outcome, presence: true
end
