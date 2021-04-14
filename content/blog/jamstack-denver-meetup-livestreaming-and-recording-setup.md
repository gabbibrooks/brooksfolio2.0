---
title: Jamstack Denver Meetup Livestreaming and Recording Setup
description:
  The tools and setup we use at Jamstack Denver to record and stream our
  Meetup events.
tags:
  - Streaming
  - All
---

## Intro

I am a co-organizer of the Jamstack Denver meetup and also the A/V guru for streaming and recording all of the talks at our meetup. We livestream our meetups on [Twitch](https://www.twitch.tv/jamstackdenver) and have recordings of each talk on [YouTube](https://www.youtube.com/channel/UCkvjCJHilRhXoalNm9pNPYg). After our February 2020 meetup, we got a lot of other groups and people interested in how we have things set up for recording and live streaming everything. So I thought it would be best to explain everything in a post here for others interested in streaming/recording their own meetups.

## **Hardware**

I'll start with the hardware I use for my setup, the reasoning for why I use what I use, and then go into a recommended set of hardware you'll need to get started.

### **My Setup**

- [2019 Macbook Pro 16 inch](https://www.apple.com/us-hed/shop/buy-mac/macbook-pro/16-inch-space-gray-2.3ghz-8-core-processor-1tb)
- [Camera: Fujifilm X-T3 w/XF18-55mm Lens Kit](https://www.amazon.com/gp/product/B07H3PLXZ3/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
- [Mactrem Camera Tripod](https://www.amazon.com/gp/product/B01MZAD5CU/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
- [Camera Capture Card: Elgato Cam Link 4K](https://www.amazon.com/Elgato-Cam-Link-Broadcast-Camcorder/dp/B07K3FN5MR/ref=sr_1_2?keywords=elgato+cam+link&qid=1581549237&sr=8-2)
- [Capture Card: Magewell USB Capture HDMI Plus](https://www.amazon.com/gp/product/B01N16ZM2M/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)
- [Microphones: Shure BLX1288/CVL Dual Channel Combo Wireless System](https://www.amazon.com/gp/product/B016APL6UG/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
- [Mixer: Behringer Xenyx 1204USB Premium 12-Input 2/2-Bus ](https://www.amazon.com/Behringer-Xenyx-1204USB-Premium-12-Input/dp/B00871VO5Y/ref=sr_1_1?keywords=behringer+1204&qid=1581548595&s=musical-instruments&sr=1-1)
- [Mixer Output Cables: 2x GLS Audio 25 foot Mic Cable Patch Cords](https://www.amazon.com/gp/product/B003JJQMD8/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1)
- [Wireless Mics Input Cables: 2x Hosa XLR Cables](https://www.amazon.com/gp/product/B004TVJL1U/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1)
- [Headphones for Mixer: Sennheiser HD 559](https://www.amazon.com/Sennheiser-HD-559-Open-Headphone/dp/B01L1IIEKM/ref=sr_1_28?crid=1YBC7OT44WEHB&keywords=sennheiser+headphones&qid=1581631453&s=electronics&sprefix=sennheiser%2Celectronics%2C201&sr=1-28)
- [Elgato Stream Deck Mini](https://www.amazon.com/gp/product/B07DYRS1WH/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1)
- [Anker USB C Hub Adapter, 5-in-1](https://www.amazon.com/Anker-Adapter-Ethernet-MacBook-ChromeBook/dp/B071G83L1J/ref=sr_1_3?keywords=anker+usb+c+hub&qid=1581549203&sr=8-3)
- [Syntech USB C to USB Adapter](https://www.amazon.com/gp/product/B07CVX3516/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
- [Atevon 4K HDMI Cable 10 ft](https://www.amazon.com/gp/product/B01N22LFPL/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)
- [UGREEN Micro HDMI to HDMI Cable Adapter 4K 3 ft](https://www.amazon.com/gp/product/B06WWQ7KLV/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)

Here's a diagram of how I have everything connected as well:

![setup diagram](https://res.cloudinary.com/zacharybrooks-dev/image/upload/v1583870369/jamstack_denver_av_setup_diagram.png)

At first glance, this is quite a bit of hardware. Some of it is also a bit overkill for creating a simple livestream and recording but you'd be surprised at some of the hardware requirements for streaming and recording.

The 8 core Macbook Pro I have isn't necessary, but a decent pc/mac is necessary for streaming and recording. I would recommend at least a computer with 4 CPU cores if not 6 due to the video encoding being CPU bound. I'll link a recommended build if you're pc building savvy and want to put together a small form factor build, otherwise the specs listed on the build are something I would aim for.

The Fujifilm XT-3 is a mirrorless camera, which I use for photography as well and it doubles as a great live streaming camera. Mirrorless and DSLR cameras are great for video recording and streaming and provide a little bit of extra quality if you want to take your stream to the next level which is why I recommend them but they're not necessary to get started.

You will need something like the Elgato Cam Link if you decide to use a mirrorless or DSLR camera which allows you to capture the cameras HDMI output. The Magewell Capture card, or similar capture card, is what's needed to capture a presenter's screen and display it out to your live audience. You'll need a capture card with loop-through capability, as this is what allows you to display out to an external screen and capture the input for streaming/recording at the same time. This is one part that I wouldn't go cheap on because I've used cheaper capture cards in the past and they aren't nearly as reliable. You'll also want to make sure the capture card is compatible with your computer since some Elgato devices don't have supported drivers on Mac, so just be aware of that.

Then we get into audio hardware, which I would argue is more important than video, so if you're on a tight budget I'd spend a bit more on better audio since you want the speaker and content to sound nice and clear. I just started using a Shure wireless microphone system with a lavalier mic for the presenter and a handheld mic for our MC and for the audience to ask questions, and it really improved our overall quality. Wireless mics aren't necessary to get started but they can make things feel a bit more professional. I run the wireless mic system into a Behringer Xenyx 1204USB Mixer so I can manually monitor and adjust audio based on the speaker, and the USB output is routed into my computer to capture the audio. I also have cables from the mixer's main output channel routed to venue speakers so the audience can hear the mic'd up presenter.

Finally, I have an Elgato Stream Deck mini to control things in OBS, which i'll get into later, but this is just an extra I like to have so I don't have to jump between OBS scenes with my mouse. With all of that said, this is what I would recommend for an ideal setup to get yourself started with a couple of high-end options thrown in as well.

### Recommended Setup

- [4-6 core CPU Computer Recommended Specs](https://pcpartpicker.com/user/Zacann0n/saved/#view=dWQ68d) or similar spec computer
- [High-End Camera: Sony a6400 Mirrorless Body](https://www.amazon.com/dp/B07MTWVN3M/ref=twister_B07MX1VX18?_encoding=UTF8&psc=1) + [Camera Lens: Sigma 16mm f/1.4](https://www.amazon.com/Sigma-16mm-Contemporary-Lens-Sony/dp/B077BWD2BB/ref=pd_bxgy_2/139-5484215-0510013?_encoding=UTF8&pd_rd_i=B077BWD2BB&pd_rd_r=a6d9de85-f80b-4c09-94a7-625ee9e7cc64&pd_rd_w=nQ8JL&pd_rd_wg=nUqN0&pf_rd_p=ce6c479b-ef53-49a6-845b-bbbf35c28dd3&pf_rd_r=M8HMGTX2SY6B266V78TZ&psc=1&refRID=M8HMGTX2SY6B266V78TZ) + [Dummy Battery](https://www.amazon.com/FIT-POWER-Replcement-Adapter-NP-FW50-Battery/dp/B0744JGWQR/ref=sr_1_3?crid=3MXWQ9IN47GFV&dchild=1&keywords=sony+a6400+dummy+battery&qid=1605462059&s=electronics&sprefix=sony+a6400+dummy+%2Celectronics%2C196&sr=1-3) or [Budget Camera: Logitech C922x Webcam](https://www.amazon.com/Logitech-C922x-Pro-Stream-Webcam/dp/B01LXCDPPK/ref=sr_1_2?keywords=Logitech+C922+Pro&qid=1581629912&s=electronics&sr=1-2)
- Tripod of choice for Camera, doesn't matter too much
- [High-End Camera Capture Card: Elgato Cam Link 4K](https://www.amazon.com/Elgato-Cam-Link-Broadcast-Camcorder/dp/B07K3FN5MR/ref=sr_1_2?keywords=elgato+cam+link&qid=1581549237&sr=8-2)
- [Capture Card: Elgato HD60S](https://www.amazon.com/Elgato-Game-Capture-HD60-PlayStation/dp/B01DRWCOGA/ref=sr_1_3?keywords=elgato+hd60s&qid=1581630531&sr=8-3)
- [Non-Wireless Microphones: Audio Technica ATR2100](https://www.amazon.com/Audio-Technica-ATR2100-USB-Cardioid-Dynamic-Microphone/dp/B004QJOZS4/ref=sr_1_5?crid=24B6QEH8EBILE&keywords=audio+technica+dynamic+microphone&qid=1581630659&sprefix=audio+technica+dynamic%2Caps%2C186&sr=8-5) or [Wireless Microphones: innopow Dual Wireless Microphone System](https://www.amazon.com/innopow-80-Channel-Microphone-Interference-Continuous/dp/B0749L15PF?tag=musiccritic-search-20)
- [2 XLR Input Channel Mixer: Behringer Xenyx Q802USB](https://www.amazon.com/Behringer-Q802USB-Premium-8-Input-Interface/dp/B008O517IC/ref=sr_1_4?keywords=usb+audio+mixer&qid=1581634566&sr=8-4) or [4 XLR Input Channel Mixer: Behringer Xenyx X1204USB](https://www.amazon.com/Behringer-X1204USB-Premium-12-Input-Interface/dp/B0039PPW60/ref=sr_1_7?keywords=usb+audio+mixer&qid=1581634566&sr=8-7)
- [Headphones for Mixer: Sennheiser HD 559](https://www.amazon.com/Sennheiser-HD-559-Open-Headphone/dp/B01L1IIEKM/ref=sr_1_28?crid=1YBC7OT44WEHB&keywords=sennheiser+headphones&qid=1581631453&s=electronics&sprefix=sennheiser%2Celectronics%2C201&sr=1-28) or similar
- Appropriate cables for speakers if needed, either 1/4" to 1/4" or XLR Male to XLR Female, depends on your venue setup
- [Wireless Mics System Input Cables: 2x Hosa XLR Cables](https://www.amazon.com/gp/product/B004TVJL1U/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1)
- USB Hub of choice, you'll need at least 3 inputs
- Micro HDMI to HDMI Cable if using a DSLR/Mirrorless Camera

## Software

Now, this is where things can get a little tricky, and where a lot of trial and error usually occurs. If you're planning to stream and record, or even capture your own desktop image and audio, Windows based computers make this part a lot easier to setup. You can get the exact same results with Mac OS, but you may have a couple of extra steps and things to know about.

If you plan to just stream, you can get away with just letting the service handle your recordings. Twitch and YouTube will save VOD's (Video on Demand) of your streams, however, Twitch deletes them after 14 days, while YouTube will upload your streams directly to your channel. I personally like to record while I stream so I can cut each presenter into its own separate video and always have a copy of it. It's a good practice, in general, to save your content locally and not rely on services alone.

Here is all of the software I use to stream and record.

### My Setup

- [Streaming/Recording: Open Broadcaster Software (OBS)](https://obsproject.com/)
- [Desktop Audio Capture: iShowU Audio Capture](https://support.shinywhitebox.com/hc/en-us/articles/204161459-Installing-iShowU-Audio-Capture-Mojave-and-earlier-)
- [Editing: DaVinci Resolve 16](https://www.blackmagicdesign.com/products/davinciresolve/)
- [Video Transcoder: Handbrake](https://handbrake.fr/)
- [Image Editing for Thumbnails: Affinity Photo](https://affinity.serif.com/en-us/photo/)

OBS is one of the best and easiest programs to get you started with live streaming. It's free, open source, and available for Windows, Mac, and Linux. There is also an alternative version called Streamlabs OBS which is a bit more user friendly and operates more or less the same way as OBS. Since I am using a Mac OS Catalina, there are couple of things to note with OBS. It requires extra permissions to record audio that you'll need to give OBS, and you'll need iShowU Audio, which allows you to capture your Mac desktops audio, so if you're playing music during intermissions or something like that you'll need this program. There is also currently a bug at the time of writing this that if you type in a password on Mac it'll crash OBS, whether it be the system or browser password typed in. As far as I am aware, Windows does not have these issues.

As I stated above, I like to edit the recordings of the stream to fix any audio issues that may have occurred, and cut down the talks to just the content instead of any intermissions or technical difficulties. For editing, DaVinci Resolve 16 is the current software I like to use for a couple of reasons. One, its free version has 95% of the paid versions features and gets updated. Two, it has a lot of built-in features I need to edit, like audio manipulation and plenty of video editing tools.

With OBS I also record in the mkv file format, because one of the benefits of recording in mkv format is if you are also streaming at the same time and the stream goes down or OBS crashes for whatever reason the recording will not be lost, unlike how it is when recording in MP4 file format. The only catch with mkv is if you're recording on a Mac and you want to watch the recording or upload it to YouTube, you'll need to convert it into a compatible format. That's where Handbrake comes in. If you're on windows, you won't need to convert the mkv file unless you still would like to edit the video.

Handbrake is an open-source video transcoding software that allows you to convert mkv, or any other video file formats, into a usable file format like MP4. It's a super simple program that has a ton of preset output formats so you can pick one already ready for YouTube if you don't plan on editing the videos.

Finally, I also like create consistent thumbnails for the videos so that viewers know exactly what the talks are about and I use Affinity Photo to do this. It's a cheaper alternative to Photoshop but has all of the same features. I'd recommend a consistent thumbnail format that matches your group's branding.

## Stream/Recording Settings

The last part I want to go over is the stream and recording settings I use for OBS, and mention some additional resources if you want to learn more about streaming technology and software. There's a lot you can do with OBS, and I am by no means an expert with it and would highly recommend that you do additional research about optimizing your streaming settings. One channel I recommend is [EposVox](https://www.youtube.com/eposvox) who has a huge OBS master class that I watched to get further knowledge of all the OBS settings. Nonetheless, let's dive into my OBS settings that should get you started with a good quality stream. The following are the settings I currently have configured in the OBS settings menu.

**Video**

- Base Canvas Resolution: 1920x1080
- Output Scaled Resolution: 1920x1080
- Downscale Filter: Bicubic (Sharpened Scaling, 16 samples)
- Common FPS Value: 30

**Audio**

- Sample Rate: 48kHz
- Channel: Stereo
- Mic/Auxiliary Audio: iShowU Audio Capture (For Desktop sound capturing)
- Mic/Auxiliary Audio 2: USB Audio Codec (USB Mixer Audio)

**Output**

- Output Mode: Advanced
- **Streaming Tab**
  - Audio Track: 1
  - Encoder: x264
  - Enforce streaming service encoder settings: Checked
  - Rescale Output: Unchecked
  - Rate Control: CBR
  - Bitrate: 3800 kbps
  - Use Custom Buffer Size: Unchecked
  - Keyframe Interval: 2
  - CPU Usage Preset: Fast
  - Profile: Main
  - Tune: none
  - x264 options: Left Blank
- **Recording Tab**
  - Type: Standard
  - Recording Path: Wherever you want your recordings to go
  - Generate File Name without Space: Checked
  - Recording Format: mkv
  - Audio Track: Only 2 Checked
  - Encoder: Apple VT H264 Hardware Encoder, you can use the same encoder as your stream settings if you like
  - Rescale Output: Unchecked
  - Customer Muxer Settings: Left Blank
  - Bitrate: 15000 kbps, bitrate based on your encoder capability for recording
  - Limit Bitrate: Unchecked
  - Keyframe Interval: 2
  - Profile: high
  - User B-Frames: Checked
- **Audio Tab**
  - Track 1
    - Audio Bitrate: 160
    - Name: Twitch Downstream
  - Track 2
    - Audio Bitrate: 320
    - Name: Recording Downstream
- **Replay Buffer Tab**
  - Enable Replay Buffer: Unchecked

A couple of things I want to point out. If you are streaming for the first time, I would aim to have an output resolution of 720p 60fps to start with, since you only need about 5mbps upload for a super consistent stream at a fast CPU usage preset. Once you gauge your bandwidth limit at the place you're recording then you can look to increasing the quality or usage preset. You want your viewers to have a good viewing experience though so 720p60 is more than sufficient for getting started. I upped my resolution to 1080p30 recently to gain the benefits of my recording camera and found that I had the bandwidth available to record with those settings and still have a stable stream. Also, be sure to set your canvas to a scaled resolution that matches the layout you want to use. If you plan on having a 16:9 layout, then use a 1920x1080 canvas or similar and scale your output resolution appropriately.

## Conclusion

I hope this little guide helps and that you too can start recording/streaming great content from your events or meetups. If you have any other questions feel free to get in touch with me on Twitter. I wanted to make this guide to give some others direction since A/V setups can be tricky at live events. Don't stress if the first recording or live stream isn't 100% where you would like it, it took me a lot of trial and error to finally get to a spot where I am happy and really proud of the content we produce now at Jamstack Denver.

Best of luck in your own A/V endeavors!
