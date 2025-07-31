# SimHub OverlayTemplates

(Warning! Some text can only be seen for your browser's dark mode!)  
Last Update: July 31, 2025

## Contents

- [SimHub OverlayTemplates](#simhub-overlaytemplates)
  - [Contents](#contents)
  - [Introduction](#introduction)
    - [CN Intro / 介绍](#cn-intro--介绍)
    - [EN Introduction](#en-introduction)
  - [ACC Specified / 《神力科莎：争锋》特制](#acc-specified--神力科莎争锋特制)
    - [ABS Tag](#abs-tag)
    - [TC Tag](#tc-tag)
    - [Engine Tag  (Still Working on details)](#engine-tag--still-working-on-details)
    - [Time Delta](#time-delta)
    - [ACC NSX GT3 Dash](#acc-nsx-gt3-dash)
    - [ASCENT - RPM](#ascent---rpm)
    - [ASCENT - Speed](#ascent---speed)
    - [ASCENT - Gear](#ascent---gear)
    - [Linear Pedals](#linear-pedals)
    - [Suspension Dynamics](#suspension-dynamics)
    - [Tyre Monitor](#tyre-monitor)
  - [Some Other Dashboard Projects](#some-other-dashboard-projects)
    - [Simple Input Keyboard](#simple-input-keyboard)
    - [WMMT 6 - GReedy Tachonometer](#wmmt-6---greedy-tachonometer)
  - [Other Contents](#other-contents)

## Introduction

### CN Intro / 介绍

erm 我还不知道这个应该怎么写比较好...

- 如何使用？  
将下载的文件夹放入SimHub主目录下的 `\DashTemplates` 中，
重新启动SimHub就可以看到新加装的仪表小组件了！

### EN Introduction

erm really idk how to write a proper welcoming introduction..

- Where to put?  
Download the ***folders*** you wish and place it inside `\DashTemplates` under the main program folder.  
Go to anywhere and back to the tab of small layouts and you will see the newly-added dash!

if still not appearing on the list of layouts please restart the SimHub.

## ACC Specified / 《神力科莎：争锋》特制

Featured Overlay Tags Available:

- Basic ECUs: ABS, TCS, Engine Map & Brake Bias
- Time Delta
- Throttle input
- Tachonometer such as throttle/brake, gear indicator, RPM, speed digits.

### ABS Tag

A simple ABS tag showing the ABS level and brake bias, with every change to bias it would be highlighted. When ABS is triggered all digits will flash.

![Image of ABS Tag](/ABS%20Tag/ABS%20Tag.djson.00.png)

### TC Tag

A simple TC tag showing the TC level and TC Cut. When TC is triggered all digits will flash.

![Image of TC Tag](/TCS%20Tag/TCS%20Tag.djson.00.png)

### Engine Tag  (Still Working on details)

The engine tag shows current engine map, car model and their meanings about each map. Some cars might not have specified documentation for each map!

Now available cars:

- Honda NSX GT3 EVO
- Mclaren 650s GT3
- Mclaren 720s GT3 Evo
- Audi R8 GT3 Evo 2
- Lambo Huracan Evo 2

Available language:  简体中文 / Simplified Chinese, English  
To switch language you still need to dive into studio and change the reference source for this widget.

![Image of Engine Tag](/Engine%20Tag/Engine%20Tag.djson.png)

### Time Delta

Showing the current position, current lap, last laptime, and delta to all time best (PB)

- PB (personal best) here repr for the fastest valid laptime you achieved with this car recorded by SimHub. Say like you made your fastest laptime using *car 1* is 1:49.205 and *car 2* is 1:47.895, if you are driving *car 2* the time delta will use 1:47.895 as referrence.  

![Image of Simple Time Delta Tag](/Time%20Delta/Time%20Delta.djson.00.png)

### ACC NSX GT3 Dash  

Last Update: `July 26, 2025`  
A complicated dash inspired by NSX GT3 Tacho.

![Image of the dash](/NSX%20GT3%20-Overlay/NSX%20GT3%20-Overlay.djson.00.png)

### ASCENT - RPM

A rpm tag in addition with upshift indicator. Can be changed car by car through SimHub Overlay Setups.

![Image of RPM Tag](/Ascent%20-%20RPM/Ascent%20-%20RPM.djson.png)

### ASCENT - Speed

This is a tag simply showing speed in Kph. If you are using mph you need to change input slot after downloaded..

![Image of Speed Digit](/Ascent%20Set%20-%20Speed/Ascent%20Set%20-%20Speed.djson.png)

### ASCENT - Gear

Showing which gear is in right now and current session(Still improving)

![Image of Engine Tag](/Ascent%20Set%20-%20Gear/Ascent%20Set%20-%20Gear.djson.png)

### Linear Pedals

Showing pedal inputs as well as a trend graph.

![Image of the Tag](/Linear%20Pedals/Linear%20Pedals.djson.png)

### Suspension Dynamics

Showing status of the suspension system on live.

![Image of the Tag](/Suspension%20Dynamics/Suspension%20Dynamics.djson.png)

### Tyre Monitor

a simple tag measuring tyres in action, include:

- rotation speed.  
- Brake temperature
- tyre temperature (IMO still working)
- tyre Pressure
- (More to work on with grip vector)

![Image of the Tag](/Tyre%20Monitors/Tyre%20Monitors.djson.png)

## Some Other Dashboard Projects

### Simple Input Keyboard

Last Update:  

![Image of Simple Input Keyboard](/Simple%20Input%20Keyboard%20-%20FH5/Simple%20Input%20Keyboard%20-%20FH5.djson.00.png)

### WMMT 6 - GReedy Tachonometer

Include the Turbo gauge and the Tachonometer

![Image of Simple Input Keyboard](/湾岸6R%20-%20Digit%20Speedo/湾岸6R%20-%20Digit%20Speedo.djson.00.png)
![Image of Simple Input Keyboard](/WMMT%20Boost%20Gauge/WMMT%20Boost%20Gauge.djson.00.png)

## Other Contents

This folder may also contain additional overlay templates, resources, and configuration files not listed above. These can include custom images, scripts, or documentation to support and enhance your SimHub dashboard experience.
