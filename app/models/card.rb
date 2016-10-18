class Card < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  validates :image_path, presence: true
  validates :situation, presence: true
  validates :danger, presence: true
  validates :safety, presence: true
  validates :outcome, presence: true
end
