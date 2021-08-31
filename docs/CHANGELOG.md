## Change Log

### Changelog is outdated
This changelog is out of date and wont be continued. 
Please see the releases comments, or if not present the commit comments.
https://github.com/anidl/crunchyroll-downloader-nx/releases

### 4.23.1 (2021/03/15)
- Download by media_id
- Minor fixes and improvements

### 4.22.3 (2021/03/13)
- Cross platform builds

### 4.22.2 (2021/03/13)
- Fix binary build

### 4.22.1 (2021/03/08)
- Fix binary build
- Minor fixes and improvements

### 4.22.0 (2021/03/08)
- Bump Nodejs to v14
- Added option to use IETF BCP 47/RFC 5646 language tags instead of ISO 639-2 codes for mkv subtitles muxing
- Improved subtitles track naming
- Skip videos with ended publication date
- Drop support old api for subtitles
- Small fixes and improvements

#### Known issues:
- Proxy not supported

### 4.21.0 beta (2020/10/03)
- [Beta 1] Added ability load session from cookies.txt
- [Beta 1] Added `episode name` to filename template
- [Beta 2] Fix binary build

#### Known issues:
- Proxy not supported
- Old api for subtitles not supported

### 4.20.0 (2020/09/19)
- Improved cli options
- Update available servers parsing
- Update modules

#### Known issues:
- Proxy not supported
- Old api for subtitles not supported

### 4.19.1 (2020/08/29)
- Overwrite duplicate options

### 4.19.0 (2020/08/24)
- Update modules for better hls download function
- Added option to set default subtitle language (#15)
- Added option to download video with hardsubs
- Added un-interactive auth (#14)
- Added option to create series title sub folder

#### Known issues:
- Proxy not supported
- Old api for subtitles not supported

### 4.18.6 (2020/07/06)
- Update modules for better hls download function
- Always display error messages for video page
- Optional: use curl for requests to crunchyroll server

#### Known issues:
- Proxy not supported
- Old api for subtitles not supported

### 4.18.5 (2020/06/27)
- Fix 403 error

#### Known issues:
- Proxy not supported
- Old api for subtitles not supported

### 4.18.4 (2020/06/02)
- Small fixes

#### Known issues:
- Proxy not supported
- Old api for subtitles not supported

### 4.18.3 (2020/06/02)
- Fix "Error #403"

#### Known issues:
- Proxy not supported
- Old api for subtitles not supported

### 4.17.0 (2020/05/27)
- Sort subtitles before muxing
- Moved language data to separate
- Detect audio language using stream data
- Minor improvements

#### Known issues:
- Proxy not supported
- Old api for subtitles not supported

### 4.16.1 (2020/04/28)
- Sort subtitles before muxing

#### Known issues:
- Proxy is broken
- oldsubs cli option is broken

### 4.16.0 (2020/04/28)
- Updated modules
- Updated url to fonts
- Improved dlsubs cli option
- Custom configs

#### Known issues:
- Proxy is broken
- oldsubs cli option is broken

### 4.15.1 (2020/03/10)
- Better binary file handling
* Known issue: Proxy is broken

### 4.15.0 (2020/03/09)
- Rewritten episode selector
- Update dependencies
* Known issue: Proxy is broken

### 4.14.2 (2020/01/21)
- Fix search2 for excluded titles

### 4.14.1 (2020/01/20)
- Fix download error (Sorry!)

### 4.14.0 (2020/01/05)
- Fix font downloading
- Code cleanup and improvements

### 4.12.0 (2019/12/23)
- Configuration file was split to 3 different parts
- Binary build for windows x64 (mkvmerge and ffmpeg included)
- Updated modules
* Known bug: Proxy not working

### 4.10.1 (2019/08/10)
- Added `--oldstreams` for fetching stream using old api
- Improved streams detection

### 4.10.0 (2019/08/10)
- Resume downloading
- Select download ts parts in batch [1...10]

### 4.9.3 (2019/07/21)
- Fixed proxy for stream download

### 4.9.2 (2019/07/20)
- Don't show proxy error twice

### 4.9.1 (2019/07/19)
- Added `--filename` default value if not set in `config.main.yml` file

### 4.9.0 (2019/07/17)
- Force use proxy for all requests, except if `--ssp` is used for selected requests

### 4.8.0 (2019/07/12)
- Added filename template changing

### 4.7.2 (2019/07/06)
- Updated configuration file

### 4.7.1 (2019/07/06)
- Code optimization

### 4.7.0 (2019/07/04)
- FFMPEG and MKVMerge moved to `bin` folder
- Added `fonts` folder
- Added `--dlfonts` option to download required fonts
- Updated configuration file
- Update dependencies

### 4.5.1 (2019/06/27)
- Small fix

### 4.5.0 (2019/06/27)
- Added new options `dlsubs`, `skipdl`/`novids` and `skipmux`
- Updated configuration file
- Update dependencies

### 4.3.3 (2019/05/21)
- Improved raw stream detection

### 4.3.2 (2019/05/18)
- Fix cookie updating
- Fix `--oldsubs` fetching
- Update dependencies

### 4.3.1 (2019/05/12)
- Fix cookie checks
- Added github url to `package.json`
- Update dependencies

### 4.3.0 (2019/05/10)
- Added experimental `search2`
- Fixed oldsubs engine

### 4.2.1 (2019/05/10)
- Better cookie checks

### 4.2.0 (2019/05/10)
- Fix proxy checks
- Replace current search engine with Crunchyroll device api

### 4.1.0 (2019/05/09)
- Better server selection
- Code improvements

### 4.0.0 (2019/05/04)
- Fix cookie checks and update session cookie when needed

### 4.0.0-beta.3 (2019/05/03)
- First public release
