---
name: Development Checklist (not complete yet)
about: A checklist of development steps needed for the release of a visualization.
title: ''
labels: ''
assignees: ''

---

Last updated 5/10/2021 EB

## Insert an edited version of Aaron's checklist

### Performance testing 

#### During development
- [ ] Check that the 'robots' meta tag is added to stop indexing of beta (if the base template was used, this is included)
- [ ]  Push preliminary website to beta URL
- [ ]  Test on a phone; confirm there are no obvious issues

#### Final steps to release
- [ ]  Image optimization: Appropriately size and compress all image files (`png` and `jpg`) (https://squoosh.app/editor).
- [ ]  Serve responsive, web-optimized images using 'srcset' with `.webp` as a primary and `.jpg` or `.png` as fall back  
- [ ]  Tweak code bundles and load order as needed for best performance and lazy loading
- [ ]  Test all links, set to open in new window
- [ ]  Verify the application works on a variety of devices and browsers (Browserstacko on mac)
- [ ]  Use lighthouse to measure performance and notice issues, SEO, and accessibility rating
- [ ]  Run mobile testing with iPhone Safari and Android Internet

### Compliance

#### During development
- [ ]  USGS  header and footer are used (included in base template)
- [ ]  Verify the application/visualization works on the following browsers: Chrome, Safari, Edge, Firefox, Samsung Internet, Internet Explorer 11 (redirect page included in base template) 
- [ ]  Check that components match [USWDS (U.S. Web Design System)](https://designsystem.digital.gov/) _(We aren't using many of them, except for the References section)_
- [ ]  Use [WAVE tool plugin](https://wave.webaim.org/) to verify that we are meeting 508 guidelines

### Web analytics

#### During development
- [ ]  Register application with Google Analytics; create a 'property' under vizlab and add unique tags to app
- [ ] Register application with Google Tag Manager: go to https://tagmanager.google.com/#/home and under the usgs-makerspace account create a new container; connect application to tag manager: go back to the application and the code that links the application to the new container; create 'auto tags' for page views, links, scroll depth (many other tag options exist, add as needed)
- [ ]  Verify USGS script tag exists: in the application make sure the 'general' USGS script tag is added (should already exist if you used the base template)
- [ ] If custom dimensions required (and not using Tag Manager), verify that the custom code does what it should: make sure the application's Google ID is added to the plugging (the rest is setup in the Makerspace-base template). _Currently we add a couple custom dimensions through with use of the Vue Analytics plug in,
 - [ ] Test that Google Analytics events/dimensions are working as expected.  You can use the [GA Debug Chrome plugin](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna?hl=en) to watch the outbound requests, or wait for data to show up in the Google Analytics UI

#### Final steps to release 
- [ ]  Setup specific events that you want to track for things such as image or section view. Again the preferred route is Google Tag Manager, but direct addition to the code is an option)

### Social media / outreach (probable duration 2-4 weeks)



### Steps to public release (probable duration 2-4 weeks)
#### when given confirmation from the project champion that the product, in its current form, is ready
- [ ]  Check that the 'robots' meta tag is present to stop indexing of beta (if the base template was used, this is included)
- [ ]  Confirm that a link to the code (i.e. GitHub) is included
- [ ]  Confirm (with Project Champion) that links to previous visualizations are desired and what those should be and what images should be used. Include in the pre-footer.
- [ ]  Push preliminary website to beta URL (also needed for mobile & performance testing)
- [ ]  Preliminary stakeholder review of beta
- [ ]  Confirm public URL with Web Comm & Group Sponsor
- [ ]  Data methods and references included somewhere in application
- [ ]  Contributors listed in website metadata
- [ ]  Enter meta data for social media tags
- [ ]  Check for registered product names. If found, add disclaimer 'Any use of trade, firm, or product names is for descriptive purposes only and does not imply endorsement by the U.S. Government'
- [ ]  Final content review (IPDS for all hosted applications/visualizations)
- [ ]  Reconciliation of application from final content review
- [ ]  formal demo of application to Group Sponsor and IIDD Director (may be one or separate events)
- [ ]  Group sponsor ✔ (in email)
- [ ]  IIDD Director ✔ (in email)
- [ ]  Take off website "this is preliminary" banner (turns off automatically in with production build, but confirm )
- [ ]  Make Github repository 'readme' file presentable to the public - minimally include project overview and build instructions
- [ ]  Confirm all links work and go to the intended targets


- [ ] Celebrate 🎉
