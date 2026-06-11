# Threads Content Playbook — Protato

**Platform vibe**: Conversational, reflective, design-conscious, less hustle, more "here is what i am learning"
**Voice**: Someone who builds things and thinks about craft out loud. Not a brand. Not a guru.
**Posting rhythm**: 1-3 posts/day. No threading-for-algorithm tricks. Just good posts.

---

## Content Buckets

### Bucket 1: Thinking Out Loud (35%)

Threads rewards reflection, not hot takes. Post what you are actually figuring out as a builder.

**Post Ideas:**

i have been thinking about why most app screenshots look the same.
everyone uses the same device frame. same angle. same gradient.
and i think the reason is: most mockup tools only give you one option.
so every screenshot ends up looking like every other screenshot.
protato started because i wanted more control without more complexity.

---

my design philosophy for protato is simple:
the app should not make you think about the app.
you should think about your screenshot, your lighting, your text.
the tool should disappear.
that is why there is no layers panel. no artboards. no project browser.
just a device and your work.

---

something i notice about indie devs:
they spend 6 months on the app and 6 minutes on the screenshots.
and i get it. screenshots are not the fun part.
but they are the first thing a potential user sees.
protato exists to bridge that gap.
so you can spend 6 months on the app and 60 seconds on the mockup.

---

i rebuilt the lighting engine in protato 4 times.
not because users asked for it.
because i kept looking at the output and thinking "this could look better."
the difference between v1 and v4 is subtle in the UI.
but the output is night and day.
most of building software is invisible work.

---

one thing i learned shipping protato on both mac and ios:
the mac version is for production. the ios version is for iteration.
start a mockup on your phone while commuting.
open it on your mac to add animations and export.
icloud sync makes this seamless.
but the real insight is: different devices serve different mindsets.

### Bucket 2: Process & Craft (25%)

Threads users love seeing how things are made. Show the process behind Protato's design and development.

**Post Ideas:**

here is how protato renders a single frame:
background → shadow → text behind → 3d device → text in front.
5 layers composited in real time using metal compute shaders.
all happening at 60fps while you drag a slider.
the user just sees "it works."
the engineering is invisible.
that is the goal.

---

device selection in protato v2 vs v1:
v1: a dropdown list. functional but boring.
v2: horizontal scroll with 3d previews of each model. you can see the color, the material, the shape before selecting.
small change. big difference in how it feels to use.

---

i spent 3 days on the aspect ratio picker.
not because it is complex.
because getting 10 options to feel like 1 choice is hard.
the default is 9:16 because that is what most app store screenshots use.
but changing it should feel like turning a knob, not filing a form.

---

the material system in protato is 5 sliders:
metallic, roughness, emissive, clearcoat, specular.
most users will tap "glossy" or "matte" and never touch the sliders.
but the sliders exist for the people who want precision.
good design serves both.

### Bucket 3: User Outcomes (20%)

Show what people actually make with Protato. This is more powerful on Threads than feature lists.

**Post Ideas:**

someone used protato to make their app store screenshots yesterday.
they imported a screenshot, picked dramatic lighting, added a headline, exported.
the whole thing took under 2 minutes.
they told me it used to take 30 minutes in figma.
that is the gap protato fills.

---

a user showed me their app landing page.
the hero section was a protato mockup with iphone + macbook in one scene.
they said it took 5 minutes to set up.
the rest of the page took 2 weeks.
the mockup was not the bottleneck.

---

the most common thing i hear from protato users is not about features.
it is: "i wish i found this sooner."
that tells me the problem was not that tools didn't exist.
it was that the existing tools felt like work.

### Bucket 4: Personal Notes (15%)

Threads is a personal platform. Let people know who is building this.

**Post Ideas:**

i am a solo developer making a mac and ios app.
no team. no funding. no investors.
just me, swift, and a lot of coffee.
some days i wonder if anyone will notice.
then someone sends me a screenshot of their app store listing using protato.
and i keep going.

---

i started protato because i was tired of making mockups for my own apps.
i built the first version for myself.
then i put it on the app store to see if anyone else wanted it.
turns out a lot of people hate making mockups.

---

the best part of building protato is seeing what people make with it.
i built a tool. they build apps that reach thousands of people.
i am one step removed from the impact.
that is a good place to be.

---

ship velocity as a solo dev:
protato v1: 3 months
protato v2: 2 months
protato v3: 1 month
the speed comes from knowing the codebase.
but also from knowing what users actually need.
shipping is a skill you build like any other.

### Bucket 5: Relatable Builder Observations (5%)

Light, observational, low-effort posts that connect with the audience.

**Post Ideas:**

the cycle of building a mac app:
1. this is brilliant
2. this is broken
3. why does nobody tell me these things
4. oh. i forgot to handle that edge case.
5. this is brilliant again.
repeat every 3 hours.

---

you know your app is niche when the most requested feature is "more device colors."
i love protato users.

---

ship log: fixed a bug where shadows rendered behind the background.
nobody will notice.
but the shadows know.

---

## Thread Structures

### Thread 1: How Protato Handles the Full Pipeline

**Post 1:**
i built protato because making app store screenshots felt like 5 tools trying to do 1 job.
here is how one app handles the entire pipeline:

**Post 2:**
frame → lighting → background → text → export.
that is the entire workflow.
5 steps. one app. 90 seconds.

