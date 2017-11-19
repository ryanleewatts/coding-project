# Setlist.fm scraper
This tool allows the user to scrape setlists (and contextual information) from Setlist.fm, a website where music fans record lists of songs performed at live shows.

## The Scraper
The Python script scrapes a list of all setlists for a certain band

### To use
Go into the 'scraper' folder and load up the python script.

You'll need to install:
- pandas
- bs4
- requests

Simply run the script to grab the data for every GNR setlist. 

### To change band

Find this line (13):
```
url = "http://www.setlist.fm/setlists/guns-n-roses-7bd69e24.html?page=" + str(i + 1)
```
Head to setlist.fm and look at that website structure for the url prefix for the band you would like. There is an element of randomness to the url, but as long as you use the whole thing, it'll work.

Copy that in between the first mark and the question mark, keeping the 'page=' suffix, and run as normal. 

## Example of how the tool can be used
I wrote a piece using the data grabbed from the scraper about Guns N Roses. They play UK shows this summer (2017) on the anniversary of their debut album, so I have visualised some of the data you can scrape with this tool using Hghcharts, and semi-built an interactive where the user can compare GNR to other bands. 

I have included all of the code here, and it's hosted at: <a href="http://coding-project.ryanleewatts.com">coding-project.ryanleewatts.com</a>

## Thank you, and enjoy! 

### To Do
- [x] Scrape some more bands for the interactive
- [ ] Code the charts for the interactive
- [ ] Build a way to compare average setlists


