require "sqlite3"

module Gallery
  class AlbumPageGenerator < Jekyll::Generator
    safe true

    def generate(site)
      db = Database.new
      db.albums.each do |album|
        page = Jekyll::PageWithoutAFile.new(
          site, site.source, "albums", "#{album[1]}.html")
        page.content = album[3]
        page.data["description"] = "#{album[2]} Photo Album"
        page.data["layout"] = "album"
        page.data["title"] = album[2]
        page.data["photos"] = []

        db.photos_in_album(album[0]).each do |photo|
          page.data["photos"] << Photo.new(photo[1], photo[2], photo[3])
        end

        site.pages << page
      end
    end
  end

  class Photo
    def initialize(title, file, details)
      @title = title
      @file = file
      @details = details
    end

    def to_liquid
      {
        "title" => @title,
        "file" => @file,
        "details" => @details
      }
    end
  end

  class Database
    def initialize
      @db = SQLite3::Database.new "#{__dir__}/../_database.db"
    end

    def albums
      @db.execute "SELECT * FROM albums"
    end

    def photos_in_album(album_id)
      @db.execute %Q(
      SELECT * FROM photos
      JOIN photos_albums ON photos.id = photos_albums.photo_id
      WHERE photos_albums.album_id = ?
      ORDER BY photos_albums.position ASC;
      ), [album_id]
    end
  end
end
