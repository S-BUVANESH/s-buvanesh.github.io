# 8\. 3D Printing

## 8.1 What is 3D Printing?

**3D printing** is an **additive manufacturing (AM)** process in which a digital 3D model is converted into a physical object by depositing, curing, or bonding material layer by layer.

Unlike subtractive manufacturing, where material is removed from a block or sheet, additive manufacturing builds the object from the digital model.

```text
3D Model
   ↓
Slicing
   ↓
Layer-by-Layer Toolpath
   ↓
Material Deposition / Curing / Fusion
   ↓
Physical Object
```

The digital model is divided into many thin cross-sections. The printer then creates these layers sequentially until the complete object is formed.

\---

# 9\. Major Types of 3D Printing

3D printing technologies can be classified by the **state of the material** and the mechanism used to create each layer.

## 9.1 Filament-Based Processes

### FDM — Fused Deposition Modeling

A thermoplastic filament is heated and extruded through a nozzle.

The nozzle moves along programmed paths and deposits material layer by layer.

**Typical materials:**

* PLA
* PETG
* ABS
* ASA
* TPU
* Nylon / PA
* Polycarbonate
* Composite filaments

**Our printer uses this class of process.**

### FFF — Fused Filament Fabrication

FFF is the general terminology commonly used for filament extrusion processes. FDM is historically associated with the trademarked terminology of Stratasys, while FFF is widely used as a generic process name.

\---

## 9.2 Resin-Based Processes

These technologies use **liquid photopolymer resin**, which is selectively cured using light.

### SLA — Stereolithography

Uses a focused laser or optical system to cure resin layer by layer.

### DLP — Digital Light Processing

Uses a digital light projector to cure an entire layer or large portion of a layer at once.

### MSLA / LCD Resin Printing

Uses an LCD masking system with a UV light source to cure resin selectively.

### Characteristics

Resin technologies are useful when:

* fine detail is required,
* small complex geometries must be reproduced,
* smooth surfaces are important,
* miniature prototypes are needed.

\---

# 10\. Powder-Based Processes

These processes use powder as the starting material.

### SLS — Selective Laser Sintering

A laser selectively sinters regions of a powder bed to form the object.

### SLM — Selective Laser Melting

A high-energy laser fully melts metal powder in selected regions.

### DMLS — Direct Metal Laser Sintering

A metal additive-manufacturing process using powder fusion, commonly applied to engineering metal parts.

### Characteristics

Powder-based systems are useful for:

* complex geometry,
* functional engineering components,
* lattice structures,
* metal prototypes,
* parts that may be difficult to fabricate using conventional machining.

\---

# 11\. Other Additive-Manufacturing Families

### Material Jetting

Liquid photopolymer or other build material is deposited through nozzles and selectively cured.

### Binder Jetting

A liquid binder is selectively deposited onto a powder bed to join particles into a green part, followed by additional processing when required.

### Sheet Lamination

Thin sheets of material are bonded together and cut or formed layer by layer.

### Directed Energy Deposition (DED)

Material, often powder or wire, is deposited directly into a melt pool created by an energy source such as a laser.

\---

# 12\. Material-State View of 3D Printing

A useful way to remember the major technologies is:

|Material Form|Examples|Representative Processes|
|-|-|-|
|**Solid filament**|PLA, PETG, ABS|FDM / FFF|
|**Liquid resin**|Photopolymer resin|SLA, DLP, MSLA|
|**Powder**|Nylon powder, metal powder|SLS, SLM, DMLS|
|**Powder + binder**|Ceramic/metal powders|Binder Jetting|
|**Sheet**|Polymer/paper/metal sheets|Sheet Lamination|
|**Wire / Powder Feed**|Engineering metals|DED|

> \*\*Important terminology:\*\* The commonly encountered acronyms are \*\*SLA, SLS, SLM, FDM/FFF, DLP, MSLA, DMLS, DED\*\*, etc. "SLC" is not one of the main mainstream additive-manufacturing process families; it may refer to a specific vendor or terminology in a particular context.

\---

# 13\. FDM Workflow Used in This Project

The actual fabrication workflow was:

```text
Functional Wallet 3D Model
        ↓
Import into Bambu Studio
        ↓
Scale to 90%
        ↓
Check Weight / Material Usage
        ↓
Orient Horizontally
        ↓
Configure Supports
        ↓
Set Brim
        ↓
Set Infill = 10% Grid
        ↓
Slice
        ↓
Estimated Print Time ≈ 2 Hours
        ↓
Print with PLA Basic
```

\---

# 14\. Software Used — Bambu Studio

