<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/e69b79c1-5375-4784-81ae-5e72ce742f5d

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy Notes (Blank Page Fix)

- This project is configured with `base: './'` in `vite.config.ts`, so built assets use relative paths.
- Always deploy the **build output** (`dist`) instead of source files.
- If deploying to GitHub Pages, publish the `dist` folder content (or use an action that builds and deploys `dist`).
