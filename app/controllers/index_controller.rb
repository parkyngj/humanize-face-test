class IndexController < ApplicationController
  def index
    @thing = HumanizeService.get_the_thing("tests/5")
  end
end