The slicing software used was **Bambu Studio**.

Bambu Studio is a slicer and printer-management application built around project-based workflows and optimized slicing. It supports operations such as:

* importing 3D models,
* scaling,
* orientation,
* auto-arrangement,
* support generation,
* brim generation,
* infill configuration,
* slicing,
* G-code generation,
* previewing toolpaths,
* and printer monitoring.

Bambu Studio also supports tree, normal, and hybrid support structures, making it suitable for complex model geometry.

\---

# 15\. Printer Used — Bambu Lab H2S

The fabrication was carried out using the **Bambu Lab H2S**, a large-format **single-nozzle FDM 3D printer**.

The H2S was introduced as a high-speed, large-build-volume single-nozzle machine. Bambu Lab specifies a **340 × 320 × 340 mm** build volume, up to **1,000 mm/s** toolhead speed, and **20,000 mm/s²** maximum toolhead acceleration. citeturn627906view1turn999027search0

## 15.1 Detailed H2S Specifications

|Category|Specification|
|-|-|
|**Printing Technology**|Fused Deposition Modeling (FDM)|
|**Build Volume**|**340 × 320 × 340 mm³**|
|**Chassis**|Aluminum, steel, plastic and glass|
|**Physical Dimensions**|**492 × 514 × 626 mm³**|
|**Net Weight**|**30 kg** (standard H2S)|
|**Laser Edition Weight**|30.5 kg|
|**Hotend**|All-metal|
|**Extruder Gear**|Hardened steel|
|**Nozzle**|Hardened steel|
|**Maximum Nozzle Temperature**|**350 °C**|
|**Included Nozzle**|**0.4 mm**|
|**Supported Nozzle Sizes**|0.2 / 0.4 / 0.6 / 0.8 mm|
|**Filament Diameter**|**1.75 mm**|
|**Filament Cutter**|Built-in|
|**Extruder Motor**|High-precision PMSM (Permanent Magnet Synchronous Motor)|
|**Maximum Heatbed Temperature**|**120 °C**|
|**Supported Build Plates**|Textured PEI, Smooth PEI|
|**Maximum Toolhead Speed**|**1,000 mm/s**|
|**Maximum Toolhead Acceleration**|**20,000 mm/s²**|
|**Maximum Flow — Standard Hotend**|**40 mm³/s**|
|**Maximum Flow — Optional High-Flow Hotend**|**65 mm³/s**|
|**Active Chamber Heating**|Supported|
|**Maximum Chamber Temperature**|**65 °C**|
|**Pre-filter**|G3|
|**HEPA Filter**|H12|
|**Activated Carbon Filter**|Granulated coconut-shell activated carbon|
|**Live View Camera**|Built-in, 1920 × 1080|
|**Toolhead Camera**|Built-in, 1600 × 1200|
|**BirdsEye Camera**|3264 × 2448 (Laser Edition / applicable upgrade)|
|**Door Sensor**|Supported|
|**Filament Run-Out Sensor**|Supported|
|**Filament Tangle Sensor**|Supported|
|**Filament Odometry**|Supported with AMS|
|**Power-Loss Recovery**|Supported|
|**Touchscreen**|5-inch, 1280 × 720|
|**Storage**|Built-in 8 GB eMMC + USB|
|**Neural Processing Unit**|2 TOPS|
|**Slicer**|Bambu Studio|
|**Operating Systems**|Windows, macOS, Linux|
|**Input Voltage**|100–120 VAC / 200–240 VAC, 50/60 Hz|
|**Maximum Power**|1170 W @ 110 V / 2050 W @ 220 V|
|**Connectivity**|Wi-Fi + USB / software ecosystem|
|**AMS Compatibility**|Compatible with Bambu material-management systems|

**Note:** Maximum toolhead speed is a machine motion specification, not a guarantee that every model will print at 1,000 mm/s. Actual print speed depends on material, geometry, layer height, acceleration limits, extrusion flow, cooling, and process settings.

Bambu Lab also describes the H2S as having **23 sensors and three onboard cameras**, along with an optional Vision Encoder for motion accuracy below 50 microns and automatic hole/contour compensation features. citeturn627906view1

\---

# 16\. Material Used — PLA Basic

The wallet was printed using **PLA Basic**.

### Why PLA is widely used for prototyping

PLA is popular in educational and prototyping environments because it generally offers:

* easy printability,
* good dimensional stability,
* relatively low printing difficulty,
* good surface appearance,
* a broad range of available colours,
* and a comparatively low processing temperature.

For this project, PLA Basic was appropriate because the focus was on learning the complete workflow from digital model to functional prototype.

