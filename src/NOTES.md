FIXES:

get contact form situated so info and socials are to the right of the paragraph and font scaled correctly

make header cleaner 

header font next to logo

make bulky text hidden when on mobile

Contact us form messes up when page is too narrow

ADDITIONS:

Quote generation page for things like hourly (including + materials needed, minimum two hour callout), painting (sq footage, if drywall work is needed, if paint is supplied or I'm buying), flooring (sq footage, if glue/any other consumables are needed, baseboards, underlayment)

have a page for inspiration of new trends/modern: color palettes, flooring, tile, technology, appliances, lighting, carpentry, acccessories, etc. (In card style like castles on jp castles were)

dropdown instead of the three router links in header when on mobile/tablet

PAGE FOR COMMERCIAL AND RESIDENTIAL MAINTENANCE PLANS (under services)

add content to each page, style after

large light fading drop shadow on header/footer outlines stretching into body

contact us page with email, phone number, facebook, instagram etc. 

have on services page for each service to be a 100vw by like 20vh column of different services with opaque pic in background and large font in front of it where you can click it and it drops down to a larger version with pics of previous jobs and a description of why it benefits you to keep up with it/remodel/whatever. add pricing to it as well and for jobs that arent hourly have a "request a quote" button they can click that takes them to a quote form to submit. showcase pricing on here

use grid to make things go where they need to be (footer)

GENERAL NOTES:

Incorporate more JavaScript/Java/DB/PHP

figure out fonts: app.vue/body/font-family

color pallettes: cream: #f5efd6
                  sage: #7c8363
                  pine: #31473a

COMPLETED:       

@@@@@@@@@@make header/footer take up static amount of space and have body fill the rest so that minimum is 80% vh for body if header and footer are 10%vh each for example

@@@@@@get textarea in contact page to not be able to maximize beyond form area

@@@@@@center and space contact us
make things sized reactively to screen size and so that main view can change and not overflow into header/footer

media query for custom styling

<picture> for responsive images example:
<picture>
  <source srcset="image-mobile.jpg" media="(max-width: 768px)">
  <source srcset="image-tablet.jpg" media="(max-width: 1024px)">
  <img src="image-desktop.jpg" alt="Responsive Image">
</picture>


Facebook and instagram links in footer as well as email and number?

Mention the referral page for hourly work and major jobs. (Existing clientel only). A pop up that says something like "Returning client? Check out our referral program to earn money/save on future jobs!"


Make the app use best practices/clean code

import primeicons for social medias
