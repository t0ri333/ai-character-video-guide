# AI Character Video Creation Guide

_Last updated: 2025-07-07_

## Part 1 – Quick‑Start Overview

### English
Imagine turning your story idea into a short film with AI:

1. **Ideation & prompt writing** – Jot a vivid one‑line description of the scene and your main character.  
2. **Generate a consistent character** – Use Stable Diffusion (or similar) to create a portrait or model‑sheet for your actor. Save the best image.  
3. **Animate / lip‑sync** – Feed the still image and an audio clip into a talking‑head tool (e.g.\ SadTalker) so the mouth and head move naturally.  
4. **Build scenes & edit** – Combine background art, multiple shots, and your animated actor in a video editor.  
5. **Voice, sound & polish** – Generate voice‑over with AI TTS, add music/SFX, colour‑grade, then export.

### Українською
Уявіть, що ваша історія оживає за допомогою ШІ:

1. **Ідея та промпт** – Запишіть яскравий однорядковий опис сцени й персонажа.  
2. **Створення послідовного персонажа** – Згенеруйте портрет у Stable Diffusion, збережіть найкращий.  
3. **Анімація / синхрон губ** – Передайте портрет і аудіо до SadTalker, щоб обличчя заговорило.  
4. **Збір сцени та монтаж** – Поєднайте фон і анімованого героя у відеоредакторі.  
5. **Голос, звук, фінальний штрих** – Згенеруйте озвучку, додайте музику/ефекти, відкоригуйте колір і експортуйте відео.

---

## Part 2 – Step‑By‑Step Learning Roadmap

_For every resource: Name → what it teaches • Price • Why beginner‑friendly • Filter level_

### 1 — Foundations of Generative AI
- **Stable Diffusion Art – Beginner's Guide** – overview & local install • Free • Step‑by‑step screenshots • self‑host  
  <https://stable-diffusion-art.com/beginners-guide/>
- **Stable Diffusion Prompt Book (OpenArt)** – prompt writing examples • Free • Visual cheatsheet • no filter  
  <https://openart.ai/promptbook>
- **Local AI Starter Guide (Reddit)** – running LLMs/SD locally • Free • Plain‑English checklist • self‑host  
  <https://www.reddit.com/r/LocalLLaMA/comments/16y95hk/a_starter_guide_for_playing_with_your_own_local_ai/>

### 2 — Character Design & Consistency
- **DreamBooth Tutorial (Stable Diffusion Art)** – train your own character • Free (Colab) • No GPU needed • self‑host  
  <https://stable-diffusion-art.com/dreambooth/>
- **LoRA Training Guide** – lightweight finetunes • Free (Colab) • Fast & small • self‑host  
  <https://stable-diffusion-art.com/train-lora/>
- **Consistent Faces – 5 Methods** (Reddit + YouTube) – face‑lock tricks • Free • Community demo video • no filter  
  <https://www.reddit.com/r/StableDiffusion/comments/1bzix80/new_tutorial_master_consistent_character_faces/>

### 3 — Voice & Lip‑Sync Tools
- **Bark TTS** – multilingual, emotive speech • Free • One‑click HuggingFace / local • light filter  
  <https://github.com/suno-ai/bark>
- **Coqui XTTS** – high‑quality voice cloning • Free • Simple CLI & GUI front‑ends • self‑host  
  <https://github.com/coqui-ai/TTS>
- **SadTalker** – turn portrait into talking head video • Free • Works inside Automatic1111 • no filter  
  <https://github.com/OpenTalker/SadTalker>
- **Wav2Lip** – precise lip‑sync model • Free • Ready checkpoints • self‑host  
  <https://github.com/Rudrabha/Wav2Lip>

### 4 — AI Video Generation
- **Stable Video Diffusion** – image‑to‑video model • Free • Open weights & Colab demo • no filter  
  <https://github.com/Stability-AI/generative-models>
- **Pika Labs** – text / image → video • Free (beta) • Zero‑setup web UI • light filter  
  <https://pika.art>
- **Runway Gen‑3 Alpha** – high‑fidelity txt→vid • Free trial • Intuitive timeline • light filter  
  <https://runwayml.com/research/introducing-gen-3-alpha>
- **ComfyUI Video Workflows** (Reddit) – node graphs for local vid • Free • Copy‑paste workflows • self‑host  
  <https://www.reddit.com/r/comfyui/comments/1ktj86g/causvid_in_comfyui_fastest_ai_video_generation/>

