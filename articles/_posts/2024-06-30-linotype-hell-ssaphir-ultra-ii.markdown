---
layout: post
title: The Linotype-Hell Saphir Ultra II - Using an Ancient Film Scanner in 2024
description: Can you really save $$$ and get good results using old film scanners?
tags:
  - scanners
---

Up until a few weeks ago, I always "scanned" my medium and large format film
with a digital camera mounted on a copy stand, facing a light pad. This process
is commonly referred to as _DSLR scanning_ and I am sure the typical reader of
this site has at least heard of it. Disliking the finicky and often imprecise
nature of the workflow, I started looking for something better, less fussy.
Ideally, a drum scanner. But considering the cost of getting (and maintaining!)
one, I opted for a flatbed scanner instead. It would need to provide a usable
resolution, Dmax value and a transparency unit big enough to fit one 9x12cm film
sheet. Thinking economically, I wanted to get a solution that was inexpensive.
The more modern Epson scanners which fulfill the criteria were all far out of my
budget. A YouTube video of someone "reviving" a 90s flatbed scanner and putting
it back to normal use for film scanning got me thinking. The results they were
getting were convincing. I started researching the topic and which models fit my
criteria and ended up with a _Heidelberg/Linotype-Hell Saphir Ultra II_, which I
acquired for a slim 50€.

### Overview of the Scanner

My Linotype scanner has an optical resolution of 1200x2400 DPI and a Dmax value
of 3.4, sporting 42 bit color depth. A big advantage of this scanner is its
massive transparency unit: transparent originals can be up to 254x216mm in size!
Non-transparent originals can even be slightly larger. Scanning large format and
panoramic film is no issue with this scanner. Of course, more modern scanners
feature better specifications, but that is to be expected, considering its age.

The Saphir shines (pun intended) with large slides and negatives. It delivers
usable images of roughly 10MP when scanning 6x7cm slides and is excellent with
9x12cm large format originals. For 35mm, its resolution is too low. 35mm scans
lack too much detail in order to be useful. However, I already have my Nikon
Coolscan for those, so that is of no concern (to me).

<div id="photo-grid">
  <div class="photo-container">
    <a href="/assets/img/support/saphir-ultra-ii-full.jpg">
      <img class="photo" src="/assets/img/support/saphir-ultra-ii-full.jpg" alt="Full scan">
    </a>
    <p>6x7 negative scan (Fujicolor NPC 160, Mamiya RB 67)</p>
  </div>
  <div class="photo-container">
    <a href="/assets/img/support/saphir-ultra-ii-crop.jpg">
      <img class="photo" src="/assets/img/support/saphir-ultra-ii-crop.jpg" alt="Cropped scan">
    </a>
    <p>Detail crop of the same scan. Decide whether that is enough detail for
    you.</p>
  </div>
</div>

Its dynamic range is totally sufficient for most cases.

Infrared dust/scratch correction is dearly missed on the Saphir. All debris and
scratches have to be painted out manually, by hand. This can take a lot of time
and slows down the scanning process considerably. It makes the process more
manual as well.

A benefit commonly overlooked with this scanner is that it allows the operator
to remove the glass for cleaning. Dust builds up on the inside and makes the
scans dirty right away. With the Saphir, it can easily be cleaned to avoid that.

If you are low on space where you live, the Linotype might be a bad choice: it
is gigantic. It is considerably larger than most other flatbed scanners you
might know. Also, it is heavy as a tank: 12.5kg. The case is plastic and
beautifully designed. It has that certain "90s office look" with its bright,
slightly beige housing, full with gray and teal accents and the dot pattern on
the lid. The font choice of the text on the case only adds to that. I realize
this look might not be for everyone but I love it.

### Setup

#### SCSI, USB and FireWire

Some old scanners are controlled via SCSI, the Saphir being one of them. Others,
like the Nikon Coolscan IV ED, are controlled via USB or FireWire. The latter
kind is typically easy to operate on modern hardware. USB does not need any
adapters or the like and is present on virtually every Mac or PC of the past 20+
years. FireWire can easily be adapted to Thunderbolt or USB-C. SCSI is
different:

