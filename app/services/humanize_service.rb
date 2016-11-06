module HumanizeService
  include HTTParty

  BASE_URI = "https://humanize-api-test.herokuapp.com/"

  def self.get_the_thing(things, id)
    url = BASE_URI + things + "/" + id

    response = HTTParty.get(url)[things[0..-2]]
  end

  def self.get_the_things(things)
    url = BASE_URI + things

    response = HTTParty.get(url)[things]
  end
end
