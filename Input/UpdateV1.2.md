# RIGSTORM HUB — V1.2 CHANGE REQUEST

The current RigStorm Hub website is finished, functional, and visually good.

**Do NOT redesign or rebuild the website.**

Make only the changes below.

---

# 1. FIX COMPANY LOGO PRESENTATION — SITE-WIDE

The current company logos are displayed inside rectangular bordered containers.

The logos themselves are correct, but the surrounding rectangular boxes make them look disconnected from the interface.

### Problem

Currently the visual treatment is effectively:

```text
┌──────────────────────┐
│       COMPANY LOGO   │
└──────────────────────┘
```

The rectangular container should NOT be the visual focus.

### Desired result

The company logo should feel naturally integrated into the card/interface:

```text
        COMPANY LOGO

Company Name
Category
Description
```

The logo should visually sit directly within the design rather than appearing inside a generic UI box.

---

# 2. REMOVE THE GENERIC LOGO BOX

Across the **entire website**, remove the unnecessary rectangular border/container surrounding company logos.

This applies everywhere company logos appear, including:

* Homepage
* Companies page
* Company cards
* Company detail pages
* Footer company list
* Resources
* Navigation where applicable
* Any other company-logo component

Do NOT simply hide the border while leaving excessive empty container space.

The logo area itself should be redesigned to naturally accommodate the logo.

---

# 3. CREATE A CLEAN LOGO AREA

Use a reusable company-logo component.

The logo should:

* Preserve its original aspect ratio
* Never stretch
* Never crop
* Never overflow
* Remain visually balanced
* Scale responsively
* Work with both square and wide logos
* Work with transparent and non-transparent logos

Use `object-fit: contain` where appropriate.

The logo area should have enough spacing to prevent visual crowding, but it should NOT look like a button or input field.

---

# 4. LOGO BACKGROUND HANDLING

Do not force every logo into the same visible rectangular background.

If a logo already has its own background or visual treatment, preserve it.

If the logo is transparent, allow it to sit naturally against the existing dark surface.

Do NOT add:

* Generic white boxes
* Generic dark boxes
* Visible rectangular borders
* Unnecessary rounded containers
* Drop shadows around every logo

The existing RigStorm Hub cards should remain the primary visual containers.

The company logo should feel like part of those cards.

---

# 5. LOGO SIZING

Create consistent visual sizing rather than identical physical dimensions.

Different logos naturally have different aspect ratios.

For example:

* A compact square symbol should not become unnecessarily tiny.
* A wide wordmark should not be stretched.
* A logo with transparent whitespace should not be visually oversized because of its file dimensions.

Normalize the **visual footprint**, not the raw image dimensions.

---

# 6. FOOTER LOGOS

Apply the same principle to the company list in the footer.

Currently the footer shows small logos inside individual rectangular boxes.

Remove those boxes.

Use a clean:

**Logo + Company Name**

presentation.

The logos should align consistently without looking like individual UI controls.

Example:

```text
[logo]  RigStorm Labs
[logo]  RigStorm SiteMarket
[logo]  RigStorm LandAura
[logo]  RigStorm Zeyora
[logo]  SkyED
[logo]  RigStorm AdStorm
```

No visible rectangular logo containers.

---

# 7. COMPANY DETAIL PAGES

Apply the same logo treatment to the company profile pages.

The company logo should have stronger presence on the detail page, but still remain integrated into the design.

Do NOT introduce another boxed logo treatment.

Maintain the existing premium SiteMarket-inspired visual language.

---

# 8. RESPONSIVE LOGO BEHAVIOR

Verify the new logo treatment at:

### Desktop

* 1920px
* 1440px
* 1280px

### Tablet

* 1024px
* 768px

### Mobile

* 430px
* 390px
* 375px

Make sure:

* Logos remain correctly proportioned.
* Logos don't become too small.
* Logos don't overflow.
* Cards don't become distorted.
* Footer logos remain aligned.
* No horizontal scrolling is introduced.

---

# 9. COMPANY STATUS UPDATE

Change the status of the companies as follows.

### RigStorm Labs

**ACTIVE**

### RigStorm SiteMarket

**ACTIVE**

### RigStorm LandAura

**ACTIVE**

### RigStorm Zeyora

**IN DEVELOPMENT**

### SkyED

**ACTIVE**

### RigStorm AdStorm

**ACTIVE**

---

# 10. REMOVE "OPERATIONAL"

Do NOT use:

**Operational**

for any company.

Replace it with:

**Active**

The only exception is Zeyora, which must remain:

**In Development**

---

# 11. STATUS CONSISTENCY

Apply these statuses consistently everywhere the company appears:

* Company cards
* Company profile pages
* Companies overview
* Any filters
* Any company directory
* Any other status display

Do not have one page saying `Active` and another saying `Operational`.

Use the centralized company data source so the status only needs to be changed once.

Example:

```js
{
  id: "rigstorm-labs",
  status: "Active"
}
```

```js
{
  id: "sitemarket",
  status: "Active"
}
```

```js
{
  id: "landaura",
  status: "Active"
}
```

```js
{
  id: "zeyora",
  status: "In Development"
}
```

```js
{
  id: "skyed",
  status: "Active"
}
```

```js
{
  id: "adstorm",
  status: "Active"
}
```

---

# 12. STATUS VISUALS

Keep the existing status-pill design language, but update the text.

For consistency:

**ACTIVE**

should use the existing active/positive status styling.

**IN DEVELOPMENT**

should retain the existing Zeyora development styling.

Do not redesign the status system.

---

# 13. PRESERVE EVERYTHING ELSE

Do NOT change:

* Overall page layouts
* Navigation
* Typography
* Colors
* Company descriptions
* Website links
* People section
* Member roles
* Animations
* Page structure
* SiteMarket-inspired design
* Existing company logos

Only fix:

1. The logo-container presentation.
2. Logo responsiveness/visual normalization.
3. Company statuses.

---

# 14. FINAL VERIFICATION

Before completing the change:

### Logos

* No generic rectangular logo boxes remain.
* All company logos use the supplied assets.
* RigStorm Labs logo remains unchanged.
* Logos preserve their original proportions.
* Logos look natural against the existing interface.
* Footer logos use the same visual system.
* Company detail logos use the same visual system.
* Mobile logo presentation works correctly.

### Statuses

| Company             | Status         |
| ------------------- | -------------- |
| RigStorm Labs       | Active         |
| RigStorm SiteMarket | Active         |
| RigStorm LandAura   | Active         |
| RigStorm Zeyora     | In Development |
| SkyED               | Active         |
| RigStorm AdStorm    | Active         |

### Quality

* No horizontal overflow.
* No broken layouts.
* No console errors.
* No broken routes.
* Production build succeeds.

The result should look like the **logos belong to the RigStorm Hub design itself**, rather than being placed inside generic rectangular UI slots.
