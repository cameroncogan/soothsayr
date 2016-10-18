class Reveal < ActiveRecord::Base
  validates :card, presence: true
  validates :reading, presence: true
end
