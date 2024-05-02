---
tags:
  - Orga2
  - cheatsheet
  - exam
title: Cheatsheet Parcial 1
aliases:
  - Cheatsheet Parcial 1
---
## Useful Links

- x86 instruction reference: [Link](https://www.felixcloutier.com/x86/)
- \[PDF\] Intel reference manual: [Link to full manual](https://cdrdv2.intel.com/v1/dl/getContent/671200)
	- [[intel_volume_1.pdf]]: Describes processors' architecture and programming environment supporting IA-32 and Intel® 64 architectures.
	- [[intel_volume_2.pdf]]: This document contains the full instruction set reference, A-Z, in one volume. It describes the format of the instructions and provides reference pages for them. A functional cross-volume table of contents, references, and index allow for easy navigation of the instruction set reference.
	- [Volume 3](https://cdrdv2.intel.com/v1/dl/getContent/671447) and [Volume 4](https://cdrdv2.intel.com/v1/dl/getContent/671098) are not needed for this exam. 
- NASM documentation: [Link](https://www.nasm.us/doc/) 
- SystemV ABI: [[sysv_abi.pdf]], my version: [[systemv-abi]]
- C Convention (Spanish, from a teacher): [[convencion_c.pdf]]


## Arguments and register volatility in 64 bits

### Non volatile registers: 
```asm 
RBX, RBP, R12, R13, R14, R15
```
### Return values:
```asm
RAX ; integers, pointers
XMM0 ; floats
```
### Arguments
```asm
RDI, RSI, RDX, RCX, R8, R9 ; in order
XMM0, XMM1, ..., XMM7 ; floats
PUSH <...> ; if no more registers are available
```

### Stack
All `PUSH/SUB` needs their `POP/ADD`
When calling a function, ensure stack aligned to 16 Bytes.

## Prologue and epilogue

```asm
function_definition:
	PUSH rbp
	MOV rbp, rsp

	; CODE

	POP rbp
	RET
```
