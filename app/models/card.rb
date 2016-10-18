class Card < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  validates :image_path, presence: true
  validates :signifier, presence: true
  validates :crossing, presence: true
  validates :foundation, presence: true
  validates :past, presence: true
  validates :crown, presence: true
  validates :future, presence: true
  validates :emotions, presence: true
  validates :forces, presence: true
  validates :desires, presence: true
  validates :outcome, presence: true
end
