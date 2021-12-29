require 'fileutils'
(1..100).each do |i|
    FileUtils.mkdir_p i.to_s
    FileUtils.cp("index.html",i.to_s)
end