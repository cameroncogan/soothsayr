class Reveal < ActiveRecord::Base
  belongs_to :card
  belongs_to :reading
  validates :card, presence: true
  validates :reading, presence: true
  validates :position, presence: true
end
