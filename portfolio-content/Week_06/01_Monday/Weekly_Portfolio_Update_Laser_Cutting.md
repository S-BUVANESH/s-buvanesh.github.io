# Weekly Portfolio Update — Laser Cutting \& 3D Printing

> \*\*Weekly Focus:\*\* Digital fabrication through \*\*laser cutting\*\* and \*\*additive manufacturing (3D printing)\*\*  
> \*\*Core outcome:\*\* Converted digital designs into physical prototypes using a CO₂ laser cutter and a Bambu Lab H2S FDM 3D printer.

\---

## 1\. Overview

This week focused on two important digital-fabrication processes:

1. **Laser Cutting** — transforming a 2D digital illustration into a physical acrylic design using a CO₂ laser cutter.
2. **3D Printing** — transforming a downloadable 3D model into a functional physical object using FDM/FFF additive manufacturing.

Both workflows followed the same broad manufacturing pipeline:

**Digital Concept → File Preparation → Machine/Slicer Setup → Process Parameters → Fabrication → Physical Prototype**

The major difference is that laser cutting generally works by **selectively removing or cutting material from a sheet**, while 3D printing **adds material layer by layer** to build a three-dimensional object.

\---

# 2\. Laser Cutting

## 2.1 What is Laser Cutting?

**Laser cutting** is a subtractive digital-fabrication process in which a focused laser beam is used to cut, engrave, or mark a material according to a digital design.

The laser concentrates a large amount of energy into a very small area. Depending on the material, power, speed, and operating mode, the material may be:

* melted,
* vaporized,
* burned,
* ablated, or
* thermally separated.

A computer-controlled motion system moves the laser along the programmed path, allowing complex geometries and detailed artwork to be reproduced with high precision.

### Basic Working Principle

```text
Digital Design
      ↓
Vector / Raster Preparation
      ↓
Machine Software
      ↓
Laser Beam Generation
      ↓
Controlled Motion of Laser Head
      ↓
Material Cutting / Engraving
      ↓
Finished Physical Part
```

\---

## 2.2 Major Laser-Cutting Methods

Laser processing can be understood by **how the material is removed** and by the **type of laser source** being used.

### A. Vaporization

The laser raises the material directly to a temperature at which it vaporizes.

**Typical use:** very fine cutting, engraving, and applications involving thin materials.

### B. Melting and Blow-Off

The laser melts the material and an assist gas removes the molten material from the kerf.

**Typical use:** metals and industrial sheet cutting.

### C. Combustion / Flame Cutting

The laser initiates heating and the material reacts with oxygen, producing additional heat that assists the cut.

**Typical use:** certain metals and oxygen-assisted industrial cutting.

### D. Thermal Stress Cracking

The laser creates a controlled thermal gradient that produces stress and causes the material to fracture along a desired path.

**Typical use:** brittle materials such as glass and some ceramics.

### E. Ablation

The laser removes a very thin layer of material through rapid heating and vaporization.

**Typical use:** surface marking, micromachining, and high-detail material removal.

\---

## 2.3 Types of Laser Cutting Systems

Another common classification is by the **laser source**.

|Laser Type|Typical Wavelength Region|Common Applications|
|-|-:|-|
|**CO₂ Laser**|Infrared (\~10.6 µm)|Acrylic, wood, MDF, paper, plastics, leather, textiles, engraving|
|**Fiber Laser**|Near-infrared (\~1.06–1.07 µm)|Metals, marking, industrial metal cutting|
|**Nd:YAG / Nd-based Lasers**|Near-infrared|Marking, micromachining, welding, specialized cutting|

### Laser Cutting Operation Modes

For a fabrication workflow, the software may distinguish between:

* **Scan / Engrave:** raster-style movement used to mark or engrave an area.
* **Cut:** follows vector paths to cut completely through the material.
* **Combined workflows:** use engraving/scanning and cutting in the same job.

\---

# 3\. Our Laser-Cutting Workflow

## 3.1 Material

I worked with **acrylic sheet** and created two physical variants:

* **Black Acrylic**
* **Transparent Acrylic**

Using two different acrylic finishes helped compare how the same geometry behaves visually on different materials.

\---

## 3.2 Software Used — RDWorks V8

**RDWorks V8** was used to prepare and control the laser-cutting job.

The software was used for tasks such as:

* importing the prepared vector file,
* positioning the artwork,
* defining cutting and scan/engraving operations,
* assigning different processing modes,
* arranging the design on the material,
* setting the required machine parameters,
* and sending the final job to the laser cutter.