\---

# 17\. Functional Wallet Model

I selected a **functional wallet model** from an online maker-model source.

The objective was not simply to print a decorative object, but to fabricate something that demonstrates:

* functional geometry,
* controlled dimensions,
* print orientation,
* support strategy,
* infill selection,
* material optimization,
* and practical use.

\---

# 18\. Model Preparation in Bambu Studio

## Step 1 — Import

The wallet model was imported into **Bambu Studio**.

## Step 2 — Scaling

The model was scaled down to **90% of its original size**.

The primary objective was to keep the material usage **below approximately 50 g** while retaining the functional form of the wallet.

### Why scaling matters

Scaling directly affects:

* overall dimensions,
* material consumption,
* print time,
* fit,
* wall proportions,
* and functional usability.

This demonstrated an important design-for-manufacturing concept:

> \*\*The best printed part is not always the biggest or most detailed part; it is the part that satisfies the required function within the available manufacturing constraints.\*\*

\---

# 19\. Model Orientation

The wallet was oriented to **lay horizontally** on the build plate.

Orientation is one of the most important decisions in FDM printing because it affects:

* layer direction,
* mechanical strength,
* surface quality,
* support requirements,
* print time,
* overhang behaviour,
* and bed adhesion.

For a functional component, print orientation should be chosen based on how forces are expected to act on the final part.

\---

# 20\. Support Strategy

### Tree Support

**Tree supports** were enabled for areas requiring support.

Tree supports branch out from a small base and can reduce the amount of contact with the model compared with dense conventional support structures.

This can be especially helpful for:

* overhangs,
* curved surfaces,
* irregular geometry,
* and support-sensitive areas.

### Outer Brim

An **outer brim** was also used.

The brim increases the area of the first layer around the object, improving bed adhesion and reducing the chance of edge lifting or warping.

\---

# 21\. Infill

The wallet was printed using:

**Infill Pattern:** Grid  
**Infill Density:** **10%**

Infill controls the internal structure of the print.

A lower infill percentage generally:

* reduces material use,
* reduces weight,
* reduces print time,

while potentially reducing stiffness and strength.

A **10% grid infill** therefore provided a practical compromise for this prototype where reducing material consumption was important.

\---

# 22\. Slicing and Print Estimate

After the model was:

* scaled,
* oriented,
* supported,
* given a brim,
* and assigned a 10% grid infill,

the model was **sliced in Bambu Studio**.

The slicer generated the estimated toolpaths and predicted a print time of approximately:

> \*\*\~2 hours\*\*

The exact print time can vary depending on printer warm-up, model geometry, layer settings, speeds, accelerations, support generation, and other machine parameters.

\---

# 23\. Final 3D Printing Configuration

|Parameter|Selected Setting|
|-|-|
|**Printer**|Bambu Lab H2S|
|**Process**|FDM / FFF|
|**Material**|PLA Basic|
|**Model**|Functional Wallet|
|**Scale**|**90%**|
|**Target Material Usage**|**< 50 g**|
|**Orientation**|Horizontal / laid flat|
|**Support**|Tree Support|
|**Bed Adhesion**|Outer Brim|
|**Infill Pattern**|Grid|
|**Infill Density**|**10%**|
|**Slicer**|Bambu Studio|
|**Estimated Print Time**|**\~2 hours**|

\---

# 24\. Laser Cutting vs 3D Printing

These two processes demonstrate opposite manufacturing philosophies.

|Feature|Laser Cutting|3D Printing|
|-|-|-|
|**Manufacturing Type**|Subtractive / sheet processing|Additive manufacturing|
|**Basic Action**|Removes or marks material|Adds material layer by layer|
|**Input**|2D design / vector or raster|3D model|
|**Typical Material Form**|Sheet|Filament / resin / powder etc.|
|**Workflow Software**|RDWorks V8|Bambu Studio|
|**Process Used**|CO₂ laser cutting / scanning|FDM|
|**Material Used Here**|Acrylic|PLA Basic|
|**Geometry**|Primarily 2D / planar|Fully 3D|
|**Main Strength**|Fast sheet cutting and engraving|Rapid functional 3D prototyping|
|**Main Constraint**|Material and heat limitations|Layering, support, print orientation|
|**Prototype Output**|Flat fabricated component|Volumetric functional object|

\---

# 25\. Key Learning Outcomes

This week's work expanded the understanding of **digital manufacturing beyond CAD modeling**.

### 1\. Design Must Match the Manufacturing Process

A design needs to be created with the final fabrication method in mind.

For laser cutting, geometry must be compatible with vector/raster processing and material thickness.