Although there used to be USB SCSI controllers, they have become very hard to
find these days. Some eBay sellers charge hundreds of euros for one! Do not be
fooled by parallel to USB adapters. Even though they look similar, they are not
compatible! This situation limits you to using something like an old PCI
controller card which are often times hardly supported on modern systems, either
because there are no PCI sockets on their motherboards to begin with or because
their operating systems have no compatible drivers anymore.

Also keep in mind that there were a few different SCSI connectors. Make sure
your cable has the right plugs on both sides. I found that getting a specific
SCSI cable can be quite expensive, especially online. Try asking around in your
family or search for an old computer cables lot.

If you are totally new to SCSI and consider getting such an old scanner, make
sure to read up about it first to figure out what you need to get it right and
how everything works. SCSI requires termination and device IDs to be set; not
something we are used to these days with the comfort of USB!

#### Scan Software

Then, there is the scan software aspect: the software written for those scanners
is just as ancient as they are, meaning that there typically are no builds that
support current operating systems. Luckily, there is third party software like
Vuescan or Silverfast. Especially the latter can be quite expensive to purchase
a license for. Vuescan is relatively cheap in comparison. The developers of such
software reverse engineer the control protocols of old scanners and build a nice
user interface around them, all working on modern day systems.

#### Computer Hardware

I, as a Mac user, was totally out of luck when it came to connecting to an SCSI
scanner. My M1 MacBook Air certainly does not allow me to add an SCSI controller
card to it and since USB controllers are scarce, I instead opted to scan with a
separate computer that allows me to install an SCSI controller. I went with an
old (2005-ish) PC that shipped with Windows XP.
Exactly what I needed! It has good specifications for its time but I still
doubled up its memory to a massive two gigabytes of first-gen DDR RAM and
installed the required SCSI controller. I went with an _Adaptec AVA 2904_ PCI
card. When choosing an SCSI controller, make sure that your chosen operating
system is compatible with it. Windows XP has drivers for mine on-board and
installed them automatically.

Of course, if you are getting a separate PC setup just for scanning, do not
forget to do proper monitor calibration on that system as well.

The computer (incl. peripherals) was free, the additional memory cost me 2.50€
and the controller card another 10€. The SCSI cable was 4€.

#### Vuescan

I could not find a copy of the original _Linocolor_ scan software for Windows.
On the Internet Archive, there is only a copy for classic Mac OS and I could not
find a CD-ROM of it for sale anywhere. So, I opted to install Vuescan on the XP
machine. I went with an older build from the Vuescan website as current versions
of it do not support XP anymore. Luckily, my newer activation keys worked with
this older Vuescan build. There is no internet connection required for product
activation.

Vuescan also allows for IT8 color calibration, by the way. Important for
scanning color positives!

#### File Transfer

As for getting the scan files off and Vuescan onto the old computer, I opted for
a "one to one" Ethernet connection between my modern Mac and the XP machine. If
you do not know what I am talking about: I connected the two machines' network
cards directly together with an Ethernet cable and configured their interfaces
to be on the same subnet. Then, it was only a matter of creating a _shared
folder_ on the Windows PC and mounting that via SMB in the Finder on the Mac. I
think this approach causes a lot less headache than constantly swapping USB
sticks between the two (also keep in mind the varying file system support that
becomes entirely irrelevant when copying files over the network).

### Similar Models

Of course, there were many other similar scanner models around when my Saphir
came out. Some are better than others and proper documentation can be scarce. I
would suggest reading reviews from back in the day on photo forums and looking
up the manufacturer's website on the [Wayback Machine](https://web.archive.org/)
in order to search for data sheets.

Besides Heidelberg/Linotype-Hell, have a look at Agfa and Microtek scanners,
especially.

### Conclusion

If you are willing to go through all the trouble, you will receive what I think
are very solid results for a fraction of the price of a more modern setup.

The entire process is certainly not hassle-free but doable. Will a drum or
high-end modern flatbed scanner outperform some old flatbed scanner? Sure, it
will, but only at a massively higher price tag. Keep in mind that I paid less
than 100€ for my setup!

In the end, it comes down to what you are trying to achieve, really. I mainly
publish my photos to the web, for which this scanner already is overkill. Even
when doing prints, up to a certain size, this scanner will do just fine. If only
it had ICE...
