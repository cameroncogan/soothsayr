# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Card.create!(
  name: 'The Fool',
  image_path: '00_fool.jpg',
  situation: 'Your eyes search the horizon, looking for hope, or a chance to start anew',
  danger: "Optimism and free-spiriteness are not your allies in this. Do not start what you can't finish",
  safety: 'The way forward lies in beginning again, smiling, and looking to the winding road',
  outcome: 'You will find what you seek by stepping carelessly forward with a smile',
)

Card.create!(
  name: 'The Magician',
  image_path: '01_magician.jpg',
  situation: 'You need to take action, move forward. But how?',
  danger: 'Take a step back. You cannot control everything, and there is danger in thinking you can',
  safety: 'Action is called for. Be driven. Move boldly',
  outcome: 'Look in the mirror. Everything you need is standing in front of you'
)

Card.create!(
  name: 'The High Priestess',
  image_path: '02_high_priestess.jpg',
  situation: 'There is something you must learn, perhaps knowledge, perhaps a lesson',
  danger: 'You have studied long enough. Do not let searching for answers overcome the will to act',
  safety: 'In knowledge is sorrow, but also the fire to forge a tomorrow',
  outcome: 'You will learn from this. You will have that knowledge forever.'
)

Card.create!(
  name: 'The Empress',
  image_path: '03_empress.jpg',
  situation: 'Your thoughts turn towards what you have, and how to keep it',
  danger: "Wealth and plenty are not everything. They have driven many great men and women to ruin",
  safety: "The real currency of life is gold. Wealth, prestige--there is your way forward",
  outcome: "The outlook is golden. As in, hard currency."
)

Card.create!(
  name: 'The Emperor',
  image_path: '04_emperor.jpg',
  situation: 'Power and authority are on your mind. Who is in control?',
  danger: "Do not tighten your grip and try to impose your will. You won't",
  safety: "Exercise your power. Everything can be yours if you demand it",
  outcome: "The situation is waiting to be conquered, and conquer it you will"
)

Card.create!(
  name: 'The Hierophant',
  image_path: '05_hierophant.jpg',
  situation: "Playing by the rules. It's harder than it sounds...but you know that",
  danger: "Society, convention, traditions--don't be bound by them. You don't need to be",
  safety: "Return to your roots, your traditions. There is power in old things",
  outcome: "You'll find your way back home. Promise."
)

Card.create!(
  name: 'The Lovers',
  image_path: '06_lovers.jpg',
  situation: 'Decisions can be intuitive, instinctive. Sound familiar?',
  danger: "Don't let yourself be tied down. That's not who you are",
  safety: "Follow your heart. It's as easy--and scary--as that",
  outcome: "You will get it right without even trying. Trust your instincts",
)

Card.create!(
  name: 'The Chariot',
  image_path: '07_chariot.jpg',
  situation: "Maybe you need to get away. Maybe it needs to happen soon...",
  danger: "Don't push so hard. The wheels will come off",
  safety: "Take flight. You already know how",
  outcome: "You're going to touch the sky",
)

Card.create!(
  name: 'Strength',
  image_path: '08_strength.jpg',
  situation: "What's inside you--a lamb, or a lion?",
  danger: "You can't do it all at once. Look for what's achievable",
  safety: "Still your heart and open your eyes. The door will open for you, if you're true",
  outcome: "You'll walk away from this with your head held high"
)

Card.create!(
  name: 'The Hermit',
  image_path: '09_hermit.jpg',
  situation: "You're alone, maybe even if you're not. But do you want that?",
  danger: "Don't shy away from them. No one is an island",
  safety: "Get away from the crowds. There is wisdom in solitude",
  outcome: "You'll withdraw, seek your own counsel, and therein find truth",
)

Card.create!(
  name: 'The Wheel of Fortune',
  image_path: '10_wheel_of_fortune.jpg',
  situation: "Luck, risk, fortune--the name of the game is chance",
  danger: "Don't roll the dice. Luck is not with you, at least in this",
  safety: "Let the dice roll. Fortune favors the bold",
  outcome: "Risk bequeaths reward. The chance you take will pay off",
)

