class Neighborhood < ActiveRecord::Base
  has_many :restaurants

  # TODO: Take this out to a superclass or module to include in each "listable" model
  def type
    self.class.name.downcase
  end

  def as_json(options = {})
    super(
      methods: :type
    )
  end
end
