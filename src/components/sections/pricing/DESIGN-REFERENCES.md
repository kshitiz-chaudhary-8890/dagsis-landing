# Pricing reference and direction

Gallery: https://jiro.build/components/pricing

Final direction explicitly selected by the user: Dark premium - charcoal cards, sharp contrast.

Primary references inspected: Pricing Section Lightspeed (separate dark cards, consistent prices/CTA/features), and Pricing 01 Quell (clear recommendation and restrained accent). Final composition has three visible standard plans and a separate Custom plan row, retaining all existing prices, features, links and billing behavior. The heading outside the dark panel follows the preceding Dagsis sections, per the user's instruction.

https://cdn.jiro.build/Lightspeed/Pricing%20Section%20-%20Lightspeed.png
https://cdn.jiro.build/Quell/Thumbnails/Pricing%2001%20Quell.png

Skills: high-end-visual-design, redesign-existing-projects, impeccable (bolder and craft-floor). The user's chosen dark palette takes precedence over the skills' generic warning about dark sections. Product claims and amounts remain unchanged; original pricing content is marked as placeholder in src/content/pricing.ts.

Earlier connected columns and selected-plan detail layouts were rejected and replaced. Their obsolete styles and selection state are removed.

Responsive: three cards on large screens; compact Free row above two paid plans on tablet; all plans stacked on mobile. Native billing radio keyboard behavior and comparison table retained. No new packages or image assets required.

Browser surfaces are unavailable in this environment; rendered visual QA is pending. TypeScript, ESLint, contrast and production build checks are run separately.
