# Design Patterns

## Core Layout

```css
* { margin:0; padding:0; box-sizing:border-box }
body { font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; background:#f8f9fa; overflow:hidden; height:100vh }
.slide { position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:40px 24px; opacity:0; transform:translateX(100%); transition:all .5s ease; pointer-events:none }
.slide.active { opacity:1; transform:translateX(0); pointer-events:auto }
.slide.prev { opacity:0; transform:translateX(-100%) }
```

## Brand Colours

```css
:root {
  --blue: #2B4DAF;
  --red: #FF4520;
  --white: #ffffff;
  --light-bg: #f8f9fa;
  --text: #1a1a2e;
  --text-light: #666;
}
```

## Progress Dots

```html
<div class="progress">
  <span class="dot active"></span>
  <span class="dot"></span>
  <!-- ... -->
</div>
```

```css
.progress { position:fixed; bottom:20px; left:50%; transform:translateX(-50%); display:flex; gap:8px; z-index:100 }
.dot { width:8px; height:8px; border-radius:50%; background:rgba(0,0,0,.2); transition:all .3s }
.dot.active { background:var(--blue); width:24px }
```

## Navigation (tap/swipe/keyboard)

```javascript
// Tap zones
document.addEventListener('click', e => {
  if(e.clientX > window.innerWidth * 0.65) nextSlide();
  else if(e.clientX < window.innerWidth * 0.35) prevSlide();
});

// Swipe
let touchStartX = 0;
document.addEventListener('touchstart', e => touchStartX = e.touches[0].clientX);
document.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if(Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
});

// Keyboard
document.addEventListener('keydown', e => {
  if(e.key === 'ArrowRight' || e.key === ' ') nextSlide();
  if(e.key === 'ArrowLeft') prevSlide();
});
```

## Animated Score Ring

```html
<svg width="120" height="120" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="50" fill="none" stroke="#eee" stroke-width="8"/>
  <circle class="score-ring" cx="60" cy="60" r="50" fill="none" stroke="var(--red)" 
    stroke-width="8" stroke-linecap="round" stroke-dasharray="314" 
    stroke-dashoffset="314" transform="rotate(-90 60 60)"/>
  <text x="60" y="65" text-anchor="middle" font-size="28" font-weight="700" fill="var(--text)">
    <tspan class="score-num">0</tspan>
  </text>
</svg>
```

Animate with JS: count up number + reduce stroke-dashoffset proportionally.

## Google Search Result Mockup

```html
<div class="search-result">
  <div class="result-url">{domain} › {path}</div>
  <div class="result-title">{title}</div>
  <div class="result-desc">{description}</div>
</div>
```

```css
.search-result { background:#fff; border-radius:12px; padding:16px; text-align:left }
.result-url { font-size:12px; color:#202124 }
.result-title { font-size:18px; color:#1a0dab; margin:4px 0 }
.result-desc { font-size:13px; color:#4d5156; line-height:1.4 }
```

## Chat Bubble Animation

```css
.chat-msg { opacity:0; transform:translateY(10px); animation:chatIn .4s ease forwards }
@keyframes chatIn { to { opacity:1; transform:translateY(0) } }
```

Stagger with animation-delay: 0s, 0.8s, 1.6s, etc.

## Typing Indicator

```html
<div class="typing"><span></span><span></span><span></span></div>
```

```css
.typing span { display:inline-block; width:6px; height:6px; background:#999; border-radius:50%; margin:0 2px; animation:bounce .6s infinite }
.typing span:nth-child(2) { animation-delay:.15s }
.typing span:nth-child(3) { animation-delay:.3s }
@keyframes bounce { 50% { transform:translateY(-4px) } }
```
