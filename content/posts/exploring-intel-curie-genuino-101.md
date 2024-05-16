---
title: "Exploring an Intel Curie board: Genuino 101"
tags:
  - Orga2
  - project
  - Genuino101
  - WIP
aliases:
  - "Exploring an Intel Curie board: Genuino 101"
---
*This is a work in progress.*

----------------


I'm doing Organización del Computador 2 (computer organization) course at the UBA, and I remembered that a few years ago (probably 2016 or 2017), at an Arduino event in Buenos Aires I won a Genuino 101 board. Why is that relevant to the course? The course it's based on Intel x86 architecture, and so is the [Genuino 101](https://www.intel.com/content/www/us/en/products/sku/92346/genuino-101/specifications.html). 

## Arduino boards

Generally, Arduino boards have an [ATmega328P](https://www.microchip.com/en-us/product/atmega328p), but this weird Intel version has an Intel Quark SE microprocessor, that's a Pentium x86 ISA compatible processor without x87 floating point unit. 

## Arduino Vs. Genuino

A few hours into this I discovered that Genuino and Arduino are the same thing branded differently, so I can use Arduino 101 documentation. Finding documentation, datasheets, or Intel resources for Genuino 101 is pretty hard, as every site (genuino.cc, Intel downloads, etc.) is either down or barely useful. 

## The idea

We are writing a kernel. I have an x86 targeted to makers. I found the [101 original firmware](https://web.archive.org/web/20191118204203/http://downloadcenter.intel.com/download/25832/Arduino-101-Firmware-Package-1-0). SOMETHING can be done here, I just don't know what yet. 

I would like to run that kernel outside QEMU, on real hardware. It could be a cool final project for the course. It may work, or it may not, but I want to try.

In the worst case I will learn a few things about the Curie chips and why Intel left the maker space, toy with a cool board and maybe run something on it (someone mentioned Doom).


## The other idea (the weird one)

I like fuzz testing. Last year I did a small intensive course on compiler fuzzing, and this year I worked both on a compiler and a program fuzzing tool (in this case it was smart contract related). I want to write a fuzzing tool for a processor. This particular processor is not a generic one, but an Intel processor, so it is unlikely to have any bugs, but it’s a great learning experience to try to find bugs and vulnerabilities in it. Since this board has Bluetooth LE (BLE), maybe that connection can be used as an entry-point to test the chip.


## Link dump

https://github.com/intel/CODK-A

https://web.archive.org/web/20191118204203/http://downloadcenter.intel.com/download/25832/Arduino-101-Firmware-Package-1-0

https://blog.arduino.cc/2016/04/21/intel-releases-the-arduino-101-firmware-source-code/

https://www.intel.com/content/www/us/en/developer/articles/technical/intel-quark-se-microcontroller-c1000-documentation.html

https://www.intel.com/content/www/us/en/products/sku/92346/genuino-101/specifications.html

https://www.sparkfun.com/products/retired/13984

https://cadlab.io/blog/arduino-101-genuino-101-perfect-successor-uno

https://forum.arduino.cc/t/x86-core/410185

https://docs.arduino.cc/retired/boards/arduino-101-619/

https://dl.acm.org/doi/full/10.1145/3538644

https://github.com/V33RU/IoTSecurity101