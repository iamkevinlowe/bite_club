class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.references :cuisine, index: true, foreign_key: true
      t.references :list, index: true, foreign_key: true
      t.references :neighborhood, index: true, foreign_key: true
      t.references :restaurant, index: true, foreign_key: true

      t.string :large
      t.string :medium
      t.string :small
    end
  end
end
