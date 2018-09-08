SLACK_PATH = '/Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static/ssb-interop.js'.freeze
DEFAULT_THEME = './base.js'.freeze

def load_file(mode)
  @file ||= {}
  @file[mode] ||= File.open(SLACK_PATH, mode)
end

def read_file
  @data ||= load_file('r+').read
end

def already_themed?
  data = read_file
  theme_strings = %w[DOMContentLoaded SlackTheme]
  theme_strings.all? { |str| data.match?(/#{str}/) }
end

def cleaned_file
  data = read_file
  str = "document.addEventListener('DOMContentLoaded', function () {"
  data.slice(0..(data.index(str) - 1))
end

def apply_theme(clean_file, theme_path)
  theme_file = File.open(theme_path, 'r')
  load_file('w+').write("#{clean_file}#{theme_file.read}")
ensure
  theme_file.close
end

def main(theme)
  data = already_themed? ? cleaned_file : read_file
  apply_theme(data, theme)
  puts 'Theme installed'
rescue => e
  puts 'You did something wrong'
  puts e
ensure
  
  @file ||= nil
  @file&.values&.each { |f| f.close } unless @file.nil?
end

main(ARGV.first || ENV['SLACK_THEME_PATH'] || DEFAULT_THEME)
