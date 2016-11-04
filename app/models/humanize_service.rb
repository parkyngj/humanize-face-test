module HumanizeService
  include HTTParty

  BASE_URI = "http://ilaria.herokuapp.com/"

  def self.get_the_thing(thing)
    url = BASE_URI + "#{thing}.json"

    response = HTTParty.get(url)

  end
end