Card.create!(
  name: 'Justice',
  image_path: '11_justice.jpg',
  situation: "There's been a crime here, maybe metaphorical, maybe real",
  danger: "Don't look to agreements and contracts. They will choke you.",
  safety: "Keep your word, honor your commitments, and let the law guide you",
  outcome: "Justice will be served in this, for well or ill",
)

Card.create!(
  name: 'The Hanged Man',
  image_path: '12_the_hanged_man.jpg',
  situation: "You've been asked to make sacrifices, to surrender what you want",
  danger: "Don't make sacrifices. Don't surrender. You'll be left out to dry",
  safety: "We all have to make sacrifices. This is your time",
  outcome: "You'll have to give of yourself, and you will",
)

Card.create!(
  name: 'Death',
  image_path: '13_death.jpg',
  situation: "Transformation is at hand. You stand in the doorway between past and future",
  danger: "Not every change is for the better. Be wary of stepping forward, for the ground may tremble",
  safety: "Leave the past behind. Something calls for you",
  outcome: "Nothing lasts forever, nor is meant to. You've always known that",
)

Card.create!(
  name: 'Temperance',
  image_path: '14_temperance.jpg',
  situation: "Can you find a place of balance, or are you slipping to the edges?",
  danger: "Moderation is for the timid. Why shackle yourself?",
  safety: "Balance is required. Stop listing to extremes. Find your center",
  outcome: "Equilibrium. You will find the answer in the middle",
)

Card.create!(
  name: 'The Devil',
  image_path: '15_devil.jpg',
  situation: 'Those chains around your wrists, where did they come from?',
  danger: "Don't let anyone rule you. You are no one's slave",
  safety: "Just give in. Submission will get you what you want",
  outcome: "You will be ensnared, enslaved by what you most desire",
)

Card.create!(
  name: 'The Tower',
  image_path: '16_tower.jpg',
  situation: "The walls are crumbling around you, poor thing",
  danger: "Do not look oustide for help. The world is burning around you",
  safety: "The only way forward is destruction. Sweep all the pieces off the board",
  outcome: "Ruin awaits you. It will all come crashing down",
)

Card.create!(
  name: 'The Star',
  image_path: '17_star.jpg',
  situation: "Something has gone well, a blessing from on high--but what now?",
  danger: "Don't trust to hope or the good will of the cosmos. You're in this alone",
  safety: "Let the world guide you. Kindness will come from without",
  outcome: "Karma has it's eye on you. You will be granted favor",
)

Card.create!(
  name: 'The Moon',
  image_path: '18_moon.jpg',
  situation: "A mystery, maybe within you, maybe without. How do you solve it--or do you need to?",
  danger: "What you think is real is an illusion. Don't be taken in",
  safety: "Retreat into dreams, into the night. There is power in illusion",
  outcome: "You won't find truth, but you'll think you have",
)

Card.create!(
  name: 'The Sun',
  image_path: '19_sun.jpg',
  situation: "How are you feeling? Ready to take on the world?",
  danger: "Don't assume your health and vigor will hold. It takes effort not to crumble",
  safety: "Trust in your health, your vibrancy. You're full of moxy",
  outcome: "Everything will be made right in the end",
)

Card.create!(
  name: 'Judgement',
  image_path: '20_judgement.jpg',
  situation: "You're on a new path, in a new place. What comes next?",
  danger: "It sounds so easy, wiping the slate clean, but it's not without cost, is it?",
  safety: "Rebirth, renaissance--choose your word. You need to start again",
  outcome: "One thing ends, another begins. No one can stop it",
)

Card.create!(
  name: 'The World',
  image_path: '21_the_world.jpg',
  situation: "You have come a very long way, and are nearly there",
  danger: "Stop looking outside yourself for answers. The world holds no great wisdom",
  safety: "Pull up the stakes, hit the road. It's all out there, waiting for you",
  outcome: "You will attain a little piece of your truest self",
)
