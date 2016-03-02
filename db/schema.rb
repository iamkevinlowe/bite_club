# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160301173724) do

  create_table "cuisines", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cuisines_restaurants", force: :cascade do |t|
    t.integer "cuisine_id"
    t.integer "restaurant_id"
  end

  create_table "lists", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lists_restaurants", force: :cascade do |t|
    t.integer "list_id"
    t.integer "restaurant_id"
  end

  create_table "neighborhoods", force: :cascade do |t|
    t.string   "name"
    t.text     "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "pictures", force: :cascade do |t|
    t.integer  "cuisine_id"
    t.integer  "list_id"
    t.integer  "neighborhood_id"
    t.integer  "restaurant_id"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "source_url"
    t.string   "thumb_url"
  end

  add_index "pictures", ["cuisine_id"], name: "index_pictures_on_cuisine_id"
  add_index "pictures", ["list_id"], name: "index_pictures_on_list_id"
  add_index "pictures", ["neighborhood_id"], name: "index_pictures_on_neighborhood_id"
  add_index "pictures", ["restaurant_id"], name: "index_pictures_on_restaurant_id"

  create_table "restaurants", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "cost"
    t.boolean  "reservations"
    t.string   "instagram"
    t.string   "yelp_id"
    t.string   "google_place_id"
    t.string   "opentable_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "neighborhood_id"
  end

  add_index "restaurants", ["neighborhood_id"], name: "index_restaurants_on_neighborhood_id"

end
