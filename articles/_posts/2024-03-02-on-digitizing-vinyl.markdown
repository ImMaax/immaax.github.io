---
layout: post
title: On Digitizing Vinyl
description: My thoughts on and a guide to digitizing old vinyl records
tags:
  - audio
---

If you are like me and own a substantial collection of old vinyl, the thought of
digitizing it all for playback on the go, for example, might have crossed your
mind. Here I summarize my experiences and thoughts on the digitization process
and provide a bit of a guide.

Keep in mind that this is just _my_ experiences. Your mileage may vary.

### Is it really worth it?

In most cases? Probably not.

Sure, at first it appears to make sense: You already own the music on vinyl, so
why not make digital copies from _that_, instead of getting a new digital copy
which might even cost you money _again_?

#### Issues

Digitizing your record collection takes a lot of time. Unlike audio CDs, you
cannot really record your records at higher speeds than they were intended to be
played back at.
This means that for a record that's 30 minutes of length, you will need to spend
30 minutes recording it. That quickly adds up as you are digitizing more and
more records.
What is more, you will likely have to "babysit" the entire process to ensure no
skips or idling in the runout groove are happening, meaning that you will really
have to _dedicate_ time to the recording process and cannot handle it as just a
"background task", all the while spending your time otherwise.

Also, do not forget about all the extra effort you will have to invest before
and after the recording (more on that below).

Unless your records were perfectly cared for, they will carry audible noise, be
that clicks and pops, general surface noise or heavy sibilance distortion caused
by groove wear. That noise is hard to get rid of and annoying to listen to.
Manual click and pop repair takes a lot of time and careful effort and automatic
software solutions can be costly and sometimes produce a loss in fidelity.

What also matters a lot besides the condition of your records is the equipment
you are using in the digitizing process. If all you have is entry-level audio
equipment, chances are your recordings are going to sound subpar. Again, more on
that below.

Considering all those issues, I argue that it only really makes sense to
digitize records that carry rare, otherwise unobtainable audio and are in at
least listenable condition. Digitizing popular material is typically not worth
the struggle.

If you are still interested in digitizing your records despite all the issues
mentioned above, keep on reading.

### Equipment and Preparation

As mentioned earlier on, preparation is required. Before starting, make sure
you are using well-performing equipment. If you have been thinking of getting
some upgrades, now is a good time.

Your turntable should be able to maintain a constant speed with as little wow
and flutter as possible as wow and flutter cause speed/pitch variations in the
audio. A quartz-locked turntable is ideal. Note that most cheap direct drive
turntables have significant motor noise which may be noticeable in your final
recording. I use a Technics SL-1210 MK2 direct drive quartz-lock turntable, the
classic DJ tool.

Make sure the tonearm is aligned properly and that you are using a quality MM or
MC pickup system with a needle that has relatively little wear. If you have not
replaced your pickup's needle in a while, now might be a good time to do so.
Remove any lint from the needle if any has built up.
Also ensure proper alignment of your cartridge if yours is not of the integrated
"Concorde-style" variety. Switch to a rubber mat if you are using a slipmat at
the moment to improve pitch stability. Ensure proper speed calibration by using
your turntable's strobe if it has one. Alternatively, you can use a strobe disc
or even an app on your phone.

Do not underestimate the difference cleaning your records makes. Even if your
records look fairly clean to the eye, a good clean reduces unwanted noise
considerably. Cleaning by hand using a proper record washing liquid and a cloth
will work fairly well but I have found that machine cleaning still renders a
slightly better result. Because record cleaning machines are quite costly, many
record stores offer a cleaning service against a small fee. One record store
near me even allows you to use their cleaning machine for free if you ask
nicely.

Also, choose a good phono preamplifier and digital audio interface. Although a
good hifi receiver with a tape output should suffice, one could also use a
discrete preamp. There are units that combine a preamp and a digital interface
as well which can be a good choice if you do not already have a receiver or a
preamp. Keep in mind to use a preamp that fits your pickup and a digital
interface that supports your desired bit depth and bitrate. Pretty much every
half-way modern interface should support red book CD quality (16 bit/1440 kbps),
which I personally deem enough for this application.

As for recording software, use whatever you like. I personally use
[ocenaudio](https://www.ocenaudio.com/en/) but good old
[`sox`](https://sourceforge.net/projects/sox/) would suffice as well. One
argument in favor of using GUI-based software is that it allows you to inspect
and edit the recorded waveform visually.

### The Recording

I encode my recordings in FLAC. If you are working with Apple Music (formerly
iTunes), encoding in Apple Lossless might be smarter. Use a codec that is
convenient for playback with your equipment. Using lossless audio codecs is
recommended here as lossy ones like MP3 will degrade your recording
drastically. Invest the extra hard drive space and go lossless, it is worth it.

Apart from that, avoid walking around the turntable or causing other vibrations
while the recording is taking place. Depending on how you set everything up,
your recording will be more or less prone to vibrations causing unwanted noise.

### Post Recording

After the recording is finished, you may wish to do further processing. Trimming
the silence off the beginning and end is quickly done and is something I
recommend.
Furthermore, I recommend normalizing the recording volume for a more consistent
listening experience.

If you have got a bit more time to spare, try looking for loud pops and clicks
and silence them. Unless they are too obtrusive to the listening experience, you
can typically skip this step.

Some like to equalize or add further automatic noise reduction, but I skip those
steps. If you feel those steps are necessary, go ahead and apply them, but keep
in mind that noise reduction may reduce detail in the recording, especially if
applied heavily.

Finally, I add metadata tags to the audio files. I use
[kid3](https://kid3.kde.org/) for that as it has the benefit of a Discogs
integration, which allows you to source metadata from Discogs, which saves quite
some time. If you like, you can add cover pictures as well. Try checking
[MusicHoarder's Cover Service](https://covers.musichoarders.xyz/) for that or
scan the record sleeve (if available) or one of the labels yourself.

I save everything in a folder structure that looks something like this:

```
/artist/album/disc-track title.ending
```

I omit the `disc-` part if there is only one disc in a release.
Applied to track 1 of
[Johannes Heil - Calling](https://www.discogs.com/release/10136):

```
/Johannes Heil/Calling/01 Calling (Pt. 1).flac
```
