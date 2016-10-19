class ReadingsController < ApplicationController

  def index

  end

  def show
    @reading = Reading.find(params[:id])
    @cards = @reading.cards.order('position ASC')
  end

  def create
    @reading = Reading.new(user: current_user)
    if @reading.save
      draw_cards(@reading.id)
      flash[:notice] = "Reading created"
      redirect_to reading_path(@reading)
    else
      flash[:notice] = @reading.errors.full_messages.join(", ")
      render :index
    end
  end

  def draw_cards(reading_id)
    reading_cards = Card.all.sample(4)
    reading_cards.each_with_index do |card, index|
      reveal = Reveal.new(card_id: card.id, reading_id: reading_id, position: index)
      reveal.save
    end
  end

  private

end
