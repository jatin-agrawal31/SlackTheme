## To Use (OSX)
Copy/paste contents `base.js` to bottom of `ssb-interop.js` in slack's application directory, restart slack

## Customize your theme
- Create separate file for urls (e.g. `your-name-urls.js`), css, and custom js if you want to run that
- Make sure all your custom css urls are uploaded to github and in your custom urls directory, same with js
- In the contents of `base.js` that you pasted in `ssb-interop.js`, change the `base-urls.js` to whatever your custom urls file is called
- Restart slack

## Automatic build system

Basic usage
```bash
ruby build.rb [/path/to/file.js] # optional
```

- Path can be relative but should point to something that looks like `base.js`
- `build.rb` will use, in order of precendence:
    - passed in file path
    - path set in `SLACK_THEME_PATH` in your bash profile
    - finally will fall back to `base.js` default
