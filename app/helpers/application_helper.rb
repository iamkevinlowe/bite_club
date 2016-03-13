module ApplicationHelper
  def fb_meta_tags(resource = nil)
    url = resource ? request.original_url : request.base_url
    type = "website"
    title = resource ? "Bite Club - #{resource.name}" : 'Bite Club'
    description = "Discover the best restaurants in San Francisco"
    image = resource ? resource.picture_url : request.original_url + asset_path('landing-cover-image-1.jpg')

    tag(:meta, property: 'og:url', content: url) +
    tag(:meta, property: 'og:type', content: type) +
    tag(:meta, property: 'og:title', content: title) +
    tag(:meta, property: 'og:description', content: description) +
    tag(:meta, property: 'og:image', content: image)
  end

  def inline_svg(path)
    raw Rails.application.assets.find_asset(path + '.svg').to_s
  end
end