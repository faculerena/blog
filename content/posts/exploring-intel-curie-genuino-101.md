---
title: Exploring Intel Curie boards.
tags:
  - Orga2
  - project
  - Genuino101
  - WIP
aliases:
---
*This is a work in progress.*

-----------------------

# Exploring an Intel Curie board: Genuino 101.

I'm doing Organización del Computador 2 (computer organization) course in UBA, and I remembered that a few years ago (probably 2016 or 2017), in an Arduino event in Buenos Aires I won a Genuino 101 board. Why is that relevant to the course? Is based on Intel x86 architecture, and so is the [Genuino 101](https://www.intel.com/content/www/us/en/products/sku/92346/genuino-101/specifications.html). 

## Arduino boards

Generally, Arduino boards have an [ATMEGA328P](https://www.microchip.com/en-us/product/atmega328p), but this weird Intel version has an Intel Quark SE microprocessor, that's a Pentium x86 ISA compatible processor without x87 floating point unit. 

## Arduino Vs. Genuino

A few hours into this I discovered that Genuino and Arduino are the same thing branded different, so I can look up Arduino 101 documentation. Looking up for "Genuino 101" documentation, datasheets, or Intel resources is pretty hard, as every site (genuino.cc, Intel downloads, etc.) is either down or barely useful. 

## The idea

We are writing a kernel. I have an x86 targeted to makers. I found the [101 original firmware](https://web.archive.org/web/20191118204203/http://downloadcenter.intel.com/download/25832/Arduino-101-Firmware-Package-1-0). SOMETHING can be done here, I just don't know what yet. 

Maybe I can run that kernel outside QEMU on real hardware. Maybe I have a cool final project for the course. Maybe I don't have anything, but I need to try.

In the worst case I learn a few things about the Curie chips and why Intel left the maker space, toy with a cool board and maybe run something (someone mentioned to me Doom)


## The weird other idea

I like fuzz testing. Last year I did a small intensive course on compiler fuzzing, and this year I worked both on a compiler and a program fuzzing tool (in this case it was smart contract related). Can I write a *fuzzer* for this processor? I know it's probably impossible as this is not a random origin processor but an Intel one, but wouldn't be cool to find a bug directly in hardware? Also this board has Bluetooth LE (BLE), can that connection be used as an entry-point to test the chip? I don't know, yet. 

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