module ApplicationHelper
  def inline_svg(path)
    raw Rails.application.assets.find_asset(path + '.svg').to_s
  end
end
