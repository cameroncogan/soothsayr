class ReadingsController < ApplicationController

  def index

  end

  def show
    @reading = Reading.find(params[:id])
  end

  def create
    @reading = Reading.create!(user: current_user)
    draw_cards(@reading.id)
  end

  def draw_cards(reading_id)
    reading_cards = Card.all.sample(4)
    assigned_cars = {}

    reading_cards.each do |card|
      Reveal.create!(card: card.id, reading: reading_id)
    end
  end

  private

end
