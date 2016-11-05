module HumanizeService
  include HTTParty

  BASE_URI = "https://calm-bayou-97961.herokuapp.com/"

  def self.get_the_thing(thing)
    url = BASE_URI + thing

    response = HTTParty.get(url)
  end
end
