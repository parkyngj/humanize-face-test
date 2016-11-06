class IndexController < ApplicationController
  def index
    @things = HumanizeService.get_the_things("tests")
    @thing = HumanizeService.get_the_thing("tests", "5")
  end
end
