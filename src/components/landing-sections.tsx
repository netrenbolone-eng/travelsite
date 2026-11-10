import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check, Clock3, Flower2, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { categories } from "@/data/categories";
import { faqIds } from "@/data/faq";
import { reviews } from "@/data/reviews";
import { tours } from "@/data/tours";
import { site } from "@/config/site";
import { ru } from "@/i18n/ru";
import { en } from "@/i18n/en";
import type { Dictionary, Locale } from "@/i18n/types";
import { BookingDialog } from "@/components/booking-dialog";

function SectionHeading({ title, subtitle, number }: { title: string; subtitle: string; number: string }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div><h2 className="display-heading">{title}</h2><p>{subtitle}</p></div>
    </div>
  );
}

export function CategoriesSection({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <section className="section-pad" id="categories">
      <div className="container">
        <SectionHeading title={dictionary.categories.title} subtitle={locale === "ru" ? "Четыре способа увидеть страну по-своему." : "Four ways to see the country your way."} number="01" />
        <div className="category-grid">
          {categories.map((category, index) => (
            <a href="#tours" className={`category-tile category-tone-${index + 1}`} key={category.id}>
              <ImagePlaceholder src={category.image} fileName={category.image.split("/").at(-1) ?? "category.jpg"} alt={category.alt[locale]} width={1000} height={1200} className="category-image" />
              <div className="category-meta"><span>{category.count}</span><ArrowUpRight className="size-5" /></div>
              <h3>{dictionary.categories.items[category.id]}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function TourCard({ tour, locale, dictionary, index }: { tour: (typeof tours)[number]; locale: Locale; dictionary: Dictionary; index: number }) {
  const isRu = locale === "ru";
  return (
    <Card className="tour-card group overflow-hidden border-border p-0 shadow-none">
      <div className="tour-photo-wrap">
        <ImagePlaceholder src={tour.image} fileName={tour.image.split("/").at(-1) ?? "tour.jpg"} alt={tour.name[locale]} width={1000} height={1250} className={`tour-photo tour-photo-${index + 1}`} />
        <Badge className="tour-badge">{tour.badge === "hit" ? dictionary.tours.hit : dictionary.tours.fresh}</Badge>
        <span className="tour-duration"><Clock3 className="size-3.5" />{tour.duration[locale]}</span>
      </div>
      <CardContent className="tour-card-content p-4 sm:p-5">
        <div className="tour-rating"><Star className="size-4 fill-brand-orange text-brand-orange" /><b>{tour.rating}</b><span>({tour.reviewCount} {dictionary.tours.reviews})</span></div>
        <h3 className="tour-name">{tour.name[locale]}</h3>
        <p className="tour-description">{tour.description[locale]}</p>
        <div className="tour-card-bottom"><p className="tour-price"><span>{dictionary.tours.from}</span><strong>${tour.price}</strong><small>{isRu ? "/ чел." : "/ person"}</small></p><span className="tour-route">{tour.category === "excursions" ? "VN / DAY TRIP" : "VN / PRIVATE"}</span></div>
        <div className="tour-actions"><BookingDialog tour={tour} locale={locale} dictionary={dictionary} /><a className="tour-whatsapp" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(isRu ? `Здравствуйте! Интересует тур «${tour.name.ru}».` : `Hi! I'm interested in the ${tour.name.en} tour.`)}`} target="_blank" rel="noreferrer" aria-label={`${dictionary.tours.ask}: ${tour.name[locale]}`}><MessageCircle className="size-5" /></a></div>
      </CardContent>
    </Card>
  );
}

export function ToursSection({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <section className="section-pad section-warm" id="tours">
      <div className="container">
        <SectionHeading title={dictionary.tours.title} subtitle={dictionary.tours.subtitle} number="02" />
        <div className="tour-grid">{tours.map((tour, index) => <TourCard key={tour.id} tour={tour} locale={locale} dictionary={dictionary} index={index} />)}</div>
        <div className="center-action"><a href="#lead" className="text-link">{dictionary.tours.all}<ArrowDownRight className="size-4" /></a></div>
      </div>
    </section>
  );
}

export function WorkflowSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="section-pad" id="how-it-works">
      <div className="container">
        <SectionHeading title={dictionary.workflow.title} subtitle={dictionary.workflow.subtitle} number="03" />
        <div className="steps-grid">{dictionary.workflow.steps.map((step, index) => <div className="step-item" key={step.title}><span className="step-index">0{index + 1}</span><span className="step-icon">{index === 0 ? <MessageCircle /> : index === 1 ? <Check /> : index === 2 ? <span className="deposit-mark">$</span> : <MapPin />}</span><h3>{step.title}</h3><p>{step.description}</p>{index < 3 && <span className="step-connector" aria-hidden="true" />}</div>)}</div>
      </div>
    </section>
  );
}

export function ReviewsSection({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <section className="section-pad section-warm" id="reviews">
      <div className="container">
        <SectionHeading title={dictionary.reviews.title} subtitle={dictionary.reviews.subtitle} number="04" />
        <div className="review-grid">{reviews.map((review) => <Card className="review-card" key={review.id}><CardContent className="p-5 sm:p-6"><div className="review-stars" aria-label="5 out of 5 stars">{Array.from({ length: review.rating }, (_, index) => <Star className="size-4 fill-brand-orange text-brand-orange" key={index} />)}</div><p className="review-text">“{review.text[locale]}”</p><div className="review-author"><span className="review-avatar">{review.name.charAt(0)}</span><span><b>{review.name}</b><small>{review.origin[locale]} · {review.tour[locale]}</small></span><Check className="review-check size-4" aria-label="Verified demo review" /></div></CardContent></Card>)}</div>
        <p className="demo-notice">{dictionary.reviews.demoNotice}</p>
        <div className="review-links"><a className="external-review-link" href={site.googleReviewsUrl} target="_blank" rel="noreferrer">{dictionary.reviews.more}<ArrowUpRight className="size-4" /></a><a className="external-review-link" href={site.tripadvisorUrl} target="_blank" rel="noreferrer">{dictionary.reviews.moreTripadvisor}<ArrowUpRight className="size-4" /></a></div>
      </div>
    </section>
  );
}

export function FAQSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="section-pad" id="faq">
      <div className="container faq-layout">
        <div><SectionHeading title={dictionary.faq.title} subtitle={dictionary.faq.subtitle} number="05" /><a className="text-link faq-contact" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">{dictionary.faq.contact}<ArrowUpRight className="size-4" /></a></div>
        <Accordion type="single" collapsible className="faq-list">{faqIds.map((id) => <AccordionItem value={id} key={id}><AccordionTrigger>{dictionary.faq.items[id].question}</AccordionTrigger><AccordionContent>{dictionary.faq.items[id].answer}</AccordionContent></AccordionItem>)}</Accordion>
      </div>
    </section>
  );
}

export function ContactsSection({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <section className="section-pad section-warm" id="contacts">
      <div className="container">
        <SectionHeading title={dictionary.contacts.title} subtitle={dictionary.contacts.subtitle} number="06" />
        <div className="contact-layout">
          <div className="contact-details">
            <div className="contact-detail"><MapPin /><div><span>{dictionary.contacts.address}</span><b>{site.address}</b></div></div>
            <div className="contact-detail"><Clock3 /><div><span>{dictionary.contacts.hours}</span><b>{site.hours[locale]}</b></div></div>
            <div className="contact-detail"><Phone /><div><span>{dictionary.contacts.phone}</span><a href={`tel:${site.phone}`}>{site.phone}</a></div></div>
            <div className="contact-detail"><MessageCircle /><div><span>{dictionary.contacts.email}</span><a href={`mailto:${site.email}`}>{site.email}</a></div></div>
            <Button asChild className="contact-cta"><a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle className="size-4" />{dictionary.header.whatsapp}</a></Button>
          </div>
          <div className="map-frame"><iframe src={site.mapEmbed} title={dictionary.contacts.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const copy = locale === "ru" ? ru.footer : en.footer;
  return (
    <footer className="site-footer">
      <div className="container footer-main"><div className="footer-brand"><a href={`/${locale}`} className="wordmark"><Flower2 className="size-7 text-brand-orange" />{site.name.toUpperCase()}</a><p>{copy.tagline}</p></div><div className="footer-column"><b>{copy.social}</b><a href={site.social.instagram} target="_blank" rel="noreferrer">Instagram<ArrowUpRight /></a><a href={site.social.facebook} target="_blank" rel="noreferrer">Facebook<ArrowUpRight /></a><a href={site.telegram} target="_blank" rel="noreferrer">Telegram<ArrowUpRight /></a></div><div className="footer-column"><b>{copy.payments}</b><div className="payment-list">{[...site.paymentMethods, dictionary.form.transfer, dictionary.form.cash].map((method) => <span key={method}>{method}</span>)}</div><a href={site.depositUrl} target="_blank" rel="noreferrer">{dictionary.form.paymentLink}<ArrowUpRight /></a></div><div className="footer-language"><span>{locale === "ru" ? "ЯЗЫК" : "LANGUAGE"}</span><Link href="/ru" aria-current={locale === "ru" ? "page" : undefined}>RU</Link><span>/</span><Link href="/en" aria-current={locale === "en" ? "page" : undefined}>EN</Link></div></div>
      <div className="container footer-bottom"><span>{copy.rights}</span><Link href={`/${locale}/privacy-policy`}>{copy.privacy}</Link></div>
    </footer>
  );
}

export function FloatingContact({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const message = locale === "ru" ? "Здравствуйте! Хочу узнать о турах во Вьетнаме." : "Hi! I'd like to ask about Vietnam tours.";
  return <div className="floating-contact" aria-label={locale === "ru" ? "Связаться с нами" : "Contact us"}><a className="floating-whatsapp" href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" aria-label={dictionary.sticky.whatsapp}><MessageCircle /><span>{dictionary.sticky.whatsapp}</span></a><a href={site.telegram} target="_blank" rel="noreferrer" aria-label={dictionary.sticky.telegram}><span className="telegram-symbol">tg</span><span>{dictionary.sticky.telegram}</span></a><a href={`tel:${site.phone}`} aria-label={dictionary.sticky.call}><Phone /><span>{dictionary.sticky.call}</span></a></div>;
}