### 5 — Editing & Post‑Production
- **CapCut Desktop for Mac** – drag‑and‑drop editor w/ AI extras • Free • Super friendly • no filter  
  <https://www.capcut.com/resource/download-capcut-for-mac>
- **DaVinci Resolve (Free)** – pro‑grade editor & Fusion • Free • Huge tutorial ecosystem • self‑host  
  <https://www.blackmagicdesign.com/products/davinciresolve>
- **Deforum Keyframer Macro** – SD keyframes in Resolve • Free • Simple Fusion macro • self‑host  
  <https://github.com/Zarxrax/DeforumKeyframer>

### 6 — Communities & Inspiration
- **r/StableDiffusion** – main SD subreddit • Free • Q&A & prompt swaps • community  
  <https://www.reddit.com/r/StableDiffusion/>
- **r/GenAIvideos** – showcase AI video workflows • Free • Real‑world tips • community  
  <https://www.reddit.com/r/GenAIvideos/>
- **Scott Detweiler (YouTube)** – in‑depth SD lessons • Free • Clear teaching • community  
  <https://www.youtube.com/@ScottDetweiler>
- **Pixaroma (YouTube)** – fun SD projects • Free • Bite‑size demos • community  
  <https://www.youtube.com/@Pixaroma>
- **Stability AI Discord** – official SD hub • Free • Model announcements & help • light filter  
  <https://discord.com/invite/stablediffusion>
- **ComfyUI Discord / Matrix** – workflow support • Free • Node‑level help • self‑host  
  <https://discord.com/invite/qtHUaVNRVM>

---

## Part 3 – Minimal macOS‑Friendly Hardware

| Tier | GPU / Apple Silicon | CPU | RAM | Storage | Notes |
|------|---------------------|-----|-----|---------|-------|
| **Budget** | M1 (8 GB) or NVIDIA RTX 2060 6 GB (eGPU) | 4‑core | 16 GB | 500 GB SSD | Good for 512² images & basic edits |
| **Recommended** | M2 Pro (16 GB) or RTX 3060‑4070 10–16 GB | 8‑core | 32 GB | 1 TB NVMe | Smooth SDXL, lightweight video gen |
| **Pro** | M2 Ultra (32–64 GB) or RTX 4090 24 GB | 12+‑core | 64 GB+ | 2 TB NVMe+ | Fast training, 4K editing, heavy pipelines |

*Tip:* Close other GPU apps when generating; keep macOS & Metal drivers updated for best SD performance.

---

## Part 4 – Prompt Cheat‑Sheet (Character Consistency)

- **Unique token** – coin an uncommon name (e.g. `<AriaZane>`); include it in every prompt.  
- **Reference images / ControlNet** – feed prior renders to maintain face proportions and colours.  
- **Seed locking** – reuse the same seed for near‑identical output; tweak seed ±1–5 for varied poses.  
- **LoRA vs DreamBooth** – use LoRA for quick 5‑min finetunes; DreamBooth for highest fidelity.  
- **Negative prompts** – list unwanted traits ("brown eyes", "extra fingers") to avoid drift.  
- **Versioning** – save model + prompt + seed for each milestone; roll back if new training drifts.

---

## Part 5 – First Project: 30‑Second Pilot Video

| Step | Action | Tool | Time |
|------|--------|------|------|
| 1 | Write one‑line script ("Detective Johansson introduces himself on a rainy street.") | Notes | 5 min |
| 2 | Generate portrait (prompt + seed) | Stable Diffusion (A1111) | 10 min |
| 3 | Make voice‑over (enter lines, choose style) | Bark TTS | 5 min |
| 4 | Animate talking head | SadTalker | 8 min |
| 5 | Generate background ("rainy neon street, night") | Stable Diffusion | 5 min |
| 6 | Import assets, layer video over background | CapCut / DaVinci | 10 min |
| 7 | Add voice track, balance music/SFX | Same editor | 5 min |
| 8 | Add title card & fade transitions | Editor | 5 min |
| 9 | Export MP4 1080p 30 fps (8 Mbps) | Editor | 2 min |
| 10 | Review, note tweaks for v2 | — | — |

You've now created your first AI‑driven character video end‑to‑end — ready to share and iterate!

---

*Happy creating!*  
Feel free to remix, extend, and share this guide with anyone exploring AI storytelling.  
