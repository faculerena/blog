---
tags:
  - Orga2
  - cheatsheet
  - exam
title: Cheatsheet Parcial 2
aliases:
  - Cheatsheet Parcial 2
---
# Resumen prácticas

## Pasaje a modo protegido

### Bootloader de la materia
![[bootloader.png]]
1. Se copia el bootloader a la posición `0x1000` 
2. Busca y carga el archivo kernel.bin contenido en el diskette y lo copia en la dirección `0x1200` 
3. Se salta hacia la dirección `0x1200` y se ejecuta desde ahi


### Segmentación

![[Segmentacion.png]]

Segment selector
![[segment_selector.png]]

**CS:** Code segment
**SS:** Stack segment
**DS:** Data segment
**ES:** (Extra) data segment
**GS & FS:** General purpose segments

Segment descriptor
![[segment_descriptor.png]]

### Pasar a modo protegido

- Completar la GDT 
- Deshabilitar interrupciones 
- Cargar el registro GDTR con la direcci+on base de la GDT 
- Setear el bit PE del registro CR0 
- FAR JUMP a la siguiente instrucción
```x86
JMP <selector>:<offset>
;; el offset da igual
```
- Cargar los registros de segmento (DS, ES, GS, FS y SS)

## Interrupciones
![[big_picture_IDT_resaltada.png]]
![[stack_pre_post_interrupt.png]]![[interrupt_gate.png]]

- **Offset** que va a ser la dirección de memoria donde comienza la rutina de atención de interrupción. 
- **Segment selector** que indica qupe selector debe utilizarse al ejecutar el código de la rutina. 
- **P,DPL** que indican si la rutina se encuentra en memoria o no y el nivel de privilegio, respectivamente. 
- **Bits 8 a 12** de los bytes 4 a 7 indican el tipo específico de la compuerta de interrupción, el bit D indica si es una compuerta de 32 o 16 bits.


### Ejemplo override interrupción para responder al teclado

```asm {10-14}
global _isr33
_isr33: ;rutina de atención del teclado
  pushad
  ; 1. Le decimos al PIC que vamos a atender la interrupción
  call pic_finish1
  ; 2. Leemos la tecla desde el teclado y la procesamos
  in al, 0x60
  push eax
  
  cmp al, 0x8F
  jne .no_es_soltar_tab
  call swap_video_page
  .no_es_soltar_tab:
  call tasks_input_process
  
  add esp, 4
  popad
  iret
```

### Ejemplo de implementación de una syscall

```asm
global _isrXX 
;; ... 
_isrXX: 
	pushad 
	;; ... 
	popad 
	iret
```

Son interrupciones de software que no necesitan avisarle al PIC, por ejemplo para acceder a la syscall 10 se hace
```asm
int 0xA
```


## Paginación




# Info dump

Address virtual a física

![[virt-to-phys.png]]