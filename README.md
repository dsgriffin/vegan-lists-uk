### [deprecation notice - this is no longer available on the app store & there are no future plans to maintain the repo as of 2017]

# Vegan Lists UK 

![logo](https://github.com/dsgriffin/vegan-lists-uk/raw/master/resources/ios/icon/icon-76%402x.png)

A simple Ionic 2 iOS app for viewing/collecting official/unofficial Vegan food lists (UK-based).

# Why?

I created this app partly because I always seem to lose internet connection in places like supermarkets when I want to find what Vegan food they sell (and somehow I keep managing to forget to research it before I go out). The second part is because I'd like to learn Angular 2/Ionic 2 and there's no better way than to learn by doing :)

# Features/Details
* View both official and unofficial lists of Vegan food products (provided by the store themselves or volunteers respectively).
* Online links may lead to newer lists than the ones available offline.
* Offline lists are in the form of PDF's and vary in description/size.


# Requirements

As Offline lists are PDF files, you'll need a local application that can view them. iPhones come with [iBooks](https://support.apple.com/en-gb/HT201478) by default; [Adobe Acrobat](https://itunes.apple.com/gb/app/adobe-acrobat-reader/id469337564?mt=8) is a good alternative.

# Device Support

iPhone only (5c and above), requires iOS 8 or above.

# Build

**Requirements:** `Xcode`, `Node v4.0+`, `npm v2.0+`
   
If you have the above, then:

* Download/Clone repo
* `npm install`
* `ionic build ios` to build for the platform
* `ionic prepare ios` to prepare it for iOS testing/running
* open up `Xcode` and test via device/simulator

# App Store

https://itunes.apple.com/us/app/vegan-lists-uk/id1083273301?mt=8

# Contributing

Check out the "issues" tab. Also, if you'd like to add any kind of improvement (or have a suggestion), I would be grateful! Thanks.

# License

MIT