**Post 3:**
frame:
18 device models. iphone, ipad, macbook.
each with accurate colors, materials, and hardware details.
drag a screenshot from finder onto the device.
it wraps to the curved display. reflections included.

**Post 4:**
lighting:
3 presets (studio, dramatic, flat).
4 per-light sliders (key, fill, rim, back).
ibl for environment reflections.
all real time. no render queue.

**Post 5:**
background:
solid, gradient, mesh, image, or none.
80+ two-color gradients. 30+ mesh blends.
or import your own image.

**Post 6:**
text:
system, rounded, serif, or monospaced.
solid or gradient fill. stroke. 9 weight options.
place it in front of the device or behind it.

**Post 7:**
export:
png or jpeg. 1x, 2x, or 3x. up to 4k.
videos at 720p, 1080p, or 1440p.
that is it. one app. done.

---

### Thread 2: The Design Decisions Behind Protato

**Post 1:**
design decisions i made building protato that users probably never notice:

**Post 2:**
the default device is iphone 17 pro max in cosmic orange.
not silver. not black.
because the orange creates contrast against most backgrounds.
it makes the first impression memorable.

**Post 3:**
the default lighting is studio, not flat.
flat is safer. studio has more character.
first impressions should have character.

**Post 4:**
there is no "new project" button.
protato opens to a ready-to-use scene.
because the hardest part of any creative tool is starting.
protato skips that step.

**Post 5:**
the settings sheet on ios is a bottom sheet, not a full screen.
because you need to see the canvas while tweaking parameters.
the preview is more important than the controls.

**Post 6:**
auto-save every 60 seconds.
no "save as." no "revert to saved."
the project is always where you left it.
because saving should not be a thought you have.

---

## Viral Post Formats

### The "Unpacking a Decision" Format

i chose orange.
the default device color in protato is cosmic orange.
not silver. not black. orange.
here is why:

most mockups use silver or black because it is safe.
safe is forgettable.

orange creates contrast against any background.
it makes the device feel like an object, not a template.
and it signals that this app is not afraid of color.

small decisions compound into identity.

**Why it works**: Design thinking content. Threads users love understanding the "why" behind decisions.

### The "Before/After" Format (Threads Version)

before protato:
- open figma
- find a device frame community file
- resize the frame to match the screenshot
- manually fix the perspective
- add a background
- export at the wrong resolution
- start over

after protato:
- open protato
- drag screenshot onto the device
- tap dramatic lighting
- export

speed is a feature.

**Why it works**: Threads readers have longer attention spans. The list format works well here.

### The "Slow Build" Format

i have been working on protato for over a year.
the lighting engine alone went through 4 rewrites.
the device models were rebuilt twice.
the timeline was rewritten from scratch.

users will never see any of that.
they will open the app, drag a screenshot, and export.
that is the point.

the best tools hide the complexity.

**Why it works**: Threads rewards vulnerability and long-term thinking. This resonates more than "i shipped 3 features this week."

### The "Letter to My Past Self" Format

if i could tell myself one thing before starting protato:

your first version will be embarrassing.
ship it anyway.

the lighting will look bad.
the device models will have janky edges.
the timeline will crash if you look at it wrong.
ship it anyway.

users will tell you what matters.
you cannot know before they use it.
so stop polishing and ship.

**Why it works**: Universal builder experience. Highly shareable. Works as standalone post or thread opener.

---

## Posting Cadence

| Day | Vibe | Example |
|-----|------|---------|
| Monday | Thoughtful / reflective | Design philosophy, lesson learned |
| Tuesday | Visual / craft | Before/after, process insight |
| Wednesday | Personal | Solo dev experience, behind the scenes |
| Thursday | Educational | Tip, workflow, feature spotlight |
| Friday | Community / shoutout | User work, reply to someone |
| Saturday | Casual | Observation, light post, question |
| Sunday | Rest or build log | What i am working on this week |

## Hashtag Strategy
- Use 1-3 max. Threads penalizes hashtag stuffing.
- `#protato` on every post.
- Secondary: `#indiedev` `#macapps` `#uidesign` `#buildinpublic` `#appstore`

## Engagement Style

| Scenario | Reply |
|----------|-------|
| Someone asks about mockup tools | "protato handles device frames, lighting, text, and export in one app. free to try if you are curious." |
| Someone ships their app | "congrats on shipping. the screenshots look clean 🔥" |
| Someone shares a mockup struggle | "yeah that part is frustrating. protato skips all of that — just drag and export." |
| Someone replies with a question | Answer genuinely. Offer to show a screenshot. Follow up. |

**Key difference from Twitter**: On Threads, engage like a human having a conversation, not a brand responding to a customer. Reply to people's posts without linking Protato. Build presence first, pitch second.

## Bio Strategy

**Bio format:**
building protato — 3d mockup app for mac + ios
realitykit. metal. swift.
↓ try it
protato.app

**Avatar**: The Protato logo on a clean background, or a photo of you if you are comfortable being the face of the product.

**Link**: protato.app (use the link-in-bio feature)

## Voice Reference

| Do | Don't |
|----|-------|
| Write like you are talking to a friend who also builds things | Write like a startup founder announcing a funding round |
| Share what you are learning in real time | Polish every post until it sounds like a press release |
| Admit when something is hard or broken | Pretend everything is perfect |
| Use "i" and "we" naturally | Use "protato" as the subject of every sentence |
| End posts with an invitation to think, not a link | End every post with "download now" |
