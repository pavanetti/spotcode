# frozen_string_literal: true

class Api::V1::DashboardController < ApplicationController
  def index
    load_recent_heard
  end

  private

  def load_recent_heard
    @recent_albums =
      current_user
      .recently_heard.order(created_at: :desc)
      .limit(4).map(&:album)
  end

  def load_recommendations
    heard_categories = @recent_albums.map(&:category)
    @recommend_albuns =
      if heard_categories.present?
        Album.joins(:category, :song)
             .where(category: heard_categories)
             .order('songs.played_count')
             .select('distinct albums.*')
             .limit(12)
      else
        Album.all.sample(12)
      end
  end
end