For 3D printing, geometry must be compatible with layer-by-layer deposition, overhang limits, supports, and build orientation.

### 2\. Software Is Part of Manufacturing

RDWorks V8 and Bambu Studio were not merely file viewers.

They acted as the bridge between:

**Digital Geometry → Machine Instructions → Physical Output**

### 3\. Manufacturing Parameters Affect the Final Result

Small changes in:

* power,
* speed,
* orientation,
* support,
* infill,
* scaling,
* and adhesion strategy

can significantly change the final prototype.

### 4\. Material Optimization Matters

The wallet exercise demonstrated that a functional result can be obtained while deliberately controlling material consumption.

Scaling the model to **90%** and using **10% grid infill** helped move the design toward the target of staying below **50 g** of material.

### 5\. Prototyping Is an Iterative Process

A digital model is only the beginning.

A complete engineering workflow is:

```text
Design
  ↓
Prepare
  ↓
Fabricate
  ↓
Observe
  ↓
Measure
  ↓
Improve
  ↓
Re-fabricate
```

That iteration is where digital fabrication becomes engineering rather than simply "printing a model."

\---

# 26\. Reflection

This week gave me practical exposure to two very different manufacturing technologies.

With **laser cutting**, I learned how an artistic reference can be transformed into a fabrication-ready vector design and then processed through a CO₂ laser using scan and cut operations. Producing both black and transparent acrylic variants showed how the **same digital geometry can create very different visual results depending on the material**.

With **3D printing**, I learned how a 3D model must be prepared for the physical constraints of additive manufacturing. Scaling the functional wallet to **90%**, orienting it horizontally, using **tree support**, adding an **outer brim**, and selecting **10% grid infill** demonstrated how manufacturing decisions directly influence material consumption, stability, print time, and functionality.

The larger takeaway is that **digital fabrication is not simply about making objects — it is about translating digital intent into physical reality while balancing constraints, materials, geometry, time, and process capability.**

\---

# 27\. Tools \& Technologies Used

### Laser Cutting

* **CO₂ Laser Cutter**
* **RDWorks V8**
* **DXF**
* Acrylic Sheet
* Vector Illustration / Image Processing

### 3D Printing

* **Bambu Lab H2S**
* **Bambu Studio**
* **FDM / FFF**
* **PLA Basic**
* Tree Supports
* Outer Brim
* 10% Grid Infill

\---

# 28\. Process Summary

```text
                         WEEKLY DIGITAL FABRICATION

     LASER CUTTING                              3D PRINTING
           │                                        │
           ▼                                        ▼
   Arthur Morgan Image                     Functional Wallet Model
           │                                        │
           ▼                                        ▼
   Illustration / Vectorization                 Import
           │                                        │
           ▼                                        ▼
         DXF                                   Scale 90%
           │                                        │
           ▼                                        ▼
      RDWorks V8                              Orientation
           │                                        │
           ├── Scan Mode                            ├── Tree Support
           │                                        ├── Outer Brim
           └── Cut Mode                             └── 10% Grid Infill
           │                                        │
           ▼                                        ▼
      CO₂ Laser Cutter                         Bambu Lab H2S
           │                                        │
           ▼                                        ▼
   Acrylic Prototypes                         PLA Prototype
   Black + Transparent                          \~2 Hour Estimate
```

\---

## 29\. References

1. **Bambu Lab — H2S Technical Specifications**  
https://bambulab.com/h2s
2. **Bambu Lab — H2S Product Announcement / Technical Overview**  
https://blog.bambulab.com/h2s-the-ultimate-single-nozzle-3d-printer-now-bigger-than-ever/
3. **Bambu Lab — Bambu Studio (Official GitHub Repository)**  
https://github.com/bambulab/BambuStudio
4. **General additive-manufacturing terminology:**  
FDM / FFF, SLA, DLP, MSLA, SLS, SLM, DMLS, Binder Jetting, Material Jetting, Sheet Lamination, and Directed Energy Deposition.

\---

## 30\. Portfolio Caption

> \*\*This week, I explored two sides of digital fabrication — subtractive and additive manufacturing. I converted an Arthur Morgan illustration into a DXF workflow for CO₂ laser cutting and produced acrylic variants using scan and cut operations. I also prepared and printed a functional wallet on a Bambu Lab H2S using PLA Basic, optimizing the model to 90% scale, 10% grid infill, tree supports, and an outer brim. The experience reinforced a key engineering lesson: the digital design is only half the job; the manufacturing process, material, constraints, and parameter choices determine how that design becomes reality.\*\*