\---

## 3.3 Arthur Morgan Design Preparation

The laser-cut project started from an **online reference image of Arthur Morgan**.

The workflow was:

```text
Online Reference Image
        ↓
Image Converted into Illustration
        ↓
Illustration Simplified for Fabrication
        ↓
Vector Conversion
        ↓
DXF Export
        ↓
Import into RDWorks V8
        ↓
Scan + Cut Operations
        ↓
Laser Cutting
        ↓
Acrylic Prototype
```

### Step-by-Step

### Step 1 — Reference Image

I selected a suitable image of **Arthur Morgan** as the visual reference.

The original image was not directly sent to the laser cutter because a laser cutting system requires geometry that can be interpreted as paths or raster information.

### Step 2 — Illustration Conversion

The image was transformed into a **stylized illustration**.

This step was important because the final design had to be simplified enough for fabrication while still retaining the recognisable visual features of the subject.

### Step 3 — Vectorization

The illustration was converted into vector geometry so that the outlines could be used for fabrication.

### Step 4 — DXF Conversion

The vector design was exported as a **DXF (Drawing Exchange Format)** file.

DXF is widely used to exchange 2D geometric data between CAD, drafting, vector, and fabrication software.

### Step 5 — Import into RDWorks V8

The DXF file was imported into **RDWorks V8**, where the geometry was positioned and prepared for the laser machine.

### Step 6 — Assigning Processing Modes

Different parts of the design were assigned to different operations:

* **Scan mode** for engraving / raster-style marking.
* **Cut mode** for vector-based cutting through the acrylic.

This allowed the final piece to contain both detailed surface information and an actual cut outline.

\---

# 4\. Laser-Cutting Parameters That Matter

The quality of a laser cut is not controlled by one parameter alone. Important variables include:

|Parameter|Effect|
|-|-|
|**Laser Power**|Controls the amount of energy delivered to the material|
|**Cutting Speed**|Controls how long the laser interacts with a location|
|**Frequency / Pulse Settings**|Influences energy delivery and edge characteristics|
|**Focus**|Determines how concentrated the laser spot is|
|**Material Thickness**|Affects the required power-speed combination|
|**Air Assist**|Helps control smoke, debris, and cutting performance|
|**Path Order**|Can influence heat accumulation and dimensional accuracy|

For the practical work, the machine was configured according to the acrylic material and the available machine settings rather than using a single universal parameter set.

\---

# 5\. Advantages of Laser Cutting

### Precision

Laser systems can reproduce fine outlines and detailed geometry with good repeatability.

### Digital Workflow

A digital design can be transferred directly into a physical fabrication process with minimal manual intervention.

### Complex Geometry

Intricate shapes, lettering, illustrations, holes, and decorative patterns can be produced relatively easily.

### Fast Prototyping

For suitable sheet materials, laser cutting can turn a digital design into a physical prototype very quickly.

### Repeatability

Once the file and machine parameters are established, multiple pieces can be produced consistently.

### Contactless Processing

The laser itself does not physically touch the workpiece during cutting, reducing mechanical tool wear on the material.

\---

# 6\. Disadvantages of Laser Cutting

### Material Restrictions

Not every material is safe or suitable for laser processing. Material composition must be verified before fabrication.

### Heat-Affected Edges

Because the process is thermal, edges may show:

* melting,
* discoloration,
* charring,
* or heat-affected zones.

### Fumes and Smoke

Some materials generate smoke and potentially hazardous fumes during processing, so proper ventilation and filtration are essential.

### Kerf

The laser removes a finite width of material. This **kerf** must be considered when designing press-fits, slots, or dimension-critical parts.

### Equipment Cost

Higher-power and industrial laser systems can be expensive to purchase, maintain, and operate.

### Safety Requirements

Laser systems require controlled operation, enclosure/safety measures, appropriate ventilation, and material-specific safety checks.

\---

# 7\. Laser-Cutting Result

Two physical versions of the Arthur Morgan design were produced:

|Variant|Material|Purpose|
|-|-|-|
|**Variant 1**|Black Acrylic|High-contrast, solid appearance|
|**Variant 2**|Transparent Acrylic|Lighter visual appearance with transparency effects|

### Key Learning

The most important lesson was that **a design that looks good on a screen is not automatically fabrication-ready**.

The artwork had to be simplified, converted into usable geometry, separated into operations, and tested against the physical behaviour of acrylic.

\---

# 

